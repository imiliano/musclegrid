import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { MusclesApp } from './MusclesApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    
      <MusclesApp />

    </BrowserRouter>

  </StrictMode>
)
