import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Step 1: Building production bundle...');
execSync('npm run build', { stdio: 'inherit' });

const distPath = path.resolve('dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory does not exist!');
  process.exit(1);
}

console.log('🚀 Step 2: Preparing deploy branch from dist folder...');
const distGit = path.join(distPath, '.git');
if (fs.existsSync(distGit)) {
  fs.rmSync(distGit, { recursive: true, force: true });
}

execSync('git init', { cwd: distPath, stdio: 'inherit' });
execSync('git checkout -b deploy', { cwd: distPath, stdio: 'inherit' });
execSync('git add -A', { cwd: distPath, stdio: 'inherit' });
execSync('git commit -m "Deploy: production build ' + new Date().toISOString() + '"', { cwd: distPath, stdio: 'inherit' });

console.log('🚀 Step 3: Pushing deploy branch to remotes...');
try {
  execSync('git remote add fork git@github.com:ajay7k/SpaceProbe-v2.git', { cwd: distPath });
  execSync('git push -f fork deploy', { cwd: distPath, stdio: 'inherit' });
  console.log('✅ Pushed deploy branch to fork (ajay7k/SpaceProbe-v2)!');
} catch (err) {
  console.warn('⚠️ Push to fork failed:', err.message);
}

try {
  execSync('git remote add origin git@github.com:arnavpotale/SpaceProbe-v2.git', { cwd: distPath });
  execSync('git push -f origin deploy', { cwd: distPath, stdio: 'inherit' });
  console.log('✅ Pushed deploy branch to origin (arnavpotale/SpaceProbe-v2)!');
} catch (err) {
  console.warn('⚠️ Push to origin failed:', err.message);
}

fs.rmSync(distGit, { recursive: true, force: true });
console.log('🎉 Done! Deploy branch is updated on GitHub.');
