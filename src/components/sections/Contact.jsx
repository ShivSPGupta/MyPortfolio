import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";

const fieldSx = {
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
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsError(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setIsError(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
        setIsError(true);
      });
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6"
    >
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/30 bg-white/20 p-6 shadow-lg backdrop-blur-xl sm:p-8">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Get In Touch
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Have a project in mind? Send a quick message and I&apos;ll get back to
          you.
        </p>

        <form onSubmit={sendEmail} className="mt-10 space-y-6">
          <TextField
            fullWidth
            required
            name="name"
            label="Your Name"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
            sx={fieldSx}
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
            sx={fieldSx}
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
            sx={fieldSx}
          />
          <Button
            type="submit"
            variant="contained"
            startIcon={<EmailIcon />}
            fullWidth
            size="large"
            sx={{
              fontWeight: "700",
              px: 5,
              py: 1.4,
              borderRadius: "999px",
              backgroundColor: "#0f172a",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.18)",
              "&:hover": { backgroundColor: "#1e293b" },
            }}
          >
            Send Message
          </Button>
        </form>

        {status && (
          <p
            className={`mt-6 text-center font-medium ${
              isError ? "text-red-700" : "text-green-700"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
