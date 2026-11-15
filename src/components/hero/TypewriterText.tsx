import React, { useState, useEffect } from 'react';

const ROLES = [
  'Data Analyst & BI Specialist',
  'Power BI & Dashboard Architect',
  'SQL & Database Query Specialist',
  'FUTO Computer Science Graduate',
  'Commercial Revenue Storyteller',
];

export const TypewriterText: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const targetText = ROLES[roleIndex];
    let timer: number;

    if (!isDeleting) {
      if (charIndex < targetText.length) {
        timer = window.setTimeout(() => {
          setCurrentText(targetText.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 65);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (charIndex > 0) {
        timer = window.setTimeout(() => {
          setCurrentText(targetText.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-cyan-400 font-semibold tracking-wide font-mono">
      <span>{currentText}</span>
      <span className="ml-1 w-2 h-5 bg-cyan-400 inline-block animate-pulse" />
    </span>
  );
};
