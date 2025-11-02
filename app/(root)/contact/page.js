"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import toast from "react-hot-toast";
import { supabase } from "@/utils/supabase"; // optional, remove if not saving messages

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Optional Supabase integration
    const { error } = await supabase.from("contacts").insert([form]);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative w-full bg-[url('/images/bg-mashup.png')] bg-cover bg-center min-h-112 flex flex-col items-center justify-center text-white px-4 text-center">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-800/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h3 className="font-semibold text-lg mb-3 tracking-wide">
            GET IN TOUCH
          </h3>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Contact Dunamis Dental Clinic
          </h1>
          <p className="text-lg leading-relaxed">
            Whether it’s a question, an appointment, or just a smile you’d like
            to share — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Info + Form Grid */}
      <div className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p>45 Uruan St, Uyo, Akwa Ibom</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-green-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>+234 703 658 5392</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-green-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>contact@dunamisdentalclinic.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-green-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 3:00 PM</p>
            </div>
          </div>

          {/* Optional Map */}
          <div className="rounded-xl overflow-hidden mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4701805962686!2d7.940924074981422!3d5.0272242949493195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57e94f08981b%3A0x10f20c870cc11975!2sDunamis%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1762123704100!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-800 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-all duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
