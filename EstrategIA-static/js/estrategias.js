(function(){
  document.addEventListener('DOMContentLoaded', init);

  function init(){
    const form = document.getElementById('strategyForm');
    const addTaskBtn = document.getElementById('addTask');
    const exportBtn = document.getElementById('exportPDF');
    const genIABtn = document.getElementById('genIA');

    // Tareas dinámicas
    addTaskBtn && addTaskBtn.addEventListener('click', addTaskRow);
    // Form submit
    form && form.addEventListener('submit', onSubmit);
    // Exportar visual
    exportBtn && exportBtn.addEventListener('click', () => window.print());
    // Simulación IA
    genIABtn && genIABtn.addEventListener('click', genIARecommendation);

    // Añadir primera fila por defecto
    addTaskRow();
  }

  function addTaskRow(){
    const list = document.getElementById('taskList');
    if(!list) return;
    const row = document.createElement('div');
    row.className = 'task-row';
    row.innerHTML = `
      <input type="text" name="tarea[]" placeholder="Tarea" required />
      <input type="text" name="responsable[]" placeholder="Responsable" required />
      <input type="date" name="plazo[]" placeholder="Plazo" required />
      <button type="button" class="btn remove">✕</button>
    `;
    const remove = () => row.remove();
    row.querySelector('.remove').addEventListener('click', remove);
    list.appendChild(row);
  }

  function onSubmit(e){
    e.preventDefault();
    const form = e.target;
    if(!form.checkValidity()){
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }
    const data = new FormData(form);
    const nombre = data.get('nombre');
    alert(`Estrategia "${nombre}" creada (simulado).`);
    form.reset();
    // Reiniciar tarea por defecto
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    addTaskRow();
  }

  function genIARecommendation(){
    const phrases = [
      'Recomendación: priorizar optimización de costos con foco en ROI trimestral.',
      'Sugerencia: reforzar marketing digital en segmentos con mayor conversión.',
      'Insight: reducir lead time en producción incrementará la capacidad efectiva.',
      'Acción: capacitar equipos clave para mejorar la retención en RRHH.',
      'Idea: prototipar soluciones de innovación con feedback temprano de clientes.'
    ];
    const out = document.getElementById('iaOutput');
    const pick = phrases[Math.floor(Math.random() * phrases.length)];
    out.textContent = pick;
  }
})();
