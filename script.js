const proyectos = [
  { nombre: "Calculadora", tecnologia: "JavaScript", categoria: "Web", archivo: "calculadora.md" },
  { nombre: "ToDo App", tecnologia: "React", categoria: "Web", archivo: "todo-app.md" },
  { nombre: "Gestor de gastos", tecnologia: "Python", categoria: "Backend", archivo: "gestor-gastos.md" },
];

const contenedor = document.getElementById("proyectos");
const buscador = document.getElementById("buscador");

function mostrarProyectos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `<div class="proyecto">
      <h3><a href="${p.archivo}" target="_blank">${p.nombre}</a></h3>
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

