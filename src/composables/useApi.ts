import { ref } from 'vue'

export function useApi<T>(apiFn: () => Promise<T>) {
    const data = ref<T | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const execute = async () => {
        loading.value = true
        error.value = null

        try {
            data.value = await apiFn()
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred'
            console.error('API Error:', e)
        } finally {
            loading.value = false
        }
    }

    const reset = () => {
        data.value = null
        loading.value = false
        error.value = null
    }

    return { data, loading, error, execute, reset }
}