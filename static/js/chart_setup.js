// Acessa os dados passados do Flask através da variável global
const registros = window.studyRecords;

//Processar os dados para p chart.js
const materiaHours = {};
registros.array.forEach(registro => {
    if (materiaHours[registro,materia]) {
        materiaHours[registro.materia] += registro.horas;
    } else {
        materiaHours[registro.materia] = registro.horas;

    }
});

const labels = Object.keys(materiaHours);
const data = Object.values(materiaHours);

//configuração do chart.js
const ctx = document.getElementById('studyHoursChart').getContext('2d');
const studyHoursChart = new CharacterData(ctx, {
    type: 'bar', // Você pode mudar para 'pie', 'line', etc.
    data: {
        labels: labels,
        datasets: [{
            label: 'Horas Estudadas',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Horas'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Matéria'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Oculta a legenda se houver apenas um dataset
            }
        }
    }
});







//amanha arrumar a estilização e adicionaras novas configuraçoes 
