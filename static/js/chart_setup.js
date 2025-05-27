if (window.studyRecords && window.studyRecords.length > 0) {
    const registros = window.studyRecords;

    const materiaHours = {};
    registros.forEach(registro => {
        if (materiaHours[registro.materia]) {
            materiaHours[registro.materia] += registro.horas;
        } else {
            materiaHours[registro.materia] = registro.horas;
        }
    });

    const labels = Object.keys(materiaHours);
    const data = Object.values(materiaHours);

    const ctx = document.getElementById('studyHoursChart').getContext('2d');
    const studyHoursChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Horas Estudadas por Matéria',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 8, // bordas arredondadas
                barPercentage: 0.6, // barras mais estreitas
                categoryPercentage: 0.7
            }]
        },
       options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Gráfico de Horas por Matéria',
            color: '#333',
            font: {
                size: 18,
                weight: 'bold'
            },
            padding: {
                top: 10,
                bottom: 20
            }
        },
        legend: {
            display: true,
            labels: {
                color: '#444',
                font: {
                    size: 14
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: '#eee'
            },
            title: {
                display: true,
                text: 'Horas',
                color: '#333'
            },
          ticks: {
          color: '#333',
          maxRotation: 45,   // máximo de rotação
          minRotation: 45,   // mínimo de rotação
          autoSkip: false    // não pule rótulos

            }
        },
        x: {
            grid: {
                color: '#f9f9f9'
            },
            title: {
                display: true,
                text: 'Matéria',
                color: '#333'
            },
            ticks: {
                color: '#333',
                maxRotation: 45,
                minRotation: 45,
                autoSkip: false
                    }
                }
            }
        }
    });
}

document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
