import { useState, useEffect, useMemo } from 'react';

const STORAGE_KEY = 'annuity-training-progress';

function clampScore(score) {
  const value = Number(score);
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function sanitizeProgress(rawProgress, totalModules) {
  if (!rawProgress || typeof rawProgress !== 'object') return {};

  const sanitized = {};
  Object.entries(rawProgress).forEach(([key, value]) => {
    const moduleId = Number(key);
    if (!Number.isInteger(moduleId) || moduleId < 1 || moduleId > totalModules) return;
    const mastery = clampScore(value?.mastery);
    sanitized[moduleId] = {
      mastery,
      completed: mastery >= 70
    };
  });
  return sanitized;
}

export function useProgress(totalModules) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      return sanitizeProgress(saved, totalModules);
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (moduleId, score) => {
    const safeScore = clampScore(score);
    setProgress(prev => ({
      ...prev,
      [moduleId]: {
        mastery: Math.max(prev[moduleId]?.mastery || 0, safeScore),
        completed: safeScore >= 70
      }
    }));
  };

  const isLocked = () => false;

  const totalMastery = useMemo(() => {
    const completed = Object.entries(progress).filter(([moduleId, item]) => {
      const id = Number(moduleId);
      return Number.isInteger(id) && id >= 1 && id <= totalModules && item?.completed;
    }).length;
    if (totalModules <= 0) return 0;
    return Math.max(0, Math.min(100, Math.round((completed / totalModules) * 100)));
  }, [progress, totalModules]);

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    updateProgress,
    isLocked,
    totalMastery,
    resetProgress
  };
}
