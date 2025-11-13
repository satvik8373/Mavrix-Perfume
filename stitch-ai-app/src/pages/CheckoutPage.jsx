import { Link } from 'react-router-dom';
import { useState } from 'react';

function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden text-text-primary bg-background-light">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-text-primary/10 px-4 sm:px-10 py-3 fixed top-0 left-0 right-0 z-50 bg-background-light/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-4 text-text-primary">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
            </svg>
          </div>
          <h2 className="text-text-primary text-xl font-bold">Mavrix Perfume</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <Link className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors" to="/">Home</Link>
          <Link className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors" to="/products">Shop</Link>
          <a className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors" href="#">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-black/5 hover:bg-black/10 text-text-secondary hover:text-text-primary transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-text-primary text-4xl font-black">Checkout</p>
            <p className="text-text-secondary text-base mt-2">Please enter your details to complete the purchase.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <div className="glassmorphism rounded-xl p-6 sm:p-8 glow-border">
                <div className="flex items-center gap-2 pb-8 border-b border-black/10">
                  <span className="text-primary text-base font-medium">1. Address</span>
                  <span className="text-text-secondary text-base font-medium">/</span>
                  <span className="text-text-secondary text-base font-medium">2. Payment</span>
                  <span className="text-text-secondary text-base font-medium">/</span>
                  <span className="text-text-secondary text-base font-medium">3. Review</span>
                </div>

                <h2 className="text-text-primary text-[22px] font-bold pt-8 pb-4">1. Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">Full Name</p>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="Enter your full name"
                      />
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">Address Line 1</p>
                      <input
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="123 Future Avenue"
                      />
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">Address Line 2 (Optional)</p>
                      <input
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="Apartment, suite, etc."
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">City</p>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="Neo City"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">State / Province</p>
                      <input
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="Cyberia"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">ZIP / Postal Code</p>
                      <input
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="90210"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-text-primary text-sm font-medium pb-2">Phone Number</p>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input rounded-lg text-text-primary border border-black/10 bg-white/30 focus:border-purple-500/50 h-12 px-4 text-base transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glassmorphism rounded-xl p-6 sm:p-8 glow-border sticky top-24">
                <h3 className="text-text-primary text-xl font-bold pb-4 border-b border-black/10">Order Summary</h3>
                <div className="space-y-4 py-6 border-b border-black/10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200" alt="Celestial Bloom" />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center size-6 bg-purple-600 text-white text-xs font-bold rounded-full">1</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-text-primary font-medium">Celestial Bloom</p>
                      <p className="text-sm text-text-secondary">50ml Eau de Parfum</p>
                    </div>
                    <p className="text-text-primary font-medium">$120.00</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200" alt="Nova Oud" />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center size-6 bg-purple-600 text-white text-xs font-bold rounded-full">1</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-text-primary font-medium">Nova Oud</p>
                      <p className="text-sm text-text-secondary">100ml Extrait de Parfum</p>
                    </div>
                    <p className="text-text-primary font-medium">$250.00</p>
                  </div>
                </div>
                <div className="py-6 space-y-3">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="text-text-primary">$370.00</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-text-primary">$5.00</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Taxes</span>
                    <span className="text-text-primary">$29.60</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-black/10 flex justify-between items-center">
                  <span className="text-lg font-bold text-text-primary">Total</span>
                  <span className="text-2xl font-black text-purple-600">$404.60</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism rounded-xl p-4 flex items-center justify-between glow-border">
            <Link to="/cart">
              <button className="text-purple-600 hover:text-text-primary transition-colors font-medium">
                &lt; Back to Cart
              </button>
            </Link>
            <button className="flex items-center justify-center rounded-lg h-12 bg-purple-600 text-white gap-2 text-base font-bold px-8 hover:opacity-90 transition-opacity shadow-lg">
              Proceed to Payment
            </button>
          </div>
        </div>
      </footer>

      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(134, 117, 169, 0.2);
        }
        .glow-border {
          box-shadow: 0 0 15px rgba(234, 222, 247, 0.7), 0 0 30px rgba(234, 222, 247, 0.5);
        }
      `}</style>
    </div>
  );
}

export default CheckoutPage;