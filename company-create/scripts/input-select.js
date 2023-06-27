	// Начало логики селекторов c возможностью ввода
	$(document).on("click", function (e) {

		
        if($('#input-select').closest(".input__select--js").find('.input__select__content').children().length > 0) {

            if ($('#input-select').closest(".input__select--js").find('.__select__title input').is(":focus")) {
                $('#input-select').closest(".input__select--js").addClass('active__content');
                console.log(1);

                $('#input-select').closest(".input__select--js").find('.input__select__content').find('label').on('click', function(e) {

                    console.log($(e.target).text());
                    $(this)
					.closest(".input__select--js")
					.find(".__select__title")
					.find("input")
					.val($(e.target).text());
					$(this)
					.closest(".input__select--js")
					.find(".__select__title")
					.css('color','#1B254A');
                })
            }
            else {
                console.log(2);
                $('#input-select').closest(".input__select--js").removeClass('active__content');
            }
        }


    })


	// Конец логики селекторов c возможностью ввода