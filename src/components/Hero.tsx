
import { ArrowRight, Github, Linkedin, Instagram, Code2, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-slate-800 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide">Design. Código. Inovação.</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Transformando Visões em <br className="hidden md:block" />
            <span className="text-primary">Experiências Digitais</span> de Alto Impacto.
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            Sou <strong className="text-slate-200">Guilherme Gabriel</strong>, especialista em interfaces digitais focado na convergência entre Design, Performance e Inteligência Artificial. Crio ecossistemas digitais que não apenas impressionam visualmente, mas impulsionam resultados reais para negócios que exigem excelência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <a href="#projetos" className="group relative px-8 py-4 bg-primary text-background font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]">
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center gap-2">
                Ver Projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="https://linkedin.com/in/guilhermegabrielss/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-surface border border-slate-800 text-slate-300 font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              Entrar em Contato
            </a>
          </div>

          {/* Social Proof / Tech Stack */}
          <div className="pt-8 border-t border-slate-800/50 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-semibold">Tecnologias & Ferramentas</p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Code2 className="w-6 h-6" />
                <span className="font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Terminal className="w-6 h-6" />
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Cpu className="w-6 h-6" />
                <span className="font-medium">AI Integration</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
           <div className="fixed left-8 bottom-0 hidden lg:flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-slate-700 after:mt-6 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            <a href="https://github.com/GuilhermeGabrielSS" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/guilhermegabrielss/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/guilhermegabrielss" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
