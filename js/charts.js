// Delta State CNG Mass Transit Initiative - Chart Scripts

document.addEventListener('DOMContentLoaded', function() {
    // CapEx Breakdown Chart
    const capexCtx = document.getElementById('capexChart').getContext('2d');
    const capexChart = new Chart(capexCtx, {
        type: 'bar',
        data: {
            labels: ['Bus Procurement & Shipping'],
            datasets: [
                {
                    label: 'FOB Bus Cost',
                    data: [9.05],
                    backgroundColor: 'rgba(0, 100, 0, 0.7)',
                    borderColor: 'rgba(0, 100, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Freight Cost',
                    data: [1.05],
                    backgroundColor: 'rgba(0, 86, 179, 0.7)',
                    borderColor: 'rgba(0, 86, 179, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Freight Contingency (15%)',
                    data: [0.16],
                    backgroundColor: 'rgba(255, 193, 7, 0.7)',
                    borderColor: 'rgba(255, 193, 7, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
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
                    text: 'CapEx Breakdown for 50 Buses'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.raw;
                            label += '₦' + value.toFixed(2) + 'B';
                            return label;
                        }
                    }
                }
            }
        }
    });
    
    // PPP Comparison Chart
    const pppCtx = document.getElementById('pppComparisonChart').getContext('2d');
    const pppChart = new Chart(pppCtx, {
        type: 'bar',
        data: {
            labels: ['Initial CapEx (₦B)', 'Breakeven (Years)', '5-Year ROI (%)', '10-Year ROI (%)'],
            datasets: [
                {
                    label: 'Government-Funded',
                    data: [7.75, 5.2, 7.5, 310],
                    backgroundColor: 'rgba(211, 47, 47, 0.7)',
                    borderColor: 'rgba(211, 47, 47, 1)',
                    borderWidth: 1
                },
                {
                    label: 'PPP Model',
                    data: [5.0, 3.7, 16.4, 410],
                    backgroundColor: 'rgba(0, 100, 0, 0.7)',
                    borderColor: 'rgba(0, 100, 0, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Government-Funded vs PPP Model Comparison'
                }
            }
        }
    });
    // Revenue Model Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Passenger Fares', 'Logistics', 'Advertising', 'Fuel Commission'],
            datasets: [{
                label: 'Monthly Revenue (₦ Millions)',
                data: [37.5, 5, 2.5, 1.2],
                backgroundColor: [
                    'rgba(0, 100, 0, 0.7)',
                    'rgba(0, 86, 179, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(108, 117, 125, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 100, 0, 1)',
                    'rgba(0, 86, 179, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(108, 117, 125, 1)'
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
                        text: '₦ Millions'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Revenue Streams'
                },
                legend: {
                    display: false
                }
            }
        }
    });

    // OpEx Chart
    const opexCtx = document.getElementById('opexChart').getContext('2d');
    const opexChart = new Chart(opexCtx, {
        type: 'bar',
        data: {
            labels: ['CNG Bus', 'Diesel Bus', 'Petrol Bus'],
            datasets: [{
                label: 'Monthly Operating Expenses (₦ Millions)',
                data: [1.28, 3.19, 2.46],
                backgroundColor: [
                    'rgba(0, 100, 0, 0.7)',
                    'rgba(211, 47, 47, 0.7)',
                    'rgba(255, 152, 0, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 100, 0, 1)',
                    'rgba(211, 47, 47, 1)',
                    'rgba(255, 152, 0, 1)'
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
                        text: '₦ Millions'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Operating Expenses Comparison'
                }
            }
        }
    });

    // Savings Chart
    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    const savingsChart = new Chart(savingsCtx, {
        type: 'pie',
        data: {
            labels: ['Fuel Savings', 'Maintenance Savings', 'Lubricants Savings', 'Other OpEx Savings'],
            datasets: [{
                data: [1731600, 60000, 20000, 98400],
                backgroundColor: [
                    'rgba(0, 100, 0, 0.7)',
                    'rgba(0, 86, 179, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(108, 117, 125, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 100, 0, 1)',
                    'rgba(0, 86, 179, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(108, 117, 125, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Savings Breakdown (₦)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.raw;
                            label += new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value);
                            return label;
                        }
                    }
                }
            }
        }
    });

    // ROI Chart
    const roiCtx = document.getElementById('roiChart').getContext('2d');
    const roiChart = new Chart(roiCtx, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'],
            datasets: [
                {
                    label: 'Govt Model: Investment (₦B)',
                    data: [7.75, 8.0, 8.3, 8.6, 8.9, 9.2, 9.5, 9.8, 10.1, 10.4],
                    borderColor: 'rgba(211, 47, 47, 1)',
                    backgroundColor: 'rgba(211, 47, 47, 0.1)',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: 'Govt Model: Returns (₦B)',
                    data: [0.78, 1.95, 3.6, 5.7, 8.0, 10.8, 14.2, 18.0, 22.5, 27.5],
                    borderColor: 'rgba(211, 47, 47, 0.7)',
                    backgroundColor: 'rgba(211, 47, 47, 0.05)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true
                },
                {
                    label: 'PPP Model: Investment (₦B)',
                    data: [5.0, 5.2, 5.4, 5.6, 5.8, 6.0, 6.2, 6.4, 6.6, 6.8],
                    borderColor: 'rgba(0, 100, 0, 1)',
                    backgroundColor: 'rgba(0, 100, 0, 0.1)',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: 'PPP Model: Returns (₦B)',
                    data: [0.98, 2.4, 4.3, 6.8, 9.8, 13.2, 17.0, 21.5, 26.5, 32.5],
                    borderColor: 'rgba(0, 100, 0, 0.7)',
                    backgroundColor: 'rgba(0, 100, 0, 0.05)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true
                }
            ]
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
                    text: '10-Year ROI Projection'
                }
            }
        }
    });

    // Case Study Chart
    const caseStudyCtx = document.getElementById('caseStudyChart').getContext('2d');
    const caseStudyChart = new Chart(caseStudyCtx, {
        type: 'bar',
        data: {
            labels: ['Fuel Cost', 'Emissions', 'Maintenance Cost'],
            datasets: [{
                label: 'Percentage Reduction',
                data: [60, 25, 15],
                backgroundColor: 'rgba(0, 100, 0, 0.7)',
                borderColor: 'rgba(0, 100, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Reduction (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'CNG Impact from Case Studies'
                }
            }
        }
    });

    // Emissions Chart
    const emissionsCtx = document.getElementById('emissionsChart').getContext('2d');
    const emissionsChart = new Chart(emissionsCtx, {
        type: 'bar',
        data: {
            labels: ['CO₂', 'NOx', 'CO', 'PM', 'SO₂'],
            datasets: [
                {
                    label: 'Diesel Bus',
                    data: [100, 100, 100, 100, 100],
                    backgroundColor: 'rgba(211, 47, 47, 0.7)',
                    borderColor: 'rgba(211, 47, 47, 1)',
                    borderWidth: 1
                },
                {
                    label: 'CNG Bus',
                    data: [75, 20, 3, 10, 0],
                    backgroundColor: 'rgba(0, 100, 0, 0.7)',
                    borderColor: 'rgba(0, 100, 0, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Relative Emissions (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Emissions Comparison (Diesel = 100%)'
                }
            }
        }
    });
});