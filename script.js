// 1. PRODUCTS DATA
const products = [
  {
    name: "Kubota Harvester DC70 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc70pro-ph.png",
    desc: "High-efficiency combine harvester para sa mabilis at malinis na pag-ani ng palay.",
    specs: {
      "Engine": ["Engine Power | HP | 69 HP Diesel"],
      "Harvesting & Capacity": [
        "Cutting Width | mm | 2,075",
        "Grain Tank Capacity | L | 1,400"
      ],
      "Traveling System": ["Transmission | HST (Hydrostatic Transmission)"]
    }
  },
  {
    name: "Kubota Harvester DC93 Pro PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dc93pro-ph.png",
    desc: "High-efficiency combine harvester para sa mabilis at malinis na pag-ani ng palay.",
    specs: {
      "Engine": ["Engine Power | HP | 93 HP Turbo Diesel"],
      "Harvesting & Capacity": [
        "Cutting Width | mm | 2,180",
        "Grain Tank Capacity | L | 1,500"
      ]
    }
  },
  {
    name: "Kubota Harvester DCX100-PH",
    category: "Combined Harvesters",
    brand: "Kubota",
    image: "img/dcx100-ph.png",
    desc: "High-efficiency combine harvester para sa malalawak na palayan.",
    specs: {
      "Engine": ["Engine Power | HP | 100 HP Diesel"],
      "Features": ["Threshing System | Heavy-duty threshing system"]
    }
  },
  {
    name: "Kubota Tractor L3228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L3228.png",
    desc: "Matibay na 4WD farm tractor para sa pag-aararo at iba pang gawaing bukid.",
    specs: {
      "Drive System": [
        "Drive Type | 4WD"
      ],
      "Engine": [
        "Model | D1803",
        "Type | Direct injection, Vertical, Water-Cooled, 4-cycle diesel",
        "No. of cylinder | 3",
        "Bore and stroke | mm | 87 × 102.4",
        "Total displacement | L | 1.826",
        "Engine gross power* | kW (HP / PS) | 23.5 (31.5 / 32.0)",
        "Engine net power* | kW (HP / PS) | 22.4 (30.0 / 30.5)",
        "Power Drive Shaft (PTO Shaft)* | kW (HP / PS) | 20.4 (27.4 / 27.8)",
        "Rated revolution | rpm | 2700",
        "Maximum torque | N-m | 101.1",
        "Battery | 12 V 52 Ah",
        "Fuel | Diesel (Supports B7, B10, and B20 Diesel Fuel)",
        "Fuel tank | L | 40",
        "Engine crankcase (with filter) | L | 5.7",
        "Engine coolant | L | 6"
      ],
      "Dimension": [
        "Overall length | mm | 2840",
        "Overall width | mm | 1410",
        "Overall height | mm | 2210",
        "Wheelbase | mm | 1610",
        "Minimum ground clearance | mm | 345",
        "Weight | kg | 1240"
      ],
      "Traveling System": [
        "Transmission | Gear shift, 8 forward and 4 reverse",
        "Clutch | Dry single plate",
        "Brake | Wet disc type"
      ],
      "Hydraulic Unit": [
        "3-point hitch | Category I",
        "Max. lift capacity at lift point | kg | 906"
      ],
      "Power Take Off Shaft (PTO)": [
        "Rear PTO speed | rpm | 540 / 540E"
      ]
    }
  },
  {
    name: "Kubota Tractor L4028",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L4228.png",
    desc: "Malakas na diesel tractor para sa heavy-duty agricultural operations.",
    specs: {
      "Drive System": ["Drive Type | 4WD"],
      "Engine": ["Engine Power | HP | 40 HP Diesel"],
      "Traveling System": ["Transmission | 8F / 8R"]
    }
  },
  {
    name: "Kubota Tractor L5228",
    category: "Tractors",
    brand: "Kubota",
    image: "img/L5228.png",
    desc: "Matibay na 4WD farm tractor para sa sakahan.",
    specs: {
      "Drive System": ["Drive Type | 4WD"],
      "Engine": ["Engine Power | HP | 52 HP Diesel"]
    }
  },
  {
    name: "Kubota Tractor M108s",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M108s.png",
    desc: "Heavy-duty 4WD farm tractor para sa malalawak na lupain.",
    specs: {
      "Drive System": ["Drive Type | 4WD"],
      "Engine": ["Engine Power | HP | 108 HP Turbo Diesel"],
      "Traveling System": ["Transmission | 32F / 32R"]
    }
  },
  {
    name: "Kubota Tractor M9540",
    category: "Tractors",
    brand: "Kubota",
    image: "img/M9540.png",
    desc: "Matibay na 4WD farm tractor para sa pag-aararo at pagbabasag ng lupa.",
    specs: {
      "Drive System": ["Drive Type | 4WD"],
      "Engine": ["Engine Power | HP | 95 HP Turbo Diesel"]
    }
  },
  {
    name: "Kubota Tractor MU5702",
    category: "Tractors",
    brand: "Kubota",
    image: "img/MU5702.png",
    desc: "Matibay na 4WD farm tractor para sa gawaing bukid.",
    specs: {
      "Drive System": ["Drive Type | 4WD"],
      "Engine": ["Engine Power | HP | 57 HP Diesel"]
    }
  },
  {
    name: "NC-Plus X Special",
    category: "Power Tillers",
    brand: "Kubota",
    image: "img/Powertiller/NC-PLUSX.png",
    desc: "Matibay na Kubota power tiller para sa mabilis na paghahanda ng lupa.",
    specs: {
      "General Information": ["Availability | Makipag-ugnayan sa aming branch para sa kumpletong specifications."]
    }
  },
  {
    name: "Kubota Implement CP200F",
    category: "Implements",
    brand: "Kubota",
    image: "img/implements/cp200f.png",
    desc: "Heavy-duty agricultural implement para sa Kubota tractors.",
    specs: {
      "General Information": ["Availability | Makipag-ugnayan sa aming branch para sa kumpletong specifications."]
    }
  },
  {
    name: "Kubota KW4 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw4.png",
    desc: "Walk-behind 4-row rice transplanter.",
    specs: {
      "Planting System": [
        "Number of Rows | Rows | 4",
        "Operation Type | Walk-Behind"
      ]
    }
  },
  {
    name: "Kubota KW6 Rice Transplanters",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/kw6.png",
    desc: "Walk-behind 6-row rice transplanter.",
    specs: {
      "Planting System": [
        "Number of Rows | Rows | 6",
        "Operation Type | Walk-Behind"
      ]
    }
  },
  {
    name: "Kubota SPV-6CMD",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SPV-6CMD.png",
    desc: "Riding-type 6-row rice transplanter.",
    specs: {
      "Planting System": [
        "Number of Rows | Rows | 6",
        "Operation Type | Riding-Type"
      ]
    }
  },
  {
    name: "Kubota SRK610PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK610PH.png",
    desc: "Riding-type 6-row rice transplanter.",
    specs: {
      "Planting System": [
        "Number of Rows | Rows | 6",
        "Operation Type | Riding-Type"
      ]
    }
  },
  {
    name: "Kubota SRK800PH",
    category: "Transplanters",
    brand: "Kubota",
    image: "img/SRK800PH.png",
    desc: "Heavy-duty 8-row riding-type rice transplanter.",
    specs: {
      "Planting System": [
        "Number of Rows | Rows | 8",
        "Operation Type | Riding-Type"
      ]
    }
  },
  {
    name: "RK-70S",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/RK-70S.png",
    desc: "Matipid at maaasahang Kubota horizontal diesel engine.",
    specs: {
      "Engine": ["Model | RK-70S", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "RK80-1S",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/RK80-1S.png",
    desc: "Matipid at maaasahang Kubota horizontal diesel engine.",
    specs: {
      "Engine": ["Model | RK80-1S", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "RK95-1S",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/RK95-1S.png",
    desc: "Matipid at maaasahang Kubota horizontal diesel engine.",
    specs: {
      "Engine": ["Model | RK95-1S", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "ZR140-DI",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/ZR140-DI.png",
    desc: "Direct injection Kubota diesel engine para sa mabibigat na gamit.",
    specs: {
      "Engine": ["Model | ZR140-DI", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "ZT100-DI",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/ZT100-DI.png",
    desc: "Direct injection Kubota diesel engine para sa agrikultura.",
    specs: {
      "Engine": ["Model | ZT100-DI", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "ZT125-DI",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/ZT125-DI.png",
    desc: "Direct injection Kubota diesel engine para sa agrikultura.",
    specs: {
      "Engine": ["Model | ZT125-DI", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "ZT155-DI",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/ZT155-DI.png",
    desc: "Direct injection Kubota diesel engine para sa agrikultura.",
    specs: {
      "Engine": ["Model | ZT155-DI", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "ZT180-PLUS",
    category: "Diesel Engines",
    brand: "Kubota",
    image: "img/dieselengines/ZT180-PLUS.png",
    desc: "High-output Kubota diesel engine para sa heavy-duty applications.",
    specs: {
      "Engine": ["Model | ZT180-PLUS", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "DJI Agras T20P",
    category: "Agricultural Drones",
    brand: "Kubota",
    image: "img/drones/T20P.png",
    desc: "Smart agricultural spraying at spreading drone para sa modernong pagsasaka.",
    specs: {
      "Drone Specifications": ["Model | T20P", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
    }
  },
  {
    name: "DJI Agras T30-2",
    category: "Agricultural Drones",
    brand: "Kubota",
image: "img/drones/T30-2.png",
desc: "High-capacity agricultural spraying drone para sa malalawak na taniman.",
specs: {
"Drone Specifications": ["Model | T30-2", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
}
},
{
name: "DJI Agras T40",
category: "Agricultural Drones",
brand: "Kubota",
image: "img/drones/T40.png",
desc: "Heavy-payload agricultural drone para sa mabilisang spraying at spreading.",
specs: {
"Drone Specifications": ["Model | T40", "Status | Makipag-ugnayan sa aming branch para sa buong specs sheet."]
}
},
{
name: "Honda Click 125",
category: "Motorcycles & Vehicles",
brand: "Honda",
image: "img/hondaclick125.png",
desc: "Matipid sa gasolina at maaasahang motorsiklo.",
specs: {
"Engine": [
"Displacement | cc | 125",
"Cooling System | Liquid-Cooled",
"Fuel System | PGM-FI"
],
"Transmission": ["Transmission Type | Automatic (V-Matic)"]
}
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

let activeCategory = null;

function toggleProducts(category, btn) {
  const grid = document.getElementById("productGrid");

  // Kapag pinindot ulit ang nakabukas na button, itatago ang grid
  if (activeCategory === category && grid.style.display === "grid") {
    grid.style.display = "none";
    if (btn) btn.classList.remove("active");
    activeCategory = null;
    return;
  }

  // Ipakita ang grid at tawagin ang filterProducts mo
  grid.style.display = "grid";
  activeCategory = category;
  filterProducts(category, btn);
}

// Dati mong code (huwag galawin)
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


/// =========================================
// 4. SPECS MODAL (EXACT 3-COLUMN TABLE LAYOUT)
// =========================================
function openSpecsModal(item) {
  const modal = document.getElementById("specsModal");
  if (!modal) return;

  document.getElementById("specsModalImg").src = item.image || "";
  document.getElementById("specsModalCategory").textContent = item.category || "";
  document.getElementById("specsModalTitle").textContent = item.name || "";
  document.getElementById("specsModalDesc").textContent = item.desc || "";

  const listEl = document.getElementById("specsModalList");
  listEl.innerHTML = "";

  const specsData = item.specs || [];

  // FORMAT A: Grouped Object (Accordion + 3-Column Spec Table)
  if (!Array.isArray(specsData) && typeof specsData === "object") {
    const categories = Object.keys(specsData);
    categories.forEach(function (categoryName, index) {
      createAccordionSection(listEl, categoryName, specsData[categoryName], index === 0);
    });
  } 
  // FORMAT B: Lumang Array Format (Backward Compatible)
  else if (Array.isArray(specsData)) {
    specsData.forEach(function (specText, index) {
      if (typeof specText === "string" && specText.includes(":")) {
        const parts = specText.split(":");
        const title = parts.at(0).trim();
        const detail = parts.slice(1).join(":").trim();
        createAccordionSection(listEl, title, [detail], index === 0);
      } else {
        createAccordionSection(listEl, "Specification " + (index + 1), [specText], index === 0);
      }
    });
  }

  const inquireBtn = document.getElementById("specsInquireBtn");
  if (inquireBtn) {
    inquireBtn.onclick = function () {
      closeSpecsModal();
      if (typeof openModal === "function") {
        openModal(item.name);
      }
    };
  }

  modal.style.setProperty("display", "flex", "important");
  modal.classList.add("show", "active");
}

function createAccordionSection(container, title, detailsArray, isOpenByDefault) {
  const li = document.createElement("li");
  li.className = "spec-acc-item" + (isOpenByDefault ? " open" : "");

  // Accordion Header
  const headerBtn = document.createElement("button");
  headerBtn.type = "button";
  headerBtn.className = "spec-acc-header";
  headerBtn.innerHTML = `
    <span class="spec-acc-title">${title}</span>
    <span class="spec-acc-symbol">${isOpenByDefault ? "−" : "+"}</span>
  `;

  // Accordion Body (Clean 3-Column Spec Table)
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "spec-acc-body";

  const items = Array.isArray(detailsArray) ? detailsArray : [detailsArray];
  items.forEach(function (rowStr) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "spec-table-row";

    if (typeof rowStr === "string" && rowStr.includes("|")) {
      const cols = rowStr.split("|").map(function (c) { return c.trim(); });

      if (cols.length >= 3) {
        // 3 Columns: Label | Unit | Value
        rowDiv.innerHTML = `
          <span class="spec-col-label">${cols.at(0)}</span>
          <span class="spec-col-unit">${cols.at(1)}</span>
          <span class="spec-col-value">${cols.at(2)}</span>
        `;
      } else {
        // 2 Columns (Walang unit): Label | Blangko | Value
        rowDiv.innerHTML = `
          <span class="spec-col-label">${cols.at(0)}</span>
          <span class="spec-col-unit"></span>
          <span class="spec-col-value">${cols.at(1)}</span>
        `;
      }
    } else {
      // Single text fallback
      rowDiv.className = "spec-table-row single-col";
      rowDiv.innerHTML = `<span class="spec-col-label">${rowStr}</span>`;
    }

    bodyDiv.appendChild(rowDiv);
  });

  // Click Toggle
  headerBtn.onclick = function () {
    const isCurrentlyOpen = li.classList.contains("open");

    container.querySelectorAll(".spec-acc-item.open").forEach(function (openItem) {
      openItem.classList.remove("open");
      openItem.querySelector(".spec-acc-symbol").textContent = "+";
    });

    if (!isCurrentlyOpen) {
      li.classList.add("open");
      headerBtn.querySelector(".spec-acc-symbol").textContent = "−";
    }
  };

  li.appendChild(headerBtn);
  li.appendChild(bodyDiv);
  container.appendChild(li);
}

function closeSpecsModal() {
  const modal = document.getElementById("specsModal");
  if (modal) {
    modal.style.setProperty("display", "none", "important");
    modal.classList.remove("show", "active");
  }
}

window.addEventListener("click", function (event) {
  const specsModal = document.getElementById("specsModal");
  if (event.target === specsModal) {
    closeSpecsModal();
  }
});

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

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const toggleIcon = menuToggle.querySelector('i');

  if (!menuToggle || !mainNav) return;

  // Buksan o isara ang menu kapag pinindot ang burger button
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');

    if (mainNav.classList.contains('open')) {
      toggleIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  // Isara ang menu kapag pumili ng link ang user
  document.querySelectorAll('.main-nav .nav-item').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    });
  });

  // I-reset kung sakaling i-resize ang browser pabalik sa desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    }
  });
});

function selectCategory(category, btn) {
  const grid = document.getElementById("productGrid");
  const expandBtn = document.getElementById("expandBtn");

  // Automatic na mag-e-expand kapag pumili ng specific category
  grid.classList.remove("collapsed");
  grid.classList.add("expanded");
  expandBtn.innerHTML = "Itago ang Ibang Units ▲";

  // Tawagin ang dati mong filterProducts function
  filterProducts(category, btn);
}

function toggleExpandGrid() {
  const grid = document.getElementById("productGrid");
  const expandBtn = document.getElementById("expandBtn");

  if (grid.classList.contains("collapsed")) {
    grid.classList.remove("collapsed");
    grid.classList.add("expanded");
    expandBtn.innerHTML = "Itago ang Ibang Units ▲";
  } else {
    grid.classList.remove("expanded");
    grid.classList.add("collapsed");
    expandBtn.innerHTML = "Ipakita Lahat ng Units ▼";
  }
}

function openCategory(category, cardElement) {
  const displayArea = document.getElementById("productDisplayArea");
  const titleEl = document.getElementById("selectedCategoryTitle");

  if (cardElement.classList.contains("active-card") && displayArea.style.display === "block") {
    closeProducts();
    return;
  }

  document.querySelectorAll(".category-card").forEach(function (c) {
    c.classList.remove("active-card");
  });
  cardElement.classList.add("active-card");

  titleEl.textContent = category;
  displayArea.style.display = "block";

  filterProducts(category, null);
  displayArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeProducts() {
  document.getElementById("productDisplayArea").style.display = "none";
  document.querySelectorAll(".category-card").forEach(function (c) {
    c.classList.remove("active-card");
  });
}

window.addEventListener("load", function () {
  if (typeof products === "undefined") return;
  document.querySelectorAll(".category-card").forEach(function (card) {
    const cat = card.getAttribute("data-cat");
    const match = products.find(function (p) { return p.category === cat; });
    const imgEl = card.querySelector("img");
    if (match && imgEl) {
      // Kukunin ang unang string value na mukhang image path (.png, .jpg, .webp, data:image)
      const imgUrl = Object.values(match).find(function (v) {
        return typeof v === "string" && (v.includes("/") || v.includes(".png") || v.includes(".jpg") || v.includes(".webp"));
      });
      if (imgUrl) imgEl.src = imgUrl;
    }
  });
});

let openedCategory = null;

function showCategoryUnits(category, btn) {
  const grid = document.getElementById("productGrid");

  // Kapag pinindot ulit ang kasalukuyang nakabukas na button, itatago ang mga unit
  if (openedCategory === category && grid.style.display === "grid") {
    grid.style.display = "none";
    btn.classList.remove("active");
    openedCategory = null;
    return;
  }

  // Ipakita ang mga unit
  grid.style.display = "grid";
  openedCategory = category;
  filterProducts(category, btn);
}

function fillKubotaCardImages() {
  if (typeof products === "undefined") return;
  document.querySelectorAll(".kubota-card").forEach(function (card) {
    const cat = card.getAttribute("data-cat");
    const match = products.find(function (p) { return p.category === cat; });
    const imgEl = card.querySelector("img");
    if (match && imgEl) {
      const imgUrl = Object.values(match).find(function (v) {
        return typeof v === "string" && (v.includes("/") || v.includes(".png") || v.includes(".jpg") || v.includes(".webp"));
      });
      if (imgUrl) imgEl.src = imgUrl;
    }
  });
}

function openCategory(category, cardElement) {
  const displayArea = document.getElementById("productDisplayArea");
  const titleEl = document.getElementById("selectedCategoryTitle");

  if (cardElement.classList.contains("active-kubota") && displayArea.style.display === "block") {
    closeProducts();
    return;
  }

  document.querySelectorAll(".kubota-card").forEach(function (c) {
    c.classList.remove("active-kubota");
  });

  cardElement.classList.add("active-kubota");
  titleEl.textContent = category;
  displayArea.style.display = "block";

  filterProducts(category, null);
  displayArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeProducts() {
  document.getElementById("productDisplayArea").style.display = "none";
  document.querySelectorAll(".kubota-card").forEach(function (c) {
    c.classList.remove("active-kubota");
  });
}

fillKubotaCardImages();
document.addEventListener("DOMContentLoaded", fillKubotaCardImages);

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("home");
  const slidesContainer = document.getElementById("slidesContainer");
  const slides = document.querySelectorAll("#slidesContainer .slide");
  const dotsContainer = document.getElementById("sliderDots");
  let currentIndex = 0;
  let autoSlideInterval;

  // Gumawa ng dots
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll("#sliderDots .dot");

  function goToSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  window.changeSlide = function(step) {
    goToSlide(currentIndex + step);
    resetAutoSlide();
  };

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  slider.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
  slider.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".kubota-close-btn");
  const displayArea = document.getElementById("productDisplayArea");

  if (closeBtn && displayArea) {
    const hideBox = function (e) {
      e.preventDefault();
      e.stopPropagation();
      displayArea.style.setProperty("display", "none", "important");
    };

    closeBtn.addEventListener("click", hideBox);
    closeBtn.addEventListener("touchend", hideBox);
  }
});








