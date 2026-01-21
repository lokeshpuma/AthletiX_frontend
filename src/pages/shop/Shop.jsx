import { useState } from "react";
import "./shop.scss";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("trending");
  const [cartCount, setCartCount] = useState(0);
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "jerseys", name: "Jerseys" },
    { id: "shoes", name: "Shoes" },
    { id: "equipment", name: "Equipment" },
    { id: "memorabilia", name: "Memorabilia" },
    { id: "accessories", name: "Accessories" }
  ];
  
  const featuredProducts = [
    {
      id: 1,
      name: "Official Team Jersey 2023",
      price: 89.99,
      discount: 0,
      image: "https://images.unsplash.com/photo-1591439426624-23aa9d3f42cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "jerseys",
      rating: 4.8,
      reviews: 342,
      isOfficial: true,
      hasAR: true,
      isTrending: true,
      isNew: false,
      isLimited: false,
      userPhotos: 48
    },
    {
      id: 2,
      name: "Pro Performance Basketball Shoes",
      price: 129.99,
      discount: 15,
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0YmFsbCUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "shoes",
      rating: 4.6,
      reviews: 215,
      isOfficial: true,
      hasAR: true,
      isTrending: true,
      isNew: false,
      isLimited: false,
      userPhotos: 32
    },
    {
      id: 3,
      name: "Official Match Soccer Ball",
      price: 49.99,
      discount: 0,
      image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "equipment",
      rating: 4.9,
      reviews: 187,
      isOfficial: true,
      hasAR: false,
      isTrending: false,
      isNew: true,
      isLimited: false,
      userPhotos: 22
    },
    {
      id: 4,
      name: "Championship Replica Trophy",
      price: 79.99,
      discount: 0,
      image: "https://images.unsplash.com/photo-1622819584099-e04af1ac0c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyb3BoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "memorabilia",
      rating: 4.7,
      reviews: 95,
      isOfficial: true,
      hasAR: false,
      isTrending: false,
      isNew: false,
      isLimited: true,
      userPhotos: 15
    },
    {
      id: 5,
      name: "Team Logo Sport Watch",
      price: 59.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1619134778706-7015bda84ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "accessories",
      rating: 4.5,
      reviews: 128,
      isOfficial: true,
      hasAR: true,
      isTrending: true,
      isNew: false,
      isLimited: false,
      userPhotos: 28
    },
    {
      id: 6,
      name: "Game Day Performance Hoodie",
      price: 65.99,
      discount: 0,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "jerseys",
      rating: 4.6,
      reviews: 142,
      isOfficial: false,
      hasAR: false,
      isTrending: false,
      isNew: true,
      isLimited: false,
      userPhotos: 18
    }
  ];
  
  const liveEvents = [
    {
      id: 1,
      title: "Championship Collection Launch",
      time: "Today, 7:00 PM",
      image: "https://images.unsplash.com/photo-1574498989124-87067bb17161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFucyUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewers: 1248
    },
    {
      id: 2,
      title: "Meet the Players: Signing Session",
      time: "Tomorrow, 5:00 PM",
      image: "https://images.unsplash.com/photo-1560012064-9e162411de21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMHBsYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewers: 856
    }
  ];
  
  const filteredProducts = activeCategory === "all" 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === activeCategory);
  
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };
  
  const renderProductBadges = (product) => {
    return (
      <div className="product-badges">
        {product.isOfficial && <span className="badge official"><VerifiedIcon /> Official</span>}
        {product.isNew && <span className="badge new">New</span>}
        {product.isLimited && <span className="badge limited">Limited Edition</span>}
        {product.hasAR && <span className="badge ar"><CameraAltIcon /> Try On</span>}
        {product.discount > 0 && <span className="badge discount"><LocalOfferIcon />{product.discount}% OFF</span>}
      </div>
    );
  };
  
  const renderProductCard = (product) => {
    const discountedPrice = product.discount > 0 
      ? product.price - (product.price * product.discount / 100)
      : null;
    
    return (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {renderProductBadges(product)}
          <div className="product-actions">
            <button className="action-button share">
              <ShareIcon />
            </button>
            <button className="action-button favorite">
              <FavoriteBorderIcon />
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-meta">
            <div className="product-rating">
              <StarIcon />
              <span>{product.rating} ({product.reviews})</span>
            </div>
            {product.userPhotos > 0 && (
              <div className="user-photos">
                <CameraAltIcon />
                <span>{product.userPhotos}</span>
              </div>
            )}
          </div>
          <div className="product-price">
            {discountedPrice ? (
              <>
                <span className="current-price">${discountedPrice.toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <ShoppingCartIcon /> Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="shop-header">
          <h1 className="title">Sports Shop</h1>
          <div className="cart-icon">
            <ShoppingCartIcon />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
        
        <div className="shop-tabs">
          <button 
            className={`shop-tab ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button 
            className={`shop-tab ${activeTab === 'official' ? 'active' : ''}`}
            onClick={() => setActiveTab('official')}
          >
            Official Store
          </button>
          <button 
            className={`shop-tab ${activeTab === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommended')}
          >
            For You
          </button>
        </div>
        
        <div className="shop-content">
          <div className="live-events-section">
            <h2 className="section-title">
              <span>Live Shopping Events</span>
              <span className="view-all">View All</span>
            </h2>
            <div className="live-events-container">
              {liveEvents.map(event => (
                <div className="live-event-card" key={event.id}>
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="live-badge">LIVE</div>
                    <div className="viewers-count">
                      <span>{event.viewers} watching</span>
                    </div>
                  </div>
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-time">
                      <AccessTimeIcon />
                      <span>{event.time}</span>
                    </div>
                    <button className="reminder-btn">Set Reminder</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="categories-section">
            <div className="categories-container">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="featured-products">
            <h2 className="section-title">
              <span>{activeCategory === 'all' ? 'Featured Products' : categories.find(c => c.id === activeCategory).name}</span>
              <span className="view-all">View All</span>
            </h2>
            <div className="products-grid">
              {filteredProducts.map(product => renderProductCard(product))}
            </div>
          </div>
          
          <div className="user-content-section">
            <h2 className="section-title">
              <span>Fan Photos</span>
              <span className="view-all">View All</span>
            </h2>
            <div className="user-photos-grid">
              <div className="user-photo">
                <img src="https://images.unsplash.com/photo-1531525797753-909788e9e1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhbiUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Fan wearing jersey" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <FavoriteIcon className="like-icon" />
                    <span>247</span>
                  </div>
                </div>
              </div>
              <div className="user-photo">
                <img src="https://images.unsplash.com/photo-1606311907256-e3778a19a516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbiUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Team celebration" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <FavoriteIcon className="like-icon" />
                    <span>189</span>
                  </div>
                </div>
              </div>
              <div className="user-photo">
                <img src="https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbiUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Game viewing party" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <FavoriteIcon className="like-icon" />
                    <span>324</span>
                  </div>
                </div>
              </div>
              <div className="user-photo">
                <img src="https://images.unsplash.com/photo-1580099220224-68e18151bf7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZhbiUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Stadium atmosphere" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <FavoriteIcon className="like-icon" />
                    <span>156</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="upload-photo-btn">
              <CameraAltIcon /> Share Your Fan Photos
            </button>
          </div>
          
          <div className="ar-try-on-section">
            <div className="ar-banner">
              <div className="ar-content">
                <h2>Try Before You Buy</h2>
                <p>Use our AR technology to see how jerseys, caps, and other merchandise look on you!</p>
                <button className="try-ar-btn">Try AR Experience</button>
              </div>
              <div className="ar-image">
                <img src="https://images.unsplash.com/photo-1626394707427-9fe97b677ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="AR Try-On" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop; 