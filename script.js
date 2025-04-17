const proyectos = [
  { nombre: "Sobre mi", Descripción: "Pestaña que incluye información sobre mi vida", archivo: "sobremi.md" },
  { nombre: "Hobbies", Descripción: "Pestaña que incluye información sobre mis hobbies", archivo: "hobbie.md" },
  { nombre: "Arte", Descripción: "Pestaña que incluye distintas fotos sobre mis preferencias", archivo: "arte.md" },
];

const contenedor = document.getElementById("proyectos");
const buscador = document.getElementById("buscador");

function mostrarProyectos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `<div class="proyecto">
      <h3><a href="${p.archivo}" target="_blank">${p.nombre}</a></h3>
      <p>${p.Descripción}</p>
    </div>`;
  });
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = proyectos.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.Descripción.toLowerCase().includes(texto)
  );
  mostrarProyectos(filtrados);
});

mostrarProyectos(proyectos);

