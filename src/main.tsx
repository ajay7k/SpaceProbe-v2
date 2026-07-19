import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from './providers';
import { Navbar } from './components/navigation/Navbar';
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/layout/Footer';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <Navbar />
      <HomePage />
      <Footer />
    </AppProviders>
  </StrictMode>
);
