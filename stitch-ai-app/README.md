# Mavrix Perfume - AI Powered Perfumery E-commerce

A modern, fully functional e-commerce website for AI-powered perfumery built with React, Vite, and Tailwind CSS.

## Features

✨ **Complete E-commerce Flow**
- Home page with hero section, featured products, and categories
- Product listing page with filters and sorting
- Product detail page with reviews and related products
- Shopping cart with quantity management
- Checkout page with shipping form
- Buyer panel (Orders dashboard)

🎨 **Modern Design**
- Glassmorphism effects
- Gradient text and buttons
- Smooth transitions and hover effects
- Responsive design for all devices
- Purple/lavender color scheme

🚀 **Technologies Used**
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Material Symbols Icons
- Google Fonts (Inter, Nunito Sans)

## Project Structure

```
mavrix-perfume-app/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx           # Landing page with hero and featured products
│   │   ├── ProductListingPage.jsx # Product catalog with filters
│   │   ├── ProductDetailPage.jsx  # Individual product details
│   │   ├── CartPage.jsx           # Shopping cart
│   │   ├── CheckoutPage.jsx       # Checkout form
│   │   └── BuyerPanel.jsx         # Orders dashboard
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
└── package.json                   # Dependencies
```

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd stitch-ai-app
   ```

2. **Install dependencies (already done):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Available Routes

- `/` - Home page
- `/products` - Product listing page
- `/product/:id` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/orders` - Buyer panel (Orders dashboard)

## Features by Page

### Home Page (`/`)
- Hero section with gradient text
- Featured product collection
- Category exploration grid
- AI Sommelier section
- Newsletter signup
- Footer with links

### Product Listing (`/products`)
- Sidebar with filters (Brand, Price Range, Scent Notes)
- Product grid with hover effects
- Sort functionality
- Pagination
- Add to cart buttons

### Product Detail (`/product/:id`)
- Large product image
- Product information and tags
- Price display
- Add to cart button
- Product description
- Reviews and ratings with star breakdown
- Related products carousel

### Shopping Cart (`/cart`)
- Product list with images
- Quantity adjustment (+/-)
- Price calculation
- Promo code input
- Order summary
- Proceed to checkout button

### Checkout (`/checkout`)
- Multi-step progress indicator
- Shipping information form
- Order summary sidebar
- Product list with quantities
- Total calculation with shipping and taxes
- Back to cart and proceed to payment buttons

### Buyer Panel (`/orders`)
- Sidebar navigation
- Orders table with status badges
- Pagination
- View invoice links
- User profile section

## Customization

### Colors
Edit the Tailwind config in `index.html`:
```javascript
colors: {
  "primary": "#6961ff",
  "background-light": "#fdfbf7",
  "text-dark": "#343048",
  "pastel-rose": "#e7d4e8",
  "soft-lavender": "#d2cffc",
}
```

### Images
Replace placeholder images with your own:
- Product images: Update `img` properties in component arrays
- Background images: Update inline styles

### Content
- Edit product data in each page component
- Modify text content directly in JSX
- Update navigation links in headers

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All pages are fully responsive
- Images use Unsplash placeholders (replace with your own)
- Cart state is managed locally (add Redux/Context for persistence)
- Forms are functional but need backend integration
- Payment processing needs to be implemented

## Future Enhancements

- [ ] Add state management (Redux/Zustand)
- [ ] Implement authentication
- [ ] Connect to backend API
- [ ] Add payment gateway integration
- [ ] Implement search functionality
- [ ] Add product filtering logic
- [ ] Create admin panel
- [ ] Add wishlist functionality
- [ ] Implement order tracking
- [ ] Add product reviews system

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ for Mavrix Perfume using React + Vite
