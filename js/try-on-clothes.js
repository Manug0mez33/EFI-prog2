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

        // Agrega clases para mostrar el modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animacion de entrada
        setTimeout(() => {
            modalContent.classList.remove("scale-95", "opacity-0");
            modalContent.classList.add("scale-100", "opacity-100");
        }, 10);
    });
});

// Cerrar el Modal con el boton
closeModal.addEventListener('click', () => {
    close()
});

// Cerrar el Modal clickeando afuera de el
modal.addEventListener('click', e => {
    if (e.target === modal){
        close()
    }
  });

// Acciones que cierran el modal
const close = () =>{
    modalContent.classList.add("scale-95", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");
    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 200);
}