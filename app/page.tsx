"use client";

import React, { useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Download,
  Languages,
  Globe,
} from "lucide-react";

// --- DICTIONNAIRE DE TRADUCTION ---
const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "IT Engineering Student",
      subtitle: "Web Developer | Angular & TypeScript",
      description:
        "As a first-year engineering student at CESI and a former Web Developer apprentice at DAESIGN, I leverage my strong foundation in Angular and TypeScript to build robust systems. I combine technical logic with the team spirit of a handball player to deliver user-focused solutions and explore emerging technologies.",
      contactBtn: "Get in touch",
      cvBtn: "Download CV",
      cvLink: "/cv-en.pdf",
    },
    skills: {
      hard: "Tech Stacks",
      soft: "Soft Skills",
      softList: [
        "Problem Solving",
        "Team Spirit (Handball)",
        "Curious",
        "Agile Methodology (Scrum)",
      ],
      languages: "Languages",
      langList: ["French (Native)", "English (B2)", "Spanish (Basics)"],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          role: "Web Developer (Apprenticeship)",
          company: "DAESIGN",
          date: "Sept 2023 – Aug 2024",
          desc: "Improved performance of a large-scale platform. Implemented Parent/Subsidiary data management using Angular and NoSQL. Modernized UI components for thousands of users.",
        },
        {
          role: "Web Developer (Internship)",
          company: "DAESIGN",
          date: "Apr 2023 – Jun 2023",
          desc: "Modernized login pages (HTML/PUG/CSS) and integrated an interactive 'serious game' focused on workplace disability awareness.",
        },
        {
          role: "IT Support & Web Developer",
          company: "DAESIGN",
          date: "Apr 2025 – Aug 2025",
          desc: "Provided technical support to users and developed web features to enhance operational efficiency.",
        },
      ],
    },
    otherExp: {
      title: "Other Professional Experiences",
      items: [
        {
          role: "Position Name",
          company: "Company Name",
          date: "Dates",
          desc: "Developed strong work ethic, customer service skills, and autonomy in a fast-paced environment.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "MSc in Software Engineering",
          school: "CESI Graduate School of Engineering",
          date: "2025 - 2028",
          desc: "Specializing in software architecture, project management, and advanced development.",
        },
        {
          degree: "BSc in Computer Science",
          school: "IUT Annecy-le-Vieux",
          date: "2021 - 2024",
          desc: "Focused on web development, algorithms, and database management (NoSQL/SQL).",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Academic and personal technical contributions.",
      viewAll: "View on GitHub",
    },
    contact: {
      title: "Let's build something together.",
      desc: "Currently seeking an 8–13 week internship in the U.S. for Summer 2026. My inbox is always open!",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Étudiant Ingénieur Informatique",
      subtitle: "Développeur Web | Angular & TypeScript",
      description:
        "Étudiant en première année d'ingénierie au CESI et ancien apprenti développeur Web chez DAESIGN, je m'appuie sur mes bases solides en Angular et TypeScript pour concevoir des systèmes robustes. J'allie rigueur technique et esprit d'équipe (handball) pour proposer des solutions centrées sur l'utilisateur.",
      contactBtn: "Me contacter",
      cvBtn: "Télécharger CV",
      cvLink: "/cv-fr.pdf",
    },
    skills: {
      hard: "Langages",
      soft: "Soft Skills",
      softList: [
        "Résolution de problèmes",
        "Agile/Scrum",
        "Collaboration",
        "Curieux",
      ],
      languages: "Langues",
      langList: ["Français (Maternel)", "Anglais (B2)", "Espagnol (Débutant)"],
    },
    experience: {
      title: "Expérience Professionnelle",
      items: [
        {
          role: "Développeur Web (Apprentissage)",
          company: "DAESIGN",
          date: "Sept 2023 – Août 2024",
          desc: "Optimisation d'une plateforme de diffusion. Développement d'un système de gestion Parent/Filiale (Angular/NoSQL) et amélioration de l'UX pour des milliers d'utilisateurs.",
        },
        {
          role: "Développeur Web (Stage)",
          company: "DAESIGN",
          date: "Avril 2023 – Juin 2023",
          desc: "Modernisation des pages de connexion et intégration d'un 'serious game' interactif sur la sensibilisation au handicap en entreprise.",
        },
        {
          role: "Support Informatique Et Développeur Web",
          company: "DAESIGN",
          date: "Avril 2025 – Août 2025",
          desc: "Assistance technique aux utilisateurs et développement de fonctionnalités web pour améliorer l'efficacité opérationnelle.",
        },
      ],
    },
    otherExp: {
      title: "Autres Expériences Professionnelles",
      items: [
        {
          role: "Nom du poste",
          company: "Nom de l'entreprise",
          date: "Dates",
          desc: "Développement de la rigueur, du sens du service client et de l'autonomie dans un environnement exigeant.",
        },
      ],
    },
    education: {
      title: "Formation",
      items: [
        {
          degree: "Diplôme d'Ingénieur (Master)",
          school: "CESI École d'Ingénieurs",
          date: "2025 - 2028",
          desc: "Spécialisation en génie logiciel, architecture système et gestion de projet.",
        },
        {
          degree: "BUT Informatique",
          school: "IUT Annecy-le-Vieux",
          date: "2021 - 2024",
          desc: "Approfondissement du développement web, de l'algorithmique et des bases de données.",
        },
      ],
    },
    projects: {
      title: "Projets Phares",
      subtitle: "Sélection de travaux académiques et personnels.",
      viewAll: "Voir sur GitHub",
    },
    contact: {
      title: "Construisons quelque chose ensemble.",
      desc: "Actuellement à la recherche d'un stage de 8 à 13 semaines aux États-Unis pour l'été 2026.",
    },
  },
};

