# corē Nacht-Kollagen Landing Page - Section Breakdown

## Overview
Complete breakdown of all 13 sections on the corē landing page with mobile optimization status, German language implementation, and technical details.

---

## 1. SectionAnnouncement
**Purpose:** Eye-catching banner at top of page announcing limited-time launch special

**Current Content (German):**
- Text: "**Limitiertes Launch-Special:** 22% Rabatt auf deine erste Bestellung — nur diese Woche!"
- Styling: Dark background (oklch(0.18 0.01 50)), white text, centered

**Mobile Optimization Status:** ✅ OPTIMIZED
- Uses `py-2.5 px-4` padding for mobile-friendly spacing
- Text automatically wraps on small screens
- No horizontal overflow

**German Language:** ✅ COMPLETE
- Text uses natural German phrasing
- Proper German punctuation (em-dash, quotation marks)
- Urgency conveyed through "nur diese Woche"

**Technical Details:**
- Component: `SectionAnnouncement()`
- Uses text splitting with `**` markers for bold formatting
- No images or complex layouts

---

## 2. SectionHero
**Purpose:** Main hero section with compelling headline, CTA, and hero image

**Current Content (German):**
- Eyebrow: "Glow-Up im Schlaf"
- Headline: "Strahlende Haut während du schläfst" (split across lines)
- Subheadline: Explains corē benefits with bold keywords
- CTA: "Jetzt ausprobieren"
- Quality Badges: 6 badges (Waldbeerengeschmack, Kein Fischgeschmack, Made in Germany, Labor geprüft, 10ml/Nacht, GMP Zertifiziert)
- Trust Line: "30 Tage Geld-zurück-Garantie"
- Rating: "4.4/5 von 1.293 Bewertungen"
- Social Proof: Avatar circles with initials (L, S, M, J) + "7.800+ zufriedene Kundinnen"

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** 2-column layout (text left, image right)
- **Mobile:** Image displays above text with bottom fade overlay
- **Issues to Address:**
  - Headline font size: Currently `text-5xl md:text-6xl lg:text-7xl` - may be too large on mobile
  - Quality badges wrap but could use better spacing on small screens
  - Hero image height needs adjustment for mobile (currently `minHeight: 300`)

**German Language:** ✅ COMPLETE
- All text in German with natural phrasing
- Proper formatting of numbers (1.293, 7.800+)
- German-specific trust messaging

**Technical Details:**
- Component: `SectionHero()`
- Grid layout: `grid-cols-1 lg:grid-cols-2`
- Image: Woman drinking collagen shot with white color fade
- Uses `order-1 lg:order-2` to reorder on mobile
- Animations: `fadeUp` and `stagger` variants

**Recommended Mobile Improvements:**
- Reduce headline to `text-3xl sm:text-4xl lg:text-7xl`
- Add `gap-2` to badge container for better mobile spacing
- Increase image minHeight on mobile: `md:minHeight: 350`

---

## 3. SectionStats
**Purpose:** Display key statistics and social proof

**Current Content (German):**
- Stat 1: "1.293+" | "Begeisterte Kundinnen"
- Stat 2: "4 Wochen" | "Bis zu sichtbaren Ergebnissen"
- Stat 3: "10x" | "Bessere Aufnahme als Pulver"

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** 3-column grid
- **Mobile:** Stacks to 3 rows
- **Issues to Address:**
  - Font sizes: `text-2xl md:text-3xl` - may be cramped on mobile
  - Gap between columns: `gap-6` might be too large on mobile
  - Text centering works but could use better vertical spacing

**German Language:** ✅ COMPLETE
- All labels in German
- Proper number formatting with + symbol
- Clear, concise German descriptions

**Technical Details:**
- Component: `SectionStats()`
- Grid: `grid-cols-3 gap-6`
- Border: `border-y border-gray-100`
- Background: `oklch(0.99 0.005 10)` (off-white)

