import { MESSAGES } from "@/constants/messages"
import { ErrorResponse, ServiceError } from "@/types"
import { AxiosError } from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleApiError(error: unknown): ServiceError {
    const axiosError = error as AxiosError<ErrorResponse>
    
    if (!axiosError.response) {
        return {
            status: axiosError.status,
            error: MESSAGES.network.fail
        }
    }

    return {
        status: axiosError.response.status,
        error: axiosError.response.data.message
    }
}

export async function getFileFromUrl(url: string): Promise<File | null> {
    try {
        const response = await fetch(url)
        const blob = await response.blob()

        const file = new File([blob], "image.jpg", { type: blob.type })

        return file
    } catch (error) {
        console.error(error)
        return null;
    }
}