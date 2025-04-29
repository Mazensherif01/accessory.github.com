function toggleLanguage() {
  let currentLang = document.documentElement.lang;
  if (currentLang === "en") {
    document.documentElement.lang = "ar";
    document.querySelector(".hero-title").textContent = "اكتشف أفضل إكسسوارات السيارات";
    document.querySelector(".hero-description").textContent = "منتجات عالية الجودة لسيارتك.";
    document.querySelector(".btn").textContent = "تسوق الآن";
    document.querySelectorAll(".nav-link")[0].textContent = "الرئيسية";
    document.querySelectorAll(".nav-link")[1].textContent = "المنتجات";
    document.querySelectorAll(".nav-link")[2].textContent = "اتصل بنا";
    document.querySelector(".product-card h3").textContent = "غطاء مقعد فاخر";
    document.querySelector(".product-price").textContent = "150 جنيه";
    document.querySelectorAll(".product-card button")[0].textContent = "أضف إلى السلة";
    document.querySelector(".product-card h3:nth-of-type(2)").textContent = "معطر هواء للسيارة";
    document.querySelector(".product-price:nth-of-type(2)").textContent = "50 جنيه";
    document.querySelectorAll(".product-card button")[1].textContent = "أضف إلى السلة";
  } else {
    document.documentElement.lang = "en";
    document.querySelector(".hero-title").textContent = "Discover the Best Car Accessories";
    document.querySelector(".hero-description").textContent = "Premium quality products for your car.";
    document.querySelector(".btn").textContent = "Shop Now";
    document.querySelectorAll(".nav-link")[0].textContent = "Home";
    document.querySelectorAll(".nav-link")[1].textContent = "Products";
    document.querySelectorAll(".nav-link")[2].textContent = "Contact";
    document.querySelector(".product-card h3").textContent = "Luxury Seat Cover";
    document.querySelector(".product-price").textContent = "$150";
    document.querySelectorAll(".product-card button")[0].textContent = "Add to Cart";
    document.querySelector(".product-card h3:nth-of-type(2)").textContent = "Car Air Freshener";
    document.querySelector(".product-price:nth-of-type(2)").textContent = "$50";
    document.querySelectorAll(".product-card button")[1].textContent = "Add to Cart";
  }
}