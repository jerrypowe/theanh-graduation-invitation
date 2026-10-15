import React, { useState } from 'react';
import { invitationConfig } from '../config/invitation';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftModal: React.FC<GiftModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationConfig.bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // VietQR dynamic QR code link
  const vietQrUrl = `https://api.vietqr.io/image/970407-${invitationConfig.bankAccount.accountNumber}-compact2.jpg?amount=0&addInfo=${encodeURIComponent(invitationConfig.bankAccount.note)}&accountName=${encodeURIComponent(invitationConfig.bankAccount.accountHolder)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '32px 24px 28px',
          border: '1px solid var(--sage-border)',
        }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '18px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: 'var(--sage-dark)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            GỬI QUÀ MỪNG
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-light)', lineHeight: 1.5 }}>
            Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với mình!
          </p>
        </div>

        {/* QR Code Container */}
        <div
          style={{
            margin: '0 auto 18px',
            width: '180px',
            height: '180px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid #ddd',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={vietQrUrl}
            alt="Mã QR Chuyển khoản"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            onError={(e) => {
              // fallback if offline
              e.currentTarget.src = '/assets/wax-seal.png';
            }}
          />
        </div>

        {/* Bank Information Details */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            padding: '14px',
            border: '1px solid var(--sage-border)',
            marginBottom: '18px',
            textAlign: 'left',
            fontSize: '13px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-light)' }}>Ngân hàng:</span>
            <span style={{ fontWeight: 600, color: 'var(--sage-dark)' }}>
              {invitationConfig.bankAccount.bankName}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-light)' }}>Chủ tài khoản:</span>
            <span style={{ fontWeight: 600, color: 'var(--sage-dark)' }}>
              {invitationConfig.bankAccount.accountHolder}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-light)' }}>Số tài khoản:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 700, letterSpacing: '1px', color: 'var(--sage-primary)' }}>
                {invitationConfig.bankAccount.accountNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Copy STK Button */}
        <button
          onClick={handleCopy}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '11px',
            fontSize: '13.5px',
          }}
        >
          {copied ? '✓ ĐÃ SAO CHÉP SỐ TÀI KHOẢN' : 'SAO CHÉP SỐ TÀI KHOẢN'}
        </button>
      </div>
    </div>
  );
};
