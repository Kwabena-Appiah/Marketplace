const LISTINGS = [
  {id:1,type:'physical',emoji:'🎒',title:'Leather Backpack — Tan',seller:'Amara Studio',sellerInitials:'AS',rating:4.8,reviews:42,price:89,desc:'Handcrafted full-grain leather backpack. Water-resistant lining, 3 interior pockets, fits 15" laptop. Ships in 3–5 business days.',tags:['Bags','Leather','New'],bg:'#FFF8F0'},
  {id:2,type:'services',emoji:'🎨',title:'Brand Identity Design',seller:'Kojo Creative',sellerInitials:'KC',rating:5.0,reviews:18,price:350,desc:'Full brand identity package: logo (3 concepts), colour palette, typography guide, and brand guidelines PDF. Delivery in 7 days.',tags:['Design','Branding','Remote'],bg:'#F5F0FF'},
  {id:3,type:'digital',emoji:'📊',title:'Financial Model Template',seller:'FinanceKit',sellerInitials:'FK',rating:4.7,reviews:93,price:29,desc:'Excel + Google Sheets financial model for startups. Includes P&L, cash flow, cap table, and investor dashboard. Instant download.',tags:['Finance','Excel','Startup'],bg:'#F0FFF5'},
  {id:4,type:'secondhand',emoji:'📷',title:'Sony A7III Camera Body',seller:'PhotoGeek GH',sellerInitials:'PG',rating:4.9,reviews:7,price:1150,originalPrice:2300,condition:'Excellent',desc:'Bought 2 years ago, barely used. Full-frame mirrorless body only. Shutter count under 3,000. Comes with original box and straps.',tags:['Camera','Sony','Electronics'],bg:'#FFF5F0'},
  {id:5,type:'physical',emoji:'🕯️',title:'Handmade Soy Candle Set',seller:'Esi Botanics',sellerInitials:'EB',rating:4.6,reviews:205,price:34,desc:'Set of 3 hand-poured soy candles with essential oils. Scents: Cedarwood & Amber, Citrus Bloom, Lavender Fields. 40hr burn time each.',tags:['Home','Candles','Handmade'],bg:'#FFFAEE'},
  {id:6,type:'services',emoji:'💻',title:'React Developer — Per Hour',seller:'Kwame Dev',sellerInitials:'KD',rating:4.9,reviews:34,price:75,desc:'Senior React developer available for freelance projects. Specialises in dashboards, e-commerce, and API integrations. Book a 1hr slot.',tags:['Development','React','Remote'],bg:'#EEF6FF'},
  {id:7,type:'digital',emoji:'🎵',title:'Lo-Fi Music Pack (50 tracks)',seller:'BeatsByOsei',sellerInitials:'BO',rating:4.5,reviews:67,price:19,desc:'50 royalty-free lo-fi hip hop tracks for YouTube, podcasts, and content creation. WAV + MP3 included. Lifetime commercial licence.',tags:['Music','Lo-Fi','Royalty-free'],bg:'#FFF0F8'},
  {id:8,type:'secondhand',emoji:'📚',title:'Design Book Collection (12)',seller:'Abena Reads',sellerInitials:'AR',rating:4.7,reviews:15,price:85,originalPrice:180,condition:'Good',desc:'12 design books incl. Thinking with Type, Grid Systems, Dieter Rams, and more. Minor shelf wear, all readable. Collection only or ship.',tags:['Books','Design','Collection'],bg:'#F0F8FF'},
  {id:9,type:'physical',emoji:'🪴',title:'Monstera Deliciosa Plant',seller:'GreenThumb Gh',sellerInitials:'GT',rating:4.8,reviews:31,price:45,desc:'Healthy 60cm Monstera Deliciosa in a terracotta pot. Comes with care card. Local delivery or pickup from Accra.',tags:['Plants','Indoor','Home'],bg:'#F0FFF5'},
  {id:10,type:'digital',emoji:'🖼️',title:'Social Media Template Pack',seller:'Pixel & Type',sellerInitials:'PT',rating:4.6,reviews:118,price:24,desc:'100 Canva templates for Instagram, Twitter/X, and LinkedIn. Fully editable. 5 colour schemes. Commercial use included. Instant access.',tags:['Canva','Social Media','Templates'],bg:'#FFF8F0'},
  {id:11,type:'services',emoji:'📸',title:'Professional Headshots',seller:'Lens & Light Studio',sellerInitials:'LL',rating:5.0,reviews:56,price:120,desc:'60-minute studio headshot session. 5 edited photos delivered within 48hrs. Accra studio. Online booking available.',tags:['Photography','Headshots','In-person'],bg:'#F5F0FF'},
  {id:12,type:'secondhand',emoji:'🎮',title:'Nintendo Switch + 4 Games',seller:'GamerDad',sellerInitials:'GD',rating:4.8,reviews:3,price:280,originalPrice:450,condition:'Good',desc:'Nintendo Switch V2 with 4 games: Mario Kart 8, Zelda BOTW, Stardew Valley, Hollow Knight. Original box, minor scratch on dock.',tags:['Gaming','Nintendo','Electronics'],bg:'#FFFAEE'},
  {id:13,type:'restaurant',emoji:'🍛',title:'Waakye Bowl — Auntie Muni',seller:"Muni's Kitchen",sellerInitials:'MK',rating:4.9,reviews:210,price:12,desc:'Classic Ghanaian waakye with shito, gari, boiled egg, and your choice of beef, fish, or chicken. Cooked fresh daily. Delivery within Accra, 25–35 min.',tags:['Ghanaian','Lunch','Delivery'],bg:'#FFF1EA',cuisine:'Ghanaian',prepTime:'25–35 min'},
  {id:14,type:'restaurant',emoji:'🍕',title:'Margherita Pizza (12")',seller:'Forno Rosso',sellerInitials:'FR',rating:4.7,reviews:88,price:15,desc:'Wood-fired 12" Margherita with San Marzano tomato, fresh mozzarella di bufala, basil, and extra virgin olive oil. Vegetarian.',tags:['Italian','Pizza','Vegetarian'],bg:'#FFF0E8',cuisine:'Italian',prepTime:'20–30 min'},
  {id:15,type:'restaurant',emoji:'🍣',title:'Salmon Sushi Platter (16pc)',seller:'Sakura Sushi Bar',sellerInitials:'SS',rating:4.8,reviews:142,price:32,desc:'16-piece salmon platter: 8 nigiri, 8 maki rolls. Served with wasabi, pickled ginger, and soy sauce. Pickup or delivery.',tags:['Japanese','Sushi','Fresh'],bg:'#FFF5F8',cuisine:'Japanese',prepTime:'30–40 min'},
  {id:16,type:'restaurant',emoji:'🌮',title:'Taco Trio + Guac',seller:'Casa Maya',sellerInitials:'CM',rating:4.6,reviews:64,price:14,desc:'Three soft corn tortilla tacos — al pastor, carnitas, and grilled veg — with a side of fresh guacamole and tortilla chips. Spicy on request.',tags:['Mexican','Tacos','Dinner'],bg:'#FFF8E8',cuisine:'Mexican',prepTime:'15–25 min'},
  {id:17,type:'restaurant',emoji:'🍔',title:'Smash Burger Combo',seller:'Burger Loft',sellerInitials:'BL',rating:4.7,reviews:175,price:18,desc:'Double smash patty with American cheese, pickles, onion, and house sauce on a brioche bun. Comes with crinkle fries and a soft drink.',tags:['American','Burger','Combo'],bg:'#FFF6E8',cuisine:'American',prepTime:'15–20 min'},
  {id:18,type:'restaurant',emoji:'🥗',title:'Mediterranean Power Bowl',seller:'Olive & Grain',sellerInitials:'OG',rating:4.8,reviews:96,price:13,desc:'Quinoa, roasted chickpeas, falafel, cucumber, tomato, feta, olives, and lemon-tahini dressing. Vegetarian. Vegan option available.',tags:['Healthy','Mediterranean','Vegetarian'],bg:'#F0FAE8',cuisine:'Mediterranean',prepTime:'10–15 min'},
];

