import React from 'react';
import Template from '../components/templates/Index';
import { Button } from '../types/login.type';

const buttons: Button[] = [
  {
    icon: '/assets/img/sns-icons/google.png',
    text: 'Google',
    onClick: () => {}
  },
  {
    icon: '/assets/img/sns-icons/github.png',
    text: 'Github',
    onClick: () => {}
  },
  {
    icon: '/assets/img/sns-icons/twitter.png',
    text: 'Twitter',
    onClick: () => {}
  },
];

const Index: React.FC = () => (
  <Template buttons={buttons} />
);

export default Index;
