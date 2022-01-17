import type { ReactElement } from 'react';

import styles from './TypingText.module.css';

// Interface Properties {}

export default function TypingText(): ReactElement {
  return (
    <div className={styles['typing-demo']}>
      この一週間、一番ありがたい人は＿＿さんです。
    </div>
  );
}
