// 1. Datos iniciales
const datos = [
    { anio: 2021, col4: 28208168, col7: 59858196 },
    { anio: 2020, col4: 2820657, col7: 4983735 }
];

// 2. Funciones de lógica
function generarTabla() {
    const contenedor = document.getElementById("tabla-contenedor");
    if (!contenedor) return;

    let html = "<table><tr><th>Año</th><th>Col 4</th><th>Col 7</th></tr>";
    datos.forEach(d => {
        html += `<tr><td>${d.anio}</td><td>${d.col4}</td><td>${d.col7}</td></tr>`;
    });
    html += "</table>";
    contenedor.innerHTML = html;
}

function mostrarInfo() {
    alert("Este proyecto es parte de la iniciativa Talento Tech 2026 enfocada en energías renovables.");
}

function calcularEnergia() {
    const consumo = document.getElementById("consumo").value;
    const resultado = document.getElementById("resultado");

    if (consumo > 0) {
        resultado.innerText = "Energía estimada generada: " + (consumo * 0.85).toFixed(2) + " kWh eficientes.";
    } else {
        resultado.innerText = "Por favor, ingresa un valor válido.";
    }
}

// 3. Inicialización al cargar la página
window.onload = function () {
    generarTabla();

    // Gráfico mejorado
    const ctx = document.getElementById('graficoBarras');

    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo'],
                datasets: [{

                    label: 'Generación (kWh)',
                    data: [120, 190, 300],
                    backgroundColor: 'rgba(39, 174, 96, 0.6)',
                    borderColor: 'rgba(39, 174, 96, 1)',
                    borderWidth: 2,
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
};