import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MusclesApp } from './MusclesApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HashRouter>
    
      <MusclesApp />

    </HashRouter>

  </StrictMode>
)
