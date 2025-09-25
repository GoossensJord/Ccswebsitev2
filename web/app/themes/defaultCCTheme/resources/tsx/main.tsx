import React from 'react';
import { createRoot } from 'react-dom/client';
import { CraftcodeHomepage } from './app';


const container = document.getElementById('main');
if (container) {
  createRoot(container).render(<CraftcodeHomepage />);
}
