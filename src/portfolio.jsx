import { useEffect, useState } from "react";
import profileImage from "./assets/update-image22.png";
import bsebLogo from "./assets/education/bihar-school-examination-board.jpg";
import sriSukhmaniLogo from "./assets/education/sri-sukhmani.png";
import cgcLandranLogo from "./assets/education/cgc-landran.png";

const portfolioNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive Design",
      "Tailwind CSS",
    ],
    icon: "👨‍💻",
    color: "indigo",
  },
  {
    title: "Backend & DB",
    items: ["PHP", "Java", "Laravel", "REST APIs", "MySQL", "MongoDB"],
    icon: "⚙️",
    color: "cyan",
  },
  {
    title: "Tools & Others",
    items: ["Git & GitHub", "VS Code", "WordPress", "UI/UX Basics", "Firebase"],
    icon: "🛠️",
    color: "emerald",
  },
];

const aiTools = [
  { name: "CodeX", icon: "🔵", color: "sky" },
  { name: "GitHub Copilot", icon: "⚫", color: "slate" },
  { name: "Cursor AI", icon: "🟣", color: "purple" },
  { name: "ChatGPT", icon: "🟢", color: "emerald" },
  { name: "Gemini", icon: "🔷", color: "indigo" },
  { name: "Claude", icon: "🟠", color: "orange" },
  { name: "Figma", icon: "🩷", color: "pink" },
  { name: "Notion", icon: "⚪", color: "slate" },
];

