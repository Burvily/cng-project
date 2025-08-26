// Delta State CNG Mass Transit Initiative - Chart Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded. Charts will not be displayed.');
        return;
    }

    // Revenue Model Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const revenueChart = new Chart(revenueCtx.getContext('2d'), {
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
    }

    // OpEx Chart
    const opexCtx = document.getElementById('opexChart');
    if (opexCtx) {
        const opexChart = new Chart(opexCtx.getContext('2d'), {
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
    }

    // Savings Chart
    const savingsCtx = document.getElementById('savingsChart');
    if (savingsCtx) {
        const savingsChart = new Chart(savingsCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Fuel Savings', 'Maintenance Savings', 'Lubricants Savings', 'Other OpEx Savings'],
                datasets: [{
                    data: [60, 25, 10, 5],
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
                        text: 'Cost Savings Breakdown'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // ROI Projection Chart
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        const roiChart = new Chart(roiCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Cumulative Savings (₦ Millions)',
                    data: [0, 45, 95, 150, 210],
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
                            text: '₦ Millions'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '5-Year ROI Projection'
                    }
                }
            }
        });
    }

    // Environmental Impact Chart
    const envCtx = document.getElementById('envChart');
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
                        text: 'Environmental Impact Reduction'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Fleet Comparison Chart
    const fleetCtx = document.getElementById('fleetChart');
    if (fleetCtx) {
        const fleetChart = new Chart(fleetCtx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Fuel Efficiency', 'Maintenance Cost', 'Environmental Impact', 'Passenger Capacity', 'Operating Cost', 'Reliability'],
                datasets: [{
                    label: 'CNG Buses',
                    data: [90, 85, 95, 80, 90, 85],
                    borderColor: 'rgba(0, 100, 0, 1)',
                    backgroundColor: 'rgba(0, 100, 0, 0.2)',
                    borderWidth: 2
                }, {
                    label: 'Diesel Buses',
                    data: [40, 30, 20, 85, 35, 70],
                    borderColor: 'rgba(211, 47, 47, 1)',
                    backgroundColor: 'rgba(211, 47, 47, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Fleet Performance Comparison'
                    }
                }
            }
        });
    }

    // Implementation Timeline Chart
    const timelineCtx = document.getElementById('timelineChart');
    if (timelineCtx) {
        const timelineChart = new Chart(timelineCtx.getContext('2d'), {
            type: 'horizontalBar',
            data: {
                labels: ['Feasibility Study', 'PPP Framework', 'Funding Allocation', 'Pilot Program', 'Full Rollout'],
                datasets: [{
                    label: 'Duration (Days)',
                    data: [14, 30, 45, 90, 180],
                    backgroundColor: [
                        'rgba(0, 100, 0, 0.7)',
                        'rgba(0, 86, 179, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(108, 117, 125, 0.7)',
                        'rgba(220, 53, 69, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 100, 0, 1)',
                        'rgba(0, 86, 179, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(108, 117, 125, 1)',
                        'rgba(220, 53, 69, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Days'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Implementation Timeline'
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Add chart responsiveness
    function makeChartsResponsive() {
        const charts = document.querySelectorAll('canvas');
        charts.forEach(canvas => {
            const chart = Chart.getChart(canvas);
            if (chart) {
                chart.resize();
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', makeChartsResponsive);

    // Add chart loading animations
    function addChartAnimations() {
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Animate in when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });
            
            observer.observe(container);
        });
    }

    // Initialize chart animations
    addChartAnimations();

    // Add chart export functionality
    function addChartExport() {
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            const exportBtn = document.createElement('button');
            exportBtn.className = 'btn btn-outline chart-export-btn';
            exportBtn.textContent = '📊 Export Chart';
            exportBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 0.8rem;
                padding: 5px 10px;
                z-index: 10;
            `;
            
            exportBtn.addEventListener('click', function() {
                const canvas = container.querySelector('canvas');
                if (canvas) {
                    const link = document.createElement('a');
                    link.download = 'chart.png';
                    link.href = canvas.toDataURL();
                    link.click();
                }
            });
            
            container.style.position = 'relative';
            container.appendChild(exportBtn);
        });
    }

    // Initialize chart export functionality
    addChartExport();

    // Add chart tooltips enhancement
    function enhanceChartTooltips() {
        const charts = document.querySelectorAll('canvas');
        charts.forEach(canvas => {
            const chart = Chart.getChart(canvas);
            if (chart) {
                // Custom tooltip content
                chart.options.plugins.tooltip = {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== undefined) {
                                label += new Intl.NumberFormat('en-NG', {
                                    style: 'currency',
                                    currency: 'NGN',
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                };
                chart.update();
            }
        });
    }

    // Initialize enhanced tooltips
    enhanceChartTooltips();
});
