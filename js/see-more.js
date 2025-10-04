const products = [
    {
        id: 1,
        name: "Freskø GVNG",
        img : "IMG/FKO_NEGROv3.jpg",
        placeholder: "Remera oversize negra GVNG",
        description: "Remera Manga Corta Oversize con estampa frente y espalda, jersey 24:1 100% algodon.",
        price: "$25.499",
        size: "M, L, XL"
    },
    {
        id: 2,
        name: "Freskø A1 TEE",
        img: "IMG/A1_NEGRO.jpg",
        placeholder: "Remera oversize clásica negra A1",
        description: "Remera Manga Corta Oversize con estampa frente y espalda, jersey 24:1 100% algodon.",
        price: "$25.499",
        size: "S, M, L, XL, XXL"
    },
    {
        id: 3,
        name: "Freskø A1 TEE",
        img: "IMG/A1_BLANCA.jpg",
        placeholder: "Remera oversize clásica blanca A1",
        description: "Remera Manga Corta Oversize con estampa frente y espalda, jersey 24:1 100% algodon.",
        price: "$25.499",
        size: "M, L, XL, XXL"
    },
    {
        id: 4,
        name: "Freskø NIGHTMARE",
        img: "IMG/NIGHTMARE_BLANCO.jpg",
        placeholder: "Remera oversize blanca NIGHTMARE",
        description: "Remera Manga Corta Oversize con estampa frente y espalda, jersey 24:1 100% algodon.",
        price: "$25.499",
        size: "S, M, L, XL, XXL"
    },
    {
        id: 5,
        name: "Freskø Show No Mercy",
        img: "IMG/SHOWNOMERCY_BLANCO.jpg",
        placeholder: "Remera oversize negra SHOW NO MERCY",
        description: "Remera Manga Corta Oversize con estampa frente y espalda, jersey 24:1 100% algodon.",
        price: "$25.499",
        size: "S, M, L, XL"
    },
    {
        id: 6,
        name: "Freskø REBELLION hoodie",
        img: "IMG/fresko-hoodie6.jpg",
        placeholder: "Buzo canguro negro REBELLION",
        description: "Buzo con capucha de frisa gamuzada.",
        price: "$45.899",
        size: "M, L"
    },
    {
        id: 7,
        name: "Buzo canguro negro SOUL",
        img: "IMG/Buzo_SoulFreskoV2_NEGRO.jpg",
        placeholder: "Remera oversize blanca NIGHTMARE",
        description: "Buzo con capucha de frisa gamuzada.",
        price: "$45.899",
        size: "L, XL, XXL"
    },
    {
        id: 8,
        name: "Freskø cap",
        img: "IMG/gorra-fresko.jpg",
        placeholder: "Gorra A1 negra",
        description: "Impermeable, no tiene costuras. Es liviana. La banda de sudor es de secado rápido, absorbe la transpiración y la evapora, evitando manchas en la piel. Ligera, elegante e inteligente.",
        price: "$31.499",
        size: "1, 2"
    },
    {
        id: 9,
        name: "Freskø cap",
        img: "IMG/gorra-fresko2.jpg",
        placeholder: "Gorra A1 gris",
        description: "Impermeable, no tiene costuras. Es liviana. La banda de sudor es de secado rápido, absorbe la transpiración y la evapora, evitando manchas en la piel. Ligera, elegante e inteligente.",
        price: "$31.499",
        size: "1, 2"
    }
]


const container = document.getElementById("productsContainer")

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-500";
  card.innerHTML = `
    <img src="${p.img}" class="w-full h-64 object-cover" alt="${p.name}">
    <div class="p-6">
      <h5 class="text-xl font-bold mb-2">${p.name}</h5>
      <p class="text-gray-700 mb-4">${p.placeholder}</p>
      <a href="#" class="inline-block bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">Probar Prenda</a>
      <button data-id="${p.id}" class="verMas inline-block bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors ml-2">Ver Más</button>
    </div>
  `;
  container.appendChild(card);
});


const modal = document.getElementById("modal");
const modalContent = modal.querySelector("div");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPlaceholder = document.getElementById("modalPlaceholder");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalSize = document.getElementById("modalSize");
const closeModal = document.getElementById("closeModal");
const backToProducts = document.getElementById("backToProducts");
const modalSizes = document.getElementById("modalSizes");


document.addEventListener("click", e => {
  if (e.target.classList.contains("verMas")) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const product = products.find(p => p.id == id);

    modalImg.src = product.img;
    modalName.textContent = product.name;
    modalPlaceholder.textContent = product.placeholder;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    modalSizes.innerHTML = ""; // limpiar antes
    if (product.size) {
      product.size.split(",").forEach(talle => {
        const span = document.createElement("span");
        span.textContent = talle.trim();
        span.className = "w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-sm font-medium";
        modalSizes.appendChild(span);
      });
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  }
});

closeModal.addEventListener("click", () => close());
backToProducts.addEventListener("click", e => {
  e.preventDefault();
  close();
});
modal.addEventListener("click", e => { if (e.target === modal) close(); });

function close() {
  const modalContent = modal.querySelector("div");
  modalContent.classList.add("scale-95", "opacity-0");
  modalContent.classList.remove("scale-100", "opacity-100");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 200);
}
