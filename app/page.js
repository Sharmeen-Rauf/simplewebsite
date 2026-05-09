'use client';
import { useEffect } from 'react';
import { SystemProvider, useSystem, MODULES } from '@/components/SystemContext';
import NeuralDashboard from '@/components/NeuralDashboard';

function HomeApp() {
  const { navigateTo } = useSystem();
  useEffect(() => { navigateTo(MODULES.IDENTITY); }, []);
  return <NeuralDashboard />;
}

export default function Home() {
  return <HomeApp />;
}
