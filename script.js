
// PRODUCTS IMAGES
const products = [
  {
    name: "Kubota Harvester DC70 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc70pro-ph.png",
    desc: "High-efficiency combine harvester na idinisenyo para sa mabilis at malinis na pag-ani ng palay."
  },
  {
    name: "Kubota Harvester DC93 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc93pro-ph.png",
    desc: "High-efficiency combine harvester na idinisenyo para sa mabilis at malinis na pag-ani ng palay."
  },
    {
    name: "Kubota Harvester DCX100-PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dcx100-ph.png",
    desc: "High-efficiency combine harvester na idinisenyo para sa mabilis at malinis na pag-ani ng palay."
  },
  {
    name: "Kubota Tractor L3228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L3228.png",
    desc: "Matibay na 4WD farm tractor para sa pag-aararo, pagbabasag ng lupa, at iba pang gawaing bukid."
  },
  {
    name: "Kubota Tractor L4028",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L4228.png",
    desc: "Malakas na diesel tractor para sa malalawak na sakahan at heavy-duty agricultural operations."
  },
  {
    name: "Kubota Tractor L5228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L5228.png",
    desc:  "Matibay na 4WD farm tractor para sa pag-aararo, pagbabasag ng lupa, at iba pang gawaing bukid."
  },
    {
    name: "Kubota Tractor M108s",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M108s.png",
    desc:  "Matibay na 4WD farm tractor para sa pag-aararo, pagbabasag ng lupa, at iba pang gawaing bukid."
  },
  {
    name: "Kubota Tractor M9540",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M9540.png",
    desc:  "Matibay na 4WD farm tractor para sa pag-aararo, pagbabasag ng lupa, at iba pang gawaing bukid."
  },
    {
    name: "Kubota Tractor MU5702",
    category: "Tractors",
    brand: "Kubota",
    image: "img/MU5702.png",
    desc:  "Matibay na 4WD farm tractor para sa pag-aararo, pagbabasag ng lupa, at iba pang gawaing bukid."
  },
  {
    name: "Kubota KW4 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw4.png",
    desc: ""
  },
  {
    name: "Kubota KW6 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw6.png",
    desc: ""
  },
  {
    name: "kubota SPV-6CMD",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/spv-6cmd.png",
    desc: ""
  },
  {
    name: "Kubota SRK610PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK610PH.png",
    desc: ""
  },
  {
    name: "Kubota SRK800PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK800ph.png",
    desc: ""
  },
  {
    name: "Honda Click 125",
    category: "Motorcycles & Vehicles",
    brand: "Honda",
    image: "img/hondaclick125.png",
    desc: "Matipid sa gasolina at maaasahang motorsiklo para sa pang-araw-araw na biyahe."
  },
];

//HERO SLIDER IMAGES
let currentSlide = 0;
const slidesContainer = document.getElementById('slidesContainer');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let slideInterval;

if (slidesContainer && slides.length > 0) {
  // Gumawa ng dots base sa dami ng slides
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  window.changeSlide = function(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlider();
    resetAutoSlide();
  };

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
  }

  // Kusang mag-slide tuwing 5 seconds
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  startAutoSlide();
}

