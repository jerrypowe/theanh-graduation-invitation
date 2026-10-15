import React, { useState, useEffect } from 'react';
import { getGuestName } from './utils/guest';
import { EnvelopeScreen } from './components/EnvelopeScreen';
import { HeroSection } from './components/HeroSection';
import { CeremonyDetailsSection } from './components/CeremonyDetailsSection';
import { TimelineSection } from './components/TimelineSection';
import { AlbumSection } from './components/AlbumSection';
import { CountdownSection } from './components/CountdownSection';
import { RsvpSection } from './components/RsvpSection';
import { FooterSection } from './components/FooterSection';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  const [guestName, setGuestName] = useState<string>('');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState<boolean>(false);
  const [audioTrigger, setAudioTrigger] = useState<boolean>(false);

  useEffect(() => {
    const name = getGuestName();
    setGuestName(name);

    // If URL has ?open=1 or #open, open directly
    const params = new URLSearchParams(window.location.search);
    if (params.get('open') === '1' || window.location.hash === '#invitation') {
      setIsEnvelopeOpened(true);
    }
  }, []);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
    setAudioTrigger(true);
    // Smooth scroll down to hero
    setTimeout(() => {
      const mainContent = document.getElementById('main-invitation-content');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="app-container">
      {/* Floating Music Toggle Button */}
      <MusicPlayer autoPlayTrigger={audioTrigger} />

      {/* Screen 1: The Envelope Experience */}
      {!isEnvelopeOpened ? (
        <EnvelopeScreen
          guestName={guestName}
          onOpen={handleOpenEnvelope}
          isOpen={isEnvelopeOpened}
        />
      ) : (
        <div id="main-invitation-content" className="fade-in">
          {/* Subtle button to review the envelope if desired */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 90,
            }}
          >
            <button
              onClick={() => setIsEnvelopeOpened(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid var(--sage-border)',
                borderRadius: '16px',
                padding: '4px 10px',
                fontSize: '11px',
                color: 'var(--sage-dark)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backdropFilter: 'blur(4px)',
              }}
            >
              ✉️ Xem phong bì
            </button>
          </div>

          {/* Section 2: Hero & Introduction */}
          <HeroSection />

          {/* Section 3: Ceremony Details & Calendar */}
          <CeremonyDetailsSection />

          {/* Section 4: Timeline of Events */}
          <TimelineSection />

          {/* Section 5: Album of Youth Gallery */}
          <AlbumSection />

          {/* Section 6: Countdown to 24.10.2026 */}
          <CountdownSection />

          {/* Section 7: RSVP Form & Gift Funds */}
          <RsvpSection guestName={guestName} />

          {/* Section 8: Footer */}
          <FooterSection />
        </div>
      )}
    </div>
  );
};

export default App;
