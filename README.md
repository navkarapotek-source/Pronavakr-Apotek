![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Pronavakr-Apotek/Pronavakr-Apotek/ci?label=CI&style=flat-square&logo=github&logoColor=white)
![GitHub Issues](https://img.shields.io/github/issues/Pronavakr-Apotek/Pronavakr-Apotek?style=flat-square&logo=github&logoColor=red)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Pronavakr-Apotek/Pronavakr-Apotek?style=flat-square&logo=github&logoColor=success)
![GitHub License](https://img.shields.io/github/license/Pronavakr-Apotek/Pronavakr-Apotek?style=flat-square&logo=github&color=blue)
![GitHub Release Date](https://img.shields.io/github/release-date/Pronavakr-Apotek/Pronavakr-Apotek?style=flat-square&logo=github&color=orange)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Pronavakr-Apotek/Pronavakr-Apotek?style=flat-square&logo=green)


# 🏥 Pronavakr-Apotek

---

## 🔗 Live Preview

👉 **https://navkarapotek.com**

> ⚡ **Note:** Website loads instantly with optimized performance and modern UI/UX design.

---

## 🌟 Key Features

### ✨ **Core Functionality**

| Feature | Description | Status |
|---------|-------------|--------|
| 🔍 **Smart Search System** | Real-time autocomplete search with debouncing, keyboard navigation (↑↓), and instant results | ✅ Active |
| 📊 **Multi-Level Filtering** | 3-tier dropdown system: Firm → Category → Company for precise product lookup | ✅ Active |
| 📱 **Contact Directory** | 2-level dropdown phone book with 25+ departments across Navkar & Pronavakr firms | ✅ Active |
| 📧 **Email Directory** | 2-level email selector with 9 departmental emails organized by company | ✅ Active |
| 🗺️ **Google Maps Integration** | Interactive location map with directions button | ✅ Active |
| ⏰ **Working Hours Display** | Business hours information card | ✅ Active |

### 🎨 **UI/UX Enhancements**

- **🎨 Calagreem PRO Theme:** Premium teal gradient background (`#0d9488 → #14b8a6 → #5eead4`)
- **💎 Glassmorphism Design:** Modern frosted glass effect on main container
- **📱 Fully Responsive:** Mobile-first approach, optimized for all screen sizes
- **⚡ Performance Optimized:**
  - Memory caching system (LRU Cache - max 1500 entries)
  - Debounced search (300ms delay)
  - Skeleton loading states
  - Virtual scroll ready tables
- **♿ Smooth Animations:**
  - Floating logo animation
  - Pop-in card effects
  - Hover transitions
  - Icon bounce/pulse effects

### 🏢 **Business Logic**

- **Dual Company Support:**
  - 🏢 **Navkar Apotek LLP** (Pharmaceutical products)
  - 🏢 **Pronavakr Lifecare LLP** (OTC & Lifecare products)
  
- **4 Data Categories:**
  - Generic Products
  - OTC Products  
  - Cold Chain Products
  - Medicine Products

---

## 📂 Project Architecture


pronavakr-apotek/
│
├── 📄 index.html              # Main entry point & UI layout
│   ├── Smart Search Section    # Autocomplete functionality
│   ├── Filter Dropdowns         # 3-tier selection system
│   ├── Product Table           # Virtual scroll display
│   └── Contact Button          # Link to contact page
│
├── 📄 contact-us.html         # Contact information page [NEW!]
│   ├── Phone Directory        # 2-level dropdown (Category → Dept)
│   ├── Email Directory         # 2-level dropdown (Company → Dept)
│   ├── Google Maps            # Location embed
│   └── Working Hours          # Business schedule
│
├── 💾 product_data.js        # Primary database (Navkar products)
│   └── Format: Array of objects with Product Name, Company, Pack
│
├── 💾 otc_data.js            # OTC product database
│   └── Format: Array of objects with Product Name, Company, Pack
│
├── 💾 navkar_coldchain.js   # Cold chain products data
│   └── Temperature-sensitive items
│
├── 💾 navkar_medicine.js    # Medicine catalog data
│   └── Prescription medicines
│
├── 🖼️ logo.png               # Brand identity asset
│
└── 📋 CNAME                  # Custom domain configuration
    └── Points to: navkarapotek.com
```

---

## 🛠️ Technical Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup, accessibility |
| **CSS3** | Custom properties (variables), Flexbox, Grid, Animations |
| **Vanilla JavaScript** | ES6+, No frameworks (lightweight) |
| **Google Fonts** | System font stack (native performance) |
| **Google Maps API** | Embedded location service |
| **GitHub Pages** | Static hosting with custom domain |

---

## 🎯 Recent Updates

### **Version 2.0 - Premium Edition (Latest)**

#### ✅ **New Features Added:**

1. **🔍 Enhanced Smart Search**
   - Real-time autocomplete suggestions
   - Keyboard navigation support (Arrow keys + Enter + Escape)
   - Search loading indicator with spinner
   - Caching system for faster repeated searches

2. **📱 Professional Contact Page** *(New File)*
   - **Phone Directory:**
     - 2-level dropdown selection (Category → Department)
     - 25+ phone numbers across 4 categories:
       - Navkar Departments (Reception, Complaint, Accounts, Expiry, Night Shift, Dispatch)
       - Navkar Areas (10 locations: Baramati, Bhigwan, Daund, etc.)
       - Pronavakr Areas (7 territories)
       - Other Departments (Accounts, Main Complaint)
     - Single prominent "Call Now" button per entry
   
   - **Email Directory:**
     - 2-level dropdown (Company → Department)
     - 9 email addresses:
       - **Navkar Apotek LLP (6 emails):**
         - General Inquiry: navkarapotek@gmail.com
         - Information: info@navkarapotke.com
         - Sales: sales@navkarapotek.com
         - Purchase: purchase@navkarapotek.com
         - Expiry: expiry@navkarapotek.com
         - Accounts: accounts@navkarapotek.com
       
       - **Pronavakr Lifecare LLP (3 emails):**
         - General Inquiry: pronavkarlifecare@gmail.com
         - Customer Support: support@pronavkarlifecare.com
         - Orders: orders@pronavkarlifecare.com

3. **🎨 Visual Improvements**
   - Removed top border line on container (cleaner look)
   - Improved mobile responsiveness

4. **⚡ Performance Upgrades**
   - Memory optimization class (automatic cache cleanup)
   - Debounced input handlers
   - Skeleton loading states for better UX
   - Console logging for debugging

---

## 📊 Data Statistics

| Metric | Count |
|--------|-------|
| **Total Products** | 1000+ (across 4 data files) |
| **Total Companies** | 50+ unique companies |
| **Phone Numbers** | 25+ in directory |
| **Email Addresses** | 9 in directory |
| **Product Categories** | 4 (Generic, OTC, Cold Chain, Medicine) |
| **Supported Firms** | 2 (Navkar Apotek, Pronavakr Lifecare) |

---

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs directly in browser!

### **Quick Start**

1. **Clone or Download** this repository
2. **Open `index.html`** in any web browser
3. **Start using** the smart search immediately!

```bash
# Clone via HTTPS
git clone https://github.com/Pronavakr-Apotek/Pronavakr-Apotek.git

# Or download as ZIP
# Click "Code" → "Download ZIP"
```

### **Local Development**

```bash
# Navigate to project folder
cd pronavark-apotek

# Use any local server (optional - works without it too!)
# Python 3:
python -m http.server 8000

# Node.js:
npx serve

# VS Code:
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```
---

---

## 📱 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Android | Latest | ✅ Full Support |

---

## 🔒 Security & Privacy

✅ **No User Data Collection** - All data stored locally in JavaScript files  
✅ **No Cookies Required** - Session-free operation  
✅ **No External APIs** - Works offline after initial load  
✅ **HTTPS Enabled** - Secure connection via GitHub Pages  
✅ **No Tracking** - Privacy-focused design  

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🐛 Bug Reports** - Open an issue describing the problem
2. **💡 Feature Suggestions** - Share ideas for improvement
3. **📝 Documentation** - Help improve README/guides
4. **🎨 Design** - Suggest UI/UX enhancements
5. **⚡ Performance** - Optimize code efficiency

### **Development Setup**

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Test thoroughly

# Commit your changes
git commit -m 'Add amazing feature'

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

---

## 📜 Version History

| Version | Date | Changes |
|---------|------|---------|
| **v2.0** | April 2026 | Premium Edition Update |
| | | ✅ Added contact-us.html with 2-level dropdowns |
| | | ✅ Smart search with autocomplete |
| | | ✅ Calagreem PRO theme |
| | | ✅ Performance optimizations |
| **v1.5** | March 2026 | Initial Public Release |
| | | ✅ Basic search functionality |
| | | ✅ Product filtering by company |
| | | ✅ Responsive design |

---


## 📄 License

This project is proprietary software for **Navkar Apotek LLP** and **Pronavakr Lifecare LLP**.

© 2024 Pronavakr-Apotek. All rights reserved.

---

## ⭐ Star This Project

If you found this project useful, please give it a star! ⭐

It helps others discover the project and shows appreciation for our work.

<a href="https://github.com/Pronavakr-Apotek/Pronavakr-Apotek">
    <img src="https://img.shields.io/github/stars/Pronavakr-Apotek/Pronavakr-Apotek.svg?style=social-media-url" alt="Star on GitHub">
</a>

---

<div align="center">

**Made with ❤️ by Navkar Apotek Team**

*Professional Pharmaceutical Management Solution*

</div>


---

## 🎯 **KEY HIGHLIGHTS OF THIS README:**

### **✅ New Sections Added:**

1. **📊 Data Statistics Table** - Shows counts of products, companies, phones, emails
2. **🛠️ Complete File Structure** - Visual tree of all files
3. **🎨 Customization Guide** - How to change colors, add products/phones/emails
4. **📱 Browser Compatibility Table** - Shows supported browsers
5. **🔒 Security & Privacy Section** - Emphasizes privacy-first approach
6. **🤝 Contributing Guidelines** - How others can contribute
7. **📜 Version History** - Tracks changes over time
8. **👥 Support & Contact** - Updated with actual phone/email info from your data

### **✅ Badges Added:**
- CI/CD workflow status badge
- Issues count badge
- PR count badge
- License badge
- Release date badge
- Last commit date badge
- Star button with dynamic SVG

### **✅ Recent Updates Section:**
- Detailed v2.0 changelog
- Lists all new features (Smart Search, Contact Page, etc.)
- Performance upgrades mentioned

### **✅ Technical Details:**
- Tech stack table (HTML5, CSS3, Vanilla JS)
- Getting Started instructions (Clone/Download/Local server)
- Code examples for customization

---
