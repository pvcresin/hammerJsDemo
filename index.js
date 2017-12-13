import 'hammerjs'

const square = document.querySelector('.square')

const hammer = new Hammer(square)

hammer.on('swipe', e => {
	if (e.deltaX > 0) {
		console.log('->')
	} else {
		console.log('<-')
	}
})