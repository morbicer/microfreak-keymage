import { ChordReadout } from './ChordReadout';
import { Clip } from './Clip';
import { Keyboard } from './Keyboard';
import { Lesson } from './Lesson';
import { Sidebar } from './Sidebar';
import { ChordHeader, Strip } from './Strip';
import { Topic } from './Topic';

export function App() {
  return (
    <div class="app">
      <Sidebar />
      <main class="main">
        <ChordHeader />
        <ChordReadout />
        <Topic topic="keyboard" class="block">
          <Keyboard />
        </Topic>
        <Strip />
        <Topic topic="clip" class="block">
          <Clip />
        </Topic>
        <Lesson />
      </main>
    </div>
  );
}
