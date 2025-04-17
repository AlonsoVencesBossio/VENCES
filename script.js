const proyectos = [
  { nombre: <li><a href="#" onclick="loadMarkdown('referencia.md')">🤝 Referencias</a></li>, tecnologia: "JavaScript", categoria: "Web" },
  { nombre: "ToDo App", tecnologia: "React", categoria: "Web" },
  { nombre: "Gestor de gastos", tecnologia: "Python", categoria: "Backend" },
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

