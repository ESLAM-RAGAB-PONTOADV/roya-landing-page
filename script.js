// ===============================
// ROYA - Editable contact settings
// غيّر الروابط أو الرسالة من هنا فقط
// ===============================
const ROYA_CONFIG = {
  facebook: "https://www.facebook.com/profile.php?id=61594517483692",
  instagram: "https://www.instagram.com/royastor2026/",
  whatsappNumber: "201222456069",
  whatsappMessage: "مرحبًا ROYA، أرغب في الاستفسار عن المنتجات المتاحة."
};

const whatsappUrl = `https://wa.me/${ROYA_CONFIG.whatsappNumber}?text=${encodeURIComponent(ROYA_CONFIG.whatsappMessage)}`;

document.getElementById("facebook-link").href = ROYA_CONFIG.facebook;
document.getElementById("instagram-link").href = ROYA_CONFIG.instagram;
document.getElementById("whatsapp-link").href = whatsappUrl;
document.getElementById("hero-whatsapp").href = whatsappUrl;
document.getElementById("year").textContent = new Date().getFullYear();
