import {
  forwardRef,
  ReactElement,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';
import useSentence from '@/hooks/useSentence';

import styles from './SentenceText.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Properties {}

const SentenceText = (
  _props: Properties,
  ref: Ref<{ onReset: () => void }>
): ReactElement => {
  const [sentence, setSentence, onResetSentence] = useSentence();
  const [isLoading, setIsLoding] = useState(false);

  useImperativeHandle(ref, () => ({
    onReset: () => {
      setIsLoding(true);
      setTimeout(() => {
        onResetSentence();
        setIsLoding(false);
      }, 2000);
    },
  }));
  return (
    <div
      className={`${styles['typing']} ${
        isLoading ? styles['close'] : styles['open']
      }`}
    >
      {sentence.sentence}
    </div>
  );
};

export default forwardRef(SentenceText);
