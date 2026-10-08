import { currentChord, lessonTopic, root, scale } from '../state/store';
import { currentSource } from './current';
import { CHORD_TOPICS, describeChord, lessonFor } from './lessonCopy';

export function Lesson() {
  const topic = lessonTopic.value;
  const lesson = lessonFor(topic);
  return (
    <section class="lesson" data-testid="lesson" data-topic={topic} aria-label="Lesson" aria-live="polite">
      <h2>{lesson.title}</h2>
      {lesson.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {CHORD_TOPICS.has(topic) && (
        <p class="chord-desc">{describeChord(currentSource.value, currentChord.value, scale.value, root.value)}</p>
      )}
    </section>
  );
}
