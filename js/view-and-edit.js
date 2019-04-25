let orderId = document.getElementById('orderId')
let userName = document.getElementById('userName')
let goodsItem = document.getElementById('goodsItem')
let button = document.getElementById('button')
let buttonDel = document.getElementById('buttonDel')
let getHref = location.href
let getNumberId = 0
let String = getHref.substring(getHref.lastIndexOf("=")+1);
if (parseInt(String) > -1) {
    getNumberId = String
} else {
    alert('Такого товара нет!')
}
// console.log({getHref});
// console.log({String});

getItem()

function getItem () {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=asdkjf943qf987a98d7f8974'
	const address = `/order/${getNumberId}`



	fetch(url + address + key, {
		method: 'GET',
		// body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {
            orderId.innerText = `Заявка № ${data.id}`
            userName.value = data.clientName
            goodsItem.innerText = `${data.good}`
            price.value = `${new Intl.NumberFormat('ru-RU').format(data.price)}`
            console.log(data);
		})
}
// console.log(sum.value);
// console.log(delSpace);
function saveChange (sum) {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=asdkjf943qf987a98d7f8974'
	const address = `/order/${getNumberId}`
	

    	const saveOrder = JSON.stringify({
		good: `${goodsItem.innerText}`,
		price: `${parseInt(sum)}`,
		clientName: `${userName.value}`,
		// managerName: `${data.managerName}`,
		paymentStatus: 0,
		requestStatus: 0
	})
    
    fetch(url + address + key, {
		method: 'PUT',
		body: saveOrder
	})
}

function deleteItem() {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=asdkjf943qf987a98d7f8974'
	const address = `/order/${getNumberId}`



	fetch(url + address + key, {
		method: 'DELETE',
		// body: newOrder
	})
		// .then(answer => answer.json())
		// .then(data => {
        //     orderId.innerText = `Заявка № ${data.id}`
        //     userName.value = data.clientName
        //     goodsItem.innerText = `${data.good}`
        //     price.value = `${data.price / 100}`
        //     console.log(data);
		// })
}


button.addEventListener('click', function() {
	let sum = document.getElementById('price')
	let delSpace = sum.value.replace(/\s/g, '').trim()

    saveChange(delSpace)
    window.location.replace(document.referrer);
})
buttonDel.addEventListener('click', function() {
    deleteItem()
    window.location.replace(document.referrer);
})

