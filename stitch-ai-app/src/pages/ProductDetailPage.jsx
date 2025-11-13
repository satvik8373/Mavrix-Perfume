import { Link } from 'react-router-dom';

function ProductDetailPage() {
  const relatedProducts = [
    { name: 'Nebula Oud', brand: 'Mavrix Collection', price: 210, img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300' },
    { name: 'Solar Vetiver', brand: 'Mavrix Collection', price: 175, img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300' },
    { name: 'Binary Rose', brand: 'Mavrix Collection', price: 190, img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300' },
    { name: 'Glitch Mint', brand: 'Mavrix Collection', price: 160, img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300' }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-orange-50 to-white">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-2xl bg-white/90 rounded-full shadow-2xl border border-gray-200/50 px-10 py-4">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2 pr-8 border-r border-gray-200">
              <span className="font-display text-xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                MAVRIX
              </span>
            </Link>
            <div className="flex items-center gap-10">
              <Link to="/" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/products" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/product/1" className="font-body text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors relative group">
                Product
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
              </Link>
              <Link to="/cart" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group">
                Cart
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/checkout" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group">
                Checkout
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/orders" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group">
                Orders
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32">
        <main className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white rounded-t-[3rem] shadow-2xl min-h-screen">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md aspect-square bg-center bg-no-repeat bg-contain rounded-xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541643600914-78b084683601?w=600)' }}></div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-gray-600">MAVRIX COLLECTION</p>
              <h1 className="font-display text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Cyber Flora</h1>
              <div className="flex gap-3 flex-wrap">
                {['Floral', 'Woody', 'Citrus'].map(tag => (
                  <div key={tag} className="flex h-8 items-center justify-center rounded-full bg-orange-100 px-4">
                    <p className="font-body text-gray-900 text-sm font-medium">{tag}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-base leading-relaxed max-w-prose text-gray-700">
                An ethereal fusion of future and nature. Cyber Flora captures the essence of a digital garden at dusk, 
                blending luminous bergamot with bio-luminescent jasmine and a base of synthetic sandalwood.
              </p>
              <div className="flex items-center gap-4">
                <p className="font-display text-4xl font-bold text-gray-900">$185.00</p>
                <p className="font-body text-lg font-medium text-gray-600">/ 100ml</p>
              </div>
              <button className="flex w-full sm:w-auto max-w-sm items-center justify-center rounded-lg h-14 gap-2 text-lg font-medium px-8 transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl">
                <span className="material-symbols-outlined">add_shopping_cart</span>
                <span>Add to Cart</span>
              </button>
            </div>
          </section>

          <section className="mt-20">
            <div className="glassmorphism rounded-xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-4 text-gray-900">Description</h2>
              <p className="font-body text-base leading-relaxed text-gray-700">
                Inspired by the paradox of a world where technology and nature intertwine, Cyber Flora is a testament to innovation in perfumery. 
                The journey begins with a vibrant burst of Italian Bergamot, digitally enhanced to sparkle with an unprecedented crispness.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="glassmorphism rounded-xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">Reviews & Ratings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center justify-center gap-2 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
                  <p className="font-display text-6xl font-bold text-gray-900">4.8</p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined">star</span>
                    ))}
                  </div>
                  <p className="font-body text-sm text-gray-600">Based on 1,247 reviews</p>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                  {[
                    { stars: 5, percent: 85 },
                    { stars: 4, percent: 10 },
                    { stars: 3, percent: 3 },
                    { stars: 2, percent: 1 },
                    { stars: 1, percent: 1 }
                  ].map(({ stars, percent }) => (
                    <div key={stars} className="flex items-center gap-4">
                      <p className="font-body text-sm font-medium w-12 text-gray-700">{stars} star</p>
                      <div className="w-full bg-orange-100 rounded-full h-2.5">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
                      </div>
                      <p className="font-body text-sm text-gray-600 w-10 text-right">{percent}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold mb-6 text-gray-900">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, idx) => (
                <Link key={idx} to="/product/2">
                  <div className="glassmorphism rounded-xl p-4 flex flex-col items-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-40 h-40 bg-center bg-no-repeat bg-contain mb-4 rounded-lg" style={{ backgroundImage: `url(${product.img})` }}></div>
                    <h3 className="font-display text-gray-900 font-bold text-lg">{product.name}</h3>
                    <p className="font-body text-sm text-gray-600">{product.brand}</p>
                    <p className="font-display text-gray-900 font-semibold mt-2">${product.price}.00</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>

      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 146, 60, 0.2);
        }
      `}</style>
    </div>
  );
}

export default ProductDetailPage;
