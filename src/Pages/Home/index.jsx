import React from 'react';
import { Redirect } from 'react-router-dom';

import { IsAutenticated } from '../../Utils/Auth';

export default function Home() {
  if (IsAutenticated()) return <Redirect to="/feed/husky" />;

  return <Redirect to="signup" />;
}
