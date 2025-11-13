import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductListingPage() {
  const [filters, setFilters] = useState({
    brands: { tomFord: true },
    priceRange: [50, 350]
  });

  const products = [
    { id: 1, name: 'Bleu de Chanel', brand: 'Chanel', price: 125, img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400' },
    { id: 2, name: 'Sauvage', brand: 'Dior', price: 104, img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400' },
    { id: 3, name: 'Oud Wood', brand: 'Tom Ford', price: 250, img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400' },
    { id: 4, name: 'Aventus', brand: 'Creed', price: 335, img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400' },
    { id: 5, name: 'Acqua di Giò', brand: 'Giorgio Armani', price: 98, img: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400' },
    { id: 6, name: 'Eros', brand: 'Versace', price: 92, img: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400' }
  ];

  return (
    <div className="relative min-h-screen w-full bg-background-light">
      <div className="bg-particle-wave"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 lg:px-16 py-3 glassmorphic">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 text-text-primary">
              <div className="size-6 text-primary-dark">
                <svg fill="currentColor" viewBox="0 0 48 48">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
              </div>
              <h2 className="text-text-primary text-xl font-bold">Mavrix Perfume</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium" to="/">Home</Link>
              <Link className="text-text-primary text-sm font-medium" to="/products">Explore</Link>
              <a className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium" href="#">About</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <button className="flex items-center justify-center rounded-xl h-10 px-4 bg-white/50 text-text-primary hover:bg-white/80 transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </Link>
            <Link to="/orders">
              <button className="flex items-center justify-center rounded-xl h-10 px-4 bg-white/50 text-text-primary hover:bg-white/80 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-screen-2xl flex-col lg:flex-row gap-8 p-4 sm:p-8 lg:p-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 xl:w-1/5 lg:sticky top-28 self-start">
          <div className="min-h-[700px] flex-col justify-between rounded-2xl glassmorphic p-6 flex">
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-text-primary text-lg font-medium">Filters</h1>
                <p className="text-text-secondary text-sm">Refine your search</p>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Brand Filter */}
                <div className="flex flex-col gap-2 border-b border-gray-200 pb-6">
                  <details open>
                    <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-primary">
                      Brand
                      <span className="material-symbols-outlined">expand_more</span>
                    </summary>
                    <div className="pt-4 px-2">
                      {['Chanel', 'Dior', 'Tom Ford', 'Creed'].map(brand => (
                        <label key={brand} className="flex gap-x-3 py-2 items-center">
                          <input type="checkbox" className="h-5 w-5 rounded" defaultChecked={brand === 'Tom Ford'} />
                          <p className="text-text-secondary text-sm">{brand}</p>
                        </label>
                      ))}
                    </div>
                  </details>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-2 border-b border-gray-200 pb-6">
                  <details open>
                    <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-primary">
                      Price Range
                      <span className="material-symbols-outlined">expand_more</span>
                    </summary>
                    <div className="pt-6">
                      <div className="flex justify-between text-sm text-text-primary">
                        <span>$50</span>
                        <span>$350</span>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl h-12 px-4 bg-purple-600 text-white text-base font-bold hover:bg-purple-700 transition-all">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="w-full lg:w-3/4 xl:w-4/5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Explore Our Collection</h1>
              <select className="text-sm font-medium text-text-secondary bg-white/50 border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="group relative flex flex-col rounded-2xl glassmorphic p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary-lg">
                    <img className="aspect-square w-full rounded-xl object-cover mb-4" src={product.img} alt={product.name} />
                    <h3 className="text-lg font-semibold text-text-primary">{product.name}</h3>
                    <p className="text-sm text-text-secondary mb-3">{product.brand}</p>
                    <p className="text-xl font-bold text-text-primary mt-auto">${product.price}.00</p>
                    <button className="absolute bottom-6 right-6 flex items-center justify-center size-12 bg-purple-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center pt-8">
              <nav className="flex items-center gap-2">
                <button className="flex items-center justify-center size-10 rounded-lg text-text-secondary hover:bg-white/50">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-lg text-white bg-purple-600">1</button>
                <button className="flex items-center justify-center size-10 rounded-lg text-text-secondary hover:bg-white/50">2</button>
                <button className="flex items-center justify-center size-10 rounded-lg text-text-secondary hover:bg-white/50">3</button>
                <button className="flex items-center justify-center size-10 rounded-lg text-text-secondary hover:bg-white/50">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .glassmorphic {
          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(224, 195, 252, 0.3);
          box-shadow: 0 4px 30px rgba(0,0,0,0.05);
        }
        .bg-particle-wave {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-image:
            radial-gradient(ellipse 80% 80% at 20% -10%, rgba(224, 195, 252, 0.5), transparent),
            radial-gradient(ellipse 80% 80% at 80% 110%, rgba(192, 132, 252, 0.5), transparent);
          opacity: 0.6;
        }
        .shadow-glow-primary-lg {
          box-shadow: 0 0 30px 0 rgba(224, 195, 252, 0.9);
        }
      `}</style>
    </div>
  );
}
