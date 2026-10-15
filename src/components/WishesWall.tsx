import type { GuestWish } from '../services/wishesService';

interface WishesWallProps {
  wishes: GuestWish[];
  isLoading: boolean;
  onRefresh: () => void;
}

export const WishesWall: React.FC<WishesWallProps> = ({ wishes, isLoading, onRefresh }) => {
  const formatDate = (isoString: string): string => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '';
    }
  };

  return (
    <div
      style={{
        maxWidth: '380px',
        margin: '28px auto 10px',
        textAlign: 'left',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          padding: '0 4px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: 'var(--sage-dark)',
              textTransform: 'uppercase',
            }}
          >
            LỜI CHÚC ĐÃ GỬI
          </h3>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-serif)',
              background: 'var(--sage-primary)',
              color: '#fff',
              borderRadius: '12px',
              padding: '1px 7px',
              fontWeight: 600,
            }}
          >
            {wishes.length}
          </span>
        </div>

        <button
          onClick={onRefresh}
          disabled={isLoading}
          aria-label="Cập nhật lời chúc"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--sage-primary)',
            fontSize: '12px',
            fontFamily: 'var(--font-body)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 6px',
            borderRadius: '4px',
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          <span style={{ fontSize: '14px', display: 'inline-block', transform: isLoading ? 'rotate(180deg)' : 'none', transition: 'transform 0.5s' }}>
            🔄
          </span>
          <span>{isLoading ? 'Đang tải...' : 'Làm mới'}</span>
        </button>
      </div>

      {/* Wishes Feed */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: '340px',
          overflowY: 'auto',
          paddingRight: '4px',
        }}
      >
        {wishes.length === 0 ? (
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '12px',
              padding: '24px 16px',
              textAlign: 'center',
              border: '1px dashed var(--sage-border)',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '6px' }}>🎓</div>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', fontFamily: 'var(--font-serif)' }}>
              Hãy là người đầu tiên gửi lời chúc đến tân cử nhân!
            </p>
          </div>
        ) : (
          wishes.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '12px',
                padding: '14px 16px',
                border: '1px solid rgba(135, 150, 119, 0.3)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--sage-dark)',
                  }}
                >
                  {item.guest_name}
                </span>
                <span
                  style={{
                    fontSize: '10.5px',
                    color: 'var(--text-light)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {formatDate(item.created_at)}
                </span>
              </div>
              <p
                style={{
                  fontSize: '12.5px',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                "{item.message}"
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
