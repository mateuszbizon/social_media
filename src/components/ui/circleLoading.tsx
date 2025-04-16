import { cn } from '@/lib/utils'
import React from 'react'

function CircleLoading({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
        className={cn("w-10 p-2 aspect-square rounded-[50%] bg-primary animate-rotate-spinner mask", className)}
        {...props}
    >
    </div>
  )
}

export default CircleLoading