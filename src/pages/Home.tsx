/**
 * corē Nacht-Kollagen Landing Page
 * Structure inspired by: qureskincare.com/pages/qure-microinfusion-offer
 * Design: Elegant, feminine, premium — deep rose/burgundy brand color
 * Typography: DM Serif Display (headings) + DM Sans (body)
 *
 * Editor: Shopify-style section editor with drag-and-drop sidebar
 */

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Star,
  Check,
  X,
  Shield,
  Truck,
  Award,
  Moon,
  Sun,
  Leaf,
  Droplets,
  Droplet,
  Zap,
  Heart,
  Sparkles,
  Clock,
  RefreshCw,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ─── Brand color ─── */
const BRAND = "oklch(0.42 0.12 10)";
const BRAND_GRADIENT = "linear-gradient(135deg, oklch(0.42 0.12 10), oklch(0.55 0.14 350))";

/* ─── Payment Logos ─── */
function PaymentLogos() {
  const logos = [
    { name: "Mastercard", src: "/payment-logos/mastercard.png" },
    { name: "AMEX", src: "/payment-logos/amex.png" },
    { name: "VISA", src: "/payment-logos/visa.png" },
    { name: "Stripe", src: "/payment-logos/stripe.png" },
    { name: "Apple Pay", src: "/payment-logos/apple-pay.png" },
    { name: "Shop Pay", src: "/payment-logos/shop-pay.png" },
    { name: "Klarna", src: "/payment-logos/klarna.png" },
    { name: "UnionPay", src: "/payment-logos/unionpay.png" },
    { name: "Google Pay", src: "/payment-logos/google-pay.png" },
  ];

  return (
    <div className="flex flex-col items-center gap-2 mt-4 w-full">
      <div className="flex flex-wrap gap-2 justify-center">
        {/* Row 1: Mastercard, AMEX, VISA, Stripe, Apple Pay, Shop Pay, Klarna */}
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/mastercard.png" alt="Mastercard" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/amex.png" alt="AMEX" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/visa.png" alt="VISA" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/stripe.png" alt="Stripe" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-11 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/apple-pay.png" alt="Apple Pay" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/shop-pay.png" alt="Shop Pay" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/klarna.png" alt="Klarna" className="max-h-full max-w-full object-contain" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {/* Row 2: UnionPay, Mastercard, Google Pay */}
        <div className="h-6 w-12 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/unionpay.png" alt="UnionPay" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-10 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/mastercard.png" alt="Mastercard" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="h-6 w-11 bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden p-0.5">
          <img src="/payment-logos/google-pay.png" alt="Google Pay" className="max-h-full max-w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

/* ─── Stars ─── */
function Stars({ count = 5, size = "sm" }: { count?: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${cls} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-[0.95rem] text-gray-800 group-hover:text-[oklch(0.42_0.12_10)] transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-[oklch(0.42_0.12_10)] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-gray-600 leading-relaxed pr-8">{answer}</p>}
    </div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ initials, name, location, title, text }: {
  initials: string; name: string; location: string; title: string; text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-shrink-0 w-[300px] md:w-[340px]">
      <Stars />
      <p className="font-semibold text-gray-800 text-sm mt-3 mb-2">{title}</p>
      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-4">{text}</p>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: BRAND }}>
          {initials}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
        <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
          <BadgeCheck className="w-3.5 h-3.5" style={{ color: BRAND }} />
          Verifiziert
        </span>
      </div>
    </div>
  );
}

/* ─── INGREDIENT ICONS MAP ─── */
const INGREDIENT_ICONS = [
  <Droplets className="w-5 h-5" />,
  <Moon className="w-5 h-5" />,
  <Leaf className="w-5 h-5" />,
  <Zap className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <RefreshCw className="w-5 h-5" />,
  <Sun className="w-5 h-5" />,
  <Leaf className="w-5 h-5" />,
];

/* ─── BENEFIT TAB ICONS ─── */
const BENEFIT_ICONS = [
  <Sparkles className="w-4 h-4" />,
  <Moon className="w-4 h-4" />,
  <Heart className="w-4 h-4" />,
  <Zap className="w-4 h-4" />,
];

/* ─── STEP ICONS ─── */
const STEP_ICONS = [
  <Droplets className="w-5 h-5" />,
  <Moon className="w-5 h-5" />,
  <Sun className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
];

/* ─── TRUST BADGE ICONS ─── */
const TRUST_ICONS = [
  <Shield className="w-5 h-5" />,
  <Truck className="w-5 h-5" />,
  <Award className="w-5 h-5" />,
];

/* ─── Pricing Product Visual ─── */
function PricingProductVisual() {
  return (
    <div className="rounded-2xl overflow-hidden relative w-full flex items-center justify-center" style={{ minHeight: 420, background: "oklch(0.97 0.015 10)" }}>
      <img src="/BasicFlasche.png" alt="corē Nacht-Kollagen Flasche" className="object-contain" style={{ maxHeight: 400, width: "auto" }} />
    </div>
  );
}

const HERO_WOMAN_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429688826/7ZH8jXscfrhdEt28cpoy7K/hero_woman_338b5068.jpg";

/* ─── Hero Image Panel ─── */
function HeroImagePanel() {
  const img = HERO_WOMAN_IMAGE;

  // On mobile: fade from bottom (image above text). On desktop: fade from left (image on right).
  const fadeOverlay = (
    <>
      {/* Desktop: fade left edge to white */}
      <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, white 0%, transparent 35%)" }} />
      {/* Mobile: fade bottom edge to white */}
      <div className="absolute inset-0 block lg:hidden" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
    </>
  );

  return (
    <div className="relative w-full h-full" style={{ minHeight: 300 }}>
      <img src={img} alt="Hero" className="absolute inset-0 w-full h-full object-cover object-top" />
      {fadeOverlay}
    </div>
  );
}

/* ─── Section renderers ─── */
function SectionAnnouncement() {
  const announcement = { text: "**Limitiertes Launch-Special:** 22% Rabatt auf deine erste Bestellung — nur diese Woche!" };
  const parts = announcement.text.split("**");
  return (
    <div className="bg-[oklch(0.18_0.01_50)] text-white text-center py-2.5 px-4 text-xs font-medium tracking-wide">
      {parts.map((part: any, i: number) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
      )}
    </div>
  );
}

function SectionHero() {
  const h = {
    eyebrow: "Glow-Up im Schlaf",
    headline: "Strahlende Haut",
    headlineItalic: "während du schläfst",
    subheadline: "**corē Nacht-Kollagen** liefert hochdosiertes Meereskollagen, Hyaluronsäure, Vitamin C und Ashwagandha — genau dann, wenn deine Haut am aufnahmebereitesten ist.",
    cta: "Jetzt ausprobieren",
    badges: ["Waldbeerengeschmack", "Kein Fischgeschmack", "Made in Germany", "Labor geprüft", "10ml/Nacht", "GMP Zertifiziert"],
    trustLine: "30 Tage Geld-zurück-Garantie",
    ratingText: "von 918 Bewertungen",
    stats: [
      { value: "7.800+", label: "Begeisterte Kundinnen" },
      { value: "4 Wochen", label: "Bis zu sichtbaren Ergebnissen" },
      { value: "10x", label: "Bessere Aufnahme als Pulver" }
    ]
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Text column: on mobile shows below image, on desktop shows left */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 lg:py-24 relative z-10 order-2 lg:order-1">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-1.5">
              {["L", "S", "M", "J"].map((initial, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: `oklch(${0.38 + i * 0.04} 0.1 ${10 + i * 15})` }}>
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500"><strong className="text-gray-700">7.800+</strong> zufriedene Kundinnen</span>
          </motion.div>

          <motion.p variants={fadeUp} className="section-label mb-3">{h.eyebrow}</motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            {h.headline}<br />
            <em style={{ color: BRAND, fontStyle: "italic" }}>{h.headlineItalic}</em>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            {h.subheadline.split("**").map((part: any, i: number) =>
              i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
            )}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-4">
            <a href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-sm"
              style={{ background: BRAND_GRADIENT }}>
              <Sparkles className="w-4 h-4" />
              {h.cta}
            </a>
          </motion.div>

          {/* Quality badge pills — moved from image overlay */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
            {h.badges.map((badge: any, i: number) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">
                {i === 1 ? <X className="w-3 h-3 text-red-400" /> : <Check className="w-3 h-3" style={{ color: BRAND }} />}
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-gray-400 flex items-center gap-1.5 mb-6">
            <Shield className="w-3.5 h-3.5" style={{ color: BRAND }} />
            {h.trustLine}
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <Stars size="md" />
            <span className="text-sm font-semibold text-gray-700">4.4/5</span>
            <span className="text-xs text-gray-400">{h.ratingText}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Image column: on mobile shows above text, on desktop shows right */}
      <div className="relative block overflow-hidden order-1 lg:order-2" style={{ minHeight: 300 }}>
        <HeroImagePanel />
        {/* Badge pills removed from image — now shown below CTA in text column */}
      </div>
    </section>
  );
}

function SectionStats() {
  const h = {
    stats: [
      { value: "7.800+", label: "Begeisterte Kundinnen" },
      { value: "4 Wochen", label: "Bis zu sichtbaren Ergebnissen" },
      { value: "10x", label: "Bessere Aufnahme als Pulver" }
    ]
  };
  return (
    <section className="py-10 border-y border-gray-100" style={{ background: "oklch(0.99 0.005 10)" }}>
      <div className="container">
        <div className="grid grid-cols-3 gap-6 text-center">
          {h.stats.map(({ value, label }: any) => (
            <div key={value}>
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "'DM Serif Display', serif", color: BRAND }}>{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionProblem() {
  const p = {
    eyebrow: "Das Problem",
    headline: "Normale Kollagen-Produkte wirken nicht",
    body: "**Kollagen-Pulver** werden zu 90% nicht aufgenommen. **Kapseln** sind unbequem. **Cremes** wirken nur oberflächlich.\n\nDein Körper braucht **bioaktives, hydrolysiertes Kollagen**, das er wirklich aufnehmen kann. Und er braucht es **nachts**, wenn die Regeneration am intensivsten läuft.",
    quote: "Nach 2 Wochen hat meine Freundin mich gefragt, was ich mit meiner Haut gemacht habe. Sie sieht einfach so viel frischer aus.",
    powderTitle: "Typische Kollagen-Pulver",
    powderPoints: ["Schlechte Aufnahme (nur 10%)", "Schmeckt nach Fisch", "Schwer zu dosieren", "Keine Zusatzstoffe"],
    coreTitle: "corē Nacht-Kollagen",
    corePoints: ["10x bessere Aufnahme", "Waldbeeren-Geschmack", "Fertig dosiert (10ml)", "Mit Hyaluronsäure, Vitamin C, Ashwagandha"]
  };
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: problem text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label mb-3">{p.eyebrow}</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
              {p.headline}
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-600 text-sm leading-relaxed">
              {p.body.split("\n\n").map((para: any, i: number) => (
                <p key={i}>
                  {para.split("**").map((part: any, j: number) =>
                    j % 2 === 1 ? <strong key={j} className="text-gray-800">{part}</strong> : part
                  )}
                </p>
              ))}
            </motion.div>
            <motion.blockquote variants={fadeUp} className="mt-6 pl-4 border-l-2 text-sm text-gray-500 italic" style={{ borderColor: BRAND }}>
              {p.quote}
            </motion.blockquote>
          </motion.div>

          {/* Right: comparison */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {/* Old product */}
            <motion.div variants={fadeUp} className="rounded-2xl p-6 border border-gray-200 bg-white">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{p.powderTitle}</p>
              <ul className="space-y-2">
                {p.powderPoints.map((point: any) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* corē */}
            <motion.div variants={fadeUp} className="rounded-2xl p-6 border-2" style={{ borderColor: BRAND, background: "oklch(0.99 0.01 10)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND }}>{p.coreTitle}</p>
              <ul className="space-y-2">
                {p.corePoints.map((point: any) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mini testimonial */}
            <motion.div variants={fadeUp} className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm">
              <Stars />
              <p className="text-sm text-gray-600 italic mt-2 mb-3">
                "Nach 2 Wochen hat meine Freundin mich gefragt, was ich mit meiner Haut gemacht habe. Sie sieht einfach so viel frischer aus."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: BRAND }}>L</div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">Laura K.</p>
                  <p className="text-xs text-gray-400">Berlin, 23</p>
                </div>
                <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" style={{ color: BRAND }} />
                  Verifiziert
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHowItWorks() {
  const h = {
    eyebrow: "So funktioniert corē",
    headline: "Deine Nacht-Routine\nfür strahlende Haut",
    subheadline: "Einfach, effektiv, wissenschaftlich belegt.",
    visualHeading: "Wirkt während du schläfst",
    visualSub: "Dein Körper regeneriert sich nachts am intensivsten — genau dann liefert corē die Wirkstoffe.",
    visualLabels: ["Abends", "Schlaf", "Morgens"],
    steps: [
      { title: "Nimm den Shot", desc: "10ml vor dem Schlafengehen — schmeckt nach Waldbeeren, nicht nach Fisch." },
      { title: "Entspann dich", desc: "Ashwagandha hilft dir zu entspannen und fördert einen besseren Schlaf." },
      { title: "Deine Haut regeneriert", desc: "Während du schläfst, arbeitet corē: Kollagen wird aufgebaut, Hyaluronsäure hydratisiert." },
      { title: "Wach auf mit Glow", desc: "Nach 4 Wochen: glattere Haut, weniger Falten, sichtbar frischer." }
    ],
    nightNote: { title: "💡 Warum nachts?", body: "Dein Körper regeneriert sich nachts am intensivsten. Die Kollagensynthese läuft auf Hochtouren — der perfekte Zeitpunkt für corē." }
  };
  return (
    <section className="py-20 md:py-28" style={{ background: "oklch(0.98 0.005 10)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: visual */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-3xl p-10 flex flex-col items-center justify-center min-h-[380px]"
              style={{ background: "oklch(0.18 0.01 50)" }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{ background: "oklch(0.28 0.05 10)", color: "oklch(0.75 0.08 10)" }}>
                <Moon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {h.visualHeading}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed text-center max-w-xs">
                {h.visualSub}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-xs">
                {h.visualLabels.map((label: any, i: number) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.95 0.02 10)", color: BRAND }}>
                      {STEP_ICONS[i]}
                    </div>
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: steps */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="section-label mb-3">{h.eyebrow}</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
              {h.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-8 text-sm">{h.subheadline}</motion.p>

            <motion.div variants={fadeUp} className="space-y-6">
              {h.steps.map((step: any, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: BRAND }}>{STEP_ICONS[i]}</span>
                      <h3 className="font-semibold text-gray-800 text-sm">{step.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 p-4 rounded-xl" style={{ background: "oklch(0.97 0.015 10)" }}>
              <p className="text-xs font-semibold mb-1 flex items-center gap-1.5" style={{ color: BRAND }}>
                <Clock className="w-3.5 h-3.5" />
                {h.nightNote.title}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">{h.nightNote.body}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionBeforeAfter() {
  const ba = {
    eyebrow: "Echte Ergebnisse",
    headline: "Sichtbare Veränderung\nin 4 Wochen",
    subheadline: "Vergleiche die Hautqualität vor und nach der Verwendung von corē Nacht-Kollagen.",
    tabs: [
      {
        label: "Hydration",
        heading: "Intensive Feuchtigkeitspflege",
        desc: "Hyaluronsäure bindet Wasser in der Haut und sorgt für ein pralleres, jugendlicheres Aussehen.",
        bullets: ["Sichtbare Faltenreduktion", "Glattere Hautstruktur", "Langanhaltende Hydration"],
        testimonial: { text: "Meine Haut fühlt sich so viel feuchter an!", initials: "S", name: "Sarah M.", location: "Berlin" }
      },
      {
        label: "Elastizität",
        heading: "Verbesserte Hautfestigkeit",
        desc: "Kollagen ist das Gerüst deiner Haut. Mit corē wird es wieder aufgebaut und deine Haut wirkt straffer.",
        bullets: ["Straffere Hautstruktur", "Weniger Falten", "Jugendlicheres Aussehen"],
        testimonial: { text: "Die Elastizität meiner Haut ist deutlich besser!", initials: "J", name: "Julia K.", location: "München" }
      },
      {
        label: "Glow",
        heading: "Natürlicher Hautglanz",
        desc: "Vitamin C und Ashwagandha sorgen für einen natürlichen, gesunden Glow von innen heraus.",
        bullets: ["Strahlender Teint", "Ebenerä Hautfarbe", "Sichtbar frischer"],
        testimonial: { text: "Meine Haut strahlt wie nie zuvor!", initials: "A", name: "Anna L.", location: "Hamburg" }
      }
    ]
  };
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3 text-center">{ba.eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            {ba.headline}
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-8">
            {ba.tabs.map((tab: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
                style={activeTab === i
                  ? { background: BRAND, color: "white" }
                  : { background: "oklch(0.96 0.005 50)", color: "oklch(0.4 0.01 50)", border: "1px solid oklch(0.9 0.005 50)" }
                }
              >
                {BENEFIT_ICONS[i]}
                {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="rounded-2xl p-6 border" style={{ background: "oklch(0.99 0.01 10)", borderColor: "oklch(0.88 0.03 10)" }}>
              <Stars />
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4 italic">
                "{ba.tabs[activeTab].testimonial.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: BRAND }}>
                  {ba.tabs[activeTab].testimonial.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">{ba.tabs[activeTab].testimonial.name}</p>
                  <p className="text-xs text-gray-400">{ba.tabs[activeTab].testimonial.location}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" style={{ color: BRAND }} />
                  Verifiziert
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {ba.tabs[activeTab].heading}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{ba.tabs[activeTab].desc}</p>
              <ul className="space-y-2.5">
                {ba.tabs[activeTab].bullets.map((bullet: any) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND }} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-white text-xs font-semibold"
                style={{ background: BRAND }}>
                <Sparkles className="w-3.5 h-3.5" />
                Jetzt ausprobieren
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIngredients() {
  const ing = {
    eyebrow: "Wirkstoffe",
    headline: "Hochdosiert & hochwertig",
    subheadline: "Jede Zutat wurde sorgfältig ausgewählt für maximale Wirksamkeit.",
    items: [
      { name: "Meereskollagen", desc: "Typ I & III, hydrolysiert für 10x bessere Aufnahme" },
      { name: "Hyaluronsäure", desc: "Bindet bis zu 1000x ihr Eigengewicht an Wasser" },
      { name: "Vitamin C", desc: "Antioxidans für strahlende Haut und Kollagensynthese" },
      { name: "Ashwagandha", desc: "Adaptogen für Stressabbau und besseren Schlaf" }
    ]
  };
  return (
    <section className="py-20 md:py-28" style={{ background: "oklch(0.18 0.01 50)" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3 text-center" style={{ color: "oklch(0.75 0.08 10)" }}>{ing.eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            {ing.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-400 mb-10 max-w-xl mx-auto text-sm">
            {ing.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ing.items.map((item: any, i: number) => (
              <div key={item.name} className="rounded-xl p-5 border" style={{ background: "oklch(0.22 0.01 50)", borderColor: "oklch(0.28 0.01 50)" }}>
                <div className="ingredient-icon mb-3">{INGREDIENT_ICONS[i % INGREDIENT_ICONS.length]}</div>
                <h3 className="font-semibold text-white text-sm mb-0.5">{item.name}</h3>
                <p className="text-xs mb-2" style={{ color: "oklch(0.75 0.08 10)" }}>{item.dose}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionComparison() {
  const c = {
    eyebrow: "Warum corē?",
    headline: "Vergleiche corē mit anderen Produkten",
    rows: [
      { label: "Meereskollagen", core: "Ja", powder: "Nein", clinic: "Nein" },
      { label: "Hyaluronsäure", core: "Ja", powder: "Nein", clinic: "Nein" },
      { label: "Vitamin C", core: "Ja", powder: "Nein", clinic: "Nein" },
      { label: "Ashwagandha", core: "Ja", powder: "Nein", clinic: "Nein" },
      { label: "Kein Fischgeschmack", core: "Ja", powder: "Nein", clinic: "Nein" },
      { label: "Laborgeprüft", core: "Ja", powder: "Nein", clinic: "Nein" }
    ]
  };
  return (
    <section className="py-20 md:py-28" style={{ background: "oklch(0.98 0.005 10)" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3 text-center">{c.eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            {c.headline}
          </motion.h2>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-gray-400 font-normal text-xs w-1/4"></th>
                  <th className="py-3 px-4 text-center rounded-t-xl" style={{ background: BRAND, color: "white" }}>
                    <div className="font-bold text-sm">corē</div>
                    <div className="text-xs opacity-80">Nacht-Kollagen</div>
                  </th>
                  <th className="py-3 px-4 text-center text-gray-600 bg-white rounded-t-xl">
                    <div className="font-semibold text-xs">Kollagen-Pulver</div>
                    <div className="text-xs text-gray-400">Herkömmlich</div>
                  </th>
                  <th className="py-3 px-4 text-center text-gray-600 bg-white rounded-t-xl">
                    <div className="font-semibold text-xs">Kollagen-Klinik</div>
                    <div className="text-xs text-gray-400">Behandlung</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map(({ label, core, powder, clinic }: any, i: number) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? "oklch(0.99 0.005 10)" : "white" }}>
                    <td className="py-3 px-4 text-xs text-gray-500 font-medium">{label}</td>
                    <td className="py-3 px-4 text-center text-xs font-semibold" style={{ color: BRAND, background: "oklch(0.97 0.015 10)" }}>
                      <span className="flex items-center justify-center gap-1">
                        <Check className="w-3 h-3" />
                        {core}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-xs text-gray-500">{powder}</td>
                    <td className="py-3 px-4 text-center text-xs text-gray-500">{clinic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTestimonials() {
  const t = {
    eyebrow: "Was unsere Kundinnen sagen",
    headline: "Über 7.800 begeisterte\nKundinnen",
    ratingText: "von 918 Bewertungen",
    items: [
      { name: "Sarah M.", title: "Endlich sichtbare Ergebnisse", text: "Nach 4 Wochen corē kann ich einen großen Unterschied sehen. Meine Haut ist glatter, strahlender und fühlt sich hydratisiert an. Ich bin begeistert!" },
      { name: "Julia K.", title: "Einfach zu nehmen", text: "Der Berry-Shot schmeckt lecker und ist so praktisch. Ich nehme ihn jeden Abend vor dem Schlafengehen. Meine Haut dankt es mir!" },
      { name: "Anna L.", title: "Kein Fischgeschmack", text: "Ich war skeptisch, aber corē schmeckt wirklich nach Beeren, nicht nach Fisch. Und die Ergebnisse sprechen für sich!" },
    ]
  };
  const carouselRef = useRef<HTMLDivElement>(null);
  function scrollCarousel(dir: "left" | "right") {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
    }
  }
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3">{t.eyebrow}</motion.p>
          <div className="flex items-end justify-between mb-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {t.headline.split("\n").map((line: string, i: number) => (
                  <span key={i}>{line}{i < t.headline.split("\n").length - 1 && <br />}</span>
                ))}
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-2xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: BRAND }}>4.4</span>
                <Stars size="md" />
                <span className="text-sm text-gray-500">{t.ratingText}</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="hidden sm:flex gap-2">
              <button onClick={() => scrollCarousel("left")} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button onClick={() => scrollCarousel("right")} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </motion.div>
          </div>

          <div ref={carouselRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {t.items.map((item: any, idx: number) => (
              <div key={item.name} className="snap-start">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionPricing() {
  const p = {
    eyebrow: "Einfach bestellen",
    headline: "Wähle dein Paket",
    subheadline: "Alle Pakete enthalten 100% reines Meereskollagen, Hyaluronsäure, Vitamin C und Ashwagandha.",
    urgencyText: "**22% günstiger** mit dem Launch-Special – nur für kurze Zeit!",
    subscriptionLabel: "Abo",
    subscriptionBadge: "22% sparen",
    subscriptionSub: "Jederzeit kündbar",
    subscriptionPrice: "€38,99",
    subscriptionOriginal: "€49,99",
    subscriptionSavings: "€11,00 Ersparnis",
    subscriptionPerNight: "€1,30/Nacht",
    oneTimeLabel: "Einmalig",
    oneTimeSub: "Keine Verpflichtung",
    oneTimePrice: "€49,99",
    oneTimePerNight: "€1,67/Nacht",
    included: ["30 Tage Geld-zurück-Garantie", "Versand in 1-2 Tagen", "Kein Fischgeschmack"],
    ctaSubscription: "Jetzt abonnieren",
    ctaOneTime: "Jetzt kaufen",
    trustBadges: [
      { title: "Garantie", sub: "30 Tage Geld zurück" },
      { title: "Versand", sub: "1-2 Tage" },
      { title: "Made in Germany", sub: "Höchste Qualität" }
    ],
    chatTitle: "Fragen?",
    chatSub: "Unser Support-Team antwortet innerhalb von 2 Stunden.",
    chatCta: "Kontakt"
  };
  const [selectedPlan, setSelectedPlan] = useState<"abo" | "einmal">("abo");
  return (
    <section id="pricing" className="py-20 md:py-28" style={{ background: "oklch(0.98 0.005 10)" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3 text-center">{p.eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            {p.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 text-sm">{p.subheadline}</motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-600 font-medium">
              {p.urgencyText.split("**").map((part: string, i: number) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
              )}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* LEFT: Product visual + trust */}
            <div className="flex flex-col gap-5">
              <PricingProductVisual />

              <div className="grid grid-cols-3 gap-3">
                {p.trustBadges.map(({ title, sub }: any, i: number) => (
                  <div key={title} className="bg-white rounded-xl p-3 text-center border border-gray-100">
                    <div className="flex justify-center mb-1.5" style={{ color: BRAND }}>{TRUST_ICONS[i]}</div>
                    <p className="text-xs font-semibold text-gray-700">{title}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: BRAND }} />
                <div>
                  <p className="text-xs font-semibold text-gray-700">{p.chatTitle}</p>
                  <p className="text-xs text-gray-400">{p.chatSub}</p>
                </div>
                <button className="ml-auto text-xs font-semibold px-3 py-1.5 rounded-full border-2 transition-colors hover:bg-gray-50"
                  style={{ borderColor: BRAND, color: BRAND }}>
                  {p.chatCta}
                </button>
              </div>
            </div>

            {/* RIGHT: Purchase options */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-5">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Wähle dein Angebot:</p>
                <div className="space-y-3">
                  {/* Subscription */}
                  <label className="block cursor-pointer">
                    <input type="radio" name="plan" value="abo" checked={selectedPlan === "abo"} onChange={() => setSelectedPlan("abo")} className="sr-only" />
                    <div className={`rounded-xl p-4 border-2 transition-all ${selectedPlan === "abo" ? "border-[oklch(0.42_0.12_10)]" : "border-gray-200"}`}
                      style={selectedPlan === "abo" ? { background: "oklch(0.99 0.01 10)" } : {}}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 flex items-center justify-center ${selectedPlan === "abo" ? "border-[oklch(0.42_0.12_10)]" : "border-gray-300"}`}>
                            {selectedPlan === "abo" && <div className="w-2 h-2 rounded-full" style={{ background: BRAND }} />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-semibold text-gray-800">{p.subscriptionLabel}</span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: BRAND }}>{p.subscriptionBadge}</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5">{p.subscriptionSub}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: BRAND }}>{p.subscriptionPrice}</div>
                          <div className="text-xs text-gray-400 line-through">{p.subscriptionOriginal}</div>
                          <div className="text-xs font-semibold" style={{ color: BRAND }}>{p.subscriptionSavings}</div>
                        </div>
                      </div>
                      {/* Supply info */}
                      <div className="mt-2 ml-6 text-xs font-semibold text-left" style={{ color: BRAND }}>
                        Reicht für 50 Nächte
                      </div>
                      <div className="mt-2 ml-6 text-xs text-gray-500 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" style={{ color: BRAND }} />
                        {p.subscriptionPerNight}
                      </div>
                    </div>
                  </label>

                  {/* One-time */}
                  <label className="block cursor-pointer">
                    <input type="radio" name="plan" value="einmal" checked={selectedPlan === "einmal"} onChange={() => setSelectedPlan("einmal")} className="sr-only" />
                    <div className={`rounded-xl p-4 border-2 transition-all ${selectedPlan === "einmal" ? "border-[oklch(0.42_0.12_10)]" : "border-gray-200"}`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 flex items-center justify-center ${selectedPlan === "einmal" ? "border-[oklch(0.42_0.12_10)]" : "border-gray-300"}`}>
                            {selectedPlan === "einmal" && <div className="w-2 h-2 rounded-full" style={{ background: BRAND }} />}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-800">{p.oneTimeLabel}</span>
                            <p className="text-xs text-gray-400 mt-0.5">{p.oneTimeSub}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "'DM Serif Display', serif" }}>{p.oneTimePrice}</div>
                          <div className="text-xs text-gray-400">{p.oneTimePerNight}</div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Enthalten:</p>
                <ul className="space-y-1.5">
                  {[
                    ...p.included,
                    ...(selectedPlan === "abo" ? ["Jederzeit kündbar", "22% günstiger als Einzelkauf"] : []),
                  ].map((item: any) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: BRAND }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="w-full py-3.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.01] shadow-lg"
                style={{ background: BRAND_GRADIENT }}>
                {selectedPlan === "abo" ? p.ctaSubscription : p.ctaOneTime}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">Sichere Zahlung mit:</p>
                <PaymentLogos />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionFaq() {
  const faqItems = [
    { q: "Wie lange dauert es, bis ich Ergebnisse sehe?", a: "Die meisten Kundinnen berichten von sichtbaren Ergebnissen nach 4 Wochen. Für optimale Ergebnisse empfehlen wir 12 Wochen." },
    { q: "Kann ich corē mit anderen Supplements kombinieren?", a: "Ja, corē kann mit anderen Supplements kombiniert werden. Konsultiere deinen Arzt, wenn du Medikamente nimmst." },
    { q: "Ist corē vegan?", a: "Nein, corē enthält Meereskollagen. Wir arbeiten an einer veganen Alternative." },
    { q: "Wie lagere ich corē richtig?", a: "Lagere corē kühl und trocken. Nach dem Öffnen innerhalb von 6 Monaten verbrauchen." },
    { q: "Gibt es eine Geld-zurück-Garantie?", a: "Ja, 30-Tage Geld-zurück-Garantie. Keine Fragen gestellt." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3 text-center">Häufig gefragt</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            Deine Fragen beantwortet
          </motion.h2>
          <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 px-6 py-2">
            {faqItems.map(({ q, a }) => <FaqItem key={q} question={q} answer={a} />)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionFinalCta() {
  return (
    <section className="py-20 md:py-28 text-center" style={{ background: "oklch(0.18 0.01 50)" }}>
      <div className="container max-w-xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            Bereit für deinen Glow-Up?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8 text-sm">Starte deine Nacht-Kollagen-Routine heute und sehe die Ergebnisse in 4 Wochen.</motion.p>
          <motion.a variants={fadeUp} href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            style={{ background: BRAND_GRADIENT }}>
            <Sparkles className="w-4 h-4" />
            Jetzt bestellen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function SectionFooter() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: BRAND }}>corē</span>
        <div className="flex flex-wrap justify-center gap-4">
          {["Impressum", "Datenschutz", "AGB", "Kontakt"].map((link) => (
            <a key={link} href="#" className="hover:text-gray-600 transition-colors">{link}</a>
          ))}
        </div>
        <span>© 2026 corē. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}

/* ─── Before / After section ─── */
const BEFORE_AFTER_IMAGES = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429688826/7ZH8jXscfrhdEt28cpoy7K/before_after_30s_new-MMMZ2uaP8taghApbu6TFLC.webp",
    age: "Mitte 30",
    weeks: "4 Wochen",
    desc: "Sichtbar glättere Haut, reduzierte feine Linien",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429688826/7ZH8jXscfrhdEt28cpoy7K/before_after_45s_b5bab985.jpg",
    age: "Mitte 40",
    weeks: "8 Wochen",
    desc: "Tiefere Falten sichtbar gemindert, Haut strafft sich",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663429688826/7ZH8jXscfrhdEt28cpoy7K/before_after_55s_1ea10a84.jpg",
    age: "Mitte 50",
    weeks: "12 Wochen",
    desc: "Deutliche Verbesserung der Hauttextur und Elastizität",
  },
];

/* ─── 5 Gründe section ─── */
const GRUENDE = [
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Wirkt während du schläfst",
    desc: "Dein Körper regeneriert sich nachts am intensivsten. corē liefert Kollagen genau dann, wenn deine Haut am aufnahmebereitesten ist.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "10x höhere Bioverfügbarkeit",
    desc: "Hydrolysiertes Meereskollagen Typ I & III wird bis zu 10-mal besser aufgenommen als herkömmliche Kollagen-Pulver oder Kapseln.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Keine Zusatzstoffe, kein Zucker",
    desc: "Nur was drin sein muss: reines Kollagen, Hyaluronsäure, Vitamin C und Ashwagandha — ohne künstliche Aromen oder Zucker.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Sichtbare Ergebnisse ab Woche 4",
    desc: "Klinisch dokumentiert: Kundinnen berichten von glätterer Haut, weniger Falten und mehr Ausstrahlung — bereits nach einem Monat.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Einfacher als jede Routine",
    desc: "Einmal täglich vor dem Schlafen — kein Mischen, kein Abwiegen, kein Vergessen. Der Shot passt in jeden Alltag.",
  },
];

function SectionGruende() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="section-label mb-3">Warum corē?</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: "'DM Serif Display', serif" }}>
            5 Gründe, warum jeder das neue Nacht-Kollagen nutzt
          </motion.h2>
          <div className="space-y-8">
            {GRUENDE.map((item: any, i: number) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{ background: "oklch(0.97 0.015 10)", borderColor: "oklch(0.88 0.03 10)", color: BRAND }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-10">
            <a href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
              style={{ background: BRAND_GRADIENT }}>
              <Sparkles className="w-4 h-4" />
              Jetzt ausprobieren
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section renderer map ─── */
const SECTION_COMPONENTS: Record<string, () => React.ReactElement> = {
  "announcement": SectionAnnouncement,
  "hero": SectionHero,
  "stats": SectionStats,
  "problem": SectionProblem,
  "how-it-works": SectionHowItWorks,
  "ingredients": SectionIngredients,
  "comparison": SectionComparison,
  "testimonials": SectionTestimonials,
  "before-after": SectionBeforeAfter,
  "pricing": SectionPricing,
  "gruende": SectionGruende,
  "faq": SectionFaq,
  "final-cta": SectionFinalCta,
  "footer": SectionFooter,
};

/* ─── Main page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SectionAnnouncement />
      <SectionHero />
      <SectionStats />
      <SectionProblem />
      <SectionHowItWorks />
      <SectionIngredients />
      <SectionComparison />
      <SectionTestimonials />
      <SectionBeforeAfter />
      <SectionPricing />
      <SectionGruende />
      <SectionFaq />
      <SectionFinalCta />
      <SectionFooter />

      {/* ── Sticky bottom CTA bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-3 px-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-gray-500">
              <strong>142</strong> Bestellungen heute · Garantie: Kein Fischgeschmack
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Stars />
            <span className="text-xs text-gray-600 font-medium">4.4/5</span>
          </div>
        </div>
        <a href="#pricing"
          className="text-xs font-bold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-90 shadow-md"
          style={{ background: BRAND_GRADIENT }}>
          Jetzt 22% sparen →
        </a>
      </div>
      <div className="h-14" />
    </div>
  );
}
