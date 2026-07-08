import { createServerFn } from '@tanstack/react-start'

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const submitContactForm = createServerFn({
  method: 'POST',
})
  .validator((data: unknown): ContactInput => {
    const input = data as ContactInput
    if (!input.name || !input.email || !input.message) {
      throw new Error('Semua field wajib diisi!')
    }
    if (!input.email.includes('@')) {
      throw new Error('Format email tidak valid!')
    }
    return input
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    // Honeypot check for bots
    if (data.honeypot) {
      // Intentionally return success to confuse spam bots but don't do anything
      return {
        success: true,
        message: 'Pesan berhasil terkirim! (spam filter active)',
      }
    }

    // Simulate sending email / database insert delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For now, write log on server console
    console.log(`[Contact Form Received]: Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`)

    return {
      success: true,
      message: 'Pesan Anda berhasil terkirim! Terima kasih telah menghubungi saya.',
    }
  })
