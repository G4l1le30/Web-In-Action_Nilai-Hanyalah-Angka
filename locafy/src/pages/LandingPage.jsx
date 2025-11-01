import React, { useState } from 'react';
import { Search, Mail, Bell, User, ChevronLeft, ChevronRight, MapPin, Filter, Star, Sliders } from 'lucide-react';
import "../styles/pages/landing.css";
import Navbar from "../components/Navbar";
import hero1 from "../assets/images/hero/diskon.jpg";
import hero2 from "../assets/images/hero/diskon1.jpg";
import hero3 from "../assets/images/hero/diskon2.jpg";
import { useEffect } from "react";
const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  
  const umkmList = [
    { id: 1, name: "Kopi Kita", category: "Minuman", rating: 4.7, distance: "0.8 km" },  
    { id: 2, name: "Laundry Bersih", category: "Jasa", rating: 4.5, distance: "1.2 km" },
    { id: 3, name: "Bakso Mantap", category: "Makanan", rating: 4.8, distance: "0.5 km" },
    { id: 4, name: "Toko Roti", category: "Makanan", rating: 4.6, distance: "1.0 km" },
    { id: 5, name: "Warung Nasi", category: "Makanan", rating: 4.9, distance: "0.3 km" },
    { id: 6, name: "Cuci Motor", category: "Jasa", rating: 4.4, distance: "1.5 km" },
    { id: 7, name: "Salon Cantik", category: "Jasa", rating: 4.7, distance: "0.9 km" },
    { id: 8, name: "Kedai Teh", category: "Minuman", rating: 4.5, distance: "1.1 km" },
    { id: 9, name: "Toko Batik", category: "Fashion", rating: 4.6, distance: "1.3 km" },
    { id: 10, name: "Warung Soto", category: "Makanan", rating: 4.8, distance: "0.7 km" },
    { id: 11, name: "Bengkel Motor", category: "Jasa", rating: 4.3, distance: "1.8 km" },
    { id: 12, name: "Kedai Kopi", category: "Minuman", rating: 4.7, distance: "0.6 km" },
  ];

  const categories = [
    "Semua Kategori",
    "Makanan",
    "Minuman", 
    "Jasa",
    "Fashion",
    "Kerajinan"
  ];

  return (
    <div className="landing-page">
      <Navbar />

      <div className="main-container">
        <div className="content-area">
          <div className="hero-carousel">
  <img 
    src={heroImages[currentSlide]} 
    alt={`Hero slide ${currentSlide + 1}`}
    className="hero-image"
  />

  <button 
    onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
    className="carousel-btn carousel-btn-left"
  >
    <ChevronLeft className="carousel-icon" />
  </button>

  <button 
    onClick={() => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
    className="carousel-btn carousel-btn-right"
  >
    <ChevronRight className="carousel-icon" />
  </button>

  <div className="carousel-dots">
    {heroImages.map((_, i) => (
      <div key={i} className={`dot ${i === currentSlide ? "dot-active" : ""}`} />
    ))}
  </div>
</div>

          <div className="search-filter-bar">
            <div className="main-search">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Cari usaha atau produk lokal..."
              />
            </div>
            <button className="filter-btn">
              <Filter className="btn-icon" />
              Kategori
            </button>
            <button className="filter-btn">
              <MapPin className="btn-icon" />
              Terdekat
            </button>
          </div>

          <div className="umkm-grid">
            {umkmList.map((item) => (
              <div key={item.id} className="umkm-card">
                <div className="umkm-image"></div>
                <div className="umkm-info">
                  <h3 className="umkm-name">{item.name}</h3>
                  <p className="umkm-category">{item.category}</p>
                  <div className="umkm-details">
                    <div className="rating">
                      <Star className="star-icon" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="distance">{item.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar"></div>
              <div className="profile-info">
                <div className="profile-name-skeleton"></div>
                <div className="profile-role-skeleton"></div>
              </div>
              <Star className="profile-star" />
            </div>
            <div className="profile-actions">
              <div className="action-btn"></div>
              <div className="action-btn"></div>
            </div>
            <div className="profile-stats">
              <div className="stat-row">
                <ChevronLeft className="chevron-icon" />
                <div className="stat-content">
                  <Sliders className="slider-icon" />
                  <div className="stat-bars">
                    <div className="stat-bar"></div>
                    <div className="stat-bar"></div>
                  </div>
                </div>
                <ChevronRight className="chevron-icon" />
              </div>
            </div>
            <div className="profile-footer">
              <div className="footer-item">
                <div className="footer-avatar"></div>
                <div className="footer-bar"></div>
              </div>
              <div className="footer-item">
                <div className="footer-avatar"></div>
                <div className="footer-bar"></div>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="card-header">
              <div className="header-title"></div>
            </div>
            <div className="category-list">
              {categories.map((cat, idx) => (
                <div key={idx} className="category-item">
                  <div className="category-label"></div>
                  <input type="checkbox" className="category-checkbox" />
                </div>
              ))}
            </div>
          </div>

          <div className="filter-card">
            <div className="card-header">
              <div className="header-title-small"></div>
            </div>
            <div className="filter-list">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="filter-item">
                  <div className="filter-label"></div>
                  <input type="checkbox" className="filter-checkbox" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LandingPage;