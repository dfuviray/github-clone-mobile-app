import React from 'react';

import {ErrorMessage} from './AppErrorTextStyles';

export default function AppErrorTextStyles({error}) {
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return null;
}
