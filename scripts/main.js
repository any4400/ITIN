$(document).ready(function () {
	// Начало переключения кнопки-"глаза" и отображения пароля
	$(document).on("click", ".eye-button--js", function() {
		$(this).toggleClass("eye-button--js_active");
		const isText = $(this).hasClass("eye-button--js_active");
		$(this).closest(".form-input-field-group--js").find("input").attr("type", isText ? "text" : "password");
	});
	// Конец переключения кнопки-"глаза" и отображения пароля

	// Контроль кнопок в форме
	// включение кнопок при вводе

	$(document).on("input", ".form--js", function () {
		$(".button--js").attr("disabled", false);
	});

	// отключение кнопок при нажатии на SUBMIT
	$(document).on("submit", ".form--js", function (e) {
		e.preventDefault();
		$(".button--js").attr("disabled", true);
	});
	// Контроль кнопок в форме

	// Начало логики селекторов для выбора количества строк на странице
	$(document).on("click", ".__select-count-js .__select__title", function (e) {
		let select = $(this).closest(".__select-count-js");
		let selectState = select.attr("data-state");

		selectState = (selectState === "active") ? "" : "active" ;

		$(select).attr("data-state", selectState);

		$(e.target)
			.closest(".__select-count-js")
			.find("label")
			.on("click", function (e) {
				$(this)
					.closest(".__select-count-js")
					.find(".__select__title")
					.text($(e.target).text());

				$(this).closest(".__select-count-js")[0].setAttribute("data-state", "");
			});
		});

		$(document).on("click", function(event) {
			if (!event.target.closest(".__select-count-js")) {
				$(".__select-count-js").attr("data-state", "");
			}
		});
	// Конец логики селекторов для выбора количества строк на странице

	// Начало логики кнопки "Загрузить автоматически"

	$(document).on('click','.button-download--js', function(e) {
		select = e.target.closest(".__select-count-js");

		if ("active" === select.getAttribute("data-state")) {
			$(select).attr("data-state", "");
			$(".button-download").removeClass("btn-active");
		}
		else {
			$(select).attr("data-state", "active");
			$(".button-download").addClass("btn-active");
		}

		$(document).on("click", function closeSelect(event) {
			if (!event.target.closest(".__select-count-js")) {
				select.setAttribute("data-state", "");
				$(".button-download").removeClass("btn-active");
				$(document).off("click", closeSelect);
			}
		});

		$(e.target)
		.closest(".__select-count-js")
		.find("label")
		.on("click", function (e) {
			$(this)
				.closest(".__select-count-js")
				.find(".__download__title")
				.text($(e.target).text());

			$(this).closest(".__select-count-js")[0].setAttribute("data-state", "");
			$(".button-download").removeClass("btn-active");

			$(this)
			.closest(".__select-count-js")
			.find(".__download__title")
			.attr(
				"href",
				$(e.target).closest(".__select__label").attr("data-default")
			);
		});
	})

	// Конец логики кнопки "Загрузить автоматически"

	// Начало логики селекторов в формах
	$(document).on("click", ".__select-form-js .__select__title", function (e) {
		select = e.target.closest(".__select-form-js");

		
		if ("active" === select.getAttribute("data-state")) {
			select.setAttribute("data-state", "");
		} else {
			$(document).find(".__select-form-js").attr("data-state",""); //закрываем все открытые селекты в форме
			select.setAttribute("data-state", "active");
		}
		$(document).on("click", function closeSelect(event) {
			if (!event.target.closest(".__select-form-js")) {
				select.setAttribute("data-state", "");
				$(document).off("click", closeSelect);
			}
		});

		$(e.target)
			.closest(".__select-form-js")
			.find("label")
			.on("click", function (e) {
				$(this)
					.closest(".__select-form-js")
					.find(".__select__title")
					.text($(e.target).text());
					$(this)
					.closest(".__select-form-js")
					.find(".__select__title")
					.css('color','#1B254A');
					$(select).find('.select_placeholder').addClass('visible');

				$(this).closest(".__select-form-js")[0].setAttribute("data-state", "");
				$(this)
					.closest(".__select-form-js")
					.find(".__select__title")
					.attr(
						"href",
						$(e.target).closest(".__select__label").attr("data-default")
					);
			});
	});
	// Конец логики селекторов в формах


	// Начало логики селекторов и открытие модального окна после
	$(document).on("click", ".__select-rows-js .__select__title", function (e) {
		let select = e.target.closest(".__select-rows-js");
		let selectTitle = select.querySelector(".__select__title");
		let selectLabels = select.querySelectorAll(".__select__label");

		if ("active" === select.getAttribute("data-state")) {
			select.setAttribute("data-state", "");
		} else {
			select.setAttribute("data-state", "active");
      

			$(document).on("click", function closeSelect(event) {
				if (!event.target.closest(".__select-rows-js")) {
					select.setAttribute("data-state", "");
					$(document).off("click", closeSelect);
				}
			});
		}
		selectLabels.forEach(function (item, i) {
			item.addEventListener("click", (evt) => {
				select.setAttribute("data-state", "");

				const modal = $(".modal-window");

				if (selectTitle.textContent !== evt.target.textContent) {
					if (modal) {
						const overlays = $(".overlay");

						overlays.addClass("active");
						modal.addClass("active");

						modal.find($(".btn-white")).on("click", () => {
							modal.removeClass("active");
							overlays.removeClass("active");
						});

						modal.find($(".btn-blue")).on("click", () => {
							selectTitle.textContent = evt.target.textContent;
							if (!select.classList.contains("__select-small")) {
								selectTitle.style.color = "#1B254A";
							}
							modal.removeClass("active");
							overlays.removeClass("active");
						});

							overlays.one("click", () => {
							modal.removeClass("active");
						});

					} else {
						selectTitle.style.color = "#1B254A";
					}
				}
			});
		});
	});
	// Конец логики селекторов и открытие модального окна после

	// Начало логики селектов с чекбоксами+селектов с поиском
	$(document).on("click", function (e) {
		//открываем
		let selectCurrent = $(e.target).closest(".__select-checkbox-js");

		if (
			e.target.closest(".__select__title ") ||
			(!e.target.closest(".__select-checkbox-js .__select__content") &&
				!e.target.closest(".btn-confirm--js") &&
				!e.target.closest(".reset__filters--js")&&
				!e.target.closest('.ui-datepicker')&&
				!e.target.closest('.ui-corner-all'))
		) {
			if (
				selectCurrent.attr("data-state") != "active" &&
				e.target.closest(".__select__title ")
			) {
				// console.log(1)
				$(this).find(".__filters").find(".__select").attr("data-state", "");

				selectCurrent.attr("data-state", "active");
			} // закрываем
			else if (selectCurrent.attr("data-state") == "active") {
				if (
					e.target.parentElement.classList.contains("__select-checkbox-js") ||
					e.target.parentElement.parentElement.classList.contains(
						"__select-checkbox-js"
					)
				) {
				    // console.log(2)

					selectCurrent.attr("data-state", "");
				} else {
				// console.log(3)

					$(".__select-checkbox-js").attr("data-state", "");
				}
			} else {
				// console.log(4)

				$(".__select-checkbox-js").attr("data-state", "");
			}
		} else if (
			e.target.closest(".__filters") &&
			!e.target.closest(".__filters .__select .__select__content")
		) {
			// console.log(5)

			$(this).find(".__filters").find(".__select").attr("data-state", "");

			if (e.target.closest(".btn-confirm--js")) {
				console.log(6)
				$(".__filters").attr("data-state", "");
				$(".filters-modal--js").removeClass("active");
				$(".overlay-js").removeClass("active");
			} else if (e.target.closest(".reset__filters--js")) {
				// console.log(7)

				// сброс всех фильтров
				$(".__filters")
					.find(".__select__title")
					.each(function () {
						// возращаем начальные значения всех селектов
						$(this).find("span").text($(this).attr("data-default"));
						$(this).css('color', '#C6CBD6');
					});
				$(".__filters").find("input").prop("checked", false); // сбрасываем все чекбоксы

					if($(".__filters").find(".date-input--js")) {
						// console.log(8)

						$(".__filters")
						.find(".date-input--js")
						.each(function () {
							// возращаем начальные значения всех селектов
							$(this).val('')
						});
					}
			}
		} else {
			if (!$(selectCurrent).hasClass("__filters")) {
				// console.log(9)

				let arrChecks = [];
				[...$(selectCurrent).find(".__select__content input:checked")].forEach(
					(check) => {
						arrChecks.push($(check).next().text());
					}
				);
				let str = arrChecks.join(", "); // используем если есть аббривиатуры
				let strLow = str.toLowerCase();

				if (strLow) {
					strLow = strLow[0].toUpperCase() + strLow.slice(1); // используем если нет аббривиатур
				}

				$(selectCurrent)
					.find(".__select__title:first")
					.find("span")
					.text(strLow);
				if (
					$(selectCurrent).hasClass("__select-search") ||
					$(selectCurrent).hasClass("__select-types") ||
					$(selectCurrent).hasClass("__select__suppliers")
				) {
					// классы с аббривиатурами
					$(selectCurrent)
						.find(".__select__title:first")
						.find("span")
						.text(str);
				}
				$(selectCurrent).find(".__select__title:first").css('color','#1B254A');

				if (arrChecks.length == 0) {
					// если ничего не выбрано, возвращаем начальные значения
					if ($(selectCurrent).find(".__select__title:first")) {
						$(selectCurrent)
						.find(".__select__title:first")
						.find("span")
						.text(
							$(selectCurrent)
								.find(".__select__title:first")
								.attr("data-default")
						);
					
					$(selectCurrent).find(".__select__title:first").css('color','C6CBD6');
					
					}
				}
			}
		}
	});
	// Конец логики селектов с чекбоксами+селектов с поиском

	//Начало визуализации поиска
	$(document).on("focus", ".search--js", function ({ target }) {
		const search = target;
		const btn = $(target).next(".search-clear-btn--js");
		btn.addClass("btn-active");

		btn.one("click", function () {
			search.value = "";
			search.dispatchEvent(new Event("keyup", { bubbles: true }));
			$(this).removeClass("btn-active");
		});

		$(target).on("blur", function (event) {
			if (event.relatedTarget !== $(this).next(".search-clear-btn--js")[0]) {
				$(this).next(".search-clear-btn--js").removeClass("btn-active");
			}
		});
	});
	//Конец визуализации поиска

	// Начало логики поиска
	$(document).on("keyup", ".search-wrapper-js .search--js", function (e) {
		let input = e.target,
			searchValue = input.value.toUpperCase();

		conentBlocks = e.target
			.closest(".search-wrapper-js")
			.querySelectorAll(".checkbox_wrapper");

		input.style.color = "#606E8C";

		for (let i = 0; i < conentBlocks.length; i++) {
			let txtValue =
				conentBlocks[i].querySelector(".checkbox_content").textContent;

			if (txtValue.toUpperCase().indexOf(searchValue) > -1) {
				conentBlocks[i].style.display = "";
			} else {
				conentBlocks[i].style.display = "none";
			}
		}
	});
	//Конец логики поиска

	// Начало открытия окна "Три точки" на десктопе
	$(document).on("click", ".table-menu-button--js", function ({ target }) {
		const tableMenu = target.closest("tr").querySelector(".table-menu--js");
		tableMenu.classList.toggle("table-menu_active");

		$(document).on("click", function handleTableClick({ target }) {
			tableMenu.classList.remove("table-menu_active");
			$(document).off("click", handleTableClick);
		});
	});

	// Конец открытия окна "Три точки" на десктопе

	// Начало открытия окна "Личный кабинет" на десктопе
	{
		const menuBtnWhite = document.querySelector(".header__profile--js");
		const menuSmall = document.querySelector(".header__menu-small--js");

		const handleProfileClick = (event) => {
			if (
				!event.target.closest(".header__profile--js") &&
				event.target !== menuSmall
			) {
				menuSmall.classList.remove("menu-active");
				document.removeEventListener("click", handleProfileClick);
			}
		};

		menuBtnWhite.addEventListener("click", () => {
			menuSmall.classList.toggle("menu-active");
			document.addEventListener("click", (event) => handleProfileClick(event));
		});
	}
	// Конец открытия окна "Личный кабинет" на десктопе

	// МОДАЛЬНЫЕ ОКНА

	// Закрытие модальных окон при клике на оверлей
	$(document).ready(function () {
		$(document).on("click", ".overlay", () => {
			$(".active").each((i, element) => {
				element.classList.remove("active");
			});
		});
	});
	// Закрытие модальных окон при клике на оверлей

	// Закрытие модальных окон при клике на оверлей
	$(document).on("click", ".modal-close-btn--js", function () {
		$(".active").removeClass("active");
	});
	// Закрытие модальных окон при клике на оверлей

	// Начало логики кнопок удаления
	$(document).on("click", ".table-button-delete--js", function () {
		const modal = $(".modal-delete-confirm");
		const overlays = $(".overlay");

		modal.addClass("active");
		overlays.addClass("active");

		modal.find($("button")).on("click", () => {
			modal.removeClass("active");
			overlays.removeClass("active");
		});
	});

	// Конец логики кнопок удаления

	// Кнопка комментариев

	$(document).on("click", ".table-button-comments--js", function () {
		const modal = $(".modal-comments");
		const overlays = $(".overlay");

		modal.addClass("active");
		overlays.addClass("active");

		modal.find($("button")).on("click", () => {
			modal.removeClass("active");
			overlays.removeClass("active");
		});
	});

	// Конец кнопки комментариев

	// Начало бокового меню
	let overlay = document.querySelector(".overlay-js"),
		menuBtn = document.querySelector(".menu__btn"),
		menu = document.querySelector(".aside-menu");

	// Уменьшение/увеличение бокового меню
	$(".aside-menu-btn-js").on("click", function () {
		$(".aside-menu").toggleClass("small");
	});
	// Уменьшение/увеличение бокового меню

	// Открытие/закрытие пунктов аккордеона (или появления маленького меню)

	$(document).on("click", ".accordion-js", function () {
		if ($(".aside-menu").hasClass("small")) {
			menu = $(this).siblings(".aside-menu-small-js");
			$(".aside-menu-small-js").removeClass("active");
			$(this).siblings(".aside-menu-small-js").addClass("active");

			// закрытие подменю по клику мимо
			$(document).on("click", function closeSmallMenu(e) {
				if (!e.target.closest(".li-accordion")) {
					$(".aside-menu-small-js.active").removeClass("active");
					$(document).off("click", closeSmallMenu);
				}
			});
		} else {
			$(".accordion-js").not($(this)).removeClass("active");
			$(".accordion-js").not($(this)).siblings(".panel").removeClass("active");

			$(this).toggleClass("active");
			$(this).siblings(".panel").toggleClass("active");
		}
	});

	$(document).on("click", ".menu__btn", function (e) {
		if (!menuBtn.classList.contains("active")) {
			$(".active").each((i, element) => {
				if (element === menuBtn) return;
				element.classList.remove("active");
				// overlay.css('z-index', 5);
			});
		}

		menuBtn.classList.toggle("active");
		overlay.classList.toggle("active");
		menu.classList.toggle("active");
	});

	// Конец бокового меню

	// Начало модального окна количества строк таблицы
	$(document).on("click", ".__select__title-small", function (e) {
		e.preventDefault();
		$(".row-count-menu").addClass("active");
		$(".overlay-js").addClass("active");

		$(".row-count-menu")
			.find(".row-count-menu-close-js")
			.on("click", function (e) {
				$(".__select__title-small").text($(e.target).text());
				$(".overlay-js").removeClass("active");
				$(".row-count-menu").removeClass("active");
			});
	});
	// Конец  модального окна количества строк таблицы

	// Начало  модального окна для кнопки "Три точки" таблицы ( и любого модального окна по классу - "modal-menu--js")
	$(document).on(
		"click",
		".table-menu-button--js , .modal-menu--js",
		function (e) {
			let overlay = document.querySelector(".overlay-js");
			let modal = document.querySelector(".modal-menu");

			let id = $(this).closest(".table-menu-wrapper--js").data("index");
			let name = $(
				`#ajaxUpdateList tr[data-index="${id}"] .stretch-130 a`
			).html();
			$(modal).find(".modal-menu-header").html(name);

			[...$(modal).find(".menu-close-js")].forEach((el) => {
				$(el)
					.find("a")
					.attr("href", $(el).find("a").attr("href") + id);
			});

			e.preventDefault();
			modal.classList.add("active");
			overlay.classList.add("active");
		}
	);

	$(document).on("click", ".menu-close-js", function () {
		var parentModal = this.closest(".modal-menu");
		parentModal.classList.remove("active");
		overlay.classList.remove("active");
	});

	// Конец модального окна для кнопки "Три точки" таблицы

	// Начало модального окна для фильтров
	$(document).on("click", ".btn_filters--js", function () {
		$(".filters-modal--js").toggleClass("active");
		$(".overlay").addClass("active");
		$(document).on("click", ".equipment-btn-confirm--js", function () {
			$(".filters-modal--js").removeClass("active");
			$(".overlay").removeClass("active");
		});
	});
	// Конец модального окна для фильтров

	
	// Начало модального окна Выход из аккаунта
	$(document).on("click", ".personal-menu-logout-js", function () {
		$(".modal-logout").addClass("active");
		$(".overlay").addClass("active");
		$(document).on("click", ".btn-logout--js", function () {
			$(".modal-logout").removeClass("active");
			$(".overlay").removeClass("active");
		});
	});
	// Конец модального окна Выход из аккаунта

	// Начало модального окна для тарифов с кнопкой "Применить"
	$(document).on(
		"click",
		".__select-checkbox-tariff-js .__select__title-big",
		function () {
			$(".tariff-menu").toggleClass("active");
			$(".overlay").addClass("active");
		}
	);

	$(document).on("click", ".tariff-menu-label-js", function () {
		const item = $(this)[0];
		// item.classList.toggle('checked');
		item.querySelector("input").addEventListener("click", (ev) => {
			ev.stopPropagation();
		});
	});

	$(document).on("click", ".tariff-menu-close-ok-js", function () {
		const tariffCheck = document.querySelector(".__select-checkbox-tariff-js");
		const tariffTitleCheck = tariffCheck.querySelector(".__select__title");
		const tariffLabelsCheck = document.querySelectorAll(
			".tariff-menu-label-js"
		);

		let arrayCheckboxes = [];

		for (let tariffLableCheck of tariffLabelsCheck) {
			tariffLableCheck.querySelector("input").classList.remove("selected");

			if (tariffLableCheck.querySelector("input").checked == true) {
				arrayCheckboxes.push(
					tariffLableCheck
						.querySelector(".checkbox_content")
						.textContent.toLowerCase()
				);
				tariffLableCheck.querySelector("input").classList.add("selected");
			}
		}

		if (!(arrayCheckboxes.length == 0)) {
			const str = arrayCheckboxes.join(", ");
			const formatStr = str[0].toUpperCase() + str.slice(1);
			tariffTitleCheck.firstElementChild.textContent = formatStr;
			tariffTitleCheck.style.color = "#1B254A";
			arrayCheckboxes = [];
		} else {
			tariffTitleCheck.firstElementChild.textContent = "Все тарифы";
			tariffTitleCheck.style.color = "#C6CBD6";
		}

		$(".tariff-menu").removeClass("active");
		$(".overlay").removeClass("active");
	});

  {
    let overlay = document.querySelector('.overlay-js');

    $(document).on("click", function (e) {

      if(e.target == overlay && document.querySelector(".__select-checkbox-tariff-js")) {
        const tariffCheck = document.querySelector(".__select-checkbox-tariff-js");
        const tariffTitleCheck = tariffCheck.querySelector(".__select__title");
        const tariffLabelsCheck = document.querySelectorAll(
          ".tariff-menu-label-js"
        );
    
        let arrayCheckboxes = [];
    
        for (let tariffLableCheck of tariffLabelsCheck) {
          tariffLableCheck.querySelector("input").checked = false;
    
          if (
            tariffLableCheck.querySelector("input").classList.contains("selected")
          ) {
            arrayCheckboxes.push(
              tariffLableCheck
                .querySelector(".checkbox_content")
                .textContent.toLowerCase()
            );
            tariffLableCheck.querySelector("input").checked = true;
          }
        }
        if (arrayCheckboxes.length == 0) {
          tariffTitleCheck.firstElementChild.textContent = "Все тарифы";
          tariffTitleCheck.style.color = "#C6CBD6";
        } else {
          const str = arrayCheckboxes.join(", ");
          const formatStr = str[0].toUpperCase() + str.slice(1);
          tariffTitleCheck.firstElementChild.textContent = formatStr;
          tariffTitleCheck.style.color = "#1B254A";
          arrayCheckboxes = [];
        }
      }
    });
  }


	// Конец модального окна для тарифов с кнопкой "Применить"

	// Начало модального окна личного кабинета

	$(document).on("click", ".personal-btn-js", function () {
		let overlay = document.querySelector(".overlay-js");
		let personalMenu = document.querySelector(".personal-menu");

		$(".active").each((i, element) => {
			element.classList.remove("active");
		});

		personalMenu.classList.toggle("active");
		overlay.classList.toggle("active");
	});

	$(document).on("click", ".personal-menu-close-js", function () {
		var parentModal = this.closest(".personal-menu");
		parentModal.classList.remove("active");
		if(!$(this).hasClass('personal-menu-logout-js')) {
			overlay.classList.remove("active");
		}
	});

	// Конец модального окна личного кабинета

	// МОДАЛЬНЫЕ ОКНА

	// ТАБЛИЦА

	// Иконки сортировки
	$(document).on("click", ".sort-none", function (e) {
		$(".sort-up").addClass("sort-none");
		$(".sort-down").addClass("sort-none");
		$(".sort-up").removeClass("sort-up");
		$(".sort-down").removeClass("sort-down");
		$(this).addClass("sort-down");
	});
	$(document).on("click", ".sort-up", function (e) {
		$(this).removeClass("sort-up");
		$(this).addClass("sort-down");
	});
	$(document).on("click", ".sort-down", function (e) {
		$(this).removeClass("sort-down");
		$(this).addClass("sort-up");
	});
	// Иконки сортировки

	// фиксирование хедера таблицы

	const thead = document.querySelector("thead");
	let theadTop;
	if (thead) theadTop = thead.getBoundingClientRect().top + window.pageYOffset;

	if (thead) {
		$(document).on("scroll", function () {
			const theads = document.querySelectorAll("thead");
			const thList = document.querySelectorAll("th");
			const tableMenu = document.querySelector(".table-menu-group--js");
			const tableMenuHeader = document.querySelector(
				".table-menu-wrapper_header--js"
			);
			const y = window.scrollY;
			const width = window.innerWidth;

			if (y > theadTop) {
				const calc = y - theadTop;

				if (width >= 1200) {
					theads.forEach(thead => (thead.style.transform = `translateY(${calc - 10}px)`));
					thList.forEach(th => (th.style.paddingTop = "60px"));

					if (tableMenu) {
            tableMenuHeader.style.paddingTop = "68px";

            if (tableMenuHeader.classList.contains('table-menu-wrapper_elements-group')) {
              tableMenuHeader.style.paddingTop = "52px";
            }
					}
				} else if (width >= 768) {
          theads.forEach(thead => (thead.style.transform = `translateY(${72 + calc - 10}px)`));
					thList.forEach(
						(th) => (th.style.cssText = "padding-top: 57px !important;")
					);
					if (tableMenu) {
            tableMenuHeader.style.cssText = "padding-top: 56px !important;";

            if (tableMenuHeader.classList.contains('table-menu-wrapper_elements-group')) {
              tableMenuHeader.style.cssText = "padding-top: 42px !important;";
            }
					}
				}
			} else {
				theads.forEach(thead => thead.style.cssText = "");
				thList.forEach((th) => (th.style.cssText = ""));

				if (tableMenu) {
					tableMenuHeader.style.cssText = "";
					tableMenu.style.cssText = "";
				}
			}
		});
	}

	// фиксирование хедера таблицы

	// подсчет отмеченных строк
	const checkedValue = () => {
		const checkboxes = document
			.querySelector("table")
			.querySelectorAll("input");
		let counter = 0;
		for (const checkox of checkboxes) {
			if (checkox.checked && !checkox.closest("th")) counter++;
		}
		return counter;
	};

	const changeSelectedText = () => {
		$(".selected-text--js").text("Отмечено: " + checkedValue());
		if (checkedValue()) {
			$(".selected-text--js").parent().removeClass("hidden");
		} else {
			$(".selected-text--js").parent().addClass("hidden");
		}
	};

	// поиск кнопки-всплывашки для соответствующей строки
	let searchButton = (row) => {
		const buttons = document.querySelectorAll(".table-menu-wrapper--js");

		for (const button of buttons) {
			if (button.dataset.index === row.dataset.index) {
				return button;
			}
		}
	};

	// поиск строки для соответствующей кнопки
	let searchRow = (button) => {
		const rows = document.querySelectorAll("tr");

		for (const row of rows) {
			if (button.dataset.index === row.dataset.index) {
				return row;
			}
		}
	};

	// выделение строки при наведении на столбцы
	$(document).on("mousemove", "tr", ({ target }) => {
		const row = target.closest("tr");
		if (row.querySelector("th")) return;

		row.classList.remove("tr-hover");
		row.classList.add("tr-hover");
		if (searchButton(row)) {
			searchButton(row).closest("tr").classList.add("tr-hover");
		}
	});

	// выделение строки при наведении на меню
	$(document).on("mousemove", ".table-menu-wrapper--js", function () {
		const button = $(this)[0];
		button.classList.add("tr-hover");

		if (searchRow(button)) {
			searchRow(button).classList.add("tr-hover");
		}
	});

	// снятие выделения
	$(document).on("mouseout", "tr", ({ target }) => {
		const row = target.closest("tr");
		if (row.querySelector("th")) return;

		row.classList.remove("tr-hover");
		if (searchButton(row)) {
			searchButton(row).closest("tr").classList.remove("tr-hover");
		}
	});

	// снятие выделения для меню
	$(document).on("mouseout", ".table-menu-wrapper--js", function () {
		const button = $(this)[0];
		button.classList.remove("tr-hover");

		if (searchRow(button)) {
			searchRow(button).classList.remove("tr-hover");
		}
	});

	// выделение и проставление "галочки" по клику на строку
	$(document).on("click", "tr", ({ target }) => {
		if (!$(target).attr("href")) {
			const row = target.closest("tr");
			if (row.querySelector("th")) return;

			row.classList.toggle("tr-checked");
			const closestCheckbox = row.querySelector("input[type=checkbox]");
			if (closestCheckbox) closestCheckbox.checked = !closestCheckbox.checked;
			if (searchButton(row)) {
				searchButton(row).closest("tr").classList.toggle("tr-checked");
			}
			changeSelectedText();
		}
	});

	// выделение фона при проставлении "галочки"
	$(document).on("change", "table input", function ({ target }) {
		const checkboxes = document
			.querySelector("table")
			.querySelectorAll("input");

		if (target.closest("th")) {
			for (const otherCheckox of checkboxes) {
				if (otherCheckox !== target) {
					const row = otherCheckox.closest("tr");

					if (target.checked) {
						otherCheckox.checked = true;
						row.classList.add("tr-checked");
						if (searchButton(row)) {
							searchButton(row).closest("tr").classList.add("tr-checked");
						}
					} else {
						otherCheckox.checked = false;
						row.classList.remove("tr-checked");
						if (searchButton(row)) {
							searchButton(row).closest("tr").classList.remove("tr-checked");
						}
					}
				}
			}
			changeSelectedText();

			return;
		}

		const row = target.closest("tr");
		row.classList.toggle("tr-checked");
		if (searchButton(row)) {
			searchButton(row).closest("tr").classList.toggle("tr-checked");
		}

		if (!target.checked) {
			checkboxes[0].checked = false;
		}
		changeSelectedText();
	});

	// сброс отмеченных строк
	$(document).on("click", ".reset--js", function () {
		const checkboxes = document
			.querySelector("table")
			.querySelectorAll("input");
		for (const checkox of checkboxes) {
			checkox.checked = false;
			const row = checkox.closest("tr");
			row.classList.remove("tr-checked");
			if (checkox !== checkboxes[0]) {
				if (searchButton(row)) {
					searchButton(row).closest("tr").classList.remove("tr-checked");
				}
			}
			changeSelectedText();
		}
	});

	// ТАБЛИЦА

  // ТАБЫ

  $(document).on('click', '.tab--js', function () {
    const tabTitle = $(this).data('tab');
    $('.active-tab').removeClass('active-tab');
    $(this).closest('.tab').addClass('active-tab');

    $('.current-tab-page').removeClass('current-tab-page');    
    $(document).find(`[data-page=${tabTitle}]`).addClass('current-tab-page');
  });

  // ТАБЫ

  // КНОПКА СОХРАНЕНИЯ

  $(document).on('click', '.save-button--js', function() {
    // const modal = $(".modal-save-error"); // неудачное сохранение
    const modal = $(".modal-changes"); // удачное сохранение
		const overlays = $(".overlay");

		modal.addClass("active");
		overlays.addClass("active");

		modal.find($("button")).on("click", () => {
			modal.removeClass("active");
			overlays.removeClass("active");
		});
  });

  // КОНЕЦ КНОПКА СОХРАНЕНИЯ

  // ФОРМАТИРОВАНИЕ ЧИСЛА (РАЗДЕЛЕНИЕ НА РАЗРЯДЫ)

  const formatFIeldWithRoubles = field => {
    let val = field.val().replace(/[^0-9.]/g, '');
    if (val.length === 0) {
      field.val('');
      return;
    }

    if (val.indexOf(".") != '-1') {
      val = val.substring(0, val.indexOf(".") + 3);
    }

    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    field.val(val + ' ₽');
  };

  $('.format-number-field--js').each(function () {
    formatFIeldWithRoubles($(this));
  });

  $.fn.setCursorPosition = function(pos) {
    this.each(function(index, elem) {
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    });
    return this;
  };

  $(document).on('input', '.format-number-field--js', function ({target}) {
    formatFIeldWithRoubles($(target));
    $(target).setCursorPosition($(target).val().length - 2);
  });

  // КОНЕЦ ФОРМАТИРОВАНИЕ ЧИСЛА (РАЗДЕЛЕНИЕ НА РАЗРЯДЫ)

  // ПОЯВЛЕНИЕ СПРАВКИ

  $(document).on('click', '.help-icon--js', function () {
    const currentInfo = $(this);
    $(this).next('.help-info--js').fadeToggle();

    $(document).one('click', function ({target}) {
      if ($(target).closest('.help-icon--js').is(currentInfo)) return;
      currentInfo.next('.help-info').fadeOut();
    });
  });

  // КОНЕЦ ПОЯВЛЕНИЕ СПРАВКИ
	
// ПРЕЛОАДЕР
	const setPreloader = element => {
		const wrapper = $('<div class="preloader-wrapper"></div>');

		$(element).addClass('loading');
		$(element).prepend(wrapper);

		const preloaderSvg = `
			<svg class="preloader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" width="234px" height="234px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<rect x="18.5" y="27.5" width="13" height="45" fill="#3546e9" style="animation-play-state: running; animation-delay: 0s;">
			<animate attributeName="y" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="7.25;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.21052631578947367s" style="animation-play-state: running; animation-delay: 0s;"></animate>
			<animate attributeName="height" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="85.5;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.21052631578947367s" style="animation-play-state: running; animation-delay: 0s;"></animate>
			</rect>
			<rect x="43.5" y="27.5" width="13" height="45" fill="#3546e9" style="animation-play-state: running; animation-delay: 0s;">
			<animate attributeName="y" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="12.312500000000007;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.10526315789473684s" style="animation-play-state: running; animation-delay: 0s;"></animate>
			<animate attributeName="height" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="75.37499999999999;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.10526315789473684s" style="animation-play-state: running; animation-delay: 0s;"></animate>
			</rect>
			<rect x="68.5" y="27.5" width="13" height="45" fill="#3546e9" style="animation-play-state: running; animation-delay: 0s;">
			<animate attributeName="y" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="12.312500000000007;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" style="animation-play-state: running; animation-delay: 0s;"></animate>
			<animate attributeName="height" repeatCount="indefinite" dur="1.0526315789473684s" calcMode="spline" keyTimes="0;0.5;1" values="75.37499999999999;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" style="animation-play-state: running; animation-delay: 0s;"></animate>
			</rect>
			</svg>
		`;

		$('.preloader-wrapper').append($(preloaderSvg));
	};

	const removePreloader = element => {
		// console.log(!element)
		if (!element) {
			$('.preloader-wrapper').remove();
			$('.loading').removeClass('loading');
			return;
		}

		$(element).find('.preloader-wrapper').remove();
		$(element).removeClass('loading');
	};

	// КОНЕЦ ПРЕЛОАДЕР
});
