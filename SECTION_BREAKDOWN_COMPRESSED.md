# corē Landing Page - Section Breakdown (Compressed)

## 1. SectionAnnouncement
**German:** "Limitiertes Launch-Special: 22% Rabatt auf deine erste Bestellung — nur diese Woche!" | **Mobile:** ✅ Optimized | **Status:** Complete banner with dark background, white text, auto-wrapping. No issues.

## 2. SectionHero
**German:** "Strahlende Haut während du schläfst" with 6 quality badges, hero image, social proof (7.800+ customers, 4.4/5 rating) | **Mobile:** ⚠️ Partial | **Issues:** Headline too large on mobile (text-5xl md:text-6xl lg:text-7xl). Image height needs adjustment. Badge spacing cramped. **Fix:** Reduce to text-3xl sm:text-4xl lg:text-7xl, increase badge gap, adjust image minHeight.

## 3. SectionStats
**German:** 3 stats - "1.293+ Begeisterte Kundinnen", "4 Wochen Bis zu sichtbaren Ergebnissen", "10x Bessere Aufnahme" | **Mobile:** ⚠️ Partial | **Issues:** Font sizes cramped (text-2xl md:text-3xl), gap too large (gap-6). **Fix:** Reduce to text-xl sm:text-2xl md:text-3xl, use gap-3 md:gap-6, add px-4 md:px-0.

## 4. SectionProblem
**German:** Headline "Normale Kollagen-Produkte wirken nicht" with comparison cards (Powder vs corē) and customer testimonial from Laura K. | **Mobile:** ⚠️ Partial | **Issues:** 2-column layout stacks poorly on mobile. Cards too wide. Text in cards too small (text-sm). **Fix:** Reduce gap to gap-6 md:gap-12, card padding p-4 md:p-6, increase font to text-xs md:text-sm.

## 5. SectionHowItWorks
**German:** 4-step process "Nimm den Shot → Entspann dich → Deine Haut regeneriert → Wach auf mit Glow" with visual box and night note | **Mobile:** ⚠️ Partial | **Issues:** Visual box height excessive (min-h-[380px]), step spacing needs adjustment. Emoji (💡) should be SVG icon. **Fix:** Use min-h-[300px] md:min-h-[380px], space-y-4 md:space-y-6, replace emoji with icon.

## 6. SectionIngredients
**German:** 4 ingredients - Meereskollagen, Hyaluronsäure, Vitamin C, Ashwagandha with descriptions | **Mobile:** ⚠️ Partial | **Issues:** 4-column grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4) with large gap. Card padding excessive (p-5). Description text too small (text-xs). **Fix:** Use gap-2 md:gap-4, p-3 md:p-5, increase to text-xs md:text-sm.

## 7. SectionComparison
**German:** Comparison table - "Meereskollagen, Hyaluronsäure, Vitamin C, Ashwagandha, Kein Fischgeschmack, Laborgeprüft" (corē vs Powder vs Clinic) | **Mobile:** ❌ Major Issue | **Problem:** HTML table overflows horizontally on mobile. No responsive design. **Fix:** Convert to card layout on mobile, add overflow-x-auto, increase font to text-xs md:text-sm, make header sticky.

## 8. SectionBeforeAfter
**German:** 3 tabs (Hydration, Elastizität, Glow) with before/after images, testimonials, and benefit bullets | **Mobile:** ⚠️ Partial | **Issues:** 2-column layout (testimonial left, benefits right) stacks poorly. Tab buttons cramped (px-4 py-2). Images not fully responsive. **Fix:** Tab buttons px-3 py-1.5 md:px-4 md:py-2, gap-1.5 md:gap-3, card p-4 md:p-6, ensure images max-w-full.

## 9. SectionGruende (5 Reasons)
**German:** 5 reason cards - "Wirkt während du schläfst, 10x höhere Bioverfügbarkeit, Keine Zusatzstoffe, Sichtbare Ergebnisse ab Woche 4, Einfacher als jede Routine" with icons | **Mobile:** ✅ Optimized | **Status:** Vertical stack layout works well. Icons and text scale properly. Minor: reduce icon size on mobile w-5 h-5 md:w-6 md:h-6.

## 10. SectionTestimonials
**German:** 3 testimonials (Sarah M., Julia K., Anna L.) in horizontal carousel with 4.4/5 rating and "1.293 begeisterte Kundinnen" | **Mobile:** ❌ Major Issue | **Problem:** Carousel cards too wide on mobile. Arrow buttons hidden on small screens (hidden sm:flex). No touch-friendly scroll indicators. **Fix:** Make cards min-w-[280px] md:min-w-[360px], show arrows on mobile or add swipe hints, increase font to text-xs md:text-sm, gap-3 md:gap-4.

## 11. SectionPricing
**German:** Pricing with Abo (€38,99 - 22% savings) vs Einmalig (€49,99), product bottle visual, 3 trust badges, 9 payment logos, chat support | **Mobile:** ❌ Major Issue | **Problems:** 2-column layout (product left, purchase right) stacks poorly. Product visual too tall (minHeight: 420). Payment logos grid overflows. Radio buttons not touch-friendly. **Fix:** Product min-h-[300px] md:min-h-[420px], payment logos grid-cols-3 md:grid-cols-5, card p-4 md:p-6, increase price font text-lg md:text-2xl, larger radio buttons.

## 12. SectionFaq
**German:** 6 accordion items - "Wie lange bis Ergebnisse?, Für alle Hauttypen?, Mit anderen Produkten kombinieren?, Lagerung?, Nebenwirkungen?, Kündigung?" | **Mobile:** ⚠️ Partial | **Issues:** Header text too small (text-sm). Answer text cramped (text-sm). Spacing tight (space-y-3). **Fix:** Header text-sm md:text-base, answer text-xs md:text-sm, padding p-3 md:p-4, space-y-2 md:space-y-3, ensure 44x44px click area.

## 13. SectionFinalCta
**German:** "Bereit für strahlende Haut? Starte deine Nacht-Routine mit corē — 30 Tage Geld-zurück-Garantie, kein Risiko." with "Jetzt 22% sparen" button | **Mobile:** ✅ Optimized | **Status:** Centered layout works well. Minor: reduce headline from text-4xl md:text-5xl to text-2xl sm:text-3xl md:text-5xl.

## 14. SectionFooter
**German:** Company info, links (Impressum, Datenschutz, Kontakt), copyright | **Mobile:** ⚠️ Partial | **Issues:** Multi-column layout stacks poorly. Links too small for touch (text-xs). Spacing compressed. **Fix:** Link padding p-2 md:p-3, font text-xs md:text-sm, increase vertical spacing, ensure links 44x44px minimum.

## Summary

**Mobile Optimization:** 2 ✅ Optimized | 7 ⚠️ Partial | 5 ❌ Major Issues

**German Language:** 14/14 ✅ Complete (all sections 100% German with natural phrasing, proper punctuation, idiomatic language)

**Priority Fixes (High):** Comparison table (card layout), Testimonials carousel (responsive width), Pricing (multiple issues), Footer (touch targets)

**Priority Fixes (Medium):** Hero (headline size), Stats (font/gap), Problem (spacing), HowItWorks (height/emoji), Ingredients (padding/gap), BeforeAfter (tabs/cards), FAQ (touch-friendly)

**Quick Wins:** Replace emoji with SVG, adjust font sizes across sections, reduce excessive padding on mobile, test all sections on actual devices.

**Responsive Breakpoints:** Use sm: (640px), md: (768px), lg: (1024px) for consistent mobile-first design.
