// 1. PRODUCTS DATA
const products = [
  {
    name: "Kubota Harvester DC70 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc70pro-ph.png",
    desc: "High-efficiency combine harvester para sa mabilis at malinis na pag-ani ng palay.",
    specs: ["Engine: 69 HP Diesel", "Cutting Width: 2,075 mm", "Grain Tank: 1,400 L", "Transmission: HST"]
  },
  {
    name: "Kubota Harvester DC93 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc93pro-ph.png",
    desc: "High-efficiency combine harvester para sa mabilis at malinis na pag-ani ng palay.",
    specs: ["Engine: 93 HP Turbo Diesel", "Cutting Width: 2,180 mm", "Grain Tank: 1,500 L"]
  },
  {
    name: "Kubota Harvester DCX100-PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dcx100-ph.png",
    desc: "High-efficiency combine harvester para sa malalawak na palayan.",
    specs: ["Engine: 100 HP Diesel", "Heavy-duty threshing system"]
  },
  {
    name: "Kubota Tractor L3228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L3228.png",
    desc: "Matibay na 4WD farm tractor para sa pag-aararo at iba pang gawaing bukid.",
    specs: ["Engine: 32 HP Diesel", "Drive: 4WD", "Transmission: 8F / 4R"]
  },
  {
    name: "Kubota Tractor L4028",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L4228.png",
    desc: "Malakas na diesel tractor para sa heavy-duty agricultural operations.",
    specs: ["Engine: 40 HP Diesel", "Drive: 4WD", "Transmission: 8F / 8R"]
  },
  {
    name: "Kubota Tractor L5228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L5228.png",
    desc: "Matibay na 4WD farm tractor para sa sakahan.",
    specs: ["Engine: 52 HP Diesel", "Drive: 4WD"]
  },
  {
    name: "Kubota Tractor M108s",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M108s.png",
    desc: "Heavy-duty 4WD farm tractor para sa malalawak na lupain.",
    specs: ["Engine: 108 HP Turbo Diesel", "Drive: 4WD", "Transmission: 32F / 32R"]
  },
  {
    name: "Kubota Tractor M9540",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M9540.png",
    desc: "Matibay na 4WD farm tractor para sa pag-aararo at pagbabasag ng lupa.",
    specs: ["Engine: 95 HP Turbo Diesel", "Drive: 4WD"]
  },
  {
    name: "Kubota Tractor MU5702",
    category: "Tractors",
    brand: "Kubota",
    image: "img/MU5702.png",
    desc: "Matibay na 4WD farm tractor para sa gawaing bukid.",
    specs: ["Engine: 57 HP Diesel", "Drive: 4WD"]
  },
  {
    name: "Kubota KW4 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw4.png",
    desc: "Walk-behind 4-row rice transplanter.",
    specs: ["Rows: 4 Rows", "Type: Walk-Behind"]
  },
  {
    name: "Kubota KW6 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw6.png",
    desc: "Walk-behind 6-row rice transplanter.",
    specs: ["Rows: 6 Rows", "Type: Walk-Behind"]
  },
  {
    name: "Kubota SPV-6CMD",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/spv-6cmd.png",
    desc: "Riding-type 6-row rice transplanter.",
    specs: ["Rows: 6 Rows", "Type: Riding-Type"]
  },
  {
    name: "Kubota SRK610PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK610PH.png",
    desc: "Riding-type 6-row rice transplanter.",
    specs: ["Rows: 6 Rows", "Type: Riding-Type"]
  },
  {
    name: "Kubota SRK800PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK800ph.png",
    desc: "Heavy-duty 8-row riding-type rice transplanter.",
    specs: ["Rows: 8 Rows", "Type: Riding-Type"]
  },
  {
    name: "Honda Click 125",
    category: "Motorcycles & Vehicles",
    brand: "Honda",
    image: "img/hondaclick125.png",
    desc: "Matipid sa gasolina at maaasahang motorsiklo.",
    specs: ["Engine: 125cc Liquid-Cooled", "Transmission: Automatic", "Fuel: PGM-FI"]
  }
];

