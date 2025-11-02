import { FaClock, FaTooth } from "react-icons/fa6";
import {
  FaHeart,
  FaShieldAlt,
  FaSmileBeam,
  FaUsers,
  FaStar,
  FaUserMd,
} from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className=" relative w-full bg-[url('/images/bg-mashup.png')] bg-cover bg-center min-h-112 flex flex-col items-center justify-center text-white">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-800/80"></div>

        {/* Content */}
        <div className="relative z-10 mt-20 text-center max-w-3xl px-6">
          <p className="tracking-widest text-green-100 font-semibold">
            ABOUT US
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Your Trusted Dental Care Partner in Uyo
          </h1>
          <p className="mt-4 text-lg text-gray-100 leading-relaxed">
            At Dunamis Dental Clinic, every smile matters. From routine checkups
            to advanced treatments, we're dedicated to making your visit
            comfortable and caring.
          </p>
        </div>
      </section>
      <section className="px-4 py-28 text-center flex-col bg-gray-200 flex items-center justify-center">
        <h3 className="text-green-800 font-semibold mb-3 text-xl tracking-wide">
          OUR STORY
        </h3>
        <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-8 leading-tight">
          A Legacy of Compassionate Dental Care
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl text-gray-700 leading-relaxed">
          Founded with a passion for healthier smiles, Dunamis Dental Clinic has
          been serving the community with dedication and expertise. Our journey
          began with a simple goal — to make dental visits less stressful and
          more welcoming. Over the years, we’ve grown into a trusted practice,
          committed to combining advanced technologies with genuine care.
        </p>
      </section>
      <section className="py-28 px-6 bg-gray-200">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h3 className="text-green-800 font-semibold text-xl mb-2 tracking-wide">
            OUR TEAM
          </h3>
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-6 leading-tight">
            The Smiles Behind Dunamis Dental Clinic
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl text-gray-700 leading-relaxed">
            Our skilled dentists and compassionate staff combine years of
            expertise with a gentle approach. Every visit feels less like a
            procedure and more like a partnership in your long-term oral health.
          </p>
        </div>

        {/* Team Members */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 px-4 sm:px-8">
          {/* Dr. Sylvester */}
          <div className="flex-1 bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition-all text-center space-y-4">
            <FaUserMd className="text-green-700 text-5xl mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Dr. Sylvester Ogbode
            </h2>
            <p className="text-green-700 font-medium text-lg">
              CEO / Lead Dentist
            </p>
            <p className="text-gray-600 text-base">
              Known for his precision and gentle touch, Dr. Sylvester ensures
              every patient leaves with a confident smile.
            </p>
          </div>

          {/* Dr. John */}
          <div className="flex-1 bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition-all text-center space-y-4">
            <FaUserMd className="text-green-700 text-5xl mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Dr. John Doe
            </h2>
            <p className="text-green-700 font-medium text-lg">Dentist</p>
            <p className="text-gray-600 text-base">
              A perfectionist with an eye for detail, Dr. John specializes in
              restorative dentistry and patient comfort.
            </p>
          </div>

          {/* Dr. Jane */}
          <div className="flex-1 bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition-all text-center space-y-4">
            <FaUserMd className="text-green-700 text-5xl mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Dr. Jane Doe
            </h2>
            <p className="text-green-700 font-medium text-lg">Dentist</p>
            <p className="text-gray-600 text-base">
              Passionate about preventive care, Dr. Jane makes every visit calm,
              friendly, and informative.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row gap-10 px-6 py-16 bg-gray-200">
        {/* Text Section */}
        <div className="sm:w-1/2 space-y-6 flex flex-col justify-center">
          <h3 className="text-green-700 text-lg font-semibold tracking-wide">
            OUR MISSION
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Guided by Care, Driven by Smiles
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple: make quality dental care accessible,
            comfortable, and personalized for every patient. At Dunamis Dental
            Clinic, we value trust, compassion, and excellence — principles that
            guide every treatment and every smile we care for.
          </p>
        </div>

        {/* Card Grid */}
        <div className="sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 hover:shadow-lg transition duration-300">
            <FaHeart className="text-green-700 text-4xl" />
            <h2 className="text-green-800 text-2xl font-semibold">
              Compassion
            </h2>
            <p className="text-gray-600">
              We prioritize comfort and empathy so every visit feels calm and
              supportive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 hover:shadow-lg transition duration-300">
            <FaTooth className="text-green-700 text-4xl" />
            <h2 className="text-green-800 text-2xl font-semibold">
              Excellence
            </h2>
            <p className="text-gray-600">
              We deliver precise, high-quality dental treatments using modern
              techniques and tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 hover:shadow-lg transition duration-300">
            <FaUsers className="text-green-700 text-4xl" />
            <h2 className="text-green-800 text-2xl font-semibold">Community</h2>
            <p className="text-gray-600">
              Building trust and long-lasting relationships with every patient
              and family we serve.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 hover:shadow-lg transition duration-300">
            <FaStar className="text-green-700 text-4xl" />
            <h2 className="text-green-800 text-2xl font-semibold">Integrity</h2>
            <p className="text-gray-600">
              Honest, transparent, and ethical care — your smile deserves
              nothing less.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 flex flex-col-reverse sm:flex-row-reverse gap-10 px-6 sm:px-12 items-center">
        {/* Text Section */}
        <div className="sm:w-1/2 space-y-6 text-center sm:text-left">
          <h3 className="text-xl text-green-800 font-semibold">
            Why Choose Us
          </h3>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Why Patients Trust{" "}
            <span className="text-green-800">Dunamis Dental Clinic</span>
          </h1>
          <p className="text-lg text-gray-700">
            From our welcoming environment to our advanced treatments, we're
            committed to delivering dental care that's as reliable as it is
            compassionate.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid w-full sm:w-1/2 sm:grid-cols-2 grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-green-800 transition hover:shadow-xl hover:scale-[1.02] space-y-4">
            <FaTooth className="text-5xl text-green-800" />
            <h3 className="text-2xl font-semibold text-green-800">
              Comprehensive Care
            </h3>
            <p className="text-gray-700">
              From preventive checkups to advanced treatments, we’ve got every
              dental need covered under one roof.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-green-800 transition hover:shadow-xl hover:scale-[1.02] space-y-4">
            <FaClock className="text-5xl text-green-800" />
            <h3 className="text-2xl font-semibold text-green-800">
              Flexible Scheduling
            </h3>
            <p className="text-gray-700">
              We respect your time with flexible appointment slots designed to
              fit seamlessly into your lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-green-800 transition hover:shadow-xl hover:scale-[1.02] space-y-4">
            <FaShieldAlt className="text-5xl text-green-800" />
            <h3 className="text-2xl font-semibold text-green-800">
              Safe & Sterile
            </h3>
            <p className="text-gray-700">
              Our clinic maintains top-tier cleanliness standards for your
              health, comfort, and peace of mind.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl border border-green-800 transition hover:shadow-xl hover:scale-[1.02] space-y-4">
            <FaSmileBeam className="text-5xl text-green-800" />
            <h3 className="text-2xl font-semibold text-green-800">
              Friendly Experts
            </h3>
            <p className="text-gray-700">
              Our team of caring professionals is dedicated to making every
              visit a comfortable, confidence-building experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
