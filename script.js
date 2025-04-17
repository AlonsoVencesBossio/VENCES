const proyectos = [
  { nombre: "Mi información", tecnologia: "JavaScript", categoria: "Web" },
  { nombre: "Mis hobbies", tecnologia: "React", categoria: "Web" },
  { nombre: "Diamantes", tecnologia: "Python", categoria: "Backend" },
];

const contenedor = document.getElementById("proyectos");
const buscador = document.getElementById("buscador");

function mostrarProyectos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `<div class="proyecto">
      <h3>${p.nombre}</h3>
      <p>Tecnología: ${p.tecnologia}</p>
      <p>Categoría: ${p.categoria}</p>
    </div>`;
  });
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = proyectos.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.tecnologia.toLowerCase().includes(texto) ||
    p.categoria.toLowerCase().includes(texto)
  );
  mostrarProyectos(filtrados);
});

mostrarProyectos(proyectos);
