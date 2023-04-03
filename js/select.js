document.querySelectorAll('.select').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.select__header')
	const dropDownList = dropDownWrapper.querySelector('.select__dropdown')
	const dropDownListItems = dropDownList.querySelectorAll(
		'.select__option'
	)
	const dropDownInput = dropDownWrapper.querySelector('.select__input')

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownWrapper.classList.toggle('select--active')
	})

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation()
			dropDownBtn.innerText = this.innerText
			dropDownBtn.focus()
			dropDownInput.value = this.dataset.value
			dropDownList.classList.remove('dropdown__list--visible')
		})
	})

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active')
			dropDownList.classList.remove('dropdown__list--visible')
		}
	})
})

const elRoot = document.querySelectorAll('.js-multiselect')

elRoot.forEach(event => {
	const elDisplay = event.querySelector('.js-multiselect__header')
	const elsText = event.querySelectorAll('.js-multiselect__text')
	const elsCheck = event.querySelectorAll('.js-multiselect__check')

	elDisplay.addEventListener('click', () => {
		event.classList.toggle('multiselect--active')
	})

	// Function to update the ui based on the state of options
	// Has a flag to force check/uncheck all the checkboxes in case Check all was clicked
	const updateDisplay = forceChecked => {
		const totalAmount = elsCheck.length
		// Maximum number of displayed items before collapsing happens
		const displayedAmount = 2
		const checkedTexts = []
		let resultText

		elsCheck.forEach((el, index) => {
			// Check/uncheck all checkboxes if Check all clicked
			if (forceChecked !== undefined) el.checked = forceChecked
			// Collect all texts from checked checkboxes for displaying them
			if (el.checked) checkedTexts.push(elsText[index].innerText)
		})

		// Count the number displayed in collapsed part
		const collapsedAmount = checkedTexts.length - displayedAmount

		// If anything is selected
		if (checkedTexts.length > 0) {
			// Get first 2 items separated by comma
			resultText = checkedTexts.join(', ')

			// Otherwise show a placeholder
		} else {
			resultText = ''
		}

		// Update value display
		elDisplay.innerText = resultText
	}

	// Each option is a checkbox, update ui on each checkbox change
	elsCheck.forEach(el => {
		el.addEventListener('change', () => updateDisplay())
	})

	// Update ui on page load, to prevent same logic in server side templates
	updateDisplay()
})
