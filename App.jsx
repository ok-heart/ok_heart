import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 示例红包券数据
  const sampleCoupons = [
    {
      amount: 50,
      description: '满减券',
      condition: '满200元可用',
      isUsed: false
    },
    {
      amount: 20,
      description: '新用户专享',
      condition: '满100元可用',
      isUsed: false
    },
    {
      amount: 100,
      description: '生日特惠券',
      condition: '满500元可用',
      isUsed: true
    },
    {
      amount: 30,
      description: '品类券',
      condition: '仅限电子产品',
      isUsed: false
    },
    {
      amount: 15,
      description: '运费券',
      condition: '无门槛使用',
      isUsed: false
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>React 弹窗组件演示</h1>
        <p>点击下方按钮打开弹窗，查看红包券列表</p>
      </div>
      
      <div className="app-content">
        <button className="open-modal-btn" onClick={openModal}>
          打开红包券弹窗
        </button>
        
        <div className="feature-list">
          <h3>功能特点：</h3>
          <ul>
            <li>✅ 底色蒙层，点击关闭</li>
            <li>✅ 背景图片与弹窗顶部固定距离</li>
            <li>✅ 响应式适配各种机型</li>
            <li>✅ Title 和 Content 分区</li>
            <li>✅ Content 由红包券数量动态撑开</li>
            <li>✅ 优雅的滚动效果</li>
            <li>✅ 精美的红包券样式</li>
          </ul>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="我的红包券"
        coupons={sampleCoupons}
        backgroundImage="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=背景装饰"
      />
    </div>
  );
};

export default App;