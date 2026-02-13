
import React from 'react';
import { Layers, Zap, Briefcase, Eye } from 'lucide-react';

export type WebsiteVersion = 'default' | 'minimal' | 'lead-gen' | 'business';

interface VersionSwitcherProps {
    currentVersion: WebsiteVersion;
    setVersion: (version: WebsiteVersion) => void;
}

const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ currentVersion, setVersion }) => {
    return (
        <div className="fixed bottom-24 right-6 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end gap-3 group">
            <div className="hidden group-hover:flex flex-col gap-2 bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-zinc-200 transition-all animate-in fade-in slide-in-from-bottom-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2 pb-1">Select Version</p>

                <button
                    onClick={() => setVersion('default')}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all ${currentVersion === 'default' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-600'}`}
                >
                    <Eye className="w-4 h-4" /> Original Design
                </button>

                <button
                    onClick={() => setVersion('minimal')}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all ${currentVersion === 'minimal' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-600'}`}
                >
                    <Zap className="w-4 h-4" /> Super Minimal
                </button>

                <button
                    onClick={() => setVersion('lead-gen')}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all ${currentVersion === 'lead-gen' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-600'}`}
                >
                    <Layers className="w-4 h-4" /> High Converting
                </button>

                <button
                    onClick={() => setVersion('business')}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all ${currentVersion === 'business' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-600'}`}
                >
                    <Briefcase className="w-4 h-4" /> Local Business
                </button>
            </div>

            <button className="bg-zinc-900 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                <Layers className="w-6 h-6" />
            </button>
        </div>
    );
};

export default VersionSwitcher;
