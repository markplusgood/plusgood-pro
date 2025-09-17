'use client';

import Link from 'next/link';
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks";

export function ThemeAwareHeart() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-center mt-12">
      <Link href="/mamemes" className="text-inherit hover:text-inherit inline-block">
        <span className="heartbeat inline-block" style={{ display: 'inline-block', animation: 'heartbeat 0.821s infinite' }}>
          {resolvedTheme === 'dark' ? '🤍' : '🖤'}
        </span>
      </Link>
    </div>
  );
}