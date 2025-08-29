import React, { useState } from 'react';
import { Folder, File, Terminal, ChevronRight, Home, Play } from 'lucide-react';

interface FileSystemNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  permissions?: string;
  owner?: string;
  size?: string;
  modified?: string;
  children?: FileSystemNode[];
}

interface LinuxCommandSimulatorProps {
  title: string;
  description: string;
  initialFileSystem: FileSystemNode;
  commands: string[];
  color: string;
  onCommandExecute: (command: string, currentPath: string[], fileSystem: FileSystemNode) => {
    output: string;
    newPath?: string[];
    newFileSystem?: FileSystemNode;
  };
}

const LinuxCommandSimulator: React.FC<LinuxCommandSimulatorProps> = ({
  title,
  description,
  initialFileSystem,
  commands,
  color,
  onCommandExecute
}) => {
  const [fileSystem, setFileSystem] = useState<FileSystemNode>(initialFileSystem);
  const [currentPath, setCurrentPath] = useState<string[]>(['home', 'user']);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>(['Welcome! Try the commands below.']);
  const [currentCommand, setCurrentCommand] = useState('');

  const getCurrentDirectory = (): FileSystemNode => {
    let current = fileSystem;
    for (const segment of currentPath) {
      const child = current.children?.find(c => c.name === segment && c.type === 'directory');
      if (child) {
        current = child;
      }
    }
    return current;
  };

  const getPathString = (): string => {
    return '/' + currentPath.join('/');
  };

  const executeCommand = () => {
    if (!currentCommand.trim()) return;

    const result = onCommandExecute(currentCommand.trim(), currentPath, fileSystem);
    
    setOutput(prev => [...prev, `$ ${currentCommand}`, result.output]);
    setCommandHistory(prev => [...prev, currentCommand]);
    
    if (result.newPath !== undefined) {
      setCurrentPath(result.newPath);
    }
    
    if (result.newFileSystem) {
      setFileSystem(result.newFileSystem);
    }
    
    setCurrentCommand('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const renderFileTree = (node: FileSystemNode, depth = 0, path: string[] = []): React.ReactNode => {
    const currentNodePath = [...path, node.name];
    const isCurrentDir = JSON.stringify(currentNodePath.slice(1)) === JSON.stringify(currentPath);
    
    return (
      <div key={node.name + depth} className={`${depth > 0 ? 'ml-4' : ''}`}>
        <div className={`flex items-center space-x-2 py-1 px-2 rounded ${isCurrentDir ? 'bg-blue-100 border border-blue-300' : ''}`}>
          {node.type === 'directory' ? (
            <Folder className={`w-4 h-4 ${isCurrentDir ? 'text-blue-700' : 'text-blue-600'}`} />
          ) : (
            <File className="w-4 h-4 text-gray-600" />
          )}
          <span className={`text-sm ${isCurrentDir ? 'font-bold text-blue-800' : 'text-gray-700'}`}>
            {node.name}
            {node.type === 'directory' && '/'}
          </span>
          {node.size && (
            <span className="text-xs text-gray-500 ml-auto">{node.size}</span>
          )}
        </div>
        {node.children && (
          <div className="ml-2">
            {node.children.map(child => renderFileTree(child, depth + 1, currentNodePath))}
          </div>
        )}
      </div>
    );
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; button: string; accent: string }> = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700', accent: 'text-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700', accent: 'text-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700', accent: 'text-purple-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', button: 'bg-orange-600 hover:bg-orange-700', accent: 'text-orange-600' },
      red: { bg: 'bg-red-50', border: 'border-red-200', button: 'bg-red-600 hover:bg-red-700', accent: 'text-red-600' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', button: 'bg-indigo-600 hover:bg-indigo-700', accent: 'text-indigo-600' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', button: 'bg-teal-600 hover:bg-teal-700', accent: 'text-teal-600' },
      cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', button: 'bg-cyan-600 hover:bg-cyan-700', accent: 'text-cyan-600' },
      yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', button: 'bg-yellow-600 hover:bg-yellow-700', accent: 'text-yellow-600' },
      emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', button: 'bg-emerald-600 hover:bg-emerald-700', accent: 'text-emerald-600' },
      violet: { bg: 'bg-violet-50', border: 'border-violet-200', button: 'bg-violet-600 hover:bg-violet-700', accent: 'text-violet-600' }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className={`rounded-xl shadow-lg border ${colorClasses.border} overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
      <div className={`${colorClasses.bg} px-6 py-4 border-b ${colorClasses.border}`}>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Terminal */}
        <div className="bg-gray-900 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Terminal</span>
          </div>
          
          {/* Current Path */}
          <div className="mb-4 p-2 bg-gray-800 rounded text-green-400 text-sm font-mono">
            user@linux:{getPathString()}$
          </div>
          
          {/* Output */}
          <div className="bg-black rounded p-4 h-64 overflow-y-auto mb-4">
            {output.map((line, index) => (
              <div key={index} className={`text-sm font-mono ${
                line.startsWith('$') ? 'text-green-400' : 'text-gray-300'
              }`}>
                {line}
              </div>
            ))}
          </div>
          
          {/* Command Input */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-green-400 font-mono text-sm">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-gray-800 text-gray-300 text-sm font-mono p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a command..."
            />
            <button
              onClick={executeCommand}
              className={`px-3 py-2 ${colorClasses.button} text-white text-sm font-medium rounded transition-colors duration-200`}
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
          
          {/* Available Commands */}
          <div>
            <div className="text-xs text-gray-400 mb-2">Try these commands:</div>
            <div className="flex flex-wrap gap-2">
              {commands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setCurrentCommand(cmd)}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-mono rounded transition-colors duration-200"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* File System Visualization */}
        <div className="bg-slate-50 p-6 border-l border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <Folder className={`w-4 h-4 ${colorClasses.accent}`} />
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">File System</span>
          </div>
          
          <div className="bg-white rounded border border-gray-200 p-4 h-80 overflow-y-auto">
            {renderFileTree(fileSystem)}
          </div>
          
          {/* Current Location */}
          <div className={`mt-4 p-3 ${colorClasses.bg} rounded border ${colorClasses.border}`}>
            <div className="flex items-center space-x-2 text-sm">
              <Home className={`w-4 h-4 ${colorClasses.accent}`} />
              <span className="text-gray-600">Current directory:</span>
              <span className={`font-mono ${colorClasses.accent} font-semibold`}>{getPathString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxCommandSimulator;