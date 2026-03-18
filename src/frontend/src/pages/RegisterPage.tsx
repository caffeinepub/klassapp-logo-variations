import { useState } from "react";

const WORLD_COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Greece",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1.5px solid #E2E8F0",
  borderRadius: "8px",
  padding: "12px 16px",
  fontSize: "15px",
  color: "#0D1526",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  transition: "border-color 0.15s, box-shadow 0.15s",
  appearance: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#0D1526",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "4px",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const fieldStyle: React.CSSProperties = {
  marginBottom: "16px",
  position: "relative",
};

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        right: "14px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
      }}
    >
      <title>Dropdown arrow</title>
      <path
        d="M4 6L8 10L12 6"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>{open ? "Hide password" : "Show password"}</title>
      {open ? (
        <>
          <path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="3" stroke="#64748B" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="3" stroke="#64748B" strokeWidth="1.5" />
          <line
            x1="3"
            y1="3"
            x2="21"
            y2="21"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Check</title>
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }}
    >
      <title>Secure</title>
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke="#94A3B8"
        strokeWidth="2"
      />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#94A3B8" strokeWidth="2" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <title>Checked</title>
      <path
        d="M1.5 5.5L4.5 8.5L9.5 3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useInputFocus() {
  const [focused, setFocused] = useState(false);
  return {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    focusStyle: focused
      ? { borderColor: "#1E6FD9", boxShadow: "0 0 0 3px rgba(30,111,217,0.12)" }
      : {},
  };
}

