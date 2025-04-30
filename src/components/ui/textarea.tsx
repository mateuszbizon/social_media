import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-gray-2 placeholder:text-gray-2 focus-visible:border-primary focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-white px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
