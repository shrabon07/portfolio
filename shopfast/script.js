const products = [
  {
    id: 1, name: 'Wireless Headphones', category: 'Audio',
    price: 79.99, rating: 4.8, reviews: 2456,
    gradient: ['#A855F7', '#4ECDC4'], icon: 'headphones'
  },
  {
    id: 2, name: 'Smart Watch Pro', category: 'Wearables',
    price: 199.99, rating: 4.7, reviews: 1823,
    gradient: ['#FF6B6B', '#FF8E53'], icon: 'watch'
  },
  {
    id: 3, name: 'Premium Backpack', category: 'Accessories',
    price: 59.99, rating: 4.6, reviews: 3201,
    gradient: ['#4ECDC4', '#44B09E'], icon: 'backpack'
  },
  {
    id: 4, name: 'Bluetooth Speaker', category: 'Audio',
    price: 49.99, rating: 4.5, reviews: 1567,
    gradient: ['#EC4899', '#A855F7'], icon: 'speaker'
  },
  {
    id: 5, name: 'Leather Wallet', category: 'Accessories',
    price: 34.99, rating: 4.9, reviews: 4120,
    gradient: ['#FFE66D', '#FF6B6B'], icon: 'wallet'
  },
  {
    id: 6, name: 'Aviator Sunglasses', category: 'Fashion',
    price: 29.99, rating: 4.4, reviews: 2876,
    gradient: ['#FF8E53', '#EC4899'], icon: 'glasses'
  },
  {
    id: 7, name: 'Running Shoes Air', category: 'Sports',
    price: 89.99, rating: 4.7, reviews: 5632,
    gradient: ['#44B09E', '#4ECDC4'], icon: 'shoes'
  },
  {
    id: 8, name: 'Digital Camera X2', category: 'Electronics',
    price: 299.99, rating: 4.6, reviews: 982,
    gradient: ['#A855F7', '#EC4899'], icon: 'camera'
  }
];

