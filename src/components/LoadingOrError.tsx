import type { ReactElement } from 'react';

interface Properties {
  error?: Error;
}
export default function LoadingOrError({ error }: Properties): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl" data-testid="LoadingOrError">
        {error ? error.message : 'Loading...'}
      </h1>
    </div>
  );
}
LoadingOrError.defaultProps = {
  error: undefined,
};
