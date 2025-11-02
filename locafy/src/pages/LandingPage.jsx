import React, { useState, useEffect } from "react";
import {
  Search,
  Mail,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Filter,
  Star,
  Sliders,
} from "lucide-react";
import "../styles/pages/landing.css";
import Navbar from "../components/Navbar";
import hero1 from "../assets/images/hero/diskon.jpg";
import hero2 from "../assets/images/hero/diskon1.jpg";
import hero3 from "../assets/images/hero/diskon2.jpg";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const umkmList = [
    {
      id: 1,
      name: "Kopi Kita",
      category: "Minuman",
      rating: 4.7,
      distance: "0.8 km",
      image:
        "/images/kopi_kita/orang-orang-di-pesta-makanan-lokal-sehat_53876-92228.jpg",
    },
    {
      id: 2,
      name: "Laundry Bersih",
      category: "Jasa",
      rating: 4.5,
      distance: "1.2 km",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    },
    {
      id: 3,
      name: "Bakso Mantap",
      category: "Makanan",
      rating: 4.8,
      distance: "0.5 km",
      image:
        "https://riaupagi.com/media/CACHE/images/images/image_202205076309_4488/64c7fe0345b8712d80d83138901c5b4b.webp",
    },
    {
      id: 4,
      name: "Toko Roti",
      category: "Makanan",
      rating: 4.6,
      distance: "1.0 km",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jhm4rkyb5mcs69jmz8e7yxyz.jpg",
    },
    {
      id: 5,
      name: "Warung Nasi",
      category: "Makanan",
      rating: 4.9,
      distance: "0.3 km",
      image:
        "https://asset.kompas.com/crops/YvTi4Kha7KoVqaLlH2NqHaRXMrs=/0x133:1600x1200/1200x800/data/photo/2022/10/30/635e378fea5f2.jpeg",
    },
    {
      id: 6,
      name: "Cuci Motor",
      category: "Jasa",
      rating: 4.4,
      distance: "1.5 km",
      image: "https://www.olx.co.id/news/wp-content/uploads/2024/04/cuci-motor-696x464.jpg",
    },
    {
      id: 7,
      name: "Salon Cantik",
      category: "Jasa",
      rating: 4.7,
      distance: "0.9 km",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    },
    {
      id: 8,
      name: "Kedai Teh",
      category: "Minuman",
      rating: 4.5,
      distance: "1.1 km",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    },
    {
      id: 9,
      name: "Toko Batik",
      category: "Fashion",
      rating: 4.6,
      distance: "1.3 km",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/255/2024/11/08/Screenshot_2024-11-08-11-22-10-28_3d9111e2d3171bf4882369f490c087b4-1211455573.jpg",
    },
    {
      id: 10,
      name: "Warung Soto",
      category: "Makanan",
      rating: 4.8,
      distance: "0.7 km",
      image: "https://statik.tempo.co/data/2017/11/23/id_664913/664913_720.jpg",
    },
    {
      id: 11,
      name: "Bengkel Motor",
      category: "Jasa",
      rating: 4.3,
      distance: "1.8 km",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhIDBcbDZSKopVPWSBzrR8ApFiB9R3npq8w&s",
    },
    {
      id: 12,
      name: "Kedai Kopi",
      category: "Minuman",
      rating: 4.7,
      distance: "0.6 km",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?w=800",
    },
  ];

  const categories = [
    "Semua Kategori",
    "Makanan",
    "Minuman",
    "Jasa",
    "Fashion",
    "Kerajinan",
  ];

  return (
    <div className="landing-page">
      <Navbar />

      <div className="main-container">
        <div className="content-area">
          {/* Hero Carousel */}
          <div className="hero-carousel">
            <img
              src={heroImages[currentSlide]}
              alt={`Hero slide ${currentSlide + 1}`}
              className="hero-image"
            />
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? heroImages.length - 1 : prev - 1
                )
              }
              className="carousel-btn carousel-btn-left"
            >
              <ChevronLeft className="carousel-icon" />
            </button>

            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === heroImages.length - 1 ? 0 : prev + 1
                )
              }
              className="carousel-btn carousel-btn-right"
            >
              <ChevronRight className="carousel-icon" />
            </button>

            <div className="carousel-dots">
              {heroImages.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === currentSlide ? "dot-active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Search & Filter */}
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

          {/* UMKM Grid */}
          <div className="umkm-grid">
            {umkmList.map((item) => (
              <Link key={item.id} to={`/store/${item.id}`} className="umkm-card">
                <div className="umkm-image">
                  <img src={item.image} alt={item.name} />
                </div>
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
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
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
