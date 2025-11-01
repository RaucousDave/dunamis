import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <section className="bg-gray-200 relative min-h-screen">
      <Navbar />
      {children}
      <h1>This is the footer section</h1>
    </section>
  );
}
