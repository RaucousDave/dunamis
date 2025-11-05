"use client";
import { services } from "@/utils/service";
import { supabase } from "@/utils/supabase";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase.from("reviews").select("*");
      // .order({ ascending: false });
      if (error) {
        console.log("Error fetching reviews: ", error);
      } else {
        setTestimonials(data);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-200 relative">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen overflow-hidden">
        {/* Blob */}
        <div className="absolute w-[300px] h-[300px] opacity-70 bg-green-800/30 rounded-full top-0 left-4"></div>
        <div className="absolute w-[300px] h-[300px] opacity-70 bg-green-800/20 rounded-full top-0 right-4"></div>

        {/* Hero Content */}
        <div className="z-10 text-center px-4">
          <p className="md:text-xl sm:text-lg text-sm text-green-800 font-bold mb-4">
            DUNAMIS DENTAL CLINIC
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-5xl sm:max-w-4xl mb-6">
            Providing Expert{" "}
            <span className="text-green-800 italic underline-offset-6 underline">
              Dental Care
            </span>{" "}
            For Every{" "}
            <span className="text-green-800 italic underline-offset-6 underline">
              Smile
            </span>
          </h1>
          {/* <div className="flex justify-center "> */}
          <button className="bg-green-800 mt-6 text-white text-lg px-6 py-3 rounded hover:bg-green-800 transition">
            Book An Appointment
          </button>
          {/* </div> */}
        </div>
      </section>

      <section className="py-20 relative sm:px-6 px-4 max-w-6xl mx-auto">
        {/* Blob */}
        <div className="absolute w-[300px] h-[300px] bg-green-800/30 rounded-full opacity-60 top-0 left-4"></div>
        <div className="absolute w-[300px] h-[300px] opacity-60 bg-green-800/20 rounded-full top-0 right-4"></div>
        <h3 className="sm:text-4xl text-2xl leading-9 sm:leading-14 text-center ">
          At our clinic in{" "}
          <span className="text-green-800 underline italic">
            Uyo, Akwa Ibom
          </span>
          , we combine{" "}
          <span className="text-green-800 underline italic">expertise</span> and{" "}
          <span className="text-green-800 underline italic">compassion</span> to
          make every visit calm and{" "}
          <span className="text-green-800 underline italic">comfortable</span>.
          From <span className="text-green-800 underline italic">checkups</span>{" "}
          to <span className="text-green-800 underline italic">cosmetic</span>{" "}
          care, we're dedicated to{" "}
          <span className="text-green-800 underline italic">personalized</span>{" "}
          treatments you can trust
        </h3>
      </section>

      {/* Services Section */}
      <section className="py-20 flex flex-col items-center justify-center sm:px-6 px-3 bg-gray-200">
        {" "}
        <div className="text-center">
          <h2 className="font-medium mb-4 text-4xl sm:text-5xl">
            Our Services
          </h2>
          <p className="mb-32 sm:text-2xl text-xl sm:max-w-4xl max-w-full text-green-700 opacity-80">
            We provide comprehensive dental solutions designed to meet the needs
            of every patient, from preventive care to advanced treatments.
          </p>
        </div>
        <h3 className="text-3xl mb-12">Explore Our Services</h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => {
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
        </div>
      </section>
      <section className="py-12 px-4 flex justify-center flex-col items-center">
        <h3 className="text-4xl text-center mb-8">What Our Patients Say</h3>
        <p className="text-2xl text-center max-w-3xl opacity-80">
          We're grateful for the trust of our patients and proud to serve Uyo,
          Akwa Ibom with care and compassion
        </p>
        <div className="grid sm:mt-12 mt-8 grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {testimonials.slice(0, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-xl">
              <p className="text-green-700 text-lg italic">
                "{testimonial.message}"
              </p>
              <p className="text-right">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
