# 📊 Professional Media Compression Guide

## 🎯 Overview

This guide explains how to compress images and videos for optimal website performance.

---

## 📦 Installation

### Option 1: Automatic Setup (Recommended)

```bash
# On Windows (PowerShell)
node compress-media.js

# On Mac/Linux
chmod +x compression-setup.sh
./compression-setup.sh
```

### Option 2: Manual Installation

```bash
npm install --save-dev \
    sharp \
    imagemin \
    imagemin-mozjpeg \
    imagemin-pngquant \
    imagemin-webp \
    fluent-ffmpeg \
    ffmpeg-static
```

---

## 🖼️ Image Compression

### JPEG Compression
- **Quality:** 80% (optimal balance between quality and size)
- **Progressive:** Yes (better perceived performance)
- **Expected Reduction:** 30-40%

### PNG Compression
- **Quality:** 60-80%
- **Speed:** 2 (balanced)
- **Expected Reduction:** 20-30%

### WebP Conversion
- **Quality:** 80%
- **Benefits:** 25-35% smaller than JPEG/PNG
- **Browser Support:** 95%+ modern browsers

### Image Dimension Optimization
- **Max Width:** 2000px
- **Max Height:** 2000px
- **Fit:** Inside (maintains aspect ratio)

---

## 🎬 Video Compression

### Video Codec
- **Codec:** H.264 (VP9 for better compression)
- **CRF:** 28 (quality 0-51, lower is better)
- **Preset:** Medium (balance between speed and compression)

### Video Bitrate
- **Max Rate:** 5000 kbps
- **Buffer Size:** 10000 kbps
- **Audio:** AAC 128 kbps

### Expected Reduction
- **Original:** 100-500 MB
- **Compressed:** 20-100 MB
- **Reduction:** 60-80%

---

## 📝 Usage Instructions

### Step 1: Prepare Your Media Files

Place all images and videos in the `images/` directory:

```
images/
├── Decoration_Photos/
│   ├── IMG1.jpg
│   ├── IMG2.jpg
│   └── VID1.mp4
├── Electricity_Photos/
│   └── IMG1.jpg
└── Plumbing_Photos/
    └── IMG1.jpg
```

### Step 2: Run Compression

```bash
# Windows (PowerShell)
node compress-media.js

# Mac/Linux
node compress-media.js
```

### Step 3: Monitor Progress

The script will output:
- ✅ Compressed files
- 📊 File sizes before/after
- 💾 Total savings

### Step 4: Verify Results

Check the `images/` directory for:
- Original files (compressed)
- WebP versions (new format)
- Compression report

---

## 🌐 Update HTML for WebP

### Before (Current)
```html
<img src="images/Decoration_Photos/IMG1.jpg" alt="Decoration">
```

### After (Optimized)
```html
<picture>
    <source srcset="images/Decoration_Photos/IMG1.webp" type="image/webp">
    <img src="images/Decoration_Photos/IMG1.jpg" alt="Decoration" loading="lazy">
</picture>
```

### Lazy Loading
```html
<img src="images/Decoration_Photos/IMG1.jpg" 
     alt="Decoration" 
     loading="lazy"
     decoding="async">
```

---

## 📊 Performance Metrics

### Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Size | 500 MB | 150 MB | 70% ↓ |
| Page Load | 8s | 2s | 75% ↓ |
| LCP | 3.5s | 1.2s | 66% ↓ |
| CLS | 0.15 | 0.05 | 67% ↓ |
| FID | 150ms | 50ms | 67% ↓ |

### Core Web Vitals Impact

- **LCP (Largest Contentful Paint):** Faster image loading
- **FID (First Input Delay):** Reduced JavaScript execution
- **CLS (Cumulative Layout Shift):** Better image dimension optimization

---

## 🔧 Advanced Configuration

### Modify Compression Settings

Edit `compress-media.js`:

```javascript
const COMPRESSION_CONFIG = {
    jpeg: {
        quality: 80,  // Increase for better quality
        progressive: true,
    },
    png: {
        quality: [0.6, 0.8],  // Adjust quality range
        speed: 2,
    },
    webp: {
        quality: 80,  // Increase for better quality
    },
    video: {
        crf: 28,  // Lower = better quality (0-51)
        preset: 'medium',  // ultrafast to veryslow
    }
};
```

### Quality vs Size Trade-off

| Quality | File Size | Use Case |
|---------|-----------|----------|
| 60% | Very Small | Thumbnails |
| 75% | Small | Gallery |
| 80% | Medium | Hero Images |
| 90% | Large | High-end |

---

## 🐛 Troubleshooting

### Issue: FFmpeg not found

**Solution:**
```bash
npm install --save-dev ffmpeg-static
```

### Issue: Out of memory

**Solution:**
Process files in batches:
```bash
# Compress only JPEGs
node -e "require('./compress-media.js').compressJPEG()"
```

### Issue: Slow compression

**Solution:**
Change video preset to `ultrafast`:
```javascript
preset: 'ultrafast'  // Faster but larger files
```

---

## 📈 Monitoring & Analytics

### Check Compression Results

```bash
# Get file sizes
du -sh images/Decoration_Photos/

# Compare before/after
ls -lh images/Decoration_Photos/*.jpg | head -5
```

### Performance Testing

Use these tools to verify improvements:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/

2. **GTmetrix**
   - https://gtmetrix.com/

3. **WebPageTest**
   - https://www.webpagetest.org/

---

## 💡 Best Practices

### 1. Image Optimization
- ✅ Use WebP with JPEG fallback
- ✅ Implement lazy loading
- ✅ Optimize dimensions
- ✅ Use responsive images

### 2. Video Optimization
- ✅ Compress before uploading
- ✅ Use H.264 codec
- ✅ Limit video duration
- ✅ Provide thumbnail

### 3. Caching Strategy
- ✅ Set long cache expiration (1 year)
- ✅ Use CDN for media delivery
- ✅ Enable gzip compression
- ✅ Minify CSS/JS

### 4. Monitoring
- ✅ Track Core Web Vitals
- ✅ Monitor page load time
- ✅ Check file sizes
- ✅ Test on slow networks

---

## 🚀 Next Steps

1. ✅ Run compression script
2. ✅ Update HTML with WebP
3. ✅ Test website performance
4. ✅ Deploy to production
5. ✅ Monitor metrics

---

## 📞 Support

For issues or questions:
1. Check troubleshooting section
2. Review compression logs
3. Test with different settings
4. Consult documentation

---

**Last Updated:** November 2025
**Version:** 1.0
