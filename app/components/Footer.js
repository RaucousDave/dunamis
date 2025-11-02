import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex gap-12 flex-col py-24 rounded-t-4xl bg-green-800 px-4 items-center justify-end">
        <h1 className="text-white text-5xl font-semibold">
          Your Smile Deserves the Best
        </h1>
        <p className="text-2xl max-w-4xl text-center text-white">
          Book your appointment today and experience gentle, expert dental care
          that leaces you confident and smiling bright
        </p>
        <Link
          href="/contact"
          className="bg-white text-2xl font-medium text-green-800 px-6 py-3.5 rounded-full"
        >
          Book an Appointment
        </Link>
      </div>
      <footer className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Dunamis Dental Clinic</h2>
            <p className="text-sm leading-relaxed">
              Creating healthy, confident smiles with gentle care and modern
              techniques. Visit us today and experience dentistry done right.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block">📍 45 Uruan St, Uyo, Akwa Ibom</span>
              </li>
              <li>
                <span className="block">📞 +234 703 658 5392</span>
              </li>
              <li>
                <span className="block">📧 info@brightsmile.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700/20 text-center py-4 text-sm">
          © {new Date().getFullYear()} Dunamis Dental Clinic. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
