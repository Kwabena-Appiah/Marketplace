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
];

let cart = [];
let activeType = 'all';

function goPage(page) {
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
  grid.innerHTML = items.map(l => `
    <div class="card" onclick="showDetail(${l.id})">
      <div class="card-img" style="background:${l.bg}">
        <span style="font-size:3.5rem">${l.emoji}</span>
        <span class="card-type-badge badge-${l.type}">${l.type === 'secondhand' ? '♻️ Secondhand' : l.type === 'physical' ? '📦 Physical' : l.type === 'services' ? '🛠 Service' : '💾 Digital'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${l.title}</div>
        <div class="card-seller">by ${l.seller}</div>
        ${l.condition ? `<span class="condition-badge">${l.condition} condition</span>` : ''}
        <div class="card-footer">
          <span class="card-price">$${l.price}${l.type==='services'?'/hr':''}</span>
          <span class="card-rating"><span class="star">★</span> ${l.rating} (${l.reviews})</span>
        </div>
      </div>
    </div>
  `).join('');
}

function showDetail(id) {
  const l = LISTINGS.find(x => x.id === id);
  if (!l) return;
  const isService = l.type === 'services';
  const isDigital = l.type === 'digital';
  document.getElementById('detailContent').innerHTML = `
    <div>
      <div class="detail-img" style="background:${l.bg}">${l.emoji}</div>
    </div>
    <div class="detail-info">
      <span class="card-type-badge badge-${l.type}" style="margin-bottom:0.75rem;display:inline-block">${l.type}</span>
      <h1>${l.title}</h1>
      <div class="seller-tag">
        <div class="seller-avatar">${l.sellerInitials}</div>
        <span class="seller-name">${l.seller}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem">
        <span class="stars">${'★'.repeat(Math.floor(l.rating))}${'☆'.repeat(5-Math.floor(l.rating))}</span>
        <span style="font-size:0.85rem;color:var(--ink2)">${l.rating} · ${l.reviews} reviews</span>
      </div>
      <div class="detail-price">
        $${l.price}${isService ? '/hr' : ''}
        ${l.originalPrice ? `<span style="font-size:1rem;color:var(--ink3);text-decoration:line-through;margin-left:0.5rem">$${l.originalPrice}</span>
        <span style="font-size:0.9rem;color:var(--green);margin-left:0.5rem">${Math.round((1-l.price/l.originalPrice)*100)}% off</span>` : ''}
      </div>
      <div class="meta-row">
        ${l.tags.map(t => `<span class="meta-item">${t}</span>`).join('')}
        ${l.condition ? `<span class="meta-item">Condition: ${l.condition}</span>` : ''}
      </div>
      <p class="detail-desc">${l.desc}</p>
      <div class="detail-actions">
        <button class="btn btn-primary btn-large" onclick="addToCart(${l.id})">
          ${isService ? '📅 Book now' : isDigital ? '⚡ Buy & download' : '🛒 Add to cart'}
        </button>
        <button class="btn-outline" onclick="showToast('Added to wishlist ♡')">♡ Save to wishlist</button>
        <button class="btn-outline" onclick="showToast('Message sent to ${l.seller}!')">💬 Message seller</button>
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
  showToast(l.type === 'services' ? `Booking slot reserved for "${l.title}"` : l.type === 'digital' ? `"${l.title}" ready to download after checkout` : `"${l.title}" added to cart`);
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
  const shipping = cart.some(c => c.type === 'physical' || c.type === 'secondhand') ? 8 : 0;
  const total = subtotal + shipping;
  el.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${c.bg}">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${c.title}</div>
        <div class="cart-item-sub">${c.seller} · ${c.type}${c.qty > 1 ? ' · Qty: ' + c.qty : ''}</div>
      </div>
      <span class="cart-item-price">$${(c.price * c.qty).toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${c.id})">✕</button>
    </div>
  `).join('') + `
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      ${shipping ? `<div class="summary-row"><span>Shipping</span><span>$${shipping.toFixed(2)}</span></div>` : '<div class="summary-row"><span>Shipping</span><span style="color:var(--green)">Free</span></div>'}
      <div class="summary-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
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

let selectedType = 'physical';
function renderSellForm(success) {
  const el = document.getElementById('sellForm');
  if (success) {
    el.innerHTML = `<div class="success-state"><div class="emo">🎉</div><h2>Listing published!</h2><p>Your item is now live on Markette.</p><button class="btn btn-primary" onclick="goPage('home')">Browse listings</button></div>`;
    return;
  }
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
        <div class="form-group"><label>Condition</label><select><option>Excellent</option><option>Good</option><option>Fair</option></select></div>
        <div class="form-group"><label>Original RRP ($)</label><input type="number" placeholder="200"/></div>
      </div>
      <div class="form-group" style="display:flex;align-items:center;gap:0.5rem"><input type="checkbox" id="allowOffers" style="width:auto"/><label for="allowOffers" style="margin:0">Allow buyer offers / negotiation</label></div>`
  };
  el.innerHTML = `
    <div class="type-grid">
      ${[['physical','📦','Physical good','Tangible shipped item'],['services','🛠','Service','Book a time slot'],['digital','💾','Digital product','Instant download'],['secondhand','♻️','Secondhand item','Pre-loved item']].map(([t,e,n,d]) => `
        <div class="type-option ${selectedType===t?'selected':''}" onclick="selectType('${t}')">
          <div class="emo">${e}</div><div class="name">${n}</div><div class="desc">${d}</div>
        </div>`).join('')}
    </div>
    <div class="form-group"><label>Listing title</label><input type="text" placeholder="e.g. Vintage Leather Jacket — Size M"/></div>
    <div class="form-group"><label>Description</label><textarea placeholder="Describe your item in detail — condition, features, what's included..."></textarea></div>
    <div class="form-row">
      <div class="form-group"><label>Price ($)</label><input type="number" placeholder="29.99" min="0"/></div>
      <div class="form-group"><label>Category</label><select><option>Fashion & Apparel</option><option>Electronics</option><option>Home & Garden</option><option>Books & Media</option><option>Design & Creative</option><option>Tech & Software</option><option>Health & Beauty</option><option>Other</option></select></div>
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
  renderSellForm(true);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

renderListings();
