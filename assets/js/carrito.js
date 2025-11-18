// Obtener carrito segun localstorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("carrito-lista");

if (carrito.length === 0) {
    lista.innerHTML = "<p>No tienes productos en el carrito.</p>";
} else {
    lista.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <span>${item.nombre}</span>
            <span>$${item.precio.toLocaleString("es-CL")}</span>
        </div>
    `).join("");
}

// Boton para pagar y alerta cas oexitoso
document.getElementById("btn-pagar").addEventListener("click", () => {
    alert("Pago procesado correctamente ✔");
    localStorage.removeItem("carrito");
    window.location.href = "index.html";
});