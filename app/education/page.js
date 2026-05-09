'use client';
import { useEffect } from 'react';
import { useSystem, MODULES } from '@/components/SystemContext';
import NeuralDashboard from '@/components/NeuralDashboard';

export default function EducationPage() {
  const { navigateTo } = useSystem();
  useEffect(() => { navigateTo(MODULES.EXPERIENCE); }, []);
  return <NeuralDashboard />;
}
