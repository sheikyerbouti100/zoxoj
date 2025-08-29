import React, { useState } from 'react';
import { Code2, Play, BookOpen, ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import VarSection from './components/VarSection';
import LetSection from './components/LetSection';
import ConstSection from './components/ConstSection';
import ConditionalsSection from './components/ConditionalsSection';
import LoopsSection from './components/LoopsSection';
import FunctionsSection from './components/FunctionsSection';
import ReturnSection from './components/ReturnSection';
import LinuxCommandsSection from './components/linux/LinuxCommandsSection';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'variables' | 'conditionals' | 'loops' | 'functions' | 'return' | 'linux-filesystem'>('home');
  const [activeSection, setActiveSection] = useState<'var' | 'let' | 'const'>('var');

  const renderVariableSection = () => {
    switch (activeSection) {
      case 'var':
        return <VarSection />;
      case 'let':
        return <LetSection />;
      case 'const':
        return <ConstSection />;
      default:
        return <VarSection />;
    }
  };

  if (currentView === 'home') {
    return (
      <HomePage 
        onNavigateToVariables={() => setCurrentView('variables')}
        onNavigateToConditionals={() => setCurrentView('conditionals')}
        onNavigateToLoops={() => setCurrentView('loops')}
        onNavigateToFunctions={() => setCurrentView('functions')}
        onNavigateToReturn={() => setCurrentView('return')}
        onNavigateToLinuxFileSystem={() => setCurrentView('linux-filesystem')}
        onNavigateToLinuxFileSystem={() => setCurrentView('linux-filesystem')}
      />
    );
  }

  if (currentView === 'linux-filesystem') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Essential Linux Commands</h1>
            <p className="text-gray-600">Master the 20 most important Linux terminal commands with interactive practice</p>
          </div>
          <LinuxCommandsSection />
        </div>
      </div>
    );
  }
  if (currentView === 'return') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Return Statement</h1>
            <p className="text-gray-600">Master return statements for function output control and execution flow</p>
          </div>
          <ReturnSection />
        </div>
      </div>
    );
  }

  if (currentView === 'functions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Function Declarations</h1>
            <p className="text-gray-600">Master function declarations, expressions, arrow functions, and advanced patterns</p>
          </div>
          <FunctionsSection />
        </div>
      </div>
    );
  }

  if (currentView === 'loops') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Loop Commands</h1>
            <p className="text-gray-600">Master for, while, and do...while loops for repetitive operations</p>
          </div>
          <LoopsSection />
        </div>
      </div>
    );
  }

  if (currentView === 'conditionals') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Conditional Statements</h1>
            <p className="text-gray-600">Master if, else, and else if statements to control program flow</p>
          </div>
          <ConditionalsSection />
        </div>
      </div>
    );
  }

  if (currentView === 'linux-filesystem') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        <Header onNavigateHome={() => setCurrentView('home')} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Linux File System Commands</h1>
            <p className="text-gray-600">Master essential file system navigation and management commands</p>
          </div>
          <LinuxFileSystemSection />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onNavigateHome={() => setCurrentView('home')} />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="mt-8">
          {renderVariableSection()}
        </div>
      </div>
    </div>
  );
}

export default App;