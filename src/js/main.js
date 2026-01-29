let contador = 0;

const contadorSpan = document.getElementById("contador");
const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");

btnMas.addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;
});

btnMenos.addEventListener("click", () => {
    contador--;
    contadorSpan.textContent = contador;
});

// Buscador
const buscador = document.getElementById("buscador");
const items = document.querySelectorAll("#lista li");

buscador.addEventListener("keyup", () => {
    const texto = buscador.value.toLowerCase();

    items.forEach(item => {
        item.style.display = item.textContent
            .toLowerCase()
            .includes(texto)
            ? "block"
            : "none";
    });
});