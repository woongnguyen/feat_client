import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {UseFormSetError} from "react-hook-form";
import {toast} from "sonner";
import {EntityError} from "@/lib/http";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleErrorApi = ({
                                   error,
                                   setError,
                                   duration
                               }: {
    error: any
    setError?: UseFormSetError<any>
    duration?: number
}) => {
    if (error instanceof EntityError && setError) {
        error.payload.errors.forEach((item: {field: string, message: string}) => {
            setError(item.field, {
                type: 'server',
                message: item.message
            })
        })
    } else {
        toast.error(error?.payload?.message ?? 'Lỗi không xác định', {
            duration: duration ?? 5000
        });
    }
}
/*
* Normalizes a path by removing the leading slash if it exists.
* xóa dấu gạch chéo ở đầu đường dẫn nếu có.
 */
export const normalizePath = (path: string) => {
  return path.startsWith("/") ? path.slice(1) : path
}