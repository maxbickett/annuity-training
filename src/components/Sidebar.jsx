import { X, BookOpen, Layers, Briefcase, Award, Lock, Check } from 'lucide-react';

const ICONS = { BookOpen, Layers, Briefcase, Award };

export function Sidebar({
  tracks,
  modules,
  progress,
  isLocked,
  currentModule,
  isOpen,
  onClose,
  onSelectModule
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-slate-800 border-r border-slate-700
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700 lg:hidden">
          <span className="font-semibold text-white">Navigation</span>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="h-full overflow-y-auto p-4">
          {tracks.map(track => {
            const Icon = ICONS[track.icon] || BookOpen;
            const trackModules = modules.filter(m => m.track === track.id);

            return (
              <div key={track.id} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-400">{track.name}</span>
                </div>
                <div className="space-y-1">
                  {trackModules.map(module => {
                    const locked = isLocked(module.id);
                    const completed = progress[module.id]?.completed;
                    const isCurrent = currentModule === module.id;

                    return (
                      <button
                        key={module.id}
                        onClick={() => !locked && onSelectModule(module.id)}
                        disabled={locked}
                        className={`
                          w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                          flex items-center justify-between
                          ${locked
                            ? 'text-slate-600 cursor-not-allowed'
                            : isCurrent
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-300 hover:bg-slate-700'
                          }
                        `}
                      >
                        <span className="truncate">{module.id}. {module.title}</span>
                        {locked && <Lock size={14} className="text-slate-600 flex-shrink-0" />}
                        {completed && !locked && <Check size={14} className="text-emerald-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
