'use client';

import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks";

export function ThemeAwareHeart() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            10% {
              transform: scale(1.1);
            }
          }

          .heartbeat {
            animation: heartbeat 0.441s infinite;
          }
        `}
      </style>
      <div className="flex justify-center mt-12">
        <p className="heartbeat">{resolvedTheme === 'dark' ? '🤍' : '🖤'}</p>
      </div>
    </>
  );
}