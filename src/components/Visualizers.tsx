import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, ArrowRight, ArrowDown, Database, Layers, ListOrdered, Share2, GitBranch, Network } from 'lucide-react';
import { DataStructureType } from '../types';

// --- Array Visualizer ---
export const ArrayVisualizer = () => {
  const [items, setItems] = useState<number[]>(() => {
    const saved = localStorage.getItem('ds_array_data');
    return saved ? JSON.parse(saved) : [10, 20, 30, 40, 50];
  });

  useEffect(() => {
    localStorage.setItem('ds_array_data', JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [items]);
  
  const addItem = () => setItems([...items, Math.floor(Math.random() * 100)]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 min-h-[100px] items-center p-4 border border-ink/10 rounded-lg bg-white/50">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => (
            <motion.div
              key={`${idx}-${item}`}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative group"
            >
              <div className="w-12 h-12 flex items-center justify-center border-2 border-ink bg-white font-mono text-lg shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                {item}
              </div>
              <div className="absolute -bottom-6 left-0 w-full text-center font-mono text-[10px] opacity-50">
                [{idx}]
              </div>
              <button 
                onClick={() => removeItem(idx)}
                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={10} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        <button 
          onClick={addItem}
          className="w-12 h-12 flex items-center justify-center border-2 border-dashed border-ink/30 hover:border-ink hover:bg-ink/5 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

// --- Stack Visualizer ---
export const StackVisualizer = () => {
  const [items, setItems] = useState<number[]>(() => {
    const saved = localStorage.getItem('ds_stack_data');
    return saved ? JSON.parse(saved) : [10, 20, 30];
  });

  useEffect(() => {
    localStorage.setItem('ds_stack_data', JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [items]);
  
  const push = () => setItems([...items, Math.floor(Math.random() * 100)]);
  const pop = () => setItems(items.slice(0, -1));

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col-reverse gap-2 w-32 min-h-[200px] p-4 border-x-2 border-b-2 border-ink bg-white/30 rounded-b-lg">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => (
            <motion.div
              key={`${idx}-${item}`}
              layout
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="w-full h-10 flex items-center justify-center border-2 border-ink bg-white font-mono shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]"
            >
              {item}
              {idx === items.length - 1 && (
                <span className="absolute -right-12 text-[10px] font-bold uppercase tracking-wider">Top</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <button onClick={push} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">PUSH</button>
        <button onClick={pop} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">POP</button>
      </div>
    </div>
  );
};

// --- Queue Visualizer ---
export const QueueVisualizer = () => {
  const [items, setItems] = useState<number[]>(() => {
    const saved = localStorage.getItem('ds_queue_data');
    return saved ? JSON.parse(saved) : [10, 20, 30];
  });

  useEffect(() => {
    localStorage.setItem('ds_queue_data', JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [items]);
  
  const enqueue = () => setItems([...items, Math.floor(Math.random() * 100)]);
  const dequeue = () => setItems(items.slice(1));

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2 min-h-[80px] items-center p-4 border-y-2 border-ink bg-white/30 w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => (
            <motion.div
              key={`${idx}-${item}`}
              layout
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="relative"
            >
              <div className="w-12 h-12 flex items-center justify-center border-2 border-ink bg-white font-mono shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                {item}
              </div>
              {idx === 0 && <span className="absolute -top-6 left-0 w-full text-center text-[10px] font-bold uppercase">Front</span>}
              {idx === items.length - 1 && <span className="absolute -top-6 left-0 w-full text-center text-[10px] font-bold uppercase">Rear</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <button onClick={enqueue} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">ENQUEUE</button>
        <button onClick={dequeue} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">DEQUEUE</button>
      </div>
    </div>
  );
};

// --- Linked List Visualizer ---
export const LinkedListVisualizer = () => {
  const [items, setItems] = useState<number[]>(() => {
    const saved = localStorage.getItem('ds_linkedlist_data');
    return saved ? JSON.parse(saved) : [10, 20, 30];
  });

  useEffect(() => {
    localStorage.setItem('ds_linkedlist_data', JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [items]);
  
  const addNode = () => setItems([...items, Math.floor(Math.random() * 100)]);
  const removeNode = () => setItems(items.slice(0, -1));

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-wrap gap-y-8 gap-x-2 min-h-[100px] items-center p-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, idx) => (
            <React.Fragment key={`${idx}-${item}`}>
              <motion.div
                layout
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex"
              >
                <div className="flex border-2 border-ink bg-white shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                  <div className="w-10 h-10 flex items-center justify-center border-r-2 border-ink font-mono">{item}</div>
                  <div className="w-6 h-10 flex items-center justify-center bg-ink/5">
                    <div className="w-2 h-2 rounded-full bg-ink" />
                  </div>
                </div>
              </motion.div>
              {idx < items.length - 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                  <ArrowRight size={20} />
                </motion.div>
              )}
              {idx === items.length - 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center ml-2 text-[10px] font-mono opacity-50">
                  NULL
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <button onClick={addNode} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">ADD NODE</button>
        <button onClick={removeNode} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">REMOVE NODE</button>
      </div>
    </div>
  );
};

// --- Tree Visualizer (Simple Binary Tree) ---
export const TreeVisualizer = () => {
  const [nodes, setNodes] = useState<number[]>(() => {
    const saved = localStorage.getItem('ds_tree_data');
    return saved ? JSON.parse(saved) : [1, 2, 3, 4, 5, 6, 7];
  });

  useEffect(() => {
    localStorage.setItem('ds_tree_data', JSON.stringify(nodes));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [nodes]);

  const addNode = () => {
    if (nodes.length < 15) {
      setNodes([...nodes, nodes.length + 1]);
    }
  };

  const resetTree = () => setNodes([1]);

  return (
    <div className="flex flex-col items-center p-4 w-full">
      <div className="relative w-full max-w-lg h-[300px] flex flex-col items-center">
        {/* Root */}
        {nodes.length > 0 && (
          <div className="relative">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="w-14 h-14 rounded-full border-2 border-ink bg-white flex items-center justify-center font-mono text-xl shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] z-20"
            >
              {nodes[0]}
            </motion.div>
            {nodes.length > 1 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[200px] h-[100px] pointer-events-none">
                 <svg className="w-full h-full overflow-visible">
                    {nodes.length > 1 && <line x1="50%" y1="50%" x2="25%" y2="100%" stroke="currentColor" strokeWidth="2" />}
                    {nodes.length > 2 && <line x1="50%" y1="50%" x2="75%" y2="100%" stroke="currentColor" strokeWidth="2" />}
                 </svg>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-between w-full mt-16 px-12">
          {/* Level 1 */}
          {nodes.slice(1, 3).map((val, i) => (
            <div key={i} className="relative">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }}
                className="w-12 h-12 rounded-full border-2 border-ink bg-white flex items-center justify-center font-mono shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] z-20"
              >
                {val}
              </motion.div>
              {nodes.length > (i === 0 ? 3 : 5) && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[100px] h-[80px] pointer-events-none">
                   <svg className="w-full h-full overflow-visible">
                      {nodes.length > (i === 0 ? 3 : 5) && <line x1="50%" y1="50%" x2="20%" y2="100%" stroke="currentColor" strokeWidth="2" />}
                      {nodes.length > (i === 0 ? 4 : 6) && <line x1="50%" y1="50%" x2="80%" y2="100%" stroke="currentColor" strokeWidth="2" />}
                   </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full mt-12">
          {/* Level 2 */}
          <div className="flex gap-4">
            {nodes.slice(3, 5).map((val, i) => (
              <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i*0.1 }} className="w-10 h-10 rounded-full border-2 border-ink bg-white flex items-center justify-center font-mono text-sm shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                {val}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4">
            {nodes.slice(5, 7).map((val, i) => (
              <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i*0.1 }} className="w-10 h-10 rounded-full border-2 border-ink bg-white flex items-center justify-center font-mono text-sm shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                {val}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-8">
        <button onClick={addNode} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">ADD NODE</button>
        <button onClick={resetTree} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">RESET</button>
      </div>
      <p className="mt-4 text-xs font-mono opacity-50 italic">Hierarchical representation (Binary Tree)</p>
    </div>
  );
};

// --- Graph Visualizer ---
export const GraphVisualizer = () => {
  const [nodes, setNodes] = useState<string[]>(() => {
    const saved = localStorage.getItem('ds_graph_data');
    return saved ? JSON.parse(saved) : ['A', 'B', 'C', 'D', 'E'];
  });

  useEffect(() => {
    localStorage.setItem('ds_graph_data', JSON.stringify(nodes));
    window.dispatchEvent(new CustomEvent('ds-data-saved'));
  }, [nodes]);

  const addNode = () => {
    if (nodes.length < 8) {
      const nextChar = String.fromCharCode(65 + nodes.length);
      setNodes([...nodes, nextChar]);
    }
  };

  const resetGraph = () => setNodes(['A']);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-72 h-72 border border-dashed border-ink/10 rounded-full flex items-center justify-center">
        {nodes.map((node, i) => {
          const angle = (i / nodes.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 120;
          const y = Math.sin(angle) * 120;
          
          return (
            <motion.div 
              key={node}
              initial={{ scale: 0 }} 
              animate={{ scale: 1, x, y }} 
              className="absolute w-12 h-12 rounded-full border-2 border-ink bg-white flex items-center justify-center font-mono text-lg shadow-[3px_3px_0px_0px_rgba(20,20,20,1)] z-10"
            >
              {node}
            </motion.div>
          );
        })}
        
        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible opacity-40">
          {nodes.map((_, i) => {
            const angle1 = (i / nodes.length) * 2 * Math.PI;
            const x1 = 144 + Math.cos(angle1) * 120;
            const y1 = 144 + Math.sin(angle1) * 120;
            
            return nodes.slice(i + 1).map((__, j) => {
              const angle2 = ((i + j + 1) / nodes.length) * 2 * Math.PI;
              const x2 = 144 + Math.cos(angle2) * 120;
              const y2 = 144 + Math.sin(angle2) * 120;
              
              // Only draw some connections to keep it clean
              if ((i + j) % 2 === 0) {
                return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
              }
              return null;
            });
          })}
        </svg>
      </div>
      <div className="flex gap-2 mt-8">
        <button onClick={addNode} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">ADD NODE</button>
        <button onClick={resetGraph} className="px-4 py-2 border-2 border-ink bg-white hover:bg-ink hover:text-white font-mono text-sm transition-colors">RESET</button>
      </div>
      <p className="mt-4 text-xs font-mono opacity-50 italic">Network representation (Non-Linear Graph)</p>
    </div>
  );
};

export const VisualizerMap: Record<DataStructureType, React.ReactNode> = {
  'Array': <ArrayVisualizer />,
  'Stack': <StackVisualizer />,
  'Queue': <QueueVisualizer />,
  'Linked-List': <LinkedListVisualizer />,
  'Tree': <TreeVisualizer />,
  'Graph': <GraphVisualizer />
};

export const IconMap: Record<DataStructureType, React.ReactNode> = {
  'Array': <Database size={18} />,
  'Stack': <Layers size={18} />,
  'Queue': <ListOrdered size={18} />,
  'Linked-List': <Share2 size={18} />,
  'Tree': <GitBranch size={18} />,
  'Graph': <Network size={18} />
};
