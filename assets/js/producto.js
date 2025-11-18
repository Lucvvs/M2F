// 1. Base de datos simple de productos
const productos = [
    {
        id: 1,
        nombre: "Casco Integral X1",
        precio: 59990,
        descripcion: "Casco integral con certificación DOT, visor antiempañante y ventilación optimizada.",
        imagen: "assets/img/casco1.png"
    },
    {
        id: 2,
        nombre: "Guantes Racing Pro",
        precio: 24990,
        descripcion: "Guantes de protección reforzada, ventilación y agarre premium para conducción segura.",
        imagen: "assets/img/guantes1.png"
    },
    {
        id: 3,
        nombre: "Mochila Impermeable",
        precio: 34990,
        descripcion: "Mochila resistente al agua con 28L de capacidad y correas ajustables.",
        imagen: "assets/img/mochila1.png"
    }
];

// 2. Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 3. Buscar el producto correspondiente
const producto = productos.find(p => p.id === id);

// 4. Si no existe, mostrar error
if (!producto) {
    document.body.innerHTML = "<h2 style='text-align:center'>Producto no encontrado</h2>";
} else {

    // 5. Insertar datos en el HTML
    document.getElementById("producto-nombre").textContent = producto.nombre;

    document.getElementById("producto-precio").textContent = 
        "$" + producto.precio.toLocaleString("es-CL");

    document.getElementById("producto-descripcion").textContent = producto.descripcion;

    document.getElementById("producto-imagen").src = producto.imagen;
}