let cart = [];
let activeType = 'all';

const SELLER_KEY = 'markette_seller';
const USER_LISTINGS_KEY = 'markette_listings';
function getSeller() {
  try { return JSON.parse(localStorage.getItem(SELLER_KEY) || 'null'); } catch { return null; }
}
function saveSeller(s) { localStorage.setItem(SELLER_KEY, JSON.stringify(s)); }
function clearSeller() { localStorage.removeItem(SELLER_KEY); }

function getUserListings() {
  try { return JSON.parse(localStorage.getItem(USER_LISTINGS_KEY) || '[]'); } catch { return []; }
}
function saveUserListings(arr) { localStorage.setItem(USER_LISTINGS_KEY, JSON.stringify(arr)); }

const TYPE_DEFAULTS = {
  physical:   { emoji: '🛍️', bg: '#FFF8F0' },
  services:   { emoji: '✨',  bg: '#F5F0FF' },
  digital:    { emoji: '⚡',  bg: '#F0FFF5' },
  secondhand: { emoji: '♻️',  bg: '#FFF5F0' },
  restaurant: { emoji: '🍴',  bg: '#FFF1EA' },
};
const CATEGORY_EMOJI = {
  'Fashion & Apparel': '👕',
  'Electronics':       '📱',
  'Home & Garden':     '🪴',
  'Books & Media':     '📚',
  'Design & Creative': '🎨',
  'Tech & Software':   '💻',
  'Health & Beauty':   '💄',
  'Other':             '🎁',
};
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function initialsOf(name) {
  return name.trim().split(/\s+/).slice(0,2).map(w => w[0]).join('').toUpperCase() || '?';
}

