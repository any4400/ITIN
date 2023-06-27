// функция добавления поля в DOM-элемент
const insertField = (el, index) => {
	el.append(
		$(`
    <div class="form-input-field-group flex form-input-field-group--js" data-index=${index}>
        <input class="form-input-field email-input--js" type="email" placeholder="Почта для получения уведомлений" name="email">
        <label for="email">Почта для получения уведомлений</label>
        <button class="user-settings__input__minus-btn minus-button--js" type="button"></button>
    </div>
  `)
	);
};

// функция удаления поля по индексу
const removeField = (index) => {
	$(".user-settings__inputs_group--js")
		.find(`[data-index='${index}']`)
		.remove();
};

$(document).ready(function () {
	let index = [...$(".ajax-emails input")].length;

	// добавление поля при нажатии на плюс
	$(document).on("click", ".plus-button--js", () => {
		insertField($(".user-settings__inputs_group--js"), ++index);
	});
});

// удаление поля по клику на минус рядом с полем
$(document).on("click", ".minus-button--js", (event) => {
	const index = event.target.closest(".form-input-field-group").dataset.index;
	removeField(index);
	$(".button--js").prop("disabled", false);
});
