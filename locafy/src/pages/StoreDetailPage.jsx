import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Heart,
  ChevronLeft,
  Percent,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "../styles/pages/storeDetail.css"; // animasi mini

const storesData = {
  1: {
    name: "Kopi Kita",
    category: "Minuman",
    rating: 4.7,
    reviews: 156,
    distance: "0.8 km",
    address: "Jl. Merdeka No. 123, Batu, Jawa Timur",
    phone: "+62 812-3456-7890",
    hours: "08:00 - 22:00",
    description:
      "Kedai kopi modern dengan suasana nyaman dan berbagai pilihan kopi lokal berkualitas. Tempat yang cocok untuk nongkrong atau meeting santai.",
    gallery: [
      "/images/kopi_kita/orang-orang-di-pesta-makanan-lokal-sehat_53876-92228.jpg",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    ],
    menu: [
      { id: 1, name: "Espresso", price: "15.000", tag: "popular", Image: "/images/kopi_kita/espresso.jpg" },
      { id: 2, name: "Cappuccino", price: "20.000", tag: "popular", Image: "/images/kopi_kita/capuccino.jpg" },
      { id: 3, name: "Latte", price: "22.000", tag: "new", Image: "/images/kopi_kita/latte.jpg" },
      { id: 4, name: "Cold Brew", price: "25.000", tag: "new", Image: "/images/kopi_kita/coldbrew.jpg" },
      { id: 5, name: "Matcha Latte", price: "23.000", Image: "/images/kopi_kita/matcha.jpg" },
      { id: 6, name: "Chocolate", price: "18.000", Image: "/images/kopi_kita/choco.jpg" },
    ],
    facilities: ["WiFi Gratis", "AC", "Parkir", "Toilet", "Musholla"],
  },
};

export default function StoreDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const store = storesData[id];
  if (!store)
    return <h2 className="text-center mt-10 text-gray-700 text-lg">Store not found</h2>;

  const popularItems = store.menu.filter((m) => m.tag === "popular");
  const newArrivals = store.menu.filter((m) => m.tag === "new");

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />

      {/* ===== CENTERING FIX ===== */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1300px] px-10 lg:px-24 py-10">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md 
                        hover:bg-gray-700 hover:text-orange-400 transition-all shadow-sm 
                        text-sm font-medium mb-8"
          >
            <ChevronLeft size={16} />
            Kembali
          </button>

          {/* Grid utama */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-10">
            {/* Kolom kiri */}
            <div className="flex flex-col gap-6">
              {/* Galeri + Info */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Galeri */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-200 gallery-zoom">
                    <img
                      src={store.gallery[currentImage]}
                      alt={store.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center rounded-full
                                 bg-white/90 backdrop-blur-md border border-gray-200 hover:scale-110 transition-all shadow-md"
                    >
                      <Heart
                        size={36}
                        fill={isFavorite ? '#ef4444' : 'none'}
                        color="white"
                      />
                    </button>
                  </div>

                  {/* Thumbnail */}
                  <div className="flex gap-3">
                    {store.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${store.name}-${idx}`}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-[100px] h-[80px] object-cover rounded-md cursor-pointer border-2 transition-all ${
                          idx === currentImage
                            ? "border-orange-500"
                            : "border-transparent hover:border-orange-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-bold text-gray-900">{store.name}</h1>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm text-sm font-medium text-gray-800">
                      <Star className="w-4 h-4 text-yellow-400" /> {store.rating} Rating
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm text-sm font-medium text-gray-800">
                      <MapPin className="w-4 h-4 text-red-500" /> {store.distance}
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm text-sm font-medium text-gray-800">
                      <Clock className="w-4 h-4 text-gray-500" /> {store.hours}
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm text-sm font-medium text-gray-800">
                      <Phone className="w-4 h-4 text-blue-500" /> {store.phone}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">Tentang</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {store.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Fasilitas</h2>
                    <div className="flex flex-wrap gap-2">
                      {store.facilities.map((f, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo */}
              <div className="flex items-center justify-between bg-orange-50 rounded-2xl shadow-sm px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    <Percent size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">2 promo tersedia</p>
                    <ul className="list-disc text-sm text-gray-600 pl-5">
                      <li>Diskon 10% untuk pembelian minimal Rp 50.000</li>
                      <li>Gratis ongkir dalam radius 1 km</li>
                    </ul>
                  </div>
                </div>
                <button
                  className="bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold 
                             px-5 py-2 rounded-md shadow-md hover:from-orange-400 hover:to-orange-600 
                             transition-all"
                >
                  Lihat semua
                </button>
              </div>

              {/* Menu */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Menu / Produk</h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                  {store.menu.map((item) => (
                    <div
                      key={item.id}
                      className="menu-card bg-white rounded-lg shadow-sm hover:shadow-md flex items-center gap-4 p-3 transition"
                    >
                      <img
                        src={item.Image || "/images/placeholder.jpg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                        <p className="text-orange-600 text-sm">Rp {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular</h2>
                <div className="flex flex-col gap-3">
                  {popularItems.map((item) => (
                    <div
                      key={item.id}
                      className="menu-card bg-white rounded-lg shadow-sm hover:shadow-md flex items-center gap-4 p-3 transition"
                    >
                      <img
                        src={item.Image || "/images/placeholder.jpg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                        <p className="text-orange-600 text-sm">Rp {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">New Arrival</h2>
                <div className="flex flex-col gap-3">
                  {newArrivals.map((item) => (
                    <div
                      key={item.id}
                      className="menu-card bg-white rounded-lg shadow-sm hover:shadow-md flex items-center gap-4 p-3 transition"
                    >
                      <img
                        src={item.Image || "/images/placeholder.jpg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                        <p className="text-orange-600 text-sm">Rp {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