// 2. BRANCHES DATA
const branchList = [
  { name: "Cauayan Branch", province: "Isabela", address: "Maharlika Highway, Cauayan City, Isabela", contact: "(078) 652-2214" },
  { name: "Santiago Branch", province: "Isabela", address: "Maharlika Highway, Santiago City, Isabela", contact: "(078) 305-1234" },
  { name: "Alicia Branch", province: "Isabela", address: "Maharlika Highway, Alicia, Isabela", contact: "(078) 323-2885" },
  { name: "Ilagan Branch", province: "Isabela", address: "Ilagan City, Isabela", contact: "(078) 624-5678" },
  { name: "Roxas Branch", province: "Isabela", address: "Maharlika Highway, Brgy.Bantug, Roxas, Isabela", contact: "(078) 642-0191" },
  { name: "Tumauini Branch", province: "Isabela", address: "Maharlika Highway, Tumauini, Isabela", contact: "(078)" },
  { name: "Gattaran Branch", province: "Cagayan", address: "Maharlika Highway, Gattaran, Cagayan", contact: "(078)" },
  { name: "Camalaniugan Branch", province: "Cagayan", address: "Maharlika Highway, Camalaniugan, Cagayan", contact: "(078)" },
  { name: "Aparri Branch", province: "Cagayan", address: "Maharlika Highway, Aparri, Cagayan", contact: "(078)" },
  { name: "Abulug Branch", province: "Cagayan", address: "Maharlika Highway, Abulug, Cagayan", contact: "(078)" },
  { name: "Gonzaga Branch", province: "Cagayan", address: "Maharlika Highway, Gonzaga, Cagayan", contact: "(078)" },
  { name: "Sta. Ana Branch", province: "Cagayan", address: "Maharlika Highway, Sta. Ana, Cagayan", contact: "(078)" },
  { name: "Tuguegarao Branch", province: "Cagayan", address: "Tuguegarao City, Cagayan", contact: "(078) 844-1122" },
  { name: "Solano Branch", province: "Nueva Vizcaya", address: "Solano, Nueva Vizcaya", contact: "(078)" },
  { name: "Maddela Branch", province: "Quirino Province", address: "Maddela, Quirino", contact: "(078)" },
  { name: "Maria Aurora Branch", province: "Aurora Province", address: "Maria. Aurora, Aurora Province", contact: "(078)" },
  { name: "Flora Branch", province: "CAR", address: "Flora, CAR", contact: "(078)" },
  { name: "Lagawe Branch", province: "CAR", address: "Lagawe, CAR", contact: "(078)" },
  { name: "Alfonsolista Branch", province: "CAR", address: "Sta. Maria, Alfonsolista, Ifugao, CAR", contact: "(078)" },
  { name: "Tarlac Branch", province: "Central Luzon", address: "Tarlac, Central Luzon", contact: "(078)" },
  { name: "Launion Branch", province: "Launion", address: "Bauang, Launion, Central Luzon", contact: "(078)" },
];

// 3. DISPLAY PRODUCTS (SAFE DOM)
function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  list.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "card";

    const topDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "card-img";
    img.title = "I-click para makita ang specs";
    img.addEventListener("click", function () {
      openSpecsModal(item);
    });

    const body = document.createElement("div");
    body.className = "card-body";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = item.category;

    const title = document.createElement("h3");
    title.textContent = item.name;
    title.style.cursor = "pointer";
    title.addEventListener("click", function () {
      openSpecsModal(item);
    });

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    body.appendChild(badge);
    body.appendChild(title);
    body.appendChild(desc);
    topDiv.appendChild(img);
    topDiv.appendChild(body);

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const brand = document.createElement("strong");
    brand.textContent = "Brand: " + item.brand;

    const btn = document.createElement("button");
    btn.className = "btn btn-small";
    btn.textContent = "Inquire";
    btn.addEventListener("click", function () {
      openModal(item.name);
    });

    footer.appendChild(brand);
    footer.appendChild(btn);

    card.appendChild(topDiv);
    card.appendChild(footer);
    grid.appendChild(card);
  });
}

