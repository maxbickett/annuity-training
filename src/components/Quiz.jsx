import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

function clampPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(100, Math.round(number)));
}

export function Quiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-8 text-center">
        <p className="text-slate-400">No quiz questions available for this module yet.</p>
      </div>
    );
  }

  const question = questions[currentIndex];

  const handleSubmit = () => {
    if (selected === null || showResult) return;
    setShowResult(true);
    if (selected === question.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      const finalScore = clampPercent((score / questions.length) * 100);
      setFinished(true);
      onComplete?.(finalScore);
    }
  };

  if (finished) {
    const finalScore = clampPercent((score / questions.length) * 100);
    const passed = finalScore >= 70;

    return (
      <div className="bg-slate-800 rounded-xl p-8 text-center">
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
          {passed ? (
            <CheckCircle size={40} className="text-emerald-400" />
          ) : (
            <XCircle size={40} className="text-amber-400" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {passed ? 'Excellent Work!' : 'Keep Learning'}
        </h3>
        <p className="text-slate-400 mb-4">
          You scored {finalScore}% ({score}/{questions.length} correct)
        </p>
        <p className={`text-sm ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
          {passed ? 'You\'ve mastered this module!' : 'You need 70% to advance. Review the material and try again.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-slate-400 text-sm">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < currentIndex ? 'bg-blue-500' : i === currentIndex ? 'bg-blue-400' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-6">{question.q}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => !showResult && setSelected(i)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              showResult
                ? i === question.correct
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                  : i === selected
                    ? 'border-red-500 bg-red-500/20 text-red-300'
                    : 'border-slate-700 bg-slate-700/50 text-slate-400'
                : selected === i
                  ? 'border-blue-500 bg-blue-500/20 text-white'
                  : 'border-slate-700 bg-slate-700/50 text-slate-300 hover:border-slate-500'
            }`}
          >
            <span className="font-medium mr-3">{String.fromCharCode(65 + i)}.</span>
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`mb-6 p-4 rounded-lg ${selected === question.correct ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
          <p className={`font-medium ${selected === question.correct ? 'text-emerald-300' : 'text-amber-300'}`}>
            {selected === question.correct ? 'Correct!' : 'Not quite.'}
          </p>
          <p className="text-slate-300 mt-2 text-sm">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
