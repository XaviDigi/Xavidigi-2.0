import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting GitHub Pages build process...');

// Create dist directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
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
  
  // Copy public images to dist
  console.log('Copying public images to dist...');
  if (fs.existsSync('client/public/images')) {
    if (!fs.existsSync(path.join(__dirname, 'dist', 'images'))) {
      fs.mkdirSync(path.join(__dirname, 'dist', 'images'), { recursive: true });
    }
    
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
    
    copyDir('client/public/images', path.join(__dirname, 'dist', 'images'));
  }
  
  // Create a simple index.html in the root of dist if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'dist', 'index.html'))) {
    console.log('Creating index.html in dist root...');
    const indexContent = <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>XaviDigi</title>
    <link rel="icon" href="./images/logo.png" type="image/png" />
    <meta name="description" content="XaviDigi - Web Creation, Shopify Store Development, Social Media Automation, AI Agent Creation" />
    <meta name="keywords" content="web development, shopify, social media, automation, AI, Make.com, N8n, WordPress, JavaScript" />
    <meta property="og:title" content="XaviDigi - Digital Services" />
    <meta property="og:description" content="Professional digital services including Web Creation, Shopify Store Development, Social Media Automation, and AI Agent Creation" />
    <meta property="og:image" content="./images/logo.png" />
    <meta property="og:url" content="https://xavidigi.com" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/index.js"></script>
  </body>
</html>;
    
    fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), indexContent);
  }
  
  // Copy all assets from dist/public to dist if they exist
  if (fs.existsSync(path.join(__dirname, 'dist', 'public'))) {
    console.log('Copying assets from dist/public to dist root...');
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
  }
  
  // Create a CNAME file if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'dist', 'CNAME'))) {
    console.log('Creating CNAME file...');
    fs.writeFileSync(path.join(__dirname, 'dist', 'CNAME'), 'xavidigi.com');
  }
  
  console.log('Build completed successfully!');
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
