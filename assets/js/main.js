// SportsHub Core Main Script & Embedded Fallback Data
window.BRANDS_DATA = [
  {
    "id": "brand-1",
    "name": "Kookaburra",
    "slug": "kookaburra",
    "logo": "assets/images/kookaburra-bat.svg",
    "productsCount": 140,
    "description": "World renowned Australian manufacturer of premium cricket bats, match balls, and protective equipment."
  },
  {
    "id": "brand-2",
    "name": "Gray-Nicolls",
    "slug": "gray-nicolls",
    "logo": "assets/images/cricket-helmet.svg",
    "productsCount": 115,
    "description": "British heritage cricket brand crafting handmade English Willow bats since 1855."
  },
  {
    "id": "brand-3",
    "name": "SS Ton",
    "slug": "ss",
    "logo": "assets/images/thigh-guard.svg",
    "productsCount": 160,
    "description": "Sareen Sports Industries - leading maker of high-performance cricket gear endorsed by global pros."
  },
  {
    "id": "brand-4",
    "name": "MRF Pace",
    "slug": "mrf",
    "logo": "assets/images/cricket-gloves.svg",
    "productsCount": 85,
    "description": "Iconic cricket brand producing Test-grade bats, gloves, pads, and protective armor."
  },
  {
    "id": "brand-5",
    "name": "SG Cricket",
    "slug": "sg",
    "logo": "assets/images/sg-sunny-legend-bat.svg",
    "productsCount": 195,
    "description": "Sanspareils Greenlands - Official match leather ball manufacturer for Test series worldwide."
  },
  {
    "id": "brand-6",
    "name": "New Balance",
    "slug": "new-balance",
    "logo": "assets/images/cricket-spikes.svg",
    "productsCount": 135,
    "description": "Engineered athletic footwear, cricket spikes, and high-velocity sports training apparel."
  },
  {
    "id": "brand-7",
    "name": "Nike Sports",
    "slug": "nike",
    "logo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    "productsCount": 350,
    "description": "Global athletic footwear, activewear apparel, and multi-sport training innovations."
  },
  {
    "id": "brand-8",
    "name": "Adidas Athletics",
    "slug": "adidas",
    "logo": "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=600&q=80",
    "productsCount": 310,
    "description": "Pioneering three-stripe footwear, performance team kit gear, and accessories."
  },
  {
    "id": "brand-9",
    "name": "Puma Sport",
    "slug": "puma",
    "logo": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    "productsCount": 220,
    "description": "High-velocity sports apparel, lightweight spikes, and professional athlete merchandise."
  },
  {
    "id": "brand-10",
    "name": "Wilson Sporting Goods",
    "slug": "wilson",
    "logo": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    "productsCount": 180,
    "description": "Official NBA match ball provider and legendary manufacturer of tennis rackets and team gear."
  },
  {
    "id": "brand-11",
    "name": "Babolat",
    "slug": "babolat",
    "logo": "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=600&q=80",
    "productsCount": 95,
    "description": "French tennis equipment brand famous for power stringing technologies and carbon rackets."
  },
  {
    "id": "brand-12",
    "name": "Yonex",
    "slug": "yonex",
    "logo": "https://images.unsplash.com/photo-1613918431804-9457858c2b74?auto=format&fit=crop&w=600&q=80",
    "productsCount": 110,
    "description": "World leader in badminton carbon frames, shuttlecocks, and non-marking indoor court shoes."
  }
];

window.CATEGORIES_DATA = [
  {
    "id": "cat-1",
    "name": "Cricket",
    "slug": "cricket",
    "itemCount": 420,
    "icon": "fa-baseball-bat-ball",
    "image": "assets/images/sg-sunny-legend-bat.svg",
    "description": "Professional Grade 1 English & Kashmir Willow bats, Test match pads, titanium helmets, leather balls & spikes."
  },
  {
    "id": "cat-2",
    "name": "Football",
    "slug": "football",
    "itemCount": 280,
    "icon": "fa-football-ball",
    "image": "assets/images/cat-football.svg",
    "description": "FIFA Quality Pro match footballs, AG/FG stud boots, goalkeeper gloves, shin guards & custom team kits."
  },
  {
    "id": "cat-3",
    "name": "Basketball",
    "slug": "basketball",
    "itemCount": 190,
    "icon": "fa-basketball-ball",
    "image": "assets/images/cat-basketball.svg",
    "description": "Official composite leather game basketballs, high-top sneakers, breakaway rims, nets & jerseys."
  },
  {
    "id": "cat-4",
    "name": "Tennis",
    "slug": "tennis",
    "itemCount": 155,
    "icon": "fa-table-tennis-paddle-ball",
    "image": "assets/images/cat-tennis.svg",
    "description": "Pro carbon graphite rackets, pressurized match balls, dampeners, strings & clay/hard court shoes."
  },
  {
    "id": "cat-5",
    "name": "Badminton",
    "slug": "badminton",
    "itemCount": 130,
    "icon": "fa-feather",
    "image": "assets/images/cat-badminton.svg",
    "description": "Goose feather shuttles, ultra-light carbon rackets, non-marking indoor court shoes & kit bags."
  },
  {
    "id": "cat-6",
    "name": "Volleyball",
    "slug": "volleyball",
    "itemCount": 85,
    "icon": "fa-volleyball-ball",
    "image": "assets/images/cat-volleyball.svg",
    "description": "18-panel soft leather match balls, protective knee pads, beach volleyball nets & referee equipment."
  },
  {
    "id": "cat-7",
    "name": "Fitness & Gym",
    "slug": "fitness",
    "itemCount": 310,
    "icon": "fa-dumbbell",
    "image": "assets/images/cat-fitness.svg",
    "description": "Adjustable dumbbells, rubber kettlebells, heavy duty benches, resistance bands & power racks."
  },
  {
    "id": "cat-8",
    "name": "Running & Athletics",
    "slug": "running",
    "itemCount": 245,
    "icon": "fa-person-running",
    "image": "assets/images/cat-running.svg",
    "description": "Carbon-plated marathons shoes, track sprint spikes, hydration vests, compression tights & GPS watches."
  },
  {
    "id": "cat-9",
    "name": "Protective Gear",
    "slug": "protective-gear",
    "itemCount": 175,
    "icon": "fa-shield-halved",
    "image": "assets/images/cricket-test-gear.svg",
    "description": "Test grade chest guards, thigh pads, arm guards, inner gloves, groin cups & helmet covers."
  },
  {
    "id": "cat-10",
    "name": "Sports Accessories",
    "slug": "accessories",
    "itemCount": 220,
    "icon": "fa-toolbox",
    "image": "assets/images/cat-accessories.svg",
    "description": "Bat grips, scuff sheets, linseed oil, ball mallets, sweatbands, water bottles & duffle kit bags."
  }
];

