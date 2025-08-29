import React, { useState } from 'react';
import { Play, Copy, Check, Edit3, RotateCcw } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  code: string;
  explanation: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, code, explanation }) => {
  const [currentCode, setCurrentCode] = useState<string>(code);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    
    // Capture console.log output
    const originalLog = console.log;
    const logs: string[] = [];
    
    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
    };

    try {
      // Create a function to execute the code safely
      const executeCode = new Function(currentCode);
      executeCode();
      setOutput(logs.join('\n') || 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      console.log = originalLog;
      setTimeout(() => setIsRunning(false), 300);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code');
    }
  };

  const resetCode = () => {
    setCurrentCode(code);
    setOutput('');
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{explanation}</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative">
          <div className="bg-gray-900 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Code</span>
              <div className="flex space-x-2">
                <button
                  onClick={toggleEdit}
                  className={`p-2 transition-colors duration-200 rounded-md ${
                    isEditing 
                      ? 'text-blue-400 bg-gray-700' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  title={isEditing ? 'Stop editing' : 'Edit code'}
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={resetCode}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700"
                  title="Reset to original"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={copyCode}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  <Play className={`w-4 h-4 ${isRunning ? 'animate-pulse' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>
            </div>
            {isEditing ? (
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                className="w-full h-64 bg-gray-800 text-gray-300 text-sm font-mono p-4 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                spellCheck={false}
              />
            ) : (
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{currentCode}</code>
              </pre>
            )}
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 border-l border-gray-200 lg:border-l-0 lg:border-t-0 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Output</span>
          </div>
          <div className="bg-white rounded-md p-4 border border-gray-200 min-h-[100px]">
            {output ? (
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{output}</pre>
            ) : (
              <p className="text-gray-500 text-sm italic">Click "Run" to see the output</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExample;