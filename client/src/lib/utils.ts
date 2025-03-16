import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const gradientText = "bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
export const gradientBg = "bg-gradient-to-r from-cyan-500 to-purple-600"
export const glowEffect = "hover:shadow-glow transition-all duration-300"
