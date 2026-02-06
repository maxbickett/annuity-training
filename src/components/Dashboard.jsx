import { BookOpen, Layers, Briefcase, Award, Lock, Check } from 'lucide-react';

const ICONS = { BookOpen, Layers, Briefcase, Award };
const COLORS = {
  blue: 'from-blue-500 to-blue-600',
  emerald: 'from-emerald-500 to-emerald-600',
  violet: 'from-violet-500 to-violet-600',
  amber: 'from-amber-500 to-amber-600'
};

export function Dashboard({ tracks, modules, progress, isLocked, totalMastery, onSelectModule }) {
  const completedModules = modules.filter(module => progress[module.id]?.completed).length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Annuity Expert Training Suite</h2>
        <p className="text-slate-400">Comprehensive, expert-level training with mastery-based progression.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="text-slate-400 text-sm mb-1">Modules Completed</div>
          <div className="text-3xl font-bold text-white">
            {completedModules}/{modules.length}
          </div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="text-slate-400 text-sm mb-1">Overall Mastery</div>
          <div className="text-3xl font-bold text-emerald-400">{totalMastery}%</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="text-slate-400 text-sm mb-1">Total Duration</div>
          <div className="text-3xl font-bold text-blue-400">12+ hrs</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="text-slate-400 text-sm mb-1">Pass Requirement</div>
          <div className="text-3xl font-bold text-amber-400">70%</div>
        </div>
      </div>

      {/* Tracks */}
      {tracks.map(track => {
        const Icon = ICONS[track.icon] || BookOpen;
        const trackModules = modules.filter(m => m.track === track.id);

        return (
          <div key={track.id} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${COLORS[track.color]} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{track.name}</h3>
                <p className="text-slate-400 text-sm">{track.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {trackModules.map(module => {
                const locked = isLocked(module.id);
                const completed = progress[module.id]?.completed;
                const mastery = Math.max(0, Math.min(100, progress[module.id]?.mastery || 0));

                return (
                  <div
                    key={module.id}
                    onClick={() => !locked && onSelectModule(module.id)}
                    className={`
                      relative bg-slate-800/50 rounded-xl p-5 border border-slate-700 transition-all
                      ${locked
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-slate-500 cursor-pointer hover:bg-slate-800'
                      }
                    `}
                  >
                    {locked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-xl">
                        <Lock size={32} className="text-slate-500" />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl font-bold text-slate-600">{module.id}</span>
                      {completed && (
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check size={16} className="text-emerald-400" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{module.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{module.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{module.duration}</span>
                      {mastery > 0 && (
                        <span className="text-blue-400">Mastery: {mastery}%</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