**Recommended Mobile Improvements:**
- Reduce stat number font: `text-xl sm:text-2xl md:text-3xl`
- Reduce gap on mobile: `gap-3 md:gap-6`
- Add padding: `px-4 md:px-0`

---

## 4. SectionProblem
**Purpose:** Identify pain points and compare corē with alternatives

**Current Content (German):**
- Eyebrow: "Das Problem"
- Headline: "Normale Kollagen-Produkte wirken nicht"
- Body: Explains why typical products fail (Pulver, Kapseln, Cremes)
- Quote: Customer testimonial from Laura K.
- Left Column: Problem description with bold keywords
- Right Column: 3 cards comparing "Typische Kollagen-Pulver" vs "corē Nacht-Kollagen"

**Mobile Optimization Status:** ⚠️ NEEDS WORK
- **Desktop:** 2-column layout (text left, comparison cards right)
- **Mobile:** Stacks to single column
- **Issues to Address:**
  - Comparison cards may be too wide on mobile
  - Mini testimonial card needs better padding on small screens
  - Text size in cards: `text-sm` might be too small on mobile

**German Language:** ✅ COMPLETE
- All content in German
- Natural phrasing for problem description
- Authentic customer testimonial

**Technical Details:**
- Component: `SectionProblem()`
- Grid: `grid-cols-1 lg:grid-cols-2 gap-12`
- Card styling: Rounded borders with shadows
- Testimonial: Shows initials, name, location, verified badge

**Recommended Mobile Improvements:**
- Reduce card padding on mobile: `p-4 md:p-6`
- Increase font size in cards: `text-xs md:text-sm`
- Add margin between cards: `space-y-3 md:space-y-4`
- Reduce gap between columns on mobile: `gap-6 md:gap-12`

---

## 5. SectionHowItWorks
**Purpose:** Explain the 4-step process of using corē

**Current Content (German):**
- Eyebrow: "So funktioniert corē"
- Headline: "Deine Nacht-Routine für strahlende Haut"
- Subheadline: "Einfach, effektiv, wissenschaftlich belegt."
- Left Visual: Dark box showing "Wirkt während du schläfst" with 3 icons (Abends, Schlaf, Morgens)
- Right Steps: 4-step process with numbered circles
- Night Note: Callout box explaining why nighttime is optimal

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** 2-column layout (visual left, steps right)
- **Mobile:** Stacks to single column
- **Issues to Address:**
  - Visual box height: `min-h-[380px]` might be too tall on mobile
  - Step numbers: Circle sizing might need adjustment
  - Icon grid: `grid-cols-3` works but spacing could be tighter on mobile

**German Language:** ✅ COMPLETE
- All text in German
- Step descriptions are clear and actionable
- Night note includes emoji (💡) - should be replaced with SVG icon

**Technical Details:**
- Component: `SectionHowItWorks()`
- Grid: `grid-cols-1 lg:grid-cols-2 gap-12`
- Visual box: Dark background with gradient
- Step numbering: Uses `.step-number` class with custom styling
- Icons: `STEP_ICONS` array from lucide-react

**Recommended Mobile Improvements:**
- Reduce visual box height on mobile: `min-h-[300px] md:min-h-[380px]`
- Reduce icon grid gap: `gap-2 md:gap-3`
- Adjust step spacing: `space-y-4 md:space-y-6`
- Replace emoji with SVG icon in night note
- Reduce padding on mobile: `p-3 md:p-4` for night note

---

## 6. SectionIngredients
**Purpose:** Showcase the 4 key active ingredients

