const sessionResultsCanvas = document.getElementById('session-results-canvas');

export function displaySessionResults(productVotesDetails) {
    // display session results on page using Chart.js
    const votes = [];
    const labels = [];

    productVotesDetails.forEach(item => {
        votes.push(item.votes);
        labels.push(item.id);
    });

    const ctx = sessionResultsCanvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: ['#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73', '#2596FF', '#00FF73']
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
}