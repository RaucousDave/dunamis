"use client";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <section className="bg-gray-200 relative min-h-screen">
      {/* <AnimatePresence mode="wait"> */}
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : ""}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        {children}
        <Footer />
      </motion.div>
      {/* </AnimatePresence> */}
    </section>
  );
}