function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  if (btn) btn.classList.add("active");

  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(function (p) {
      return p.category === category;
    }));
  }
}

// 4. SPECS MODAL
function openSpecsModal(item) {
  const modal = document.getElementById("specsModal");
  if (!modal) return;

  document.getElementById("specsModalImg").src = item.image;
  document.getElementById("specsModalCategory").textContent = item.category;
  document.getElementById("specsModalTitle").textContent = item.name;
  document.getElementById("specsModalDesc").textContent = item.desc;

  const listEl = document.getElementById("specsModalList");
  listEl.innerHTML = "";
  (item.specs || []).forEach(function (spec) {
    const li = document.createElement("li");
    li.textContent = spec;
    listEl.appendChild(li);
  });

  document.getElementById("specsInquireBtn").onclick = function () {
    closeSpecsModal();
    openModal(item.name);
  };

  modal.style.display = "flex";
}

function closeSpecsModal() {
  const modal = document.getElementById("specsModal");
  if (modal) modal.style.display = "none";
}

// 5. INQUIRY MODAL
function openModal(productName) {
  const label = document.getElementById("selectedProductText");
  const modal = document.getElementById("inquiryModal");
  if (label) label.textContent = "Unit: " + productName;
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("inquiryModal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (e.target === document.getElementById("inquiryModal")) closeModal();
  if (e.target === document.getElementById("specsModal")) closeSpecsModal();
});

// 6. BRANCHES
function displayBranches(list) {
  const grid = document.getElementById("branchGrid");
  if (!grid) return;
  grid.innerHTML = "";

  list.forEach(function (b) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="card-body">' +
      '<span class="badge">' + b.province + "</span>" +
      "<h3>" + b.name + "</h3>" +
      "<p>" + b.address + "</p>" +
      "</div>" +
      '<div class="card-footer"><span>' + b.contact + "</span></div>";
    grid.appendChild(card);
  });
}

function populateBranchDropdown() {
  const select = document.getElementById("branchSelect");
  if (!select) return;
  branchList.forEach(function (b) {
    const opt = document.createElement("option");
    opt.value = b.name;
    opt.textContent = b.name + " (" + b.province + ")";
    select.appendChild(opt);
  });
}

function filterBranches() {
  const input = document.getElementById("branchSearch");
  const grid = document.getElementById("branchGrid");
  if (!input || !grid) return;

  const term = input.value.toLowerCase().trim();
  let visible = 0;

  Array.from(grid.children).forEach(function (card) {
    const match = card.textContent.toLowerCase().includes(term);
    card.style.display = match ? "" : "none";
    if (match) visible++;
  });

  const noRes = document.getElementById("noResults");
  if (noRes) noRes.style.display = visible === 0 ? "block" : "none";
}

// 7. EMAIL SENDING (FORMSUBMIT)
const COMPANY_EMAIL = "elmar.adaoag@equitymachineries.com.ph";

async function sendFormDataToEmail(form, subject, successMsg, extraData, onDone) {
  const btn = form.querySelector('button[type="submit"]');
  const oldText = btn ? btn.textContent : "";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Sending...";
  }

  const payload = Object.assign(
    { _subject: subject, _template: "table", _captcha: "false" },
    extraData || {}
  );

  new FormData(form).forEach(function (val, key) {
    payload[key.replace(/[^a-zA-Z0-9_]/g, "_")] = val;
  });

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

      if (data.success === "true" || data.success === true) {
        alert("Salamat! Naipadala na ang iyong inquiry sa aming email. Tatawagan ka namin sa lalong madaling panahon.");
        form.reset();
        if (onDone) onDone();
    } else {
      throw new Error(data.message || "Hindi naipadala ang email.");
    }
  } catch (err) {
    alert("Error: " + err.message + "\n\nTumawag sa (078) 652-2214.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = oldText;
    }
  }
}


