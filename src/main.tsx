import { render } from 'preact';
import { startHashSync } from './state/hash';
import './styles/tokens.css';
import './styles/app.css';
import { App } from './ui/App';

startHashSync();
render(<App />, document.getElementById('app') as HTMLElement);
