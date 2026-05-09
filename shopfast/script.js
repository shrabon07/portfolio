const products = [
  {
    id: 1, name: 'Wireless Headphones', category: 'Audio',
    price: 79.99, rating: 4.8, reviews: 2456,
    gradient: ['#A855F7', '#4ECDC4'], icon: 'headphones',
    slug: 'wireless-headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life, ultra-comfortable ear cushions, and crystal-clear audio delivery.'
  },
  {
    id: 2, name: 'Smart Watch Pro', category: 'Wearables',
    price: 199.99, rating: 4.7, reviews: 1823,
    gradient: ['#FF6B6B', '#FF8E53'], icon: 'watch',
    slug: 'smart-watch-pro',
    description: 'Advanced fitness tracking smartwatch with heart rate monitor, GPS, sleep tracking, and a vibrant AMOLED always-on display.'
  },
  {
    id: 3, name: 'Premium Backpack', category: 'Accessories',
    price: 59.99, rating: 4.6, reviews: 3201,
    gradient: ['#4ECDC4', '#44B09E'], icon: 'backpack',
    slug: 'premium-backpack',
    description: 'Durable water-resistant backpack with padded laptop compartment, multiple organizers, and ergonomic shoulder straps.'
  },
  {
    id: 4, name: 'Bluetooth Speaker', category: 'Audio',
    price: 49.99, rating: 4.5, reviews: 1567,
    gradient: ['#EC4899', '#A855F7'], icon: 'speaker',
    slug: 'bluetooth-speaker',
    description: 'Portable waterproof Bluetooth speaker with 360-degree sound, deep bass, and 12-hour playtime for any adventure.'
  },
  {
    id: 5, name: 'Leather Wallet', category: 'Accessories',
    price: 34.99, rating: 4.9, reviews: 4120,
    gradient: ['#FFE66D', '#FF6B6B'], icon: 'wallet',
    slug: 'leather-wallet',
    description: 'Handcrafted genuine leather wallet with RFID blocking, 8 card slots, and a sleek slim profile that fits any pocket.'
  },
  {
    id: 6, name: 'Aviator Sunglasses', category: 'Fashion',
    price: 29.99, rating: 4.4, reviews: 2876,
    gradient: ['#FF8E53', '#EC4899'], icon: 'glasses',
    slug: 'aviator-sunglasses',
    description: 'Classic aviator sunglasses with polarized UV400 lenses, lightweight titanium frame, and scratch-resistant coating.'
  },
  {
    id: 7, name: 'Running Shoes Air', category: 'Sports',
    price: 89.99, rating: 4.7, reviews: 5632,
    gradient: ['#44B09E', '#4ECDC4'], icon: 'shoes',
    slug: 'running-shoes-air',
    description: 'Lightweight responsive running shoes with air-cushion sole, breathable mesh upper, and adaptive traction outsole.'
  },
  {
    id: 8, name: 'Digital Camera X2', category: 'Electronics',
    price: 299.99, rating: 4.6, reviews: 982,
    gradient: ['#A855F7', '#EC4899'], icon: 'camera',
    slug: 'digital-camera-x2',
    description: 'Professional-grade mirrorless camera with 24.2MP sensor, 4K video, fast autofocus, and in-body stabilization.'
  }
];

