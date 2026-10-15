import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { GiftModal } from './GiftModal';
import { WishesWall } from './WishesWall';
import { fetchGuestWishes, submitGuestWish } from '../services/wishesService';
import type { GuestWish } from '../services/wishesService';

interface RsvpSectionProps {
  guestName: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ guestName }) => {
  const [name, setName] = useState(guestName);
  const [wishes, setWishes] = useState('');
  const [attendance, setAttendance] = useState('Tôi chắc chắn sẽ đến');
  const [submitted, setSubmitted] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  
  // Wishes state
  const [wishesList, setWishesList] = useState<GuestWish[]>([]);
  const [isLoadingWishes, setIsLoadingWishes] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Keep name synced if guestName prop updates
  useEffect(() => {
    if (guestName) {
      setName(guestName);
    }
  }, [guestName]);

  // Load wishes
  const loadWishes = useCallback(async () => {
    setIsLoadingWishes(true);
    try {
      const data = await fetchGuestWishes();
      setWishesList(data);
    } catch (err) {
      console.error('Failed to load wishes:', err);
    } finally {
      setIsLoadingWishes(false);
    }
  }, []);

  useEffect(() => {
    loadWishes();
  }, [loadWishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Vui lòng nhập tên của bạn.');
      return;
    }
    if (!wishes.trim()) {
      setErrorMessage('Vui lòng nhập lời chúc của bạn.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const result = await submitGuestWish(name, wishes, attendance);
      if (result.success) {
        // Trigger celebration confetti
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#758667', '#cf7b7b', '#b59863', '#ffffff'],
          });
        } catch {
          // ignore if canvas not supported
        }

        // Prepend new wish or reload
        if (result.wish) {
          setWishesList((prev) => [result.wish!, ...prev.filter((w) => w.id !== result.wish!.id)]);
        } else {
          loadWishes();
        }

        setWishes('');
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Có lỗi xảy ra, vui lòng thử lại.');
      }
    } catch (err) {
      console.error('RSVP submit error:', err);
      setErrorMessage('Không thể gửi lời chúc vào lúc này. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="rsvp-section"
      style={{
        position: 'relative',
        width: '100%',
        padding: '30px 20px 0',
        textAlign: 'center',
      }}
    >
      {/* Warm Heartfelt Message */}
      <div style={{ maxWidth: '380px', margin: '0 auto 26px' }}>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-body)',
            lineHeight: 1.7,
            fontFamily: 'var(--font-serif)',
          }}
        >
          Rất mong có bạn đến chung vui cùng mình! Xin vui lòng xác nhận sự có mặt của bạn để mình chuẩn bị đón tiếp một cách chu đáo nhất. Xin cảm ơn!
        </p>
      </div>

      {/* RSVP Form Container */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '360px',
          margin: '0 auto 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {/* Error message banner */}
        {errorMessage && (
          <div
            style={{
              padding: '8px 14px',
              backgroundColor: '#ffebee',
              color: '#c62828',
              borderRadius: '8px',
              fontSize: '12px',
              textAlign: 'left',
              border: '1px solid #ffcdd2',
            }}
          >
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Name input */}
        <div style={{ textAlign: 'left' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên của bạn"
            maxLength={60}
            required
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: '25px',
              border: '1px solid var(--sage-border)',
              background: 'rgba(255, 255, 255, 0.9)',
              fontSize: '13.5px',
              fontFamily: 'var(--font-body)',
              color: 'var(--text-main)',
              outline: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              transition: 'border 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--sage-border)')}
          />
        </div>

        {/* Wishes textarea */}
        <div style={{ textAlign: 'left' }}>
          <textarea
            value={wishes}
            onChange={(e) => setWishes(e.target.value)}
            placeholder="Gửi lời chúc đến tân cử nhân..."
            rows={3}
            maxLength={500}
            required
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: '16px',
              border: '1px solid var(--sage-border)',
              background: 'rgba(255, 255, 255, 0.9)',
              fontSize: '13.5px',
              fontFamily: 'var(--font-body)',
              color: 'var(--text-main)',
              outline: 'none',
              resize: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              transition: 'border 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--sage-border)')}
          />
          <div style={{ textAlign: 'right', fontSize: '10.5px', color: 'var(--text-light)', marginTop: '2px', paddingRight: '6px' }}>
            {wishes.length}/500 ký tự
          </div>
        </div>

        {/* Attendance Select */}
        <div style={{ textAlign: 'left', position: 'relative' }}>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: '25px',
              border: '1px solid var(--sage-border)',
              background: 'rgba(255, 255, 255, 0.9)',
              fontSize: '13.5px',
              fontFamily: 'var(--font-body)',
              color: 'var(--text-main)',
              outline: 'none',
              cursor: 'pointer',
              appearance: 'none',
              WebkitAppearance: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            <option value="Tôi chắc chắn sẽ đến">Tôi chắc chắn sẽ đến</option>
            <option value="Xin lỗi tôi bận rồi">Xin lỗi tôi bận rồi</option>
          </select>
          <div
            style={{
              position: 'absolute',
              right: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: 'var(--sage-dark)',
              fontSize: '10px',
            }}
          >
            ▼
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '14px',
            marginTop: '4px',
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? 'ĐANG GỬI...' : 'XÁC NHẬN'}
        </button>

        {/* Gift Button */}
        <button
          type="button"
          onClick={() => setIsGiftModalOpen(true)}
          className="btn-secondary"
          style={{
            width: '100%',
            padding: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontSize: '13px',
          }}
        >
          🎁 GỬI QUÀ MỪNG
        </button>
      </form>

      {/* Persistent Guest Wishes Wall */}
      <WishesWall
        wishes={wishesList}
        isLoading={isLoadingWishes}
        onRefresh={loadWishes}
      />

      {/* Thank you confirmation Modal */}
      {submitted && (
        <div className="modal-overlay" onClick={() => setSubmitted(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSubmitted(false)}>
              ✕
            </button>
            <div style={{ fontSize: '42px', marginBottom: '12px' }}>🎉</div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: 'var(--sage-dark)',
                marginBottom: '10px',
                letterSpacing: '1px',
              }}
            >
              Cảm Ơn Bạn!
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
              Thông tin xác nhận và lời chúc của bạn đã được ghi nhận. Thế Anh rất mong chờ được gặp bạn trong ngày lễ tốt nghiệp!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
              style={{ width: '100%', padding: '10px' }}
            >
              HOÀN TẤT
            </button>
          </div>
        </div>
      )}

      {/* Gift Modal Component */}
      <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />

      {/* Bouquet with graduation bear photo at bottom of section */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          margin: '25px auto 0',
          overflow: 'hidden',
        }}
      >
        <img
          src="/assets/photo-footer-bouquet.jpg"
          alt="Hoa tốt nghiệp và chú gấu cử nhân"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
};
