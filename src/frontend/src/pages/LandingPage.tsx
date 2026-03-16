import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  Check,
  ClipboardList,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Attendance Tracking",
    desc: "Mark, monitor, and report student attendance in real time — across classes, grades, and campuses.",
    color: "#1E6FD9",
  },
  {
    icon: BookOpen,
    title: "Grade Management",
    desc: "Record grades, generate report cards, and share results with parents instantly.",
    color: "#22C55E",
  },
  {
    icon: Calendar,
    title: "Timetable Builder",
    desc: "Drag-and-drop scheduling for classes, teachers, and rooms — conflict detection included.",
    color: "#1E6FD9",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    desc: "Send announcements, progress reports, and direct messages to parents — all in one inbox.",
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Staff Management",
    desc: "Onboard teachers, assign roles, track leave, and manage payroll details from a single dashboard.",
    color: "#1E6FD9",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Beautiful dashboards for enrollment trends, academic performance, and financial summaries.",
    color: "#22C55E",
  },
];

const AUDIENCE_TABS = [
  {
    id: "admins",
    label: "Administrators",
    icon: "🏫",
    headline: "Stop managing chaos. Start leading with clarity.",
    subline:
      "One platform to run your entire school — smarter, faster, and more securely than ever before.",
    accent: "#1E6FD9",
  },
  {
    id: "teachers",
    label: "Teachers",
    icon: "📚",
    headline:
      "Spend less time on admin. More time doing what you love — teaching.",
    subline:
      "KlassApp handles the noise so you can focus on what actually matters.",
    accent: "#22C55E",
  },
  {
    id: "parents",
    label: "Parents",
    icon: "👨‍👩‍👧",
    headline: "Always in the loop. Never in the dark.",
    subline:
      "Real-time updates, instant messaging, and full visibility into your child's school life — right from your pocket.",
    accent: "#60a5fa",
  },
];

