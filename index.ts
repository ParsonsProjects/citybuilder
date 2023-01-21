// Import stylesheets
import './styles/reset.css';
import { World } from './scripts/world/init';
import { UI } from './scripts/ui/init';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const world = new World();
world.init();

const ui = new UI();
ui.init();
