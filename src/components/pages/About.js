import React, { useEffect, useState } from 'react';

const INITIAL_MESSAGE = '';

const About = () => {
  const [message, setMessage] = useState(INITIAL_MESSAGE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      fetch(`https://api.quotable.io/random`)
      .then(res => res.json())
      .then(message => {
        setMessage(message.content);
      });
    } catch (e) {
      setMessage(e.message);
    }
  };

  if (isLoading) {
    return 'Loading...';
  }

  return <h1>{message}</h1>;
};

export default About
