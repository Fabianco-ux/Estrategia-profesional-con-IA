(function(){
  document.addEventListener('DOMContentLoaded', init);

  function init(){
    initThemeFromStorage();
    initDarkToggle();
    initMenuToggle();
    initAlerts();
  }

  function initThemeFromStorage(){
    const saved = localStorage.getItem('theme');
    if(saved === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      const t = document.getElementById('darkToggle');
      if(t) t.checked = true;
    }
  }

  function initDarkToggle(){
    const toggle = document.getElementById('darkToggle');
    if(!toggle) return;
    toggle.addEventListener('change', () => {
      const dark = toggle.checked;
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  }

  function initMenuToggle(){
    const btn = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    if(!btn || !sidebar) return;
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  function initAlerts(){
    const list = document.getElementById('alerts-list');
    if(!list) return;
    const alerts = [
      { text: 'Revisión de costos en Finanzas', level: 'alta' },
      { text: 'Campaña de Marketing vence mañana', level: 'media' },
      { text: 'Capacitaciones RRHH pendientes', level: 'baja' },
    ];
    alerts.forEach(a => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = a.text;
      const badge = document.createElement('span');
      badge.textContent = a.level.toUpperCase();
      badge.style.fontWeight = '700';
      li.appendChild(label);
      li.appendChild(badge);
      list.appendChild(li);
    });
  }
})();