function renderAuthSlot() {
  const slot = document.getElementById('authSlot');
  const s = getSeller();
  if (!s) {
    slot.innerHTML = `<button class="btn btn-primary btn-sm" onclick="openRegisterModal()">Sign in</button>`;
  } else {
    slot.innerHTML = `
      <div class="store-wrap">
        <button class="store-chip" onclick="toggleStoreMenu(event)">
          <span class="avatar">${esc(initialsOf(s.storeName))}</span>
          <span>${esc(s.storeName)}</span>
          <span style="color:var(--ink3);font-size:0.7rem">▾</span>
        </button>
        <div class="store-menu" id="storeMenu">
          <div class="item-muted">${esc(s.email)}</div>
          <button onclick="goPage('sell');closeStoreMenu()">📝 List something</button>
          <button onclick="signOut()">↪ Sign out</button>
        </div>
      </div>`;
  }
}

function toggleStoreMenu(e) {
  e.stopPropagation();
  document.getElementById('storeMenu').classList.toggle('show');
}
function closeStoreMenu() {
  const m = document.getElementById('storeMenu');
  if (m) m.classList.remove('show');
}
document.addEventListener('click', closeStoreMenu);

function openRegisterModal() {
  document.getElementById('registerModal').classList.add('show');
  setTimeout(() => document.getElementById('regStoreName').focus(), 50);
}
function closeRegisterModal() {
  document.getElementById('registerModal').classList.remove('show');
}
function closeRegisterIfBackdrop(e) {
  if (e.target.id === 'registerModal') closeRegisterModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeRegisterModal(); });

