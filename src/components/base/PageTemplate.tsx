import { ReactElement } from 'react';

import styles from './PageTemplate.module.css';

interface Properties {
  children: ReactElement;
}

export default function PageTemplate(
  props: Properties
): ReactElement<Properties> {
  return (
    <div className={styles['gradient-bg']}>
      <div className={styles['pattern-bg']}>
        <div className={styles['container']}>{props.children}</div>
      </div>
    </div>
  );
}
