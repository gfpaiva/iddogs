import React from 'react';
import { Redirect } from 'react-router-dom';

import { IsAutenticated } from '../../Utils/Auth';

export default function Home() {
  if (IsAutenticated) return <Redirect to="/feed" />;

  return <Redirect to="signup" />;
}
