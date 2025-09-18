"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCardContext = React.createContext<{
  isTouchDevice: boolean
  isOpen: boolean
  setIsOpen: (open: boolean) => void
} | null>(null)

const HoverCard = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>
>(({ children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isTouchDevice, setIsTouchDevice] = React.useState(false)

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <HoverCardContext.Provider value={{ isTouchDevice, isOpen, setIsOpen }}>
      <HoverCardPrimitive.Root
        ref={ref}
        open={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardContext.Provider>
  )
})
HoverCard.displayName = HoverCardPrimitive.Root.displayName

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className, onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const context = React.useContext(HoverCardContext)

  if (!context) {
    return <HoverCardPrimitive.Trigger ref={ref} className={className} {...props} />
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
    <HoverCardPrimitive.Trigger
      ref={ref}
      className={cn(isTouchDevice && "cursor-pointer", className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
})
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md bg-transparent p-4 text-xs text-popover-foreground font-mono shadow-md outline-none data-[state=open]:animate-in data-[state=open]:duration-50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:duration-500 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
