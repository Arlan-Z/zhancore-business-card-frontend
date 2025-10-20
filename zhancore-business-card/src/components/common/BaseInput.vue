<script setup lang="ts">
defineProps<{
  id: string
  label?: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  modelValue: string
  placeholder?: string
  required?: boolean
  rows?: number
  disabled?: boolean
  error?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="base-input-group">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <component
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :rows="rows"
        :disabled="disabled"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="input-field"
        :class="{ error: error }"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.base-input-group {
  margin-bottom: 25px;
}

.input-label {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #FAFAFA;
  margin-bottom: 10px;
}

.input-field {
  width: 100%;
  padding: 18px;
  font-size: 16px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  color: #FAFAFA;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #21A0A0;
}

.input-field.error {
  border-color: #ff6b6b;
}

.error-message {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #ff6b6b;
}
</style>