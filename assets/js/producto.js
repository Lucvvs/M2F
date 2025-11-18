// variables de productos
const productos = [
    {
        id: 1,
        nombre: "Casco SHAFT SP502",
        precio: 59990,
        descripcion: "Casco integral con certificación DOT, visor antiempañante y ventilación optimizada.",
        imagen: "assets/img/casco1.png"
    },
    {
        id: 2,
        nombre: "Guantes Racing ALPINESTAR",
        precio: 24990,
        descripcion: "Guantes de protección reforzada, ventilación y agarre premium para conducción segura.",
        imagen: "assets/img/guantes1.png"
    },
    {
        id: 3,
        nombre: "Mochila Impermeable MOTOCENTRIC 35L",
        precio: 34990,
        descripcion: "Mochila resistente al agua con 28L de capacidad y correas ajustables.",
        imagen: "assets/img/mochile1.png"
    }
];

// Obtener ID 
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const producto = productos.find(p => p.id === id);

// DOM
const nombreEl = document.getElementById("producto-nombre");
const precioEl = document.getElementById("producto-precio");
const descEl   = document.getElementById("producto-descripcion");
const imgEl    = document.getElementById("producto-imagen");
const btnAgregar = document.querySelector(".producto-info .btn2");

if (!producto) {
    document.body.innerHTML = "<h2 style='text-align:center'>Producto no encontrado</h2>";
} else {
 
    nombreEl.textContent = producto.nombre;
    precioEl.textContent = "$" + producto.precio.toLocaleString("es-CL");
    descEl.textContent   = producto.descripcion;
    imgEl.src            = producto.imagen;

    // Evento para agregar al carrito en DETALLE_PRODUCTO
    btnAgregar.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio
        });

        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert("Producto agregado al carrito 🛒");
    });
}