**Current Content (German):**
- Eyebrow: "Wirkstoffe"
- Headline: "Hochdosiert & hochwertig"
- Subheadline: "Jede Zutat wurde sorgfältig ausgewählt für maximale Wirksamkeit."
- 4 Ingredient Cards:
  1. Meereskollagen - "Typ I & III, hydrolysiert für 10x bessere Aufnahme"
  2. Hyaluronsäure - "Bindet bis zu 1000x ihr Eigengewicht an Wasser"
  3. Vitamin C - "Antioxidans für strahlende Haut und Kollagensynthese"
  4. Ashwagandha - "Adaptogen für Stressabbau und besseren Schlaf"

**Mobile Optimization Status:** ⚠️ NEEDS WORK
- **Desktop:** 4-column grid
- **Mobile:** Should be 1-2 columns
- **Issues to Address:**
  - Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` - good but gap might be too large
  - Card padding: `p-5` might be excessive on mobile
  - Text size: `text-sm` for ingredient names is good, but descriptions might be too small

**German Language:** ✅ COMPLETE
- All ingredient names and descriptions in German
- Scientific accuracy with German terminology
- Clear benefit statements

**Technical Details:**
- Component: `SectionIngredients()`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
- Background: Dark (oklch(0.18 0.01 50))
- Card styling: Dark borders with rounded corners
- Icons: `INGREDIENT_ICONS` array

**Recommended Mobile Improvements:**
- Reduce card padding on mobile: `p-3 md:p-5`
- Reduce gap on mobile: `gap-2 md:gap-4`
- Increase description font size: `text-xs md:text-sm`
- Ensure icons are properly sized on mobile

---

## 7. SectionComparison
**Purpose:** Create a detailed comparison table showing corē advantages

**Current Content (German):**
- Eyebrow: "Warum corē?"
- Headline: "Vergleiche corē mit anderen Produkten"
- Table with 6 rows comparing: Meereskollagen, Hyaluronsäure, Vitamin C, Ashwagandha, Kein Fischgeschmack, Laborgeprüft
- Columns: Feature | corē (highlighted in brand color) | Powder | Clinic

**Mobile Optimization Status:** ❌ NEEDS MAJOR WORK
- **Desktop:** Full table visible
- **Mobile:** Table will overflow horizontally
- **Issues to Address:**
  - No horizontal scroll prevention
  - Column widths not responsive
  - Text in cells: `text-xs` is too small on mobile
  - Table header: Not sticky on scroll

**German Language:** ✅ COMPLETE
- All feature names in German
- Clear, concise labels
- Professional terminology

**Technical Details:**
- Component: `SectionComparison()`
- Element: HTML `<table>` with `border-collapse`
- Background: Light off-white
- Styling: Alternating row colors for readability

**Recommended Mobile Improvements:**
- Convert to card layout on mobile (instead of table)
- Add horizontal scroll with `overflow-x-auto`
- Increase font size: `text-xs md:text-sm`
- Make table header sticky: `position: sticky; top: 0`
- Add responsive column widths

---

## 8. SectionBeforeAfter
**Purpose:** Show real before/after results with tabbed interface

**Current Content (German):**
- Eyebrow: "Echte Ergebnisse"
- Headline: "Sichtbare Veränderung in 4 Wochen"
- Subheadline: "Vergleiche die Hautqualität vor und nach der Verwendung von corē Nacht-Kollagen."
- 3 Tabs: "Hydration", "Elastizität", "Glow"
- Each tab shows: Before/after testimonial card + benefit description + bullet points
- Images: Ultra-realistic AI-generated before/after images

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** 2-column layout (testimonial left, benefits right)
- **Mobile:** Stacks to single column
- **Issues to Address:**
  - Tab buttons: `px-4 py-2` might be cramped on mobile
  - Testimonial card: Padding and text size need adjustment
  - Images: Need to be properly responsive

**German Language:** ✅ COMPLETE
- All tab labels in German
- Testimonial text in German
- Benefit descriptions in German

**Technical Details:**
- Component: `SectionBeforeAfter()`
- State: `activeTab` tracks selected tab
- Grid: `grid-cols-1 lg:grid-cols-2 gap-8`
- Animations: Smooth fade/slide transitions on tab change
- Images: CDN URLs for before/after comparisons

**Recommended Mobile Improvements:**
- Increase tab button padding: `px-3 py-1.5 md:px-4 md:py-2`
- Reduce tab gap: `gap-1.5 md:gap-3`
- Adjust card padding: `p-4 md:p-6`
- Increase font sizes in cards on mobile
- Ensure images scale properly with `max-w-full`

---

## 9. SectionComparison (5 Gründe - "5 Reasons")
**Purpose:** Highlight 5 key reasons why customers choose corē

**Current Content (German):**
- 5 Reason Cards:
  1. "Wirkt während du schläfst" - Moon icon
  2. "10x höhere Bioverfügbarkeit" - Zap icon
  3. "Keine Zusatzstoffe, kein Zucker" - Leaf icon
  4. "Sichtbare Ergebnisse ab Woche 4" - Heart icon
  5. "Einfacher als jede Routine" - Sparkles icon

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** 1-column list with icons
- **Mobile:** Same layout but might need spacing adjustments
- **Issues to Address:**
  - Card padding and spacing on mobile
  - Icon sizing might be too large on small screens
  - Text wrapping needs to be tested

**German Language:** ✅ COMPLETE
- All reasons in German
- Clear, benefit-focused messaging
- Action-oriented language

**Technical Details:**
- Component: `SectionGruende()`
- Layout: Vertical stack with icons on left
- Icons: lucide-react icons (Moon, Zap, Leaf, Heart, Sparkles)
- Styling: Cards with borders and shadows

**Recommended Mobile Improvements:**
- Reduce card padding on mobile: `p-4 md:p-6`
- Reduce icon size on mobile: `w-5 h-5 md:w-6 md:h-6`
- Adjust gap between cards: `gap-3 md:gap-4`
- Ensure text doesn't overflow

---

## 10. SectionTestimonials
**Purpose:** Display customer testimonials in a horizontal carousel

**Current Content (German):**
- Eyebrow: "Was unsere Kundinnen sagen"
- Headline: "Über 1.293 begeisterte Kundinnen"
- Subheadline: "von 1.293 Bewertungen"
- Rating: 4.4 stars
- 3 Testimonial Cards:
  1. Sarah M. - "Endlich sichtbare Ergebnisse"
  2. Julia K. - "Einfach zu nehmen"
  3. Anna L. - "Kein Fischgeschmack"
- Navigation: Left/right arrow buttons to scroll carousel

**Mobile Optimization Status:** ❌ NEEDS MAJOR WORK
- **Desktop:** Horizontal carousel with 3 visible cards
- **Mobile:** Carousel still horizontal but cards might be too wide
- **Issues to Address:**
  - Card width not responsive
  - Arrow buttons: Hidden on small screens (`hidden sm:flex`)
  - Carousel scroll behavior needs adjustment for touch
  - Text size in cards: `text-sm` might be too small on mobile

**German Language:** ✅ COMPLETE
- All testimonials in German
- Natural, authentic customer language
- Specific benefit mentions

**Technical Details:**
- Component: `SectionTestimonials()`
- Layout: Horizontal scroll with `overflow-x-auto`
- Carousel: Uses `scrollBy()` for smooth scrolling
- Cards: `snap-start` for snap scrolling
- Styling: `scrollbar-width: none` to hide scrollbar

**Recommended Mobile Improvements:**
- Make card width responsive: `min-w-[280px] md:min-w-[360px]`
- Show arrow buttons on mobile or add swipe indicators
- Increase font sizes: `text-xs md:text-sm` for testimonial text
- Add touch-friendly spacing: `gap-3 md:gap-4`
- Reduce card padding on mobile: `p-4 md:p-5`

---

## 11. SectionPricing
**Purpose:** Display pricing options with subscription and one-time purchase

**Current Content (German):**
- Eyebrow: "Einfach bestellen"
- Headline: "Wähle dein Paket"
- Subheadline: "Alle Pakete enthalten 100% reines Meereskollagen, Hyaluronsäure, Vitamin C und Ashwagandha."
- Urgency Badge: "**22% günstiger** mit dem Launch-Special – nur für kurze Zeit!"
- Left Column:
  - Product visual (bottle mockup)
  - 3 Trust badges (Garantie, Versand, Made in Germany)
  - Chat support callout
- Right Column:
  - Radio buttons for "Abo" vs "Einmalig"
  - Abo: €38,99 (22% savings highlighted)
  - One-time: €49,99
  - Included features list
  - CTA button
  - Payment method logos (Mastercard, AMEX, VISA, Stripe, Apple Pay, Shop Pay, Klarna, UnionPay, Google Pay)

**Mobile Optimization Status:** ❌ NEEDS MAJOR WORK
- **Desktop:** 2-column layout (product left, purchase right)
- **Mobile:** Stacks to single column
- **Issues to Address:**
  - Product visual: Might be too tall on mobile
  - Price display: Font sizes need adjustment
  - Radio button styling: Not touch-friendly
  - Payment logos: Grid might overflow on mobile
  - Overall card width: Might be too wide on small screens

**German Language:** ✅ COMPLETE
- All pricing labels in German
- Clear pricing structure
- Trust messaging in German

**Technical Details:**
- Component: `SectionPricing()`
- Grid: `grid-cols-1 lg:grid-cols-2 gap-8`
- State: `selectedPlan` tracks subscription vs one-time
- Styling: White card with border on right column
- Background: Light off-white

**Recommended Mobile Improvements:**
- Reduce product visual height on mobile: `min-h-[300px] md:min-h-[420px]`
- Increase price font size: `text-lg md:text-2xl`
- Make radio buttons larger and more touch-friendly
- Stack payment logos in 3 columns on mobile: `grid-cols-3 md:grid-cols-5`
- Reduce card padding: `p-4 md:p-6`
- Increase CTA button padding: `py-3 md:py-3.5`

---

## 12. SectionFaq
**Purpose:** Answer common customer questions

**Current Content (German):**
- Eyebrow: "Häufig gestellte Fragen"
- Headline: "Alles was du über corē wissen musst"
- 6 FAQ Items (expandable accordion):
  1. "Wie lange dauert es, bis ich Ergebnisse sehe?"
  2. "Ist corē für alle Hauttypen geeignet?"
  3. "Kann ich corē mit anderen Produkten kombinieren?"
  4. "Wie wird corē gelagert?"
  5. "Gibt es Nebenwirkungen?"
  6. "Kann ich jederzeit kündigen?"

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** Full width accordion
- **Mobile:** Same layout but might need better spacing
- **Issues to Address:**
  - Accordion header: Text size and padding for mobile
  - Answer text: `text-sm` might be too small on mobile
  - Spacing between items: `space-y-3` might be too tight

**German Language:** ✅ COMPLETE
- All Q&A in German
- Natural, conversational tone
- Clear, helpful answers

**Technical Details:**
- Component: `SectionFaq()`
- Layout: Vertical stack of accordion items
- Styling: Borders and rounded corners
- No expand/collapse animation currently

**Recommended Mobile Improvements:**
- Increase header font size: `text-sm md:text-base`
- Increase answer font size: `text-xs md:text-sm`
- Add more padding to headers: `p-3 md:p-4`
- Increase spacing between items: `space-y-2 md:space-y-3`
- Make headers touch-friendly with larger click area

---

## 13. SectionFinalCta
**Purpose:** Final call-to-action before footer

**Current Content (German):**
- Headline: "Bereit für strahlende Haut?"
- Subheadline: "Starte deine Nacht-Routine mit corē — 30 Tage Geld-zurück-Garantie, kein Risiko."
- CTA Button: "Jetzt 22% sparen"
- Secondary text: "Versand in 1-2 Tagen"

**Mobile Optimization Status:** ✅ OPTIMIZED
- **Desktop:** Centered content
- **Mobile:** Same layout, responsive text
- **Issues to Address:**
  - Headline font size: `text-4xl md:text-5xl` - might be too large on mobile

**German Language:** ✅ COMPLETE
- All text in German
- Strong call-to-action messaging
- Trust-building language

**Technical Details:**
- Component: `SectionFinalCta()`
- Layout: Centered column
- Styling: Large CTA button with gradient background
- Background: Light off-white

**Recommended Mobile Improvements:**
- Reduce headline font: `text-2xl sm:text-3xl md:text-5xl`
- Add padding: `px-4 md:px-0`
- Ensure button is full-width on mobile or has proper sizing

---

## 14. SectionFooter
**Purpose:** Footer with company information and links

**Current Content (German):**
- Company info: corē branding
- Links: Impressum, Datenschutz, Kontakt, etc.
- Copyright notice

**Mobile Optimization Status:** ⚠️ PARTIALLY OPTIMIZED
- **Desktop:** Multi-column layout
- **Mobile:** Stacks to single column
- **Issues to Address:**
  - Link sizing: Should be larger for mobile touch targets
  - Spacing: Might be too compressed on small screens

**German Language:** ✅ COMPLETE
- All footer text in German
- Standard German legal links (Impressum, Datenschutz)

**Technical Details:**
- Component: `SectionFooter()`
- Layout: Grid with multiple columns
- Styling: Dark background with light text

**Recommended Mobile Improvements:**
- Increase link padding: `p-2 md:p-3`
- Increase font size: `text-xs md:text-sm`
- Add more vertical spacing between sections
- Ensure links are touch-friendly (minimum 44x44px)

---

## Summary of Mobile Optimization Needs

### High Priority (❌ NEEDS MAJOR WORK):
1. **SectionComparison (Table)** - Horizontal overflow issue
2. **SectionTestimonials (Carousel)** - Card width responsiveness
3. **SectionPricing** - Multiple responsive issues
4. **SectionFooter** - Touch-friendly link sizing

### Medium Priority (⚠️ PARTIALLY OPTIMIZED):
1. **SectionHero** - Headline sizing, image height
2. **SectionStats** - Font sizes, gaps
3. **SectionProblem** - Card padding and spacing
4. **SectionHowItWorks** - Visual box height, spacing
5. **SectionIngredients** - Card padding, gaps
6. **SectionBeforeAfter** - Tab spacing, card sizing
7. **SectionFinalCta** - Headline sizing

### Low Priority (✅ OPTIMIZED):
1. **SectionAnnouncement** - Already mobile-friendly
2. **SectionGruende** - Good mobile layout

---

## German Language Checklist

All sections are **✅ COMPLETE** in German:
- ✅ All headlines and subheadlines in German
- ✅ All body text in German
- ✅ All CTAs in German
- ✅ All labels and badges in German
- ✅ Proper German punctuation and formatting
- ✅ Natural, idiomatic German phrasing
- ⚠️ One emoji (💡) in SectionHowItWorks should be replaced with SVG icon

---

## Recommended Action Plan

1. **Phase 1 (Critical):** Fix high-priority mobile issues
   - Convert comparison table to responsive card layout
   - Fix testimonial carousel responsiveness
   - Optimize pricing section layout
   - Improve footer link sizing

2. **Phase 2 (Important):** Address medium-priority issues
   - Adjust font sizes across all sections
   - Optimize spacing and padding for mobile
   - Test all sections on actual mobile devices
   - Fix remaining emoji references

3. **Phase 3 (Polish):** Final refinements
   - Test touch interactions on mobile
   - Verify German text rendering on all devices
   - Optimize images for mobile loading
   - Add mobile-specific animations if needed
