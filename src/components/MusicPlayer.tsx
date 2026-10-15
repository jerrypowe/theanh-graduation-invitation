import React, { useState, useEffect, useRef } from 'react';
import { invitationConfig } from '../config/invitation';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(invitationConfig.audio.src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Try autoplay if allowed by browser
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy, waiting for user click
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // When parent signals user interaction (e.g., clicking to open envelope)
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio play after click was deferred:', err));
    }
  }, [autoPlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
      aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
      title={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
    >
      {isPlaying ? (
        <div className="sound-waves">
          <div className="sound-bar" />
          <div className="sound-bar" />
          <div className="sound-bar" />
          <div className="sound-bar" />
        </div>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
};
