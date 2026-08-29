import { Component, HostListener } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  animations: [
    trigger('reveal', [transition(':enter', [style({ opacity: 0, transform: 'translateY(28px)' }), animate('650ms cubic-bezier(.2,.7,.2,1)', style({ opacity: 1, transform: 'none' }))])]),
    trigger('stagger', [transition(':enter', [query('.reveal-item', [style({ opacity: 0, transform: 'translateY(20px)' }), stagger(80, animate('550ms ease-out', style({ opacity: 1, transform: 'none' })))], { optional: true })])])
  ],
  template: `
  <div class="progress" [style.width.%]="scrollProgress"></div>
  <div class="cursor-glow" [style.transform]="'translate3d('+mouseX+'px,'+mouseY+'px,0)'" aria-hidden="true"></div>

  <nav class="nav" [class.scrolled]="scrollY > 30">
    <div class="nav-inner">
      <a class="brand" href="#home" (click)="closeMenu()">RH<span>.</span></a>
      <button class="menu" (click)="open=!open" [attr.aria-expanded]="open" aria-label="Toggle navigation"><span [class.active]="open">☰</span></button>
      <div class="nav-links" [class.open]="open">
        @for (item of navItems; track item.id) { <a [class.active]="activeSection===item.id" [href]="'#'+item.id" (click)="closeMenu()">{{item.label}}</a> }
      </div>
    </div>
  </nav>

  <main>
    <section id="home" class="hero">
      <div class="grid-bg"></div><div class="orb orb-one"></div><div class="orb orb-two"></div>
      <div class="container hero-layout" @reveal>
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> SOFTWARE DEVELOPER · CHENNAI</div>
          <h1>Building software that <span>solves real problems.</span></h1>
          <p>I’m <strong>Riyas Hameed</strong>, a Software Developer focused on C#, ASP.NET Core, .NET MAUI and AI-driven applications. I build scalable systems, polished experiences and reliable software.</p>
          <div class="buttons"><a class="btn primary" href="#work">Explore my work <span>↗</span></a><a class="btn" href="#contact">Let’s talk <span>→</span></a></div>
          <div class="hero-meta"><span>5+ YEARS</span><i></i><span>10+ UI CONTROLS</span><i></i><span>AI + BACKEND</span></div>
        </div>
        <div class="hero-card" aria-label="Technology focus">
          <div class="card-noise"></div><div class="terminal-top"><span></span><span></span><span></span><small>riyas.dev</small></div>
          <div class="terminal-body"><p><b>const</b> developer = {</p><p class="indent">name: <em>'Riyas Hameed'</em>,</p><p class="indent">focus: [<em>'backend'</em>, <em>'AI'</em>],</p><p class="indent">stack: <em>'C# · ASP.NET · Azure'</em></p><p>};</p><div class="terminal-line"><span></span> building the next thing...</div></div>
        </div>
      </div>
      <a class="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
    </section>

    <section id="about" class="section" @stagger><div class="container split">
      <div class="reveal-item"><div class="eyebrow">01 — ABOUT</div><h2>Engineering with curiosity.</h2></div>
      <div class="copy reveal-item"><p>My experience spans cross-platform UI engineering, backend APIs and modern AI workflows. At Syncfusion, I’ve worked across .NET MAUI controls, ASP.NET Core services, PostgreSQL and AI-powered products.</p><p>I enjoy taking complex technical problems, understanding them deeply, and turning them into maintainable, scalable solutions.</p><div class="mini-stat"><strong>Full-stack mindset</strong><span>UI → APIs → data → AI workflows</span></div></div>
    </div></section>

    <section id="experience" class="section dark" @stagger><div class="container"><div class="eyebrow reveal-item">02 — EXPERIENCE</div><h2 class="reveal-item">Where I’ve built.</h2>
      <article class="experience reveal-item"><div class="exp-head"><div><h3>Syncfusion Software Pvt. Ltd.</h3><p>Software Developer</p></div><span>2021 — PRESENT · CHENNAI</span></div>
      <div class="exp-grid">@for (item of experience; track item.number) {<div class="exp-item"><b>{{item.number}}</b><p>{{item.text}}</p></div>}</div></article>
    </div></section>

    <section id="skills" class="section" @stagger><div class="container"><div class="eyebrow reveal-item">03 — SKILLS</div><h2 class="reveal-item">My toolkit.</h2>
      <div class="skill-grid reveal-item">@for (s of skills; track s.name) {<button class="skill-card" [class.active]="activeSkill===s.name" (click)="toggleSkill(s.name)"><span class="icon">{{s.icon}}</span><strong>{{s.name}}</strong><small>{{s.items}}</small><span class="plus">{{activeSkill===s.name?'×':'+'}}</span></button>}</div>
      @if (activeSkill) { <div class="skill-detail" @reveal><span>Focused area</span><strong>{{activeSkill}}</strong><p>{{skillDetails[activeSkill]}}</p></div> }
    </div></section>

    <section id="work" class="section dark" @stagger><div class="container"><div class="eyebrow reveal-item">04 — SELECTED WORK</div><h2 class="reveal-item">Things I’ve worked on.</h2>
      <div class="work-grid reveal-item">@for (p of projects; track p.title) {<article class="work-card" [class.selected]="selected===p.title" (click)="selectProject(p.title)"><div class="work-top"><span>{{p.number}}</span><span class="arrow">↗</span></div><h3>{{p.title}}</h3><p>{{p.text}}</p><div class="tags">@for(t of p.tags; track t){<span>{{t}}</span>}</div>@if(selected===p.title){<div class="expand" @reveal><b>Technical focus</b><span>{{p.detail}}</span></div>}</article>}</div>
    </div></section>

    <section id="contact" class="section contact"><div class="container contact-inner"><div @reveal><div class="eyebrow">05 — CONTACT</div><h2>Let’s build something useful.</h2><p>Open to conversations about software engineering, backend development and AI-powered applications.</p></div><div class="contact-links" @reveal><a href="mailto:riyashameed50@gmail.com"><span>✉ Email</span><small>riyashameed50@gmail.com</small></a><a href="tel:8778947529"><span>☎ Phone</span><small>8778947529</small></a><a href="https://linkedin.com/in/riyas-hameed-51b254217" target="_blank" rel="noopener"><span>in LinkedIn</span><small>View profile ↗</small></a></div></div></section>
  </main>
  <footer><div class="container"><span>© 2026 Riyas Hameed</span><span>Software Developer · Chennai</span></div></footer>
  `
})
export class AppComponent {
  open = false; activeSkill = ''; selected = ''; scrollY = 0; scrollProgress = 0; activeSection = 'home'; mouseX = -200; mouseY = -200;
  navItems = [{id:'about',label:'About'},{id:'experience',label:'Experience'},{id:'skills',label:'Skills'},{id:'work',label:'Work'},{id:'contact',label:'Contact'}];
  experience = [
    {number:'01',text:'Developed and maintained cross-platform .NET MAUI UI components and reusable custom controls.'},
    {number:'02',text:'Led feature development and bug resolution across 10+ UI controls, diagnosing memory leaks and performance issues.'},
    {number:'03',text:'Developed RESTful APIs using ASP.NET Core, EF Core and PostgreSQL with scalability and maintainability in mind.'},
    {number:'04',text:'Contributed to AI Agent and RAG workflows involving prompt engineering, web search, URL context and vector retrieval.'},
    {number:'05',text:'Integrated image generation models and developed Azure Functions for asynchronous background processing.'},
    {number:'06',text:'Built TypeScript AI workflow features and LLM token usage tracking and analytics.'}
  ];
  skills = [
    {name:'Languages',icon:'⌘',items:'C# · TypeScript · SQL · LINQ'}, {name:'Backend',icon:'◈',items:'ASP.NET Core · REST · EF Core'}, {name:'Database',icon:'◫',items:'PostgreSQL'}, {name:'Cloud',icon:'☁',items:'Azure Functions'}, {name:'AI & LLM',icon:'✦',items:'Prompt Engineering · RAG · Vector Search'}, {name:'Spoken',icon:'◉',items:'English · Tamil'}
  ];
  skillDetails: Record<string,string> = {'Languages':'Strong C# foundation with hands-on TypeScript and SQL development.','Backend':'API design and implementation using ASP.NET Core and Entity Framework Core.','Database':'PostgreSQL experience focused on reliable and maintainable data access.','Cloud':'Azure Functions for background jobs, asynchronous processing and database operations.','AI & LLM':'Practical experience with LLM workflows, RAG, vector retrieval and prompt engineering.','Spoken':'Professional communication in English and Tamil.'};
  projects = [
    {number:'01',title:'AI Agent Platform',text:'LLM-based workflows and prompt engineering for an AI-driven agent platform.',tags:['LLMs','Prompt Engineering','TypeScript'],detail:'Prompt design, workflow orchestration and TypeScript integrations for an AI product.'},
    {number:'02',title:'RAG & Knowledge Retrieval',text:'Web search, URL context and vector knowledge-base retrieval for LLM applications.',tags:['RAG','Vector Search','Knowledge Base'],detail:'Troubleshooting retrieval pipelines and improving how LLMs access external and indexed knowledge.'},
    {number:'03',title:'Image Generation',text:'Image generation model integration with Azure Functions for asynchronous processing.',tags:['Azure','AI','Async'],detail:'Connected image-generation capabilities to background processing and database operations.'},
    {number:'04',title:'LLM Usage Analytics',text:'Token usage tracking and analytics for monitoring AI response consumption.',tags:['TypeScript','Tokens','Analytics'],detail:'Implemented token accounting and usage analytics to monitor AI response consumption.'}
  ];
  @HostListener('window:scroll') onScroll(){const doc=document.documentElement; this.scrollY=window.scrollY; this.scrollProgress=(window.scrollY/(doc.scrollHeight-window.innerHeight))*100; const ids=['home','about','experience','skills','work','contact']; for(const id of ids){const el=document.getElementById(id); if(el && window.scrollY+window.innerHeight*.35>=el.offsetTop) this.activeSection=id;}}
  @HostListener('document:mousemove',['$event']) onMouseMove(e:MouseEvent){if(window.innerWidth>800){this.mouseX=e.clientX;this.mouseY=e.clientY;}}
  closeMenu(){this.open=false;}
  toggleSkill(name:string){this.activeSkill=this.activeSkill===name?'':name;}
  selectProject(name:string){this.selected=this.selected===name?'':name;}
}