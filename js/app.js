const width = window.innerWidth

if (width > 820) {
	const banksSlider = new Swiper('.banks__slider', {
		slidesPerView: 5,
		grabCursor: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		breakpoints: {
			820: {
				spaceBetween: 24
			},
			1239: {
				spaceBetween: 35
			}
		}
	})
}

if (width < 820) {
	const subscribeSlider = new Swiper('.subscribe__slider', {
		slidesPerView: 1,
		grabCursor: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		breakpoints: {
			820: {
				spaceBetween: 24
			},
			1239: {
				spaceBetween: 35
			}
		}
	})
}

const testimonialSlider = new Swiper('.testimonial__slider', {
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	breakpoints: {
		320: {
			slidesPerView: 1
		},
		820: {
			spaceBetween: 20,
			slidesPerView: 'auto'
		},
		1239: {
			spaceBetween: 72,
			slidesPerView: 3
		}
	}
})
