    # SportsHub – Sports Shop & Cricket Equipment Store

**SportsHub** is a commercial-grade, modern, multi-page HTML5/CSS3/JavaScript web application and e-commerce store template specialized in cricket equipment, athletic wear, multi-sport supplies, team kit customization, and wholesale bulk order management.

---

## Technical Stack & Dependencies

- **HTML5 & CSS3**: Semantic, SEO-friendly layout structure.
- **Tailwind CSS**: Utility-first styling framework via CDN.
- **FontAwesome 6 & Bootstrap Icons**: Vector icons for actions and sports elements.
- **JavaScript ES6+**: Pure vanilla JavaScript for dynamic interactions.
- **Chart.js**: Responsive charts for admin sales analytics.
- **LocalStorage API**: Persists cart contents, saved wishlist items, active theme (Dark/Light mode), and layout direction (RTL/LTR).

---

## Directory Structure

```git config --global user.name "Your Name"
sports-shop-template/
├── index.html                    # General Sports Store Landing
├── cricket-home.html            # Cricket Specialized Landing
├── about.html                    # Company Story & Statistics
├── services.html                 # Sports Equipment Services
├── service-details.html          # Detailed Service Page
├── shop.html                     # E-Commerce Product Catalog with Filters
├── product-details.html          # Individual Product Specification & Reviews
├── categories.html               # Category Directory Grid
├── brands.html                   # Official Brand Partners Directory
├── team-kits.html                # Interactive Team Kit Customizer
├── bulk-orders.html              # Wholesale & Institutional Sales Form
├── pricing.html                  # Team Customization Packages
├── blog.html                     # Sports News & Guides
├── blog-details.html             # Article Reader View
├── contact.html                  # Store Contact & Location Info
├── cart.html                     # Interactive Shopping Cart
├── wishlist.html                 # Saved Items Page
├── login.html                    # User Login Modal / Page
├── register.html                 # Customer Account Registration
├── 404.html                      # Sports-themed Error Page
├── coming-soon.html              # Product Launch Countdown Page
├── maintenance.html             # Scheduled Maintenance Screen
├── customer/                     # Customer Portal (11 Subpages)
│   ├── dashboard.html
│   ├── profile.html
│   ├── orders.html
│   ├── order-details.html
│   ├── wishlist.html
│   ├── addresses.html
│   ├── enquiries.html
│   ├── team-kit-requests.html
│   ├── reviews.html
│   ├── notifications.html
│   └── settings.html
├── admin/                        # Admin Portal (19 Subpages)
│   ├── index.html                # Analytics Dashboard with Chart.js
│   ├── products.html
│   ├── add-product.html
│   ├── edit-product.html
│   ├── categories.html
│   ├── brands.html
│   ├── orders.html
│   ├── order-details.html
│   ├── customers.html
│   ├── customer-details.html
│   ├── team-kit-requests.html
│   ├── bulk-enquiries.html
│   ├── payments.html
│   ├── reviews.html
│   ├── blog.html
│   ├── messages.html
│   ├── offers.html
│   ├── reports.html
│   └── settings.html
├── assets/
│   ├── css/                      # style.css, responsive.css, dark-mode.css, rtl.css
│   └── js/                       # theme.js, rtl.js, cart.js, wishlist.js, products.js, filters.js, forms.js, main.js, admin.js, charts.js
├── components/                   # Modular components (navbar, footer, sidebars)
└── data/                         # Mock JSON databases (products, categories, brands, etc.)
```

---

## Features

1. **Interactive Cart & Wishlist**: Real-time quantity updates, subtotal and tax calculation, badge counts, and localStorage state persistence across page refreshes.
2. **Team Kit Customizer**: Interactive 2D jersey preview canvas with live player name, number, and color switching.
3. **Dark / Light Mode**: Instant smooth theme toggling with stored preference.
4. **RTL / LTR Support**: Full right-to-left layout alignment toggle.
5. **Shop Catalog Filtering**: Dynamic category, brand, and keyword live search filtering with sorting options.
6. **Admin Dashboard**: Sales trends line charts, category distribution doughnut chart, order status updates, and product management actions.

---

## How to Run

Simply open `index.html` in any modern web browser or serve the directory using any static web server (e.g. `npx serve`, `Live Server` in VS Code, or Python `http.server`).
