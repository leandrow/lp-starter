import '../styles/main.css';
import '@fontsource-variable/inter';
import {
  createIcons,
  Rocket,
  Sun,
  Moon,
  Menu,
  ExternalLink,
  Heart,
  ArrowLeft,
} from 'lucide';
import './darkmode';

// Lucide icons
createIcons({
  icons: {
    Rocket,
    Sun,
    Moon,
    Menu,
    ExternalLink,
    Heart,
    ArrowLeft,
  },
});

// Responsive menu
const btn = document.querySelector('.responsive-btn');
const menu = document.querySelector('.responsive-menu');

if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}