const techStack = [
  { name: "C#" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/white" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },

  { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3" },

  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
  { name: "GitLab", logo: "https://cdn.simpleicons.org/gitlab/FC6D26" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "VS Code" },
  { name: "Visual Studio" },
];

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-blue-500/30">
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">
            THEO<span className="text-blue-500">.</span>CACARD
            <span className="text-blue-500">.</span>
          </span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
              <a href="#about" className="hover:text-white transition">
                {t.nav.about}
              </a>
              <a href="#experience" className="hover:text-white transition">
                {t.nav.experience}
              </a>
              <a href="#projects" className="hover:text-white transition">
                {t.nav.projects}
              </a>
              <a href="#contact" className="hover:text-white transition">
                {t.nav.contact}
              </a>
            </div>
            {/* Lang Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-white/10 transition"
            >
              <Globe size={14} /> {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="max-w-5xl mx-auto pt-40 pb-24 px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {t.hero.title} <br />
            <span className="text-neutral-500 italic font-light">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed mb-10">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition flex items-center gap-2"
            >
              <Mail size={18} /> {t.hero.contactBtn}
            </a>
            <a
              href={t.hero.cvLink}
              target="_blank"
              className="bg-neutral-900 border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-neutral-800 transition flex items-center gap-2"
            >
              <Download size={18} /> {t.hero.cvBtn}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION SKILLS BOX */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden">
          {/* PARTIE HAUTE : SCROLL MANUEL AVEC BARRE CONDITIONNELLE */}
          <div className="border-b border-white/5 bg-white/[0.02] relative group">
            <div className="flex items-center gap-12 overflow-x-auto py-10 px-12 scroll-smooth snap-x scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent md:scrollbar-default scrollbar-hide-mobile">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all shrink-0 snap-center"
                >
                  {tech.logo ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Gradients de fondu */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>
          </div>

          {/* PARTIE BASSE : SOFT SKILLS & LANGUES */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {/* SOFT SKILLS */}
            <div className="p-8">
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs flex items-center gap-2">
                <Terminal size={18} className="text-blue-500" /> {t.skills.soft}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.skills.softList.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-neutral-400"
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* LANGUES */}
            <div className="p-8">
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs flex items-center gap-2">
                <Languages size={18} className="text-blue-500" />{" "}
                {t.skills.languages}
              </h3>
              <div className="flex flex-wrap gap-6">
                {t.skills.langList.map((lang, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-neutral-300 italic"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase size={24} className="text-blue-500" />{" "}
            {t.experience.title}
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-6">
            {t.experience.items.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#0a0a0a]" />
                <h4 className="text-white font-bold">{exp.role}</h4>
                <p className="text-sm text-blue-500 mb-2">
                  {exp.company} • {exp.date}
                </p>
                <p className="text-sm text-neutral-400">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap size={24} className="text-blue-500" />{" "}
            {t.education.title}
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-6">
            {t.education.items.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#0a0a0a]" />
                <h4 className="text-white font-bold">{edu.degree}</h4>
                <p className="text-sm text-blue-500 mb-2">
                  {edu.school} • {edu.date}
                </p>
                <p className="text-sm text-neutral-400">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER EXPERIENCES SECTION (FULL WIDTH & CENTERED) */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5 border-b border-white/5 mb-24">
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* On réduit la largeur ici pour centrer le contenu */}
          <h2 className="text-2xl font-bold text-white mb-12 flex items-center justify-center gap-3">
            <Briefcase size={24} className="text-blue-500" />
            {t.otherExp.title}
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-6">
            {t.otherExp.items.map((exp, i) => (
              <div key={i} className="relative">
                {/* Le point sur la timeline */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#0a0a0a]" />

                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                  <p className="text-sm text-blue-500 mb-3">
                    {exp.company} • {exp.date}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-24 bg-white/[0.02] border border-white/5 rounded-3xl mb-24"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {t.projects.title}
            </h2>
            <p className="text-neutral-500">{t.projects.subtitle}</p>
          </div>
          <a
            href="https://github.com"
            className="text-blue-500 flex items-center gap-2 text-sm font-bold hover:underline"
          >
            {t.projects.viewAll} <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between mb-4 text-neutral-500 group-hover:text-blue-400 transition-colors">
              <Database size={24} />
              <a href="#">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Project Case Study
            </h3>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              {lang === "en"
                ? "Description of your backend project."
                : "Description de votre projet backend."}
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-neutral-300 font-bold uppercase tracking-wider">
                C++
              </span>
              <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-neutral-300 font-bold uppercase tracking-wider">
                Linux
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          {t.contact.title}
        </h2>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:theo.cacard@gmail.com"
            className="text-neutral-400 hover:text-blue-500 transition-colors scale-125"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com"
            className="text-neutral-400 hover:text-blue-500 transition-colors scale-125"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-neutral-400 hover:text-blue-500 transition-colors scale-125"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      <footer className="text-center py-12 text-neutral-600 text-[10px] uppercase tracking-[0.2em] border-t border-white/5">
        © 2026 Theo • Built with Next.js & Tailwind • {lang.toUpperCase()}{" "}
        Version
      </footer>
    </div>
  );
}
