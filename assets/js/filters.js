// Shop Catalog Filter & Sort System with Ultra-Precise Keyword & Brand Search
(function () {
  let allProducts = [];

  window.initShopFilters = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const paramCat = urlParams.get('category');
    const paramBrand = urlParams.get('brand');
    const paramSearch = urlParams.get('search');

    const categoryFilter = document.getElementById('filterCategory');
    const brandFilter = document.getElementById('filterBrand');
    const sortSelect = document.getElementById('sortProducts');
    const searchInput = document.getElementById('shopSearch');

    if (paramCat && categoryFilter) {
      const matchOpt = Array.from(categoryFilter.options).find(o => o.value.toLowerCase() === paramCat.toLowerCase());
      if (matchOpt) categoryFilter.value = matchOpt.value;
    }

    if (paramBrand && brandFilter) {
      const matchOpt = Array.from(brandFilter.options).find(o => o.value.toLowerCase() === paramBrand.toLowerCase());
      if (matchOpt) brandFilter.value = matchOpt.value;
    }

    if (paramSearch && searchInput) {
      searchInput.value = paramSearch;
    }

    // Fetch products
    fetch('data/products.json')
      .then(res => res.json())
      .then(data => {
        allProducts = data && data.length ? data : (window.PRODUCTS_DATA || []);
        applyFilters();
      })
      .catch(err => {
        console.warn('Network/CORS fetch failed, using PRODUCTS_DATA fallback:', err);
        allProducts = window.PRODUCTS_DATA || [];
        applyFilters();
      });

    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (brandFilter) brandFilter.addEventListener('change', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (searchInput) searchInput.addEventListener('input', applyFilters);
  };

  function applyFilters() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    if (!allProducts || allProducts.length === 0) {
      allProducts = window.PRODUCTS_DATA || [];
    }

    const catEl = document.getElementById('filterCategory');
    const brandEl = document.getElementById('filterBrand');
    const sortEl = document.getElementById('sortProducts');
    const searchEl = document.getElementById('shopSearch');

    const cat = catEl ? catEl.value : 'all';
    const brand = brandEl ? brandEl.value : 'all';
    const sort = sortEl ? sortEl.value : 'default';
    const rawQuery = searchEl ? searchEl.value.trim().toLowerCase() : '';

    // Normalize user search query
    let query = rawQuery.replace(/s{2,}$/i, 's');

    // Handle common phonetic spelling / typos (e.g., 'batmiten' -> 'badminton', 'cricet' -> 'cricket', 'atheletics' -> 'athletics', 'productivegear' -> 'protective gear')
    if (query.includes('batmiten')) query = query.replace('batmiten', 'badminton');
    if (query.includes('cricet')) query = query.replace('cricet', 'cricket');
    if (query.includes('atheletics')) query = query.replace('atheletics', 'running');
    if (query.includes('productivegear')) query = query.replace('productivegear', 'protective gear');
    if (query.includes('fitnessgym')) query = query.replace('fitnessgym', 'fitness');

    let filtered = allProducts.filter(p => {
      // 1. Category Filter Check
      const matchCat = cat === 'all' || 
                       p.category.toLowerCase().includes(cat.toLowerCase()) || 
                       (p.subcategory && p.subcategory.toLowerCase().includes(cat.toLowerCase())) ||
                       cat.toLowerCase().includes(p.category.toLowerCase());
                       
      // 2. Brand Filter Check
      const matchBrand = brand === 'all' || 
                         p.brand.toLowerCase().includes(brand.toLowerCase()) || 
                         brand.toLowerCase().includes(p.brand.toLowerCase());

      // 3. Search Query Filter Check
      let matchQuery = true;
      if (query) {
        const name = p.name.toLowerCase();
        const category = p.category.toLowerCase();
        const subcategory = (p.subcategory || '').toLowerCase();
        const brandName = p.brand.toLowerCase();
        const desc = p.description.toLowerCase();
        const sku = (p.sku || '').toLowerCase();
        const specs = p.specifications ? JSON.stringify(p.specifications).toLowerCase() : '';

        // Strict Keyword Matching Rules:
        if (query === 'bat' || query === 'bats') {
          matchQuery = subcategory.includes('bat') || name.includes(' bat');
        } else if (query === 'shoe' || query === 'shoes' || query === 'boot' || query === 'boots' || query === 'spike' || query === 'spikes') {
          matchQuery = name.includes('shoe') || name.includes('boot') || name.includes('spike') || subcategory.includes('shoe') || subcategory.includes('boot');
        } else if (query === 'ball' || query === 'balls') {
          matchQuery = name.includes('ball') || subcategory.includes('ball') || category.includes('football') || category.includes('basketball') || category.includes('volleyball');
        } else if (query === 'glove' || query === 'gloves') {
          matchQuery = name.includes('glove') || subcategory.includes('glove');
        } else if (query === 'racket' || query === 'rackets') {
          matchQuery = name.includes('racket') || subcategory.includes('racket');
        } else {
          // Broad multi-attribute search for categories, brands, specs, names & descriptions
          matchQuery = name.includes(query) || 
                     category.includes(query) || 
                     subcategory.includes(query) || 
                     brandName.includes(query) || 
                     desc.includes(query) || 
                     sku.includes(query) || 
                     specs.includes(query);
        }
      }

      return matchCat && matchBrand && matchQuery;
    });

    // If active dropdown filters restricted results to 0 when user typed a direct search query,
    // fallback to searching across ALL products for that query so the user gets exact matching results
    if (filtered.length === 0 && query) {
      filtered = allProducts.filter(p => {
        const name = p.name.toLowerCase();
        const category = p.category.toLowerCase();
        const subcategory = (p.subcategory || '').toLowerCase();
        const brandName = p.brand.toLowerCase();

        if (query === 'bat' || query === 'bats') {
          return subcategory.includes('bat') || name.includes(' bat');
        } else if (query === 'shoe' || query === 'shoes' || query === 'boot' || query === 'boots' || query === 'spike' || query === 'spikes') {
          return name.includes('shoe') || name.includes('boot') || name.includes('spike') || subcategory.includes('shoe') || subcategory.includes('boot');
        } else if (query === 'ball' || query === 'balls') {
          return name.includes('ball') || subcategory.includes('ball');
        } else {
          return name.includes(query) || category.includes(query) || subcategory.includes(query) || brandName.includes(query);
        }
      });
    }

    // Sort Results
    if (sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update Counter Text
    const countEl = document.getElementById('productCount');
    if (countEl) countEl.textContent = `Showing ${filtered.length} products`;

    // Render Grid or Zero State
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
          <i class="fa-solid fa-box-open text-5xl text-slate-300 dark:text-slate-700 mb-3"></i>
          <h3 class="text-xl font-bold text-slate-700 dark:text-slate-200">No products match your active search</h3>
          <p class="text-xs text-slate-500 mt-1">Try clearing search terms or selecting 'All Categories'.</p>
          <button onclick="document.getElementById('filterCategory').value='all'; document.getElementById('filterBrand').value='all'; document.getElementById('shopSearch').value=''; window.initShopFilters();" class="btn-sh-primary text-xs mt-4">
            <i class="fa-solid fa-rotate-left mr-1"></i> Reset All Filters
          </button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(p => window.renderProductCard(p)).join('');
    }
  }
})();
