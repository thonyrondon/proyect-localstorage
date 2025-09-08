let jugadoresResultado = JSON.parse(localStorage.getItem("resultado")) || [];

// console.log(jugadoresResultado);
let contenedor = document.querySelector(".jugadores-resultado");
jugadoresResultado.push();

const renderizarJugadores = () => {
  let contenedor = document.querySelector(".jugadores-resultado");
  let html = "";

  jugadoresResultado.forEach((jugador) => {
    html += `
            <div class="jugador">
			<h3>Nombre: ${jugador.nombre}</h3>
			<h5>Goles: ${jugador.goles}</h5>
      <h5>Asistencias: ${jugador.asistencias}</h5>
			<button onclick="eliminarPorId(${jugador.id})">Eliminar del resultado</button>
			</div>
			`;
  });

  contenedor.innerHTML = html;
};

renderizarJugadores();

let botonLimpiar = document.getElementById("limpiar");

botonLimpiar.addEventListener("click", () => {
  localStorage.removeItem("resultado");
  jugadoresResultado = [];
  renderizarJugadores();
});

const eliminarPorId = (id) => {
  let arraySinElDelId = jugadoresResultado.filter(
    (jugador) => jugador.id !== id
  );

  jugadoresResultado = arraySinElDelId;
  localStorage.setItem("resultado", JSON.stringify(jugadoresResultado));
  renderizarJugadores();
};
