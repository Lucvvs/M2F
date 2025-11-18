// Obtener carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("carrito-lista");
const totalBox = document.getElementById("carrito-total");

function renderCarrito() {
    if (carrito.length === 0) {
        lista.innerHTML = "<p>No tienes productos en el carrito.</p>";
        totalBox.innerHTML = "";
        return;
    }

    // Mostrar productos
    lista.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <span>${item.nombre}</span>
            <span>$${item.precio.toLocaleString("es-CL")}</span>
        </div>
    `).join("");

    // TOTAL A PAGAR
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);

    totalBox.innerHTML = `
        Total a pagar: $${total.toLocaleString("es-CL")}
    `;
}

renderCarrito();

// BTN para pagar
document.getElementById("btn-pagar").addEventListener("click", () => {
    alert("Pago procesado correctamente ✔");
    localStorage.removeItem("carrito");
    window.location.href = "index.html";
});

// BTN vaciar carro
document.getElementById("btn-vaciar").addEventListener("click", () => {

    if (carrito.length === 0) {
        alert("El carrito ya está vacío.");
        return;
    }

    if (confirm("¿Seguro que deseas vaciar el carrito?")) {
        carrito = [];
        localStorage.removeItem("carrito");
        renderCarrito();
    }
});