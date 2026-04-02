/*
 * ============================================
 *  SITE CONFIGURATION
 *  Edit ONLY this file to customize the website
 * ============================================
 */

const SITE = {
  /* --- Business Info --- */
  name: "Ravintola Pinokkio",
  tagline: "Aito italialainen makuelämys Espoossa",
  description: "Ravintola Pinokkio tarjoaa aitoja italialaisia makuja lämpimässä tunnelmassa. Tuoreet raaka-aineet, perinteiset reseptit ja sydämellinen palvelu.",
  phone: "+358 9 XXX XXXX",
  email: "ravintolapinokkio@gmail.com",
  address: "Espoo, Finland",
  hours: "Ma-Pe 11:00–22:00 | La 12:00–23:00 | Su 12:00–21:00",
  whatsapp: "",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.2!2d24.9414!3d60.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzExLjYiTiAyNMKwNTYnMjkuMCJF!5e0!3m2!1sen!2sfi!4v1",

  /* --- Colors (change these to match client brand) --- */
  colors: {
    primary:   "#dc2626",
    secondary: "#991b1b",
    accent:    "#16a34a",
    bg:        "#ffffff",
    bgAlt:     "#f8fafc",
    text:      "#1e293b",
    textLight: "#64748b",
    white:     "#ffffff"
  },

  /* --- Hero Section --- */
  hero: {
    headline: "Aitoa italialaista makua Espoossa",
    subheadline: "Perinteiset italialaiset reseptit tuoreista raaka-aineista. Nauti pizzasta, pastasta ja viineista lampimassa tunnelmassa. Tervetuloa Pinokkioon!",
    ctaText: "Varaa poyta",
    ctaLink: "#yhteystiedot",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
  },

  /* --- Services / What We Offer --- */
  servicesTitle: "Palvelumme",
  servicesSubtitle: "Kaikki mitä tarvitset unohtumattomaan illanviettoon",
  services: [
    {
      icon: "utensils",
      title: "A la Carte",
      description: "Laaja valikoima pohjoismaisia ja kansainvalisia makuja tuoreista, kauden raaka-aineista valmistettuna."
    },
    {
      icon: "wine-glass",
      title: "Viinisuositukset",
      description: "Sommelier-valittu viinilista, joka taydentaa jokaisen annoksen. Yli 80 viinia ympari maailmaa."
    },
    {
      icon: "cake-candles",
      title: "Yksityistilaisuudet",
      description: "Jarjesta syntymapaivia, yritystilaisuuksia tai haaita tyylikkäässä kabinettitilassamme 40 hengelle."
    },
    {
      icon: "truck",
      title: "Catering",
      description: "Ammattitaitoinen catering-palvelu tilaisuuksiisi. Suunnittelemme menun toiveidesi mukaan."
    }
  ],

  /* --- About Section --- */
  about: {
    title: "Tarina meidän takana",
    text: "Ravintola Helsinki perustettiin vuonna 2018 intohimosta pohjoismaiseen ruokakulttuuriin. Kokki Mikael Lindström tuo jokaisen annoksen esiin kunnioittaen perinteitä ja uskaltaen uudistua. Käytämme ainoastaan paikallisia, kestävän kehityksen mukaisia raaka-aineita ja teemme yhteistyötä suomalaisten tuottajien kanssa. Ravintolassa vallitsee lämmin, moderni tunnelma, jossa jokainen vieras tuntee olonsa tervetulleeksi.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    stats: [
      { number: "6+", label: "Vuotta kokemusta" },
      { number: "12K+", label: "Tyytyväistä asiakasta" },
      { number: "4.8", label: "Google-arvosana" }
    ]
  },

  /* --- Testimonials --- */
  reviewsTitle: "Asiakkaiden kokemuksia",
  reviewsSubtitle: "Lue mitä vieraamme sanovat",
  reviews: [
    {
      name: "Anna Virtanen",
      role: "Vakioasiakas",
      text: "Paras ravintola Helsingissä! Ruoka on aina tuoretta ja maukasta, palvelu ystävällistä. Erityisesti poronkäristys on aivan uskomaton.",
      rating: 5
    },
    {
      name: "Markus Korhonen",
      role: "Yritysasiakas",
      text: "Järjestimme yrityksen joulujuhlat täällä ja kaikki oli täydellistä. Kabinetti oli upea, menu räätälöity ja henkilökunta huolehti jokaisesta yksityiskohdasta.",
      rating: 5
    },
    {
      name: "Sofia Mäkelä",
      role: "Ruokabloggaaja",
      text: "Vihdoin ravintola, joka ymmärtää pohjoismaisen minimalismin myös lautasella. Maut ovat puhtaita ja raaka-aineet puhuvat puolestaan. Suosittelen lämpimästi!",
      rating: 5
    }
  ],

  /* --- Social Media --- */
  social: {
    instagram: "https://instagram.com/ravintolahelsinki",
    facebook: "https://facebook.com/ravintolahelsinki",
    linkedin: "",
    tiktok: "",
    youtube: ""
  },

  /* --- EmailJS (contact form) --- */
  emailjs: {
    serviceId:  "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey:  "YOUR_PUBLIC_KEY"
  },

  /* --- Google Analytics --- */
  analytics: "G-XXXXXXXXXX",

  /* --- Language / i18n --- */
  lang: "fi",
  navLinks: {
    services: "Palvelut",
    about:    "Meistä",
    reviews:  "Arvostelut",
    contact:  "Yhteystiedot"
  },
  contactForm: {
    title: "Ota yhteyttä",
    subtitle: "Varaa pöytä tai kysy lisätietoja",
    namePlaceholder: "Nimesi",
    emailPlaceholder: "Sähköpostisi",
    phonePlaceholder: "Puhelinnumerosi",
    messagePlaceholder: "Viestisi...",
    sendButton: "Lähetä viesti",
    successMessage: "Kiitos viestistäsi! Otamme yhteyttä pian.",
    errorMessage: "Jokin meni pieleen. Yritä uudelleen tai soita meille."
  },
  cookieText: "Käytämme evästeitä parantaaksemme kokemustasi. Jatkamalla hyväksyt evästekäytäntömme.",
  cookieButton: "Hyväksy"
};
