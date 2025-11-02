import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <section className="bg-gray-200 relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