const projects = [
  {
    title: "FZ Gym Fitness",
    category: "Fitness & Gym Management",
    description:
      "A gym management platform for memberships, workout programs, and fitness services.",
    technologies: ["Laravel", "PHP"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://fitflowfz.manish25er.workers.dev/",
    githubUrl: "https://github.com/manish25er-2003/Fitflowfz",
    detailsUrl: "/projects/fz-gym-fitness/",
  },
  {
    title: "Khatabook App",
    category: "Finance & Business Management",
    description:
      "A digital ledger application for managing transactions, account records, and balances.",
    technologies: ["Laravel", "PHP"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://khatabook-app.manish25er.workers.dev/",
    githubUrl: "https://github.com/manish25er-2003/Khatabook-App",
    detailsUrl: "/projects/khatabook-app/",
  },
  {
    title: "RoomSpot",
    category: "Accommodation & Property",
    description:
      "A room discovery platform for exploring accommodation options and managing room-related information.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://roomspot.manish25er.workers.dev/",
    githubUrl: "https://github.com/manish25er-2003/RoomSpot",
    detailsUrl: "/projects/roomspot/",
  },
  {
    title: "SmartBank System",
    category: "Banking & Finance",
    description:
      "A secure banking application for account management, transaction control, and reliable financial workflows.",
    technologies: ["Java", "MySQL", "Swing"],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://github.com/mainshKumar50/SmartBanksys/tree/master",
    githubUrl: "https://github.com/mainshKumar50/SmartBanksys/tree/master",
    detailsUrl: "/projects/smartbank-system/",
  },
];

const experience = [
  {
    title: "Software Engineer Intern",
    company: "ThinkNext",
    period: "January 2025 – September 2025 · 9 months",
    status: "Intern",
    description:
      "Built web features with PHP, Laravel, MySQL, and JavaScript.",
    icon: "💼",
    logo: "TN",
    logoBg: "linear-gradient(135deg, #0f172a, #1d4ed8)",
    badgeBg: "rgba(96, 165, 250, 0.12)",
    badgeColor: "#dbeafe",
    roleTag: "Web Developer",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Full-Stack Developer",
    company: "Binary Data",
    period: "December 2025 – Present",
    status: "Current",
    description:
      "Developing full-stack interfaces, APIs, and database features.",
    icon: "⭐",
    logo: "BD",
    logoBg: "linear-gradient(135deg, #0f172a, #10b981)",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#d1fae5",
    roleTag: "Full-Stack Developer",
    skills: ["PHP", "Laravel", "JavaScript", "REST API", "Git"],
  },
];

const education = [
  {
    title: "B.Tech in Computer Science Engineering",
    institution: "Chandigarh Group of Colleges",
    period: "2022 - 2025",
    detail: "Graduate",
  },
  {
    title: "Diploma in Computer Science Engineering",
    institution: "Sri Sukhmani Polytechnic College, Dera-Bassi",
    period: "2019 - 2022",
    detail: "Completed",
  },
];

const rotatingHeroPhrases = [
  "Full-Stack Developer & AI Solutions Engineer",
  "Building AI-powered web solutions",
];

function TypewriterText({ phrases, textStyle, cursorStyle }) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeDelay = isDeleting ? 45 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentPhrase) {
          window.setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        const nextText = currentPhrase.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeDelay);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <span className="portfolio-typewriter-wrap">
      <span className="portfolio-typewriter-text" style={textStyle}>{displayText}</span>
      <span className="portfolio-typewriter-cursor" style={cursorStyle} aria-hidden="true" />
    </span>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const submission = Object.fromEntries(formData.entries());
      submission._url = window.location.href;
      submission._subject = `Portfolio message from ${submission.name || "a visitor"}`;
      submission._replyto = submission.email;
      const response = await fetch("https://formsubmit.co/ajax/manish25er@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submission),
      });
      const result = await response.json();
      const activationRequired = /needs activation|activate form/i.test(result.message || "");

      if (response.ok && activationRequired) {
        setFormMessageType("pending");
        setFormMessage(result.message);
        form.reset();
        return;
      }

      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || "The message could not be sent.");
      }

      setFormMessageType("success");
      setFormMessage("Message received. If this is the first submission, confirm FormSubmit’s activation email to enable delivery.");
      form.reset();
    } catch (error) {
      setFormMessageType("error");
      setFormMessage(error.message || "Could not send your message. Please email manish25er@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        background: "#0B0F19",
        color: "#E2E8F0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "rgba(99, 102, 241, 0.2)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "pulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "rgba(6, 182, 212, 0.1)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .glass-card {
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(96, 165, 250, 0.22);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.10);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(96, 165, 250, 0.36);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(37, 99, 235, 0.18);
        }

        .portfolio-desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .portfolio-mobile-header-actions {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-left: auto;
          flex-shrink: 0;
        }

        .portfolio-mobile-hire-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 0.7rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          color: #fff;
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.28);
        }

        .portfolio-mobile-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.28);
          background: rgba(15, 23, 42, 0.45);
          color: #e2e8f0;
          cursor: pointer;
          font-size: 17px;
          transition: all 0.2s ease;
        }

        .portfolio-mobile-menu-toggle:hover {
          border-color: rgba(96, 165, 250, 0.4);
          background: rgba(30, 41, 59, 0.7);
          color: #7dd3fc;
        }

        .portfolio-mobile-nav {
          display: none;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
        }

        .portfolio-mobile-nav-link {
          display: block;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.5);
          color: rgba(226, 232, 240, 0.9);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
        }

        .portfolio-mobile-nav-link:hover {
          background: rgba(30, 41, 59, 0.8);
          color: #ffffff;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #6366F1 0%, #3B82F6 50%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.92fr;
          gap: 42px;
          align-items: stretch;
        }

        .my-approach-grid {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 22px;
          margin-top: 30px;
          position: relative;
        }

        .my-approach-connector {
          position: absolute;
          left: 12%;
          right: 12%;
          top: 70px;
          height: 1px;
          border-top: 1px dashed rgba(125, 211, 252, 0.5);
          pointer-events: none;
        }

        .my-approach-item {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .my-approach-icon-wrap {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(59,130,246,0.32), rgba(15,23,42,0.96) 62%);
          border: 1px solid rgba(148, 163, 184, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 0 1px rgba(96,165,250,0.08), 0 18px 30px rgba(15, 23, 42, 0.6);
          position: relative;
        }

        .my-approach-number-badge {
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(13,18,34,0.96), rgba(30,41,59,0.92));
          border: 1px solid rgba(148,163,184,0.2);
          box-shadow: 0 8px 16px rgba(15,23,42,0.35);
          color: #e2e8f0;
          font-size: 18px;
          font-weight: 700;
        }

        .my-approach-icon {
          font-size: 38px;
          color: #8ed8ff;
          opacity: 0.95;
          filter: drop-shadow(0 0 16px rgba(96,165,250,0.3));
        }

        .my-approach-title {
          font-size: clamp(1.3rem, 1.8vw, 1.8rem);
          font-weight: 800;
          color: white;
          margin: 18px 0 0;
          letter-spacing: -0.04em;
        }

        .my-approach-text {
          color: #d7e0ee;
          font-size: 0.96rem;
          line-height: 1.5;
          margin: 10px 0 0;
          max-width: 200px;
          text-align: center;
        }

        .education-section {
          position: relative;
          padding-top: 96px;
          padding-bottom: 96px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(7, 12, 20, 0.96);
          overflow: hidden;
        }

        .education-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 10% 15%, rgba(59,130,246,0.18), transparent 30%), radial-gradient(circle at 90% 8%, rgba(59,130,246,0.16), transparent 30%);
          pointer-events: none;
        }

        .education-shell {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .education-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .portfolio-section-title {
          font-size: calc(var(--type-section-heading) + 2px) !important;
          font-weight: 700 !important;
          letter-spacing: var(--letter-heading) !important;
          color: #dbeafe !important;
          line-height: var(--line-heading) !important;
          margin: 0 0 18px !important;
        }

        .portfolio-section-title span { color: inherit !important; }

        .portfolio-page-heading {
          font-size: clamp(2.75rem, 5.8vw, 4.2rem) !important;
          font-weight: 700 !important;
          line-height: var(--line-heading) !important;
          letter-spacing: var(--letter-heading) !important;
          color: #dbeafe !important;
        }

        .portfolio-greeting, .portfolio-typewriter-shell {
          font-size: var(--type-subheading) !important;
          font-weight: 600 !important;
          line-height: 1.45 !important;
          letter-spacing: 0 !important;
        }

        .portfolio-typewriter-shell {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem) !important;
        }

        h4, h5 { font-size: var(--type-card-heading) !important; font-weight: 800 !important; line-height: var(--line-heading) !important; }
        p { font-size: var(--type-body) !important; font-weight: 400 !important; line-height: var(--line-body) !important; }
        button, label { font-size: var(--type-label) !important; font-weight: 600 !important; }
        input, textarea, select { font-size: var(--type-label) !important; font-weight: 400 !important; }
        .portfolio-desktop-nav a, .portfolio-mobile-nav-link { font-size: var(--type-label); font-weight: 600; }
        .experience-section-subtitle, .education-subtitle { font-size: var(--type-body) !important; line-height: var(--line-body) !important; }
        .education-overview-header h4, .experience-journey-panel h4 { font-size: var(--type-card-heading) !important; }
        .education-card-title { font-size: var(--type-card-heading) !important; font-weight: 800 !important; line-height: var(--line-heading) !important; }
        .education-card-subtitle, .experience-company { font-size: var(--type-organization) !important; font-weight: 600 !important; line-height: 1.45 !important; }
        .experience-role { font-size: var(--type-subheading) !important; font-weight: 600 !important; line-height: 1.45 !important; }
        .education-card-body, .experience-description { font-size: var(--type-body) !important; font-weight: 400 !important; line-height: var(--line-body) !important; }
        .education-card-badge, .experience-period { font-size: var(--type-metadata) !important; font-weight: 500 !important; }
        .education-timeline-date { font-size: 11px !important; font-weight: 600 !important; }
        .education-tag, .education-card-focus, .education-metric-label, .education-metric-sub { font-size: var(--type-helper) !important; font-weight: 400 !important; }
        .education-card-focus { font-size: var(--type-label) !important; font-weight: 600 !important; }
        .education-badge, .experience-status { font-size: var(--type-label) !important; font-weight: 600 !important; }
        .experience-status { font-size: var(--type-metadata) !important; font-weight: 500 !important; }
        .experience-skill { font-size: var(--type-helper) !important; font-weight: 400 !important; }
        .education-metric-value { font-size: var(--type-subheading) !important; font-weight: 700 !important; line-height: 1.3 !important; }

        .education-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(96, 165, 250, 0.6);
          background: rgba(15, 23, 42, 0.7);
          color: #dbeafe;
          margin-bottom: 16px;
          font-size: 14px;
          font-weight: 700;
        }

        .education-title {
          font-size: clamp(2rem, 3.2vw, 2.65rem);
          font-weight: 750;
          letter-spacing: -0.045em;
          color: #dbeafe;
          margin: 0;
          line-height: 1.12;
        }

        .education-title span {
          color: #60a5fa;
        }

        .education-subtitle {
          max-width: 760px;
          margin: 18px auto 0;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;
        }

        .education-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 26px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .education-overview-card {
          background: #111c2d;
          border: 1px solid rgba(96, 165, 250, 0.22);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.10);
          padding: 22px 20px 18px;
          margin-bottom: 18px;
          transition: all 0.3s ease;
        }

        .education-overview-card:hover,
        .education-quote-card:hover,
        .education-metric-box:hover,
        .education-card:hover,
        .experience-journey-panel:hover,
        .experience-timeline-card:hover {
          transform: translateY(-3px);
          border-color: rgba(96, 165, 250, 0.36);
          box-shadow: 0 12px 35px rgba(37, 99, 235, 0.18);
        }

        .education-overview-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .education-overview-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59,130,246,0.18), rgba(14,116,144,0.18));
          border: 1px solid rgba(125, 211, 252, 0.5);
          color: #7dd3fc;
          font-size: 18px;
        }

        .education-overview-header h4 {
          font-size: clamp(1.8rem, 2.3vw, 2.8rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .education-overview-copy {
          color: #dbeafe;
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
          max-width: 520px;
        }

        .education-grid-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .education-metric-box {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(96, 165, 250, 0.18);
          border-radius: 14px;
          padding: 14px 12px;
          background: #142238;
          min-height: 88px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);
        }

        .education-metric-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          flex-shrink: 0;
        }

        .education-metric-value {
          font-size: 22px;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .education-metric-label {
          font-size: 11px;
          color: #cbd5e1;
          margin-top: 2px;
          line-height: 1.3;
        }

        .education-metric-sub {
          font-size: 11px;
          color: #dbeafe;
          line-height: 1.45;
          margin-top: 4px;
        }

        .education-quote-card {
          background: #111c2d;
          border: 1px solid rgba(96, 165, 250, 0.22);
          border-radius: 18px;
          padding: 18px 18px 14px;
          font-size: 18px;
          line-height: 1.5;
          color: #dbeafe;
          font-weight: 500;
          font-style: italic;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.10);
          transition: all 0.3s ease;
        }

        .education-timeline {
          position: relative;
          padding-left: 60px;
          margin-top: 6px;
        }

        .education-timeline-line {
          position: absolute;
          left: 48px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, rgba(96,165,250,0.7), rgba(96,165,250,0.25), rgba(34,211,238,0.65));
          border-radius: 999px;
        }

        .education-timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 94px minmax(0, 1fr);
          gap: 16px;
          align-items: center;
          margin-bottom: 24px;
        }

        .education-timeline-item:last-child { margin-bottom: 0; }

        .education-timeline-dot {
          position: absolute;
          left: -18px;
          top: 50%;
          width: 9px;
          height: 9px;
          transform: translateY(-50%);
          border-radius: 50%;
          border: 2px solid rgba(11, 15, 25, 0.9);
          box-shadow: 0 0 0 6px rgba(96,165,250,0.12);
        }

        .education-timeline-date {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          min-width: 0;
          width: max-content;
          padding: 7px 9px;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
          white-space: nowrap;
          letter-spacing: 0.02em;
          transform: translateY(2px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.26);
        }

        .education-card {
          background: #111c2d;
          border: 1px solid rgba(96, 165, 250, 0.22);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.10);
          padding: 18px 18px 16px;
          min-height: 170px;
          transition: all 0.3s ease;
        }

        .education-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .education-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .education-card-icon {
          width: 48px;
          height: 48px;
          padding: 3px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
          border: 1px solid rgba(148,163,184,0.12);
          flex-shrink: 0;
        }

        .education-card-icon img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: contain;
        }

        .education-card-title {
          font-size: var(--type-card-heading);
          font-weight: 700;
          color: white;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .education-card-subtitle {
          font-size: var(--type-organization);
          font-weight: 700;
          color: #cbd5e1;
          margin-top: 4px;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }

        .education-card-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: var(--type-metadata);
          font-weight: 500;
          white-space: nowrap;
        }

        .education-card-body {
          color: #dbeafe;
          font-size: var(--type-body);
          line-height: var(--line-body);
          margin: 0 0 12px;
        }

        .education-card-focus {
          font-size: 12px;
          color: #e2e8f0;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .education-tag-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .education-tag {
          display: inline-flex;
          align-items: center;
          padding: 5px 9px;
          border-radius: 8px;
          background: rgba(148,163,184,0.08);
          border: 1px solid rgba(148,163,184,0.12);
          color: #dbeafe;
          font-size: var(--type-helper);
          font-weight: 600;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 24px;
          max-width: 1180px;
          margin: 0 auto;
          align-items: stretch;
        }

        .experience-journey-panel,
        .experience-timeline-card {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.22);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.10);
          transition: all 0.3s ease;
        }

        .experience-timeline-card {
          min-height: 270px;
          display: flex;
          flex-direction: column;
        }

        .experience-card-skills {
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid rgba(148, 163, 184, 0.14);
        }

        .experience-timeline-shell {
          position: relative;
          padding-left: 64px;
        }

        .experience-timeline-line {
          display: block;
          position: absolute;
          left: 46px;
          top: 30px;
          bottom: 30px;
          width: 2px;
          border-radius: 99px;
          background: linear-gradient(180deg, #60a5fa, rgba(96,165,250,.24));
        }

        .experience-timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 12px;
          align-items: center;
          margin-bottom: 18px;
        }

        .experience-timeline-dot {
          position: absolute;
          left: -24px;
          top: 50%;
          width: 10px;
          height: 10px;
          transform: translateY(-50%);
          border-radius: 50%;
          border: 2px solid rgba(11, 15, 25, 0.9);
          z-index: 1;
        }

        .experience-timeline-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          position: relative;
          z-index: 1;
          background: #eaf4ff;
          color: #2563a8;
          border: 1px solid #b8d8fb;
          box-shadow: 0 5px 16px rgba(37,99,235,.15);
          font-size: 21px;
          transition: box-shadow .22s ease, transform .22s ease;
        }

        .experience-timeline-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(37,99,235,.26);
        }

        .experience-journey-panel,
        .experience-timeline-card {
          background: #111c2d;
        }

        .experience-journey-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .experience-journey-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 14px;
          background: #142238;
          border: 1px solid rgba(96, 165, 250, 0.16);
          transition: border-color .2s ease, background .2s ease, transform .2s ease;
        }

        .experience-journey-item:hover {
          background: #172943;
          border-color: rgba(96, 165, 250, 0.34);
          transform: translateY(-1px);
        }

        .experience-journey-item-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          flex: 0 0 36px;
          border-radius: 11px;
          color: #7dd3fc;
          background: rgba(59, 130, 246, 0.16);
          border: 1px solid rgba(96, 165, 250, 0.28);
        }

        .experience-journey-item-copy { min-width: 0; flex: 1; }
        .experience-journey-item-title {
          color: #dbeafe;
          font-size: var(--type-body);
          font-weight: 600;
          line-height: 1.5;
        }
        .experience-journey-item-sub {
          margin-top: 4px;
          color: #aebed2;
          font-size: var(--type-metadata);
          font-weight: 400;
          line-height: 1.5;
        }

        .experience-timeline-card,
        .education-card,
        .education-overview-card,
        .education-quote-card,
        .education-metric-box {
          color: #cbd5e1;
        }

        .education-overview-header h4,
        .education-metric-value,
        .education-card-title { color: #dbeafe; }
        .education-overview-copy,
        .education-card-body,
        .education-tag { color: #cbd5e1; }
        .education-card-subtitle,
        .education-metric-label,
        .education-metric-sub { color: #9fb1c8; }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes typewriter {
          0%, 5% { width: 0; }
          10%, 90% { width: 100%; }
          95%, 100% { width: 0; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .hero-text {
          display: inline-block;
          height: 1.2em;
          overflow: hidden;
          border-right: 2px solid #06b6d4;
          animation: blink 0.7s infinite;
        }
        
        input, textarea {
          transition: all 0.3s ease;
        }
        
        input:focus, textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        @media (min-width: 768px) {
          .portfolio-mobile-header-actions,
          .portfolio-mobile-menu-toggle,
          .portfolio-mobile-nav {
            display: none !important;
          }
        }

        @media (max-width: 980px) {
          .about-layout {
            grid-template-columns: 1fr;
          }

          .my-approach-grid {
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }

          .my-approach-connector {
            display: none;
          }

          .my-approach-item {
            width: 100%;
            max-width: 360px;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }

          .education-layout {
            grid-template-columns: 1fr;
          }

          .experience-timeline-shell {
            padding-left: 64px;
          }

          .experience-timeline-line {
            display: block;
          }

          .experience-timeline-item {
            grid-template-columns: 52px minmax(0, 1fr);
            gap: 12px;
          }

          .education-timeline-item {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .education-timeline-date {
            min-width: 0;
            width: max-content;
            justify-self: start;
          }
        }

        .hero-profile-stats { display: contents; }

        .hero-graphic-backdrop {
          position: absolute;
          z-index: 0;
          inset: -12% -10% -10% -18%;
          overflow: hidden;
          pointer-events: none;
          border-radius: 36px;
          background:
            radial-gradient(ellipse at 82% 24%, rgba(0, 177, 255, .11), transparent 38%),
            radial-gradient(ellipse at 22% 84%, rgba(0, 206, 232, .08), transparent 42%);
        }

        .hero-graphic-orbit {
          position: absolute;
          width: 72%;
          aspect-ratio: 1;
          right: -6%;
          top: 13%;
          border: 1px solid rgba(22, 194, 255, .38);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(0, 178, 255, .045), inset 0 0 35px rgba(0, 178, 255, .025);
          animation: hero-orbit-turn 34s linear infinite;
        }

        .hero-graphic-orbit::after {
          content: "";
          position: absolute;
          inset: -9%;
          border: 1px dashed rgba(51, 159, 226, .28);
          border-radius: 50%;
        }

        .hero-graphic-panel {
          position: absolute;
          width: 54%;
          height: 43%;
          border: 1px solid rgba(177, 228, 255, .34);
          border-radius: 34px;
          background: linear-gradient(135deg, rgba(164, 213, 240, .1), rgba(14, 78, 120, .05) 55%, rgba(0, 188, 236, .07));
          box-shadow: inset 0 0 24px rgba(203, 238, 255, .05), 0 0 24px rgba(0, 191, 255, .06);
          backdrop-filter: blur(4px);
        }

        .hero-graphic-panel-back {
          top: 4%;
          right: -4%;
          transform: rotate(-5deg);
          animation: hero-panel-float-back 7s ease-in-out infinite;
        }
        .hero-graphic-panel-front {
          top: 34%;
          right: 2%;
          transform: rotate(5deg);
          animation: hero-panel-float-front 8s ease-in-out infinite;
        }

        .hero-graphic-grid {
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image: linear-gradient(rgba(77, 172, 220, .25) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 172, 220, .25) 1px, transparent 1px);
          background-size: 100% 25%, 25% 100%;
          mask-image: linear-gradient(90deg, transparent, #000 65%);
        }

        .hero-graphic-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #52dfff;
          box-shadow: 0 0 12px #22c9ff;
          animation: hero-dot-pulse 3s ease-in-out infinite;
        }

        @keyframes hero-orbit-turn {
          to { rotate: 360deg; }
        }

        @keyframes hero-panel-float-back {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -9px; }
        }

        @keyframes hero-panel-float-front {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 8px; }
        }

        @keyframes hero-dot-pulse {
          0%, 100% { opacity: .55; scale: .85; }
          50% { opacity: 1; scale: 1.2; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-graphic-orbit,
          .hero-graphic-panel-back,
          .hero-graphic-panel-front,
          .hero-graphic-dot {
            animation: none !important;
          }
        }

        .hero-profile-card { position: relative; z-index: 1; }

        .about-highlight-cards {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 18px;
          margin-top: 38px;
        }

        .about-highlight-card { min-width: 0; }

        .contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
          align-items: start;
          gap: 48px;
        }

        .contact-form-card {
          padding: 30px;
          border: 1px solid rgba(148, 163, 184, .17);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(17, 28, 45, .92), rgba(10, 17, 29, .94));
          box-shadow: 0 18px 50px rgba(0, 0, 0, .18);
        }

        .contact-form-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px 14px;
        }

        .contact-field { min-width: 0; }
        .contact-field-message { grid-column: 1 / -1; }

        .contact-field-label {
          display: block;
          margin-bottom: 7px;
          color: #d5dfeb;
          font-size: 13px;
          font-weight: 650;
          letter-spacing: .01em;
        }

        .contact-field-input {
          width: 100%;
          box-sizing: border-box;
          padding: 13px 14px;
          border: 1px solid #29384b;
          border-radius: 9px;
          background: rgba(5, 12, 22, .72);
          color: #f1f5f9;
          font-size: 14px;
          transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .contact-field-input::placeholder { color: #718096; }
        .contact-field-input:focus {
          border-color: #38bdf8 !important;
          background: #0b1726 !important;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, .12) !important;
        }

        .contact-submit {
          align-self: flex-start;
          min-height: 46px;
          padding: 0 20px;
          border: 1px solid rgba(125, 211, 252, .38);
          border-radius: 9px;
          background: #0e7490;
          color: #f0f9ff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .01em;
          cursor: pointer;
          transition: background .2s ease, transform .2s ease;
        }

        .contact-submit:hover { background: #0891b2; transform: translateY(-1px); }

        @media (max-width: 767px) {
          #contact {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          #contact > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .contact-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
          }

          .contact-form-card { padding: 20px 16px; }
          .contact-form-fields { grid-template-columns: minmax(0, 1fr); gap: 15px; }
          .contact-field-message { grid-column: auto; }
          .contact-submit { width: 100%; }

          #experience {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          .experience-section-title,
          #experience .portfolio-section-title,
          .education-title {
            font-size: clamp(1.9rem, 8vw, 2.5rem) !important;
            line-height: 1.12 !important;
            letter-spacing: -0.04em !important;
            text-wrap: balance;
          }

          #about {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          #about > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .about-highlight-cards {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
            margin-top: 24px;
          }

          .about-highlight-card {
            min-height: 0 !important;
            padding: 14px !important;
            border-radius: 14px !important;
            gap: 12px !important;
          }

          .hero-profile-shell {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            flex-direction: column;
            align-items: stretch;
          }

          .hero-graphic-backdrop {
            inset: -7% -7% 4% -7%;
            border-radius: 26px;
          }

          .hero-graphic-orbit { width: 82%; right: -13%; top: 11%; }
          .hero-graphic-panel { width: 49%; height: 35%; border-radius: 25px; }
          .hero-graphic-panel-back { top: 8%; right: -5%; }
          .hero-graphic-panel-front { top: 37%; right: 3%; }

          .hero-profile-card,
          .hero-profile-image-frame {
            border: 0 !important;
          }

          .hero-profile-stats {
            display: flex;
            gap: 10px;
            margin-top: 12px;
          }

          .hero-profile-stat {
            position: static !important;
            inset: auto !important;
            z-index: auto !important;
            width: calc(50% - 5px);
            flex: 1 1 0;
          }

          .hero-profile-stat-card {
            height: 100%;
            padding: 10px !important;
            gap: 8px !important;
            border-radius: 12px !important;
            animation: none !important;
            transform: none !important;
            transition: none !important;
          }

          .hero-profile-stat-icon {
            width: 34px !important;
            height: 34px !important;
            flex: 0 0 34px;
            border-radius: 10px !important;
            font-size: 16px !important;
          }

          .hero-profile-stat-card p:first-child { font-size: 12px !important; }
          .hero-profile-stat-card p:last-child { font-size: 10px !important; }

          .projects-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 24px !important;
          }

          .project-card-image { height: 160px !important; }
          .project-card-content { padding: 16px 16px 18px !important; gap: 12px !important; }
          .project-card-category { font-size: 11px !important; }
          .project-card-title { font-size: 18px !important; }
          .project-card-description { font-size: 14px !important; line-height: 1.55 !important; }
          .project-card-tech span { padding: 5px 8px !important; font-size: 10px !important; }
          .project-card-actions { display: flex !important; flex-wrap: wrap; gap: 10px !important; }
          .project-card-action { min-width: 110px !important; width: auto; padding: 10px 12px !important; font-size: 13px !important; }

          .portfolio-desktop-nav {
            display: none !important;
          }

          .portfolio-mobile-header-actions {
            display: flex !important;
            margin-left: auto;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .portfolio-mobile-menu-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }

          .portfolio-mobile-nav {
            display: flex !important;
          }

          .education-timeline {
            padding-left: 20px;
          }

          .education-timeline-line {
            left: 8px;
          }

          .experience-timeline-shell {
            padding-left: 20px;
          }

          .experience-timeline-line {
            left: 8px;
          }

          .education-timeline-dot,
          .experience-timeline-dot {
            display: block !important;
          }

          .education-timeline-item > div:first-child {
            min-height: 0 !important;
            align-items: flex-start !important;
            padding-left: 0 !important;
          }

          .education-timeline-date {
            flex-direction: row;
            gap: 6px;
            width: auto !important;
            min-width: 0 !important;
            padding: 7px 10px;
            transform: none;
          }

          .education-card {
            min-height: 0;
          }

          .education-card-title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden !important;
            white-space: normal !important;
            overflow-wrap: normal;
            text-overflow: ellipsis;
            font-size: 14px !important;
            line-height: 1.3 !important;
          }

          .education-card-subtitle {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            overflow-wrap: normal;
            font-size: 13px !important;
            line-height: 1.35 !important;
          }
          .education-card-head { align-items: flex-start; }
          .education-card-subtitle { margin-top: 5px; }
          .education-card-top { align-items: flex-start; gap: 8px; }
          .education-card-badge { flex-shrink: 0; padding: 6px 8px; }
          .education-card-body { font-size: 15px; line-height: 1.65; }
          .education-tag { font-size: 12px; }
          .education-metric-label,
          .education-metric-sub { font-size: 12px; }

          .experience-timeline-shell { padding-left: 20px; }
          .experience-timeline-item {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
            align-items: start;
          }
          .experience-timeline-icon { display: none; }
          .experience-timeline-line { left: 8px; }
          .experience-timeline-dot { left: -18px; }
          .experience-timeline-card { min-width: 0; }
          .experience-company {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 16px !important;
            line-height: 1.3 !important;
            white-space: normal !important;
            overflow: hidden !important;
            overflow-wrap: normal;
            text-overflow: ellipsis !important;
          }
          .experience-journey-item { gap: 10px; padding: 10px; }
          .experience-journey-item-icon { width: 34px; height: 34px; flex-basis: 34px; }
          .experience-section-subtitle { font-size: var(--type-body) !important; }
          .experience-description { font-size: var(--type-body) !important; line-height: var(--line-body) !important; }
          .experience-period { font-size: var(--type-metadata) !important; flex-wrap: wrap; }
          .experience-skill { font-size: var(--type-helper) !important; }
        }

        @media (max-width: 520px) {
          .my-approach-icon-wrap {
            width: 122px;
            height: 122px;
          }

          .my-approach-number-badge {
            width: 42px;
            height: 42px;
            font-size: 16px;
          }

          .my-approach-icon {
            font-size: 38px;
          }

          .my-approach-title {
            font-size: 1.8rem;
            margin-top: 18px;
          }

          .my-approach-text {
            font-size: 0.95rem;
            max-width: 180px;
          }

          .experience-timeline-card,
          .education-card,
          .education-overview-card,
          .education-quote-card,
          .education-metric-box {
            border-radius: 16px;
          }

          .education-card-title {
            white-space: normal;
          }

          .experience-timeline-card {
            padding: 14px 14px 12px;
          }

          .experience-grid,
          .education-layout {
            gap: 16px;
          }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 50,
          width: "100%",
          background: "rgba(11, 15, 25, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(to top right, #6366f1, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0 4px 16px rgba(99, 102, 241, 0.3)",
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "-0.01em",
              }}
            >
              Manish<span style={{ color: "#06b6d4" }}>.dev</span>
            </span>
          </a>

          <nav className="portfolio-desktop-nav" style={{ gap: "32px" }}>
            {portfolioNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#06b6d4")}
                onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="portfolio-mobile-header-actions">
            <a
              href="#contact"
              className="portfolio-mobile-hire-btn"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="portfolio-mobile-menu-toggle"
              style={{
                background: "none",
                border: "none",
                color: "#cbd5e1",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px 16px",
            }}
          >
            <nav
              className="portfolio-mobile-nav"
              aria-label="Mobile navigation"
              style={{ display: "flex" }}
            >
              {portfolioNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="portfolio-mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main style={{ position: "relative", zIndex: 10 }}>
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "140px",
            paddingBottom: "96px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                className="glass-panel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  color: "#a5d6ff",
                  fontSize: "14px",
                  fontWeight: "500",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#06b6d4",
                  }}
                />
                <span>Available for new opportunities</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h2 className="portfolio-greeting"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#cbd5e1",
                    margin: 0,
                  }}
                >
                  Hey there, welcome!
                </h2>
                <h1 className="portfolio-page-heading"
                  style={{
                    fontSize: "clamp(2rem, 4.2vw, 3.1rem)",
                    fontWeight: "800",
                    letterSpacing: "-0.03em",
                    color: "white",
                    lineHeight: 1.12,
                    margin: 0,
                  }}
                >
                  <span>I'm </span>
                  <span
                    style={{
                      background: "linear-gradient(100deg, #e0f2fe 0%, #67e8f9 48%, #60a5fa 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "drop-shadow(0 0 18px rgba(34, 211, 238, .16))",
                    }}
                  >
                    Manish Kumar
                  </span>
                </h1>
                <div
                  className="portfolio-typewriter-shell"
                  style={{
                    fontSize: "clamp(1.35rem, 3.2vw, 1.8rem)",
                    fontWeight: "700",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    minHeight: "60px",
                  }}
                >
                  <span style={{ color: "#cbd5e1" }}>A </span>
                  <span className="portfolio-typewriter-highlight">
                    <TypewriterText phrases={rotatingHeroPhrases} />
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  maxWidth: "500px",
                  margin: 0,
                }}
              >
                I am a passionate software developer dedicated to crafting
                robust, scalable applications and delivering exceptional user
                experiences through clean code.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  paddingTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#contact"
                  style={{
                    padding: "12px 32px",
                    borderRadius: "12px",
                    background: "linear-gradient(to right, #6366f1, #06b6d4)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  <i className="fa-regular fa-paper-plane" />
                  <span>Get In Touch</span>
                </a>
                <button
                  style={{
                    padding: "12px 32px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#cbd5e1",
                    fontWeight: "600",
                    fontSize: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <i className="fa-solid fa-arrow-down" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            <div
              className="hero-profile-shell"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div className="hero-graphic-backdrop" aria-hidden="true">
                <div className="hero-graphic-grid" />
                <div className="hero-graphic-orbit" />
                <div className="hero-graphic-panel hero-graphic-panel-back" />
                <div className="hero-graphic-panel hero-graphic-panel-front" />
                <span className="hero-graphic-dot" style={{ top: "18%", right: "24%" }} />
                <span className="hero-graphic-dot" style={{ top: "43%", right: "82%" }} />
                <span className="hero-graphic-dot" style={{ top: "71%", right: "10%" }} />
                <span className="hero-graphic-dot" style={{ top: "88%", right: "49%", opacity: .45 }} />
              </div>
              <div
                className="glass-card hero-profile-card"
                style={{
                  borderRadius: "24px",
                  padding: "16px",
                  maxWidth: "400px",
                  width: "100%",
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  backdropFilter: "none",
                  boxShadow: "none",
                }}
              >
                <div
                  className="hero-profile-image-frame"
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: "4/5",
                    background: "transparent",
                    border: "1px solid rgba(148, 163, 184, 0.08)",
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Manish Kumar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "none",
                      filter: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "transparent",
                    }}
                  />
                  <div
                    className="glass-panel"
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      right: "16px",
                      padding: "12px",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#cbd5e1",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#10b981",
                          }}
                        />
                        Available
                      </span>
                      <span style={{ color: "#06b6d4" }}>&lt;dev/&gt;</span>
                    </div>
                  </div>
                </div>

                <div className="hero-profile-stats">
                <div
                  className="hero-profile-stat"
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    zIndex: 20,
                  }}
                >
                  <div
                    className="glass-panel hero-profile-stat-card"
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                      }}
                      className="hero-profile-stat-icon"
                    >
                      <i
                        className="fa-solid fa-briefcase"
                        style={{ color: "white" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "800",
                          color: "white",
                          margin: 0,
                        }}
                      >
                        1+ Year
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#cbd5e1",
                          margin: "4px 0 0 0",
                        }}
                      >
                        Experience
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="hero-profile-stat"
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    zIndex: 20,
                  }}
                >
                  <div
                    className="glass-panel hero-profile-stat-card"
                    style={{
                      padding: "12px 16px",
                      borderRadius: "16px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #10b981, #14b8a6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                      }}
                      className="hero-profile-stat-icon"
                    >
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "white" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "700",
                          color: "white",
                          margin: 0,
                        }}
                      >
                        5+ Projects
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#cbd5e1",
                          margin: "2px 0 0 0",
                        }}
                      >
                        Completed
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(11, 15, 25, 0.96)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div className="about-layout">
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#3eaaff",
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "22px",
                  }}
                >
                  <span style={{ fontSize: "12px", display: "inline-block" }}>
                    ●
                  </span>
                  <span>About</span>
                </div>

                <h3 className="portfolio-section-title"
                  style={{
                    fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
                    fontWeight: "800",
                    letterSpacing: "-0.06em",
                    color: "white",
                    margin: 0,
                    lineHeight: 1.02,
                  }}
                >
                  A little about{" "}
                  <span style={{ color: "#3eaaff" }}>how I work</span>
                </h3>

                <p
                  style={{
                    color: "#dfe8f7",
                    fontSize: "22px",
                    lineHeight: 1.55,
                    maxWidth: "760px",
                    margin: "24px 0 0",
                  }}
                >
                  I build practical and user-friendly web applications using
                  modern technologies. I enjoy solving real-world problems and
                  continuously learning to create better and more efficient
                  solutions.
                </p>

                <div style={{ marginTop: "34px" }}>
                  <h4
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.8rem)",
                      fontWeight: "800",
                      color: "white",
                      margin: 0,
                      letterSpacing: "-0.06em",
                    }}
                  >
                    My approach
                  </h4>

                  <div className="my-approach-grid">
                    <div className="my-approach-connector" />

                    {[
                      {
                        number: "01",
                        title: "Understand",
                        text: "I learn the problem, explore requirements and plan the right solution.",
                        icon: "fa-file-lines",
                        iconColor: "#8ed8ff",
                      },
                      {
                        number: "02",
                        title: "Build",
                        text: "I develop clean, maintainable and scalable applications.",
                        icon: "fa-code",
                        iconColor: "#8ed8ff",
                      },
                      {
                        number: "03",
                        title: "Improve",
                        text: "I test, optimize and keep learning to make it better.",
                        icon: "fa-chart-line",
                        iconColor: "#8ed8ff",
                      },
                    ].map((item, index) => (
                      <div key={item.number} className="my-approach-item">
                        <div className="my-approach-icon-wrap">
                          <div className="my-approach-number-badge">
                            {item.number}
                          </div>

                          <i
                            className={`fa-solid ${item.icon} my-approach-icon`}
                            style={{ color: item.iconColor }}
                          />
                        </div>

                        <h5 className="my-approach-title">{item.title}</h5>

                        <p className="my-approach-text">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  background: "rgba(11, 17, 30, 0.9)",
                  border: "1px solid rgba(107, 160, 255, 0.35)",
                  borderRadius: "22px",
                  padding: "18px 18px 8px",
                  boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "white",
                    marginBottom: "18px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(148,163,184,0.14)",
                  }}
                >
                  At a glance
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(148,163,184,0.14)",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(96, 165, 250, 0.3)",
                      fontSize: "24px",
                    }}
                  >
                    💼
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#a5d6ff",
                        marginBottom: "3px",
                      }}
                    >
                      Current role
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      Full-Stack Developer & AI Solutions Engineer
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "18px 0 12px",
                    borderBottom: "1px solid rgba(148,163,184,0.14)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#dbeafe",
                      fontSize: "20px",
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>🗓️</span>
                    <span>Experience</span>
                  </div>

                  <div style={{ position: "relative", paddingLeft: "18px" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "6px",
                        top: "12px",
                        bottom: "12px",
                        width: "2px",
                        background: "rgba(59,130,246,0.35)",
                      }}
                    />

                    <div style={{ position: "relative", marginBottom: "18px" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "-18px",
                          top: "8px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#3eaaff",
                          boxShadow: "0 0 0 4px rgba(59,130,246,0.18)",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        ThinkNext
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#dbeafe",
                          marginTop: "4px",
                        }}
                      >
                        Software Engineer Intern
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#b8c5dc",
                          marginTop: "2px",
                        }}
                      >
                        Jan 2025 – Sep 2025
                      </div>
                    </div>

                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "-18px",
                          top: "8px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#3eaaff",
                          boxShadow: "0 0 0 4px rgba(59,130,246,0.18)",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        Binary Data
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#dbeafe",
                          marginTop: "4px",
                        }}
                      >
                        Full-Stack Developer
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#b8c5dc",
                          marginTop: "2px",
                        }}
                      >
                        Dec 2025 – Present
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "18px 0 12px",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(96, 165, 250, 0.3)",
                      fontSize: "24px",
                    }}
                  >
                    🎓
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      Education
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "#dbeafe",
                        fontWeight: "600",
                      }}
                    >
                      B.Tech in Computer Science
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#b8c5dc",
                        marginTop: "2px",
                      }}
                    >
                      Chandigarh Group of Colleges
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="about-highlight-cards"
            >
              {[
                {
                  value: "10+",
                  label: "Projects",
                  sub: "Built and deployed web applications",
                  icon: "◫",
                },
                {
                  value: "Laravel • PHP • React • Node.js",
                  label: "",
                  sub: "",
                  icon: "🧩",
                  centered: true,
                },
                {
                  value: "Always learning",
                  label: "",
                  sub: "Exploring new tools and improving my skills",
                  icon: "📊",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="about-highlight-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(15, 23, 42, 0.58)",
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                    borderRadius: "18px",
                    padding: "18px 18px",
                    minHeight: "84px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(96, 165, 250, 0.28)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: item.centered ? "15px" : "20px",
                        color: "white",
                        fontWeight: "800",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.value}
                    </div>
                    {item.label ? (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#cbd5e1",
                          marginTop: "4px",
                        }}
                      >
                        {item.label}
                      </div>
                    ) : null}
                    {item.sub ? (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#cbd5e1",
                          marginTop: "4px",
                        }}
                      >
                        {item.sub}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(7, 12, 20, 0.96)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "42px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(96, 165, 250, 0.6)",
                  background: "rgba(15, 23, 42, 0.7)",
                  color: "#dbeafe",
                  marginBottom: "22px",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <i
                  className="fa-solid fa-briefcase"
                  style={{ color: "#7dd3fc" }}
                />
                <span>Work Experience</span>
              </div>

              <h3 className="portfolio-section-title"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                  fontWeight: "800",
                  letterSpacing: "-0.06em",
                  color: "white",
                  margin: 0,
                  lineHeight: 1.06,
                }}
              >
                My Work <span style={{ color: "#60a5fa" }}>Experience</span>
              </h3>

              <p
                className="experience-section-subtitle"
                style={{
                  maxWidth: "760px",
                  margin: "18px auto 0",
                  color: "#cbd5e1",
                  fontSize: "18px",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Hands-on experience building and maintaining web applications.
              </p>
            </div>

            <div className="experience-grid">
              <div
                className="experience-journey-panel"
                style={{
                  padding: "20px 18px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(14,116,144,0.2))",
                      border: "1px solid rgba(125, 211, 252, 0.5)",
                      color: "#7dd3fc",
                    }}
                  >
                    <i
                      className="fa-solid fa-briefcase"
                      style={{ fontSize: 14 }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "white",
                      margin: 0,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    My Growth Journey
                  </h4>
                </div>

                <div
                  className="experience-journey-list"
                >
                  {[
                    {
                      icon: "fa-file-lines",
                      title: "Software Engineer Intern · ThinkNext",
                      sub: "Started my career in web development.",
                    },
                    {
                      icon: "fa-rocket",
                      title: "Real Projects",
                      sub: "Built features for live applications.",
                    },
                    {
                      icon: "fa-chart-column",
                      title: "Continuous Learning",
                      sub: "Expanded my skills in modern web technologies.",
                    },
                    {
                      icon: "fa-people-group",
                      title: "Team Collaboration",
                      sub: "Worked with teams to deliver features.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="experience-journey-item"
                    >
                      <div className="experience-journey-item-icon">
                        <i
                          className={`fa-solid ${item.icon}`}
                          style={{ fontSize: 16 }}
                        />
                      </div>

                      <div className="experience-journey-item-copy">
                        <div className="experience-journey-item-title">
                          {item.title}
                        </div>
                        {item.sub ? (
                          <div className="experience-journey-item-sub">
                            {item.sub}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(148,163,184,0.12)",
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: "#cbd5e1",
                    fontWeight: "500",
                    fontStyle: "italic",
                  }}
                >
                  <span style={{ fontSize: "22px", color: "#7dd3fc" }}>“</span>
                  Learn by building, solving problems, and improving every day.
                </div>
              </div>

              <div className="experience-timeline-shell">
                <div className="experience-timeline-line" />

                {experience.map((exp, idx) => {
                  const isThinkNext = exp.company === "ThinkNext";
                  const isBlue = isThinkNext;

                  return (
                    <div
                      key={exp.company}
                      className="experience-timeline-item"
                      style={{
                        marginBottom:
                          idx === experience.length - 1 ? 0 : "18px",
                      }}
                    >
                      <div
                        className="experience-timeline-dot"
                        style={{ background: isBlue ? "#f87171" : "#34d399" }}
                        aria-hidden="true"
                      />
                      <div className="experience-timeline-icon" aria-hidden="true">
                        {exp.icon}
                      </div>

                      <div
                        className="experience-timeline-card"
                        style={{
                          padding: "18px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "12px",
                            marginBottom: "12px",
                            paddingBottom: "12px",
                            borderBottom: "1px solid rgba(148,163,184,0.14)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              minWidth: 0,
                              flex: 1,
                            }}
                          >
                            <div
                              style={{
                                width: "42px",
                                height: "42px",
                                borderRadius: "12px",
                                background: isBlue
                                  ? "linear-gradient(135deg, #ffe4e6, #fecaca)"
                                  : "linear-gradient(135deg, #dcfce7, #bbf7d0)",
                                border: "1px solid rgba(148,163,184,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 800,
                                color: isBlue ? "#b91c1c" : "#166534",
                                fontSize: "16px",
                              }}
                            >
                              {exp.logo}
                            </div>

                            <div style={{ minWidth: 0, flex: 1 }}>
                              <div
                                className="experience-company"
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "800",
                                  color: isBlue ? "#fca5a5" : "#6ee7b7",
                                  lineHeight: 1.2,
                                  letterSpacing: "0.01em",
                                  overflowWrap: "anywhere",
                                }}
                              >
                                {exp.company}
                              </div>
                              <div
                                className="experience-role"
                                style={{
                                  fontSize: "14px",
                                  color: "#cbd5e1",
                                  marginTop: "2px",
                                }}
                              >
                                {exp.title}
                              </div>
                            </div>
                          </div>

                          <div
                            className="experience-status"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 10px",
                              borderRadius: "8px",
                              background: isBlue
                                ? "rgba(248,113,113,0.12)"
                                : "rgba(16,185,129,0.12)",
                              border: `1px solid ${isBlue ? "rgba(248,113,113,0.28)" : "rgba(16,185,129,0.3)"}`,
                              color: isBlue ? "#fecaca" : "#d1fae5",
                              fontSize: "11px",
                              fontWeight: "700",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {exp.status}
                          </div>
                        </div>

                        <div
                          className="experience-period"
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "12px",
                            padding: "8px 10px",
                            borderRadius: "9px",
                            border: "1px solid rgba(96,165,250,0.16)",
                            background: "rgba(96,165,250,0.07)",
                            color: "#bfdbfe",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          <i className="fa-regular fa-calendar" aria-hidden="true" />
                          <span>{exp.period.replace("January", "Jan").replace("December", "Dec").replace("September", "Sep").replace(" · ", " • ")}</span>
                        </div>

                        <p
                          className="experience-description"
                          style={{
                            margin: "0 0 14px",
                            padding: 0,
                            color: "#dbeafe",
                            fontSize: "14px",
                            lineHeight: 1.6,
                          }}
                        >
                          {exp.description}
                        </p>

                        <div className="experience-card-skills">
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#e2e8f0",
                              fontWeight: "700",
                              marginBottom: "8px",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Technologies
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "6px",
                            }}
                          >
                            {exp.skills.map((skill) => (
                              <span
                                className="experience-skill"
                                key={skill}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "5px 9px",
                                  borderRadius: "8px",
                                  background: "rgba(148,163,184,0.08)",
                                  border: "1px solid rgba(148,163,184,0.12)",
                                  color: "#dbeafe",
                                  fontSize: "11px",
                                  fontWeight: "600",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="education-shell">
            <div className="education-header">
              <div className="education-badge">
                <i
                  className="fa-solid fa-graduation-cap"
                  style={{ color: "#7dd3fc" }}
                />
                <span>Education</span>
              </div>

              <h3 className="education-title portfolio-section-title">
                My <span>Education</span> Journey
              </h3>

              <p className="education-subtitle">
                Computer science studies built my software development foundation.
              </p>
            </div>

            <div className="education-layout">
              <div className="education-left-panel">
                <div className="education-overview-card">
                  <div className="education-overview-header">
                    <div className="education-overview-icon">
                      <i className="fa-solid fa-book" />
                    </div>
                    <h4>Building a Strong Foundation</h4>
                  </div>

                  <p className="education-overview-copy">
                    From school fundamentals to B.Tech projects, each step strengthened my computer science skills.
                  </p>

                  <div className="education-grid-metrics">
                    <div className="education-metric-box">
                      <div
                        className="education-metric-icon"
                        style={{ background: "rgba(96,165,250,0.18)" }}
                      >
                        <i className="fa-solid fa-book-open" />
                      </div>
                      <div>
                        <div className="education-metric-value">3</div>
                        <div className="education-metric-label">
                          Academic Milestones
                        </div>
                        <div className="education-metric-sub">
                          10th → Diploma → B.Tech
                        </div>
                      </div>
                    </div>

                    <div className="education-metric-box">
                      <div
                        className="education-metric-icon"
                        style={{ background: "rgba(251,191,36,0.18)" }}
                      >
                        <i className="fa-solid fa-trophy" />
                      </div>
                      <div>
                        <div className="education-metric-value">
                          Computer Science
                        </div>
                        <div className="education-metric-sub">
                          Technology and problem solving
                        </div>
                      </div>
                    </div>

                    <div className="education-metric-box">
                      <div
                        className="education-metric-icon"
                        style={{ background: "rgba(16,185,129,0.18)" }}
                      >
                        <i className="fa-solid fa-chart-line" />
                      </div>
                      <div>
                        <div className="education-metric-value">
                          Practical Learning
                        </div>
                        <div className="education-metric-sub">
                          Skills built through practice
                        </div>
                      </div>
                    </div>

                    <div className="education-metric-box">
                      <div
                        className="education-metric-icon"
                        style={{ background: "rgba(168,85,247,0.18)" }}
                      >
                        <i className="fa-solid fa-users" />
                      </div>
                      <div>
                        <div className="education-metric-value">
                          Career Preparation
                        </div>
                        <div className="education-metric-sub">
                          Preparing for software development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="education-quote-card">
                  <span style={{ fontSize: "26px", color: "#7dd3fc" }}>“</span>
                  Learning that helps me build real-world solutions.
                </div>
              </div>

              <div className="education-timeline">
                <div className="education-timeline-line" />

                {[
                  {
                    year: "2018 - 2019",
                    duration: "1 Year",
                    title: "Matriculation (10th)",
                    subtitle: "BSEB Board",
                    logo: bsebLogo,
                    description:
                      "Built foundations in core subjects and analytical thinking.",
                    color: "#60a5fa",
                    tagColor: "rgba(96,165,250,0.12)",
                    tagBorder: "rgba(96,165,250,0.25)",
                    iconBg: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
                    iconText: "#0f172a",
                    tagText: "#dbeafe",
                    focus: [
                      "General Education",
                      "Basic Computer Knowledge",
                      "Analytical Thinking",
                    ],
                    icon: "☰",
                    label: "10th",
                  },
                  {
                    year: "2019 - 2022",
                    duration: "3 Years",
                    title: "Diploma in Computer Science Engineering",
                    subtitle: "Sri Sukhmani Polytechnic",
                    logo: sriSukhmaniLogo,
                    description:
                      "Learned programming, web development, and databases.",
                    color: "#34d399",
                    tagColor: "rgba(16,185,129,0.12)",
                    tagBorder: "rgba(16,185,129,0.28)",
                    iconBg: "linear-gradient(135deg, #d1fae5, #bbf7d0)",
                    iconText: "#166534",
                    tagText: "#d1fae5",
                    focus: [
                      "Programming Basics",
                      "Web Development",
                      "Database Fundamentals",
                    ],
                    icon: "⚙",
                    label: "Diploma",
                  },
                  {
                    year: "2022 - 2025",
                    duration: "3 Years",
                    title: "B.Tech in Computer Science Engineering",
                    subtitle: "Chandigarh Group of Colleges, Landran",
                    logo: cgcLandranLogo,
                    description:
                      "Built software skills through coursework and practical projects.",
                    color: "#a78bfa",
                    tagColor: "rgba(168,85,247,0.12)",
                    tagBorder: "rgba(168,85,247,0.28)",
                    iconBg: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                    iconText: "#4c1d95",
                    tagText: "#e9d5ff",
                    focus: [
                      "Advanced Programming",
                      "Software Development",
                      "Modern Technologies",
                    ],
                    icon: "✦",
                    label: "B.Tech",
                  },
                ].map((item) => (
                  <div key={item.title} className="education-timeline-item">
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100px",
                        textAlign: "center",
                        paddingLeft: "6px",
                      }}
                    >
                      <div
                        className="education-timeline-dot"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 0 6px ${item.tagColor}`,
                        }}
                      />
                      <div
                        className="education-timeline-date"
                        style={{
                          background: item.tagColor,
                          borderColor: item.tagBorder,
                          color: item.tagText,
                          boxShadow: `0 10px 24px ${item.tagColor}, inset 0 0 0 1px rgba(255,255,255,0.04)`,
                        }}
                      >
                        <span>{item.year.replace(/\s*-\s*/, "–")}</span>
                      </div>
                    </div>

                    <div className="education-card">
                      <div className="education-card-top">
                        <div className="education-card-head">
                          <div
                            className="education-card-icon"
                            style={{
                              background: item.logo ? "#f8fafc" : item.iconBg,
                              color: item.iconText,
                            }}
                          >
                            {item.logo ? (
                              <img src={item.logo} alt={`${item.subtitle} logo`} />
                            ) : (
                              item.icon
                            )}
                          </div>

                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div className="education-card-title">
                              {item.title}
                            </div>
                            <div
                              className="education-card-subtitle"
                              style={{
                                color: item.color,
                                fontWeight: 700,
                                letterSpacing: "0.01em",
                              }}
                            >
                              {item.subtitle}
                            </div>
                          </div>

                        </div>

                        <div
                          className="education-card-badge"
                          style={{
                            background: item.tagColor,
                            border: `1px solid ${item.tagBorder}`,
                            color: item.tagText,
                          }}
                        >
                          {item.label}
                        </div>
                      </div>

                      <div className="education-card-body">
                        {item.description}
                      </div>

                      <div>
                        <div className="education-card-focus">Key Focus</div>
                        <div className="education-tag-wrap">
                          {item.focus.map((focusItem) => (
                            <span key={focusItem} className="education-tag">
                              {focusItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#6366f1",
                  textTransform: "uppercase",
                  margin: "0 0 8px 0",
                }}
              >
                Expertise
              </h2>
              <h3 className="portfolio-section-title"
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 0 24px 0",
                }}
              >
                Skills & Tools
              </h3>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #6366f1, #06b6d4)",
                  borderRadius: "9999px",
                  margin: "0 auto",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="glass-card"
                  style={{
                    padding: "32px",
                    borderRadius: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background:
                        group.color === "indigo"
                          ? "rgba(99, 102, 241, 0.1)"
                          : group.color === "cyan"
                            ? "rgba(6, 182, 212, 0.1)"
                            : "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginBottom: "16px",
                      color:
                        group.color === "indigo"
                          ? "#6366f1"
                          : group.color === "cyan"
                            ? "#06b6d4"
                            : "#10b981",
                      border: `1px solid ${group.color === "indigo" ? "rgba(99, 102, 241, 0.2)" : group.color === "cyan" ? "rgba(6, 182, 212, 0.2)" : "rgba(16, 185, 129, 0.2)"}`,
                    }}
                  >
                    {group.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "16px",
                    }}
                  >
                    {group.title}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "13px",
                          padding: "6px 12px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          color: "#cbd5e1",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(99, 102, 241, 0.2)";
                          e.target.style.borderColor =
                            "rgba(99, 102, 241, 0.5)";
                          e.target.style.color = "#a5d6ff";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.05)";
                          e.target.style.borderColor =
                            "rgba(255, 255, 255, 0.1)";
                          e.target.style.color = "#cbd5e1";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ai-tools"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div
                className="glass-panel"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  marginBottom: "16px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#6366f1",
                }}
              >
                MY AI TOOLS
              </div>
              <h3 className="portfolio-section-title"
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 0 24px 0",
                }}
              >
                Workflow and productivity stack
              </h3>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #6366f1, #06b6d4)",
                  borderRadius: "9999px",
                  margin: "0 auto",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="glass-card"
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background:
                        tool.color === "sky"
                          ? "rgba(14, 165, 233, 0.1)"
                          : tool.color === "slate"
                            ? "rgba(100, 116, 139, 0.1)"
                            : tool.color === "purple"
                              ? "rgba(168, 85, 247, 0.1)"
                              : tool.color === "emerald"
                                ? "rgba(16, 185, 129, 0.1)"
                                : tool.color === "indigo"
                                  ? "rgba(99, 102, 241, 0.1)"
                                  : tool.color === "orange"
                                    ? "rgba(249, 115, 22, 0.1)"
                                    : tool.color === "pink"
                                      ? "rgba(236, 72, 153, 0.1)"
                                      : "rgba(71, 85, 105, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      border: `1px solid ${
                        tool.color === "sky"
                          ? "rgba(14, 165, 233, 0.2)"
                          : tool.color === "slate"
                            ? "rgba(100, 116, 139, 0.2)"
                            : tool.color === "purple"
                              ? "rgba(168, 85, 247, 0.2)"
                              : tool.color === "emerald"
                                ? "rgba(16, 185, 129, 0.2)"
                                : tool.color === "indigo"
                                  ? "rgba(99, 102, 241, 0.2)"
                                  : tool.color === "orange"
                                    ? "rgba(249, 115, 22, 0.2)"
                                    : tool.color === "pink"
                                      ? "rgba(236, 72, 153, 0.2)"
                                      : "rgba(71, 85, 105, 0.2)"
                      }`,
                    }}
                  >
                    {tool.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#cbd5e1",
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(8, 12, 20, 1)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: 0,
              width: "360px",
              height: "360px",
              background: "rgba(99, 102, 241, 0.08)",
              borderRadius: "50%",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#6366f1",
                  textTransform: "uppercase",
                  margin: "0 0 8px 0",
                }}
              >
                Portfolio
              </h2>
              <h3 className="portfolio-section-title"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 0 18px 0",
                }}
              >
                Featured Projects
              </h3>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #6366f1, #06b6d4)",
                  borderRadius: "9999px",
                  margin: "0 auto",
                }}
              />
            </div>

            <div
              className="projects-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "32px",
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="glass-card project-card"
                  style={{
                    borderRadius: "18px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.8))",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.2)",
                    transition: "all 0.2s ease",
                    minHeight: "100%",
                  }}
                >
                  <div
                    className="project-card-image"
                    style={{
                      position: "relative",
                      height: "160px",
                      overflow: "hidden",
                      background: "#0f172a",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(11, 15, 25, 0.7), rgba(11, 15, 25, 0.12))",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "5px 8px",
                        borderRadius: "999px",
                        background: "rgba(99, 102, 241, 0.18)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#e2e8f0",
                        fontSize: "10px",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      Featured
                    </span>
                  </div>

                  <div
                    className="project-card-content"
                    style={{
                      padding: "16px 16px 18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    <span
                      className="project-card-category"
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        color: "#7dd3fc",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.category}
                    </span>

                    <h4
                      className="project-card-title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "white",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h4>

                    <p
                      className="project-card-description"
                      style={{
                        fontSize: "14px",
                        color: "#cbd5e1",
                        lineHeight: 1.55,
                        margin: 0,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      className="project-card-tech"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: "10px",
                            padding: "5px 8px",
                            background: "rgba(99, 102, 241, 0.08)",
                            border: "1px solid rgba(99, 102, 241, 0.18)",
                            borderRadius: "999px",
                            color: "#dbeafe",
                            fontWeight: 600,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className="project-card-actions"
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "2px",
                      }}
                    >
                      <a
                        className="project-card-action"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          minWidth: "110px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          background:
                            "linear-gradient(to right, #6366f1, #06b6d4)",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "700",
                          textDecoration: "none",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        Live Demo
                      </a>

                      <a
                        className="project-card-action"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          minWidth: "110px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#e2e8f0",
                          fontSize: "13px",
                          fontWeight: "700",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.08)";
                          e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.04)";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        <i className="fa-brands fa-github" />
                        GitHub
                      </a>
                    </div>

                    <a
                      href={project.detailsUrl}
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#a5d6ff",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      View details <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(99, 102, 241, 0.03) 100%)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#6366f1",
                  textTransform: "uppercase",
                  margin: "0 0 8px 0",
                }}
              >
                Get in Touch
              </h2>
              <h3 className="portfolio-section-title"
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.5rem)",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 0 24px 0",
                }}
              >
                Let's Work Together
              </h3>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(to right, #6366f1, #06b6d4)",
                  borderRadius: "9999px",
                  margin: "0 auto",
                }}
              />
            </div>

            <div
              className="contact-layout"
            >
              <div className="contact-form-card">
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  {formMessage && (
                    <div
                      style={{
                        padding: "16px",
                        borderRadius: "12px",
                        background: formMessageType === "success" ? "rgba(16, 185, 129, 0.1)" : formMessageType === "pending" ? "rgba(56, 189, 248, 0.1)" : "rgba(248, 113, 113, 0.1)",
                        border: `1px solid ${formMessageType === "success" ? "rgba(16, 185, 129, 0.3)" : formMessageType === "pending" ? "rgba(56, 189, 248, 0.3)" : "rgba(248, 113, 113, 0.3)"}`,
                        color: formMessageType === "success" ? "#10b981" : formMessageType === "pending" ? "#7dd3fc" : "#fca5a5",
                        fontSize: "14px",
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <i className={`fa-solid ${formMessageType === "success" ? "fa-circle-check" : formMessageType === "pending" ? "fa-envelope" : "fa-circle-exclamation"}`} />
                      {formMessage}
                    </div>
                  )}

                  <div className="contact-form-fields">
                  <input
                    type="text"
                    name="_honey"
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />
                  <div className="contact-field">
                    <label
                      htmlFor="contact-name"
                      className="contact-field-label"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      autoComplete="name"
                      required
                      className="contact-field-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label
                      htmlFor="contact-email"
                      className="contact-field-label"
                    >
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="contact-field-input"
                    />
                  </div>

                  <div className="contact-field contact-field-message">
                    <label
                      htmlFor="contact-message"
                      className="contact-field-label"
                    >
                      What can I help with?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="A short note about your project, goals, or timeline is plenty."
                      rows="4"
                      required
                      className="contact-field-input"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                  >
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ marginRight: "8px" }}
                    />
                    {isSubmitting ? "Sending…" : "Send inquiry"}
                  </button>
                </form>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {[
                  {
                    icon: "fa-envelope",
                    label: "Email",
                    value: "manish25er@gmail.com",
                    link: "mailto:manish25er@gmail.com",
                  },
                  {
                    icon: "fa-phone",
                    label: "Phone",
                    value: "+91 70873 38600",
                    link: "tel:+917087338600",
                  },
                  {
                    icon: "fa-github",
                    label: "GitHub",
                    value: "github.com/manish25er-2003",
                    link: "https://github.com/manish25er-2003/",
                  },
                  {
                    icon: "fa-linkedin",
                    label: "LinkedIn",
                    value: "linkedin.com/in/manish-kumar",
                    link: "https://linkedin.com/in/manish-kumar",
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.link}
                    aria-label={contact.label}
                    title={contact.label}
                    target={
                      contact.link.startsWith("http") ? "_blank" : "_self"
                    }
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "block",
                    }}
                    rel={
                      contact.link.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    <div
                      className="glass-card"
                      style={{
                        padding: "22px 20px",
                        borderRadius: "14px",
                        display: "flex",
                        gap: "14px",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        overflow: "visible",
                        position: "relative",
                        zIndex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(99, 102, 241, 0.5)";
                        e.currentTarget.style.background =
                          "rgba(99, 102, 241, 0.08)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.02)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          minWidth: "48px",
                          borderRadius: "10px",
                          background:
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(6, 182, 212, 0.18))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          color: "#e2e8f0",
                          flexShrink: 0,
                          border: "1px solid rgba(99, 102, 241, 0.25)",
                          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                          position: "relative",
                          zIndex: 2,
                          overflow: "visible",
                        }}
                      >
                        <i
                          className={`fa-solid ${contact.icon}`}
                          style={{
                            display: "inline-block",
                            lineHeight: 1,
                            color: "#e2e8f0",
                            textShadow: "0 0 0 rgba(0,0,0,0)",
                          }}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#94a3b8",
                            margin: 0,
                            textTransform: "uppercase",
                            fontWeight: "600",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {contact.label}
                        </p>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "white",
                            margin: "8px 0 0 0",
                            fontWeight: "600",
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {contact.value}
                        </p>
                      </div>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{
                          color: "#06b6d4",
                          fontSize: "14px",
                          flexShrink: 0,
                          marginTop: "4px",
                          display: "inline-block",
                          lineHeight: 1,
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="portfolio-footer__main">
          <div className="portfolio-footer__intro">
            <a className="portfolio-footer__brand" href="#home" aria-label="Manish Kumar, back to home">
              <span className="portfolio-footer__monogram" aria-hidden="true">MK</span>
              <span>Manish Kumar<small>Full-Stack Developer</small></span>
            </a>
            <p>Building reliable web applications and thoughtful AI-powered experiences for real-world problems.</p>
            <div className="portfolio-footer__socials">
              <a href="https://github.com/manish25er-2003/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/manish-kumar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="portfolio-footer__column" aria-label="Footer sections">
            <h2>Explore</h2>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="portfolio-footer__column">
            <h2>What I work with</h2>
            <a href="#skills">PHP &amp; Laravel</a>
            <a href="#skills">React &amp; JavaScript</a>
            <a href="#skills">MySQL &amp; MongoDB</a>
            <a href="#ai-tools">AI tools &amp; integrations</a>
            <a href="#projects">Selected projects</a>
          </div>

          <div className="portfolio-footer__column portfolio-footer__contact">
            <h2>Get in touch</h2>
            <a href="mailto:manish25er@gmail.com"><i className="fa-regular fa-envelope" aria-hidden="true" />manish25er@gmail.com</a>
            <a href="tel:+917087338600"><i className="fa-solid fa-phone" aria-hidden="true" />+91 70873 38600</a>
            <a href="#contact" className="portfolio-footer__contact-link">Let’s talk about your project <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="portfolio-footer__bottom">
          <span>© {new Date().getFullYear()} Manish Kumar · Full-Stack Developer &amp; AI Solutions Engineer</span>
          <a href="#home" aria-label="Back to top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
