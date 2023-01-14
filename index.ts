// Import stylesheets
import './styles/reset.css';
import { World } from './scripts/world';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const world = new World.build();