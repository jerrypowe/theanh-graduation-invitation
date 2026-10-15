import React from 'react';
import { invitationConfig } from '../config/invitation';

interface EnvelopeScreenProps {
  guestName: string;
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeScreen: React.FC<EnvelopeScreenProps> = ({ guestName, onOpen, isOpen }) => {
  return (
    <div 
      className={`envelope-screen-wrapper ${isOpen ? 'envelope-opened' : ''}`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        overflow: 'hidden',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Header: THÂN MỜI */}
      <div 
        style={{
          width: '100%',
          maxWidth: '380px',
          textAlign: 'center',
          marginBottom: '32px',
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '5px',
            color: 'var(--sage-dark)',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          THÂN MỜI
        </h2>
        
        {/* Guest Name in Cursive Calligraphy */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            padding: '0 24px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '46px',
              color: 'var(--sage-dark)',
              fontWeight: 400,
              display: 'block',
              lineHeight: 1.1,
              paddingBottom: '8px',
            }}
          >
            {guestName}
          </span>
          {/* Thin Sage Underline */}
          <div
            style={{
              width: '130%',
              maxWidth: '320px',
              height: '1px',
              backgroundColor: 'var(--sage-border)',
              margin: '0 auto',
              position: 'relative',
              left: '-15%',
            }}
          />
        </div>
      </div>

      {/* Main Envelope Element */}
      <div
        className="envelope-interactive-container"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label="Nhấn để mở thiệp mời"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onOpen();
          }
        }}
        style={{
          position: 'relative',
          width: '330px',
          height: '233px',
          cursor: 'pointer',
          margin: '15px auto',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {/* Top-Left Floral Bouquet */}
        <img
          src="/assets/flower-envelope-tl.png"
          alt="Hoa trang trí góc trên"
          style={{
            position: 'absolute',
            top: '-38px',
            left: '-32px',
            width: '115px',
            height: 'auto',
            zIndex: 4,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.08))',
          }}
        />

        {/* Realistic Envelope (Cropped to exact dimensions) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0 10px 24px rgba(60, 75, 50, 0.2))',
          }}
        >
          <img
            src="/assets/envelope-cropped.png"
            alt="Bì thư mời tốt nghiệp"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {/* Center Pink Swan Wax Seal */}
        <div
          className="animate-pulse-subtle"
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
            width: '60px',
            height: '60px',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.22))',
            cursor: 'pointer',
          }}
        >
          <img
            src="/assets/wax-seal-swan.png"
            alt="Dấu sáp hình thiên nga"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Bottom-Right Floral Bouquet */}
        <img
          src="/assets/flower-envelope-br.png"
          alt="Hoa trang trí góc dưới"
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-30px',
            width: '125px',
            height: 'auto',
            zIndex: 4,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.08))',
          }}
        />
      </div>

      {/* Graduation Date below Envelope */}
      <div
        style={{
          marginTop: '32px',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            fontWeight: 400,
            letterSpacing: '2px',
            color: 'var(--sage-dark)',
          }}
        >
          {invitationConfig.event.displayDate}
        </span>

        {/* Call To Action Hint */}
        <div
          style={{
            marginTop: '16px',
            fontSize: '12px',
            color: 'var(--text-light)',
            letterSpacing: '1.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '9px', color: 'var(--sage-primary)' }}>✦</span>
          <span>CHẠM ĐỂ MỞ THIỆP MỜI</span>
          <span style={{ fontSize: '9px', color: 'var(--sage-primary)' }}>✦</span>
        </div>
      </div>
    </div>
  );
};
