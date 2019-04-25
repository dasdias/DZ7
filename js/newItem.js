// let orderId = document.getElementById('orderId')
let userName = document.getElementById('userName')
let select
// let product = document.getElementById('inputGroupSelect01').value
// let product = document.getElementById('inputGroupSelect01').options.selectedIndex
// let select = document.getElementById('inputGroupSelect01').options[product].text
let sum = document.getElementById('price')
let button = document.getElementById('button')



document.getElementById('inputGroupSelect01').addEventListener('change', function () {

	let product = document.getElementById('inputGroupSelect01').options.selectedIndex
	let select = document.getElementById('inputGroupSelect01').options[product].text
// 
	function newItem () {
		const url = 'http://89.108.64.67:3000'
		const key = '?key=asdkjf943qf987a98d7f8974'
		const address = '/order'

		const newOrder = JSON.stringify({
			good: ` ${select}`,
			price: `${price.value * 100}`,
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
		newItem()
		// alert('Изменения сохранены.')
		window.location.replace(document.referrer).reload();
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