const productIcons = {
  headphones: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <path d="M28 44V38a12 12 0 0 1 24 0v6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="24" y="42" width="10" height="14" rx="3" fill="#fff" opacity="0.9"/>
    <rect x="46" y="42" width="10" height="14" rx="3" fill="#fff" opacity="0.9"/>
    <line x1="34" y1="48" x2="34" y2="52" stroke="#000" stroke-width="1.5" opacity="0.3"/>
    <line x1="46" y1="48" x2="46" y2="52" stroke="#000" stroke-width="1.5" opacity="0.3"/>
  </svg>`,
  watch: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <rect x="20" y="16" width="40" height="48" rx="10" fill="#fff" opacity="0.9"/>
    <rect x="28" y="28" width="24" height="24" rx="6" fill="url(#iconGrad)"/>
    <circle cx="40" cy="40" r="4" fill="#fff"/>
    <path d="M40 34v6l4 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="20" y1="40" x2="16" y2="40" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <line x1="64" y1="40" x2="60" y2="40" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  backpack: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <path d="M24 38h32v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V38z" fill="#fff" opacity="0.9"/>
    <path d="M32 38V28a8 8 0 0 1 16 0v10" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="28" y="44" width="8" height="6" rx="2" fill="url(#iconGrad)"/>
    <rect x="44" y="44" width="8" height="6" rx="2" fill="url(#iconGrad)"/>
    <line x1="40" y1="28" x2="40" y2="34" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  speaker: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <rect x="26" y="14" width="28" height="52" rx="6" fill="#fff" opacity="0.9"/>
    <circle cx="40" cy="46" r="10" fill="url(#iconGrad)" opacity="0.5"/>
    <circle cx="40" cy="46" r="5" fill="url(#iconGrad)"/>
    <circle cx="40" cy="30" r="3" fill="url(#iconGrad)"/>
    <line x1="54" y1="34" x2="60" y2="30" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <line x1="54" y1="46" x2="62" y2="46" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <line x1="54" y1="58" x2="60" y2="62" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  wallet: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <path d="M16 28h48a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V28z" fill="#fff" opacity="0.9"/>
    <rect x="52" y="38" width="14" height="14" rx="4" fill="url(#iconGrad)"/>
    <line x1="16" y1="36" x2="52" y2="36" stroke="url(#iconGrad)" stroke-width="2"/>
    <rect x="20" y="44" width="8" height="4" rx="2" fill="#ccc" opacity="0.5"/>
  </svg>`,
  glasses: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <circle cx="26" cy="40" r="12" fill="url(#iconGrad)" opacity="0.3"/>
    <circle cx="26" cy="40" r="10" fill="none" stroke="url(#iconGrad)" stroke-width="3"/>
    <circle cx="54" cy="40" r="12" fill="url(#iconGrad)" opacity="0.3"/>
    <circle cx="54" cy="40" r="10" fill="none" stroke="url(#iconGrad)" stroke-width="3"/>
    <line x1="14" y1="36" x2="8" y2="28" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <line x1="66" y1="36" x2="72" y2="28" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <line x1="38" y1="40" x2="42" y2="40" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  shoes: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <path d="M16 52h52l-6-16H28c-6 0-10 4-12 10v6z" fill="#fff" opacity="0.9"/>
    <path d="M28 36l-4 8" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 36l-3 8" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M44 36l-3 8" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="36" x2="58" y2="44" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="62" y1="36" x2="64" y2="44" stroke="url(#iconGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 38h16" stroke="url(#iconGrad)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  camera: `<svg viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="url(#iconGrad)" opacity="0.15"/>
    <rect x="12" y="26" width="56" height="34" rx="8" fill="#fff" opacity="0.9"/>
    <circle cx="40" cy="44" r="12" fill="url(#iconGrad)" opacity="0.4"/>
    <circle cx="40" cy="44" r="8" fill="url(#iconGrad)"/>
    <circle cx="40" cy="44" r="3" fill="#fff" opacity="0.8"/>
    <rect x="32" y="22" width="16" height="8" rx="3" fill="#fff" opacity="0.7"/>
    <circle cx="56" cy="34" r="3" fill="url(#iconGrad)"/>
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
    const iconSvg = productIcons[p.icon].replace('url(#iconGrad)', `url(#${gradientId})`);
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '★' : '');
    const card = document.createElement('div');
    card.className = `product-card reveal reveal-delay-${(i % 4) + 1}`;
    card.innerHTML = `
      <div class="product-image">
        <svg width="0" height="0" style="position:absolute">
          <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${p.gradient[0]}"/>
              <stop offset="100%" style="stop-color:${p.gradient[1]}"/>
            </linearGradient>
          </defs>
        </svg>
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
    `;
    productGrid.appendChild(card);
  });
  attachProductListeners();
  observeReveal();
}
renderProducts();

// ===== PRODUCT EVENT LISTENERS =====
function attachProductListeners() {
  document.querySelectorAll('.add-btn, .overlay-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-btn') || e.target.closest('.overlay-btn')) return;
      const id = parseInt(card.querySelector('[data-id]').dataset.id);
      addToCart(id);
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
    const iconSvg = productIcons[item.icon].replace('url(#iconGrad)', `url(#${gradientId})`);
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <svg width="0" height="0" style="position:absolute">
            <defs>
              <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${item.gradient[0]}"/>
                <stop offset="100%" style="stop-color:${item.gradient[1]}"/>
              </linearGradient>
            </defs>
          </svg>
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
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

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
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== NEWSLETTER =====
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  if (input.value.trim()) {
    showToast('Subscribed! Check your inbox for 10% off.');
    input.value = '';
  }
});

// ===== SMOOTH PRODUCT CARD TILT =====
document.querySelectorAll('.product-card').forEach(card => {
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
