import React from 'react';
import { Code2, ArrowRight, Sparkles, Target, Users, BookOpen, Play, Lightbulb, Zap, Database, Calendar, Hash, Globe, Cpu, FileText, AlertTriangle, Settings, Layers, Terminal, Server, Shield, FolderOpen, Network, HardDrive, Monitor, Command } from 'lucide-react';

interface HomePageProps {
  onNavigateToVariables: () => void;
  onNavigateToConditionals: () => void;
  onNavigateToLoops: () => void;
  onNavigateToFunctions: () => void;
  onNavigateToReturn: () => void;
  onNavigateToLinuxFileSystem: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToVariables, onNavigateToConditionals, onNavigateToLoops, onNavigateToFunctions, onNavigateToReturn, onNavigateToLinuxFileSystem }) => {
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
              <a
                href="https://github.com/yourusername/programming-commands-methods"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium group-hover:text-blue-400 transition-colors duration-200">View on GitHub</span>
              </button>
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