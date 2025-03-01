import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MusclesApp } from './MusclesApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    
      <MusclesApp />

    </BrowserRouter>

  </StrictMode>
)
