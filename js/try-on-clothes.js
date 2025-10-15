import { products } from "./see-more.js";

const modal = document.getElementById('modalProbador');
const closeModal = document.getElementById('closeModalProbador');
const modalContent = modal.querySelector('div');
const producTitle = document.getElementById('productTitle');
const productSizes = document.getElementById("productSizes");

document.querySelectorAll('.probarPrenda').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const product = products.find(p => p.id == id);
        producTitle.innerText=product.name
        productSizes.innerHTML = "";
        if (product.size) {
            product.size.split(",").forEach(talle => {
                const span = document.createElement("span");
                span.textContent = talle.trim();
                span.className = "w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-sm font-medium hover:bg-gray-700 hover:cursor-pointer hover:text-white";
                productSizes.appendChild(span);
            });
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        setTimeout(() => {
            modalContent.classList.remove("scale-95", "opacity-0");
            modalContent.classList.add("scale-100", "opacity-100");
        }, 10);
    });
});

closeModal.addEventListener('click', () => {
    modalContent.classList.add("scale-95", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");
    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 200);
});