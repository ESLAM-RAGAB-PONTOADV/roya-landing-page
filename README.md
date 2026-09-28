# ROYA Landing Page

صفحة هبوط ثابتة لبراند **ROYA Beauty & Style**، جاهزة للعمل محليًا والرفع على GitHub Pages.

## الملفات

- `index.html` — محتوى الصفحة
- `style.css` — الألوان، الخطوط، التنسيق والاستجابة للموبايل
- `script.js` — روابط التواصل ورسالة واتساب
- `assets/images/` — صور وهوية البراند

## تعديل روابط التواصل

افتح `script.js` وعدّل القيم داخل `ROYA_CONFIG` فقط:

```js
const ROYA_CONFIG = {
  facebook: "...",
  instagram: "...",
  whatsappNumber: "201222456069",
  whatsappMessage: "..."
};
```

> رقم واتساب داخل الرابط يجب أن يكون بالصيغة الدولية بدون `+` أو مسافات. الرقم الحالي المصري 01222456069 أصبح `201222456069`.

## تشغيل المشروع على VS Code

1. افتح فولدر `roya-landing-page` في VS Code.
2. يمكنك فتح `index.html` مباشرة في المتصفح، أو استخدام إضافة **Live Server** إن كانت عندك.
3. أي تعديل في النصوص موجود في `index.html`، وأي تعديل في الألوان والتنسيق موجود في `style.css`.

## النشر على GitHub Pages

1. أنشئ Repository جديد على GitHub.
2. ارفع محتويات هذا الفولدر إلى الـ repository.
3. من GitHub افتح:
   **Settings → Pages**
4. تحت **Build and deployment** اختر:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. اضغط **Save**.
6. بعد اكتمال النشر سيظهر رابط الموقع في صفحة GitHub Pages.

## ملاحظات

- الصفحة لا تحتاج Backend أو قاعدة بيانات.
- روابط Facebook / Instagram / WhatsApp تفتح مباشرة في نافذة جديدة.
- الخطوط تُحمّل من Google Fonts. في حالة عدم توفر الإنترنت سيستخدم المتصفح خطوط النظام البديلة.
