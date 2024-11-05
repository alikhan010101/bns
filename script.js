

document.addEventListener('DOMContentLoaded', function () {
	// Example of chart initialization using Chart.js
	const ctx = document.getElementById('portfolioChart').getContext('2d')
	const portfolioChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [
				'окт 1',
				'ноб 5',
				'ноб 7'
				
			],
			datasets: [
				{
					label: 'Portfolio Value',
					data: [1000,1500,2000],
					borderColor: '#BB86FC',
					borderWidth: 2,
					fill: false,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					grid: {
						color: '#333',
					},
					ticks: {
						color: '#E0E0E0',
					},
				},
				x: {
					grid: {
						color: '#333',
					},
					ticks: {
						color: '#E0E0E0',
					},
				},
			},
		},
	})
})



// Данные покупателей
const buyers = [
	{ name: 'Ажыбеков Алихан', amount: 2.5 },
	{ name: 'Джунусбеков Алишер', amount: 2.5 },
	{ name: 'Кишенбоев Темирлан', amount: 2.25 },
	
]

// Увеличение курса BN
let bnRateIncrease = 0 // Например, 25% роста за всё время

// Добавление покупателей на страницу
const buyersList = document.getElementById('buyers-list')
buyers.forEach(buyer => {
	const li = document.createElement('li')
	li.innerHTML = `<span>${buyer.name}</span> <span>${buyer.amount} BN</span>`
	buyersList.appendChild(li)
})

// Отображение текущего роста курса BN
document.getElementById('bn-rate').textContent = `${bnRateIncrease}%`

let rateValueElement = document.getElementById('rate-value')
let progressBarElement = document.getElementById('progress-bar')
let targetRate = 100 // Целевой процент

let currentRate = 0
function animateRate() {
	if (currentRate < targetRate) {
		currentRate += 0.2 // Шаг анимации
		rateValueElement.textContent = currentRate.toFixed(1) + '%'
		progressBarElement.style.width = currentRate + '%'
		requestAnimationFrame(animateRate)
	} else {
		rateValueElement.textContent = targetRate + '%'
		progressBarElement.style.width = targetRate + '%'
	}
}

animateRate() // Запуск анимации




// 