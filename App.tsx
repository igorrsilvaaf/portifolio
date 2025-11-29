import React, { useState, useEffect } from 'react';
import { NavSection, Experience, Project, Skill, Certificate } from './types';
import { USER_INFO, EXPERIENCES, SKILLS, PROJECTS, CERTIFICATES } from './constants';
import Footprints from './components/Footprints';
import { 
  Map, 
  ScrollText, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail,
  Github,
  Linkedin,
  MapPin,
  X,
  Menu
} from 'lucide-react';

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intro Handler
  const handleUnlock = () => {
    setUnlocked(true);
  };

  const handleLock = () => {
    setUnlocked(false);
    setActiveSection('about');
  };

  return (
    <div className="min-h-screen w-full bg-parchment-dark text-ink font-serif relative overflow-x-hidden">
      
      {/* REAL MAP BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-parchment">
        <div className="absolute inset-0 bg-parchment/40 z-10 mix-blend-multiply"></div> {/* Tint overlay */}
        <img 
            src="https://images5.alphacoders.com/605/605592.jpg" 
            alt="Marauder's Map Background"
            className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Persistent Footprints Layer - z-index 1 to sit on top of the map */}
      <div className="fixed inset-0 z-0">
          <Footprints />
      </div>

      {/* Conditional Content Layer */}
      {!unlocked ? (
        // Intro Screen
        <div className="h-screen w-full flex flex-col items-center justify-center relative z-20 animate-fade-in">
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
            <div className="z-20 text-center p-8 border-4 border-double border-ink rounded-lg bg-parchment/95 backdrop-blur-sm max-w-2xl mx-4 shadow-2xl transform transition-all duration-1000 hover:scale-105">
            <h1 className="text-4xl md:text-6xl font-serif text-ink mb-8 font-bold tracking-wider">
                O Mapa do Maroto
            </h1>
            <p className="text-xl md:text-2xl font-handwriting text-ink-light mb-12">
                Os Srs. Aluado, Rabicho, Almofadinhas e Pontas <br/>
                apresentam orgulhosamente o portfólio de {USER_INFO.name}
            </p>
            <button 
                onClick={handleUnlock}
                className="group relative px-8 py-4 bg-transparent border-2 border-ink text-ink font-bold text-lg md:text-xl rounded hover:bg-ink hover:text-parchment transition-all duration-300 overflow-hidden cursor-pointer"
            >
                <span className="relative z-10 font-serif uppercase tracking-widest">
                Juro solenemente não fazer nada de bom
                </span>
            </button>
            </div>
        </div>
      ) : (
        // Main Portfolio
        <div className="min-h-screen transition-opacity duration-1000 animate-fade-in relative z-20">
          
          {/* Header / Nav */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/95 border-b-2 border-ink shadow-lg backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                  <span className="font-handwriting text-3xl text-gryffindor font-bold">
                    {USER_INFO.name}
                  </span>
                </div>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                  <NavButton active={activeSection === 'about'} onClick={() => setActiveSection('about')} icon={<ScrollText size={18} />} label="Sobre" />
                  <NavButton active={activeSection === 'experience'} onClick={() => setActiveSection('experience')} icon={<Briefcase size={18} />} label="Experiência" />
                  <NavButton active={activeSection === 'skills'} onClick={() => setActiveSection('skills')} icon={<Code size={18} />} label="Habilidades" />
                  <NavButton active={activeSection === 'portfolio'} onClick={() => setActiveSection('portfolio')} icon={<Map size={18} />} label="Portfólio" />
                  <NavButton active={activeSection === 'contact'} onClick={() => setActiveSection('contact')} icon={<Mail size={18} />} label="Contato" />
                </nav>

                <div className="flex items-center space-x-4">
                  <button onClick={handleLock} className="text-xs uppercase tracking-widest border border-ink px-3 py-1 hover:bg-ink hover:text-parchment transition-colors hidden md:block">
                    Malfeito feito
                  </button>
                  <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-parchment border-b border-ink absolute w-full">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                  <MobileNavButton active={activeSection === 'about'} onClick={() => { setActiveSection('about'); setIsMobileMenuOpen(false); }} label="Sobre" />
                  <MobileNavButton active={activeSection === 'experience'} onClick={() => { setActiveSection('experience'); setIsMobileMenuOpen(false); }} label="Experiência" />
                  <MobileNavButton active={activeSection === 'skills'} onClick={() => { setActiveSection('skills'); setIsMobileMenuOpen(false); }} label="Habilidades" />
                  <MobileNavButton active={activeSection === 'portfolio'} onClick={() => { setActiveSection('portfolio'); setIsMobileMenuOpen(false); }} label="Portfólio" />
                  <MobileNavButton active={activeSection === 'contact'} onClick={() => { setActiveSection('contact'); setIsMobileMenuOpen(false); }} label="Contato" />
                  <button onClick={handleLock} className="w-full text-center py-3 text-gryffindor font-bold uppercase mt-2 border-t border-ink/20">
                    Malfeito feito (Sair)
                  </button>
                </div>
              </div>
            )}
          </header>

          {/* Main Content Area - The "Map" */}
          <main className="pt-24 pb-12 px-4 max-w-6xl mx-auto relative z-10 min-h-screen">
            
            {/* Paper Container - Needs to be opaque to hide footprints behind it */}
            <div className="bg-parchment-light border-8 border-double border-ink/40 p-6 md:p-12 shadow-2xl relative min-h-[80vh] transform rotate-[0.5deg]">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-ink pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-ink pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-ink pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-ink pointer-events-none"></div>

              {/* Content Render */}
              <div className="animate-fade-in">
                {activeSection === 'about' && <AboutSection />}
                {activeSection === 'experience' && <ExperienceSection />}
                {activeSection === 'skills' && <SkillsSection />}
                {activeSection === 'portfolio' && <PortfolioSection />}
                {activeSection === 'contact' && <ContactSection />}
              </div>
            </div>

          </main>

          <footer className="bg-parchment-dark/90 text-center py-6 border-t border-ink relative z-20 backdrop-blur-sm">
            <p className="font-handwriting text-xl opacity-70">
              "A sutil arte da qualidade de software."
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

// --- Sub Components ---

const NavButton: React.FC<{active: boolean, onClick: () => void, icon: React.ReactNode, label: string}> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded transition-all duration-300 ${active ? 'text-gryffindor font-bold underline decoration-2 underline-offset-4' : 'text-ink hover:text-gryffindor'}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const MobileNavButton: React.FC<{active: boolean, onClick: () => void, label: string}> = ({ active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`w-full text-center py-3 text-lg font-serif ${active ? 'bg-ink/10 text-gryffindor font-bold' : 'text-ink'}`}
  >
    {label}
  </button>
);

const AboutSection: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="relative group">
      <div className="absolute inset-0 bg-ink transform rotate-3 rounded opacity-20 group-hover:rotate-6 transition-transform"></div>
      <img 
        src={USER_INFO.profileImage} 
        alt={USER_INFO.name} 
        className="relative w-full h-auto rounded shadow-lg border-4 border-parchment sepia-[.4] hover:sepia-0 transition-all duration-500"
      />
       {/* Wizard aesthetic overlay */}
       <div className="absolute -bottom-4 -right-4 bg-gryffindor text-parchment p-2 rounded-full shadow-lg">
          <GraduationCap size={32} />
       </div>
    </div>
    <div>
      <h2 className="text-5xl font-handwriting mb-6 text-gryffindor">{USER_INFO.name}</h2>
      <h3 className="text-2xl font-serif mb-6 border-b-2 border-ink pb-2 inline-block">{USER_INFO.role}</h3>
      <p className="text-lg leading-relaxed text-justify mb-6 first-letter:text-5xl first-letter:font-handwriting first-letter:mr-1 first-letter:float-left first-letter:text-ink">
        {USER_INFO.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-parchment border border-ink p-4 text-center rounded shadow transform hover:-translate-y-1 transition-transform">
            <span className="block text-3xl font-bold text-gryffindor">3+</span>
            <span className="text-sm uppercase tracking-wide">Anos de Experiência</span>
        </div>
        <div className="bg-parchment border border-ink p-4 text-center rounded shadow transform hover:-translate-y-1 transition-transform">
            <span className="block text-3xl font-bold text-gryffindor">15+</span>
            <span className="text-sm uppercase tracking-wide">Certificações</span>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC = () => (
  <div>
    <h2 className="text-4xl font-handwriting mb-10 text-center text-ink">Jornada Profissional</h2>
    <div className="relative border-l-4 border-ink/30 ml-6 md:ml-12 space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[14px] top-0 w-6 h-6 bg-gryffindor rounded-full border-4 border-parchment shadow"></div>
          
          <div className="bg-parchment/50 p-6 rounded border border-ink/20 shadow hover:shadow-lg transition-all hover:bg-parchment transform hover:-translate-x-1">
            <span className="text-sm font-bold tracking-widest text-gryffindor uppercase mb-2 block">{exp.period}</span>
            <h3 className="text-2xl font-bold text-ink">{exp.role}</h3>
            <h4 className="text-xl font-handwriting text-ink/80 mb-4">{exp.company}</h4>
            <ul className="list-disc list-inside space-y-2 text-ink-light">
              {exp.description.map((desc, i) => (
                <li key={i} className="leading-relaxed">{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => (
  <div>
    <h2 className="text-4xl font-handwriting mb-10 text-center text-ink">Arsenal de Feitiços & Habilidades</h2>
    
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {SKILLS.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-bold text-lg">{skill.name}</span>
            <span className="font-handwriting text-lg">{skill.level}%</span>
          </div>
          <div className="w-full bg-ink/20 rounded-full h-3 border border-ink/20">
            <div 
              className="bg-gryffindor h-2.5 rounded-full relative" 
              style={{ width: `${skill.level}%` }}
            >
                {/* Wand tip flare effect */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_2px_rgba(250,204,21,0.6)]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-4xl font-handwriting mb-10 text-center text-ink">Certificações Mágicas</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert, index) => (
            <div key={index} className="bg-parchment border border-ink p-4 text-center rounded shadow-md hover:shadow-xl transition-all group">
                <div className="mb-3 overflow-hidden rounded border border-ink/30 h-32 relative">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-cover filter sepia group-hover:sepia-0 transition-all duration-500 scale-110" />
                </div>
                <h4 className="font-bold text-sm md:text-base leading-tight mb-2">{cert.name}</h4>
                <p className="text-xs text-ink/60">{cert.duration}</p>
            </div>
        ))}
    </div>
  </div>
);

const PortfolioSection: React.FC = () => (
  <div>
    <h2 className="text-4xl font-handwriting mb-10 text-center text-ink">Feitos e Projetos</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <div key={index} className="group relative bg-parchment p-3 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300 border border-ink/20">
          <div className="relative overflow-hidden border border-ink mb-3 h-48">
            <div className="absolute inset-0 bg-ink/20 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover filter sepia contrast-125 group-hover:sepia-0 transition-all duration-500" />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-parchment/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-20">
                <a href={project.link} target="_blank" rel="noreferrer" className="bg-ink text-parchment px-6 py-2 rounded-full font-bold hover:bg-gryffindor transition-colors flex items-center space-x-2">
                    <Github size={20} />
                    <span>Ver Código</span>
                </a>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center border-b border-ink/10 pb-2 mb-2">{project.title}</h3>
          <p className="text-center font-handwriting text-lg text-ink-light">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContactSection: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-handwriting mb-12 text-center text-ink">Envie uma Coruja</h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed italic">
          "Se você tiver alguma dúvida, proposta ou apenas quiser conversar sobre qualidade de software (ou Quadribol), não hesite em entrar em contato."
        </p>
        
        <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-ink text-parchment flex items-center justify-center">
                    <MapPin size={20} />
                </div>
                <span>{USER_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-ink text-parchment flex items-center justify-center">
                    <Mail size={20} />
                </div>
                <a href={`mailto:${USER_INFO.email}`} className="hover:text-gryffindor transition-colors">{USER_INFO.email}</a>
            </div>
            
            <div className="flex space-x-4 mt-6 pt-6 border-t border-ink/20">
                <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-ink hover:text-gryffindor transition-transform hover:scale-110">
                    <Linkedin size={32} />
                </a>
                <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-ink hover:text-gryffindor transition-transform hover:scale-110">
                    <Github size={32} />
                </a>
            </div>
        </div>
      </div>

      <form 
        action={`https://formsubmit.co/${USER_INFO.email}`} 
        method="POST"
        className="space-y-4"
      >
        <div>
           <label className="block font-bold mb-1 uppercase text-xs tracking-wider">Nome</label>
           <input type="text" name="name" required className="w-full bg-transparent border-b-2 border-ink p-2 focus:outline-none focus:border-gryffindor transition-colors font-handwriting text-xl" placeholder="Seu nome..." />
        </div>
        <div>
           <label className="block font-bold mb-1 uppercase text-xs tracking-wider">Email</label>
           <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-ink p-2 focus:outline-none focus:border-gryffindor transition-colors font-handwriting text-xl" placeholder="seu@email.com" />
        </div>
        <div>
           <label className="block font-bold mb-1 uppercase text-xs tracking-wider">Mensagem</label>
           <textarea name="message" rows={4} required className="w-full bg-transparent border-b-2 border-ink p-2 focus:outline-none focus:border-gryffindor transition-colors font-handwriting text-xl resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
        </div>
        
        <input type="hidden" name="_captcha" value="false" />
        
        <button type="submit" className="w-full bg-ink text-parchment font-bold py-3 px-6 rounded uppercase tracking-widest hover:bg-gryffindor transition-colors shadow-lg mt-4 flex justify-center items-center space-x-2">
            <span>Enviar Mensagem</span>
            <Mail size={18} />
        </button>
      </form>
    </div>
  </div>
);

export default App;