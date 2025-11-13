# 🗺️ Stitch AI - Navigation Guide

## Page Flow & Connections

```
┌─────────────────────────────────────────────────────────────┐
│                        HOME PAGE (/)                         │
│  • Hero Section with "Explore Collection" button            │
│  • Featured Products (4 cards with "Discover" buttons)      │
│  • Category Grid (Floral, Oud, Citrus, Unisex)             │
│  • AI Sommelier Section                                     │
│  • Newsletter Signup                                         │
│  • Footer with Links                                         │
└────────────┬────────────────────────────────────────────────┘
             │
             ├──► "Explore Collection" ──────────────┐
             ├──► "Discover" buttons ────────────────┤
             ├──► Category cards ────────────────────┤
             └──► Footer "Collections" link ─────────┤
                                                      │
                                                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  PRODUCT LISTING (/products)                 │
│  • Sidebar Filters (Brand, Price, Scent Notes)             │
│  • Product Grid (6 products)                                │
│  • Sort Dropdown                                            │
│  • Pagination                                               │
│  • Hover: "Add to Cart" button appears                     │
└────────────┬────────────────────────────────────────────────┘
             │
             ├──► Click Product Card ────────────────┐
             └──► "Add to Cart" button ──────────────┼──┐
                                                      │  │
                                                      ▼  │
┌─────────────────────────────────────────────────────────────┐│
│               PRODUCT DETAIL (/product/:id)                  ││
│  • Large Product Image                                       ││
│  • Product Info (Name, Brand, Price, Tags)                  ││
│  • Description Section                                       ││
│  • Reviews & Ratings (Star breakdown)                       ││
│  • Related Products (4 items)                               ││
│  • "Add to Cart" button                                     ││
└────────────┬────────────────────────────────────────────────┘│
             │                                                   │
             └──► "Add to Cart" button ─────────────────────────┤
                                                                 │
                                                                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    SHOPPING CART (/cart)                     │
│  • Product List with Images                                 │
│  • Quantity Controls (+/-)                                  │
│  • Price Calculations                                       │
│  • Promo Code Input                                         │
│  • Order Summary                                            │
│  • "Proceed to Checkout" button                            │
└────────────┬────────────────────────────────────────────────┘
             │
             └──► "Proceed to Checkout" ────────────┐
                                                      │
                                                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    CHECKOUT (/checkout)                      │
│  • Progress Indicator (1. Address / 2. Payment / 3. Review) │
│  • Shipping Form (7 fields)                                 │
│  • Order Summary Sidebar                                    │
│  • Product List with Quantities                             │
│  • Total Calculation                                        │
│  • "Back to Cart" & "Proceed to Payment" buttons           │
└────────────┬────────────────────────────────────────────────┘
             │
             └──► "Proceed to Payment" ─────────────┐
                  (Would go to payment page)         │
                                                      │
                                                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   BUYER PANEL (/orders)                      │
│  • Sidebar Navigation (Orders, Wishlist, Profile, etc.)    │
│  • Orders Table with Status Badges                         │
│  • Pagination                                               │
│  • "View Invoice" links                                     │
│  • User Profile Section                                     │
└─────────────────────────────────────────────────────────────┘
```

## 🔗 Header Navigation (Available on All Pages)

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] Stitch AI    Home  Shop  About  [🔍] [🛒] [👤]  │
└──────────────────────────────────────────────────────────┘
     │                  │     │     │            │    │
     ▼                  ▼     ▼     ▼            ▼    ▼
   Home              Home  Products About      Cart Orders
```

## 📱 Quick Access Points

### From Any Page:
- **Logo** → Home Page
- **Cart Icon** → Shopping Cart
- **Person Icon** → Buyer Panel (Orders)
- **Home Link** → Home Page
- **Shop/Explore Link** → Product Listing

### From Home Page:
- **Explore Collection Button** → Product Listing
- **Product "Discover" Buttons** → Product Detail
- **Category Cards** → Product Listing (filtered)
- **Footer Links** → Various pages

### From Product Listing:
- **Product Card** → Product Detail
- **Add to Cart (hover)** → Adds to cart, stays on page
- **Filters** → Filter products (visual only)
- **Pagination** → Navigate pages

### From Product Detail:
- **Add to Cart Button** → Adds to cart
- **Related Products** → Other Product Details
- **Back Button** → Previous page

### From Cart:
- **Quantity +/-** → Update quantities
- **Proceed to Checkout** → Checkout Page
- **Continue Shopping** → Product Listing

### From Checkout:
- **Back to Cart** → Shopping Cart
- **Proceed to Payment** → Payment (not implemented)

### From Buyer Panel:
- **Sidebar Links** → Various account pages
- **View Invoice** → Invoice details (not implemented)

## 🎯 User Journey Examples

### Journey 1: Browse & Buy
```
Home → Products → Product Detail → Cart → Checkout
```

### Journey 2: Quick Purchase
```
Home → Featured Product → Add to Cart → Checkout
```

### Journey 3: Category Shopping
```
Home → Category (e.g., Floral) → Products → Product Detail → Cart
```

### Journey 4: Check Orders
```
Any Page → Person Icon → Orders Dashboard
```

## 🔄 State Management

### Cart State (Local)
- Managed in `CartPage.jsx`
- Updates quantities in real-time
- Calculates totals automatically
- Resets on page refresh

### Form State
- Managed in `CheckoutPage.jsx`
- Controlled inputs
- Real-time validation ready

### Filter State
- Managed in `ProductListingPage.jsx`
- Visual only (not connected to data)
- Ready for backend integration

## 💡 Interactive Elements

### Buttons
- ✅ All navigation buttons work
- ✅ Add to cart buttons (visual feedback)
- ✅ Quantity controls (+/-)
- ✅ Form submit buttons
- ✅ Pagination buttons

### Links
- ✅ All internal links use React Router
- ✅ No page reloads on navigation
- ✅ Smooth transitions

### Forms
- ✅ Checkout form captures input
- ✅ Newsletter form (visual only)
- ✅ Promo code input (visual only)

## 🎨 Visual Feedback

### Hover Effects
- Product cards scale up
- Buttons glow
- Links change color
- Add to cart appears on products

### Active States
- Current page highlighted in nav
- Selected filters shown
- Active pagination number

### Loading States
- Ready for implementation
- Skeleton screens can be added

## 📍 Current Location Indicators

- **Home**: Logo link
- **Products**: "Explore" in nav
- **Orders**: Sidebar highlight
- **Cart**: Cart icon badge (ready)

---

## 🚀 Getting Started

1. Start at **Home Page** (`/`)
2. Click **"Explore Collection"**
3. Browse products
4. Click a product to see details
5. Click **"Add to Cart"**
6. Click cart icon to view cart
7. Click **"Proceed to Checkout"**
8. Fill shipping form
9. Click person icon to see orders

---

**All pages are connected and navigable!** 🎉
