import React, { useState, useEffect } from 'react';
import {
  Code, Briefcase, User, Mail, Github, Twitter, Linkedin, ExternalLink,
  Star, GitBranch, Cpu, Terminal, Sparkles, Send, CheckCircle2, Moon, Sun, Filter
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Mobile' | 'AI' | 'DevOps';
  stars: number;
  forks: number;
  tech: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Offline Maps & Notes PWA',
    description: 'Vector tile mapping and spatial journaling offline-first Progressive Web App.',
    category: 'Mobile',
    stars: 128,
    forks: 24,
    tech: ['React', 'TypeScript', 'Tailwind', 'Mapbox', 'Workbox'],
    link: 'https://github.com/rudra/offline-maps-notes'
  },
  {
    id: '2',
    title: 'Crypto DEX Tracker',
    description: 'Real-time decentralized exchange liquidity and token swap analytics dashboard.',
    category: 'Web',
    stars: 342,
    forks: 67,
    tech: ['React', 'WebSockets', 'Tailwind', 'Chart.js'],
    link: 'https://github.com/rudra/crypto-dex-tracker'
  },
  {
    id: '3',
    title: 'AI Prompt Engineering Studio',
    description: 'Advanced workspace for prompt chaining, evaluation, and token usage optimization.',
    category: 'AI',
    stars: 512,
    forks: 89,
    tech: ['React', 'OpenAI API', 'Zustand', 'TypeScript'],
    link: 'https://github.com/rudra/ai-prompt-studio'
  },
  {
    id: '4',
    title: 'Habit Forge Rhythm',
    description: 'Gamified habit formation tracker with streak freezes and haptic feedback.',
    category: 'Mobile',
    stars: 89,
    forks: 12,
    tech: ['React', 'PWA', 'Tailwind', 'IndexedDB'],
    link: 'https://github.com/rudra/habit-forge'
  }
];

const SKILLS = [
  { name: 'TypeScript / JavaScript', level: 95 },
  { name: 'React & Next.js', level: 92 },
  { name: 'Tailwind CSS & UI Systems', level: 90 },
  { name: 'Node.js & Express', level: 85 },
  { name: 'PWA & Service Workers', level: 88 },
  { name: 'Python & AI Integration', level: 82 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'projects' | 'about' | 'skills' | 'contact'>('projects');
  const [filter, setFilter] = useState<string>('All');
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans antialiased selection:bg-indigo-500 selection:text-white`}>
      {/* Top Navbar */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight">DevShowcase</span>
              <span className="block text-xs text-slate-500">Full-Stack Engineer &amp; Builder</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'}`}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <div className={`p-8 rounded-3xl border relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 border-slate-800' : 'bg-gradient-to-br from-white via-indigo-50/50 to-white border-slate-200 shadow-xl shadow-slate-100'}`}>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Available for select projects &amp; roles
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Building high-performance <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">web &amp; mobile PWAs</span>.
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-6">
              Passionate software engineer focused on lightning-fast React applications, offline-first architectures, and exceptional design aesthetics.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/25"
              >
                <Github className="w-4 h-4" /> GitHub Profile
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-750' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              >
                <Twitter className="w-4 h-4 text-sky-400" /> Twitter / X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-750' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              >
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className={`flex gap-1 p-1 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          {[
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'skills', label: 'Skills & Stack', icon: Cpu },
            { id: 'about', label: 'About Me', icon: User },
            { id: 'contact', label: 'Contact', icon: Mail },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 pb-20">

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold tracking-tight">Featured Portfolio Projects</h2>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['All', 'Web', 'Mobile', 'AI'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      filter === cat
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                        : darkMode ? 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                    darkMode ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 hover:border-indigo-500/50 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {project.stars}</span>
                        <span className="flex items-center gap-1"><GitBranch className="w-3.5 h-3.5" /> {project.forks}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1.5 group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5 border border-indigo-500/20"
                    >
                      <span>View Source &amp; Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Technical Expertise &amp; Stack</h2>
            <div className={`p-6 rounded-2xl border space-y-5 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SKILLS.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-indigo-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" /> Core Toolchain &amp; Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Workbox PWA', 'Node.js', 'Git / GitHub', 'Zustand', 'REST & GraphQL', 'Vercel / Netlify'].map(t => (
                    <span key={t} className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${darkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">About Me</h2>
            <div className={`p-6 rounded-2xl border space-y-4 text-slate-300 text-sm leading-relaxed ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 text-slate-700'}`}>
              <p>
                Hello! I&apos;m a software engineer specializing in building high-performance web applications and progressive web apps with rich, responsive user interfaces.
              </p>
              <p>
                Over the past 5+ years, I&apos;ve built everything from complex real-time analytics dashboards and offline-first mobile web apps to AI-assisted developer tools. I believe in clean code, robust type safety, and fast loading times.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-750' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-2xl font-black text-indigo-400 mb-1">70+</div>
                  <div className="text-xs text-slate-500">PWA Repos Built</div>
                </div>
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-750' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-2xl font-black text-emerald-400 mb-1">99.9%</div>
                  <div className="text-xs text-slate-500">Lighthouse Scores</div>
                </div>
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-750' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-2xl font-black text-violet-400 mb-1">5+</div>
                  <div className="text-xs text-slate-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">Get in Touch</h2>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              {messageSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let's build something amazing together..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-slate-600 border-t border-slate-800/60">
        <p>DevShowcase &bull; Built with Vite, React &amp; Tailwind CSS &bull; PWA Ready</p>
      </footer>
    </div>
  );
}
