import React from 'react';
import { invitationConfig } from '../config/invitation';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Top Envelope Peek / Photo Composition Section */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '30px',
          paddingBottom: '20px',
          minHeight: '430px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div 
          style={{
            position: 'relative',
            width: '320px',
            height: '350px',
            margin: '0 auto',
          }}
        >
          {/* Floral Top Left */}
          <img
            src="/assets/flower-hero-left.png"
            alt="Hoa trang trí bên trái"
            style={{
              position: 'absolute',
              top: '55px',
              left: '-26px',
              width: '90px',
              zIndex: 4,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.06))',
            }}
          />

          {/* Floral Top Right */}
          <img
            src="/assets/flower-hero-right.png"
            alt="Hoa trang trí bên phải"
            style={{
              position: 'absolute',
              top: '30px',
              right: '-25px',
              width: '100px',
              zIndex: 4,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.06))',
            }}
          />

          {/* Left Tilted Polaroid Photo */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '20px',
              width: '130px',
              transform: 'rotate(-7deg)',
              zIndex: 1,
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.14))',
              background: '#ffffff',
              padding: '6px 6px 20px 6px',
              borderRadius: '2px',
            }}
          >
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img
                src="/assets/photo-hero-1.jpg"
                alt="Nguyễn Thế Anh tốt nghiệp"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '8px',
                color: '#666',
                textAlign: 'center',
                marginTop: '6px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {invitationConfig.graduate.fullName}
            </div>
          </div>

          {/* Right Tilted Polaroid Photo */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              right: '25px',
              width: '130px',
              transform: 'rotate(7deg)',
              zIndex: 1,
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))',
              background: '#ffffff',
              padding: '6px 6px 20px 6px',
              borderRadius: '2px',
            }}
          >
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img
                src="/assets/photo-hero-2.jpg"
                alt="Nguyễn Thế Anh tốt nghiệp"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '8px',
                color: '#666',
                textAlign: 'center',
                marginTop: '6px',
                letterSpacing: '1px',
              }}
            >
              FPT UNIVERSITY
            </div>
          </div>

          {/* Envelope Body in front of photos */}
          <div
            style={{
              position: 'absolute',
              bottom: '5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '280px',
              zIndex: 2,
              filter: 'drop-shadow(0 8px 18px rgba(60, 75, 50, 0.16))',
            }}
          >
            <img
              src="/assets/envelope-cropped.png"
              alt="Phong bì"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Note Card overlaying the envelope */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              right: '25px',
              width: '180px',
              height: '115px',
              zIndex: 3,
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.12))',
              transform: 'rotate(2deg)',
            }}
          >
            <img
              src="/assets/paper-note.png"
              alt="Ghi chú tốt nghiệp"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            {/* Note Text */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '22px',
                  color: '#47533f',
                  lineHeight: 1.1,
                }}
              >
                Graduated.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#34412c',
                  margin: '2px 0',
                }}
              >
                {invitationConfig.event.displayDate}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '16px',
                  color: '#55644d',
                  lineHeight: 1.1,
                }}
              >
                Finally, I've graduated.
              </span>
            </div>
          </div>

          {/* Pink Swan Wax Seal on the envelope / card */}
          <div
            style={{
              position: 'absolute',
              bottom: '82px',
              left: '92px',
              width: '38px',
              height: '38px',
              zIndex: 4,
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))',
            }}
          >
            <img
              src="/assets/wax-seal-swan.png"
              alt="Dấu sáp thiên nga"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Graduation Ceremony Main Banner Photo */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#2d3b2d',
        }}
      >
        <img
          src="/assets/photo-ceremony.jpg"
          alt="Lễ tốt nghiệp cử nhân Nguyễn Thế Anh"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />

        {/* Overlay gradient & typography on ceremony banner */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: '24px 20px 40px',
            background: 'linear-gradient(to bottom, rgba(20, 30, 20, 0.6) 0%, rgba(20, 30, 20, 0.15) 60%, transparent 100%)',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '11px',
              letterSpacing: '3px',
              fontWeight: 400,
              textTransform: 'uppercase',
              marginBottom: '4px',
              textShadow: '0 2px 6px rgba(0,0,0,0.5)',
            }}
          >
            ĐÁNH DẤU MỘT HÀNH TRÌNH TRỌN VẸN
          </div>
          <div
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '48px',
              fontWeight: 400,
              lineHeight: 1.1,
              textShadow: '0 3px 10px rgba(0,0,0,0.6)',
            }}
          >
            Graduate ceremony
          </div>
        </div>
      </div>
    </section>
  );
};
