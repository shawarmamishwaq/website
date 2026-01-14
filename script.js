// Simple bilingual (EN / AR) translation system for Shawarma Mishwaq

const translations = {
  en: {
    brandName: "Shawarma Mishwaq",
    brandTagline: "Shawarma & Mashawi in Oman",
    navAbout: "About",
    navMenu: "Menu",
    navLocation: "Location",
    navContact: "Contact",
    heroTitle: "Real Shawarma. Real Flame. Real Oman Taste.",
    heroSubtitle:
      "Freshly sliced shawarma and charcoal-grilled mashawi, prepared daily in the heart of Oman.",
    heroSeeMenu: "See our menu",
    heroFindUs: "Find us in Oman",
    heroHours: "Open daily: 11:00 AM – 1:00 AM",
    heroService: "Dine‑in · Takeaway · Delivery",
    highlightTitle: "Signature Shawarma Cone",
    highlightText:
      "Marinated for 24 hours with our secret Mishwaq spices, slow‑roasted to juicy perfection.",
    highlightPoint1: "Chicken & beef options",
    highlightPoint2: "Freshly baked saj & Arabic bread",
    highlightPoint3: "Homemade garlic, tahini & spicy sauces",
    aboutTitle: "About Shawarma Mishwaq",
    aboutText1:
      "Shawarma Mishwaq is a local Omani brand specialized in shawarma and mashawi (charcoal grills). We combine traditional recipes with high‑quality ingredients to bring you the real taste of the region.",
    aboutText2:
      "Every skewer is marinated in small batches, grilled on open flame and served hot. Whether you are craving a quick shawarma sandwich or a full mixed grill platter, our team is ready to serve you with a smile.",
    aboutText3:
      "We are proudly based in Oman and focused on serving families, offices and night‑time food lovers with consistent quality and flavor.",
    aboutCard1Title: "Fresh & Daily",
    aboutCard1Text: "Marinated and prepared every morning, never frozen shawarma cones.",
    aboutCard2Title: "Charcoal Grilled",
    aboutCard2Text: "Real mashawi with smoky flavor from natural charcoal.",
    aboutCard3Title: "Omani Focus",
    aboutCard3Text: "Flavors and portions tailored for guests in Oman.",
    menuTitle: "Our Shawarma & Mashawi Menu",
    menuIntro:
      "A focused menu with the favorites our guests in Oman love most. Ask our team for today’s offers and family boxes.",
    menuShawarmaTitle: "Shawarma",
    menuShawarma1: "Chicken shawarma sandwich (saj or Arabic bread)",
    menuShawarma2: "Beef shawarma sandwich",
    menuShawarma3: "Shawarma platter with fries, salad & sauces",
    menuShawarma4: "Family shawarma box (ideal for sharing)",
    menuMashawiTitle: "Mashawi (Grills)",
    menuMashawi1: "Mixed grill platter (chicken tikka, kebab, lamb)",
    menuMashawi2: "Chicken tikka skewers",
    menuMashawi3: "Beef & lamb kebab skewers",
    menuMashawi4: "Grilled vegetables & fresh bread",
    menuSidesTitle: "Sides & Extras",
    menuSides1: "Crispy fries & spicy fries",
    menuSides2: "Garlic sauce, tahini & chili sauce",
    menuSides3: "Fresh salads & pickles",
    menuSides4: "Soft drinks & bottled water",
    locationTitle: "Find Shawarma Mishwaq in Oman",
    locationText1:
      "We are located in a convenient area so you can easily stop by for a quick shawarma or pick up a full mashawi meal for the family.",
    locationText2:
      "Use your favorite maps application to search for “Shawarma Mishwaq” in Oman and follow the directions. We are also available on popular delivery apps in the Sultanate.",
    locationLabelCity: "City:",
    locationCity: "Muscat, Oman",
    locationLabelHours: "Opening hours:",
    locationHours: "11:00 AM – 1:00 AM (7 days a week)",
    mapPlaceholder: "Map preview – add Google Maps link here.",
    mapButton: "Open in Google Maps",
    contactTitle: "Contact & Orders",
    contactText1:
      "For orders, catering, or general questions about Shawarma Mishwaq, reach out to us using the details below.",
    contactPhoneLabel: "Phone / WhatsApp:",
    contactEmailLabel: "Email:",
    contactSocialLabel: "Social:",
    contactSocialText: "Follow “Shawarma Mishwaq” on Instagram & TikTok.",
    contactCateringTitle: "Catering & Events",
    contactCateringText:
      "Planning an office lunch, family gathering or celebration in Oman? Ask us about shawarma live stations and mashawi catering packages.",
    footerCopyright: "© Shawarma Mishwaq. All rights reserved.",
    footerSeo: "Authentic shawarma & mashawi restaurant in Oman – Shawarma Mishwaq.",
  },
  ar: {
    brandName: "شاورما مشواق",
    brandTagline: "شاورما ومشاوي في عُمان",
    navAbout: "من نحن",
    navMenu: "القائمة",
    navLocation: "الموقع",
    navContact: "التواصل",
    heroTitle: "شاورما على الأصول.. فحم حيّ.. نكهة عُمانية.",
    heroSubtitle:
      "شاورما طازجة ومشاوي على الفحم تُحضّر يوميًا لتقديم أفضل نكهات الشاورما والمشاوي في عُمان.",
    heroSeeMenu: "شاهد القائمة",
    heroFindUs: "اعرف موقعنا في عُمان",
    heroHours: "يومياً: 11 صباحاً – 1 بعد منتصف الليل",
    heroService: "صالة طعام · سفري · توصيل",
    highlightTitle: "سيخ شاورما مشواق المميز",
    highlightText:
      "تتبيلة خاصة لمدة 24 ساعة مع بهارات مشواق السرّية، وطهي بطيء حتى تصل لأقصى درجات الطراوة.",
    highlightPoint1: "شاورما دجاج ولحم",
    highlightPoint2: "خبز صاج وخبز عربي طازج",
    highlightPoint3: "ثوم، طحينية، وصلصات حارة منزلية",
    aboutTitle: "عن شاورما مشواق",
    aboutText1:
      "شاورما مشواق علامة عُمانية متخصصة في الشاورما والمشاوي على الفحم. نمزج الوصفات التقليدية مع مكونات عالية الجودة لنقدم لكم الطعم الأصيل.",
    aboutText2:
      "كل سيخ يُتبل في دفعات صغيرة ويشوى على الفحم مباشرة ويُقدّم ساخناً. سواء كنت تبحث عن ساندويتش شاورما سريع أو صحن مشاوي متكامل، فريقنا جاهز لخدمتكم.",
    aboutText3:
      "نفخر بكوننا من عُمان ولخدمة العائلات والمكاتب ومحبي السهر بطعم ثابت وجودة عالية.",
    aboutCard1Title: "طازج يومياً",
    aboutCard1Text: "تحضير وتتبيل الشاورما كل صباح بدون تجميد.",
    aboutCard2Title: "مشاوي على الفحم",
    aboutCard2Text: "مذاق مدخن حقيقي باستخدام الفحم الطبيعي.",
    aboutCard3Title: "بنَكهة عُمانية",
    aboutCard3Text: "نكهات وحصص تناسب ذوق ضيوفنا في سلطنة عُمان.",
    menuTitle: "قائمة الشاورما والمشاوي",
    menuIntro:
      "قائمة مختارة بعناية من أكثر الأصناف طلبًا في عُمان. اسأل عن عروض اليوم وباكجات العائلات.",
    menuShawarmaTitle: "الشاورما",
    menuShawarma1: "ساندويتش شاورما دجاج (خبز صاج أو عربي)",
    menuShawarma2: "ساندويتش شاورما لحم",
    menuShawarma3: "صحن شاورما مع بطاطس، سلطة، وصلصات",
    menuShawarma4: "بوكس شاورما عائلي (مناسب للمشاركة)",
    menuMashawiTitle: "المشاوي",
    menuMashawi1: "مشكل مشاوي (دجاج تكا، كباب، لحم)",
    menuMashawi2: "أسياخ دجاج تكا",
    menuMashawi3: "أسياخ كباب لحم وبقر",
    menuMashawi4: "خضار مشوية وخبز طازج",
    menuSidesTitle: "الطلبات الجانبية",
    menuSides1: "بطاطس مقلية وعادية وحارة",
    menuSides2: "ثومية، طحينية، وصلصة حارة",
    menuSides3: "سلطات طازجة ومخللات",
    menuSides4: "مشروبات غازية ومياه",
    locationTitle: "موقع شاورما مشواق في عُمان",
    locationText1:
      "يقع المطعم في موقع يسهل الوصول إليه لتناول شاورما سريعة أو أخذ وجبة مشاوي متكاملة للعائلة.",
    locationText2:
      "ابحث عن \"شاورما مشواق\" في تطبيقات الخرائط واتبع الإرشادات. يتوفر المطعم أيضًا في أشهر تطبيقات التوصيل في السلطنة.",
    locationLabelCity: "المدينة:",
    locationCity: "مسقط، سلطنة عُمان",
    locationLabelHours: "ساعات العمل:",
    locationHours: "من 11 صباحاً حتى 1 بعد منتصف الليل (طوال الأسبوع)",
    mapPlaceholder: "خريطة توضيحية – يمكن إضافة رابط جوجل ماب هنا.",
    mapButton: "فتح الموقع على خرائط جوجل",
    contactTitle: "التواصل والطلبات",
    contactText1:
      "للطلبات، المناسبات أو الاستفسارات حول شاورما مشواق يمكنكم التواصل معنا عبر البيانات التالية:",
    contactPhoneLabel: "هاتف / واتساب:",
    contactEmailLabel: "البريد الإلكتروني:",
    contactSocialLabel: "التواصل الاجتماعي:",
    contactSocialText: "تابعونا على إنستغرام وتيك توك باسم \"شاورما مشواق\".",
    contactCateringTitle: "الولائم والمناسبات",
    contactCateringText:
      "تخطط لغداء عمل، تجمع عائلي أو مناسبة خاصة في عُمان؟ اسألنا عن ركن الشاورما الحي وخيارات بوفيه المشاوي.",
    footerCopyright: "© شاورما مشواق. جميع الحقوق محفوظة.",
    footerSeo: "مطعم شاورما ومشاوي أصيل في سلطنة عُمان – شاورما مشواق.",
  },
};

function setLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  const html = document.documentElement;
  html.setAttribute("lang", lang === "ar" ? "ar" : "en");
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  const titleEn = "Shawarma Mishwaq | Shawarma & Mashawi in Oman";
  const titleAr = "شاورما مشواق | شاورما ومشاوي في عُمان";
  document.title = lang === "ar" ? titleAr : titleEn;

  const descEn =
    "Shawarma Mishwaq serves authentic shawarma and mashawi in Oman. Fresh ingredients, juicy grills, dine-in, takeaway, and delivery.";
  const descAr =
    "شاورما مشواق يقدم شاورما ومشاوي أصيلة في سلطنة عُمان بمكونات طازجة ومشاوي على الفحم، صالة، سفري وتوصيل.";
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute("content", lang === "ar" ? descAr : descEn);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute("content", lang === "ar" ? "ar_OM" : "en_OM");
  }

  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));

  localStorage.setItem("shawarma_mishwaq_lang", lang);
}

// Hero Slider functionality
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  startAutoSlide();

  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoSlide);
    heroSection.addEventListener("mouseleave", startAutoSlide);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("shawarma_mishwaq_lang");
  const initialLang = savedLang === "ar" ? "ar" : "en";
  setLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  initHeroSlider();
});

