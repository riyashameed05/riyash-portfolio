'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Linkedin, Code2, Database, Cloud, BrainCircuit, Layers, GraduationCap } from 'lucide-react';

const skills = [
  ['Languages','C#, TypeScript, SQL, LINQ',Code2],
  ['Backend','ASP.NET Core, RESTful APIs, Entity Framework Core',Layers],
  ['Database','PostgreSQL',Database],
  ['Cloud','Azure Functions',Cloud],
  ['AI & LLM','Prompt Engineering, LLM Applications, RAG, Vector Search',BrainCircuit],
  ['Spoken Languages','English, Tamil',GraduationCap],
];
const projects = [
  {title:'AI Agent Platform',text:'Contributed to an AI-driven agent platform through prompt engineering and LLM-based workflows, improving response quality and application functionality.',tags:['LLMs','Prompt Engineering','TypeScript']},
  {title:'RAG & Knowledge Retrieval',text:'Troubleshot web search, URL context, and vector-based knowledge-base retrieval workflows powering LLM applications.',tags:['RAG','Vector Search','Knowledge Base']},
  {title:'Image Generation & Background Processing',text:'Integrated image generation models into BoldAgent and developed Azure Functions for asynchronous database and background processing.',tags:['Azure Functions','AI','Async Processing']},
  {title:'LLM Usage Analytics',text:'Built TypeScript features and token usage tracking to monitor AI response consumption and support analytics.',tags:['TypeScript','Token Tracking','Analytics']},
];
const fade={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.6}}};

export default function Home(){
 return <main>
  <nav className="nav"><div className="navin wrap"><a className="logo" href="#top">RH<span>.</span></a><div className="links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#contact">Contact</a></div></div></nav>
  <section id="top" className="hero"><div className="wrap"><motion.div initial="hidden" animate="show" variants={fade}><div className="eyebrow">Software Developer · Chennai</div><h1>Building software that <span>solves real problems.</span></h1><p className="lead">I’m Riyas Hameed, a Software Developer specializing in C#, ASP.NET Core, .NET MAUI and AI-driven applications. I build scalable systems, polished experiences and reliable developer-focused solutions.</p><div className="actions"><a className="btn primary" href="#contact">Let’s connect <ArrowUpRight size={16} style={{verticalAlign:'middle'}}/></a><a className="btn" href="#work">Explore my work</a></div></motion.div></div></section>
  <section id="about" className="section"><div className="wrap"><motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><div className="eyebrow">01 — About</div><h2>Engineering with curiosity.</h2><p className="muted" style={{maxWidth:800,fontSize:18}}>My background spans cross-platform UI engineering, backend APIs and emerging AI workflows. At Syncfusion, I’ve worked across .NET MAUI controls, ASP.NET Core services, PostgreSQL and AI-powered products—combining debugging depth with a focus on maintainable, scalable software.</p></motion.div></div></section>
  <section id="experience" className="section"><div className="wrap"><div className="eyebrow">02 — Experience</div><h2>Where I’ve built.</h2><div className="timeline"><motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fade} className="job"><h3>Software Developer · Syncfusion Software Pvt. Ltd.</h3><div className="meta">2021 — Present · Chennai</div><ul><li>Developed and maintained cross-platform .NET MAUI UI components, reusable custom controls, and stability/performance improvements.</li><li>Led feature development and bug resolution across 10+ UI controls, diagnosing memory leaks and performance issues.</li><li>Developed RESTful APIs using ASP.NET Core, EF Core and PostgreSQL with a focus on scalability and maintainability.</li><li>Contributed to AI Agent and RAG workflows, including prompt engineering, web search, URL context and vector retrieval.</li><li>Integrated image generation models and developed Azure Functions for background processing and asynchronous database operations.</li><li>Built TypeScript AI workflow features and LLM token usage tracking and analytics.</li></ul></motion.div></div></div></section>
  <section id="skills" className="section"><div className="wrap"><div className="eyebrow">03 — Skills</div><h2>My toolkit.</h2><div className="skills">{skills.map(([name,items,Icon])=><motion.div className="skill" key={name as string} initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><Icon size={20} className="accent"/><strong>{name as string}</strong><span className="muted">{items as string}</span></motion.div>)}</div></div></section>
  <section id="work" className="section"><div className="wrap"><div className="eyebrow">04 — Selected Work</div><h2>Things I’ve worked on.</h2><div className="grid">{projects.map(p=><motion.article className="card" key={p.title} initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><h3>{p.title}</h3><p className="muted">{p.text}</p><div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></motion.article>)}</div></div></section>
  <section className="section"><div className="wrap"><div className="eyebrow">05 — Education</div><div className="card" style={{marginTop:30}}><h3>B.E. — Electronics and Communication Engineering</h3><p className="muted">Rajalakshmi Institute Of Technology · 2017 — 2021 · Chennai</p><div className="tags"><span className="tag">7.4 GPA</span></div></div></div></section>
  <section id="contact" className="section"><div className="wrap contact"><div><div className="eyebrow">06 — Contact</div><h2>Let’s build something useful.</h2><p className="muted">Open to conversations about software engineering, backend development and AI-powered applications.</p></div><div className="actions"><a className="btn primary" href="mailto:riyashameed50@gmail.com"><Mail size={16} style={{verticalAlign:'middle'}}/> Email</a><a className="btn" href="https://linkedin.com/in/riyas-hameed-51b254217" target="_blank"><Linkedin size={16} style={{verticalAlign:'middle'}}/> LinkedIn</a><a className="btn" href="tel:8778947529"><Phone size={16} style={{verticalAlign:'middle'}}/> Call</a></div></div></section>
  <footer className="footer"><div className="wrap">© 2026 Riyas Hameed · Software Developer</div></footer>
 </main>
}