import React from 'react';
import { Code2, ArrowRight, Sparkles, Target, Users, BookOpen, Play, Lightbulb, Zap, Database, Calendar, Hash, Globe, Cpu, FileText, AlertTriangle, Settings, Layers, Terminal, Server, Shield, FolderOpen, Network, HardDrive, Monitor, Command, Menu, X, CheckCircle, Star, Mail, Phone, MapPin, MessageCircle, Award, Clock, DollarSign } from 'lucide-react';

interface HomePageProps {
  onNavigateToVariables: () => void;
  onNavigateToConditionals: () => void;
  onNavigateToLoops: () => void;
  onNavigateToFunctions: () => void;
  onNavigateToReturn: () => void;
  onNavigateToLinuxFileSystem: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToVariables, onNavigateToConditionals, onNavigateToLoops, onNavigateToFunctions, onNavigateToReturn, onNavigateToLinuxFileSystem }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const javascriptModules = [
    {
      title: "Core Language Keywords",
      description: "Variable declarations, control flow, functions, classes, modules, error handling",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Console Methods",
      description: "Logging, debugging, performance timing",
      icon: FileText,
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      title: "Array Methods",
      description: "Adding/removing elements, searching, transforming, iterating",
      icon: Database,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "String Methods",
      description: "Character manipulation, searching, case conversion, splitting/joining",
      icon: FileText,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Object Methods",
      description: "Property manipulation, object creation, enumeration",
      icon: Settings,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Math Object",
      description: "Mathematical operations, constants, random numbers",
      icon: Hash,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      title: "Date Methods",
      description: "Date/time creation, manipulation, formatting",
      icon: Calendar,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Number Methods",
      description: "Number parsing, validation, formatting",
      icon: Hash,
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "JSON Methods",
      description: "Serialization and deserialization",
      icon: Layers,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Promise Methods",
      description: "Asynchronous operations, promise handling",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "DOM Methods (Browser)",
      description: "Element selection, manipulation, event handling",
      icon: Globe,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Window Methods (Browser)",
      description: "Browser-specific functionality, timers, dialogs",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Array/Object Iteration",
      description: "Looping constructs for different data types",
      icon: Target,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    },
    {
      title: "Regular Expression",
      description: "Pattern matching and text processing",
      icon: FileText,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Error Handling",
      description: "Error types and exception management",
      icon: AlertTriangle,
      color: "from-orange-500 to-yellow-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Utility Functions",
      description: "URL encoding, code evaluation",
      icon: Settings,
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      title: "Modern ES6+ Features",
      description: "Arrow functions, template literals, destructuring, spread/rest",
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Common Operators",
      description: "Arithmetic, assignment, comparison, logical, bitwise",
      icon: Cpu,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  const linuxModules = [
    {
      title: "File System Commands",
      description: "ls, cd, pwd, mkdir, rmdir, cp, mv, rm, find, locate",
      icon: FolderOpen,
      color: "from-green-600 to-emerald-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Text Processing",
      description: "cat, grep, sed, awk, sort, uniq, cut, tr, head, tail",
      icon: FileText,
      color: "from-blue-600 to-cyan-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Process Management",
      description: "ps, top, htop, kill, killall, jobs, bg, fg, nohup",
      icon: Cpu,
      color: "from-purple-600 to-violet-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "System Information",
      description: "uname, whoami, id, uptime, df, du, free, lscpu, lsblk",
      icon: Monitor,
      color: "from-orange-600 to-red-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Network Commands",
      description: "ping, wget, curl, ssh, scp, netstat, ss, iptables",
      icon: Network,
      color: "from-teal-600 to-green-700",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "File Permissions",
      description: "chmod, chown, chgrp, umask, sudo, su, groups",
      icon: Shield,
      color: "from-red-600 to-pink-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Archive & Compression",
      description: "tar, gzip, gunzip, zip, unzip, 7z, compress, uncompress",
      icon: Database,
      color: "from-indigo-600 to-purple-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Package Management",
      description: "apt, yum, dnf, pacman, snap, flatpak, pip, npm",
      icon: Settings,
      color: "from-yellow-600 to-orange-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "System Services",
      description: "systemctl, service, crontab, at, mount, umount",
      icon: Server,
      color: "from-gray-600 to-slate-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      title: "Terminal & Shell",
      description: "bash, zsh, history, alias, which, type, echo, printf",
      icon: Terminal,
      color: "from-emerald-600 to-teal-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Text Editors",
      description: "vim, nano, emacs, ed, vi editor commands and shortcuts",
      icon: Command,
      color: "from-pink-600 to-rose-700",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Disk & Storage",
      description: "fdisk, lsblk, blkid, mkfs, fsck, dd, rsync",
      icon: HardDrive,
      color: "from-cyan-600 to-blue-700",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-200">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">zoxoj</h1>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Programming & Linux Learning Platform
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 py-20 max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg">
                <Terminal className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Programming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                Commands & Methods
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The complete interactive learning platform for JavaScript commands & methods and Linux terminal commands. 
              Master everything from core programming concepts to system administration through hands-on practice with live code examples.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={onNavigateToVariables}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">30 Complete Learning Modules</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">18</div>
                <div className="text-sm text-gray-600">JavaScript Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">20</div>
                <div className="text-sm text-gray-600">Linux Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Interactive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Free</div>
                <div className="text-sm text-gray-600">Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Tracks */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Complete Learning Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master both JavaScript programming and Linux system administration through interactive examples. 
              Each track includes live code editors, terminal simulators, and comprehensive explanations.
            </p>
          </div>

          {/* JavaScript Track */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">JavaScript Commands & Methods</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {javascriptModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div 
                    key={index}
                    className={`group p-6 rounded-2xl ${module.bgColor} border ${module.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 bg-white rounded-full text-xs font-medium">Coming Soon</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Linux Track */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Linux Terminal Commands</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linuxModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div 
                    key={index}
                    className={`group p-6 rounded-2xl ${module.bgColor} border ${module.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 bg-white rounded-full text-xs font-medium">Coming Soon</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Current Available Modules */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Learning Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Begin with our currently available JavaScript modules and master the fundamentals of programming commands and methods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Variable Declaration Commands</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master <code className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-mono">var</code>, 
                <code className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-mono mx-1">let</code>, and 
                <code className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-mono ml-1">const</code> with 
                interactive examples covering scoping, hoisting, and best practices.
              </p>
              <button
                onClick={onNavigateToVariables}
                className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Learn Variables</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Control Flow Commands</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn <code className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-mono">if</code>, 
                <code className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-mono mx-1">else</code>, 
                <code className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-mono ml-1">else if</code>, 
                and ternary operators with practical examples and best practices.
              </p>
              <button
                onClick={onNavigateToConditionals}
                className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Learn Conditionals</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loop Commands</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master <code className="px-2 py-1 bg-green-100 text-green-800 rounded font-mono">for</code>, 
                <code className="px-2 py-1 bg-green-100 text-green-800 rounded font-mono mx-1">while</code>, 
                <code className="px-2 py-1 bg-green-100 text-green-800 rounded font-mono ml-1">do...while</code>, 
                and iteration methods with hands-on examples and control flow techniques.
              </p>
              <button
                onClick={onNavigateToLoops}
                className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Learn Loops</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Function Declarations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master <code className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-mono">function</code> declarations, 
                expressions, <code className="px-2 py-1 bg-purple-100 text-purple-800 rounded font-mono mx-1">arrow functions</code>, 
                and advanced patterns like higher-order functions and closures.
              </p>
              <button
                onClick={onNavigateToFunctions}
                className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Learn Functions</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Return Statement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master the <code className="px-2 py-1 bg-orange-100 text-orange-800 rounded font-mono">return</code> statement 
                for function output control, early exits, and execution flow management with practical examples.
              </p>
              <button
                onClick={onNavigateToReturn}
                className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Learn Return</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About zoxoj</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're passionate about making programming and system administration accessible to everyone through interactive, hands-on learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Traditional programming education often lacks practical, interactive elements. We believe learning should be engaging, 
                immediate, and directly applicable. That's why we created zoxoj - a platform where you can learn by doing, 
                not just reading.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Interactive code examples you can modify and run</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Real terminal simulation for Linux command practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Comprehensive coverage from basics to advanced topics</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Lines of Code Practiced</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Commands Mastered</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Available Learning</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Free Forever</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose zoxoj?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                  <Play className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Learn by Doing</h4>
                <p className="text-gray-600">
                  Every concept includes interactive examples you can modify, run, and experiment with in real-time.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Practical Focus</h4>
                <p className="text-gray-600">
                  Learn skills you'll actually use in real development and system administration scenarios.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Instant Feedback</h4>
                <p className="text-gray-600">
                  See results immediately as you learn, with detailed explanations and error handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe quality education should be accessible to everyone. That's why zoxoj is completely free, forever.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Free Forever</h3>
                <div className="text-4xl font-bold text-white mb-2">$0</div>
                <p className="text-blue-100">No hidden fees, no subscriptions</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Complete JavaScript command reference</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Interactive Linux terminal simulator</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Live code editor with instant execution</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Comprehensive examples and explanations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Regular updates and new content</span>
                  </li>
                </ul>
                
                <button
                  onClick={onNavigateToVariables}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Start Learning Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              <strong>Why is it free?</strong> We believe in democratizing education and helping developers grow their skills 
              without financial barriers. Our platform is supported by the community and built with love for learning.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Community Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about learning with zoxoj
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What programming concepts does zoxoj cover?</h3>
              <p className="text-gray-600 leading-relaxed">
                zoxoj covers essential JavaScript programming concepts including variable declarations (var, let, const), 
                control flow (if/else statements), loops (for, while, do-while), functions, and the return statement. 
                We also provide comprehensive Linux terminal command training with 20+ essential commands.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do I need any prior programming experience?</h3>
              <p className="text-gray-600 leading-relaxed">
                No! zoxoj is designed for complete beginners. We start with the fundamentals and build up gradually. 
                Each concept includes detailed explanations, interactive examples, and practical exercises that you can 
                modify and experiment with.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How does the interactive learning work?</h3>
              <p className="text-gray-600 leading-relaxed">
                Every code example on zoxoj includes a live editor where you can modify the code and see results instantly. 
                Our Linux section features a realistic terminal simulator where you can practice commands safely. 
                No setup required - everything runs directly in your browser.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is zoxoj really free forever?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! We're committed to keeping zoxoj completely free. We believe quality programming education should be 
                accessible to everyone, regardless of their financial situation. There are no hidden fees, premium tiers, 
                or subscription plans.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I use zoxoj on mobile devices?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! zoxoj is fully responsive and works great on tablets and smartphones. The code editors and 
                terminal simulators are optimized for touch interfaces, making it easy to learn programming on the go.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Will you add more programming languages?</h3>
              <p className="text-gray-600 leading-relaxed">
                We're constantly expanding our content! While we currently focus on JavaScript and Linux commands, 
                we're planning to add Python, HTML/CSS, Git commands, and more advanced JavaScript topics. 
                Follow our updates to be notified when new content is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions, suggestions, or feedback? We'd love to hear from you and help improve your learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">hello@zoxoj.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Support</h4>
                    <p className="text-gray-600">Join our Discord community</p>
                    <p className="text-sm text-gray-500">Get help from other learners and mentors</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Support Hours</h4>
                    <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
                    <p className="text-sm text-gray-500">Community support available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <button
                    onClick={onNavigateToVariables}
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    Start Learning JavaScript →
                  </button>
                  <button
                    onClick={onNavigateToLinuxFileSystem}
                    className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                  >
                    Start Learning Linux →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="content">Content Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Programming & System Administration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of developers learning JavaScript and Linux through interactive, hands-on practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onNavigateToVariables}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Start Learning JavaScript</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={onNavigateToLinuxFileSystem}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-green-700"
            >
              <Terminal className="w-5 h-5" />
              <span>Start Learning Linux</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Interactive Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Live Code Examples</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Instant Feedback</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Programming Commands & Methods</h3>
                <p className="text-gray-400 text-sm">Interactive Learning Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS • 
              <span className="text-blue-400">Open Source</span> • 
              Made for developers learning programming fundamentals
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;