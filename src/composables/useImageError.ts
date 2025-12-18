export function useImageError(fallbackUrl = 'https://via.placeholder.com/400x200') {
    const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement
        if (target.src !== fallbackUrl) {
            target.src = fallbackUrl
        }
    }

    return { handleImageError }
}