"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const TooltipContext = React.createContext<{
  isTouchDevice: boolean
  isOpen: boolean
  setIsOpen: (open: boolean) => void
} | null>(null)

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>
>(({ children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isTouchDevice, setIsTouchDevice] = React.useState(false)

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <TooltipContext.Provider value={{ isTouchDevice, isOpen, setIsOpen }}>
      <TooltipPrimitive.Root
        ref={ref}
        open={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        {children}
      </TooltipPrimitive.Root>
    </TooltipContext.Provider>
  )
})
Tooltip.displayName = TooltipPrimitive.Root.displayName

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const context = React.useContext(TooltipContext)

  if (!context) {
    return <TooltipPrimitive.Trigger ref={ref} className={className} {...props} />
  }

  const { isTouchDevice, setIsOpen } = context

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    if (isTouchDevice) {
      setIsOpen(prev => !prev)
    }
    onClick?.(e)
  }, [isTouchDevice, setIsOpen, onClick])

  const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
    if (!isTouchDevice) {
      setIsOpen(true)
    }
    onMouseEnter?.(e)
  }, [isTouchDevice, setIsOpen, onMouseEnter])

  const handleMouseLeave = React.useCallback((e: React.MouseEvent) => {
    if (!isTouchDevice) {
      setIsOpen(false)
    }
    onMouseLeave?.(e)
  }, [isTouchDevice, setIsOpen, onMouseLeave])

  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      className={cn(isTouchDevice && "cursor-pointer", className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
})
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover opacity-90 px-3 py-1.5 text-xs text-popover-foreground font-mono shadow-md animate-in fade-in-0 zoom-in-95 duration-50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-500 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin] indent-0",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
