document.addEventListener("DOMContentLoaded", () => {

    const botonesAgregar = document.querySelectorAll(".card .btn2");

    botonesAgregar.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const cards = document.querySelectorAll(".card");

            const nombre = cards[index].querySelector("h4").innerText;
            const precioTexto = cards[index].querySelector(".precio").innerText;
            const precio = parseInt(precioTexto.replace(/\D/g, ""));

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.push({ nombre, precio });

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Producto agregado al carrito 🛒");
        });
    });

});