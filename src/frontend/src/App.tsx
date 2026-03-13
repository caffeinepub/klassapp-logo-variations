import { Toaster } from "@/components/ui/sonner";
import { Check, Copy, Download, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Brand colors ────────────────────────────────────────────────────────────
const BRAND_COLORS = [
  {
    name: "Primary Blue",
    hex: "#1E6FD9",
    role: "Primary CTA, links, key accents",
    textDark: false,
  },
  {
    name: "Brand Green",
    hex: "#22C55E",
    role: "Success states, highlights, badges",
    textDark: false,
  },
  {
    name: "Dark Navy",
    hex: "#0F172A",
    role: "Headings, hero backgrounds, reversed logos",
    textDark: true,
  },
  {
    name: "Soft Gray",
    hex: "#F8FAFC",
    role: "Page backgrounds, subtle fills",
    textDark: false,
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    role: "Card surfaces, reversed text, icon fills",
    textDark: false,
  },
];

// ─── All downloadable assets ──────────────────────────────────────────────────
const ALL_ASSETS = [
  {
    src: "/assets/generated/klassapp-primary-lockup-v4.dim_900x300.png",
    filename: "klassapp-logo-primary.png",
  },
  {
    src: "/assets/generated/klassapp-icon.dim_512x512.png",
    filename: "klassapp-app-icon.png",
  },
  {
    src: "/assets/generated/klassapp-logo-stacked-v2.dim_600x400.png",
    filename: "klassapp-logo-stacked.png",
  },
  {
    src: "/assets/generated/klassapp-logo-dark-v2.dim_800x300.png",
    filename: "klassapp-logo-dark.png",
  },
  {
    src: "/assets/generated/klassapp-social-banner-v3.dim_1500x500.png",
    filename: "klassapp-social-banner.png",
  },
  {
    src: "/assets/generated/klassapp-og-image-v3.dim_1200x630.png",
    filename: "klassapp-og-image.png",
  },
  {
    src: "/assets/generated/klassapp-email-header-v3.dim_600x150.png",
    filename: "klassapp-email-header.png",
  },
  {
    src: "/assets/generated/klassapp-post-x-v3.dim_1200x675.png",
    filename: "klassapp-post-x.png",
  },
  {
    src: "/assets/generated/klassapp-post-facebook-v3.dim_1200x630.png",
    filename: "klassapp-post-facebook.png",
  },
  {
    src: "/assets/generated/klassapp-post-linkedin-v3.dim_1200x627.png",
    filename: "klassapp-post-linkedin.png",
  },
  {
    src: "/assets/generated/klassapp-post-instagram-v3.dim_1080x1080.png",
    filename: "klassapp-post-instagram.png",
  },
  {
    src: "/assets/generated/klassapp-favicon-v3-transparent.dim_64x64.png",
    filename: "klassapp-favicon.png",
  },
  {
    src: "/assets/generated/klassapp-business-card-v2.dim_1050x600.png",
    filename: "klassapp-business-card.png",
  },
  {
    src: "/assets/generated/klassapp-pitch-deck-slide-v2.dim_1920x1080.png",
    filename: "klassapp-pitch-deck-slide.png",
  },
];

// ─── Social / digital assets ─────────────────────────────────────────────────
const SOCIAL_ASSETS = [
  {
    id: "social-banner",
    label: "Social Banner",
    sublabel: "Twitter / LinkedIn cover",
    dimensions: "1500 × 500 px",
    src: "/assets/generated/klassapp-social-banner-v3.dim_1500x500.png",
    aspect: "aspect-[3/1]",
  },
  {
    id: "og-image",
    label: "Open Graph Image",
    sublabel: "Link preview on social media",
    dimensions: "1200 × 630 px",
    src: "/assets/generated/klassapp-og-image-v3.dim_1200x630.png",
    aspect: "aspect-[1.9/1]",
  },
  {
    id: "email-header",
    label: "Email Header",
    sublabel: "Transactional & newsletter emails",
    dimensions: "600 × 150 px",
    src: "/assets/generated/klassapp-email-header-v3.dim_600x150.png",
    aspect: "aspect-[4/1]",
  },
];

// ─── Social post templates ────────────────────────────────────────────────────
const POST_TEMPLATES = [
  {
    id: "post-x",
    platform: "X (Twitter)",
    label: "X Post Template",
    sublabel: "Standard post / link card",
    dimensions: "1200 × 675 px",
    src: "/assets/generated/klassapp-post-x-v3.dim_1200x675.png",
    aspect: "aspect-video",
    color: "#000000",
  },
  {
    id: "post-facebook",
    platform: "Facebook",
    label: "Facebook Post Template",
    sublabel: "Link preview & shared image",
    dimensions: "1200 × 630 px",
    src: "/assets/generated/klassapp-post-facebook-v3.dim_1200x630.png",
    aspect: "aspect-[1.9/1]",
    color: "#1877F2",
  },
  {
    id: "post-linkedin",
    platform: "LinkedIn",
    label: "LinkedIn Post Template",
    sublabel: "Professional post image",
    dimensions: "1200 × 627 px",
    src: "/assets/generated/klassapp-post-linkedin-v3.dim_1200x627.png",
    aspect: "aspect-[1.9/1]",
    color: "#0A66C2",
  },
  {
    id: "post-instagram",
    platform: "Instagram",
    label: "Instagram Post Template",
    sublabel: "Square feed post",
    dimensions: "1080 × 1080 px",
    src: "/assets/generated/klassapp-post-instagram-v3.dim_1080x1080.png",
    aspect: "aspect-square",
    color: "#E1306C",
  },
];

// ─── Typography specimens ─────────────────────────────────────────────────────
const TYPE_SAMPLES = [
  {
    id: "display",
    family: "Bricolage Grotesque",
    role: "Display / Headings",
    weight: "700–800",
    sample: "Smarter School Management",
    className: "font-display text-4xl font-extrabold tracking-tight",
    desc: "Used for hero headlines, section titles, and feature headings. Its expressive grotesque character gives KlassApp a bold, confident voice.",
  },
  {
    id: "body",
    family: "Plus Jakarta Sans",
    role: "Body / UI Text",
    weight: "400–600",
    sample:
      "Easily manage students, classes, schedules, and staff — all in one place.",
    className: "font-body text-lg font-normal leading-relaxed",
    desc: "Used for paragraphs, labels, navigation, and all interface text. Polished and highly legible across sizes.",
  },
];

// ─── Favicon sizes ───────────────────────────────────────────────────────────
const FAVICON_SIZES = [16, 32, 64];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground font-display whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {description && (
        <p className="mt-3 text-muted-foreground text-sm max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}

// ─── Color swatch ─────────────────────────────────────────────────────────────
function ColorSwatch({
  color,
  index,
}: {
  color: (typeof BRAND_COLORS)[0];
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(color.hex).then(() => {
      setCopied(true);
      toast.success(`Copied ${color.hex}`);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isBright = color.hex === "#F8FAFC" || color.hex === "#FFFFFF";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      data-ocid={`colors.item.${index + 1}`}
      className="rounded-2xl overflow-hidden border border-border shadow-xs group"
    >
      <div
        className="h-32 relative flex items-end p-3"
        style={{
          backgroundColor: color.hex,
          border: isBright ? "1px solid #e2e8f0" : undefined,
        }}
      >
        <button
          type="button"
          data-ocid={`colors.button.${index + 1}`}
          onClick={copy}
          aria-label={`Copy ${color.hex}`}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            isBright
              ? "bg-slate-900/10 hover:bg-slate-900/20 text-slate-700"
              : "bg-white/15 hover:bg-white/25 text-white"
          }`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex items-center gap-1"
              >
                <Check size={12} /> Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex items-center gap-1"
              >
                <Copy size={12} /> Copy hex
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="bg-card px-4 py-3">
        <p className="font-bold text-sm text-foreground font-display">
          {color.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-0.5">
          {color.hex}
        </p>
        <p className="text-xs text-muted-foreground mt-1 leading-snug">
          {color.role}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Asset card ───────────────────────────────────────────────────────────────
function AssetCard({
  id,
  label,
  sublabel,
  dimensions,
  src,
  aspect,
  index,
}: {
  id: string;
  label: string;
  sublabel: string;
  dimensions: string;
  src: string;
  aspect: string;
  index: number;
}) {
  const download = () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = `${id}.png`;
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      data-ocid={`assets.item.${index + 1}`}
      className="rounded-2xl border border-border overflow-hidden shadow-xs group"
    >
      <div className={`${aspect} bg-slate-50 overflow-hidden`}>
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-bold text-sm text-foreground font-display">
            {label}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>
          <p className="text-[11px] font-mono text-primary mt-1 font-semibold">
            {dimensions}
          </p>
        </div>
        <button
          type="button"
          data-ocid={`assets.button.${index + 1}`}
          onClick={download}
          aria-label={`Download ${label}`}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors shrink-0"
        >
          <Download size={13} /> Download
        </button>
      </div>
    </motion.div>
  );
}

// ─── Post Template Card ───────────────────────────────────────────────────────
function PostTemplateCard({
  id,
  platform,
  label,
  sublabel,
  dimensions,
  src,
  aspect,
  color,
  index,
}: {
  id: string;
  platform: string;
  label: string;
  sublabel: string;
  dimensions: string;
  src: string;
  aspect: string;
  color: string;
  index: number;
}) {
  const download = () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = `${id}.png`;
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      data-ocid={`posts.item.${index + 1}`}
      className="rounded-2xl border border-border overflow-hidden shadow-xs group"
    >
      <div className={`${aspect} bg-slate-50 overflow-hidden relative`}>
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Platform badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: color }}
        >
          {platform}
        </div>
      </div>
      <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-bold text-sm text-foreground font-display">
            {label}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>
          <p
            className="text-[11px] font-mono mt-1 font-semibold"
            style={{ color: "#22C55E" }}
          >
            {dimensions}
          </p>
        </div>
        <button
          type="button"
          data-ocid={`posts.button.${index + 1}`}
          onClick={download}
          aria-label={`Download ${label}`}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#22C55E]/10 text-[#22C55E] hover:bg-[#22C55E]/20 transition-colors shrink-0"
        >
          <Download size={13} /> Download
        </button>
      </div>
    </motion.div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  const downloadFile = (src: string, filename: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = filename;
    a.click();
  };

  const downloadAll = async () => {
    setIsDownloadingAll(true);
    try {
      for (const { src, filename } of ALL_ASSETS) {
        const response = await fetch(src);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      toast.success("All brand assets downloaded!");
    } catch {
      toast.error("Download failed. Please try again.");
    } finally {
      setIsDownloadingAll(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-20 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/generated/klassapp-icon.dim_512x512.png"
              alt="KlassApp icon"
              className="w-8 h-8 rounded-lg object-cover shadow-sm"
            />
            <span className="font-extrabold font-display text-lg tracking-tight">
              <span style={{ color: "#1E6FD9" }}>Klass</span>
              <span style={{ color: "#22C55E" }}>App</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Brand Kit
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              2026
            </span>
            <button
              type="button"
              data-ocid="header.download_all.button"
              onClick={downloadAll}
              disabled={isDownloadingAll}
              aria-label="Download all brand assets"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
            >
              {isDownloadingAll ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  <span className="hidden sm:inline">Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span className="hidden sm:inline">Download All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400 mb-5">
              Official Brand Guide
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white font-display leading-tight mb-5">
              KlassApp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Brand Kit
              </span>
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto text-base leading-relaxed">
              Official brand assets, color tokens, typography, and usage
              guidelines for the KlassApp school management platform.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* ── 1. Primary Logo ── */}
        <section data-ocid="logo.section">
          <SectionHeader
            label="01 — Logo"
            title="Primary Lockup"
            description="The KlassApp horizontal logo is the default brand expression. Always maintain clear space equal to the cap-height of the 'K' on all sides."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-[#F8FAFC] flex items-center justify-center p-10 md:p-16 mb-4"
          >
            <img
              src="/assets/generated/klassapp-primary-lockup-v4.dim_900x300.png"
              alt="KlassApp primary horizontal logo"
              className="max-w-sm md:max-w-md w-full object-contain"
            />
          </motion.div>
          {/* Primary logo download */}
          <div className="flex justify-end mb-6">
            <button
              type="button"
              data-ocid="logo.primary.button"
              onClick={() =>
                downloadFile(
                  "/assets/generated/klassapp-primary-lockup-v4.dim_900x300.png",
                  "klassapp-logo-primary.png",
                )
              }
              aria-label="Download primary logo"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors"
            >
              <Download size={13} /> Download Primary Logo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* App Icon card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              data-ocid="logo.item.1"
              className="rounded-2xl border border-border overflow-hidden shadow-xs group"
            >
              <div className="bg-[#F8FAFC] flex flex-col items-center justify-center p-8 gap-4">
                <img
                  src="/assets/generated/klassapp-icon.dim_512x512.png"
                  alt="KlassApp app icon"
                  className="w-28 h-28 object-contain rounded-2xl"
                />
              </div>
              <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-sm text-foreground font-display">
                    App Icon
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    App stores & launcher
                  </p>
                  <p className="text-[11px] font-mono text-primary mt-1 font-semibold">
                    512 × 512 px
                  </p>
                </div>
                <button
                  type="button"
                  data-ocid="logo.icon.button"
                  onClick={() =>
                    downloadFile(
                      "/assets/generated/klassapp-icon.dim_512x512.png",
                      "klassapp-app-icon.png",
                    )
                  }
                  aria-label="Download App Icon"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors shrink-0"
                >
                  <Download size={13} /> Download
                </button>
              </div>
            </motion.div>

            {/* Stacked Wordmark card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              data-ocid="logo.item.2"
              className="rounded-2xl border border-border overflow-hidden shadow-xs group"
            >
              <div className="bg-[#F8FAFC] flex flex-col items-center justify-center p-8 gap-4">
                <img
                  src="/assets/generated/klassapp-logo-stacked-v2.dim_600x400.png"
                  alt="KlassApp stacked logo"
                  className="max-w-[200px] w-full object-contain"
                />
              </div>
              <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-sm text-foreground font-display">
                    Stacked Wordmark
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Print &amp; web
                  </p>
                  <p className="text-[11px] font-mono text-primary mt-1 font-semibold">
                    600 × 400 px
                  </p>
                </div>
                <button
                  type="button"
                  data-ocid="logo.stacked.button"
                  onClick={() =>
                    downloadFile(
                      "/assets/generated/klassapp-logo-stacked-v2.dim_600x400.png",
                      "klassapp-logo-stacked.png",
                    )
                  }
                  aria-label="Download Stacked Wordmark"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors shrink-0"
                >
                  <Download size={13} /> Download
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Dark / Reversed ── */}
        <section data-ocid="logo-dark.section">
          <SectionHeader
            label="02 — Reversed Logo"
            title="Dark Background Version"
            description="Use the reversed white logo exclusively on dark navy backgrounds. Do not place the primary blue logo on dark surfaces."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#0F172A] flex items-center justify-center p-10 md:p-16 relative overflow-hidden mb-4"
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, #1E6FD9 0%, transparent 60%), radial-gradient(circle at 70% 50%, #22C55E 0%, transparent 60%)",
              }}
            />
            <img
              src="/assets/generated/klassapp-logo-dark-v2.dim_800x300.png"
              alt="KlassApp reversed logo on dark background"
              className="max-w-sm md:max-w-lg w-full object-contain relative z-10"
            />
          </motion.div>
          <div className="flex justify-end">
            <button
              type="button"
              data-ocid="logo.dark.button"
              onClick={() =>
                downloadFile(
                  "/assets/generated/klassapp-logo-dark-v2.dim_800x300.png",
                  "klassapp-logo-dark.png",
                )
              }
              aria-label="Download dark reversed logo"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors"
            >
              <Download size={13} /> Download Dark Logo
            </button>
          </div>
        </section>

        {/* ── 3. Social / Digital Assets ── */}
        <section data-ocid="assets.section">
          <SectionHeader
            label="03 — Social & Digital"
            title="Digital Assets"
            description="Pre-sized assets for social media profiles, link previews, and email campaigns. Download and use as-is — do not stretch or crop."
          />
          <div className="grid grid-cols-1 gap-6">
            {SOCIAL_ASSETS.map((asset, i) => (
              <AssetCard key={asset.id} {...asset} index={i} />
            ))}
          </div>
        </section>

        {/* ── 4. Social Post Templates ── */}
        <section data-ocid="posts.section">
          <SectionHeader
            label="04 — Post Templates"
            title="Social Post Templates"
            description="Ready-to-use post templates for each platform. Download, add your content in your preferred editor, and post."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POST_TEMPLATES.map((post, i) => (
              <PostTemplateCard key={post.id} {...post} index={i} />
            ))}
          </div>
        </section>

        {/* ── 5. Business Card ── */}
        <section data-ocid="business-card.section">
          <SectionHeader
            label="05 — Print"
            title="Business Card"
            description="Standard horizontal business card template. Print at 300 DPI for crisp results. Replace placeholder text with your details before printing."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-slate-50 overflow-hidden shadow-xs group"
          >
            <div className="aspect-[1.75/1] bg-slate-100 overflow-hidden">
              <img
                src="/assets/generated/klassapp-business-card-v2.dim_1050x600.png"
                alt="KlassApp business card template"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-sm text-foreground font-display">
                  Business Card Template
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Standard 3.5" × 2" print format
                </p>
                <p className="text-[11px] font-mono text-primary mt-1 font-semibold">
                  1050 × 600 px · 300 DPI
                </p>
              </div>
              <button
                type="button"
                data-ocid="business-card.download.button"
                onClick={() =>
                  downloadFile(
                    "/assets/generated/klassapp-business-card-v2.dim_1050x600.png",
                    "klassapp-business-card.png",
                  )
                }
                aria-label="Download Business Card Template"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors shrink-0"
              >
                <Download size={13} /> Download
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── 6. Pitch Deck Slide ── */}
        <section data-ocid="pitch-deck.section">
          <SectionHeader
            label="06 — Presentation"
            title="Pitch Deck Title Slide"
            description="16:9 widescreen title slide for investor presentations, demos, and school briefings. Import into Google Slides, Keynote, or PowerPoint as a background image."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-slate-50 overflow-hidden shadow-xs group"
          >
            <div className="aspect-video bg-[#0F172A] overflow-hidden">
              <img
                src="/assets/generated/klassapp-pitch-deck-slide-v2.dim_1920x1080.png"
                alt="KlassApp pitch deck title slide"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-sm text-foreground font-display">
                  Pitch Deck Title Slide
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Widescreen 16:9 presentation format
                </p>
                <p className="text-[11px] font-mono text-primary mt-1 font-semibold">
                  1920 × 1080 px
                </p>
              </div>
              <button
                type="button"
                data-ocid="pitch-deck.download.button"
                onClick={() =>
                  downloadFile(
                    "/assets/generated/klassapp-pitch-deck-slide-v2.dim_1920x1080.png",
                    "klassapp-pitch-deck-slide.png",
                  )
                }
                aria-label="Download Pitch Deck Slide"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-primary/8 text-primary hover:bg-primary/15 transition-colors shrink-0"
              >
                <Download size={13} /> Download
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── 7. Favicon ── */}
        <section data-ocid="favicon.section">
          <SectionHeader
            label="07 — Favicon"
            title="Favicon & Browser Icon"
            description="The favicon uses the transparent K mark. Test legibility at 16 px — if unclear, simplify the shape."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-white p-8"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                On white
              </p>
              <div className="flex items-end gap-8">
                {FAVICON_SIZES.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <img
                      src="/assets/generated/klassapp-favicon-v3-transparent.dim_64x64.png"
                      alt={`Favicon ${size}px`}
                      width={size}
                      height={size}
                      className="object-contain"
                    />
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {size}px
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl bg-[#0F172A] p-8"
            >
              <p className="text-xs font-semibold text-blue-400/70 uppercase tracking-widest mb-6">
                On dark
              </p>
              <div className="flex items-end gap-8">
                {FAVICON_SIZES.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <img
                      src="/assets/generated/klassapp-favicon-v3-transparent.dim_64x64.png"
                      alt={`Favicon ${size}px`}
                      width={size}
                      height={size}
                      className="object-contain"
                    />
                    <span className="text-[10px] text-blue-400/60 font-mono">
                      {size}px
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 8. Brand Colors ── */}
        <section data-ocid="colors.section">
          <SectionHeader
            label="08 — Color System"
            title="Brand Colors"
            description="A compact palette of five tokens. Primary Blue and Brand Green are the active brand colors. Click any swatch to copy the hex value."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BRAND_COLORS.map((color, i) => (
              <ColorSwatch key={color.hex} color={color} index={i} />
            ))}
          </div>
        </section>

        {/* ── 9. Typography ── */}
        <section data-ocid="typography.section">
          <SectionHeader
            label="09 — Typography"
            title="Type System"
            description="Two typefaces form the KlassApp voice: a bold display grotesque for headings and a refined sans for everything else."
          />
          <div className="space-y-6">
            {TYPE_SAMPLES.map((type, i) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`typography.item.${i + 1}`}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="px-8 py-10 border-b border-border">
                  <p
                    className={`${type.className} text-foreground leading-tight`}
                  >
                    {type.sample}
                  </p>
                </div>
                <div className="px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-2 bg-muted/40">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Typeface
                    </p>
                    <p className="text-sm font-bold text-foreground font-display mt-0.5">
                      {type.family}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Role
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {type.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Weights
                    </p>
                    <p className="text-sm font-mono text-primary mt-0.5">
                      {type.weight}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Wordmark type treatment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              data-ocid="typography.item.3"
              className="rounded-2xl border border-border bg-card px-8 py-10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Wordmark treatment
              </p>
              <div className="flex items-baseline gap-0">
                <span
                  className="font-display font-extrabold text-6xl md:text-8xl tracking-tight"
                  style={{ color: "#1E6FD9" }}
                >
                  Klass
                </span>
                <span
                  className="font-display font-extrabold text-6xl md:text-8xl tracking-tight"
                  style={{ color: "#22C55E" }}
                >
                  App
                </span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                "Klass" in Primary Blue · "App" in Brand Green — the only
                approved two-tone wordmark treatment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 10. Usage guidelines ── */}
        <section data-ocid="guidelines.section">
          <SectionHeader
            label="10 — Usage Rules"
            title="Do's & Don'ts"
            description="Follow these guidelines to maintain brand consistency across all touchpoints."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center">
                  <Check size={13} className="text-white" />
                </div>
                <h3 className="font-bold text-sm text-foreground font-display uppercase tracking-wider">
                  Do
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Use
                  the primary horizontal logo as the default
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22C55E] font-bold mt-0.5">✓</span>{" "}
                  Maintain clear space equal to the cap-height around the logo
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Use
                  the reversed white logo on dark navy backgrounds
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22C55E] font-bold mt-0.5">✓</span>{" "}
                  Scale the logo proportionally — never distort
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Use
                  Bricolage Grotesque for all headings
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-destructive/30 bg-destructive/5 p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✕</span>
                </div>
                <h3 className="font-bold text-sm text-foreground font-display uppercase tracking-wider">
                  Don't
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-destructive font-bold mt-0.5">✕</span>{" "}
                  Don't recolor the logo with non-brand colors
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive font-bold mt-0.5">✕</span>{" "}
                  Don't place the primary logo on busy photographic backgrounds
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive font-bold mt-0.5">✕</span>{" "}
                  Don't add drop shadows or glows to the logo mark
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive font-bold mt-0.5">✕</span>{" "}
                  Don't alter letter spacing or font weights in the wordmark
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive font-bold mt-0.5">✕</span>{" "}
                  Don't use more than 2 type weights in a single composition
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-card mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/generated/klassapp-icon.dim_512x512.png"
              alt="KlassApp icon"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <span className="font-bold font-display">
              <span style={{ color: "#1E6FD9" }}>Klass</span>
              <span style={{ color: "#22C55E" }}>App</span>
            </span>
            <span className="text-muted-foreground text-sm">
              Brand Kit 2026
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