// 8. HERO SLIDER & PAGE INIT
let currentSlide = 0;
function changeSlide(dir) {
const container = document.getElementById("slidesContainer");
const slides = document.querySelectorAll(".slide");
if (!container || slides.length === 0) return;
currentSlide = (currentSlide + dir + slides.length) % slides.length;
container.style.transform = "translateX(-" + currentSlide * 100 + "%)";
}

document.addEventListener("DOMContentLoaded", function () {
displayProducts(products);
displayBranches(branchList);
populateBranchDropdown();

// Active navigation link highlight
document.querySelectorAll(".nav-item").forEach(function (link) {
link.addEventListener("click", function () {
document.querySelectorAll(".nav-item").forEach(function (item) {
item.classList.remove("active");
});
this.classList.add("active");
});
});

// Inquiry Form
const inquiryForm = document.getElementById("inquiryForm");
if (inquiryForm) {
inquiryForm.addEventListener("submit", function (e) {
e.preventDefault();
const unit = document.getElementById("selectedProductText").textContent;
sendFormDataToEmail(
this,
"Product Inquiry - " + unit,
"Salamat! Naipadala na ang iyong inquiry.",
{ Selected_Unit: unit },
closeModal
);
});
}

// Service Form
const serviceForm = document.getElementById("serviceForm");
if (serviceForm) {
serviceForm.addEventListener("submit", function (e) {
e.preventDefault();
sendFormDataToEmail(
this,
"Service Booking Request",
"Salamat! Natanggap na namin ang iyong service request.",
{},
null
);
});
}
});

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

function toggleEmiChat() {
  const box = document.getElementById("emiChatBox");
  if (box) box.classList.toggle("open");
}

function appendEmiMessage(text, sender) {
  const messages = document.getElementById("emiChatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = "emi-msg " + sender;
  msgDiv.innerHTML = text;
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

function getEmiBotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("product") || text.includes("kubota") || text.includes("honda") || text.includes("bajaj") || text.includes("tractor") || text.includes("presyo") || text.includes("price")) {
    return "Nag-aalok po kami ng <strong>Kubota</strong> (Tractors, Harvesters, Construction Equipment), <strong>Honda</strong>, <strong>Bajaj</strong>, at iba pang agricultural machineries. Puwede ninyong tingnan ang buong listahan sa <a href='#products'>Products Section</a> o mag-request ng quotation sa aming form.";
  }
  if (text.includes("branch") || text.includes("location") || text.includes("saan") || text.includes("address") || text.includes("cauayan") || text.includes("isabela")) {
    return "Ang aming Main Office ay matatagpuan sa <strong>Cauayan City, Isabela</strong>, at may mga branches din kami sa iba't ibang bahagi ng Northern Luzon. Tingnan ang kumpletong address sa <a href='#branches'>Branches Section</a>.";
  }
  if (text.includes("service") || text.includes("repair") || text.includes("pms") || text.includes("parts") || text.includes("maintenance")) {
    return "Mayroon kaming authorized <strong>Service & Genuine Spare Parts</strong> para sa inyong makinarya. Puwede kayong magpa-schedule sa aming <a href='#service'>Service Request Form</a>.";
  }
  if (text.includes("contact") || text.includes("number") || text.includes("tawag") || text.includes("email")) {
    return "Puwede ninyo kaming kontakin direktang gamit ang mga detalye sa <a href='#contact'>Contact Section</a> o mag-iwan ng mensahe sa form para matawagan kayo ng aming team.";
  }
  return "Salamat sa inyong mensahe! Para sa mas detalyadong sagot o quotation, mangyaring punan ang aming <a href='#service'>Inquiry / Service Form</a> o pumili sa mga buttons sa ibaba.";
}

function sendQuickReply(topic) {
  appendEmiMessage(topic, "user");
  setTimeout(() => {
    appendEmiMessage(getEmiBotReply(topic), "bot");
  }, 400);
}

function handleEmiChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("emiUserInput");
  const text = input.value.trim();
  if (!text) return;

  appendEmiMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    appendEmiMessage(getEmiBotReply(text), "bot");
  }, 500);
}



