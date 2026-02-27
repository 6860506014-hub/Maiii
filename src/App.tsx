import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DATA_STRUCTURES, DataStructureType } from './types';
import { VisualizerMap, IconMap } from './components/Visualizers';
import { ChevronRight, Info, Clock, Search, Plus, Trash2, Cpu } from 'lucide-react';

export default function App() {
  const [selectedId, setSelectedId] = useState<DataStructureType>('Array');

  const selectedData = DATA_STRUCTURES.find(ds => ds.id === selectedId)!;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="data-grid" />
      
      {/* Header */}
      <header className="border-b border-ink/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink text-white flex items-center justify-center rounded-lg shadow-lg">
              <Cpu size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Data Structure Visualizer</h1>
              <p className="text-[10px] uppercase tracking-widest opacity-50 font-mono">Educational Tool v1.0</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-wider opacity-60">
            <span>Linear</span>
            <span>Non-Linear</span>
            <span>Complexity</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-8">
          <section>
            <h2 className="text-[11px] font-serif italic uppercase tracking-widest opacity-50 mb-4">Linear Structures</h2>
            <div className="space-y-1">
              {DATA_STRUCTURES.filter(ds => ds.category === 'Linear').map(ds => (
                <button
                  key={ds.id}
                  onClick={() => setSelectedId(ds.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all group ${
                    selectedId === ds.id 
                    ? 'bg-ink text-white shadow-lg' 
                    : 'hover:bg-white/50 border border-transparent hover:border-ink/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={selectedId === ds.id ? 'text-white' : 'text-ink/40 group-hover:text-ink'}>
                      {IconMap[ds.id]}
                    </span>
                    <span className="font-medium text-sm">{ds.id}</span>
                  </div>
                  <ChevronRight size={14} className={selectedId === ds.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[11px] font-serif italic uppercase tracking-widest opacity-50 mb-4">Non-Linear Structures</h2>
            <div className="space-y-1">
              {DATA_STRUCTURES.filter(ds => ds.category === 'Non-Linear').map(ds => (
                <button
                  key={ds.id}
                  onClick={() => setSelectedId(ds.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all group ${
                    selectedId === ds.id 
                    ? 'bg-ink text-white shadow-lg' 
                    : 'hover:bg-white/50 border border-transparent hover:border-ink/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={selectedId === ds.id ? 'text-white' : 'text-ink/40 group-hover:text-ink'}>
                      {IconMap[ds.id]}
                    </span>
                    <span className="font-medium text-sm">{ds.id}</span>
                  </div>
                  <ChevronRight size={14} className={selectedId === ds.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
                </button>
              ))}
            </div>
          </section>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Hero / Info Section */}
          <section className="bg-white border border-ink/10 rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <div className="scale-[4] rotate-12">
                {IconMap[selectedId]}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-ink/5 text-[10px] font-mono uppercase tracking-wider rounded border border-ink/10">
                  {selectedData.category}
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">{selectedId}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-ink/70 leading-relaxed mb-4">
                    {selectedData.description}
                  </p>
                  <div className="p-4 bg-bg/50 rounded-xl border border-ink/5">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Info size={14} /> คำอธิบายภาษาไทย
                    </h3>
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {selectedData.descriptionTh}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <ComplexityCard icon={<Clock size={14} />} label="Access" value={selectedData.complexity.access} />
                  <ComplexityCard icon={<Search size={14} />} label="Search" value={selectedData.complexity.search} />
                  <ComplexityCard icon={<Plus size={14} />} label="Insertion" value={selectedData.complexity.insertion} />
                  <ComplexityCard icon={<Trash2 size={14} />} label="Deletion" value={selectedData.complexity.deletion} />
                </div>
              </div>
            </div>
          </section>

          {/* Visualization Section */}
          <section className="bg-white border border-ink/10 rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-ink/10 px-6 py-4 flex justify-between items-center bg-bg/20">
              <h3 className="text-xs font-mono uppercase tracking-widest font-bold">Live Visualization</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase opacity-50">Interactive Mode</span>
              </div>
            </div>
            <div className="p-12 flex items-center justify-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {VisualizerMap[selectedId]}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Definition Footer */}
          <footer className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 border border-ink/10 rounded-xl bg-white/50">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Linear Definition</h4>
                <p className="text-sm text-ink/60 italic">
                  "โครงสร้างข้อมูลที่สมาชิกแต่ละตัวจะเชื่อมกับสมาชิกตัวถัดไปเพียงตัวเดียวและมีลำดับที่ต่อเนื่อง"
                </p>
             </div>
             <div className="p-6 border border-ink/10 rounded-xl bg-white/50">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Non-Linear Definition</h4>
                <p className="text-sm text-ink/60 italic">
                  "โครงสร้างที่ไม่มีคุณสมบัติของเชิงเส้น สามารถใช้แสดงความสัมพันธ์ของข้อมูลที่ซับซ้อนได้มากกว่า"
                </p>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function ComplexityCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="p-3 border border-ink/10 rounded-lg bg-white flex flex-col gap-1">
      <div className="flex items-center gap-2 text-ink/40">
        {icon}
        <span className="text-[10px] uppercase font-mono font-bold tracking-tighter">{label}</span>
      </div>
      <span className="text-lg font-mono font-bold text-ink">{value}</span>
    </div>
  );
}
