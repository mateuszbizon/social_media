import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-2 focus-visible:ring-gray-2/50 focus-visible:ring-[3px] aria-invalid:ring-red-2 aria-invalid:border-red-2 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-3 hover:text-black",
        destructive:
          "bg-red-2 text-black hover:bg-red-3 hover:text-white",
        outline:
          "border-2 border-primary bg-transparent text-black hover:bg-primary-2 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        transparent: "bg-transparent hover:bg-gray-2/50"
      },
      size: {
        default: "px-4 py-2",
        link: "p-0",
        icon: "size-9 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
