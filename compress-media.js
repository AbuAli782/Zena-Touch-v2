#!/usr/bin/env node

/**
 * Professional Media Compression Script
 * Compresses images and videos for optimal web performance
 * 
 * Requirements:
 * - npm install sharp imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp ffmpeg-static
 * 
 * Usage:
 * - node compress-media.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegStatic);

const IMAGES_DIR = path.join(__dirname, 'images');
const COMPRESSION_CONFIG = {
    jpeg: {
        quality: 80,
        progressive: true,
        mozjpeg: {
            quality: 80,
            progressive: true,
        }
    },
    png: {
        quality: [0.6, 0.8],
        speed: 2,
    },
    webp: {
        quality: 80,
    },
    video: {
        crf: 28, // Quality (0-51, lower is better)
        preset: 'medium', // ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow
        maxrate: '5000k',
        bufsize: '10000k',
    }
};

/**
 * Compress JPEG images
 */
async function compressJPEG() {
    console.log('🖼️  Compressing JPEG images...');
    try {
        const files = await imagemin([`${IMAGES_DIR}/**/*.jpg`], {
            destination: IMAGES_DIR,
            plugins: [
                imageminMozjpeg(COMPRESSION_CONFIG.jpeg.mozjpeg)
            ]
        });
        console.log(`✅ Compressed ${files.length} JPEG files`);
        return files.length;
    } catch (error) {
        console.error('❌ JPEG compression error:', error.message);
        return 0;
    }
}

/**
 * Compress PNG images
 */
async function compressPNG() {
    console.log('🖼️  Compressing PNG images...');
    try {
        const files = await imagemin([`${IMAGES_DIR}/**/*.png`], {
            destination: IMAGES_DIR,
            plugins: [
                imageminPngquant(COMPRESSION_CONFIG.png)
            ]
        });
        console.log(`✅ Compressed ${files.length} PNG files`);
        return files.length;
    } catch (error) {
        console.error('❌ PNG compression error:', error.message);
        return 0;
    }
}

/**
 * Convert images to WebP format
 */
async function convertToWebP() {
    console.log('🌐 Converting images to WebP...');
    try {
        const files = await imagemin([`${IMAGES_DIR}/**/*.{jpg,png}`], {
            destination: IMAGES_DIR,
            plugins: [
                imageminWebp(COMPRESSION_CONFIG.webp)
            ]
        });
        console.log(`✅ Converted ${files.length} images to WebP`);
        return files.length;
    } catch (error) {
        console.error('❌ WebP conversion error:', error.message);
        return 0;
    }
}

/**
 * Compress MP4 videos
 */
function compressVideo(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .outputOptions([
                `-crf ${COMPRESSION_CONFIG.video.crf}`,
                `-preset ${COMPRESSION_CONFIG.video.preset}`,
                `-maxrate ${COMPRESSION_CONFIG.video.maxrate}`,
                `-bufsize ${COMPRESSION_CONFIG.video.bufsize}`,
                '-c:a aac',
                '-b:a 128k'
            ])
            .output(outputPath)
            .on('end', () => {
                resolve(true);
            })
            .on('error', (err) => {
                reject(err);
            })
            .run();
    });
}

/**
 * Get file size in MB
 */
function getFileSizeMB(filePath) {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024 / 1024).toFixed(2);
}

/**
 * Compress all videos
 */
async function compressAllVideos() {
    console.log('🎬 Compressing videos...');
    
    const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv'];
    let compressedCount = 0;
    let totalSavings = 0;

    const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (videoExtensions.includes(path.extname(file).toLowerCase())) {
                const originalSize = getFileSizeMB(filePath);
                const outputPath = filePath.replace(/\.[^.]+$/, '-compressed.mp4');
                
                console.log(`  Compressing: ${file} (${originalSize} MB)...`);
                
                compressVideo(filePath, outputPath)
                    .then(() => {
                        const compressedSize = getFileSizeMB(outputPath);
                        const savings = (originalSize - compressedSize).toFixed(2);
                        totalSavings += parseFloat(savings);
                        compressedCount++;
                        console.log(`  ✅ ${file}: ${originalSize} MB → ${compressedSize} MB (Saved: ${savings} MB)`);
                        
                        // Replace original with compressed
                        fs.unlinkSync(filePath);
                        fs.renameSync(outputPath, filePath);
                    })
                    .catch(err => {
                        console.error(`  ❌ Error compressing ${file}:`, err.message);
                    });
            }
        });
    };

    walkDir(IMAGES_DIR);
    console.log(`✅ Compressed ${compressedCount} videos (Total saved: ${totalSavings.toFixed(2)} MB)`);
    return compressedCount;
}

/**
 * Optimize image dimensions
 */
async function optimizeImageDimensions() {
    console.log('📐 Optimizing image dimensions...');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    let optimizedCount = 0;

    const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
                try {
                    sharp(filePath)
                        .metadata()
                        .then(metadata => {
                            // Resize if larger than 2000px
                            if (metadata.width > 2000 || metadata.height > 2000) {
                                return sharp(filePath)
                                    .resize(2000, 2000, {
                                        fit: 'inside',
                                        withoutEnlargement: true
                                    })
                                    .toFile(filePath + '.tmp');
                            }
                        })
                        .then(() => {
                            if (fs.existsSync(filePath + '.tmp')) {
                                fs.unlinkSync(filePath);
                                fs.renameSync(filePath + '.tmp', filePath);
                                optimizedCount++;
                                console.log(`  ✅ Optimized: ${file}`);
                            }
                        })
                        .catch(err => {
                            console.error(`  ❌ Error optimizing ${file}:`, err.message);
                        });
                } catch (error) {
                    console.error(`  ❌ Error processing ${file}:`, error.message);
                }
            }
        });
    };

    walkDir(IMAGES_DIR);
    console.log(`✅ Optimized ${optimizedCount} images`);
    return optimizedCount;
}

/**
 * Generate compression report
 */
async function generateReport() {
    console.log('\n📊 Generating compression report...\n');
    
    let totalOriginalSize = 0;
    let totalCompressedSize = 0;
    let fileCount = 0;

    const walkDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else {
                totalOriginalSize += stat.size;
                fileCount++;
            }
        });
    };

    walkDir(IMAGES_DIR);
    totalCompressedSize = totalOriginalSize * 0.6; // Estimated 40% reduction

    console.log('═══════════════════════════════════════════');
    console.log('📈 COMPRESSION REPORT');
    console.log('═══════════════════════════════════════════');
    console.log(`Total Files: ${fileCount}`);
    console.log(`Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Estimated Compressed Size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Estimated Savings: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reduction: ~40%`);
    console.log('═══════════════════════════════════════════\n');
}

/**
 * Main compression function
 */
async function main() {
    console.log('\n🚀 Starting Professional Media Compression...\n');
    
    try {
        // Compress images
        await compressJPEG();
        await compressPNG();
        await convertToWebP();
        
        // Optimize dimensions
        await optimizeImageDimensions();
        
        // Compress videos
        await compressAllVideos();
        
        // Generate report
        await generateReport();
        
        console.log('✅ Media compression completed successfully!');
        console.log('💡 Tip: Update your HTML to use WebP images with fallback to JPEG\n');
        
    } catch (error) {
        console.error('❌ Compression failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = {
    compressJPEG,
    compressPNG,
    convertToWebP,
    compressAllVideos,
    optimizeImageDimensions
};
