# Buxom Cosmetics - Frontend

A modern React-TypeScript e-commerce frontend for Buxom Cosmetics, featuring a responsive design, Redux state management, and integrated Stripe payment processing.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **State Management**: Redux Toolkit for cart, auth, and modal management
- **Payment Integration**: Stripe checkout with guest and authenticated user support
- **Responsive Design**: TailwindCSS with custom theming and animations
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling
- **Admin Panel**: Complete CRUD operations for products, categories, users
- **Product Management**: Categories, tags, badges, shades, and image galleries
- **Shopping Cart**: Persistent cart with quantity management
- **User Authentication**: Login/register with role-based access
- **File Uploads**: Image upload functionality for products
- **Animation**: Framer Motion for smooth transitions
- **Carousel**: Embla Carousel with autoplay support

## 📋 Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
  - [Shopping Cart](#shopping-cart)
  - [Stripe Payment Integration](#stripe-payment-integration)
  - [Admin Panel](#admin-panel)
  - [Authentication](#authentication)
- [UI Components](#ui-components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Type Safety](#type-safety)
- [Contributing](#contributing)

## 🛠 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Backend API running on port 8080

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamjunaidjutt/buxom-website-clone.git
   cd buxom-website-clone/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# API Configuration (Optional - defaults to localhost:8080)
VITE_API_BASE_URL=http://localhost:8080

# Development Settings
VITE_NODE_ENV=development
```

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript compiler
tsc

# Lint code
npm run lint
```

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
│   └── vite.svg           # Default Vite icon
├── src/
│   ├── app/               # Redux store configuration
│   │   └── store.tsx      # Store setup with types
│   ├── assets/            # Images, logos, media files
│   │   └── logos/         # Brand logos
│   ├── components/        # React components
│   │   ├── about/         # About page components
│   │   ├── admin/         # Admin panel components
│   │   │   ├── categories/
│   │   │   ├── products/
│   │   │   ├── users/
│   │   │   ├── orders/
│   │   │   ├── badges/
│   │   │   ├── tags/
│   │   │   ├── shades/
│   │   │   └── images/
│   │   ├── checkout/      # Stripe checkout components
│   │   │   └── CheckoutButton.tsx
│   │   ├── contactus/     # Contact page components
│   │   ├── faqs/         # FAQ components
│   │   ├── home/         # Homepage components
│   │   │   ├── CartModal.tsx
│   │   │   ├── MainBar.tsx
│   │   │   ├── SubMenu.tsx
│   │   │   └── ...
│   │   ├── products/     # Product-related components
│   │   ├── signIn/       # Authentication components
│   │   ├── signup/
│   │   ├── shippingandreturn/
│   │   └── ui/           # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── ProductCard.tsx
│   │       └── ...
│   ├── features/         # Redux slices
│   │   ├── authSlice.tsx # Authentication state
│   │   ├── CartSlice.tsx # Shopping cart state
│   │   └── modalSlice.tsx # Modal state
│   ├── lib/              # Utilities and services
│   │   ├── types.ts      # TypeScript type definitions
│   │   ├── utils.ts      # Utility functions
│   │   ├── stripe.ts     # Stripe configuration
│   │   └── paymentService.ts # Payment API calls
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Admin.tsx
│   │   ├── SignIn.tsx
│   │   ├── CheckoutSuccess.tsx
│   │   ├── CheckoutCancel.tsx
│   │   └── ...
│   ├── App.tsx           # App component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── components.json       # shadcn/ui configuration
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔑 Key Features

### Shopping Cart

- **Redux State Management**: Persistent cart across sessions
- **Quantity Controls**: Increase/decrease item quantities
- **Price Calculation**: Automatic total price calculation
- **Modal Interface**: Slide-out cart modal
- **Checkout Integration**: Direct integration with Stripe

```typescript
// Cart operations
import { addToCart, removeFromCart, increaseItemQuantity } from '@/features/CartSlice';

// Usage in components
dispatch(addToCart(product));
dispatch(increaseItemQuantity(productId));
```

### Stripe Payment Integration

- **Guest Checkout**: Email collection for unauthenticated users
- **Authenticated Checkout**: Seamless checkout for logged-in users
- **Payment Processing**: Secure Stripe integration
- **Success/Cancel Pages**: Dedicated result pages
- **Error Handling**: Comprehensive error management

```typescript
// Checkout process
await redirectToCheckout(cartItems, customerEmail, userId);
```

### Admin Panel

Complete CRUD operations for:

- **Products**: Create, edit, delete products with images
- **Categories**: Manage product categories
- **Users**: User management with role-based access
- **Orders**: Order tracking and management
- **Tags & Badges**: Product labeling system
- **Shades**: Color variants for products
- **Images**: Product image gallery management

### Authentication

- **User Registration**: Account creation with validation
- **Login System**: JWT-based authentication
- **Role-based Access**: Admin vs regular user permissions
- **Redux Integration**: Auth state management

## 🎨 UI Components

### Custom Components

- **ProductCard**: Product display with cart integration
- **CartModal**: Sliding cart interface
- **CheckoutButton**: Stripe checkout component
- **Navigation**: Multi-level menu system
- **Carousel**: Product showcases with autoplay

### Radix UI Primitives

- **Button**: Customizable button variants
- **Input**: Form input components
- **Select**: Dropdown selectors
- **Checkbox**: Form checkboxes
- **Label**: Form labels
- **Separator**: Visual dividers

## 🗂 State Management

### Redux Toolkit Slices

```typescript
// Store configuration
const store = configureStore({
  reducer: {
    cart: CartReducer,
    auth: AuthReducer,
    modal: ModalReducer,
  },
});

// Type-safe selectors
const cartItems = useSelector((state: RootState) => state.cart.cartItems);
```

### Cart State
```typescript
interface CartState {
  cartItems: CartItem[];
  cartTotalPrice: number;
  cartTotalQuantity: number;
}
```

### Auth State
```typescript
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
```

## 🌐 API Integration

### Base Configuration
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
```

### Endpoints Used

- **Products**: `GET /products`, `GET /products/:id`, `GET /products/category/:id`
- **Categories**: `GET /categories`, `GET /categories/:id`
- **Users**: `POST /users/login`, `POST /users/create`
- **Payments**: `POST /payments/create-checkout-session`
- **Orders**: `GET /orders`, `POST /orders`

### Error Handling
```typescript
try {
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('API Error');
  const data = await response.json();
} catch (error) {
  toast.error('Operation failed');
  console.error(error);
}
```

## 🎨 Styling

### Design System

- **Dark Theme**: Primary black background with white text
- **Brand Colors**: Pink accent color (#c17c80)
- **Typography**: Nunito Sans font family
- **Responsive Design**: Mobile-first approach
- **Animations**: TailwindCSS animate utilities + Framer Motion

## 🚦 Development Guidelines

### Code Organization

1. **Components**: Keep components small and focused
2. **Types**: Define interfaces in `lib/types.ts`
3. **State**: Use Redux for global state, local state for component-specific data
4. **API Calls**: Abstract API calls into service functions
5. **Error Handling**: Use react-hot-toast for user feedback

### Best Practices

- **TypeScript**: Strict typing enabled
- **ESLint**: Code quality enforcement
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA attributes
- **Performance**: Code splitting and lazy loading where applicable

## 🧪 Testing

### Manual Testing Checklist

- [ ] Cart functionality (add, remove, update quantities)
- [ ] Checkout flow (guest and authenticated)
- [ ] Admin CRUD operations
- [ ] Responsive design on different screen sizes
- [ ] Form validation and error handling
- [ ] Navigation and routing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Build Output

The build creates optimized files in the `dist/` directory:
- Minified JavaScript and CSS
- Optimized images and assets
- Source maps for debugging

### Environment Variables for Production

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_stripe_key
VITE_API_BASE_URL=https://your-api-domain.com
VITE_NODE_ENV=production
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit your changes**: `git commit -m 'Add some feature'`
4. **Push to the branch**: `git push origin feature/your-feature`
5. **Submit a pull request**

### Development Setup

1. Ensure backend is running on port 8080
2. Set up environment variables
3. Follow TypeScript strict mode
4. Test all features before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Buxom Cosmetics** - For the design inspiration
- **React Team** - For the amazing framework
- **Radix UI** - For accessible UI primitives
- **TailwindCSS** - For utility-first CSS framework
- **Stripe** - For payment processing
- **Redux Toolkit** - For state management


---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
