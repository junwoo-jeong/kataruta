import { ReactElement } from 'react';

interface Properties {
  children: ReactElement;
}

export default function PageTemplate(
  props: Properties
): ReactElement<Properties> {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gd-stripe-start via-gd-stripe-middle to-gd-stripe-end">
      <div className="w-full h-full bg-round-pattern">{props.children}</div>
    </div>
  );
}
