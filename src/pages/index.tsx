import React from 'react';
import Template from '../components/templates/Index';
import { Button } from '../types/login.type';
import {
  googleSignIn,
  gitHubSignIn,
  twitterSignIn
} from '../service/auth.service';

const buttons: Button[] = [
  {
    icon: '/assets/img/sns-icons/google.png',
    text: 'Google',
    onClick: googleSignIn
  },
  {
    icon: '/assets/img/sns-icons/github.png',
    text: 'Github',
    onClick: gitHubSignIn
  },
  {
    icon: '/assets/img/sns-icons/twitter.png',
    text: 'Twitter',
    onClick: twitterSignIn
  },
];

const Index: React.FC = () => (
  <Template buttons={buttons} />
);

export default Index;
