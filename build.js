const fs = require('fs');
const path = require('path');

// Simple CSS minifier (basic implementation)
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/\s*{\s*/g, '{') // Remove spaces around braces
        .replace(/\s*}\s*/g, '}') // Remove spaces around braces
        .replace(/\s*:\s*/g, ':') // Remove spaces around colons
        .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
        .replace(/\s*,\s*/g, ',') // Remove spaces around commas
        .replace(/\s*>\s*/g, '>') // Remove spaces around >
        .replace(/\s*\+\s*/g, '+') // Remove spaces around +
        .replace(/\s*~\s*/g, '~') // Remove spaces around ~
        .trim();
}

// Minify CSS files
function buildCSS() {
    try {
        const cssPath = path.join(__dirname, 'styles.css');
        const css = fs.readFileSync(cssPath, 'utf8');
        const minifiedCSS = minifyCSS(css);
        
        const outputPath = path.join(__dirname, 'styles.min.css');
        fs.writeFileSync(outputPath, minifiedCSS);
        
        const originalSize = Buffer.byteLength(css, 'utf8');
        const minifiedSize = Buffer.byteLength(minifiedCSS, 'utf8');
        const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(2);
        
        console.log(`✅ CSS minified successfully!`);
        console.log(`📊 Original: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`📊 Minified: ${(minifiedSize / 1024).toFixed(2)} KB`);
        console.log(`💾 Savings: ${savings}%`);
        
    } catch (error) {
        console.error('❌ Error minifying CSS:', error.message);
    }
}

// Create production HTML with minified CSS
function buildHTML() {
    try {
        const htmlPath = path.join(__dirname, 'index.html');
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Replace CSS link with minified version
        const productionHTML = html.replace(
            'href="styles.css"',
            'href="styles.min.css"'
        );
        
        const outputPath = path.join(__dirname, 'index.production.html');
        fs.writeFileSync(outputPath, productionHTML);
        
        console.log(`✅ Production HTML created: index.production.html`);
        
    } catch (error) {
        console.error('❌ Error creating production HTML:', error.message);
    }
}

// Create production package
function buildProduction() {
    console.log('🚀 Building production version...\n');
    
    buildCSS();
    buildHTML();
    
    console.log('\n✨ Production build complete!');
    console.log('📁 Files created:');
    console.log('   - styles.min.css (minified CSS)');
    console.log('   - index.production.html (production HTML)');
    console.log('\n🚀 Ready for deployment!');
}

// Run build if called directly
if (require.main === module) {
    buildProduction();
}

module.exports = { buildCSS, buildHTML, buildProduction }; 