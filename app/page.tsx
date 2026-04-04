"use client";

import { useState } from "react";

type Language = "en" | "es" | "pl";

type ServiceItem = {
  title: string;
  text: string;
  icon: "wrench" | "drain" | "heater" | "bath" | "pipe" | "home";
};

function ServiceIcon({ type }: { type: ServiceItem["icon"] }) {
  const className = "h-7 w-7 text-[#d4bb8a]";

  switch (type) {
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2 2 0 0 1-2.8-2.8l9.4-9.4a4 4 0 0 0-5-5l3-3 2.8 2.8-3 3Z" />
        </svg>
      );
    case "drain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M8 4c0 2.5-3 3.4-3 6a5 5 0 0 0 10 0c0-2.6-3-3.5-3-6" />
          <path d="M17 8c0 1.5-2 2.2-2 4a3 3 0 0 0 6 0c0-1.8-2-2.4-2-4" />
        </svg>
      );
    case "heater":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <circle cx="12" cy="17" r="1.2" />
          <path d="M10 7h4M10 10h4" />
        </svg>
      );
    case "bath":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Z" />
          <path d="M7 12V7a2 2 0 0 1 4 0" />
          <path d="M18 8h1M20 6v1M21.5 8.5l-.7-.7" />
        </svg>
      );
    case "pipe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M7 4v5a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v5" />
          <path d="M4 4h6M14 20h6" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function KurtAndSonsPlumbingServices() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Emergency Repair",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [language, setLanguage] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copy = {
    en: {
      navServices: "Services",
      navAbout: "About",
      navGallery: "Gallery",
      navReviews: "Reviews",
      navFaq: "FAQ",
      navContact: "Contact",
      toggle: "Español",
      badge: "Premium Residential & Commercial Plumbing",
      heroTitle: "Luxury-level plumbing service that feels fast, clean, and reliable.",
      heroText:
        "Kurt & Sons Plumbing Services delivers refined workmanship, rapid response times, and honest service for homeowners and businesses who expect the job done right the first time.",
      callNow: "Call Now: (708) 719-2825",
      schedule: "Schedule an Appointment",
      explore: "Explore Services",
      stat1: "24/7",
      stat1Sub: "Emergency support",
      stat2: "5-Star",
      stat2Sub: "Customer-first service",
      stat3: "Family-Owned",
      stat3Sub: "Crafted with pride",
      panelEyebrow: "Fast Request",
      panelTitle: "Need service today?",
      panelButton: "Send Request",
      panelNote: "Same-day availability for many plumbing emergencies.",
      panelBottom: "Premium response • Clean scheduling • Trusted local service",
      name: "Name",
      phone: "Phone",
      email: "Email",
      serviceNeeded: "Service Needed",
      message: "Message",
      submitting: "Sending Request...",
      success:
        "Thank you — your request was sent successfully. Kurt & Sons Plumbing will contact you shortly.",
      error: "Something went wrong sending your request. Please try again.",
      serviceOptions: [
        "Emergency Repair",
        "Drain Cleaning",
        "Water Heaters",
        "Bathroom Remodels",
        "Pipe Services",
        "New Construction",
      ],
      marquee1: "Leak Detection",
      marquee2: "Drain Cleaning",
      marquee3: "Water Heaters",
      marquee4: "Emergency Repairs",
      servicesEyebrow: "Services",
      servicesTitle: "Plumbing solutions designed to feel effortless.",
      servicesText:
        "From urgent repairs to high-end fixture installs, we combine practical expertise with a polished service experience your home or business deserves.",
      services: [
        {
          title: "Emergency Repairs",
          text: "Fast 24/7 response for burst pipes, leaks, and clogs. We’re there when you need us most.",
          icon: "wrench",
        },
        {
          title: "Drain Cleaning",
          text: "Advanced hydro-jetting and camera inspection to keep your drains flowing perfectly.",
          icon: "drain",
        },
        {
          title: "Water Heaters",
          text: "Installation, repair, and maintenance for tankless and traditional water heating systems.",
          icon: "heater",
        },
        {
          title: "Bathroom Remodels",
          text: "Transform your space with custom fixtures, tiling, and premium plumbing installations.",
          icon: "bath",
        },
        {
          title: "Pipe Services",
          text: "Full pipe repair, replacement, and repiping using only the highest quality materials.",
          icon: "pipe",
        },
        {
          title: "New Construction",
          text: "Complete plumbing design and installation for residential and commercial builds.",
          icon: "home",
        },
      ] as ServiceItem[],
      aboutEyebrow: "Why Kurt & Sons",
      aboutTitle: "Built on trust, craftsmanship, and family pride.",
      aboutText:
        "Kurt & Sons Plumbing Services is a family-run plumbing company focused on honest work, reliable results, and long-term customer relationships. With years of experience serving Oak Lawn and surrounding areas, the team is known for clean work, fast response times, and clear communication from start to finish.",
      aboutCards: [
        ["White-glove service", "Respectful, tidy, and detail-oriented work from arrival to completion."],
        ["Transparent communication", "No vague explanations, no runaround, just clear next steps and real solutions."],
        ["Premium positioning", "A more elevated brand for customers who want reliability and a polished experience."],
        ["Strong call-to-action flow", "Designed to convert visitors into booked jobs with confidence and speed."],
      ],
      galleryEyebrow: "Project Gallery",
      galleryTitle: "Recent work that shows the standard.",
      galleryText:
        "Real project photos from Kurt & Sons Plumbing Services, from bathroom installs to water heaters and full piping systems.",
      gallery: [
        { src: "/kurt-sons-pic-1.webp", alt: "Luxury marble shower installation" },
        { src: "/kurt-sons-pic-2.webp", alt: "Custom kitchen plumbing project" },
        { src: "/kurt-sons-pic-3.webp", alt: "Water heater installation" },
        { src: "/kurt-sons-pic-4.webp", alt: "Exterior plumbing excavation work" },
        { src: "/kurt-sons-pic-5.webp", alt: "Bathroom plumbing fixture installation" },
        { src: "/kurt-sons-pic-6.webp", alt: "Full piping system install" },
      ],
      reviewsEyebrow: "Testimonials",
      reviewsTitle: "Trusted by Oak Lawn homeowners.",
      reviewsText:
        "Trusted by local homeowners for years. Real feedback from customers who already trust Kurt & Sons Plumbing Services.",
      reviewsFooter: "Premium rotating client feedback from real Oak Lawn customers.",
      reviews: [
        {
          quote:
            "Outstanding plumbing service. They came out to our Oak Lawn home on short notice, replaced our water heater quickly, and everything was done professionally with no issues. Prices were way better than other companies.",
          name: "Taylor Wiggins",
          tag: "Water heater install",
        },
        {
          quote:
            "They explained everything clearly, showed up on time, and installed a new water heater the next day. Clean work and great communication.",
          name: "Danny Coleman",
          tag: "Next-day service",
        },
        {
          quote:
            "Professional, friendly, and very knowledgeable. They fixed our water heater without trying to upsell anything and explained everything clearly.",
          name: "Mya Singleton",
          tag: "Honest repair",
        },
        {
          quote:
            "I’ve used them for years and they always deliver. Professional work, fair pricing, and everything done right the first time.",
          name: "Stella Roach",
          tag: "Long-time customer",
        },
        {
          quote:
            "We discovered a leak in our Oak Lawn home and their team impressed us from the beginning. The repiping job went smoothly, everything was clearly explained, and the final work looked neat and tidy.",
          name: "Angel Rhodes",
          tag: "Repiping project",
        },
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Common questions from homeowners",
      faqs: [
        ["Do you offer same-day service?", "Yes, we offer same-day service for many plumbing issues depending on availability."],
        ["Do you handle emergency plumbing?", "Absolutely. We handle urgent plumbing problems quickly and professionally."],
        ["Do you work on water heaters?", "Yes, we install, repair, and replace both traditional and tankless water heaters."],
        ["Do you service Oak Lawn and nearby areas?", "Yes, we serve Oak Lawn and surrounding communities."],
        ["Do you provide upfront pricing?", "Yes, we believe in clear, honest pricing with no surprises."],
      ],
      contactEyebrow: "Contact",
      contactTitle: "Ready to make plumbing problems disappear?",
      contactText:
        "Make your first impression count with a premium plumbing brand presence that feels established, trustworthy, and built to convert.",
      callLabel: "Call",
      emailLabel: "Email",
      areaLabel: "Service Area",
      serviceArea: "Oak Lawn & surrounding areas",
      bottomButton: "Request Service Now",
      finalTitle: "Need a plumber in Oak Lawn? Call Kurt & Sons today.",
      finalButton: "Call Now: (708) 719-2825",
      quickLinks: "Quick Links",
      servicesFooter: "Services",
      faqFooter: "FAQ",
      hoursFooter: "Working Hours",
      hour1: "Open 24 hours",
      hour2: "Hours may differ on some holidays",
      hour3: "Call anytime for service",
      footerNote:
        "Premium local plumbing service built on honest work, fast response, and trusted craftsmanship.",
    },
    es: {
      navServices: "Servicios",
      navAbout: "Nosotros",
      navGallery: "Galería",
      navReviews: "Reseñas",
      navFaq: "Preguntas",
      navContact: "Contacto",
      toggle: "Polski",
      badge: "Plomería residencial y comercial premium",
      heroTitle: "Servicio de plomería de alto nivel que se siente rápido, limpio y confiable.",
      heroText:
        "Kurt & Sons Plumbing Services ofrece trabajo de calidad, tiempos de respuesta rápidos y servicio honesto para propietarios y negocios que esperan que el trabajo se haga bien desde la primera vez.",
      callNow: "Llame ahora: (708) 719-2825",
      schedule: "Programar una cita",
      explore: "Explorar servicios",
      stat1: "24/7",
      stat1Sub: "Soporte de emergencia",
      stat2: "5 estrellas",
      stat2Sub: "Servicio enfocado en el cliente",
      stat3: "Familiar",
      stat3Sub: "Trabajo con orgullo",
      panelEyebrow: "Solicitud rápida",
      panelTitle: "¿Necesita servicio hoy?",
      panelButton: "Enviar solicitud",
      panelNote: "Disponibilidad el mismo día para muchas emergencias de plomería.",
      panelBottom: "Respuesta premium • Programación limpia • Servicio local de confianza",
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      serviceNeeded: "Servicio necesario",
      message: "Mensaje",
      submitting: "Enviando solicitud...",
      success:
        "Gracias — su solicitud fue enviada con éxito. Kurt & Sons Plumbing se pondrá en contacto con usted pronto.",
      error: "Hubo un problema al enviar su solicitud. Inténtelo de nuevo.",
      serviceOptions: [
        "Reparación de emergencia",
        "Limpieza de drenajes",
        "Calentadores de agua",
        "Remodelaciones de baño",
        "Servicios de tuberías",
        "Nueva construcción",
      ],
      marquee1: "Detección de fugas",
      marquee2: "Limpieza de drenajes",
      marquee3: "Calentadores de agua",
      marquee4: "Reparaciones de emergencia",
      servicesEyebrow: "Servicios",
      servicesTitle: "Soluciones de plomería diseñadas para sentirse sin complicaciones.",
      servicesText:
        "Desde reparaciones urgentes hasta instalaciones de accesorios de alta gama, combinamos experiencia práctica con un servicio pulido que su hogar o negocio merece.",
      services: [
        {
          title: "Reparaciones de emergencia",
          text: "Respuesta rápida 24/7 para tuberías rotas, fugas y obstrucciones. Estamos cuando más nos necesita.",
          icon: "wrench",
        },
        {
          title: "Limpieza de drenajes",
          text: "Hydro-jetting avanzado e inspección con cámara para mantener sus drenajes funcionando perfectamente.",
          icon: "drain",
        },
        {
          title: "Calentadores de agua",
          text: "Instalación, reparación y mantenimiento para sistemas tradicionales y sin tanque.",
          icon: "heater",
        },
        {
          title: "Remodelaciones de baño",
          text: "Transforme su espacio con accesorios personalizados, azulejos e instalaciones premium.",
          icon: "bath",
        },
        {
          title: "Servicios de tuberías",
          text: "Reparación completa, reemplazo y repiping usando materiales de la más alta calidad.",
          icon: "pipe",
        },
        {
          title: "Nueva construcción",
          text: "Diseño e instalación completa de plomería para proyectos residenciales y comerciales.",
          icon: "home",
        },
      ] as ServiceItem[],
      aboutEyebrow: "Por qué Kurt & Sons",
      aboutTitle: "Construido sobre confianza, experiencia y orgullo familiar.",
      aboutText:
        "Kurt & Sons Plumbing Services es una empresa familiar enfocada en trabajo honesto, resultados confiables y relaciones duraderas con los clientes. Con años de experiencia sirviendo a Oak Lawn y áreas cercanas, el equipo es conocido por su trabajo limpio, respuesta rápida y comunicación clara de principio a fin.",
      aboutCards: [
        ["Servicio impecable", "Trabajo respetuoso, limpio y detallista desde la llegada hasta la finalización."],
        ["Comunicación transparente", "Sin explicaciones vagas ni rodeos, solo soluciones reales y pasos claros."],
        ["Posicionamiento premium", "Una marca más elevada para clientes que quieren confiabilidad y una experiencia pulida."],
        ["Flujo fuerte de conversión", "Diseñado para convertir visitantes en trabajos reservados con confianza y rapidez."],
      ],
      galleryEyebrow: "Galería",
      galleryTitle: "Trabajos recientes que muestran el nivel.",
      galleryText:
        "Fotos reales de proyectos de Kurt & Sons Plumbing Services, desde baños hasta calentadores de agua y sistemas completos de tuberías.",
      gallery: [
        { src: "/kurt-sons-pic-1.webp", alt: "Instalación de ducha de mármol" },
        { src: "/kurt-sons-pic-2.webp", alt: "Proyecto de cocina" },
        { src: "/kurt-sons-pic-3.webp", alt: "Instalación de calentador de agua" },
        { src: "/kurt-sons-pic-4.webp", alt: "Trabajo exterior de excavación" },
        { src: "/kurt-sons-pic-5.webp", alt: "Instalación de baño" },
        { src: "/kurt-sons-pic-6.webp", alt: "Instalación completa de tuberías" },
      ],
      reviewsEyebrow: "Testimonios",
      reviewsTitle: "Con la confianza de propietarios en Oak Lawn.",
      reviewsText:
        "Con la confianza de propietarios locales durante años. Comentarios reales de clientes que ya confían en Kurt & Sons Plumbing Services.",
      reviewsFooter: "Opiniones rotativas premium de clientes reales de Oak Lawn.",
      reviews: [
        {
          quote:
            "Servicio de plomería excelente. Llegaron a nuestra casa en Oak Lawn con poca anticipación, reemplazaron el calentador de agua rápidamente y todo se hizo de forma profesional y sin problemas. Los precios fueron mucho mejores que los de otras compañías.",
          name: "Taylor Wiggins",
          tag: "Instalación de calentador",
        },
        {
          quote:
            "Explicaron todo claramente, llegaron a tiempo e instalaron un nuevo calentador al día siguiente. Trabajo limpio y gran comunicación.",
          name: "Danny Coleman",
          tag: "Servicio al día siguiente",
        },
        {
          quote:
            "Profesionales, amables y muy conocedores. Repararon nuestro calentador sin intentar vendernos algo innecesario y explicaron todo con claridad.",
          name: "Mya Singleton",
          tag: "Reparación honesta",
        },
        {
          quote:
            "Los he usado por años y siempre cumplen. Trabajo profesional, precio justo y todo bien hecho desde la primera vez.",
          name: "Stella Roach",
          tag: "Cliente de años",
        },
        {
          quote:
            "Descubrimos una fuga en nuestra casa de Oak Lawn y su equipo nos impresionó desde el principio. El trabajo de repiping fue muy bien, todo fue explicado claramente y el resultado final quedó limpio y ordenado.",
          name: "Angel Rhodes",
          tag: "Proyecto de repiping",
        },
      ],
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Preguntas comunes de propietarios",
      faqs: [
        ["¿Ofrecen servicio el mismo día?", "Sí, ofrecemos servicio el mismo día para muchos problemas de plomería según disponibilidad."],
        ["¿Atienden emergencias?", "Claro. Manejamos problemas urgentes de plomería de manera rápida y profesional."],
        ["¿Trabajan con calentadores de agua?", "Sí, instalamos, reparamos y reemplazamos calentadores tradicionales y sin tanque."],
        ["¿Atienden Oak Lawn y áreas cercanas?", "Sí, servimos a Oak Lawn y comunidades cercanas."],
        ["¿Dan precios por adelantado?", "Sí, creemos en precios claros y honestos sin sorpresas."],
      ],
      contactEyebrow: "Contacto",
      contactTitle: "¿Listo para hacer desaparecer sus problemas de plomería?",
      contactText:
        "Cause una gran primera impresión con una presencia premium de plomería que se siente establecida, confiable y hecha para convertir.",
      callLabel: "Llamar",
      emailLabel: "Correo",
      areaLabel: "Área de servicio",
      serviceArea: "Oak Lawn y áreas cercanas",
      bottomButton: "Solicitar servicio ahora",
      finalTitle: "¿Necesita un plomero en Oak Lawn? Llame a Kurt & Sons hoy.",
      finalButton: "Llame ahora: (708) 719-2825",
      quickLinks: "Enlaces rápidos",
      servicesFooter: "Servicios",
      faqFooter: "Preguntas",
      hoursFooter: "Horario",
      hour1: "Abierto las 24 horas",
      hour2: "El horario puede variar en algunos días festivos",
      hour3: "Llame en cualquier momento para servicio",
      footerNote:
        "Servicio local de plomería premium basado en trabajo honesto, respuesta rápida y artesanía confiable.",
    },
    pl: {
      navServices: "Usługi",
      navAbout: "O nas",
      navGallery: "Galeria",
      navReviews: "Opinie",
      navFaq: "FAQ",
      navContact: "Kontakt",
      toggle: "English",
      badge: "Premium hydraulika domowa i komercyjna",
      heroTitle: "Luksusowa usługa hydrauliczna, która jest szybka, czysta i niezawodna.",
      heroText:
        "Kurt & Sons Plumbing Services zapewnia wysoką jakość wykonania, szybki czas reakcji i uczciwą obsługę dla właścicieli domów i firm, którzy oczekują dobrze wykonanej pracy za pierwszym razem.",
      callNow: "Zadzwoń teraz: (708) 719-2825",
      schedule: "Umów wizytę",
      explore: "Zobacz usługi",
      stat1: "24/7",
      stat1Sub: "Wsparcie awaryjne",
      stat2: "5 gwiazdek",
      stat2Sub: "Obsługa klienta na pierwszym miejscu",
      stat3: "Rodzinna firma",
      stat3Sub: "Praca z dumą",
      panelEyebrow: "Szybkie zgłoszenie",
      panelTitle: "Potrzebujesz usługi już dziś?",
      panelButton: "Wyślij zgłoszenie",
      panelNote: "Dostępność tego samego dnia dla wielu awarii hydraulicznych.",
      panelBottom: "Premium odpowiedź • Sprawna organizacja • Zaufana lokalna usługa",
      name: "Imię i nazwisko",
      phone: "Telefon",
      email: "E-mail",
      serviceNeeded: "Potrzebna usługa",
      message: "Wiadomość",
      submitting: "Wysyłanie zgłoszenia...",
      success:
        "Dziękujemy — Twoje zgłoszenie zostało wysłane. Kurt & Sons Plumbing skontaktuje się z Tobą wkrótce.",
      error: "Wystąpił problem podczas wysyłania zgłoszenia. Spróbuj ponownie.",
      serviceOptions: [
        "Naprawa awaryjna",
        "Czyszczenie odpływów",
        "Podgrzewacze wody",
        "Remonty łazienek",
        "Usługi rurowe",
        "Nowe budownictwo",
      ],
      marquee1: "Wykrywanie wycieków",
      marquee2: "Czyszczenie odpływów",
      marquee3: "Podgrzewacze wody",
      marquee4: "Naprawy awaryjne",
      servicesEyebrow: "Usługi",
      servicesTitle: "Rozwiązania hydrauliczne zaprojektowane tak, by były bezproblemowe.",
      servicesText:
        "Od pilnych napraw po montaż wysokiej klasy armatury — łączymy praktyczne doświadczenie z dopracowaną obsługą, na jaką zasługuje Twój dom lub firma.",
      services: [
        {
          title: "Naprawy awaryjne",
          text: "Szybka reakcja 24/7 na pęknięte rury, wycieki i zatory. Jesteśmy wtedy, gdy najbardziej nas potrzebujesz.",
          icon: "wrench",
        },
        {
          title: "Czyszczenie odpływów",
          text: "Zaawansowany hydro-jetting i inspekcja kamerą, by odpływy działały idealnie.",
          icon: "drain",
        },
        {
          title: "Podgrzewacze wody",
          text: "Instalacja, naprawa i konserwacja tradycyjnych i bezzbiornikowych systemów grzewczych.",
          icon: "heater",
        },
        {
          title: "Remonty łazienek",
          text: "Odmień swoją przestrzeń dzięki niestandardowym armaturom, płytkom i premium instalacjom hydraulicznym.",
          icon: "bath",
        },
        {
          title: "Usługi rurowe",
          text: "Pełna naprawa rur, wymiana i repiping z użyciem najwyższej jakości materiałów.",
          icon: "pipe",
        },
        {
          title: "Nowe budownictwo",
          text: "Kompletne projektowanie i montaż hydrauliki dla budynków mieszkalnych i komercyjnych.",
          icon: "home",
        },
      ] as ServiceItem[],
      aboutEyebrow: "Dlaczego Kurt & Sons",
      aboutTitle: "Zbudowane na zaufaniu, fachowości i rodzinnej dumie.",
      aboutText:
        "Kurt & Sons Plumbing Services to rodzinna firma hydrauliczna skupiona na uczciwej pracy, niezawodnych efektach i długoterminowych relacjach z klientami. Dzięki latom doświadczenia w Oak Lawn i okolicach zespół jest znany z czystej pracy, szybkiej reakcji i jasnej komunikacji od początku do końca.",
      aboutCards: [
        ["Obsługa na najwyższym poziomie", "Szacunek, porządek i dbałość o detale od przyjazdu do zakończenia pracy."],
        ["Przejrzysta komunikacja", "Bez niejasnych wyjaśnień i bez zwodzenia — tylko konkretne rozwiązania i jasne kolejne kroki."],
        ["Pozycjonowanie premium", "Bardziej podniesiona marka dla klientów, którzy oczekują niezawodności i dopracowanego doświadczenia."],
        ["Mocny przepływ konwersji", "Zaprojektowane tak, aby zamieniać odwiedzających w zlecenia szybko i z pełnym zaufaniem."],
      ],
      galleryEyebrow: "Galeria",
      galleryTitle: "Ostatnie realizacje pokazujące standard.",
      galleryText:
        "Prawdziwe zdjęcia projektów Kurt & Sons Plumbing Services, od łazienek po podgrzewacze wody i pełne systemy rur.",
      gallery: [
        { src: "/kurt-sons-pic-1.webp", alt: "Luksusowy montaż prysznica" },
        { src: "/kurt-sons-pic-2.webp", alt: "Projekt kuchni" },
        { src: "/kurt-sons-pic-3.webp", alt: "Montaż podgrzewacza wody" },
        { src: "/kurt-sons-pic-4.webp", alt: "Zewnętrzne prace wykopowe" },
        { src: "/kurt-sons-pic-5.webp", alt: "Montaż łazienki" },
        { src: "/kurt-sons-pic-6.webp", alt: "Kompletna instalacja rur" },
      ],
      reviewsEyebrow: "Opinie",
      reviewsTitle: "Zaufanie właścicieli domów w Oak Lawn.",
      reviewsText:
        "Zaufanie lokalnych właścicieli domów przez lata. Prawdziwe opinie klientów, którzy już ufają Kurt & Sons Plumbing Services.",
      reviewsFooter: "Premium, obracające się opinie prawdziwych klientów z Oak Lawn.",
      reviews: [
        {
          quote:
            "Świetna usługa hydrauliczna. Przyjechali do naszego domu w Oak Lawn w krótkim czasie, szybko wymienili podgrzewacz wody i wszystko zostało wykonane profesjonalnie i bez problemów. Ceny były dużo lepsze niż w innych firmach.",
          name: "Taylor Wiggins",
          tag: "Montaż podgrzewacza",
        },
        {
          quote:
            "Wszystko jasno wyjaśnili, przyjechali punktualnie i zamontowali nowy podgrzewacz następnego dnia. Czysta praca i świetna komunikacja.",
          name: "Danny Coleman",
          tag: "Usługa następnego dnia",
        },
        {
          quote:
            "Profesjonalni, mili i bardzo kompetentni. Naprawili nasz podgrzewacz bez prób niepotrzebnej sprzedaży i wszystko dokładnie wyjaśnili.",
          name: "Mya Singleton",
          tag: "Uczciwa naprawa",
        },
        {
          quote:
            "Korzystam z ich usług od lat i zawsze dowożą. Profesjonalna praca, uczciwe ceny i wszystko zrobione dobrze za pierwszym razem.",
          name: "Stella Roach",
          tag: "Wieloletni klient",
        },
        {
          quote:
            "Odkryliśmy wyciek w naszym domu w Oak Lawn i ich zespół zrobił świetne wrażenie od samego początku. Prace związane z wymianą rur przebiegły sprawnie, wszystko było jasno wyjaśnione, a efekt końcowy był czysty i schludny.",
          name: "Angel Rhodes",
          tag: "Projekt wymiany rur",
        },
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Najczęstsze pytania właścicieli domów",
      faqs: [
        ["Czy oferujecie usługę tego samego dnia?", "Tak, oferujemy usługę tego samego dnia dla wielu problemów hydraulicznych, w zależności od dostępności."],
        ["Czy zajmujecie się awariami hydraulicznymi?", "Oczywiście. Szybko i profesjonalnie rozwiązujemy pilne problemy hydrauliczne."],
        ["Czy pracujecie przy podgrzewaczach wody?", "Tak, instalujemy, naprawiamy i wymieniamy tradycyjne oraz bezzbiornikowe podgrzewacze wody."],
        ["Czy obsługujecie Oak Lawn i okoliczne miejscowości?", "Tak, obsługujemy Oak Lawn i pobliskie społeczności."],
        ["Czy podajecie ceny z góry?", "Tak, wierzymy w jasne i uczciwe ceny bez niespodzianek."],
      ],
      contactEyebrow: "Kontakt",
      contactTitle: "Gotowy, aby pozbyć się problemów hydraulicznych?",
      contactText:
        "Zrób świetne pierwsze wrażenie dzięki premium marce hydraulicznej, która wygląda profesjonalnie, budzi zaufanie i została stworzona, aby konwertować.",
      callLabel: "Zadzwoń",
      emailLabel: "E-mail",
      areaLabel: "Obszar usług",
      serviceArea: "Oak Lawn i okolice",
      bottomButton: "Zamów usługę teraz",
      finalTitle: "Potrzebujesz hydraulika w Oak Lawn? Zadzwoń do Kurt & Sons już dziś.",
      finalButton: "Zadzwoń teraz: (708) 719-2825",
      quickLinks: "Szybkie linki",
      servicesFooter: "Usługi",
      faqFooter: "FAQ",
      hoursFooter: "Godziny pracy",
      hour1: "Otwarte 24 godziny",
      hour2: "Godziny mogą się różnić w święta",
      hour3: "Zadzwoń o każdej porze po serwis",
      footerNote:
        "Lokalna usługa hydrauliczna premium oparta na uczciwej pracy, szybkiej reakcji i zaufanym fachu.",
    },
  } as const;

  const t = copy[language];
  const reviewLoop = [...t.reviews, ...t.reviews];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mlgpzrnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Kurt & Sons Plumbing lead",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: t.serviceOptions[0],
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const cycleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : prev === "es" ? "pl" : "en"));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_28%),linear-gradient(135deg,#020617_0%,#081326_55%,#060b16_100%)]" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <header className="relative z-30 border-b border-white/5">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">Kurt & Sons</div>
              <div className="mt-1 text-2xl font-semibold tracking-wide text-white sm:text-xl">
                Plumbing Services
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
              <a href="#services" className="transition hover:text-white">{t.navServices}</a>
              <a href="#about" className="transition hover:text-white">{t.navAbout}</a>
              <a href="#gallery" className="transition hover:text-white">{t.navGallery}</a>
              <a href="#reviews" className="transition hover:text-white">{t.navReviews}</a>
              <a href="#faq" className="transition hover:text-white">{t.navFaq}</a>
              <a href="#contact" className="transition hover:text-white">{t.navContact}</a>
            </div>

            <div className="hidden items-center gap-4 xl:flex">
              <button
                onClick={cycleLanguage}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                {t.toggle}
              </button>
              <a
                href="tel:+17087192825"
                className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 backdrop-blur transition hover:bg-cyan-400/15"
              >
                {t.callNow}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                {t.schedule}
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white lg:hidden"
            >
              Menu
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-white/5 bg-[#07111f]/95 px-4 py-4 backdrop-blur lg:hidden">
              <div className="flex flex-col gap-4 text-sm text-zinc-200">
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.navServices}</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>{t.navGallery}</a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>{t.navReviews}</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)}>{t.navFaq}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.navContact}</a>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => {
                      cycleLanguage();
                      setMobileMenuOpen(false);
                    }}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white"
                  >
                    {t.toggle}
                  </button>
                  <a
                    href="tel:+17087192825"
                    className="rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950"
                  >
                    {t.callNow}
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-28 lg:pt-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-cyan-200 sm:text-xs">
              {t.badge}
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+17087192825"
                className="rounded-full border border-[#d4bb8a]/25 bg-[#d4bb8a]/10 px-7 py-4 text-center text-sm font-semibold text-[#f2dfb7] transition hover:bg-[#d4bb8a]/15"
              >
                {t.callNow}
              </a>

              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
              >
                {t.schedule}
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                {t.explore}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                [t.stat1, t.stat1Sub],
                [t.stat2, t.stat2Sub],
                [t.stat3, t.stat3Sub],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[2rem] border border-white/10 bg-[#07111f]/80 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">{t.panelEyebrow}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{t.panelTitle}</div>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-zinc-400">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      className="w-full rounded-none border border-white/10 bg-[#020817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-zinc-400">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      className="w-full rounded-none border border-white/10 bg-[#020817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-zinc-400">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full rounded-none border border-white/10 bg-[#020817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-zinc-400">
                    {t.serviceNeeded}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-none border border-white/10 bg-[#020817] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
                    required
                  >
                    {t.serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-zinc-950 text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-zinc-400">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[130px] w-full rounded-none border border-white/10 bg-[#020817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#d4bb8a] px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-950 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? t.submitting : t.panelButton}
                </button>

                {status === "success" ? (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-200">
                    {t.success}
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-200">
                    {t.error}
                  </div>
                ) : null}

                <p className="text-center text-xs text-zinc-500">{t.panelNote}</p>
                <p className="text-center text-[11px] uppercase tracking-[0.22em] text-zinc-500">{t.panelBottom}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#08111f]/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 sm:grid-cols-4 lg:px-10">
          {[t.marquee1, t.marquee2, t.marquee3, t.marquee4].map((item) => (
            <div key={item} className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{t.servicesEyebrow}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.servicesTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{t.servicesText}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service) => (
            <div
              key={service.title}
              className="rounded-none border border-white/10 bg-[#04101f] p-8 sm:p-10 transition hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="mb-8">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-3xl font-medium text-white">{service.title}</h3>
              <p className="mt-5 max-w-md text-lg leading-9 text-[#d8c8a4]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gradient-to-b from-[#030712] to-[#07111f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="text-sm uppercase tracking-[0.35em] text-[#d4bb8a]">{t.aboutEyebrow}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.aboutTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">{t.aboutText}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.aboutCards.map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{t.galleryEyebrow}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.galleryTitle}</h2>
          </div>
          <div className="max-w-xl text-zinc-400">{t.galleryText}</div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.gallery.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{t.reviewsEyebrow}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.reviewsTitle}</h2>
          </div>
          <div className="max-w-xl text-zinc-400">{t.reviewsText}</div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4">
          <div className="flex gap-6 reviews-track">
            {reviewLoop.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="w-[320px] shrink-0 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-[#d4bb8a]">★★★★★</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                    {item.tag}
                  </div>
                </div>
                <p className="mt-6 leading-8 text-zinc-300">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-sm text-zinc-500">{t.reviewsFooter}</div>

        <style jsx>{`
          .reviews-track {
            width: max-content;
            animation: reviews-scroll 45s linear infinite;
          }

          .reviews-track:hover {
            animation-play-state: paused;
          }

          @keyframes reviews-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{t.faqEyebrow}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.faqTitle}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.faqs.map(([q, a]) => (
            <div key={q} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">{q}</h3>
              <p className="mt-2 text-zinc-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-4 pb-32 pt-4 sm:px-6 lg:px-10">
        <a
          href="tel:+17087192825"
          className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-zinc-950 shadow-2xl shadow-cyan-950/40 transition hover:scale-[1.02] lg:hidden"
        >
          {t.callNow}
        </a>

        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-zinc-900 to-amber-300/10 p-6 sm:rounded-[2.5rem] sm:p-8 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div className="min-w-0">
              <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">{t.contactEyebrow}</div>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                {t.contactText}
              </p>
            </div>

            <div className="min-w-0 rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-7">
              <div className="space-y-5 text-zinc-300">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{t.callLabel}</div>
                  <a
                    href="tel:+17087192825"
                    className="mt-2 block break-words text-xl font-medium leading-tight transition hover:text-cyan-300 sm:text-lg"
                  >
                    (708) 719-2825
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{t.emailLabel}</div>
                  <a
                    href="mailto:service@kurtandsonsplumbing.com"
                    className="mt-2 block break-all text-xl font-medium leading-tight transition hover:text-cyan-300 sm:text-lg"
                  >
                    service@kurtandsonsplumbing.com
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{t.areaLabel}</div>
                  <div className="mt-2 text-xl font-medium leading-tight sm:text-lg">{t.serviceArea}</div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-zinc-950 transition hover:scale-[1.01] sm:w-auto sm:text-sm"
              >
                {t.bottomButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.finalTitle}</h2>
          <a
            href="tel:+17087192825"
            className="mt-6 inline-flex rounded-full bg-cyan-400 px-8 py-4 text-sm font-semibold text-zinc-950 transition hover:scale-[1.03]"
          >
            {t.finalButton}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#060d18] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Kurt & Sons</div>
            <div className="mt-2 text-xl font-semibold text-white">Plumbing Services</div>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{t.footerNote}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{t.quickLinks}</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <a href="#services" className="block hover:text-white">{t.navServices}</a>
              <a href="#about" className="block hover:text-white">{t.navAbout}</a>
              <a href="#gallery" className="block hover:text-white">{t.navGallery}</a>
              <a href="#reviews" className="block hover:text-white">{t.navReviews}</a>
              <a href="#faq" className="block hover:text-white">{t.navFaq}</a>
              <a href="#contact" className="block hover:text-white">{t.navContact}</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{t.servicesFooter}</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              {t.services.map((service) => (
                <div key={service.title}>{service.title}</div>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{t.faqFooter}</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              {t.faqs.slice(0, 3).map(([q]) => (
                <div key={q}>{q}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{t.hoursFooter}</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <div>{t.hour1}</div>
              <div>{t.hour2}</div>
              <div>{t.hour3}</div>
            </div>
            <div className="mt-6 text-sm text-zinc-300">
              <div className="font-semibold text-white">(708) 719-2825</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}