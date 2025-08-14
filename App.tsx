import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import { SHOES } from './constants/products';
import Wearables from './components/Wearables';
import NewArrivals from './components/NewArrivals';
import About from './components/About';
import Updates from './components/Updates';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import type { Shoe, CartItem } from './types';


export type Page = 'home' | 'wearables' | 'new-arrivals' | 'about' | 'updates' | 'cart' | 'checkout' | 'order-confirmation';

export default function App(): React.ReactNode {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShoeId, setSelectedShoeId] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [prevPage, setPrevPage] = useState<Page>('home');
  const [prevSearch, setPrevSearch] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);


  useEffect(() => {
    let scrollTimeout: number;
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    if (container) {
        container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
          container.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [currentPage]);

  const navigateTo = (page: Page) => {
      if(scrollContainerRef.current && (currentPage === 'home' || page === 'home')) {
          scrollContainerRef.current.scrollTop = 0;
      }
      setCurrentPage(page);
      setSearchQuery(''); 
      setSelectedShoeId(null);
  };
  
  const handleSelectShoe = (id: number) => {
    setPrevPage(currentPage);
    setPrevSearch(searchQuery);
    setSelectedShoeId(id);
    setSearchQuery(''); // Clear search when viewing a product
  };

  const handleBack = () => {
    setSelectedShoeId(null);
    setCurrentPage(prevPage);
    setSearchQuery(prevSearch);
  };
  
  const handleAddToCart = (shoe: Shoe, size: number, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === shoe.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...shoe, size, quantity }];
      }
    });
  };

  const handleUpdateCartQuantity = (shoeId: number, size: number, newQuantity: number) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === shoeId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveFromCart = (shoeId: number, size: number) => {
     setCart(prevCart => prevCart.filter(item => !(item.id === shoeId && item.size === size)));
  };

  const handlePlaceOrder = () => {
    setCart([]);
    navigateTo('order-confirmation');
  };


  const filteredShoes = searchQuery
    ? SHOES.filter(shoe =>
        shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shoe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shoe.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const renderPage = () => {
    const selectedShoe = SHOES.find(shoe => shoe.id === selectedShoeId);
    if (selectedShoe) {
        return <ProductDetail shoe={selectedShoe} onBack={handleBack} onAddToCart={handleAddToCart} />;
    }

    if (searchQuery) {
        return <SearchResults results={filteredShoes} query={searchQuery} setSearchQuery={setSearchQuery} onSelectShoe={handleSelectShoe} />;
    }

    switch (currentPage) {
        case 'wearables': return <Wearables onSelectShoe={handleSelectShoe}/>;
        case 'new-arrivals': return <NewArrivals onSelectShoe={handleSelectShoe} />;
        case 'about': return <About />;
        case 'updates': return <Updates />;
        case 'cart': return <Cart cart={cart} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} onNavigate={navigateTo} />;
        case 'checkout': return <Checkout cart={cart} onPlaceOrder={handlePlaceOrder} onNavigate={navigateTo} />;
        case 'order-confirmation': return <OrderConfirmation onNavigate={navigateTo} />;
        case 'home':
        default:
            return (
                <main 
                    ref={scrollContainerRef}
                    className="h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory"
                >
                    <Hero onSelectShoe={handleSelectShoe} />
                    {SHOES.filter(s => s.id !== 4).map((shoe) => (
                      <ProductShowcase key={shoe.id} shoe={shoe} isScrolling={isScrolling} onSelectShoe={handleSelectShoe} />
                    ))}
                     <footer className="h-screen w-full flex snap-start flex-col items-center justify-center text-center p-8 bg-[#fdfdfd]">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">FootPrints</h2>
                        <p className="mt-4 text-lg text-gray-500">Beyond Footwear.</p>
                        <div className="mt-12 flex space-x-6 text-gray-500">
                          <a href="#" className="hover:text-black transition-colors">Instagram</a>
                          <a href="#" className="hover:text-black transition-colors">Twitter</a>
                          <a href="#" className="hover:text-black transition-colors">Contact</a>
                        </div>
                        <p className="mt-12 text-sm text-gray-400">&copy; {new Date().getFullYear()} Developed By Tanmay Galav</p>
                    </footer>
                </main>
            );
    }
  };

  return (
    <div className="bg-[#fdfdfd] h-screen w-screen overflow-hidden">
      <Header 
        navigateTo={navigateTo} 
        currentPage={currentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isProductDetailVisible={!!selectedShoeId}
        cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
      />
      {renderPage()}
    </div>
  );
}