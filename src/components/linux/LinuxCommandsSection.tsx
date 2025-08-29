import React from 'react';
import LinuxCommandSimulator from './LinuxCommandSimulator';
import ConceptCard from '../ConceptCard';

const LinuxCommandsSection: React.FC = () => {
  // Initial file system with more comprehensive structure
  const createInitialFileSystem = () => ({
    name: 'root',
    type: 'directory' as const,
    content: '',
    permissions: 'drwxr-xr-x',
    owner: 'root',
    size: '4096',
    modified: '2024-01-15 10:30',
    children: [
      {
        name: 'home',
        type: 'directory' as const,
        content: '',
        permissions: 'drwxr-xr-x',
        owner: 'root',
        size: '4096',
        modified: '2024-01-15 09:00',
        children: [
          {
            name: 'user',
            type: 'directory' as const,
            content: '',
            permissions: 'drwxr-xr-x',
            owner: 'user',
            size: '4096',
            modified: '2024-01-15 09:15',
            children: [
              {
                name: 'documents',
                type: 'directory' as const,
                content: '',
                permissions: 'drwxr-xr-x',
                owner: 'user',
                size: '4096',
                modified: '2024-01-15 08:30',
                children: [
                  {
                    name: 'report.txt',
                    type: 'file' as const,
                    content: 'Annual Report\n\nThis is the annual report for 2024.\nSales increased by 15% this year.\nProfit margins improved significantly.',
                    permissions: '-rw-r--r--',
                    owner: 'user',
                    size: '156',
                    modified: '2024-01-14 16:45'
                  },
                  {
                    name: 'notes.md',
                    type: 'file' as const,
                    content: '# Meeting Notes\n\n## Project Discussion\n- Review timeline\n- Assign tasks\n- Set deadlines\n\n## Action Items\n1. Complete design mockups\n2. Setup development environment\n3. Begin coding phase',
                    permissions: '-rw-r--r--',
                    owner: 'user',
                    size: '234',
                    modified: '2024-01-15 11:20'
                  }
                ]
              },
              {
                name: 'downloads',
                type: 'directory' as const,
                content: '',
                permissions: 'drwxr-xr-x',
                owner: 'user',
                size: '4096',
                modified: '2024-01-15 07:45',
                children: [
                  {
                    name: 'setup.sh',
                    type: 'file' as const,
                    content: '#!/bin/bash\necho "Setting up environment..."\nmkdir -p ~/projects\ncd ~/projects\necho "Setup complete!"',
                    permissions: '-rwxr-xr-x',
                    owner: 'user',
                    size: '98',
                    modified: '2024-01-13 14:20'
                  }
                ]
              },
              {
                name: 'projects',
                type: 'directory' as const,
                content: '',
                permissions: 'drwxr-xr-x',
                owner: 'user',
                size: '4096',
                modified: '2024-01-15 12:00',
                children: []
              },
              {
                name: 'config.txt',
                type: 'file' as const,
                content: 'user_name=alice\ntheme=dark\nlanguage=en\nauto_save=true',
                permissions: '-rw-r--r--',
                owner: 'user',
                size: '58',
                modified: '2024-01-15 10:15'
              }
            ]
          }
        ]
      },
      {
        name: 'var',
        type: 'directory' as const,
        content: '',
        permissions: 'drwxr-xr-x',
        owner: 'root',
        size: '4096',
        modified: '2024-01-15 08:00',
        children: [
          {
            name: 'log',
            type: 'directory' as const,
            content: '',
            permissions: 'drwxr-xr-x',
            owner: 'root',
            size: '4096',
            modified: '2024-01-15 09:30',
            children: [
              {
                name: 'system.log',
                type: 'file' as const,
                content: '[2024-01-15 09:30:15] System started\n[2024-01-15 09:30:16] Loading modules\n[2024-01-15 09:30:17] System ready',
                permissions: '-rw-r--r--',
                owner: 'root',
                size: '145',
                modified: '2024-01-15 09:30'
              }
            ]
          },
          {
            name: 'tmp',
            type: 'directory' as const,
            content: '',
            permissions: 'drwxrwxrwx',
            owner: 'root',
            size: '4096',
            modified: '2024-01-15 11:45',
            children: []
          }
        ]
      },
      {
        name: 'etc',
        type: 'directory' as const,
        content: '',
        permissions: 'drwxr-xr-x',
        owner: 'root',
        size: '4096',
        modified: '2024-01-15 08:15',
        children: [
          {
            name: 'hosts',
            type: 'file' as const,
            content: '127.0.0.1 localhost\n::1 localhost\n127.0.1.1 mycomputer',
            permissions: '-rw-r--r--',
            owner: 'root',
            size: '67',
            modified: '2024-01-10 15:30'
          },
          {
            name: 'passwd',
            type: 'file' as const,
            content: 'root:x:0:0:root:/root:/bin/bash\nuser:x:1000:1000:User:/home/user:/bin/bash',
            permissions: '-rw-r--r--',
            owner: 'root',
            size: '89',
            modified: '2024-01-12 10:20'
          }
        ]
      }
    ]
  });

  const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

  // Command handlers for each of the 20 commands
  const createCommandHandlers = () => {
    // 1. ls command
    const lsHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      const flags = parts.slice(1).filter(p => p.startsWith('-'));
      const hasLongFormat = flags.includes('-l');
      const hasAll = flags.includes('-a');
      
      if (cmd !== 'ls') {
        return { output: `Command '${cmd}' not found. Try: ls [-l] [-a]` };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      if (!current.children || current.children.length === 0) {
        return { output: '(empty directory)' };
      }

      let items = current.children;
      if (!hasAll) {
        items = items.filter((item: any) => !item.name.startsWith('.'));
      }

      if (hasLongFormat) {
        const output = items.map((item: any) => {
          const type = item.type === 'directory' ? 'd' : '-';
          const perms = item.permissions || (item.type === 'directory' ? 'rwxr-xr-x' : 'rw-r--r--');
          const owner = item.owner || 'user';
          const size = item.size || (item.type === 'directory' ? '4096' : '0');
          const modified = item.modified || '2024-01-15 12:00';
          return `${type}${perms} ${owner} ${size} ${modified} ${item.name}`;
        }).join('\n');
        return { output: output };
      } else {
        const output = items.map((item: any) => {
          return item.type === 'directory' ? `${item.name}/` : item.name;
        }).join('  ');
        return { output: output };
      }
    };

    // 2. cd command
    const cdHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'cd') {
        return { output: `Command '${cmd}' not found. Try: cd <directory>` };
      }

      const target = parts[1];
      if (!target || target === '~') {
        return { output: '', newPath: ['home', 'user'] };
      }

      if (target === '/') {
        return { output: '', newPath: [] };
      }

      if (target === '..') {
        if (currentPath.length === 0) {
          return { output: 'Already at root directory' };
        }
        return { output: '', newPath: currentPath.slice(0, -1) };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const targetDir = current.children?.find((c: any) => c.name === target && c.type === 'directory');
      if (!targetDir) {
        return { output: `cd: ${target}: No such file or directory` };
      }

      return { output: '', newPath: [...currentPath, target] };
    };

    // 3. pwd command
    const pwdHandler = (command: string, currentPath: string[]) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'pwd') {
        return { output: `Command '${cmd}' not found. Try: pwd` };
      }

      return { output: '/' + currentPath.join('/') };
    };

    // 4. mkdir command
    const mkdirHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'mkdir') {
        return { output: `Command '${cmd}' not found. Try: mkdir <directory>` };
      }

      const dirName = parts[1];
      if (!dirName) {
        return { output: 'Usage: mkdir <directory>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      if (current.children?.find((c: any) => c.name === dirName)) {
        return { output: `mkdir: cannot create directory '${dirName}': File exists` };
      }

      if (!current.children) {
        current.children = [];
      }

      current.children.push({
        name: dirName,
        type: 'directory',
        content: '',
        permissions: 'drwxr-xr-x',
        owner: 'user',
        size: '4096',
        modified: new Date().toISOString().slice(0, 16).replace('T', ' '),
        children: []
      });

      return { output: '', newFileSystem };
    };

    // 5. rmdir command
    const rmdirHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'rmdir') {
        return { output: `Command '${cmd}' not found. Try: rmdir <directory>` };
      }

      const dirName = parts[1];
      if (!dirName) {
        return { output: 'Usage: rmdir <directory>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const targetIndex = current.children?.findIndex((c: any) => c.name === dirName && c.type === 'directory');
      if (targetIndex === undefined || targetIndex === -1) {
        return { output: `rmdir: failed to remove '${dirName}': No such file or directory` };
      }

      const targetDir = current.children[targetIndex];
      if (targetDir.children && targetDir.children.length > 0) {
        return { output: `rmdir: failed to remove '${dirName}': Directory not empty` };
      }

      current.children.splice(targetIndex, 1);
      return { output: '', newFileSystem };
    };

    // 6. cat command
    const catHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'cat') {
        return { output: `Command '${cmd}' not found. Try: cat <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: cat <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `cat: ${fileName}: No such file or directory` };
      }

      return { output: file.content || '(empty file)' };
    };

    // 7. touch command
    const touchHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'touch') {
        return { output: `Command '${cmd}' not found. Try: touch <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: touch <filename>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const existingFile = current.children?.find((c: any) => c.name === fileName);
      if (existingFile) {
        existingFile.modified = new Date().toISOString().slice(0, 16).replace('T', ' ');
        return { output: '', newFileSystem };
      }

      if (!current.children) {
        current.children = [];
      }

      current.children.push({
        name: fileName,
        type: 'file',
        content: '',
        permissions: '-rw-r--r--',
        owner: 'user',
        size: '0',
        modified: new Date().toISOString().slice(0, 16).replace('T', ' ')
      });

      return { output: '', newFileSystem };
    };

    // 8. rm command
    const rmHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'rm') {
        return { output: `Command '${cmd}' not found. Try: rm <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: rm <filename>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const targetIndex = current.children?.findIndex((c: any) => c.name === fileName && c.type === 'file');
      if (targetIndex === undefined || targetIndex === -1) {
        return { output: `rm: cannot remove '${fileName}': No such file or directory` };
      }

      current.children.splice(targetIndex, 1);
      return { output: '', newFileSystem };
    };

    // 9. cp command
    const cpHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'cp') {
        return { output: `Command '${cmd}' not found. Try: cp <source> <destination>` };
      }

      const source = parts[1];
      const dest = parts[2];
      if (!source || !dest) {
        return { output: 'Usage: cp <source> <destination>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const sourceFile = current.children?.find((c: any) => c.name === source && c.type === 'file');
      if (!sourceFile) {
        return { output: `cp: cannot stat '${source}': No such file or directory` };
      }

      if (current.children?.find((c: any) => c.name === dest)) {
        return { output: `cp: '${dest}' already exists` };
      }

      const copiedFile = { ...sourceFile, name: dest };
      current.children.push(copiedFile);

      return { output: '', newFileSystem };
    };

    // 10. mv command
    const mvHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'mv') {
        return { output: `Command '${cmd}' not found. Try: mv <source> <destination>` };
      }

      const source = parts[1];
      const dest = parts[2];
      if (!source || !dest) {
        return { output: 'Usage: mv <source> <destination>' };
      }

      const newFileSystem = deepClone(fileSystem);
      let current = newFileSystem;
      
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const sourceIndex = current.children?.findIndex((c: any) => c.name === source);
      if (sourceIndex === undefined || sourceIndex === -1) {
        return { output: `mv: cannot stat '${source}': No such file or directory` };
      }

      if (current.children?.find((c: any) => c.name === dest)) {
        return { output: `mv: '${dest}' already exists` };
      }

      const sourceItem = current.children[sourceIndex];
      sourceItem.name = dest;

      return { output: '', newFileSystem };
    };

    // 11. find command (simplified)
    const findHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'find') {
        return { output: `Command '${cmd}' not found. Try: find <path> -name <pattern>` };
      }

      const searchPath = parts[1] || '.';
      const nameFlag = parts[2];
      const pattern = parts[3];

      if (nameFlag !== '-name' || !pattern) {
        return { output: 'Usage: find <path> -name <pattern>' };
      }

      const results: string[] = [];
      
      const searchRecursive = (node: any, path: string) => {
        if (node.name.includes(pattern.replace('*', ''))) {
          results.push(path + '/' + node.name);
        }
        if (node.children) {
          for (const child of node.children) {
            searchRecursive(child, path + '/' + node.name);
          }
        }
      };

      let startNode = fileSystem;
      let startPath = '';
      
      if (searchPath === '.') {
        for (const segment of currentPath) {
          startNode = startNode.children?.find((c: any) => c.name === segment && c.type === 'directory');
          startPath += '/' + segment;
        }
      }

      if (startNode.children) {
        for (const child of startNode.children) {
          searchRecursive(child, startPath);
        }
      }

      return { output: results.length > 0 ? results.join('\n') : 'No files found' };
    };

    // 12. grep command (simplified)
    const grepHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'grep') {
        return { output: `Command '${cmd}' not found. Try: grep <pattern> <filename>` };
      }

      const pattern = parts[1];
      const fileName = parts[2];
      
      if (!pattern || !fileName) {
        return { output: 'Usage: grep <pattern> <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `grep: ${fileName}: No such file or directory` };
      }

      const lines = (file.content || '').split('\n');
      const matches = lines.filter(line => line.includes(pattern));
      
      return { output: matches.length > 0 ? matches.join('\n') : `grep: no matches found for '${pattern}'` };
    };

    // 13. head command
    const headHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'head') {
        return { output: `Command '${cmd}' not found. Try: head <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: head <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `head: cannot open '${fileName}' for reading: No such file or directory` };
      }

      const lines = (file.content || '').split('\n');
      const firstTen = lines.slice(0, 10);
      
      return { output: firstTen.join('\n') };
    };

    // 14. tail command
    const tailHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'tail') {
        return { output: `Command '${cmd}' not found. Try: tail <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: tail <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `tail: cannot open '${fileName}' for reading: No such file or directory` };
      }

      const lines = (file.content || '').split('\n');
      const lastTen = lines.slice(-10);
      
      return { output: lastTen.join('\n') };
    };

    // 15. echo command
    const echoHandler = (command: string) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'echo') {
        return { output: `Command '${cmd}' not found. Try: echo <text>` };
      }

      const text = parts.slice(1).join(' ');
      return { output: text };
    };

    // 16. wc command
    const wcHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'wc') {
        return { output: `Command '${cmd}' not found. Try: wc <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: wc <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `wc: ${fileName}: No such file or directory` };
      }

      const content = file.content || '';
      const lines = content.split('\n').length;
      const words = content.split(/\s+/).filter(w => w.length > 0).length;
      const chars = content.length;

      return { output: `${lines} ${words} ${chars} ${fileName}` };
    };

    // 17. sort command
    const sortHandler = (command: string, currentPath: string[], fileSystem: any) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'sort') {
        return { output: `Command '${cmd}' not found. Try: sort <filename>` };
      }

      const fileName = parts[1];
      if (!fileName) {
        return { output: 'Usage: sort <filename>' };
      }

      let current = fileSystem;
      for (const segment of currentPath) {
        current = current.children?.find((c: any) => c.name === segment && c.type === 'directory');
        if (!current) {
          return { output: 'Error: Invalid current directory' };
        }
      }

      const file = current.children?.find((c: any) => c.name === fileName && c.type === 'file');
      if (!file) {
        return { output: `sort: ${fileName}: No such file or directory` };
      }

      const lines = (file.content || '').split('\n').filter(line => line.trim());
      const sorted = lines.sort();
      
      return { output: sorted.join('\n') };
    };

    // 18. ps command (simplified)
    const psHandler = (command: string) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'ps') {
        return { output: `Command '${cmd}' not found. Try: ps` };
      }

      const processes = [
        'PID TTY          TIME CMD',
        '1   pts/0    00:00:01 bash',
        '123 pts/0    00:00:00 node',
        '456 pts/0    00:00:02 vim',
        '789 pts/0    00:00:00 ps'
      ];

      return { output: processes.join('\n') };
    };

    // 19. whoami command
    const whoamiHandler = (command: string) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'whoami') {
        return { output: `Command '${cmd}' not found. Try: whoami` };
      }

      return { output: 'user' };
    };

    // 20. date command
    const dateHandler = (command: string) => {
      const parts = command.trim().split(' ');
      const cmd = parts[0];
      
      if (cmd !== 'date') {
        return { output: `Command '${cmd}' not found. Try: date` };
      }

      const now = new Date();
      return { output: now.toString() };
    };

    return {
      lsHandler,
      cdHandler,
      pwdHandler,
      mkdirHandler,
      rmdirHandler,
      catHandler,
      touchHandler,
      rmHandler,
      cpHandler,
      mvHandler,
      findHandler,
      grepHandler,
      headHandler,
      tailHandler,
      echoHandler,
      wcHandler,
      sortHandler,
      psHandler,
      whoamiHandler,
      dateHandler
    };
  };

  const handlers = createCommandHandlers();

  const commandApps = [
    {
      title: 'ls - List Directory Contents',
      description: 'List files and directories with detailed information using various flags',
      commands: ['ls', 'ls -l', 'ls -a', 'ls -la'],
      handler: handlers.lsHandler,
      color: 'blue'
    },
    {
      title: 'cd - Change Directory',
      description: 'Navigate between directories using relative and absolute paths',
      commands: ['cd home', 'cd user', 'cd ..', 'cd /', 'cd ~'],
      handler: handlers.cdHandler,
      color: 'green'
    },
    {
      title: 'pwd - Print Working Directory',
      description: 'Display the current directory path',
      commands: ['pwd'],
      handler: handlers.pwdHandler,
      color: 'purple'
    },
    {
      title: 'mkdir - Make Directory',
      description: 'Create new directories in the current location',
      commands: ['mkdir newdir', 'mkdir projects', 'mkdir temp'],
      handler: handlers.mkdirHandler,
      color: 'orange'
    },
    {
      title: 'rmdir - Remove Directory',
      description: 'Remove empty directories (only works on empty directories)',
      commands: ['rmdir temp', 'rmdir newdir'],
      handler: handlers.rmdirHandler,
      color: 'red'
    },
    {
      title: 'cat - Display File Contents',
      description: 'Display the entire contents of text files',
      commands: ['cat config.txt', 'cat report.txt', 'cat notes.md'],
      handler: handlers.catHandler,
      color: 'indigo'
    },
    {
      title: 'touch - Create/Update Files',
      description: 'Create new empty files or update file timestamps',
      commands: ['touch newfile.txt', 'touch test.log', 'touch config.txt'],
      handler: handlers.touchHandler,
      color: 'teal'
    },
    {
      title: 'rm - Remove Files',
      description: 'Delete files from the file system',
      commands: ['rm config.txt', 'rm newfile.txt'],
      handler: handlers.rmHandler,
      color: 'red'
    },
    {
      title: 'cp - Copy Files',
      description: 'Copy files to new locations with different names',
      commands: ['cp config.txt backup.txt', 'cp report.txt copy.txt'],
      handler: handlers.cpHandler,
      color: 'cyan'
    },
    {
      title: 'mv - Move/Rename Files',
      description: 'Move files to new locations or rename them',
      commands: ['mv config.txt settings.txt', 'mv backup.txt old.txt'],
      handler: handlers.mvHandler,
      color: 'yellow'
    },
    {
      title: 'find - Search for Files',
      description: 'Search for files and directories by name patterns',
      commands: ['find . -name txt', 'find . -name config', 'find . -name log'],
      handler: handlers.findHandler,
      color: 'emerald'
    },
    {
      title: 'grep - Search Text in Files',
      description: 'Search for text patterns within file contents',
      commands: ['grep Report report.txt', 'grep user config.txt', 'grep Project notes.md'],
      handler: handlers.grepHandler,
      color: 'violet'
    },
    {
      title: 'head - Show First Lines',
      description: 'Display the first 10 lines of a file',
      commands: ['head report.txt', 'head notes.md', 'head config.txt'],
      handler: handlers.headHandler,
      color: 'blue'
    },
    {
      title: 'tail - Show Last Lines',
      description: 'Display the last 10 lines of a file',
      commands: ['tail report.txt', 'tail notes.md', 'tail system.log'],
      handler: handlers.tailHandler,
      color: 'green'
    },
    {
      title: 'echo - Display Text',
      description: 'Print text to the terminal output',
      commands: ['echo Hello World', 'echo "Welcome to Linux"', 'echo $USER'],
      handler: handlers.echoHandler,
      color: 'purple'
    },
    {
      title: 'wc - Word Count',
      description: 'Count lines, words, and characters in files',
      commands: ['wc report.txt', 'wc notes.md', 'wc config.txt'],
      handler: handlers.wcHandler,
      color: 'orange'
    },
    {
      title: 'sort - Sort File Contents',
      description: 'Sort lines in files alphabetically',
      commands: ['sort config.txt', 'sort report.txt'],
      handler: handlers.sortHandler,
      color: 'teal'
    },
    {
      title: 'ps - Show Running Processes',
      description: 'Display currently running processes',
      commands: ['ps'],
      handler: handlers.psHandler,
      color: 'indigo'
    },
    {
      title: 'whoami - Current User',
      description: 'Display the current username',
      commands: ['whoami'],
      handler: handlers.whoamiHandler,
      color: 'cyan'
    },
    {
      title: 'date - Current Date/Time',
      description: 'Display the current date and time',
      commands: ['date'],
      handler: handlers.dateHandler,
      color: 'yellow'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="Essential Linux Commands"
        description="Master the 20 most important Linux terminal commands for file management, text processing, and system information. These commands form the foundation of Linux system administration and daily terminal usage."
        characteristics={[
          'File operations: ls, cd, pwd, mkdir, rmdir, touch, rm, cp, mv',
          'Text processing: cat, grep, head, tail, echo, wc, sort',
          'System info: ps, whoami, date, find',
          'Each command includes realistic error handling and validation'
        ]}
        color="green"
      />
      
      <div className="grid gap-6">
        {commandApps.map((app, index) => (
          <LinuxCommandSimulator
            key={index}
            title={app.title}
            description={app.description}
            initialFileSystem={createInitialFileSystem()}
            commands={app.commands}
            onCommandExecute={app.handler}
            color={app.color}
          />
        ))}
      </div>
    </div>
  );
};

export default LinuxCommandsSection;