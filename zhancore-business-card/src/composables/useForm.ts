import { ref, computed } from 'vue'

type ValidationRule<T> = {
    [K in keyof T]?: (value: T[K]) => string | true
}

export function useForm<T extends Record<string, any>>(
    initialValues: T,
    validationRules?: ValidationRule<T>
) {
    const formData = ref<T>({ ...initialValues })
    const errors = ref<Partial<Record<keyof T, string>>>({})
    const isSubmitting = ref(false)
    const touched = ref<Partial<Record<keyof T, boolean>>>({})

    const isValid = computed(() => {
        return Object.keys(errors.value).length === 0
    })

    const validate = (field?: keyof T): boolean => {
        if (!validationRules) return true

        if (field) {
            const rule = validationRules[field]
            if (rule) {
                const result = rule(formData.value[field])
                if (result === true) {
                    delete errors.value[field]
                } else {
                    errors.value[field] = result
                }
            }
            return !errors.value[field]
        }

        // Validate all fields
        errors.value = {}
        let valid = true

        for (const key in validationRules) {
            const rule = validationRules[key]
            if (rule) {
                const result = rule(formData.value[key])
                if (result !== true) {
                    errors.value[key] = result
                    valid = false
                }
            }
        }

        return valid
    }

    const handleSubmit = (onSubmit: (data: T) => Promise<void>) => {
        return async () => {
            if (!validate()) return

            isSubmitting.value = true
            try {
                await onSubmit(formData.value)
            } catch (error) {
                console.error('Form submission error:', error)
                throw error
            } finally {
                isSubmitting.value = false
            }
        }
    }

    const resetForm = () => {
        formData.value = { ...initialValues }
        errors.value = {}
        touched.value = {}
    }

    const setFieldTouched = (field: keyof T) => {
        touched.value[field] = true
    }

    return {
        formData,
        errors,
        isSubmitting,
        isValid,
        touched,
        validate,
        handleSubmit,
        resetForm,
        setFieldTouched
    }
}