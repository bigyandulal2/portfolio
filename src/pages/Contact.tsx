import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiSend, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import PageTransition from "@/components/PageTransition";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { isValidEmail } from "@/lib/validation";
type User={
  name:string,
  email:string,
  subject:string,
  message:string
}
const Contact = () => {
  // --- Form state ---
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Form submit ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { Icon: FiGithub, href: "https://github.com/bigyandulal2", label: "GitHub" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/bigyan-dulal-84548b302/", label: "LinkedIn" },
    { Icon: BsTwitterX, href: "https://x.com/OrangeP96727", label: "Twitter" },
    { Icon: FiMail, href: "mailto:rdravid569@gmail.com", label: "Email" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-teal-900 text-gray-100">
        <div className="container mx-auto px-6 py-12">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <Link to="/projects">
              <motion.button
                className="flex items-center gap-2 text-gray-200 hover:text-indigo-500 transition-all"
                whileHover={{ x: -5 }}
              >
                <FiArrowLeft /> Back
              </motion.button>
            </Link>
            <Link to="/">
              <motion.button className="text-gray-200 hover:text-indigo-500 transition-all">
                Home
              </motion.button>
            </Link>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-10"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Let's Work <span className="text-pink-500">Together</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 shadow-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { label: "Your Name", type: "text", placeholder: "Peter Parker", name: "name" },
                      { label: "Email Address", type: "email", placeholder: "peter@gmail.com", name: "email" },
                      { label: "Subject", type: "text", placeholder: "Project Inquiry", name: "subject" },
                    ].map(({ label, type, placeholder, name }) => (
                      <div key={label}>
                        <label className="block text-sm font-semibold mb-2 text-gray-200">{label}</label>
                        <input
                          type={type}
                          name={name}
                          value={(formData as any)[name]}
                          onChange={handleChange}
                          required
                          placeholder={placeholder}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500  text-white"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-200">Message</label>
                      <textarea
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none text-gray-100 placeholder-gray-500"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? "Sending..." : "Send Message"} <FiSend />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info & Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-8"
              >
                {/* Quick Contact Card */}
                <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-lg hover:border-indigo-500 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-pink-500">Get in Touch</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400">
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium text-gray-100">rdravid569@gmail.com</div>
                    </div>
                  </div>
                </div>

                {/* Social Links Card */}
                <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-lg hover:border-indigo-500 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-pink-500">Follow Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map(({ Icon, href, label }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-indigo-500 transition-colors text-gray-100"
                      >
                        <Icon className="text-2xl" />
                        <span className="font-medium">{label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
