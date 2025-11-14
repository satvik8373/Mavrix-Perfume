import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/videos/Animated_Perfume_Spray_Video_Generation.webm';
import backgroundMusic from '../assets/Music/model-walks-runway-366957.mp3';

function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Auto-play music on mount with 50% volume
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => {
        console.log('Autoplay blocked, user needs to interact first:', err);
        setIsMuted(true);
      });
    }
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (audioRef.current) {
      if (newMutedState) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
    }
  };

  return (
    <>
      {/* 🎯 Floating Pill Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 nav-transition ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="backdrop-blur-2xl bg-white/90 rounded-full shadow-2xl border border-gray-200/50 px-10 py-4">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 pr-8 border-r border-gray-200">
              <span className="font-display text-xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                MAVRIX
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-10">
              <Link to="/" className="font-body text-sm font-medium text-gray-900 hover:text-orange-500 link-transition relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
              <Link to="/products" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 link-transition relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
              <Link to="/product/1" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 link-transition relative group">
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
              <Link to="/cart" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 link-transition relative group">
                Cart
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
              <Link to="/checkout" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 link-transition relative group">
                Checkout
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
              <Link to="/orders" className="font-body text-sm font-medium text-gray-700 hover:text-orange-500 link-transition relative group">
                Orders
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full underline-transition"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔥 Fullscreen Video Background - Outside main container */}
      <video
        ref={videoRef}
        key={heroVideo}
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        style={{ zIndex: -2 }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      {/* Mute Control */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 rounded-full p-2.5 transition-all duration-200 flex items-center justify-center focus:outline-none"
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>

      {/* 🔥 Gradient Overlay for better text readability - Darker Warm Tones */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-black/50 via-orange-900/40 to-amber-950/60 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>

      <div className="relative w-full overflow-x-hidden">
        <div className="relative flex min-h-screen w-full flex-col items-center">
          {/* Hero Section - Full Screen */}
          <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">

          <div className="flex flex-col items-center gap-6 animate-fadeIn max-w-4xl mx-auto px-4">
            {/* Main Title with Elegant Animation */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-center animate-slideUp">
              <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl animate-shimmer bg-[length:200%_100%]">
                MAVRIX
              </span>
              <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-shimmer bg-[length:200%_100%] mt-1">
                PERFUME
              </span>
            </h1>

            {/* Subtitle - Clean without background */}
            <h2 className="font-body text-base md:text-lg font-light text-white/90 text-center max-w-2xl leading-relaxed animate-fadeIn animation-delay-300 drop-shadow-lg">
              Where Artificial Intelligence Unlocks the Art of Personal Fragrance
            </h2>

            {/* Simple Button */}
            <Link to="/products" className="animate-fadeIn animation-delay-600 mt-2">
              <button className="group rounded-full px-8 py-3 text-base font-medium tracking-wide transition-all duration-700 ease-out hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white shadow-2xl hover:shadow-orange-500/50">
                <span className="flex items-center gap-2">
                  Explore Collection
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-700 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Decorative Elements - Reduced */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          </div>

        </div>

        <div className="flex w-full max-w-7xl flex-col gap-16 px-4 md:px-8 lg:px-16 py-16 bg-white relative z-20 rounded-t-[3rem] shadow-2xl">
          {/* Featured Collection */}
          <section className="flex flex-col gap-6">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-text-dark/70 text-center">Featured Collection</h4>
            <div className="flex overflow-x-auto gap-6 pb-4">
              {[
                { name: 'Noir Fusion', notes: 'Oud & Amber', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400' },
                { name: 'Cybernetic Bloom', notes: 'Jasmine & Tech', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400' },
                { name: 'Data Driven Dew', notes: 'Citrus & Fresh', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400' },
                { name: 'Quantum Essence', notes: 'Spiced Woods', img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400' }
              ].map((product, idx) => (
                <div key={idx} className="flex h-full min-w-64 flex-1 flex-col gap-4 rounded-xl glassmorphism shadow-lg bg-white/40 backdrop-blur-md border border-purple-200">
                  <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-xl" style={{ backgroundImage: `url(${product.img})` }}></div>
                  <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                    <div>
                      <p className="font-display text-lg font-bold text-text-dark">{product.name}</p>
                      <p className="font-body text-sm text-text-dark/70">{product.notes}</p>
                    </div>
                    <Link to="/product/1">
                      <button className="flex w-full items-center justify-center rounded-xl h-10 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium tracking-wide transition-all duration-300">
                        <span className="truncate">Discover</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="flex flex-col gap-6">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-text-dark/70 text-center">Explore by Category</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4">
              {[
                { name: 'Floral', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
                { name: 'Oud', img: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=400' },
                { name: 'Citrus', img: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400' },
                { name: 'Unisex', img: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400' }
              ].map((category, idx) => (
                <Link key={idx} to="/products">
                  <div 
                    className="group relative bg-cover bg-center flex flex-col rounded-xl justify-end p-4 aspect-square glassmorphism overflow-hidden transition-all duration-300 hover:border-soft-lavender/50 backdrop-blur-md border border-purple-200"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(231, 212, 232, 0.6) 0%, rgba(255, 255, 255, 0) 100%), url(${category.img})`
                    }}
                  >
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-soft-lavender transition-all duration-300"></div>
                    <p className="font-display text-xl font-bold leading-tight text-text-dark relative z-10">{category.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* AI Sommelier Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 rounded-xl glassmorphism shadow-2xl bg-white/40 backdrop-blur-md border border-purple-200">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Your Personal AI Sommelier</h3>
              <p className="mt-4 font-body text-base text-text-dark/80 leading-relaxed">Our advanced AI analyzes thousands of scent profiles and your unique preferences to curate a fragrance that is exclusively yours.</p>
              <button className="mt-8 flex items-center justify-center rounded-xl h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Find Your Scent</span>
              </button>
            </div>
            <div className="flex-shrink-0">
              <img alt="AI neural networks" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" />
            </div>
          </section>

          {/* Newsletter */}
          <section className="p-8 md:p-10 rounded-xl glassmorphism shadow-2xl bg-white/40 backdrop-blur-md border border-purple-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-display text-2xl font-bold text-text-dark">Join The Elite</h4>
                <p className="font-body text-text-dark/70 mt-1">Unlock exclusive scents and early access.</p>
              </div>
              <form className="flex w-full max-w-md gap-2">
                <input className="flex-grow rounded-lg border-0 bg-white/40 text-text-dark placeholder:text-text-dark/50 focus:ring-2 focus:ring-soft-lavender" placeholder="Enter your email" type="email" />
                <button className="rounded-lg bg-orange-500 hover:bg-orange-600 px-5 py-2.5 font-medium text-white shadow-lg transition-all duration-300" type="submit">Sign Up</button>
              </form>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full bg-white/30 backdrop-blur-sm border-t border-text-dark/10 mt-16">
          <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Mavrix Perfume</h3>
                <p className="font-body text-sm text-text-dark/60 mt-2">The future of fragrance.</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-text-dark">Links</h4>
                <ul className="mt-4 space-y-2 font-body text-sm text-text-dark/60">
                  <li><Link className="hover:text-soft-lavender" to="/">About Us</Link></li>
                  <li><Link className="hover:text-soft-lavender" to="/products">Collections</Link></li>
                  <li><a className="hover:text-soft-lavender" href="#">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-text-dark">Legal</h4>
                <ul className="mt-4 space-y-2 font-body text-sm text-text-dark/60">
                  <li><a className="hover:text-soft-lavender" href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-soft-lavender" href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-text-dark/10 pt-8 text-center text-sm text-text-dark/50">
              <p>© 2024 Mavrix Perfume. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        /* Ultra Smooth Scrolling */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        /* Smooth scroll with CSS */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
        
        /* GSAP-like Custom Easing Curves - Ultra Slow */
        .nav-transition {
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .link-transition {
          transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .underline-transition {
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Glass Morphism with Warm Tones */
        .glassmorphism {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 146, 60, 0.2);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Animations - Ultra Slow & Cinematic */
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(40px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          0% { 
            opacity: 0; 
            transform: translateY(80px) scale(0.92);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 15px rgba(251, 146, 60, 0.3),
                         0 0 30px rgba(251, 146, 60, 0.2),
                         0 0 45px rgba(251, 146, 60, 0.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(251, 146, 60, 0.5),
                         0 0 40px rgba(251, 146, 60, 0.3),
                         0 0 60px rgba(251, 146, 60, 0.2);
          }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .animate-slideUp { 
          animation: slideUp 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .animate-shimmer { 
          animation: shimmer 7s cubic-bezier(0.45, 0, 0.55, 1) infinite; 
        }
        .animate-glow { 
          animation: glow 5s cubic-bezier(0.45, 0, 0.55, 1) infinite; 
        }
        .animate-shine { 
          animation: shine 4s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        
        .animation-delay-300 { animation-delay: 0.5s; opacity: 0; }
        .animation-delay-600 { animation-delay: 1s; opacity: 0; }
        .animation-delay-1000 { animation-delay: 1.5s; }
        
        .glow-button {
          box-shadow: 0 0 15px rgba(251, 146, 60, 0.7), 0 0 25px rgba(251, 146, 60, 0.5);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glow-button:hover {
          box-shadow: 0 0 20px rgba(251, 146, 60, 1), 0 0 35px rgba(251, 146, 60, 0.8);
        }
        
        /* All transitions slower */
        button, a, input {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
      </div>
    </>
  );
}

export default HomePage;