window.BLOG_DATA = [
  {
    "id": "blog-1",
    "title": "How to Select the Perfect English Willow Bat for Your Playing Style",
    "slug": "select-english-willow-bat",
    "category": "Cricket Tips",
    "author": "Coach Mark Davies",
    "date": "August 12, 2026",
    "readTime": "6 min read",
    "image": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    "summary": "Discover how grain count, handle flexibility, weight distribution, and sweet spot location impact your boundary hitting power.",
    "content": "When selecting a Grade 1 English Willow bat, player stance and swing velocity dictate the ideal balance profile. Low sweet spots favor subcontinent front-foot drives, while mid-to-high balance profiles maximize back-foot pull shots.",
    "featured": true
  },
  {
    "id": "blog-2",
    "title": "Essential Pre-Season Fitness & Mobility Training for Pace Bowlers",
    "slug": "fitness-training-pace-bowlers",
    "category": "Training & Fitness",
    "author": "Dr. Aris Thorne",
    "date": "August 08, 2026",
    "readTime": "8 min read",
    "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    "summary": "Build shoulder stability, core anti-rotation power, and explosive run-up speed to prevent lumbar stress fractures.",
    "content": "Fast bowling puts up to 9x bodyweight strain on the lower spine during foot strike. Strengthening glute medius and thoracic spine rotational mobility drastically reduces stress injury risk.",
    "featured": false
  },
  {
    "id": "blog-3",
    "title": "Designing Custom Team Kits: Fabric Selection & Sublimation Printing",
    "slug": "custom-team-kit-fabric-guide",
    "category": "Team Management",
    "author": "Elena Rostova",
    "date": "July 29, 2026",
    "readTime": "5 min read",
    "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    "summary": "A deep dive into moisture-wicking micro-mesh polyester, 4-way stretch fabrics, and eco-friendly dye sublimation.",
    "content": "Dye sublimation infuses pigments directly into synthetic fibers under extreme heat, guaranteeing zero color fading or peeling after 100+ match wash cycles.",
    "featured": false
  },
  {
    "id": "blog-4",
    "title": "Maintenance 101: Oiling and Linseed Protection for New Bats",
    "slug": "cricket-bat-maintenance-oiling-guide",
    "category": "Buying Guides",
    "author": "James Watson",
    "date": "July 18, 2026",
    "readTime": "7 min read",
    "image": "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80",
    "summary": "Step-by-step instructions for applying raw linseed oil and bone rollers without over-saturating the toe.",
    "content": "Apply 2 to 3 light coats of raw linseed oil, allowing 24 hours drying time between applications. Avoid oiling the handle rubber or spline splice.",
    "featured": false
  },
  {
    "id": "blog-5",
    "title": "Choosing Between Metal Spikes and Rubber Studs for Grass Pitches",
    "slug": "cricket-spikes-vs-rubber-studs",
    "category": "Equipment Guides",
    "author": "Coach Mark Davies",
    "date": "July 05, 2026",
    "readTime": "4 min read",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "summary": "Evaluate pitch moisture, turf hardness, and bowling ankle support when selecting spike outsole configurations.",
    "content": "Metal spikes offer superior traction on soft damp turf, whereas hybrid rubber studs protect joints on hard synthetic artificial wickets.",
    "featured": false
  },
  {
    "id": "blog-6",
    "title": "Top 5 FIFA Quality Match Balls Tested for Flight Stability",
    "slug": "top-fifa-match-footballs-tested",
    "category": "Sports News",
    "author": "Carlos Silva",
    "date": "June 22, 2026",
    "readTime": "6 min read",
    "image": "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=800&q=80",
    "summary": "Analyzing panel geometry, thermal bonding, and aerodynamic surface grooves for match accuracy.",
    "content": "Thermally bonded 12-panel configurations eliminate moisture absorption during rain games, preserving ball weight and spin trajectory.",
    "featured": false
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Global Toast Notification Trigger
  window.showToast = function (message, type = 'info') {
    let container = document.querySelector('.sh-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'sh-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'sh-toast';
    const icon = type === 'success' ? 'fa-circle-check text-green-500' : 'fa-circle-info text-blue-500';
    toast.innerHTML = `<i class="fa-solid ${icon} text-xl"></i><span class="font-medium text-sm">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // Header Search Input
  const searchInputs = document.querySelectorAll('.sh-search-input');
  searchInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        window.location.href = `shop.html?search=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });

  // Newsletter Submit Listener
  const newsletterForms = document.querySelectorAll('.sh-newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        window.showToast('Thank you for subscribing to SportsHub newsletter!', 'success');
        input.value = '';
      }
    });
  });
});
