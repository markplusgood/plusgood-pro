"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon, LanguagesIcon, MenuIcon } from "lucide-react";
import { useMounted } from "@/lib/hooks";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export const PrintDrawer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
          <MenuIcon className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-auto rounded-lg border bg-background p-6 shadow-lg">
        <div className="mx-auto w-full max-w-sm">
          
          <DialogFooter>
            {mounted && (
              <Button
                variant="outline"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              >
                {resolvedTheme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
              </Button>
            )}
            <Button variant="outline">
              <LanguagesIcon className="size-4" />
            </Button>
            
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
