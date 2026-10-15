import React, { useState } from 'react';
import { invitationConfig } from '../config/invitation';

export const AlbumSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = invitationConfig.gallery;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="album-section"
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '40px',
      }}
    >
      {/* Album Heading with overlapping script */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: '20px 0 10px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 400,
            letterSpacing: '5px',
            color: 'var(--sage-dark)',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          ALBUM OF
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '48px',
              color: 'var(--sage-primary)',
              textTransform: 'none',
              letterSpacing: 'normal',
              position: 'absolute',
              top: '4px',
              left: '60%',
              whiteSpace: 'nowrap',
            }}
          >
            Youth
          </span>
        </h2>
      </div>

      {/* Featured Statue Banner Photo */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          marginBottom: '20px',
        }}
      >
        <img
          src="/assets/photo-album-banner.jpg"
          alt="Kỷ niệm khuôn viên trường"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* Main Interactive Carousel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          padding: '0 16px',
        }}
      >
        {/* Main Photo Card */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={{
              width: '100%',
              height: '460px',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Ảnh trước"
            style={{
              position: 'absolute',
              top: '50%',
              left: '12px',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.85)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              color: 'var(--sage-dark)',
              fontSize: '18px',
              transition: 'all 0.2s',
            }}
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Ảnh tiếp"
            style={{
              position: 'absolute',
              top: '50%',
              right: '12px',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.85)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              color: 'var(--sage-dark)',
              fontSize: '18px',
              transition: 'all 0.2s',
            }}
          >
            ›
          </button>

          {/* Image index indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'rgba(0, 0, 0, 0.55)',
              color: '#fff',
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: '12px',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '1px',
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            padding: '14px 4px',
            scrollbarWidth: 'none',
          }}
        >
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '60px',
                height: '75px',
                flexShrink: 0,
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: idx === currentIndex ? '2px solid var(--sage-primary)' : '1px solid #ddd',
                opacity: idx === currentIndex ? 1 : 0.65,
                transform: idx === currentIndex ? 'scale(1.04)' : 'scale(1)',
                transition: 'all 0.2s ease',
              }}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="modal-overlay"
          onClick={() => setLightboxOpen(false)}
          style={{ zIndex: 1200, padding: '10px' }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '6px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              }}
            />
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
