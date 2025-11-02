"use client";
import { services } from "@/utils/service";
import Link from "next/link";
import { FaCogs } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Page() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase.from("reviews").select("*");

      if (error) {
        console.log("Error fetching reviews: ", error);
      } else {
        setTestimonials(data);
      }
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, review } = formData;
    if (!name || !review) {
      toast.error("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("reviews")
      .insert([{ name: formData.name, message: formData.review }]);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } else {
      toast.success("Thank you for your review!");
      setFormData({ name: "", email: "", review: "" });
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const showMore = () => {
    setShown(() => shown + 3);
  };
  const showLess = () => {
    setShown(3);
  };
  return (
    <>
      <section className=" relative w-full bg-[url('/images/bg-mashup.png')] bg-cover bg-center min-h-112 flex flex-col items-center justify-center text-white">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-800/80"></div>

        {/* Content */}
        <div className="relative z-10 mt-20 text-center max-w-3xl px-6">
          <p className="tracking-widest text-green-100 font-semibold">
            OUR SERVICES
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Bright Smiles, Expert Care
          </h1>
          <p className="mt-4 text-lg text-gray-100 leading-relaxed">
            From routine checkups to advanced treatments, we provide
            personalized dental care designed to keep your smile healthy and
            confident
          </p>
        </div>
      </section>
      <section className="flex flex-col py-20 px-4 items-center justify-center gap-5">
        <h1 className="text-gray-800 text-5xl font-semibold">Services</h1>
        <p className="mb-12 text-2xl max-w-2xl text-center">
          Explore the range of dental services we offer - from routine checkups
          to advanced restorative treatments and smile-enhancing cosmetic care.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon; // dynamically render icon
            return (
              <div
                key={service.id}
                className="group bg-white h-[400px] p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="text-5xl mb-4  group-hover:text-green-700 transition">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="sm:text-4xl text-3xl mb-6 text-gray-800 group-hover:text-green-700 transition">
                  {service.head}
                </h3>

                {/* Body */}
                <p className="text-gray-600 text-2xl mb-8 ">{service.body}</p>

                {/* Learn More Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block mt-auto px-4 py-2 border sm:text-lg border-black rounded font-medium group-hover:text-white group-hover:bg-green-700 transition"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>{" "}
      </section>
      <section className="flex flex-col items-center px-4 py-12">
        <h1 className="text-4xl mb-4 font-semibold text-green-800">
          About Our Clinic
        </h1>
        <p className="text-lg mb-14 max-w-4xl text-center text-gray-800">
          At Dunamis Dental Clinic, we blend advanced technology with
          compassionate care to deliver gentle, personalized dental treatments
          in a calm and welcoming space.
        </p>
        <div className="grid gap-8 mb-12 sm:grid-cols-2 grid-cols-1">
          <div className="bg-white space-y-4 border-green-800 px-4 py-6 rounded">
            <FaTooth className="text-4xl text-green-800" />
            <h3 className="text-4xl text-green-800 ">Patient-Centered Care</h3>
            <p className="text-gray-800 text-xl">
              Every patient is unique - our treatments are personalized to
              ensure comfort, clarity, and care that feels human.
            </p>
          </div>
          <div className="bg-white space-y-4 border-green-800 px-4 py-6 rounded">
            <FaCogs className="text-4xl text-green-800" />
            <h3 className="text-4xl  text-green-800 ">Advanced Technology</h3>
            <p className="text-gray-800 text-xl">
              Our clinic uses modern dental tools and digital imaging for more
              precise, comfortable, and lasting results
            </p>
          </div>
        </div>
        <Link
          href="/about"
          className="px-4 py-1.5 text-lg rounded border border-black"
        >
          See More
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl mb-6 font-semibold text-gray-800">
          What People Are Saying
        </h1>
        <p className="text-lg mb-10 max-w-4xl text-center">
          Here's what some of our amazing clients have shared about their
          experience with us.
        </p>
        <div className="grid mb-8 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-3 gap-4">
          {testimonials.slice(0, shown).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-xl">
              <p className="text-green-800 italic">{testimonial.message}</p>
              <p className="text-right">{testimonial.name}</p>
            </div>
          ))}
        </div>
        {shown <= testimonials.length ? (
          <button
            onClick={showMore}
            className="px-4 py-1.5 border rounded hover:bg-green-800 hover:text-white transition ease-linear"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLess}
            className="px-4 py-1.5 border rounded hover:bg-green-800 hover:text-white transition ease-linear"
          >
            Show Less
          </button>
        )}
      </section>
      <section className="flex flex-col items-center px-4 justify-center py-12">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">
            Leave a Review
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Review *</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-md transition-all duration-200 font-semibold"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
