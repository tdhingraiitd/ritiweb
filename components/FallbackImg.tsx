"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** Image to try if `src` fails to load. */
  fallback: string;
  /** What to do if the fallback fails too: remove the image or hide it. */
  onFail?: "remove" | "hide";
};

/**
 * <img> that swaps to a fallback URL when the main one fails, then removes
 * (or hides) itself if that fails too — the same behaviour as the original
 * site's inline onerror handlers.
 */
export default function FallbackImg({ src, fallback, onFail = "remove", style, ...rest }: Props) {
  const [stage, setStage] = useState(0); // 0 = src, 1 = fallback, 2 = both failed
  const failed = useRef(new Set<string>());
  const ref = useRef<HTMLImageElement>(null);

  const fail = useCallback((url: string) => {
    if (failed.current.has(url)) return; // count each URL once
    failed.current.add(url);
    setStage((s) => Math.min(s + 1, 2));
  }, []);

  // An image can fail before React hydrates and attaches onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
      fail(img.getAttribute("src")!);
    }
  }, [fail]);

  if (stage === 2 && onFail === "remove") return null;

  const current = stage === 0 ? src : fallback;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      {...rest}
      src={current}
      style={stage === 2 ? { ...style, display: "none" } : style}
      onError={() => fail(current)}
    />
  );
}
