import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Layers, 
  Activity, 
  Construction, 
  Search,
  Book,
  Minus,
  Quote,
  Key,
  Zap,
  Target,
  ArrowRight,
  Focus,
  PieChart,
  User
} from 'lucide-react';

const App = () => {
  const [index, setIndex] = useState(0);
  const [evidenceMode, setEvidenceMode] = useState(0);
  const [viewMode, setViewMode] = useState('archive'); // 'archive' or 'matrix'
  const [animateState, setAnimateState] = useState(false);

  // Trigger elegant entrance animations ONLY on view switch to prevent data-click flashes
  useEffect(() => {
    setAnimateState(false);
    const timer = setTimeout(() => setAnimateState(true), 50);
    return () => clearTimeout(timer);
  }, [viewMode]); 

  const data = [
    {
      title: "Alliance Primacy",
      subtitle: "Common Factors",
      citation: "Wampold, 2001; Lambert, 1992",
      description: "Variance in psychotherapy outcomes is overwhelmingly attributable to common factors rather than specific theoretical interventions.",
      insight: "Specific treatment effects pale into insignificance when compared to the quality of the therapeutic bond and goal consensus established in the dyad.",
      icon: <Layers size={20} strokeWidth={2} />,
      references: ["Wampold (2001)", "Lambert (1992)"]
    },
    {
      title: "Transference Data",
      subtitle: "Interpersonal Schemas",
      citation: "Aron, 1996; Safran & Muran, 2000",
      description: "Enactment and transference provide immediate, observable data regarding the patient's cyclical maladaptive patterns.",
      insight: "The patient’s transference is not simply a distortion, but rather a plausible and highly informative construction of the therapist’s actual behavior and internal state.",
      icon: <Key size={20} strokeWidth={2} />,
      references: ["Aron (1996)", "Safran & Muran (2000)"]
    },
    {
      title: "Rupture Signal",
      subtitle: "Marker Identification",
      citation: "Safran, Muran & Eubanks-Carter, 2011",
      description: "Patients frequently obscure negative affect. Clinical efficacy requires continuous attunement to subtle markers of interpersonal tension.",
      insight: "Patients often comply with the therapist's approach while covertly harboring negative feelings, making the detection of implicit rupture markers a critical clinical skill.",
      icon: <Search size={20} strokeWidth={2} />,
      references: ["Safran et al. (2011)"]
    },
    {
      title: "Affective Depth",
      subtitle: "Affect Tolerance",
      citation: "Aron, 1996",
      description: "Healing requires the endurance to stay present through mistrust, fear, envy, and hate.",
      insight: "The therapist’s willingness to be emotionally impacted and moved by the patient is a prerequisite for the patient’s own affective transformation.",
      icon: <Heart size={20} strokeWidth={2} />,
      references: ["Aron (1996)"]
    },
    {
      title: "Non-Defensive Pivot",
      subtitle: "Therapist Transparency",
      citation: "Safran & Muran, 2000",
      description: "Therapist transparency and non-defensive acknowledgment of their contribution to a rupture facilitate the repair process.",
      insight: "When navigating therapeutic impasses, the therapist's non-defensive acknowledgment of their own contribution is often the pivotal turning point for rupture repair.",
      icon: <Construction size={20} strokeWidth={2} />,
      references: ["Safran & Muran (2000)"]
    },
    {
      title: "Outcome Resilience",
      subtitle: "Rupture Resolution",
      citation: "Safran, Muran & Eubanks-Carter, 2011",
      description: "Successfully negotiated alliance ruptures are correlated with stronger overall outcomes compared to therapies without interpersonal conflict.",
      insight: "Therapies in which alliance ruptures are successfully negotiated are consistently associated with better overall outcomes than therapies without conflict.",
      icon: <Activity size={20} strokeWidth={2} />,
      references: ["Safran et al. (2011)"]
    }
  ];

  const evidenceRegistry = [
    {
      title: "The Truth of Love",
      subtitle: "60% · Common Factors",
      content: "Empathy, goal consensus, and the therapeutic bond account for the majority of treatment-related variance, consistently outperforming specific theoretical effects.",
      source: "Wampold (2001; 2015)",
      icon: <Heart size={20} />,
      percent: "60%"
    },
    {
      title: "The Love of Truth",
      subtitle: "8% · Specific Ingredients",
      content: "Manualized protocols and specific techniques account for approximately 8% of variance. They function primarily by providing a coherent healing rationale.",
      source: "Wampold (2001)",
      icon: <Target size={20} />,
      percent: "8%"
    },
    {
      title: "Extratherapeutic Reality",
      subtitle: "32% · Patient Context",
      content: "Environmental factors, spontaneous remission, and patient characteristics significantly dictate the trajectory of recovery independent of the clinical encounter.",
      source: "Lambert (1992)",
      icon: <Focus size={20} />,
      percent: "32%"
    }
  ];

  const panelWhite = "bg-white border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-[40px]";
  const panelBlack = "bg-[#0A0A0A] text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] rounded-[40px]";
  
  const fadeUpAnim = `transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${animateState ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;
  const zoomInAnim = `transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${animateState ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`;

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-[#0A0A0A] font-sans flex flex-col items-center p-4 md:p-8 lg:p-12 select-none overflow-x-hidden relative">
      
      <style>{`::-webkit-scrollbar { width: 0px; background: transparent; }`}</style>

      {/* AMBIENT DEPTH OF FIELD */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] size-[60%] rounded-full bg-white blur-[120px] opacity-100" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[50%] rounded-full bg-slate-300 blur-[150px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-10 flex-1">
        
        {/* EGO STATE TOGGLE */}
        <div className="w-full flex justify-center sticky top-2 z-50 shrink-0">
          <div className="w-[340px] h-14 bg-white/80 backdrop-blur-xl border border-black/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] rounded-full p-1.5 relative flex">
             <div 
               className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-[#0A0A0A] shadow-md transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
               style={{ transform: viewMode === 'matrix' ? 'translateX(100%)' : 'translateX(0)' }}
             />
             <button 
               onClick={() => setViewMode('archive')}
               className={`flex-1 relative z-10 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${viewMode === 'archive' ? 'text-white' : 'text-slate-400 hover:text-black'}`}
             >
               Relational Archive
             </button>
             <button 
               onClick={() => setViewMode('matrix')}
               className={`flex-1 relative z-10 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${viewMode === 'matrix' ? 'text-white' : 'text-slate-400 hover:text-black'}`}
             >
               Variance Context
             </button>
          </div>
        </div>

        {/* MAIN WORKSPACE */}
        <div className="w-full flex-1 flex flex-col">
          
          {/* VIEW 1: RELATIONAL ARCHIVE */}
          {viewMode === 'archive' && (
            <div className={`flex flex-col lg:flex-row gap-10 flex-1 ${zoomInAnim}`}>
              
              {/* SIDEBAR - Optimized for vertical space usage */}
              <aside className={`flex flex-col w-full lg:w-[340px] shrink-0 ${panelWhite} p-10 justify-between`}>
                <div className="flex flex-col gap-10">
                  <header className="space-y-4 shrink-0">
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic leading-[0.8] text-black">
                      Fear & <br/> Love
                    </h1>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="h-0.5 w-8 bg-black" />
                      <p className="text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase">
                        Literature Base
                      </p>
                    </div>
                  </header>

                  <nav className="space-y-2 overflow-y-auto max-h-[50vh] lg:max-h-none">
                    {data.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-full text-left p-4 rounded-[24px] flex items-center gap-5 outline-none transition-all duration-500 ${
                          index === i 
                          ? `bg-[#0A0A0A] text-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] translate-x-2` 
                          : 'bg-transparent text-slate-500 hover:bg-black/5 hover:text-black'
                        }`}
                      >
                        <div className={`shrink-0 transition-transform duration-500 ${index === i ? 'scale-110' : ''}`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-black uppercase tracking-widest truncate">{item.title}</div>
                          <div className={`text-[8px] font-bold uppercase tracking-widest truncate mt-1 ${index === i ? 'text-slate-300' : 'text-slate-400'}`}>
                            {item.subtitle}
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* RESTORED & UPDATED: THE "BE YOU, USE YOU" PHRASE + ICON */}
                <div className="mt-auto pt-8 border-t border-black/5 flex items-center gap-4">
                  <div className="size-10 rounded-full bg-black/5 flex items-center justify-center text-black shrink-0">
                    <User size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-relaxed italic">
                    "Use yourself as the instrument. Be yourself as the data."
                  </span>
                </div>
              </aside>

              <div className="flex-1 flex flex-col gap-10">
                <div className={`flex-[1.2] p-10 md:p-14 flex flex-col justify-center ${panelWhite}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <Minus size={32} strokeWidth={2} className="text-black" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Subject Overview</span>
                  </div>
                  <h3 className="text-[10px] font-bold text-black uppercase tracking-[0.3em] mb-4">
                    {data[index].citation}
                  </h3>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] text-black italic max-w-4xl">
                    {data[index].description}
                  </h2>
                </div>

                <div className={`flex-1 p-10 md:p-14 flex flex-col justify-between ${panelBlack} relative overflow-hidden`}>
                  <Quote className="absolute -bottom-10 -right-6 opacity-5 rotate-12 pointer-events-none" size={300} />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-[1.3] italic max-w-4xl">
                      "{data[index].insight}"
                    </p>
                    
                    <div className="border-t border-white/10 pt-8 mt-8 flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-4 items-center">
                        <Book size={18} className="text-slate-400" />
                        {data[index].references.map((ref, i) => (
                          <div key={i} className="px-5 py-2.5 rounded-full border border-white/20 text-[9px] font-bold text-white uppercase tracking-widest">
                            {ref}
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => setIndex((prev) => (prev + 1) % data.length)}
                        className="flex items-center gap-3 text-white/50 hover:text-white transition-all group outline-none cursor-pointer"
                      >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Next Insight</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: VARIANCE CONTEXT (PIE CHART) */}
          {viewMode === 'matrix' && (
            <div className={`flex flex-col gap-10 flex-1 ${fadeUpAnim}`}>
              
              <div className={`flex-[1.2] p-10 md:p-14 flex flex-col ${panelWhite}`}>
                <div className="flex items-center gap-4 mb-6 shrink-0">
                   <PieChart size={28} strokeWidth={2} className="text-black" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Variance Architecture</span>
                </div>

                <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 border-b border-black/10 pb-8 mt-6">
                  
                  {/* SVG PIE CHART */}
                  <div className="relative size-[220px] md:size-[280px] shrink-0">
                    <svg viewBox="0 0 220 220" className="size-full overflow-visible">
                       <defs>
                         <pattern id="hatch" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                           <line x1="0" y1="0" x2="0" y2="12" stroke="#0A0A0A" strokeWidth="1" opacity="0.25" />
                         </pattern>
                       </defs>
                       <g className={`origin-center transition-all duration-500 cursor-pointer ${evidenceMode === 0 ? 'scale-[1.05] drop-shadow-2xl' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'}`} onClick={() => setEvidenceMode(0)}>
                         <path d="M 110 110 L 110 10 A 100 100 0 1 1 51.22 190.90 Z" fill="#0A0A0A" />
                       </g>
                       <g className={`origin-center transition-all duration-500 cursor-pointer ${evidenceMode === 2 ? 'scale-[1.05] drop-shadow-lg' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'}`} onClick={() => setEvidenceMode(2)}>
                         <path d="M 110 110 L 51.22 190.90 A 100 100 0 0 1 61.82 22.37 Z" fill="url(#hatch)" stroke="#0A0A0A" strokeWidth="1" strokeOpacity="0.4" />
                       </g>
                       <g className={`origin-center transition-all duration-500 cursor-pointer ${evidenceMode === 1 ? 'scale-[1.1] drop-shadow-lg z-10' : 'hover:scale-[1.05] opacity-90 hover:opacity-100'}`} onClick={() => setEvidenceMode(1)}>
                         <path d="M 110 110 L 61.82 22.37 A 100 100 0 0 1 110 10 Z" fill="#ffffff" stroke="#0A0A0A" strokeWidth="3" />
                       </g>
                    </svg>
                  </div>

                  <div className="flex flex-col gap-8 md:gap-10 shrink-0">
                    <div className={`flex items-center gap-5 transition-opacity duration-500 cursor-pointer ${evidenceMode === 0 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`} onClick={() => setEvidenceMode(0)}>
                      <div className="size-12 shrink-0 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-black italic shadow-[0_10px_20px_rgba(0,0,0,0.3)]">60</div>
                      <div className="flex flex-col pt-1">
                        <span className="text-xl font-black uppercase tracking-widest leading-none">The Truth of Love</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1.5">60% · The Alliance Container</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-5 transition-opacity duration-500 cursor-pointer ${evidenceMode === 2 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`} onClick={() => setEvidenceMode(2)}>
                      <div className="size-12 shrink-0 rounded-full border border-black/30 flex items-center justify-center text-black/60 font-black italic relative overflow-hidden">
                        <div className="absolute inset-0 opacity-25" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #0A0A0A 4px, #0A0A0A 5px)' }} />
                        <span className="relative z-10">32</span>
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="text-xl font-black uppercase tracking-widest leading-none">Extratherapeutic Reality</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1.5">32% · Patient Context</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-5 transition-opacity duration-500 cursor-pointer ${evidenceMode === 1 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`} onClick={() => setEvidenceMode(1)}>
                      <div className="size-12 shrink-0 rounded-full bg-white border-[3px] border-[#0A0A0A] flex items-center justify-center text-black font-black italic shadow-sm">8</div>
                      <div className="flex flex-col pt-1">
                        <span className="text-xl font-black uppercase tracking-widest leading-none">The Love of Truth</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1.5">8% · Process & Technique</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col lg:flex-row gap-10 items-stretch">
                <div className={`w-full lg:w-[40%] flex flex-col gap-4 p-8 lg:p-10 ${panelWhite}`}>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 pl-2">Evidence Registry</div>
                  {evidenceRegistry.map((item, i) => (
                    <button key={i} onClick={() => setEvidenceMode(i)} className={`w-full text-left p-5 rounded-[24px] transition-all duration-500 flex items-center gap-5 outline-none border ${evidenceMode === i ? `bg-[#0A0A0A] text-white border-black shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)] scale-[1.02]` : `bg-transparent text-black border-black/5 hover:border-black/20 hover:bg-black/5`}`}>
                      <div className={`shrink-0 transition-colors ${evidenceMode === i ? 'text-white' : 'text-slate-400'}`}>{item.icon}</div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest">{item.title}</span>
                        <span className={`text-[8px] font-bold uppercase tracking-[0.2em] mt-1 ${evidenceMode === i ? 'text-slate-300' : 'text-slate-500'}`}>{item.subtitle}</span>
                      </div>
                      {evidenceMode === i && <ArrowRight size={16} className="ml-auto opacity-50" />}
                    </button>
                  ))}
                  
                  {/* RELOCATED PHRASE: Nested firmly at the bottom of the registry */}
                  <div className="mt-auto pt-6 flex items-start gap-4 px-2 opacity-60 border-t border-black/5">
                    <div className="mt-0.5 text-black shrink-0">
                      <User size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 leading-relaxed italic">
                      "Use yourself as the instrument. Be yourself as the data."
                    </span>
                  </div>
                </div>

                <div className={`flex-1 p-10 md:p-14 flex flex-col justify-center ${panelBlack} relative overflow-hidden`}>
                  <div className="absolute top-[-20%] right-[-20%] size-[80%] bg-white opacity-5 blur-[100px] rounded-full pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4 opacity-50">
                         <Zap size={18} />
                         <span className="text-[9px] font-black uppercase tracking-[0.5em]">Selected Findings: {evidenceRegistry[evidenceMode].percent}</span>
                       </div>
                       <p className="text-2xl md:text-3xl lg:text-4xl font-black italic leading-[1.2] text-white max-w-2xl border-l-[6px] border-white/20 pl-8 transition-all duration-300">
                         "{evidenceRegistry[evidenceMode].content}"
                       </p>
                    </div>
                    
                    <div className="border-t border-white/10 pt-8 mt-8 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 transition-all duration-300">— {evidenceRegistry[evidenceMode].source}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;