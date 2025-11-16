import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message. Please try again.'));
  };

  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <form onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-8">
        <TextField
          label="Your Name"
          name="name"
          variant="filled"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{
            '& .MuiFilledInput-root': { backgroundColor: '#f3f4f6' },
            '& .MuiInputLabel-root': { color: 'gray' },
          }}
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          variant="filled"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{
            '& .MuiFilledInput-root': { backgroundColor: '#f3f4f6' },
            '& .MuiInputLabel-root': { color: 'gray' },
          }}
        />
        <TextField
          label="Message"
          name="message"
          variant="filled"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={5}
          required
          sx={{
            '& .MuiFilledInput-root': { backgroundColor: '#f3f4f6' },
            '& .MuiInputLabel-root': { color: 'gray' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<EmailIcon />}
          fullWidth
          size="large"
        >
          Send Message
        </Button>
      </form>
      {status && (
        <p className="mt-6 text-center font-medium text-green-600">{status}</p>
      )}
    </motion.section>
  );
}
