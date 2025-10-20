<template>
  <footer class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Contact Us</h2>
        <div class="header-line"></div>
        <p class="subtitle">Let's discuss your project and bring your ideas to life</p>
      </div>

      <Transition name="fade" mode="out-in">
        <LoadingSpinner
            v-if="isSubmitting"
            :show="true"
            message="Sending your message..."
        />

        <form v-else @submit.prevent="onSubmit" class="contact-form">
          <BaseInput
              id="name"
              label="NAME"
              v-model="formData.name"
              placeholder="Your Name"
              required
              :error="touched.name && errors.name ? errors.name : undefined"
              @blur="setFieldTouched('name'); validate('name')"
          />

          <BaseInput
              id="details"
              label="CONTACT DETAILS"
              v-model="formData.details"
              placeholder="Email or Phone"
              required
              :error="touched.details && errors.details ? errors.details : undefined"
              @blur="setFieldTouched('details'); validate('details')"
          />

          <BaseInput
              id="message"
              type="textarea"
              label="MESSAGE"
              v-model="formData.message"
              placeholder="Tell us about your project"
              :rows="6"
              required
              :error="touched.message && errors.message ? errors.message : undefined"
              @blur="setFieldTouched('message'); validate('message')"
          />

          <button type="submit" class="submit-btn" :disabled="!isValid">
            SEND MESSAGE
          </button>
        </form>
      </Transition>

      <Transition name="slide-up">
        <div v-if="submitSuccess" class="success-message">
          ✓ Message sent successfully!
        </div>
      </Transition>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { saveContact } from '@/api/index.ts'
import BaseInput from '@/components/common/BaseInput.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useForm } from '@/composables/useForm'
import type Contact from '@/api/models/contact.ts'

const submitSuccess = ref(false)

const {
  formData,
  errors,
  isSubmitting,
  isValid,
  touched,
  validate,
  handleSubmit,
  resetForm,
  setFieldTouched
} = useForm<Contact>(
    {
      name: '',
      details: '',
      message: ''
    },
    {
      name: (value) => value.length >= 2 || 'Name must be at least 2 characters',
      details: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[\d\s+()-]{10,}$/
        return emailRegex.test(value) || phoneRegex.test(value) || 'Please enter a valid email or phone number'
      },
      message: (value) => value.length >= 10 || 'Message must be at least 10 characters'
    }
)

const onSubmit = handleSubmit(async (data) => {
  try {
    await saveContact(data)
    submitSuccess.value = true
    resetForm()

    setTimeout(() => {
      submitSuccess.value = false
    }, 3000)
  } catch (error) {
    console.error('Failed to send message:', error)
    alert('Failed to send message. Please try again.')
  }
})
</script>

<style scoped>
.contact-section {
  background: url('@/assets/background.png');
  background-size: cover;
  padding: 150px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-header {
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 15px;
}

.header-line {
  width: 80%;
  max-width: 600px;
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 auto 15px;
}

.subtitle {
  font-size: 22px;
  font-weight: 300;
  color: #FAFAFA;
  line-height: 1.4;
}

.contact-form {
  width: 100%;
  max-width: 600px;
}

.submit-btn {
  width: 100%;
  max-width: 400px;
  height: 60px;
  background: rgba(75, 75, 75, 0.2);
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 600;
  color: #FAFAFA;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: rgba(33, 160, 160, 0.4);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #21A0A0;
  color: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  font-weight: 600;
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.4s ease;
}
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-up-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 32px;
  }
  .subtitle {
    font-size: 18px;
  }
  .contact-section {
    padding: 40px 0;
  }
}
</style>