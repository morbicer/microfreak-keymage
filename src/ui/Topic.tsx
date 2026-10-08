import type { ComponentChildren } from 'preact';
import { lessonTopic } from '../state/store';

interface Props {
  topic: string;
  class?: string;
  children: ComponentChildren;
}

/** Sets the Lesson panel topic on hover and on keyboard focus. */
export function Topic({ topic, class: cls, children }: Props) {
  const set = () => {
    lessonTopic.value = topic;
  };
  return (
    <div class={cls} onMouseEnter={set} onFocusIn={set}>
      {children}
    </div>
  );
}
