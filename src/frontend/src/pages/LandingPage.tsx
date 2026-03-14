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
import { motion } from "motion/react";

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

const CLASSROOM_SCENES = [
  {
    src: "/assets/generated/hero-students-classroom.dim_1200x700.jpg",
    label: "Students in Class",
    alt: "Engaged students learning in a modern classroom",
  },
  {
    src: "/assets/generated/students-science-lab.dim_1200x700.jpg",
    label: "Science Lab",
    alt: "Students collaborating on science experiments in a lab",
  },
  {
    src: "/assets/generated/students-computer-lab.dim_1200x700.jpg",
    label: "Computer Lab",
    alt: "Students working on computers with teacher assistance",
  },
  {
    src: "/assets/generated/teacher-reviewing-tablet.dim_1200x700.jpg",
    label: "Teacher Reviewing Reports",
    alt: "Teacher reviewing student reports and data on a tablet",
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
                Built for Modern Schools
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
              Smarter School
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                }}
              >
                Management
              </span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ color: "rgba(147,197,253,0.75)" }}
            >
              KlassApp brings together students, teachers, and administrators in
              one beautifully simple platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#pricing"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
                style={{ backgroundColor: "#1E6FD9" }}
              >
                Onboard your school <ArrowRight size={16} />
              </a>
            </div>

            {/* Product visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-2xl"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ backgroundColor: "#1E6FD9" }}
              />
              <img
                src="/assets/generated/klassapp-primary-lockup-v4.dim_900x300.png"
                alt="KlassApp primary logo"
                className="relative w-full object-contain rounded-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(30,111,217,0.4))" }}
              />
            </motion.div>
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

      {/* ── In the Classroom ── */}
      <section
        data-ocid="classroom.section"
        className="py-24"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#22C55E" }}
            >
              In the Classroom
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
              Where learning comes alive
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              KlassApp supports every corner of the school experience — from the
              lab to the staffroom.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {CLASSROOM_SCENES.map((scene, i) => (
              <motion.div
                key={scene.label}
                variants={cardVariant}
                data-ocid={`classroom.item.${i + 1}`}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={scene.src}
                    alt={scene.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                {/* Caption overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.72) 0%, transparent 100%)",
                  }}
                >
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {scene.label}
                  </span>
                </div>
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