function submitRegister() {
  const storeName = document.getElementById('regStoreName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const category = document.getElementById('regCategory').value;
  const payout = document.getElementById('regPayout').value;
  if (!storeName) { showToast('Please enter a store name'); return; }
  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  saveSeller({ storeName, email, category, payout, joinedAt: Date.now() });
  closeRegisterModal();
  renderAuthSlot();
  showToast(`Welcome to Markette, ${storeName}! 🎉`);
  goPage('sell');
}

function signOut() {
  clearSeller();
  closeStoreMenu();
  renderAuthSlot();
  showToast('Signed out');
  goPage('home');
}

function goPage(page) {
  if (page === 'sell' && !getSeller()) {
    openRegisterModal();
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0,0);
  if (page === 'cart') renderCart();
  if (page === 'sell') renderSellForm();
}

function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

function filterByType(type, el) {
  activeType = type;
  document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderListings();
}

function filterListings() {
  renderListings();
}

function renderListings() {
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  let items = LISTINGS.filter(l => {
    const matchType = activeType === 'all' || l.type === activeType;
    const matchQ = !q || l.title.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q) || l.tags.join(' ').toLowerCase().includes(q);
    return matchType && matchQ;
  });
  const grid = document.getElementById('listingsGrid');
  document.getElementById('listingCount').textContent = items.length + ' listings';
  const seller = getSeller();
  grid.innerHTML = items.map(l => {
    const isMine = seller && l.isUserListing && l.seller === seller.storeName;
    return `
    <div class="card" onclick="showDetail(${l.id})">
      <div class="card-img" style="background:${l.bg}">
        <span style="font-size:3.5rem">${l.emoji}</span>
        <span class="card-type-badge badge-${l.type}">${l.type === 'secondhand' ? '♻️ Secondhand' : l.type === 'physical' ? '📦 Physical' : l.type === 'services' ? '🛠 Service' : l.type === 'restaurant' ? '🍽️ Restaurant' : '💾 Digital'}</span>
        ${isMine ? '<span class="card-mine-badge">Your listing</span>' : ''}
      </div>
      <div class="card-body">
        <div class="card-title">${esc(l.title)}</div>
        <div class="card-seller">by ${esc(l.seller)}</div>
        ${l.condition ? `<span class="condition-badge">${esc(l.condition)} condition</span>` : ''}
        <div class="card-footer">
          <span class="card-price">₵${l.price}${l.type==='services'?'/hr':''}</span>
          <span class="card-rating"><span class="star">★</span> ${l.rating}${l.reviews ? ` (${l.reviews})` : ''}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function showDetail(id) {
  const l = LISTINGS.find(x => x.id === id);
  if (!l) return;
  const isService = l.type === 'services';
  const isDigital = l.type === 'digital';
  const isRestaurant = l.type === 'restaurant';
  const seller = getSeller();
  const isMine = seller && l.isUserListing && l.seller === seller.storeName;
  document.getElementById('detailContent').innerHTML = `
    <div>
      <div class="detail-img" style="background:${l.bg}">${l.emoji}</div>
    </div>
    <div class="detail-info">
      <span class="card-type-badge badge-${l.type}" style="margin-bottom:0.75rem;display:inline-block">${l.type}</span>
      <h1>${esc(l.title)}</h1>
      <div class="seller-tag">
        <div class="seller-avatar">${esc(l.sellerInitials)}</div>
        <span class="seller-name">${esc(l.seller)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem">
        <span class="stars">${'★'.repeat(Math.floor(l.rating))}${'☆'.repeat(5-Math.floor(l.rating))}</span>
        <span style="font-size:0.85rem;color:var(--ink2)">${l.rating} · ${l.reviews} reviews</span>
      </div>
      <div class="detail-price">
        ₵${l.price}${isService ? '/hr' : ''}
        ${l.originalPrice ? `<span style="font-size:1rem;color:var(--ink3);text-decoration:line-through;margin-left:0.5rem">₵${l.originalPrice}</span>
        <span style="font-size:0.9rem;color:var(--green);margin-left:0.5rem">${Math.round((1-l.price/l.originalPrice)*100)}% off</span>` : ''}
      </div>
      <div class="meta-row">
        ${l.tags.map(t => `<span class="meta-item">${esc(t)}</span>`).join('')}
        ${l.condition ? `<span class="meta-item">Condition: ${esc(l.condition)}</span>` : ''}
        ${l.cuisine ? `<span class="meta-item">Cuisine: ${esc(l.cuisine)}</span>` : ''}
        ${l.prepTime ? `<span class="meta-item">⏱ ${esc(l.prepTime)}</span>` : ''}
      </div>
      <p class="detail-desc">${esc(l.desc)}</p>
      <div class="detail-actions">
        ${isMine ? `
          <div class="mine-banner">This is your listing. Buyers see it on the home page.</div>
          <button class="btn-outline" style="color:#B91C1C;border-color:#FCA5A5" onclick="deleteListing(${l.id})">🗑 Delete listing</button>
        ` : `
          <button class="btn btn-primary btn-large" onclick="addToCart(${l.id})">
            ${isService ? '📅 Book now' : isDigital ? '⚡ Buy & download' : isRestaurant ? '🍽️ Order now' : '🛒 Add to cart'}
          </button>
          <button class="btn-outline" onclick="showToast('Added to wishlist ♡')">♡ Save to wishlist</button>
          <button class="btn-outline" onclick="messageSeller(${l.id})">💬 Message seller</button>
        `}
      </div>
    </div>
  `;
  goPage('detail');
}

function addToCart(id) {
  const l = LISTINGS.find(x => x.id === id);
  if (!l) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    if (l.type !== 'secondhand') existing.qty++;
    else { showToast('Only 1 available'); return; }
  } else {
    cart.push({...l, qty: 1});
  }
  updateCartBadge();
  showToast(l.type === 'services' ? `Booking slot reserved for "${l.title}"` : l.type === 'digital' ? `"${l.title}" ready to download after checkout` : l.type === 'restaurant' ? `"${l.title}" added to your order 🍽️` : `"${l.title}" added to cart`);
}

function updateCartBadge() {
  const total = cart.reduce((s,c) => s + c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function renderCart() {
  const el = document.getElementById('cartContent');
  if (cart.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="emo">🛒</div><p>Your cart is empty</p><button class="btn btn-primary" onclick="goPage('home')">Browse listings</button></div>`;
    return;
  }
  const subtotal = cart.reduce((s,c) => s + c.price * c.qty, 0);
  const hasShipped = cart.some(c => c.type === 'physical' || c.type === 'secondhand');
  const hasRestaurant = cart.some(c => c.type === 'restaurant');
  const shipping = (hasShipped ? 8 : 0) + (hasRestaurant ? 4 : 0);
  const feeLabel = hasShipped && hasRestaurant ? 'Shipping + delivery' : hasRestaurant ? 'Delivery' : 'Shipping';
  const total = subtotal + shipping;
  el.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${c.bg}">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${esc(c.title)}</div>
        <div class="cart-item-sub">${esc(c.seller)} · ${c.type}${c.qty > 1 ? ' · Qty: ' + c.qty : ''}</div>
      </div>
      <span class="cart-item-price">₵${(c.price * c.qty).toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${c.id})">✕</button>
    </div>
  `).join('') + `
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>₵${subtotal.toFixed(2)}</span></div>
      ${shipping ? `<div class="summary-row"><span>${feeLabel}</span><span>₵${shipping.toFixed(2)}</span></div>` : '<div class="summary-row"><span>Shipping</span><span style="color:var(--green)">Free</span></div>'}
      <div class="summary-row total"><span>Total</span><span>₵${total.toFixed(2)}</span></div>
      <button class="btn btn-primary btn-large" style="margin-top:1rem;width:100%;justify-content:center" onclick="checkout()">Checkout securely →</button>
    </div>
  `;
}

function checkout() {
  cart = [];
  updateCartBadge();
  showToast('🎉 Order placed! Thank you for shopping on Markette.');
  goPage('home');
}

let selectedType = (getSeller() && getSeller().category) || 'physical';
function renderSellForm(success) {
  const el = document.getElementById('sellForm');
  if (success) {
    el.innerHTML = `<div class="success-state"><div class="emo">🎉</div><h2>Listing published!</h2><p>Your item is now live on Markette.</p><button class="btn btn-primary" onclick="goPage('home')">Browse listings</button></div>`;
    return;
  }
  const seller = getSeller();
  const banner = seller ? `<div class="selling-as">Selling as <strong>${esc(seller.storeName)}</strong> · ${esc(seller.email)} · Payouts via ${esc(seller.payout)}</div>` : '';
  const typeFields = {
    physical: `
      <div class="form-row">
        <div class="form-group"><label>Stock quantity</label><input type="number" value="1" min="1"/></div>
        <div class="form-group"><label>Weight (kg)</label><input type="number" placeholder="0.5"/></div>
      </div>
      <div class="form-group"><label>Shipping options</label><select><option>Standard (3-5 days)</option><option>Express (1-2 days)</option><option>Local pickup only</option></select></div>`,
    services: `
      <div class="form-row">
        <div class="form-group"><label>Pricing model</label><select><option>Per hour</option><option>Fixed price</option><option>Custom quote</option></select></div>
        <div class="form-group"><label>Delivery method</label><select><option>Remote / online</option><option>In-person</option><option>Both</option></select></div>
      </div>
      <div class="form-group"><label>Availability</label><input type="text" placeholder="e.g. Mon–Fri, 9am–5pm GMT"/></div>`,
    digital: `
      <div class="form-group"><label>Upload file</label><input type="file"/></div>
      <div class="form-group"><label>Licence type</label><select><option>Personal use</option><option>Commercial use</option><option>Extended commercial</option></select></div>`,
    secondhand: `
      <div class="form-row">
        <div class="form-group"><label>Condition</label><select id="listCondition"><option>Excellent</option><option>Good</option><option>Fair</option></select></div>
        <div class="form-group"><label>Original RRP (₵)</label><input id="listRRP" type="number" placeholder="200"/></div>
      </div>
      <div class="form-group" style="display:flex;align-items:center;gap:0.5rem"><input type="checkbox" id="allowOffers" style="width:auto"/><label for="allowOffers" style="margin:0">Allow buyer offers / negotiation</label></div>`,
    restaurant: `
      <div class="form-row">
        <div class="form-group"><label>Cuisine</label><select id="listCuisine"><option>Ghanaian</option><option>Italian</option><option>Japanese</option><option>Mexican</option><option>American</option><option>Mediterranean</option><option>Chinese</option><option>Indian</option><option>Other</option></select></div>
        <div class="form-group"><label>Prep time</label><input id="listPrepTime" type="text" placeholder="e.g. 25–35 min"/></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Order type</label><select><option>Delivery</option><option>Pickup</option><option>Delivery & Pickup</option><option>Dine-in</option></select></div>
        <div class="form-group"><label>Dietary tags</label><input type="text" placeholder="e.g. Vegan, Halal, Gluten-free"/></div>
      </div>`
  };
  el.innerHTML = `
    ${banner}
    <div class="type-grid">
      ${[['physical','📦','Physical good','Tangible shipped item'],['services','🛠','Service','Book a time slot'],['digital','💾','Digital product','Instant download'],['secondhand','♻️','Secondhand item','Pre-loved item'],['restaurant','🍽️','Restaurant','Food, delivery or pickup']].map(([t,e,n,d]) => `
        <div class="type-option ${selectedType===t?'selected':''}" onclick="selectType('${t}')">
          <div class="emo">${e}</div><div class="name">${n}</div><div class="desc">${d}</div>
        </div>`).join('')}
    </div>
    <div class="form-group"><label>Listing title</label><input id="listTitle" type="text" placeholder="e.g. Vintage Leather Jacket — Size M"/></div>
    <div class="form-group"><label>Description</label><textarea id="listDesc" placeholder="Describe your item in detail — condition, features, what's included..."></textarea></div>
    <div class="form-row">
      <div class="form-group"><label>Price (₵)</label><input id="listPrice" type="number" placeholder="29.99" min="0"/></div>
      <div class="form-group"><label>Category</label><select id="listCategory"><option>Fashion & Apparel</option><option>Electronics</option><option>Home & Garden</option><option>Books & Media</option><option>Design & Creative</option><option>Tech & Software</option><option>Health & Beauty</option><option>Other</option></select></div>
    </div>
    <div class="form-group"><label>Photos (up to 8)</label><input type="file" multiple accept="image/*"/></div>
    <div id="typeSpecificFields">${typeFields[selectedType]}</div>
    <button class="btn btn-primary btn-large" style="margin-top:1rem" onclick="submitListing()">Publish listing →</button>
  `;
}

function selectType(t) {
  selectedType = t;
  renderSellForm();
}

function submitListing() {
  const seller = getSeller();
  if (!seller) { openRegisterModal(); return; }
  const title = document.getElementById('listTitle').value.trim();
  const desc = document.getElementById('listDesc').value.trim();
  const price = parseFloat(document.getElementById('listPrice').value);
  const category = document.getElementById('listCategory').value;
  if (!title) { showToast('Please enter a listing title'); return; }
  if (!desc) { showToast('Please add a description'); return; }
  if (!(price >= 0) || Number.isNaN(price)) { showToast('Please enter a valid price'); return; }

  const emoji = CATEGORY_EMOJI[category] || TYPE_DEFAULTS[selectedType].emoji;
  const bg = TYPE_DEFAULTS[selectedType].bg;
  const listing = {
    id: Date.now(),
    type: selectedType,
    emoji, bg, title, desc, price,
    tags: [category, selectedType === 'restaurant' ? 'Fresh' : 'New'],
    seller: seller.storeName,
    sellerInitials: initialsOf(seller.storeName),
    sellerEmail: seller.email,
    rating: 5.0,
    reviews: 0,
    isUserListing: true,
    createdAt: Date.now(),
  };
  if (selectedType === 'secondhand') {
    listing.condition = document.getElementById('listCondition')?.value || 'Good';
    const rrp = parseFloat(document.getElementById('listRRP')?.value);
    if (rrp && rrp > price) listing.originalPrice = rrp;
  }
  if (selectedType === 'restaurant') {
    const cuisine = document.getElementById('listCuisine')?.value;
    const prepTime = document.getElementById('listPrepTime')?.value.trim();
    if (cuisine) listing.cuisine = cuisine;
    if (prepTime) listing.prepTime = prepTime;
  }

  const arr = getUserListings();
  arr.push(listing);
  saveUserListings(arr);
  LISTINGS.unshift(listing);
  renderListings();
  renderSellForm(true);
}

function messageSeller(id) {
  const l = LISTINGS.find(x => x.id === id);
  if (l) showToast(`Message sent to ${l.seller}!`);
}

function deleteListing(id) {
  if (!confirm('Delete this listing? This cannot be undone.')) return;
  saveUserListings(getUserListings().filter(l => l.id !== id));
  const idx = LISTINGS.findIndex(l => l.id === id);
  if (idx >= 0) LISTINGS.splice(idx, 1);
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  showToast('Listing deleted');
  renderListings();
  goPage('home');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

getUserListings().slice().reverse().forEach(l => LISTINGS.unshift(l));
renderListings();
renderAuthSlot();
