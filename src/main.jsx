import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// For Roboto
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// For Inter
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// For Kumbh Sans
import "@fontsource/kumbh-sans/400.css";
import "@fontsource/kumbh-sans/500.css";
import "@fontsource/kumbh-sans/600.css";
import "@fontsource/kumbh-sans/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
