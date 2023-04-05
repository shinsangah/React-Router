import React from 'react';
import Button from './Button';

export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#88b1ee"
      subColor="#2e53c1"
      hoverColor="#3978d0"
    />
  );
}
