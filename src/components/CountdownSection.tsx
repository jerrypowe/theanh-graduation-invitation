import React, { useState, useEffect } from 'react';
import { invitationConfig } from '../config/invitation';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(invitationConfig.event.targetDateTime).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'NGÀY', value: timeLeft.days },
    { label: 'GIỜ', value: timeLeft.hours },
    { label: 'PHÚT', value: timeLeft.minutes },
    { label: 'GIÂY', value: timeLeft.seconds },
  ];

  return (
    <section
      className="countdown-section"
      style={{
        position: 'relative',
        width: '100%',
        padding: '30px 20px 40px',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <div
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '44px',
          color: 'var(--sage-dark)',
          marginBottom: '20px',
          lineHeight: 1.2,
        }}
      >
        See you soon
      </div>

      {/* Countdown Timer Display */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '360px',
          margin: '0 auto',
        }}
      >
        {timeBlocks.map((block, idx) => (
          <React.Fragment key={block.label}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
              }}
            >
              {/* Digit Box */}
              <div
                style={{
                  width: '100%',
                  height: '56px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  borderRadius: '8px',
                  border: '1px solid var(--sage-border)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'var(--sage-dark)',
                }}
              >
                {String(block.value).padStart(2, '0')}
              </div>
              {/* Label */}
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  color: 'var(--text-light)',
                  marginTop: '6px',
                  fontWeight: 500,
                }}
              >
                {block.label}
              </span>
            </div>
            {idx < timeBlocks.length - 1 && (
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  color: 'var(--sage-primary)',
                  marginBottom: '20px',
                  fontWeight: 600,
                }}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
