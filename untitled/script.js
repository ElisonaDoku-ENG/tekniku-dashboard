document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("searchInput").value;
  alert("You searched for: " + value);
});

const technicians = [
  {
    name: 'Altin Hoxha',
    role: 'Elektricist - Tiranë',
    info: `
      <p><strong>Eksperiencë:</strong> 4 vite | 25+ punë të përfunduara</p>
      <p><strong>Zona:</strong> Kombinat, Tiranë</p>
      <p><strong>Certifikime:</strong> Sisteme elektrike 220/380V</p>
      <p><strong>Disponibilitet:</strong> E hënë - E shtunë, 08:00-20:00</p>
      <p><strong>Klientët thonë:</strong> “I saktë dhe shumë korrekt në afate”</p>
      <p><strong>Tel:</strong> 068 473 1284</p>
    `
  },
  {
    name: 'Besart Kola',
    role: 'Hidraulik - Tiranë',
    info: `
      <p><strong>Eksperiencë:</strong> 3 vite | 40+ banjo të instaluara</p>
      <p><strong>Zona:</strong> Don Bosko, Tiranë</p>
      <p><strong>Trajnim:</strong> Sistemet e ujit të ngrohtë me presion</p>
      <p><strong>Disponibilitet:</strong> 24/7 për raste emergjente</p>
      <p><strong>Klientët thonë:</strong> “Zgjidh çdo problem pa vonesa”</p>
      <p><strong>Tel:</strong> 069 223 9456</p>
    `
  }
  // ... add more
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = technicians.filter(t =>
    t.name.toLowerCase().includes(value) ||
    t.role.toLowerCase().includes(value) ||
    t.info.toLowerCase().includes(value)
  );

  renderTechnicians(filtered);
});

function renderTechnicians(list) {
  const container = document.getElementById("technicianList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>Nuk u gjet asnjë rezultat.</p>";
    return;
  }

  list.forEach(tech => {
    const card = document.createElement("div");
    card.className = "technician-card";
    card.innerHTML = `
      <h3>${tech.name}</h3>
      <p><strong>${tech.role}</strong></p>
      ${tech.info}
    `;
    container.appendChild(card);
  });
}

// 🔄 optional: show all technicians on first load
renderTechnicians(technicians);

