import React from 'react';
import { invitationConfig } from '../config/invitation';

export const CeremonyDetailsSection: React.FC = () => {
  return (
    <section 
      className="ceremony-details-section"
      style={{
        position: 'relative',
        width: '100%',
        padding: '45px 20px 25px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Invitation Header */}
      <div style={{ marginBottom: '14px' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '13px',
            letterSpacing: '2.5px',
            color: 'var(--sage-dark)',
            textTransform: 'uppercase',
            lineHeight: 1.8,
            fontWeight: 500,
          }}
        >
          THÂN MỜI BẠN ĐẾN THAM DỰ<br />
          LỄ TỐT NGHIỆP TÂN CỬ NHÂN CỦA
        </p>
      </div>

      {/* Graduate Name in Elegant Script (Soft Coral Pink matching original) */}
      <div style={{ margin: '8px 0 20px', position: 'relative' }}>
        <h2
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '54px',
            color: '#cf7b7b',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '1px',
          }}
        >
          {invitationConfig.graduate.fullName}
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '12.5px',
            color: 'var(--text-light)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}
        >
          Ngành: {invitationConfig.graduate.majorVi} ({invitationConfig.graduate.major})
        </div>
      </div>

      {/* Ceremony Time & Date */}
      <div style={{ margin: '24px auto', maxWidth: '340px' }}>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '13px',
            letterSpacing: '2.5px',
            color: 'var(--sage-dark)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          BUỔI LỄ ĐƯỢC TỔ CHỨC<br />
          VÀO <span style={{ fontWeight: 700 }}>{invitationConfig.event.time}, {invitationConfig.event.dayOfWeekVi.toUpperCase()}</span>
        </p>

        {/* Date Display with horizontal lines */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '16px 0',
          }}
        >
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div
              style={{
                borderTop: '1px solid var(--sage-border)',
                borderBottom: '1px solid var(--sage-border)',
                padding: '6px 0',
                fontFamily: 'var(--font-serif)',
                fontSize: '12px',
                letterSpacing: '2px',
                color: 'var(--sage-dark)',
                textTransform: 'uppercase',
              }}
            >
              THÁNG {invitationConfig.event.month}
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '48px',
              fontWeight: 400,
              color: 'var(--sage-dark)',
              lineHeight: 1,
              padding: '0 6px',
            }}
          >
            {invitationConfig.event.day}
          </div>

          <div style={{ flex: 1, textAlign: 'left' }}>
            <div
              style={{
                borderTop: '1px solid var(--sage-border)',
                borderBottom: '1px solid var(--sage-border)',
                padding: '6px 0',
                fontFamily: 'var(--font-serif)',
                fontSize: '12px',
                letterSpacing: '2px',
                color: 'var(--sage-dark)',
                textTransform: 'uppercase',
              }}
            >
              NĂM {invitationConfig.event.year}
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '13.5px',
            color: 'var(--text-light)',
            margin: '8px 0',
          }}
        >
          tại
        </p>
      </div>

      {/* University & Location with decorative flower on right */}
      <div style={{ position: 'relative', margin: '16px 0 28px' }}>
        {/* Right flower decorative bouquet */}
        <img
          src="/assets/flower-envelope-br.png"
          alt="Hoa trang trí địa điểm"
          style={{
            position: 'absolute',
            bottom: '-25px',
            right: '-18px',
            width: '95px',
            zIndex: 1,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.06))',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '1px',
              color: '#b24f46',
              textTransform: 'uppercase',
              marginBottom: '3px',
            }}
          >
            {invitationConfig.graduate.university}
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '28px',
              color: '#b24f46',
              lineHeight: 1.2,
              marginBottom: '8px',
            }}
          >
            {invitationConfig.graduate.campus}
          </div>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-body)',
              maxWidth: '290px',
              margin: '0 auto 16px',
              lineHeight: 1.6,
            }}
          >
            {invitationConfig.graduate.address}
          </p>

          {/* Direction Button */}
          <a
            href={invitationConfig.graduate.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--sage-dark)',
              textDecoration: 'none',
              fontSize: '12.5px',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '2px',
              fontWeight: 600,
              textTransform: 'uppercase',
              padding: '8px 18px',
              border: '1px solid var(--sage-border)',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)')}
          >
            <img
              src="/assets/icon-location.png"
              alt="Vị trí"
              style={{ width: '15px', height: '15px', objectFit: 'contain' }}
            />
            <span>CHỈ ĐƯỜNG</span>
          </a>
        </div>
      </div>

      {/* Calendar Card Component */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          margin: '30px auto 20px',
          padding: '24px 16px',
          background: 'rgba(250, 248, 242, 0.9)',
          borderRadius: '10px',
          border: '1px solid rgba(135, 150, 119, 0.3)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          backgroundImage: 'url(/assets/calendar-paper.png)',
          backgroundSize: 'cover',
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '34px',
            color: 'var(--sage-dark)',
            marginBottom: '14px',
          }}
        >
          October
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Polaroid on left */}
          <div
            style={{
              width: '100px',
              flexShrink: 0,
              background: '#ffffff',
              padding: '5px 5px 16px 5px',
              borderRadius: '2px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
              transform: 'rotate(-3deg)',
            }}
          >
            <img
              src="/assets/photo-calendar.jpg"
              alt="Thế Anh"
              style={{ width: '100%', height: '95px', objectFit: 'cover' }}
            />
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '12px',
                color: '#555',
                textAlign: 'center',
                marginTop: '4px',
              }}
            >
              {invitationConfig.graduate.fullName}
            </div>
          </div>

          {/* Calendar Table on right */}
          <div style={{ flex: 1 }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '10.5px',
                fontFamily: 'var(--font-serif)',
                color: 'var(--text-body)',
                textAlign: 'center',
              }}
            >
              <thead>
                <tr>
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
                    <th key={d} style={{ padding: '2px 1px', fontWeight: 600, color: 'var(--sage-dark)' }}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td style={{ position: 'relative', padding: '2px 0' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '1.5px solid #4a7c59',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        fontWeight: 700,
                        color: '#4a7c59',
                        backgroundColor: 'rgba(74, 124, 89, 0.12)',
                        position: 'relative',
                        fontSize: '11px',
                      }}
                    >
                      24
                      <span
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-3px',
                          fontSize: '9px',
                          color: '#e76f51',
                        }}
                      >
                        ♥
                      </span>
                    </div>
                  </td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Decorative vertical separator */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '32px 0 10px',
        }}
      >
        <div style={{ width: '1px', height: '35px', backgroundColor: 'var(--sage-primary)' }} />
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--sage-primary)',
            margin: '4px 0',
          }}
        />
        <div style={{ width: '1px', height: '35px', backgroundColor: 'var(--sage-primary)' }} />
      </div>
    </section>
  );
};
