const stringyResults = localStorage.getItem('results');
const results = JSON.parse(stringyResults);


const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('results-chart').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF', '#0084FF']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});