// Render Products with Images
function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <div>
          <img src="${item.image}" alt="${item.name}" class="card-img" />
          <div class="card-body">
            <span class="badge">${item.category}</span>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
          </div>
        </div>
        <div class="card-footer">
          <strong>Brand: ${item.brand}</strong>
          <button class="btn btn-small" onclick="openModal('${item.name}')">Inquire</button>
        </div>
      </div>
    `;
  });
}

// Filter Products
function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Render Branches & Populate Service Dropdown
function displayBranches(list) {
  const grid = document.getElementById("branchGrid");
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = "<p>Walang nahanap na branch. Subukan ang ibang keyword.</p>";
    return;
  }
  list.forEach(b => {
    grid.innerHTML += `
      <div class="card">
        <div class="card-body">
          <span class="badge">${b.province}</span>
          <h3>${b.name}</h3>
          <p>📍 ${b.address}</p>
        </div>
        <div class="card-footer">
          <span>📞 ${b.contact}</span>
          
        </div>
      </div>
    `;
  });
}

function populateBranchDropdown() {
  const select = document.getElementById("branchSelect");
  branches.forEach(b => {
    const option = document.createElement("option");
    option.value = b.name;
    option.textContent = `${b.name} (${b.province})`;
    select.appendChild(option);
  });
}

// Search Branches
let currentProvince = 'all';

function filterByProvince(province, btnElement) {
  currentProvince = province.toLowerCase();

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  filterBranches();
}

function filterBranches() {
  const searchEl = document.getElementById('branchSearch');
  const searchInput = searchEl ? searchEl.value.toLowerCase().trim() : '';

  const grid = document.getElementById('branchGrid');
  if (!grid) return; // Hihinto nang maayos kung wala ang branchGrid

  // Kinukuha ang lahat ng direct child cards sa loob ng #branchGrid
  const cards = grid.children;
  let visibleCount = 0;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardText = card.textContent.toLowerCase();
    
    // Hahanapin sa data-province attribute O sa text mismo ng card
    const dataProv = (card.getAttribute('data-province') || '').toLowerCase();
    const matchesProvince = (
      currentProvince === 'all' || 
      dataProv === currentProvince || 
      cardText.includes(currentProvince)
    );

    const matchesSearch = cardText.includes(searchInput);

    if (matchesProvince && matchesSearch) {
      card.style.display = ''; // Ibabalik sa default CSS display (flex/block)
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  }

  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl) {
    noResultsEl.style.display = (visibleCount === 0) ? 'block' : 'none';
  }
}

// Modal Functions
function openModal(productName) {
  document.getElementById("selectedProductText").innerText = "Unit: " + productName;
  document.getElementById("inquiryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("inquiryModal").style.display = "none";
}

// Ilagay dito ang email na tatanggap ng inquiries at bookings
const COMPANY_EMAIL = 'elmaradaoag@gmail.com';

// Helper function para kunin lahat ng fields sa form at ipadala sa email
async function sendFormDataToEmail(form, emailSubject, successMessage, onComplete) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
  }

  // Kunin ang lahat ng input values mula sa form
  const formData = new FormData(form);
  const payload = {
    _subject: emailSubject,
    _template: 'table'
  };

  formData.forEach((value, key) => {
    payload[key] = value;
  });

  // Kung walang "name" attribute ang mga input sa HTML, kunin gamit ang placeholder/id
  if (Object.keys(payload).length <= 2) {
    form.querySelectorAll('input, select, textarea').forEach((field, index) => {
      if (field.type !== 'submit' && field.value.trim() !== '') {
        const label = field.name || field.id || field.placeholder || `Field_${index + 1}`;
        payload[label] = field.value.trim();
      }
    });
  }

  try {
    // TAMA NA URL: May /ajax/ at gamit ang ${COMPANY_EMAIL}
        const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok && (result.success === 'true' || result.success === true)) {
      alert(successMessage);
      form.reset();
      if (onComplete) onComplete();
    } else {
      throw new Error('Email sending failed');
    }
  } catch (error) {
    alert('May problema sa pagpapadala ng email. Pakisubukan muli o tumawag sa (078) 652-2214.');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
}

// 1. Product Inquiry Form Submission (Sends to Company Email)
function submitInquiry(event) {
  event.preventDefault();
  const form = event.target;

  sendFormDataToEmail(
    form,
    'New Product Inquiry - Equity Machineries Website',
    'Salamat! Naipadala na ang iyong product inquiry sa email ng Equity Machineries, Inc.',
    () => {
      if (typeof closeModal === 'function') {
        closeModal();
      }
    }
  );
}

// 2. Service & Spare Parts Form Submission (Sends to Company Email)
function submitServiceBooking(event) {
  event.preventDefault();
  const form = event.target;

  sendFormDataToEmail(
    form,
    'New Service & Spare Parts Booking - Equity Machineries Website',
    'Salamat! Naipadala na sa email ng aming Service & Parts Department ang iyong appointment request. Tatawag ang napiling branch para sa kumpirmasyon.'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navItems = document.getElementById('navItems');
  const navLinks = document.querySelectorAll('.nav-item');

  // Buksan/isara ang mobile menu gamit ang circular hamburger button
  if (mobileMenuBtn && navItems) {
    mobileMenuBtn.addEventListener('click', () => {
      navItems.classList.toggle('show');
    });
  }
});

// 1. Product Inquiry Form Submission (Sends to Company Email)
function submitInquiry(event) {
  event.preventDefault();
  const form = event.target;

  sendFormDataToEmail(
    form,
    'New Product Inquiry - Equity Machineries Website',
    'Salamat! Naipadala na ang iyong product inquiry sa email ng Equity Machineries, Inc.',
    () => {
      if (typeof closeModal === 'function') {
        closeModal();
      }
    }
  );
}

// 2. Service & Spare Parts Form Submission (Sends to Company Email)
function submitServiceBooking(event) {
  event.preventDefault();
  const form = event.target;

  sendFormDataToEmail(
    form,
    'New Service & Spare Parts Booking - Equity Machineries Website',
    'Salamat! Naipadala na sa email ng aming Service & Parts Department ang iyong appointment request. Tatawag ang napiling branch para sa kumpirmasyon.'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navItems = document.getElementById('navItems');
  const navLinks = document.querySelectorAll('.nav-item');

  // Buksan/isara ang mobile menu gamit ang circular hamburger button
  if (mobileMenuBtn && navItems) {
    mobileMenuBtn.addEventListener('click', () => {
      navItems.classList.toggle('show');
    });
  }

  // Ilipat ang active state kapag may pinindot na menu item
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const parentLi = this.parentElement;

      // Kung may dropdown sa mobile, buksan muna ang submenu
      if (window.innerWidth <= 768 && parentLi.classList.contains('has-dropdown')) {
        e.preventDefault();
        parentLi.classList.toggle('open');
        return;
      }

      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      if (navItems) navItems.classList.remove('show');
    });
  });
});
function copyContact(textToCopy, element) {
  if (!navigator.clipboard) return;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalHTML = element.innerHTML;
    element.innerHTML = `<i class="fa-solid fa-check"></i> <span style="color: #fde047; font-weight: 600;">Copied: ${textToCopy}</span>`;

    setTimeout(() => {
      element.innerHTML = originalHTML;
    }, 2000);
  });
}
// Dito ilalagay ang specifications ng bawat unit
const UNIT_SPECIFICATIONS = {
  "Kubota L3218": [
    "Engine: 32 HP, 3-Cylinder Liquid-Cooled Diesel",
    "Drive System: 4WD (Four-Wheel Drive)",
    "Transmission: 8 Forward / 8 Reverse",
    "PTO Speed: 540 / 750 rpm"
  ],
  "Kubota DC-70": [
    "Engine: 69 HP Turbocharged Diesel",
    "Cutting Width: 2,075 mm",
    "Grain Tank Capacity: 500 kg (approx. 10 sacks)",
    "Crawler Width: 500 mm"
  ]
  // Magdagdag pa ng ibang units dito...
};

// Function na tatawagin kapag pinindot ang product image
function openSpecsModal(imgElement, productName) {
  const modal = document.getElementById("specsModal");
  const modalImg = document.getElementById("specsModalImg");
  const modalTitle = document.getElementById("specsModalTitle");
  const specsList = document.getElementById("specsModalList");
  const inquireBtn = document.getElementById("specsInquireBtn");

  // Kopyahin ang image src mula sa pinindot na picture
  modalImg.src = imgElement.src;
  modalTitle.innerText = productName;

  // Ilagay ang specs sa <ul>
  specsList.innerHTML = "";
  const specs = UNIT_SPECIFICATIONS[productName] || ["Contact our nearest branch for full specifications."];
  specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Kapag pinindot ang "Inquire About This Unit" sa loob ng specs modal, bubukas ang inquiryModal mo
  inquireBtn.onclick = function() {
    closeSpecsModal();
    if (typeof openModal === "function") {
      openModal(productName);
    }
  };

  modal.style.display = "flex";
}

function closeSpecsModal() {
  document.getElementById("specsModal").style.display = "none";
}
// --- BRANCH FILTER & SEARCH LOGIC ---
function filterBranches(province, clickedBtn) {
  // I-update ang active button style
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');

  // Linisin ang search box kapag nagpalit ng tab
  const searchInput = document.getElementById('branchSearchInput');
  if (searchInput) searchInput.value = '';

  // Ipakita o itago ang province groups
  const groups = document.querySelectorAll('.province-group');
  groups.forEach(group => {
    group.querySelectorAll('.branch-row').forEach(row => row.style.display = '');
    if (province === 'all' || group.dataset.province === province) {
      group.style.display = 'block';
    } else {
      group.style.display = 'none';
    }
  });
}

function searchBranches() {
  const query = document.getElementById('branchSearchInput').value.toLowerCase().trim();
  const groups = document.querySelectorAll('.province-group');

  // I-reset ang active tab sa "All Branches" habang nagta-type sa search
  document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });

  groups.forEach(group => {
    let hasVisibleRow = false;
    const rows = group.querySelectorAll('.branch-row');

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      if (text.includes(query)) {
        row.style.display = '';
        hasVisibleRow = true;
      } else {
        row.style.display = 'none';
      }
    });

    group.style.display = hasVisibleRow ? 'block' : 'none';
  });
}



// Initial Load
displayProducts(products);
displayBranches(branches);
displayUpdates(displayUpdates);
populateBranchDropdown();
