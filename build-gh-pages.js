import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create dist directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Create dist/public directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist', 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'dist', 'public'));
}

// Backup original files
console.log('Backing up original files...');
if (fs.existsSync('client/src/main.tsx')) {
  fs.copyFileSync('client/src/main.tsx', 'client/src/main.tsx.bak');
}
if (fs.existsSync('client/src/App.tsx')) {
  fs.copyFileSync('client/src/App.tsx', 'client/src/App.tsx.bak');
}
if (fs.existsSync('vite.config.ts')) {
  fs.copyFileSync('vite.config.ts', 'vite.config.ts.bak');
}

// Copy static files
console.log('Copying static files...');
fs.copyFileSync('client/src/main.static.tsx', 'client/src/main.tsx');
fs.copyFileSync('client/src/App.static.tsx', 'client/src/App.tsx');
fs.copyFileSync('vite.config.static.ts', 'vite.config.ts');

try {
  // Run vite build directly
  console.log('Building client...');
  execSync('npx vite build', { stdio: 'inherit' });

  // Create index.html in the root of dist
  console.log('Creating index.html in dist root...');
  if (fs.existsSync(path.join(__dirname, 'dist', 'public', 'index.html'))) {
    let content = fs.readFileSync(path.join(__dirname, 'dist', 'public', 'index.html'), 'utf8');
    
    // Replace absolute paths with relative paths
    content = content.replace(/src="\\/assets\\//g, 'src="./assets/');
    content = content.replace(/href="\\/assets\\//g, 'href="./assets/');
    content = content.replace(/href="\\/images\\//g, 'href="./images/');
    
    fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), content);
    
    // Copy all assets from dist/public to dist
    console.log('Copying assets to dist root...');
    const copyDir = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    };
    
    copyDir(path.join(__dirname, 'dist', 'public'), path.join(__dirname, 'dist'));
  } else {
    console.error('Error: dist/public/index.html not found');
  }
} catch (error) {
  console.error(Build error: \);
} finally {
  // Restore original files
  console.log('Restoring original files...');
  if (fs.existsSync('client/src/main.tsx.bak')) {
    fs.copyFileSync('client/src/main.tsx.bak', 'client/src/main.tsx');
    fs.unlinkSync('client/src/main.tsx.bak');
  }
  if (fs.existsSync('client/src/App.tsx.bak')) {
    fs.copyFileSync('client/src/App.tsx.bak', 'client/src/App.tsx');
    fs.unlinkSync('client/src/App.tsx.bak');
  }
  if (fs.existsSync('vite.config.ts.bak')) {
    fs.copyFileSync('vite.config.ts.bak', 'vite.config.ts');
    fs.unlinkSync('vite.config.ts.bak');
  }
}

console.log('Build for GitHub Pages completed');
