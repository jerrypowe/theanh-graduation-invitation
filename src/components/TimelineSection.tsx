import React from 'react';
import { invitationConfig } from '../config/invitation';

export const TimelineSection: React.FC = () => {
  return (
    <section
      className="timeline-section"
      style={{
        position: 'relative',
        width: '100%',
        padding: '30px 24px 40px',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '24px',
          fontWeight: 600,
          letterSpacing: '4px',
          color: 'var(--sage-dark)',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}
      >
        TIMELINE
      </h2>

      {/* Contact subtitle */}
      <div
        style={{
          fontSize: '13px',
          color: 'var(--text-light)',
          fontFamily: 'var(--font-serif)',
          letterSpacing: '1px',
          marginBottom: '35px',
        }}
      >
        Contact: <a href={`tel:${invitationConfig.graduate.phone}`} style={{ color: 'var(--sage-dark)', textDecoration: 'none', fontWeight: 600 }}>{invitationConfig.graduate.phone}</a> ({invitationConfig.graduate.firstName})
      </div>

      {/* Timeline items container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '360px',
          margin: '0 auto',
        }}
      >
        {/* Center continuous branch/line */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            borderLeft: '1px dashed var(--sage-border)',
            zIndex: 1,
          }}
        />

        {invitationConfig.timeline.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                marginBottom: '32px',
                zIndex: 2,
              }}
            >
              {/* Content Card */}
              <div
                style={{
                  width: '44%',
                  textAlign: isEven ? 'right' : 'left',
                  padding: '8px 12px',
                  background: 'rgba(255, 255, 255, 0.75)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(135, 150, 119, 0.25)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--sage-primary)',
                    letterSpacing: '1px',
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginTop: '2px',
                  }}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-light)',
                      marginTop: '3px',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>

              {/* Center icon badge */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'var(--sage-light)',
                  border: '1.5px solid var(--sage-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  zIndex: 3,
                }}
              >
                {item.icon === 'cap' ? (
                  <img
                    src="/assets/icon-timeline-cap.png"
                    alt="Lễ tốt nghiệp"
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                ) : item.icon === 'camera' ? (
                  <img
                    src="/assets/icon-timeline-camera.png"
                    alt="Chụp hình"
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                ) : (
                  <img
                    src="/assets/icon-location.png"
                    alt="Sự kiện"
                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
