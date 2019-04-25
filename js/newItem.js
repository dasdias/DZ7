let userName = document.getElementById('userName');
let select;
let button = document.getElementById('button');


document.getElementById('inputGroupSelect01').addEventListener('change', function () {

	let product = document.getElementById('inputGroupSelect01').options.selectedIndex
	let select = document.getElementById('inputGroupSelect01').options[product].text
// 
	function newItem (sum) {
		const url = 'http://89.108.64.67:3000'
		const key = '?key=asdkjf943qf987a98d7f8974'
		const address = '/order'
		let delSpace = sum.value.replace(/\s/g, '').trim()

		const newOrder = JSON.stringify({
			good: ` ${select}`,
			price: `${parseInt(delSpace)}`,
			clientName:  `${userName.value}`,
			managerName: "Анастасия",
			paymentStatus: 0,
			requestStatus: 0
		})

		fetch(url + address + key, {
			method: 'POST',
			body: newOrder
		})
			// .then(answer => answer.json())
			// .then(data => {
			//     console.log(data);			
			// })
	}
	button.addEventListener('click', function() {
		let sum = document.getElementById('price')

		newItem(sum)
		window.location.replace(document.referrer)
	})

})

// console.log(location);
// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit
