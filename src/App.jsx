import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, Star, Send, Cake, Sparkles } from "lucide-react";

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const TELEGRAM = "https://t.me/Napaleon_bySevinch";
const TELEGRAM_HANDLE = "@Napaleon_bySevinch";
const INSTAGRAM = "https://instagram.com/sweets_bysevinch";
const INSTAGRAM_HANDLE = "@sweets_bysevinch";

const CATEGORIES = [
  "Barchasi",
  "Trayfl",
  "Matilda",
  "Napoleon",
  "Dessert Box / Setlar",
];

const products = [
  {
    id: 1,
    title: "Klassik Trayfl Set",
    category: "Trayfl",
    description: "Sutli krem, Belgiya shokoladi, yangi mevalar",
    price: "35,000 UZS / dona",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Shokoladli Matilda Cake",
    category: "Matilda",
    description: "Nam biskvit, kakao krem, qora shokolad glazur",
    price: "45,000 UZS / dona",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mini Napoleon",
    category: "Napoleon",
    description: "Qatlama xamir, vanil krem, maydalangan yong'oq",
    price: "28,000 UZS / dona",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Matilda & Trayfl Set",
    category: "Dessert Box / Setlar",
    description: "6 dona trayfl + 4 bo'lak Matilda, sovg'a qutisi",
    price: "120,000 UZS / set",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77db585933d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Premium Dessert Box",
    category: "Dessert Box / Setlar",
    description: "Napoleon, eclair va macaron — bayramona to'plam",
    price: "95,000 UZS / set",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Yog'li Trayfl — Berry",
    category: "Trayfl",
    description: "Mascarpone, qulupnay va yong'oq chipsi",
    price: "38,000 UZS / dona",
    image:
      "https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Klassik Matilda Slice",
    category: "Matilda",
    description: "Ikki qavatli biskvit, sutli krem, kakao",
    price: "32,000 UZS / dona",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Napoleon Family Box",
    category: "Napoleon",
    description: "12 dona mini napoleon, qadoqlangan set",
    price: "85,000 UZS / set",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
  },
];

const features = [
  {
    emoji: "🍰",
    title: "Faqat tabiiy va sifatli masalliqlar",
    description: "Har bir retseptda tanlangan, ishonchli ingredientlar.",
  },
  {
    emoji: "🧁",
    title: "Har kuni yangi pishiriladigan desertlar",
    description: "Buyurtma bo'yicha yangi tayyorlanadi — do'kon qoldiqlari yo'q.",
  },
  {
    emoji: "🎁",
    title: "Bayram va sovg'alar uchun maxsus qadoqlar",
    description: "Chiroyli quti va lenta — sovg'a tayyor holatda.",
  },
  {
    emoji: "🚚",
    title: "Toshkent bo'ylab tezkor yetkazib berish",
    description: "Shahar ichida tez va ehtiyotkor yetkazamiz.",
  },
];

const reviews = [
  {
    name: "Madina",
    rating: 5,
    text: "Matilda torti ajoyib edi — namligi va shokoladi mazzasi zo'r. Qayta buyurtma beraman!",
  },
  {
    name: "Aziza",
    rating: 5,
    text: "Dessert box to'liq kutganimdek: qadoq chiroyli, trayfl tazeligi seziladi. Rahmat, Sevinch!",
  },
  {
    name: "Jasur",
    rating: 5,
    text: "Mini Napoleon oilamga juda yoqdi. Tez yetkazish va muloyim muloqot — tavsiya qilaman.",
  },
];

function openTelegram(productTitle) {
  const text = productTitle
    ? `Assalomu alaykum! "${productTitle}" buyurtma bermoqchiman.`
    : "Assalomu alaykum! Buyurtma bermoqchiman.";
  window.open(
    `${TELEGRAM}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function scrollToCatalog() {
  document.getElementById("menyu")?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const goToCatalog = useCallback((category) => {
    setActiveCategory(category);
    scrollToCatalog();
    setMenuOpen(false);
  }, []);

  const filtered =
    activeCategory === "Barchasi"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const navLink =
    "text-chocolate/90 hover:text-chocolate transition-colors text-sm font-medium";

  return (
    <div className="page-shell min-h-screen pb-24 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-pink-pastel/70 bg-[#fff0f3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-left"
          >
            <span className="text-2xl" aria-hidden="true">
              🎂
            </span>
            <span className="leading-tight">
              <span className="font-script block text-2xl text-chocolate sm:text-3xl">
                Sweets by Sevinch
              </span>
            </span>
          </motion.a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#menyu" className={navLink}>
              Menyu
            </a>
            <button
              type="button"
              onClick={() => goToCatalog("Dessert Box / Setlar")}
              className={navLink}
            >
              Setlar
            </button>
            <a href="#haqimizda" className={navLink}>
              Biz haqimizda
            </a>
            <a href="#aloqa" className={navLink}>
              Aloqa
            </a>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => goToCatalog("Barchasi")}
              className="rounded-2xl bg-gradient-to-r from-pink-pastel to-pink-soft px-5 py-2.5 text-sm font-semibold text-chocolate shadow-md shadow-pink-pastel/40 ring-1 ring-pink-pastel/50"
            >
              Buyurtma berish
            </motion.button>
          </nav>

          <button
            type="button"
            className="rounded-xl p-2 md:hidden"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-chocolate" />
            ) : (
              <Menu className="h-6 w-6 text-chocolate" />
            )}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-pink-pastel/50 bg-[#fff0f3] md:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              <a
                href="#menyu"
                className={navLink}
                onClick={() => setMenuOpen(false)}
              >
                Menyu
              </a>
              <button
                type="button"
                className={`${navLink} text-left`}
                onClick={() => goToCatalog("Dessert Box / Setlar")}
              >
                Setlar
              </button>
              <a
                href="#haqimizda"
                className={navLink}
                onClick={() => setMenuOpen(false)}
              >
                Biz haqimizda
              </a>
              <a
                href="#aloqa"
                className={navLink}
                onClick={() => setMenuOpen(false)}
              >
                Aloqa
              </a>
              <button
                type="button"
                onClick={() => goToCatalog("Barchasi")}
                className="rounded-2xl bg-pink-pastel px-5 py-3 font-semibold text-chocolate"
              >
                Buyurtma berish
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0f3] via-[#fff8f4] to-[#ffccd5]/25 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-soft blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pink-pastel/40 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-soft px-4 py-1.5 text-xs font-medium text-chocolate/80 ring-1 ring-pink-pastel/60">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Uy shirinliklari — Toshkent
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-chocolate sm:text-5xl lg:text-[3.25rem]">
              Har Bir Desert Mehr Bilan Tayyorlanadi
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-chocolate/75 sm:text-lg">
              Trayfl, Matilda, Napoleon va bayramona sovg&apos;abop dessert box
              to&apos;plamlari.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href="#menyu"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-pink-pastel to-[#ffb3c1] px-8 py-4 text-center font-semibold text-chocolate shadow-lg shadow-pink-pastel/35"
              >
                Menyuni ko&apos;rish
              </motion.a>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openTelegram()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-chocolate/25 bg-transparent px-8 py-4 font-semibold text-chocolate transition-colors hover:border-chocolate hover:bg-pink-soft/50"
              >
                <Send className="h-4 w-4" />
                Telegram&apos;da yozish
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-pink-pastel/70 bg-[#fffdf9] shadow-xl shadow-chocolate/5">
              <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77db585933d?q=80&w=1000&auto=format&fit=crop"
                  alt="Matilda va Trayfl set"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/50 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-2xl bg-gold px-4 py-2 text-sm font-bold text-chocolate shadow-md">
                  120,000 UZS
                </span>
              </div>
              <div className="p-5 text-left sm:p-6">
                <div className="mb-1 flex items-center gap-2">
                  <Cake className="h-5 w-5 text-pink-pastel" strokeWidth={1.75} />
                  <h2 className="font-display text-2xl font-semibold text-chocolate">
                    Matilda &amp; Trayfl Set
                  </h2>
                </div>
                <p className="text-sm text-chocolate/70">
                  Sovg&apos;a qutisida — oila va bayramlar uchun ideal tanlov.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="menyu"
        className="scroll-mt-20 bg-[#fffdf9]/70 px-4 py-14 backdrop-blur-sm sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-10 text-left sm:text-center">
            <h2 className="font-display text-3xl font-bold text-chocolate sm:text-4xl">
              Menyu
            </h2>
            <p className="mt-2 text-chocolate/70">
              Kategoriyani tanlang va sevimli desertingizni buyurtma qiling
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="-mx-1 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-chocolate text-cream shadow-md"
                    : "bg-pink-soft text-chocolate hover:bg-pink-pastel/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-pink-pastel/50 bg-cream shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-pink-pastel/25"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-xl bg-chocolate/90 px-3 py-1.5 text-xs font-semibold text-gold-light backdrop-blur-sm">
                    {item.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 text-left">
                  <h3 className="font-display text-xl font-semibold text-chocolate">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate/70">
                    {item.description}
                  </p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openTelegram(item.title)}
                    className="mt-4 w-full rounded-2xl bg-gradient-to-r from-pink-pastel to-pink-soft py-3 text-sm font-semibold text-chocolate ring-1 ring-pink-pastel/60 transition-shadow group-hover:shadow-md"
                  >
                    Buyurtma berish
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="haqimizda"
        className="scroll-mt-20 bg-[#ffccd5]/35 px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-10 text-left sm:text-center">
            <h2 className="font-display text-3xl font-bold text-chocolate sm:text-4xl">
              Nima uchun Sweets by Sevinch?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-pink-pastel/50 bg-[#fffdf9] p-6 text-left shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {f.emoji}
                </span>
                <h3 className="mt-3 font-semibold leading-snug text-chocolate">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-chocolate/65">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mijozlar"
        className="scroll-mt-20 bg-[#fff0f3]/50 px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-10 text-left sm:text-center">
            <h2 className="font-display text-3xl font-bold text-chocolate sm:text-4xl">
              Mijozlarimiz Fikri
            </h2>
            <p className="mt-2 text-chocolate/70">Otzivlar</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.blockquote
                key={r.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-pink-pastel/60 bg-[#fffdf9] p-6 text-left shadow-sm"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-chocolate/80">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-chocolate">
                  — {r.name}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="aloqa"
        className="scroll-mt-20 bg-chocolate px-4 py-12 text-cream sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-left">
              <p className="font-script text-3xl text-pink-pastel">
                Sweets by Sevinch
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                Uy shirinliklari — mehr, sifat va chiroyli qadoq bilan.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-display text-lg font-semibold">Ijtimoiy tarmoqlar</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-pink-pastel"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>
                  <a
                    href={TELEGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-pink-pastel"
                  >
                    <Send className="h-4 w-4" />
                    {TELEGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-display text-lg font-semibold">Buyurtma</h3>
              <p className="mt-3 text-sm text-cream/80">
                Telegram orqali yozing — menyu va yetkazish vaqtini birga
                kelishamiz.
              </p>
              <button
                type="button"
                onClick={() => openTelegram()}
                className="mt-4 rounded-2xl bg-pink-pastel px-5 py-2.5 text-sm font-semibold text-chocolate"
              >
                Telegram&apos;da yozish
              </button>
            </div>
          </div>
          <p className="mt-10 border-t border-cream/15 pt-6 text-center text-xs text-cream/50">
            © {new Date().getFullYear()} Sweets by Sevinch. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-pastel/60 bg-[#fff0f3]/95 p-3 backdrop-blur-md md:hidden">
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => openTelegram()}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-chocolate py-4 text-sm font-semibold text-cream shadow-lg"
        >
          <Send className="h-4 w-4" />
          Telegram orqali buyurtma berish
        </motion.button>
      </div>
    </div>
  );
}
