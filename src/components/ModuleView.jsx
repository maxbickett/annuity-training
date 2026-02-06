import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Clock, Target, Zap, Play } from 'lucide-react';
import { Quiz } from './Quiz';
import { ProductTaxonomyTools } from './tools/ProductTaxonomyTools';
import { SpiaTools } from './tools/SpiaTools';
import { SequenceRiskTools } from './tools/SequenceRiskTools';

export function ModuleView({ module, track, questions, onQuizComplete }) {
  const [tab, setTab] = useState('learn');
  const contentRef = useRef(null);

  // Allow in-content links to switch tabs via data-switch-tab attribute
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleClick = (e) => {
      const link = e.target.closest('[data-switch-tab]');
      if (link) {
        e.preventDefault();
        setTab(link.getAttribute('data-switch-tab'));
      }
    };
    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
          <span>{track?.name}</span>
          <ChevronRight size={16} />
          <span>Module {module.id}</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{module.title}</h1>
        <p className="text-slate-400">{module.description}</p>
        <div className="flex items-center gap-6 mt-3 text-sm">
          <span className="text-slate-500 flex items-center gap-1">
            <Clock size={16} />
            {module.duration}
          </span>
          <span className="text-slate-500">
            Difficulty: {'●'.repeat(module.difficulty)}{'○'.repeat(4 - module.difficulty)}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'learn', label: 'Learn' },
          { id: 'tools', label: 'Tools' },
          { id: 'quiz', label: 'Quiz' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              tab === t.id
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Learn Tab */}
      {tab === 'learn' && (
        <div>
          {/* Learning Objectives */}
          <div className="bg-slate-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Learning Objectives</h3>
            <ul className="space-y-2">
              {module.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Target size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="bg-slate-800 rounded-xl p-6 mb-6 prose"
            dangerouslySetInnerHTML={{ __html: module.content }}
          />

          {/* Key Takeaways */}
          {module.keyTakeaways && (
            <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl p-6 border border-blue-500/30 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap size={20} className="text-amber-400" />
                Key Takeaways
              </h3>
              <ul className="space-y-2">
                {module.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-400">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setTab('quiz')}
              className="flex-1 py-4 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Take Quiz
            </button>
          </div>
        </div>
      )}

      {/* Tools Tab */}
      {tab === 'tools' && (
        <div className="space-y-4">
          {module.id === 1 && <SequenceRiskTools />}
          {module.id === 2 && <ProductTaxonomyTools />}
          {module.id === 3 && <SpiaTools />}
          {module.id !== 1 && module.id !== 2 && module.id !== 3 && (
            <div className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
              <p className="text-slate-300 font-medium mb-2">Tools for this module are not built yet.</p>
              <p className="text-slate-400 text-sm">Modules 1, 2, and 3 include interactive tools right now.</p>
            </div>
          )}
        </div>
      )}

      {/* Quiz Tab */}
      {tab === 'quiz' && (
        <Quiz questions={questions} onComplete={onQuizComplete} />
      )}
    </div>
  );
}
