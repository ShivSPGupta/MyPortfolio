import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 bg-white/20 backdrop-blur-md rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Get In Touch
      </h2>
      <form onSubmit={sendEmail} className="max-w-3xl mx-auto space-y-8">
        <TextField
          fullWidth
          required
          name="name"
          label="Your Name"
          variant="filled"
          value={formData.name}
          onChange={handleChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(6px)",
            borderRadius: 1,
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            },
            "& .MuiInputLabel-root": { color: "rgba(0,0,0,0.7)" },
            "& .MuiInputBase-input": { color: "#000" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "rgba(0,0,0,0.1)",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "rgba(0,0,0,0.3)",
            },
          }}
        />
        <TextField
          fullWidth
          required
          name="email"
          type="email"
          label="Your Email"
          variant="filled"
          value={formData.email}
          onChange={handleChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(6px)",
            borderRadius: 1,
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            },
            "& .MuiInputLabel-root": { color: "rgba(0,0,0,0.7)" },
            "& .MuiInputBase-input": { color: "#000" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "rgba(0,0,0,0.1)",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "rgba(0,0,0,0.3)",
            },
          }}
        />
        <TextField
          fullWidth
          required
          name="message"
          label="Message"
          multiline
          rows={6}
          variant="filled"
          value={formData.message}
          onChange={handleChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(6px)",
            borderRadius: 1,
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            },
            "& .MuiInputLabel-root": { color: "rgba(0,0,0,0.7)" },
            "& .MuiInputBase-input": { color: "#000" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "rgba(0,0,0,0.1)",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "rgba(0,0,0,0.3)",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<EmailIcon />}
          fullWidth
          size="large"
          sx={{ fontWeight: "bold" }}
        >
          Send Message
        </Button>
      </form>
      {status && (
        <p className="mt-6 text-center font-medium text-green-700">{status}</p>
      )}
    </motion.section>
  );
}
