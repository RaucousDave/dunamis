import { FaTooth } from "react-icons/fa6";

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
      <section className="px-4 py-28 flex-col bg-gray-200 flex items-center justify-center">
        <h3 className="text-green-800 mb-4 text-xl">OUR STORY</h3>
        <h1 className="text-green-800 font-semibold text-4xl mb-8">
          A Legacy of Compassionate Dental Care
        </h1>
        <p className="text-xl max-w-4xl text-center">
          Founded with a passion for healthier smiles, Dunamis Dental Clinic has
          been serving the community with dedication and expertise. Our journey
          began with a simple goal: to make dental visits less stressful and
          more welcoming. Over the years, we've grown into a trusted practice,
          committed to combining advanced technologies with genuine care
        </p>
      </section>
      <section className="py-28 px-4">
        <div className="flex gap-5 flex-col justify-center items-center">
          <h3 className="text-green-800 text-xl">OUR TEAM</h3>
          <h1 className="text-green-800 font-semibold text-4xl">
            The Smiles Behind Dunamis Dental Clinic
          </h1>
          <p className="text-xl text-center">
            Our skilled dentists and caring staff combine years of expertise
            with a gentle approach, making sure every visit feels less like a
            procedure and more like a partnership in your long-term oral health
          </p>
        </div>
        <div className="flex my-12 [&>div]:w-[35%] gap-5 mx-6  sm:flex-row flex-col">
          <div className="p-6 space-y-6 rounded-xl bg-white">
            <FaTooth className="text-4xl" />
            <h2 className="text-4xl">Dr. Sylvester Ogbode</h2>
            <p className="opacity-80 text-lg">CEO/Lead Dentist</p>
          </div>
          <div className="p-6 space-y-6 rounded-xl bg-white">
            <FaTooth className="text-4xl" />
            <h2 className="text-4xl">Dr. John Doe</h2>
            <p className="opacity-80 text-lg">Dentist</p>
          </div>
          <div className="p-6 space-y-6 rounded-xl bg-white">
            <FaTooth className="text-4xl" />
            <h2 className="text-4xl">Dr. Jane Doe</h2>
            <p className="opacity-80 text-lg">Dentist</p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-lg">OUR MISSION</h1>
      </section>
    </>
  );
}
