import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ModuleView } from './components/ModuleView';
import { AITutor } from './components/AITutor';
import { ProgressRing } from './components/ProgressRing';
import { TRACKS } from './data/tracks';
import { MODULES } from './data/modules';
import { QUIZZES } from './data/quizzes';
import { useProgress } from './hooks/useProgress';

function App() {
  const [view, setView] = useState('dashboard');
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);

  const { progress, updateProgress, isLocked, totalMastery } = useProgress(MODULES.length);

  const currentModule = currentModuleId
    ? MODULES.find((module) => module.id === currentModuleId) || null
    : null;
  const currentTrack = currentModule
    ? TRACKS.find((track) => track.id === currentModule.track) || null
    : null;

  const handleSelectModule = (moduleId) => {
    if (isLocked(moduleId)) return;
    setCurrentModuleId(moduleId);
    setView('module');
    setSidebarOpen(false);
  };

  const handleQuizComplete = (score) => {
    if (!currentModuleId) return;
    updateProgress(currentModuleId, score);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-800/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              className="rounded-md p-2 text-slate-300 hover:bg-slate-700 lg:hidden"
              onClick={() => setSidebarOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              <Menu size={22} />
            </button>
            <button
              className="text-left"
              onClick={() => {
                setView('dashboard');
                setCurrentModuleId(null);
              }}
            >
              <h1 className="text-lg font-semibold text-white sm:text-xl">Annuity Expert Training Suite</h1>
              <p className="text-xs text-slate-400 sm:text-sm">Mastery-based advisor curriculum</p>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ProgressRing progress={totalMastery} size={42} strokeWidth={4} />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">{totalMastery}%</div>
              <div className="text-xs text-slate-400">Overall Mastery</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar
          tracks={TRACKS}
          modules={MODULES}
          progress={progress}
          isLocked={isLocked}
          currentModule={currentModuleId}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSelectModule={handleSelectModule}
        />

        <main className="min-h-[calc(100vh-81px)] flex-1 p-4 lg:p-8">
          {view === 'dashboard' && (
            <Dashboard
              tracks={TRACKS}
              modules={MODULES}
              progress={progress}
              isLocked={isLocked}
              totalMastery={totalMastery}
              onSelectModule={handleSelectModule}
            />
          )}

          {view === 'module' && currentModule && (
            <ModuleView
              module={currentModule}
              track={currentTrack}
              questions={QUIZZES[currentModule.id] || []}
              onQuizComplete={handleQuizComplete}
              onOpenTutor={() => setTutorOpen(true)}
            />
          )}
        </main>
      </div>

      <AITutor
        moduleId={currentModule?.id || 1}
        moduleTitle={currentModule?.title || 'The Fundamental Problem'}
        questions={QUIZZES[currentModule?.id] || []}
        isOpen={tutorOpen}
        onClose={() => setTutorOpen(false)}
      />
    </div>
  );
}

export default App;
