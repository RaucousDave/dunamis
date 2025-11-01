import { FaBoltLightning, FaShield, FaTooth, FaWrench } from "react-icons/fa6";
import { FaChild, FaSmile } from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "oral-surgery",
    head: "Oral Surgery",
    body: "Safe, precise, and painless extractions and surgical treatments when needed.",
    icon: FaTooth,
    details:
      "Our oral surgery services handle everything from complex tooth extractions to minor surgical procedures with precision and care. Whether it’s wisdom teeth removal or treatment for gum or bone issues, we ensure your comfort and a smooth recovery with advanced techniques and gentle anesthesia.",
    faqs: [
      {
        question: "Is oral surgery painful?",
        answer:
          "Not at all — we use modern local anesthesia and gentle techniques to keep you comfortable throughout the procedure.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most patients recover within 3–7 days, depending on the surgery type. We’ll guide you with personalized aftercare.",
      },
      {
        question: "Do I need someone to drive me home?",
        answer:
          "If sedation is used, yes. Otherwise, you can typically drive yourself after simple procedures.",
      },
    ],
  },
  {
    id: 2,
    slug: "pediatric-dentistry",
    head: "Pediatric Dentistry",
    body: "Gentle, personalized care for children of all ages.",
    icon: FaChild,
    details:
      "Our pediatric dentistry ensures children feel safe and happy while building strong dental habits early. We offer checkups, cleanings, cavity prevention, and early orthodontic assessments — all in a gentle, kid-friendly environment.",
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer:
          "By their first birthday or when the first tooth appears — whichever comes first.",
      },
      {
        question: "Are baby teeth really that important?",
        answer:
          "Yes! They guide permanent teeth into proper alignment and help with chewing and speech development.",
      },
      {
        question: "Do you use numbing for children?",
        answer:
          "Only when absolutely needed, using safe, child-appropriate doses.",
      },
    ],
  },
  {
    id: 3,
    slug: "emergency-care",
    head: "Emergency Care",
    body: "Reliable, immediate attention for urgent dental issues.",
    icon: FaBoltLightning,
    details:
      "Dental emergencies happen without warning. Whether it's severe pain, a broken tooth, or swelling, our emergency care provides fast relief and treatment to save your smile and stop discomfort immediately.",
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe tooth pain, bleeding, cracked or knocked-out teeth, and swelling are all emergencies.",
      },
      {
        question: "Can I come in without an appointment?",
        answer:
          "Yes, we prioritize emergency cases and offer walk-in treatment whenever possible.",
      },
      {
        question: "What should I do if my tooth is knocked out?",
        answer:
          "Keep it moist in milk or saline and visit us immediately for the best chance of saving it.",
      },
    ],
  },
  {
    id: 4,
    slug: "preventive-care",
    head: "Preventive Care",
    body: "Regular cleanings and exams to maintain lasting oral health.",
    icon: FaShield,
    details:
      "Prevention is the key to a lifetime of healthy smiles. Our preventive care includes cleanings, fluoride treatments, and patient education — helping you avoid cavities, gum disease, and costly treatments down the line.",
    faqs: [
      {
        question: "How often should I get a dental cleaning?",
        answer: "Every six months is ideal for most patients.",
      },
      {
        question: "Is fluoride treatment necessary?",
        answer:
          "Yes, fluoride strengthens enamel and helps prevent tooth decay.",
      },
      {
        question: "Do you screen for oral cancer?",
        answer:
          "Absolutely. Every exam includes a visual screening for early signs.",
      },
    ],
  },
  {
    id: 5,
    slug: "restorative-dentistry",
    head: "Restorative Dentistry",
    body: "Fillings, crowns, and bridges that restore strength and beauty.",
    icon: FaWrench,
    details:
      "We repair damaged or decayed teeth using durable, natural-looking materials. From fillings to crowns and bridges, we restore both function and appearance, helping you chew comfortably and smile confidently again.",
    faqs: [
      {
        question: "Will my restorations look natural?",
        answer:
          "Yes, we use tooth-colored materials that blend seamlessly with your enamel.",
      },
      {
        question: "How long do dental crowns last?",
        answer: "10–15 years on average with good oral hygiene.",
      },
      {
        question: "Do I need a root canal before a crown?",
        answer:
          "Not always — only if the tooth’s nerve is infected or exposed.",
      },
    ],
  },
  {
    id: 6,
    slug: "cosmetic-treatments",
    head: "Cosmetic Treatments",
    body: "Whitening, veneers, and smile makeovers for confident looks.",
    icon: FaSmile,
    details:
      "Our cosmetic treatments help you achieve your dream smile. We provide professional whitening, veneers, and full smile makeovers designed to enhance your natural beauty with precision and care.",
    faqs: [
      {
        question: "Is teeth whitening safe?",
        answer:
          "Yes, our whitening treatments are clinically safe and enamel-friendly.",
      },
      {
        question: "How long do veneers last?",
        answer:
          "Typically 10–15 years before needing replacement, depending on care.",
      },
      {
        question: "Can cosmetic treatments fix crooked teeth?",
        answer:
          "Minor misalignments can be fixed with veneers; major ones may need orthodontic care.",
      },
    ],
  },
  {
    id: 7,
    slug: "implantology",
    head: "Implantology",
    body: "Permanent, natural-looking tooth replacement solutions.",
    icon: FaTooth,
    details:
      "Dental implants offer a strong, lasting replacement for missing teeth. Our team uses advanced techniques to ensure natural aesthetics, comfort, and a perfect fit for your smile.",
    faqs: [
      {
        question: "Are dental implants permanent?",
        answer: "Yes, with proper oral care, implants can last a lifetime.",
      },
      {
        question: "Is implant surgery painful?",
        answer:
          "No, it’s done under anesthesia. Most patients feel only mild pressure.",
      },
      {
        question: "Can anyone get implants?",
        answer: "Most adults can, provided their gums and bone are healthy.",
      },
    ],
  },
  {
    id: 8,
    slug: "orthodontology",
    head: "Orthodontology",
    body: "Braces and aligners that bring your teeth into perfect alignment.",
    icon: FaShield,
    details:
      "We provide both traditional braces and modern clear aligners to straighten teeth comfortably and efficiently, improving your bite and confidence over time.",
    faqs: [
      {
        question: "What’s better: braces or aligners?",
        answer:
          "It depends — aligners are more discreet, braces are more precise for complex cases.",
      },
      {
        question: "Do braces hurt?",
        answer:
          "You may feel mild discomfort after adjustments, but it fades quickly.",
      },
      {
        question: "Can adults get braces?",
        answer:
          "Absolutely! Many adults opt for clear aligners for a subtle correction.",
      },
    ],
  },
];
