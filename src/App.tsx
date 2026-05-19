import { motion } from "motion/react";
import { Music, Star, Target, Layout, ShieldCheck, Phone, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const images = [
    "/input_file_0.png",
    "/input_file_1.png",
    "/input_file_2.png"
  ];

  return (
    <div id="app-root" className="min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* Navigation */}
      <nav id="main-nav" className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div id="logo" className="font-bold text-xl tracking-tighter">
            GIL PARA TODO MUNDO <span className="text-amber-500">CANTAR JUNTO</span>
          </div>
          <div id="nav-links" className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <a href="#projeto" className="hover:text-white transition-colors">O Projeto</a>
            <a href="#objetivos" className="hover:text-white transition-colors">Objetivos</a>
            <a href="#patrocinio" className="hover:text-white transition-colors">Patrocínio</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            id="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
              Proponente: Larissa Moura
            </div>
            <h1 id="main-title" className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              GIL PARA TODO MUNDO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">
                CANTAR JUNTO
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-xl mb-12">
              Quatro apresentações gratuitas que celebram a obra de Gilberto Gil por artistas goianos. Uma experiência intimista em Goiânia.
            </p>
            <div id="hero-actions" className="flex flex-wrap gap-4">
              <a href="#contato" className="px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all flex items-center gap-2 group">
                Seja um Patrocinador
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center gap-2">
                Lei Goyazes aprovado
              </div>
            </div>
          </motion.div>

          <motion.div 
            id="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div id="hero-image-container" className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                id="hero-image-main"
                src={images[0]} 
                alt="Larissa Moura canta Gilberto Gil" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div id="hero-image-accent" className="absolute -bottom-8 -left-8 w-48 h-48 rounded-3xl overflow-hidden border border-white/10 hidden md:block">
               <img 
                 src={images[1]} 
                 alt="Energia dos shows" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover" 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section id="highlights" className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div id="stat-shows">
            <div className="text-5xl font-black text-amber-500 mb-2">04</div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Shows Gratuitos</p>
          </div>
          <div id="stat-lei">
            <div className="text-5xl font-black text-amber-500 mb-2">100%</div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Aprovação Lei Goyazes</p>
          </div>
          <div id="stat-local">
            <div className="text-5xl font-black text-amber-500 mb-2">Goiânia</div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Locais Estratégicos</p>
          </div>
        </div>
      </section>

      {/* O Projeto Section */}
      <section id="projeto" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div id="projeto-info" {...fadeIn}>
              <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                <Music className="text-amber-500" />
                O Projeto
              </h2>
              <div className="space-y-8 text-lg text-white/70 leading-relaxed italic border-l-2 border-amber-500 pl-6">
                "Shows que oferecem uma experiência intimista em bares e espaços culturais de Goiânia, promovendo proximidade real com o público."
              </div>
              
              <div id="projeto-cards" className="mt-16 grid gap-8">
                <div id="card-hits" className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
                  <h3 className="font-bold text-white mb-2">Hits Icônicos</h3>
                  <p className="text-white/50 text-sm">"Aquele Abraço", "Toda Menina Baiana" e "Palco".</p>
                </div>
                <div id="card-hidden" className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
                  <h3 className="font-bold text-white mb-2">Jóias Escondidas</h3>
                  <p className="text-white/50 text-sm">Músicas menos divulgadas que surpreendem até os conhecedores.</p>
                </div>
                <div id="card-arrangements" className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors">
                  <h3 className="font-bold text-white mb-2">Arranjos Autorais</h3>
                  <p className="text-white/50 text-sm">Conexão da obra de Gil com a cena musical atual de Goiás.</p>
                </div>
              </div>
            </motion.div>

            <motion.div id="projeto-visual" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="sticky top-32">
                <div id="sticky-image-container" className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group">
                  <img 
                    src={images[2]} 
                    alt="Expressão Cultural" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-2xl font-bold italic tracking-tight">Ressignificação e continuidade da memória cultural brasileira.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section id="objetivos" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <div className="flex justify-center mb-8">
              <Target className="w-12 h-12 text-amber-500" />
            </div>
            <h2 className="text-5xl font-bold mb-8">Por que este projeto é vital?</h2>
            <p className="text-xl text-white/50 leading-relaxed mb-16">
              Combatemos o envelhecimento cultural, tirando a obra de Gilberto Gil dos arquivos e trazendo-a para o presente, viva e acessível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { title: "Perpetuar a Memória", text: "Ação de ressignificação e continuidade da cultura brasileira em Goiás." },
              { title: "Acesso Facilitado", text: "Gratuidade em locais onde o público já está em clima de lazer." },
              { title: "Engajamento Real", text: "Estimula a participação espontânea: o público canta junto." },
              { title: "Estratégia de Marca", text: "Presença orgânica no momento celebrativo do público." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-colors"
              >
                <h4 className="text-amber-500 font-bold mb-3">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patrocinio Section */}
      <section id="patrocinio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <motion.div {...fadeIn}>
                <h2 className="text-5xl font-bold mb-6 italic tracking-tighter">Oportunidade para o <span className="text-amber-500">Patrocinador</span></h2>
                <div className="p-6 rounded-2xl bg-amber-500 text-black mb-8">
                  <div className="text-xs uppercase font-black tracking-widest mb-1 opacity-60">Valor para Captação</div>
                  <div className="text-3xl font-black italic">R$ 93.006,09</div>
                </div>
                <p className="text-white/50 leading-relaxed mb-8">
                  Este projeto oferece uma chance de unir pessoas por meio da música e fortalecer o capital social da empresa.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              <BenefitCard 
                title="Visibilidade Institucional"
                icon={<Layout className="w-5 h-5" />}
                items={["Peças digitais", "Releases & Imprensa", "Créditos oficiais", "Ambiente dos shows"]}
              />
              <BenefitCard 
                title="Experiência de Marca"
                icon={<Star className="w-5 h-5" />}
                items={["Ativação presencial", "Relacionamento direto", "Conteúdo para redes", "Amostras e brindes"]}
              />
              <BenefitCard 
                title="Reputação Social"
                icon={<ShieldCheck className="w-5 h-5" />}
                items={["Valor de brasilidade", "Diversidade cultural", "Democratização de acesso", "Fortalecimento local"]}
              />
              <BenefitCard 
                title="Posicionamento"
                icon={<Music className="w-5 h-5" />}
                items={["Baixo risco", "Alta penetração", "Fácil reconhecimento", "Respeito ao nome de Gil"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-amber-500 to-amber-600 text-black text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                VAMOS FAZER ESSA <br /> MEMÓRIA VIBRAR?
              </h2>
              <p className="text-black/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
                Confirmar interesse, agendar reunião para estratégia de ativação e formalizar via Lei Goyazes.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4 group">
                   <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div className="text-left">
                      <p className="text-xs font-black uppercase opacity-60">Contato Adriana Parreira</p>
                      <p className="text-2xl font-black leading-tight">62 99901-5748</p>
                   </div>
                </div>
                <div className="h-10 w-[1px] bg-black/20 hidden md:block"></div>
                <button className="px-10 py-5 bg-black text-amber-500 font-bold rounded-full hover:bg-zinc-900 transition-all text-lg shadow-2xl">
                  Quero Patrocinar agora
                </button>
              </div>
            </div>

            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-[100px] -ml-32 -mb-32 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/30 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>© 2026 Gil Para Todo Mundo Cantar Junto. Proponente: Larissa Moura.</div>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-bold">
            <span>Lei Goyazes</span>
            <span>Goiânia, GO</span>
            <span>Cultura Viva</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ title, items, icon }: { title: string, items: string[], icon: ReactNode }) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group">
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500/40" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