function TextField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  id: string;
}) {
  const { onFocus, onBlur, focusStyle } = useInputFocus();
  return (
    <div style={fieldStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        data-ocid={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{ ...inputStyle, ...focusStyle }}
      />
    </div>
  );
}

function PasswordField({
  label,
  value,
  onChange,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  id: string;
}) {
  const [show, setShow] = useState(false);
  const { onFocus, onBlur, focusStyle } = useInputFocus();
  return (
    <div style={fieldStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          data-ocid={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{ ...inputStyle, paddingRight: "44px", ...focusStyle }}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px",
            display: "flex",
            alignItems: "center",
          }}
          aria-label={show ? "Hide password" : "Show password"}
        >
          <EyeIcon open={show} />
        </button>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  id,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  id: string;
  children: React.ReactNode;
}) {
  const { onFocus, onBlur, focusStyle } = useInputFocus();
  return (
    <div style={fieldStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <select
          id={id}
          data-ocid={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            ...inputStyle,
            cursor: "pointer",
            paddingRight: "36px",
            ...focusStyle,
          }}
        >
          {children}
        </select>
        <ChevronIcon />
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    schoolName: "",
    fullName: "",
    role: "",
    mobile: "",
    country: "",
    schoolSize: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const setField = (key: keyof typeof form) => (value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Left Panel */}
      <div
        className="register-left-panel"
        style={{
          width: "50%",
          minHeight: "100vh",
          background: "#0D1526",
          display: "flex",
          flexDirection: "column",
          padding: "40px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture */}
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.04,
            pointerEvents: "none",
          }}
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <title>Background texture</title>
          <circle cx="500" cy="700" r="280" fill="white" />
          <circle cx="-80" cy="500" r="220" fill="white" />
          <circle cx="300" cy="200" r="180" fill="white" />
          <line
            x1="0"
            y1="400"
            x2="600"
            y2="300"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="600"
            x2="600"
            y2="500"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="200"
            x2="600"
            y2="100"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="0"
            x2="200"
            y2="800"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="400"
            y1="0"
            x2="500"
            y2="800"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Logo */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <img
            src="/images/klassapp-logo-v1-1.png"
            alt="KlassApp"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </div>

        {/* Center content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Your school&apos;s future starts here.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              lineHeight: 1.6,
              marginBottom: "36px",
            }}
          >
            Join 500+ schools already running smarter with KlassApp.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              "30-day free trial, no credit card required",
              "Set up in under 10 minutes",
              "Cancel anytime.",
            ].map((line) => (
              <div
                key={line}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon />
                </div>
                <span
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        style={{
          width: "50%",
          minHeight: "100vh",
          background: "#F8FAFC",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          overflowY: "auto",
          padding: "48px 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "480px" }}>
          {/* Mobile logo */}
          <img
            src="/images/klassapp-logo-v1-1.png"
            alt="KlassApp"
            className="register-mobile-logo"
            style={{
              height: "36px",
              objectFit: "contain",
              display: "none",
              marginBottom: "24px",
            }}
          />

          <h2
            style={{
              color: "#0D1526",
              fontSize: "24px",
              fontWeight: 800,
              marginBottom: "6px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Register your school
          </h2>
          <p
            style={{ color: "#64748B", fontSize: "14px", marginBottom: "28px" }}
          >
            Start your free 30-day Pro trial today.
          </p>

          <form onSubmit={handleSubmit} data-ocid="register.panel">
            <TextField
              id="register.school_name.input"
              label="School Name"
              placeholder="e.g. Lincoln Academy"
              value={form.schoolName}
              onChange={setField("schoolName")}
            />

            <TextField
              id="register.full_name.input"
              label="Your Full Name"
              placeholder="Your name"
              value={form.fullName}
              onChange={setField("fullName")}
            />

            <SelectField
              id="register.role.select"
              label="Your Role"
              value={form.role}
              onChange={setField("role")}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="principal">Principal or Head Teacher</option>
              <option value="admin">School Administrator</option>
              <option value="teacher">Teacher</option>
              <option value="it">IT or Tech Staff</option>
              <option value="other">Other</option>
            </SelectField>

            <TextField
              id="register.mobile.input"
              label="Mobile Number"
              type="tel"
              placeholder="+256 or your country code"
              value={form.mobile}
              onChange={setField("mobile")}
            />

            <SelectField
              id="register.country.select"
              label="Country"
              value={form.country}
              onChange={setField("country")}
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="Uganda">Uganda</option>
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="South Africa">South Africa</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Other">Other</option>
              <option disabled>──────────────</option>
              {WORLD_COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectField>

            <SelectField
              id="register.school_size.select"
              label="Approximate number of students"
              value={form.schoolSize}
              onChange={setField("schoolSize")}
            >
              <option value="" disabled>
                Select school size
              </option>
              <option value="under100">Under 100 students</option>
              <option value="100to500">100 to 500 students</option>
              <option value="500to1000">500 to 1,000 students</option>
              <option value="1000to3000">1,000 to 3,000 students</option>
              <option value="over3000">Over 3,000 students</option>
            </SelectField>

            <TextField
              id="register.email.input"
              label="Email Address"
              type="email"
              value={form.email}
              onChange={setField("email")}
            />

            <PasswordField
              id="register.password.input"
              label="Password"
              value={form.password}
              onChange={setField("password")}
            />

            <PasswordField
              id="register.confirm_password.input"
              label="Confirm Password"
              value={form.confirmPassword}
              onChange={setField("confirmPassword")}
            />

            {/* Terms */}
            <div
              style={{
                ...fieldStyle,
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div style={{ position: "relative", marginTop: "1px" }}>
                <input
                  id="register.terms.checkbox"
                  data-ocid="register.terms.checkbox"
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => setField("terms")(e.target.checked)}
                  style={{
                    opacity: 0,
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "4px",
                    border: form.terms
                      ? "2px solid #22C55E"
                      : "2px solid #CBD5E1",
                    background: form.terms ? "#22C55E" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s",
                    cursor: "pointer",
                  }}
                >
                  {form.terms && <CheckmarkIcon />}
                </div>
              </div>
              <label
                htmlFor="register.terms.checkbox"
                style={{
                  fontSize: "14px",
                  color: "#334155",
                  cursor: "pointer",
                  lineHeight: 1.5,
                }}
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  style={{ color: "#1E6FD9", textDecoration: "underline" }}
                >
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              data-ocid="register.submit_button"
              style={{
                width: "100%",
                background: "#22C55E",
                color: "#0D1526",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "8px",
                padding: "14px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "background 0.15s, transform 0.15s",
                marginBottom: "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#16A34A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#22C55E";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Create my free account
            </button>

            {/* Below button */}
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#94A3B8",
                marginBottom: "10px",
              }}
            >
              <LockIcon />
              Free 30-day Pro trial · No credit card needed
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#64748B",
              }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                data-ocid="register.login.link"
                style={{
                  color: "#1E6FD9",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign in here.
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .register-left-panel {
            display: none !important;
          }
          .register-mobile-logo {
            display: block !important;
          }
          div[style*="width: 50%"] + div[style*="width: 50%"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
