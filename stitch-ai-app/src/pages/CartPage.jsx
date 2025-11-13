import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Elysian Bloom', size: '100ml', price: 180, quantity: 1, img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200' },
    { id: 2, name: 'Quantum Void', size: '50ml', price: 220, quantity: 1, img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200' }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,143,255,0.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-black/10 px-4 py-5">
          <Link to="/" className="flex items-center gap-4 text-text-primary">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
              </svg>
            </div>
            <h2 className="text-text-primary text-lg font-bold">Mavrix Perfume</h2>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link className="text-text-primary/80 hover:text-text-primary transition-colors text-sm font-medium" to="/">Home</Link>
            <Link className="text-text-primary/80 hover:text-text-primary transition-colors text-sm font-medium" to="/products">Shop</Link>
            <Link className="text-text-primary/80 hover:text-text-primary transition-colors text-sm font-medium" to="/orders">Account</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-purple-500/20 text-purple-600 hover:bg-purple-500/30 transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </header>

        <main className="flex-grow pt-12 pb-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-text-primary text-4xl font-black mb-12">Your Shopping Cart</p>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-grow lg:w-2/3">
                <div className="overflow-hidden rounded-xl border border-black/5 bg-white/50 backdrop-blur-md shadow-lg">
                  <table className="w-full text-left">
                    <thead className="border-b border-black/10">
                      <tr>
                        <th className="px-6 py-4 text-text-primary w-[50%] text-sm font-medium">Product</th>
                        <th className="px-6 py-4 text-text-primary text-center w-[20%] text-sm font-medium">Quantity</th>
                        <th className="px-6 py-4 text-text-primary text-right w-[15%] text-sm font-medium">Price</th>
                        <th className="px-6 py-4 text-text-primary text-right w-[15%] text-sm font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id} className="border-b border-black/10">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                              <img className="w-12 h-12 rounded-lg object-cover" src={item.img} alt={item.name} />
                              <div>
                                <p className="text-text-primary text-sm font-medium">{item.name}</p>
                                <p className="text-text-secondary text-xs">{item.size}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-text-secondary transition-colors"
                              >
                                -
                              </button>
                              <input
                                className="w-10 h-8 bg-transparent text-center text-text-primary text-sm border-0 p-0 focus:ring-0"
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-text-primary transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-text-secondary text-sm text-right">${item.price}.00</td>
                          <td className="px-6 py-4 text-text-primary text-sm font-medium text-right">${item.price * item.quantity}.00</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary */}
              <div className="flex-shrink-0 lg:w-1/3">
                <div className="rounded-xl border border-black/5 bg-white/50 backdrop-blur-md p-6 space-y-6 shadow-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <p className="text-text-secondary text-sm">Subtotal</p>
                      <p className="text-text-primary text-sm">${subtotal}.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-text-secondary text-sm">Shipping</p>
                      <p className="text-text-primary text-sm">Calculated at next step</p>
                    </div>
                  </div>
                  <div className="border-t border-black/10"></div>
                  <div className="flex justify-between">
                    <p className="text-text-primary text-base font-medium">Total</p>
                    <p className="text-text-primary text-lg font-bold">${subtotal}.00</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      className="flex-grow rounded-lg border border-black/10 bg-black/5 text-text-primary placeholder:text-text-secondary px-4 h-12 text-sm focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Enter promo code"
                    />
                    <button className="rounded-lg bg-black/5 text-text-primary hover:bg-black/10 transition-colors text-sm font-medium px-5 h-12">
                      Apply
                    </button>
                  </div>
                  <Link to="/checkout">
                    <button className="flex w-full items-center justify-center rounded-lg h-14 px-6 text-base font-bold text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 transition-opacity">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
