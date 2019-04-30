;(function (){

    const url = 'http://89.108.64.67:3000'
	const key = '?key=asdkjf943qf987a98d7f8974'
    const address = '/orders'
    
    fetch(url + address + key, {
		method: 'DELETE',
		// body: newOrder
    })
        .then(answer => answer.json())
        .then(data => {})
        
    const dbRequest = {
        test () {
            console.log('test');
        },
        getList () {
            const path = url + '/orders' + key
            const params = { method: 'GET'}

            fetch(path, params)
            .then(answer => answer.json())
    		.then(data => {
                console.log(data);
            })
        },
        getOrderById () {

        },
        editOrderById () {

        },
        createrOrder () {

        }
    }
    window.dbRequest = dbRequest
}) ()