<template>
  <footer class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Contact Us</h2>
        <div class="header-line"></div>
        <p class="subtitle">Let's discuss your project and bring your ideas to life</p>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">NAME</label>
          <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              placeholder="Your Name"
          />
        </div>

        <div class="form-group">
          <label for="details">CONTACT DETAILS</label>
          <input
              id="details"
              v-model="formData.details"
              type="text"
              required
              placeholder="Email or Phone"
          />
        </div>

        <div class="form-group">
          <label for="message">MESSAGE</label>
          <textarea
              id="message"
              v-model="formData.message"
              required
              rows="6"
              placeholder="Tell us about your project"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
        </button>
      </form>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { saveContact } from '@/api/index.ts'
import type Contact from '@/api/models/contact.ts'

const formData = ref<Contact>({
  name: '',
  details: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await saveContact(formData.value)
    alert('Message sent successfully!')
    // Reset form
    formData.value = {
      name: '',
      details: '',
      message: ''
    }
  } catch (error) {
    console.error('Failed to send message:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {

  background: url('@/assets/background.png');
  background-size: auto;
  padding: 150px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #FAFAFA;
  margin-bottom: 10px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 18px;
  font-size: 16px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  color: #FAFAFA;
  font-family: 'Inter', sans-serif;
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
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 32px;
  }
  .subtitle {
    font-size: 18px;
  }
  .form-group label {
    font-size: 18px;
  }
  .contact-section {
    padding: 40px 0;
  }
}
</style>
