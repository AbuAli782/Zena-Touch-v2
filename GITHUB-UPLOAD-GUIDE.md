# 📤 دليل رفع المشروع إلى GitHub

## 🎯 الخطوات

### الخطوة 1: إنشاء مستودع جديد على GitHub

1. اذهب إلى https://github.com/new
2. أدخل اسم المستودع: `Zena-Touch-v2`
3. أضف وصف: "Professional decoration, electricity, and plumbing services website"
4. اختر "Public" (عام)
5. اترك الخيارات الأخرى كما هي
6. اضغط "Create repository"

---

### الخطوة 2: فتح PowerShell في مجلد المشروع

```powershell
# انتقل إلى مجلد المشروع
cd d:\Zena_Touch_v2

# تحقق من أن Git مثبت
git --version
```

---

### الخطوة 3: تهيئة Git المحلي

```powershell
# تهيئة المستودع المحلي
git init

# أضف جميع الملفات
git add .

# تحقق من الملفات المضافة
git status

# أنشئ أول commit
git commit -m "Initial commit: Zena Touch website with full optimization"
```

---

### الخطوة 4: ربط المستودع المحلي بـ GitHub

```powershell
# استبدل USERNAME بـ GitHub username الخاص بك
git branch -M main
git remote add origin https://github.com/USERNAME/Zena-Touch-v2.git
git push -u origin main
```

**مثال:**
```powershell
git remote add origin https://github.com/abuali782/Zena-Touch-v2.git
git push -u origin main
```

---

### الخطوة 5: التحقق من الرفع

1. اذهب إلى https://github.com/USERNAME/Zena-Touch-v2
2. تحقق من أن جميع الملفات موجودة
3. تحقق من أن README.md يظهر بشكل صحيح

---

## 🚀 تفعيل GitHub Pages

### الخطوة 1: الذهاب إلى إعدادات المستودع

1. اذهب إلى https://github.com/USERNAME/Zena-Touch-v2
2. اضغط على "Settings" (الإعدادات)
3. اختر "Pages" من القائمة الجانبية

### الخطوة 2: تفعيل GitHub Pages

1. تحت "Source"، اختر "Deploy from a branch"
2. اختر الفرع: "main"
3. اختر المجلد: "/ (root)"
4. اضغط "Save"

### الخطوة 3: الانتظار والتحقق

1. انتظر 1-2 دقيقة
2. ستظهر رسالة: "Your site is live at https://USERNAME.github.io/Zena-Touch-v2/"
3. اضغط على الرابط للتحقق

---

## 📝 الملفات المهمة للرفع

```
✅ جميع ملفات HTML
✅ جميع ملفات CSS
✅ جميع ملفات JavaScript
✅ مجلد images (الصور والفيديوهات)
✅ robots.txt
✅ sitemap.xml
✅ _headers
✅ _redirects
✅ README.md
✅ .gitignore
```

---

## ⚠️ ملاحظات مهمة

### 1. حجم الملفات
- إذا كان حجم الملفات كبيراً جداً، استخدم Git LFS:
```powershell
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git commit -m "Add Git LFS tracking for videos"
git push
```

### 2. الفيديوهات الكبيرة
- إذا كانت الفيديوهات أكبر من 100 MB، استخدم:
  - YouTube Embed
  - Vimeo
  - أو خادم خارجي

### 3. الصور الكبيرة
- تأكد من ضغط الصور قبل الرفع
- استخدم صيغ حديثة (WebP)

---

## 🔄 تحديثات مستقبلية

### لإضافة تحديثات جديدة:

```powershell
# قم بالتعديلات على الملفات

# أضف التغييرات
git add .

# أنشئ commit جديد
git commit -m "وصف التحديث"

# ادفع التحديثات
git push origin main
```

---

## 🐛 استكشاف الأخطاء

### المشكلة: "fatal: not a git repository"
```powershell
git init
git remote add origin https://github.com/USERNAME/Zena-Touch-v2.git
```

### المشكلة: "Permission denied"
```powershell
# استخدم Personal Access Token بدلاً من كلمة المرور
git remote set-url origin https://TOKEN@github.com/USERNAME/Zena-Touch-v2.git
```

### المشكلة: الملفات الكبيرة
```powershell
# تحقق من حجم الملفات
git ls-files -s | sort -k4 -n -r | head -20
```

---

## ✅ قائمة التحقق النهائية

- [ ] تم إنشاء مستودع GitHub جديد
- [ ] تم تهيئة Git محلياً
- [ ] تم إضافة جميع الملفات
- [ ] تم الـ commit الأول
- [ ] تم ربط المستودع البعيد
- [ ] تم الـ push إلى GitHub
- [ ] تم تفعيل GitHub Pages
- [ ] تم التحقق من الموقع الحي
- [ ] تم اختبار جميع الروابط
- [ ] تم التحقق من الأداء

---

## 🎉 تم!

موقعك الآن متاح على:
- **GitHub:** https://github.com/USERNAME/Zena-Touch-v2
- **الموقع الحي:** https://USERNAME.github.io/Zena-Touch-v2/

---

## 📞 الدعم

إذا واجهت أي مشاكل:
1. تحقق من وثائق GitHub: https://docs.github.com
2. اطلب مساعدة من GitHub Support
3. ابحث عن الخطأ على Stack Overflow

---

**آخر تحديث:** 24 نوفمبر 2025
