import React from 'react';
import { invitationConfig } from '../config/invitation';

export const FooterSection: React.FC = () => {
  return (
    <footer
      className="footer-section"
      style={{
        position: 'relative',
        width: '100%',
        padding: '30px 20px 45px',
        textAlign: 'center',
        background: 'transparent',
      }}
    >
      {/* Thank you message */}
      <div style={{ maxWidth: '340px', margin: '0 auto 24px' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '13px',
            color: 'var(--text-body)',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}
        >
          "Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và mình vô cùng trân quý trong ngày vui này. Thank you!"
        </p>
      </div>

      {/* Thank you title in script */}
      <div
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '44px',
          color: 'var(--sage-dark)',
          marginBottom: '20px',
        }}
      >
        Thank you
      </div>

      {/* Social Media Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '28px',
        }}
      >
        {invitationConfig.graduate.social.facebook && (
          <a
            href={invitationConfig.graduate.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--sage-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="/assets/icon-fb.png"
              alt="Facebook"
              style={{ width: '22px', height: '22px', objectFit: 'contain' }}
            />
          </a>
        )}

        {invitationConfig.graduate.social.zalo && (
          <a
            href={invitationConfig.graduate.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--sage-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="/assets/icon-zalo.png"
              alt="Zalo"
              style={{ width: '22px', height: '22px', objectFit: 'contain' }}
            />
          </a>
        )}

        {invitationConfig.graduate.social.tiktok && (
          <a
            href={invitationConfig.graduate.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--sage-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src="/assets/icon-tiktok.png"
              alt="TikTok"
              style={{ width: '22px', height: '22px', objectFit: 'contain' }}
            />
          </a>
        )}
      </div>

      {/* Graduation Footnote */}
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '11px',
          color: 'var(--text-light)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        TÂN CỬ NHÂN: {invitationConfig.graduate.fullName} • {invitationConfig.event.year}
      </div>
    </footer>
  );
};