const productIcons = {
  headphones: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <path d="M80 140v-20a40 40 0 0 1 80 0v20" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.5"/>
    <rect x="56" y="128" width="36" height="48" rx="18" fill="url(#iconGrad)" opacity="0.9"/>
    <rect x="148" y="128" width="36" height="48" rx="18" fill="url(#iconGrad)" opacity="0.9"/>
    <ellipse cx="74" cy="138" rx="10" ry="14" fill="#1a1a2e" opacity="0.3"/>
    <ellipse cx="166" cy="138" rx="10" ry="14" fill="#1a1a2e" opacity="0.3"/>
    <path d="M100 120c0-11 9-20 20-20s20 9 20 20" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.3"/>
    <rect x="68" y="155" width="12" height="20" rx="6" fill="url(#iconGrad)" opacity="0.6"/>
    <rect x="160" y="155" width="12" height="20" rx="6" fill="url(#iconGrad)" opacity="0.6"/>
    <path d="M120 108v12l-6 4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>
    <circle cx="120" cy="60" r="8" fill="url(#iconGrad)" opacity="0.15"/>
  </svg>`,
  watch: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <rect x="72" y="44" width="96" height="152" rx="32" fill="url(#iconGrad)" opacity="0.15" stroke="url(#iconGrad)" stroke-width="3"/>
    <rect x="80" y="60" width="80" height="100" rx="24" fill="url(#iconGrad)" opacity="0.9"/>
    <circle cx="120" cy="110" r="30" fill="url(#iconGrad)" opacity="0.15"/>
    <circle cx="120" cy="110" r="22" fill="url(#iconGrad)" opacity="0.25"/>
    <circle cx="120" cy="110" r="14" fill="none" stroke="url(#iconGrad)" stroke-width="2" opacity="0.5"/>
    <line x1="120" y1="110" x2="120" y2="96" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <line x1="120" y1="110" x2="128" y2="118" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="120" cy="110" r="3" fill="#fff"/>
    <rect x="96" y="178" width="48" height="8" rx="4" fill="url(#iconGrad)" opacity="0.6"/>
    <rect x="100" y="50" width="40" height="6" rx="3" fill="url(#iconGrad)" opacity="0.6"/>
    <line x1="60" y1="110" x2="72" y2="110" stroke="url(#iconGrad)" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
    <line x1="168" y1="110" x2="180" y2="110" stroke="url(#iconGrad)" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
  </svg>`,
  backpack: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <path d="M60 100h120v56c0 13-10 24-24 24H84c-13 0-24-11-24-24v-56z" fill="url(#iconGrad)" opacity="0.9"/>
    <path d="M84 100V80c0-13 10-24 36-24s36 11 36 24v20" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.7"/>
    <rect x="96" y="100" width="48" height="10" rx="5" fill="url(#iconGrad)" opacity="0.3"/>
    <rect x="80" y="124" width="32" height="20" rx="8" fill="url(#iconGrad)" opacity="0.15"/>
    <rect x="128" y="124" width="32" height="20" rx="8" fill="url(#iconGrad)" opacity="0.15"/>
    <path d="M100 160h40l8 16H92l8-16z" fill="url(#iconGrad)" opacity="0.2"/>
    <rect x="114" y="74" width="12" height="14" rx="2" fill="url(#iconGrad)" opacity="0.5"/>
    <line x1="120" y1="56" x2="120" y2="72" stroke="url(#iconGrad)" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <circle cx="120" cy="78" r="20" fill="none" stroke="url(#iconGrad)" stroke-width="2" opacity="0.15"/>
  </svg>`,
  speaker: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <rect x="72" y="30" width="96" height="180" rx="24" fill="url(#iconGrad)" opacity="0.9"/>
    <ellipse cx="120" cy="140" rx="36" ry="36" fill="url(#iconGrad)" opacity="0.2"/>
    <ellipse cx="120" cy="140" rx="24" ry="24" fill="url(#iconGrad)" opacity="0.35"/>
    <ellipse cx="120" cy="140" rx="12" ry="12" fill="url(#iconGrad)"/>
    <circle cx="120" cy="140" r="4" fill="#fff" opacity="0.6"/>
    <circle cx="120" cy="84" r="8" fill="url(#iconGrad)" opacity="0.5"/>
    <circle cx="120" cy="84" r="3" fill="#fff" opacity="0.4"/>
    <rect x="146" y="94" width="20" height="64" rx="10" fill="url(#iconGrad)" opacity="0.2"/>
    <rect x="74" y="94" width="20" height="64" rx="10" fill="url(#iconGrad)" opacity="0.2"/>
    <circle cx="120" cy="216" r="6" fill="url(#iconGrad)" opacity="0.2"/>
    <circle cx="120" cy="24" r="6" fill="url(#iconGrad)" opacity="0.2"/>
    <line x1="162" y1="100" x2="180" y2="90" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.3"/>
    <line x1="162" y1="140" x2="184" y2="140" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.3"/>
    <line x1="162" y1="180" x2="180" y2="190" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.3"/>
  </svg>`,
  wallet: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <rect x="36" y="96" width="168" height="90" rx="16" fill="url(#iconGrad)" opacity="0.9"/>
    <path d="M36 130h180" stroke="url(#iconGrad)" stroke-width="2" opacity="0.3"/>
    <rect x="140" y="116" width="56" height="32" rx="12" fill="url(#iconGrad)" opacity="0.15"/>
    <rect x="140" y="116" width="20" height="32" rx="10" fill="url(#iconGrad)" opacity="0.3"/>
    <circle cx="168" cy="132" r="4" fill="url(#iconGrad)" opacity="0.3"/>
    <rect x="56" y="140" width="32" height="6" rx="3" fill="#1a1a2e" opacity="0.15"/>
    <rect x="56" y="152" width="24" height="6" rx="3" fill="#1a1a2e" opacity="0.1"/>
    <rect x="56" y="128" width="40" height="6" rx="3" fill="#1a1a2e" opacity="0.1"/>
    <path d="M36 110l20-12h148l-20 12H36z" fill="url(#iconGrad)" opacity="0.1"/>
    <path d="M168 116v14" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
  </svg>`,
  glasses: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <ellipse cx="86" cy="124" rx="38" ry="20" fill="url(#iconGrad)" opacity="0.12"/>
    <ellipse cx="86" cy="124" rx="34" ry="16" fill="none" stroke="url(#iconGrad)" stroke-width="5"/>
    <ellipse cx="154" cy="124" rx="38" ry="20" fill="url(#iconGrad)" opacity="0.12"/>
    <ellipse cx="154" cy="124" rx="34" ry="16" fill="none" stroke="url(#iconGrad)" stroke-width="5"/>
    <ellipse cx="86" cy="124" rx="30" ry="12" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="154" cy="124" rx="30" ry="12" fill="url(#iconGrad)" opacity="0.08"/>
    <path d="M120 124l-8-4" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
    <path d="M120 124l8-4" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
    <line x1="52" y1="108" x2="40" y2="88" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <line x1="188" y1="108" x2="200" y2="88" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <circle cx="86" cy="124" r="6" fill="url(#iconGrad)" opacity="0.15"/>
    <circle cx="154" cy="124" r="6" fill="url(#iconGrad)" opacity="0.15"/>
    <line x1="86" y1="116" x2="86" y2="108" stroke="url(#iconGrad)" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
    <line x1="154" y1="116" x2="154" y2="108" stroke="url(#iconGrad)" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
    <path d="M120 124q0-4 4-4" stroke="url(#iconGrad)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.4"/>
  </svg>`,
  shoes: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <path d="M36 160h178l-20-52H76c-18 0-30 12-40 28v24z" fill="url(#iconGrad)" opacity="0.92"/>
    <path d="M56 120l-8 16" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    <path d="M76 112l-8 24" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    <path d="M96 108l-8 28" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    <path d="M116 106l-8 30" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    <circle cx="60" cy="148" r="6" fill="#1a1a2e" opacity="0.15"/>
    <circle cx="80" cy="140" r="6" fill="#1a1a2e" opacity="0.15"/>
    <circle cx="100" cy="136" r="6" fill="#1a1a2e" opacity="0.15"/>
    <path d="M160 110l6 20" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <path d="M180 114l6 20" stroke="url(#iconGrad)" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
    <path d="M140 108l6 20" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 120l-12 18" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
    <path d="M138 156l20-30" stroke="url(#iconGrad)" stroke-width="6" stroke-linecap="round" opacity="0.2"/>
    <line x1="190" y1="130" x2="196" y2="150" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
    <path d="M152 104l36 2" stroke="url(#iconGrad)" stroke-width="4" stroke-linecap="round" opacity="0.3"/>
  </svg>`,
  camera: `<svg viewBox="0 0 240 240" fill="none">
    <rect width="240" height="240" rx="24" fill="url(#iconGrad)" opacity="0.08"/>
    <ellipse cx="120" cy="120" rx="100" ry="100" fill="url(#iconGrad)" opacity="0.04"/>
    <rect x="30" y="86" width="180" height="100" rx="24" fill="url(#iconGrad)" opacity="0.92"/>
    <rect x="96" y="72" width="48" height="20" rx="10" fill="url(#iconGrad)" opacity="0.8"/>
    <rect x="96" y="76" width="48" height="12" rx="4" fill="#1a1a2e" opacity="0.15"/>
    <circle cx="120" cy="136" r="36" fill="url(#iconGrad)" opacity="0.15"/>
    <circle cx="120" cy="136" r="28" fill="url(#iconGrad)" opacity="0.3"/>
    <circle cx="120" cy="136" r="18" fill="url(#iconGrad)"/>
    <circle cx="120" cy="136" r="8" fill="#fff" opacity="0.5"/>
    <circle cx="120" cy="136" r="3" fill="#1a1a2e" opacity="0.3"/>
    <circle cx="120" cy="136" r="36" fill="none" stroke="url(#iconGrad)" stroke-width="2" opacity="0.3"/>
    <rect x="168" y="108" width="12" height="16" rx="6" fill="url(#iconGrad)" opacity="0.3"/>
    <circle cx="174" cy="116" r="3" fill="#fff" opacity="0.5"/>
    <rect x="42" y="100" width="10" height="8" rx="2" fill="url(#iconGrad)" opacity="0.2"/>
    <path d="M180 130l16-4v20l-16-4" fill="url(#iconGrad)" opacity="0.2"/>
    <circle cx="40" cy="30" r="10" fill="url(#iconGrad)" opacity="0.05"/>
  </svg>`
};

// ===== STATE =====
let cart = [];
let isCartOpen = false;

// ===== DOM REFS =====
const productGrid = document.getElementById('productGrid');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const toast = document.getElementById('toast');
const newsletterForm = document.getElementById('newsletterForm');
const header = document.querySelector('.header');
const headerProduct = document.querySelector('.product-header');

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#FF6B6B', '#A855F7', '#4ECDC4', '#FFE66D', '#EC4899'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(p);
  }
}
createParticles();

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const update = () => {
      const current = parseInt(counter.innerText);
      const step = Math.ceil(target / 60);
      if (current < target) {
        counter.innerText = Math.min(current + step, target);
        requestAnimationFrame(update);
      } else {
        if (target === 99) counter.innerText = target + '%';
      }
    };
    update();
  });
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach((p, i) => {
    const gradientId = `grad${p.id}`;
    const defsBlock = `<defs><linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${p.gradient[0]}"/><stop offset="100%" style="stop-color:${p.gradient[1]}"/></linearGradient></defs>`;
    const iconSvg = productIcons[p.icon].replace(/url\(#iconGrad\)/g, `url(#${gradientId})`).replace('>', `>${defsBlock}`);
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '★' : '');
    const card = document.createElement('div');
    card.className = `product-card reveal reveal-delay-${(i % 4) + 1}`;
    card.innerHTML = `
      <a href="product.html?id=${p.id}" class="product-link">
      <div class="product-image">
        ${iconSvg}
        <div class="overlay">
          <button class="overlay-btn" data-id="${p.id}">Quick Add +</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          ${'<span>' + stars + '</span>'}
          <span>${p.rating} (${(p.reviews / 1000).toFixed(1)}k)</span>
        </div>
        <div class="product-bottom">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Add to cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
      </a>
    `;
    productGrid.appendChild(card);
  });
  attachProductListeners();
  observeReveal();
}
if (productGrid) renderProducts();

