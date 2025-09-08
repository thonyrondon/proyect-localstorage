// CONSULTA DE LAS ESTADISTICAS DE FUTBOLISTAS DE DIFERENTES POSICIONES

//USO DE INPUT

const jugadores = [
  {
    id: 1,
    nombre: "Lionel Messi",
    edad: 36,
    posicion: "Delantero",
    equipo: "Inter Miami",
    nacionalidad: "Argentina",
    goles: 820,
    asistencias: 350,
  },
  {
    id: 2,
    nombre: "Cristiano Ronaldo",
    edad: 40,
    posicion: "Delantero",
    equipo: "Al-Nassr",
    nacionalidad: "Portugal",
    goles: 850,
    asistencias: 230,
  },
  {
    id: 3,
    nombre: "Kylian Mbappe",
    edad: 26,
    posicion: "Delantero",
    equipo: "Real Madrid",
    nacionalidad: "Francia",
    goles: 280,
    asistencias: 110,
  },
  {
    id: 4,
    nombre: "Kevin De Bruyne",
    edad: 34,
    posicion: "Centrocampista",
    equipo: "Napoli",
    nacionalidad: "Bélgica",
    goles: 120,
    asistencias: 210,
  },
  {
    id: 5,
    nombre: "Virgil van Dijk",
    edad: 33,
    posicion: "Defensa",
    equipo: "Liverpool",
    nacionalidad: "Países Bajos",
    goles: 45,
    asistencias: 20,
  },
  {
    id: 6,
    nombre: "Erling Haaland",
    edad: 24,
    posicion: "Delantero",
    equipo: "Manchester City",
    nacionalidad: "Noruega",
    goles: 170,
    asistencias: 50,
  },
  {
    id: 7,
    nombre: "Luka Modric",
    edad: 39,
    posicion: "Centrocampista",
    equipo: "AC Milan",
    nacionalidad: "Croacia",
    goles: 95,
    asistencias: 180,
  },
  {
    id: 8,
    nombre: "Pedri",
    edad: 22,
    posicion: "Centrocampista",
    equipo: "Barcelona",
    nacionalidad: "España",
    goles: 30,
    asistencias: 40,
  },
];

let datos;
const botonObtenerDato = document.getElementById("obtener-dato");
botonObtenerDato.addEventListener("click", () => {
  datos = document.getElementById("dato").value;
  //console.log(datos);
  //console.log(`La información del jugador ${datos} es:`);
  buscarJugador();
  localStorage.setItem("nombreDelJugador", JSON.stringify(jugadorFind));
});

//BUSCAR

let jugadorFind;
function buscarJugador() {
  jugadorFind = jugadores.find((jugador) => jugador.nombre === datos);

  const contenedor = document.querySelector(".info-jugador");

  if (jugadorFind) {
    const contribucionesGol = jugadorFind.goles + jugadorFind.asistencias;
    contenedor.innerHTML = `
      <h3>${jugadorFind.nombre}</h3>
      <p><strong>Edad:</strong> ${jugadorFind.edad}</p>
      <p><strong>Posición:</strong> ${jugadorFind.posicion}</p>
      <p><strong>Equipo:</strong> ${jugadorFind.equipo}</p>
      <p><strong>Nacionalidad:</strong> ${jugadorFind.nacionalidad}</p>
      <p><strong>Goles:</strong> ${jugadorFind.goles}</p>
      <p><strong>Asistencias:</strong> ${jugadorFind.asistencias}</p>
      <p><strong>Contribuciones de gol:</strong> ${contribucionesGol}</p>
    `;
  } else {
    contenedor.innerHTML = `<p>No se encontró ningún jugador con el nombre "${datos}".</p>`;
  }
}

const render = () => {
  let recipiente = document.querySelector(".jugadores");
  let html = "";

  jugadores.forEach((jugador) => {
    html += `
    <div class="pintar">
      <h3>Nombre: ${jugador.nombre}</h3>
      <button onclick="agregarJugador(${jugador.id})">Agregar</button>
    </div>
    
    
    `;
  });

  recipiente.innerHTML = html;
};

render();

let resultado = JSON.parse(localStorage.getItem("resultado")) || [];
const agregarJugador = (id) => {
  let jugadorEncontrado = jugadores.find((jugador) => jugador.id === id);
  resultado.push(jugadorEncontrado);
  localStorage.setItem("resultado", JSON.stringify(resultado));
};
