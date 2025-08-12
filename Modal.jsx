import React from 'react';
import './Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  coupons = [], 
  backgroundImage 
}) => {
  if (!isOpen) return null;

  const handleMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleMaskClick}>
      <div className="modal-container">
        {/* 背景图片 */}
        {backgroundImage && (
          <div 
            className="modal-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
        {/* 弹窗内容 */}
        <div className="modal-content">
          {/* 关闭按钮 */}
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          
          {/* 标题区域 */}
          <div className="modal-title">
            {title}
          </div>
          
          {/* 内容区域 - 红包券列表 */}
          <div className="modal-body">
            {coupons.map((coupon, index) => (
              <div key={index} className="coupon-item">
                <div className="coupon-info">
                  <div className="coupon-amount">¥{coupon.amount}</div>
                  <div className="coupon-desc">{coupon.description}</div>
                  <div className="coupon-condition">{coupon.condition}</div>
                </div>
                <button className="coupon-btn">
                  {coupon.isUsed ? '已使用' : '立即使用'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;