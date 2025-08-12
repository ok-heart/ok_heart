# React 弹窗组件

一个功能完整、适配性强的React弹窗组件，专为红包券展示场景设计。

## 功能特点

✅ **底色蒙层** - 半透明背景，点击关闭弹窗  
✅ **背景图片固定定位** - 背景图片与弹窗顶部保持固定距离，适配各种机型  
✅ **响应式设计** - 完美适配手机、平板、桌面端  
✅ **Title 和 Content 分区** - 清晰的内容结构  
✅ **动态内容高度** - Content 区域由红包券数量自动撑开  
✅ **优雅滚动** - 内容过多时支持滚动，自定义滚动条样式  
✅ **精美红包券样式** - 渐变背景、装饰效果、状态管理  

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

### 构建生产版本

```bash
npm build
```

## 组件使用

```jsx
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const coupons = [
    {
      amount: 50,
      description: '满减券',
      condition: '满200元可用',
      isUsed: false
    }
    // ... 更多红包券
  ];

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        打开弹窗
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="我的红包券"
        coupons={coupons}
        backgroundImage="your-background-image-url"
      />
    </div>
  );
};
```

## Props 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `isOpen` | boolean | ✅ | - | 控制弹窗显示/隐藏 |
| `onClose` | function | ✅ | - | 关闭弹窗的回调函数 |
| `title` | string | ✅ | - | 弹窗标题 |
| `coupons` | array | ❌ | [] | 红包券数据数组 |
| `backgroundImage` | string | ❌ | - | 背景装饰图片URL |

### 红包券数据格式

```javascript
{
  amount: 50,           // 红包券金额
  description: '满减券', // 红包券描述
  condition: '满200元可用', // 使用条件
  isUsed: false         // 是否已使用
}
```

## 响应式断点

- **桌面端**: > 480px
- **平板端**: 481px - 768px  
- **手机端**: ≤ 480px
- **小屏手机**: ≤ 320px

## 样式定制

组件使用 CSS 变量和类名，方便自定义样式：

- `.modal-overlay` - 蒙层容器
- `.modal-container` - 弹窗容器
- `.modal-background` - 背景图片
- `.modal-content` - 弹窗主体
- `.modal-title` - 标题区域
- `.modal-body` - 内容区域
- `.coupon-item` - 红包券项目

## 技术栈

- React 18.2.0
- CSS3 (Flexbox + Grid)
- 响应式设计
- 现代浏览器支持

## 浏览器兼容性

- Chrome ≥ 88
- Firefox ≥ 78
- Safari ≥ 14
- Edge ≥ 88

## 许可证

MIT License