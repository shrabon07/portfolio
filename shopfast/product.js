// ===== PRODUCT DETAIL PAGE =====
(function() {
  const loading = document.getElementById('productLoading');
  const detail = document.getElementById('productDetail');
  const relatedSection = document.getElementById('relatedSection');
  const relatedGrid = document.getElementById('relatedGrid');
  const imgContainer = document.getElementById('productImage');
  const nameEl = document.getElementById('productName');
  const categoryEl = document.getElementById('productCategory');
  const ratingEl = document.getElementById('productRating');
  const priceEl = document.getElementById('productPrice');
  const descEl = document.getElementById('productDesc');
  const specsEl = document.getElementById('productSpecs');
  const addBtn = document.getElementById('addToCartBtn');
  const toast = document.getElementById('toast');

  // Get product ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  function getProduct(id) {
    return products.find(p => p.id === id);
  }

  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return '★'.repeat(full) + (half ? '★' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
  }

  if (!productId || !getProduct(productId)) {
    loading.innerHTML = `
      <div class="loader"></div>
      <p>Product not found.</p>
      <a href="index.html" style="display:inline-block;margin-top:16px;padding:12px 24px;background:linear-gradient(135deg,#FF6B6B,#A855F7);color:#fff;border-radius:50px;font-weight:600;text-decoration:none">Back to Shop</a>
    `;
    return;
  }

  const product = getProduct(productId);
  const gradientId = `detailGrad${product.id}`;

  // Build icon SVG
  const iconSvg = productIcons[product.icon].replace('url(#iconGrad)', `url(#${gradientId})`);

  // Image
  imgContainer.innerHTML = `
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${product.gradient[0]}"/>
          <stop offset="100%" style="stop-color:${product.gradient[1]}"/>
        </linearGradient>
      </defs>
    </svg>
    ${iconSvg}
  `;

  // Info
  categoryEl.textContent = product.category;
  nameEl.textContent = product.name;
  ratingEl.innerHTML = `${renderStars(product.rating)} <span>${product.rating} (${(product.reviews / 1000).toFixed(1)}k reviews)</span>`;
  priceEl.textContent = `$${product.price.toFixed(2)}`;
  descEl.textContent = product.description;

  // Specs
  specsEl.innerHTML = `
    <div class="spec-item"><span class="spec-label">Category</span><span class="spec-value">${product.category}</span></div>
    <div class="spec-item"><span class="spec-label">Rating</span><span class="spec-value">${product.rating} / 5.0</span></div>
    <div class="spec-item"><span class="spec-label">Reviews</span><span class="spec-value">${product.reviews.toLocaleString()}</span></div>
    <div class="spec-item"><span class="spec-label">Stock</span><span class="spec-value" style="color:#4ECDC4">In Stock</span></div>
  `;

  // Show content
  loading.style.display = 'none';
  detail.style.display = 'grid';
  relatedSection.style.display = 'block';

  // Add to cart
  addBtn.addEventListener('click', () => {
    addToCart(product.id);
    showToastDetail(`${product.name} added to cart!`);
  });

  // Related products
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length > 0) {
    relatedGrid.innerHTML = related.map(r => {
      const gId = `relatedGrad${r.id}`;
      const rIcon = productIcons[r.icon].replace('url(#iconGrad)', `url(#${gId})`);
      return `
        <a href="product.html?id=${r.id}" class="related-card">
          <div class="related-img">
            <svg width="0" height="0" style="position:absolute">
              <defs>
                <linearGradient id="${gId}" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:${r.gradient[0]}"/>
                  <stop offset="100%" style="stop-color:${r.gradient[1]}"/>
                </linearGradient>
              </defs>
            </svg>
            ${rIcon}
          </div>
          <div class="related-info">
            <p class="related-name">${r.name}</p>
            <p class="related-price">$${r.price.toFixed(2)}</p>
          </div>
        </a>
      `;
    }).join('');
  } else {
    relatedSection.style.display = 'none';
  }

  function showToastDetail(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  // Update page title
  document.title = `${product.name} - ShopFast`;

  console.log(`%c ${product.name} `, `font-size:18px;font-weight:bold;background:linear-gradient(135deg,${product.gradient[0]},${product.gradient[1]});padding:4px 12px;border-radius:4px;color:#fff`);
})();
