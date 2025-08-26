// Charts for Delta State CNG Mass Transit Initiative - Revenue Focus
// This file contains only revenue and business-focused charts

document.addEventListener('DOMContentLoaded', function() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const revenueChart = new Chart(revenueCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Passenger Fares', 'Logistics Services', 'Advertising', 'Fuel Commission'],
                datasets: [{
                    data: [450, 60, 30, 14.4],
                    backgroundColor: [
                        'rgba(0, 100, 0, 0.8)',
                        'rgba(0, 86, 179, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 100, 0, 1)',
                        'rgba(0, 86, 179, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(108, 117, 125, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Annual Revenue Breakdown (₦ Millions)'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Operational Projections Chart (Revenue Focus)
    const operationalCtx = document.getElementById('operationalChart');
    if (operationalCtx) {
        const operationalChart = new Chart(operationalCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Annual Revenue (₦ Billions)',
                    data: [0.80, 1.80, 1.80, 2.50, 2.50],
                    borderColor: 'rgba(0, 100, 0, 1)',
                    backgroundColor: 'rgba(0, 100, 0, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '₦ Billions'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '5-Year Revenue Growth Projection'
                    }
                }
            }
        });
    }

    // Case Study Chart
    const caseStudyCtx = document.getElementById('caseStudyChart');
    if (caseStudyCtx) {
        const caseStudyChart = new Chart(caseStudyCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['New Delhi', 'Lagos', 'Delta State (Projected)'],
                datasets: [{
                    label: 'CNG Bus Fleet Size',
                    data: [5500, 200, 300],
                    backgroundColor: [
                        'rgba(0, 100, 0, 0.7)',
                        'rgba(0, 86, 179, 0.7)',
                        'rgba(255, 193, 7, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 100, 0, 1)',
                        'rgba(0, 86, 179, 1)',
                        'rgba(255, 193, 7, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Buses'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'CNG Bus Fleet Comparison'
                    }
                }
            }
        });
    }

    // Environmental Impact Chart
    const envCtx = document.getElementById('emissionsChart');
    if (envCtx) {
        const envChart = new Chart(envCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['CO2 Reduction', 'NOx Reduction', 'PM Reduction', 'Other Benefits'],
                datasets: [{
                    data: [45, 30, 20, 5],
                    backgroundColor: [
                        'rgba(0, 100, 0, 0.8)',
                        'rgba(0, 86, 179, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 100, 0, 1)',
                        'rgba(0, 86, 179, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(108, 117, 125, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Environmental Benefits Distribution'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});