// ===== PRODUCT EVENT LISTENERS =====
function attachProductListeners() {
  document.querySelectorAll('.add-btn, .overlay-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
  if (productGrid) document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-btn') || e.target.closest('.overlay-btn')) e.preventDefault();
    });
  });
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  showToast(`${product.name} added to cart!`);
  cartCount.classList.remove('bounce');
  void cartCount.offsetWidth;
  cartCount.classList.add('bounce');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCart();
  }
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = count;
  renderCartItems();
  renderCartFooter();
}

function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Your cart is empty</p>
        <span>Add some products to get started!</span>
      </div>
    `;
    return;
  }
  cartItems.innerHTML = cart.map(item => {
    const gradientId = `cartGrad${item.id}`;
    const defsBlock = `<defs><linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${item.gradient[0]}"/><stop offset="100%" style="stop-color:${item.gradient[1]}"/></linearGradient></defs>`;
    const iconSvg = productIcons[item.icon].replace(/url\(#iconGrad\)/g, `url(#${gradientId})`).replace('>', `>${defsBlock}`);
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${iconSvg}
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function renderCartFooter() {
  if (cart.length === 0) {
    cartFooter.style.display = 'none';
    return;
  }
  cartFooter.style.display = 'block';
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// ===== CART TOGGLE =====
function openCart() {
  isCartOpen = true;
  cartPanel.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  isCartOpen = false;
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// ===== TOAST =====
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== SCROLL REVEAL =====
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat-num')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  if (headerProduct) headerProduct.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== NEWSLETTER =====
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input.value.trim()) {
      showToast('Subscribed! Check your inbox for 10% off.');
      input.value = '';
    }
  });
}

// ===== SMOOTH PRODUCT CARD TILT =====
if (productGrid) document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isCartOpen) closeCart();
});

console.log('%c ShopFast 🚀', 'font-size:24px; font-weight:bold; background:linear-gradient(135deg,#FF6B6B,#A855F7,#4ECDC4); -webkit-background-clip:text; -webkit-text-fill-color:transparent;');