const STATS = [
  { value: "500+", label: "Schools" },
  { value: "50K+", label: "Students" },
  { value: "98%", label: "Satisfaction" },
];

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    sub: "Up to 100 students",
    highlighted: false,
    features: [
      "Attendance tracking",
      "Basic grade management",
      "Parent portal",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$49",
    sub: "per month · unlimited students",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Timetable builder",
      "Staff management",
      "Reports & analytics",
      "Priority support",
      "Custom domain",
    ],
    cta: "Onboard your school",
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "for large institutions",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Multi-campus support",
      "Advanced analytics",
      "SSO / LDAP integration",
      "Dedicated CSM",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AudienceSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % AUDIENCE_TABS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = AUDIENCE_TABS[activeIndex];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab buttons */}
      <div
        className="flex items-center justify-center gap-2 mb-6 p-1.5 rounded-2xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {AUDIENCE_TABS.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            data-ocid={`hero.audience.tab.${i + 1}` as string}
            onClick={() => setActiveIndex(i)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
            style={
              activeIndex === i
                ? {
                    backgroundColor: tab.accent,
                    color: "white",
                    boxShadow: `0 0 20px ${tab.accent}55`,
                  }
                : { color: "rgba(147,197,253,0.7)" }
            }
          >
            <span className="text-base">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="relative rounded-2xl overflow-hidden p-7 text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: `1px solid ${active.accent}44`,
            boxShadow: `0 0 40px ${active.accent}22`,
          }}
        >
          {/* Progress bar */}
          <div
            className="absolute top-0 left-0 h-0.5 rounded-t-2xl"
            style={{ backgroundColor: active.accent, width: "100%" }}
          >
            <motion.div
              key={`${active.id}-progress`}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1, transformOrigin: "left" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full origin-left"
              style={{ backgroundColor: active.accent }}
            />
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{
              backgroundColor: `${active.accent}22`,
              color: active.accent,
            }}
          >
            <span>{active.icon}</span>
            For {active.label}
          </div>

          <h3
            className="font-display font-extrabold text-xl md:text-2xl leading-tight mb-3"
            style={{ color: "white" }}
          >
            {active.headline}
          </h3>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(147,197,253,0.75)" }}
          >
            {active.subline}
          </p>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-5">
            {AUDIENCE_TABS.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? "20px" : "6px",
                  height: "6px",
                  backgroundColor:
                    activeIndex === i ? active.accent : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-30 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/generated/klassapp-icon.dim_512x512.png"
              alt="KlassApp icon"
              className="w-8 h-8 rounded-xl object-cover shadow-sm"
            />
            <span className="font-extrabold font-display text-lg tracking-tight">
              <span style={{ color: "#1E6FD9" }}>Klass</span>
              <span style={{ color: "#22C55E" }}>App</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              data-ocid="header.features.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              data-ocid="header.pricing.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          <a
            href="#pricing"
            data-ocid="header.cta.button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1E6FD9" }}
          >
            Get Started Free
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-24 md:py-36"
        style={{ backgroundColor: "#0F172A" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: "rgba(30,111,217,0.18)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: "rgba(34,197,94,0.12)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
              style={{
                borderColor: "rgba(30,111,217,0.35)",
                backgroundColor: "rgba(30,111,217,0.08)",
              }}
            >
              <GraduationCap size={14} style={{ color: "#22C55E" }} />
              <span
                className="text-xs font-semibold"
                style={{ color: "#93c5fd" }}
              >
                The Future-Ready School Platform
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
              Built for Schools.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                }}
              >
                Powered by Tomorrow.
              </span>
            </h1>

            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
              style={{ color: "rgba(147,197,253,0.75)" }}
            >
              KlassApp unifies your entire school ecosystem — students,
              teachers, parents, and administrators — into one intelligent,
              future-ready platform that transforms how modern schools connect,
              operate, and thrive. Powered by cutting-edge AI automation and
              blockchain-grade security, KlassApp delivers real-time
              communication, unbreakable data privacy, and infinite scalability
              — so your school doesn&apos;t just keep up with the future, it
              leads it.
            </p>

            {/* Audience switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12"
            >
              <AudienceSwitcher />
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
                style={{ backgroundColor: "#1E6FD9" }}
              >
                Onboard your school <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        data-ocid="features.section"
        className="py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#1E6FD9" }}
            >
              Features
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
              Everything your school needs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From attendance to analytics, KlassApp handles the operational
              complexity so teachers can focus on teaching.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={cardVariant}
                data-ocid={`features.item.${i + 1}`}
                className="rounded-2xl border border-border bg-card p-7 group hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <f.icon size={22} style={{ color: f.color }} />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20" style={{ backgroundColor: "#0F172A" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={cardVariant}>
                <p
                  className="font-display font-extrabold text-4xl md:text-5xl"
                  style={{ color: "#22C55E" }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-2 text-sm font-semibold"
                  style={{ color: "rgba(147,197,253,0.7)" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#22C55E" }}
            >
              Pricing
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Start free, scale as you grow. No hidden fees.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={cardVariant}
                data-ocid={`pricing.item.${i + 1}`}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "shadow-2xl scale-[1.02] ring-2"
                    : "border border-border bg-card"
                }`}
                style={
                  plan.highlighted
                    ? {
                        backgroundColor: "#0F172A",
                        outline: "2px solid #1E6FD9",
                      }
                    : {}
                }
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  className="font-display font-extrabold text-lg mb-1"
                  style={{ color: plan.highlighted ? "white" : undefined }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="font-display font-extrabold text-4xl"
                    style={{ color: plan.highlighted ? "#22C55E" : "#1E6FD9" }}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span
                      className="text-sm"
                      style={{
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.5)"
                          : undefined,
                      }}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <p
                  className="text-xs mb-7"
                  style={{
                    color: plan.highlighted
                      ? "rgba(147,197,253,0.7)"
                      : undefined,
                  }}
                >
                  {plan.sub}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm"
                      style={{
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.85)"
                          : undefined,
                      }}
                    >
                      <Check
                        size={14}
                        className="shrink-0"
                        style={{
                          color: plan.highlighted ? "#22C55E" : "#1E6FD9",
                        }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={
                    plan.highlighted
                      ? { backgroundColor: "#1E6FD9", color: "white" }
                      : {
                          border: "1.5px solid #1E6FD9",
                          color: "#1E6FD9",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #16a34a 0%, #15803d 60%, #166534 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #22C55E 0%, transparent 50%), radial-gradient(circle at 80% 50%, #4ade80 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight mb-5">
              Ready to transform your school?
            </h2>
            <p className="text-green-100/80 text-lg mb-10">
              Join 500+ schools that trust KlassApp to power their day-to-day
              operations.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.04] hover:shadow-xl"
              style={{ backgroundColor: "white", color: "#16a34a" }}
            >
              Onboard your school <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/assets/generated/klassapp-icon.dim_512x512.png"
                  alt="KlassApp icon"
                  className="w-8 h-8 rounded-xl object-cover"
                />
                <span className="font-extrabold font-display text-lg tracking-tight">
                  <span style={{ color: "#1E6FD9" }}>Klass</span>
                  <span style={{ color: "#22C55E" }}>App</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smarter School Management for modern educational institutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                  Product
                </p>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#features"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@klassapp.xyz"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                  Company
                </p>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="https://klassapp.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      klassapp.xyz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/branding"
                      data-ocid="footer.branding.link"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Our Branding
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} KlassApp. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ♥ using{" "}
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
        </div>
      </footer>
    </div>
  );
}
