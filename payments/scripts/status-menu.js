	// Начало модального окна для статусов с кнопкой "Применить"
	$(document).on(
		"click",
		".__select-checkbox-status-js .__select__title-big",
		function () {
			$(".status-menu").toggleClass("active");
			$(".overlay").addClass("active");
		}
	);

	$(document).on("click", ".status-menu-label-js", function () {
		const item = $(this)[0];
		// item.classList.toggle('checked');
		item.querySelector("input").addEventListener("click", (ev) => {
			ev.stopPropagation();
		});
	});

	$(document).on("click", ".status-menu-close-ok-js", function () {
		const statusCheck = document.querySelector(".__select-checkbox-status-js");
		const statusTitleCheck = statusCheck.querySelector(".__select__title");
		const statusLabelsCheck = document.querySelectorAll(
			".status-menu-label-js"
		);

		let arrayCheckboxes = [];

		for (let statusLabelCheck of statusLabelsCheck) {
			statusLabelCheck.querySelector("input").classList.remove("selected");

			if (statusLabelCheck.querySelector("input").checked == true) {
				arrayCheckboxes.push(
					statusLabelCheck
						.querySelector(".checkbox_content")
						.textContent.toLowerCase()
				);
				statusLabelCheck.querySelector("input").classList.add("selected");
			}
		}

		if (!(arrayCheckboxes.length == 0)) {
			const str = arrayCheckboxes.join(", ");
			const formatStr = str[0].toUpperCase() + str.slice(1);
			statusTitleCheck.firstElementChild.textContent = formatStr;
			statusTitleCheck.style.color = "#1B254A";
			// for (let tariffLableCheck of tariffLabelsCheck){
			//   if (tariffLableCheck.querySelector('input').checked == true) {
			//     tariffLableCheck.querySelector('input').classList.add('selected');
			//   }
			// }
			arrayCheckboxes = [];
		} else {
			statusTitleCheck.firstElementChild.textContent = "Все статусы";
			statusTitleCheck.style.color = "#C6CBD6";
		}

		$(".status-menu").removeClass("active");
		$(".overlay").removeClass("active");
	});

  {
    let overlay = document.querySelector('.overlay-js');

    $(document).on("click", function (e) {


      if(e.target == overlay) {
   
        const statusCheck = document.querySelector(".__select-checkbox-status-js");
        const statusTitleCheck = statusCheck.querySelector(".__select__title");
        const statusLabelsCheck = document.querySelectorAll(
          ".status-menu-label-js"
        );
    
        let arrayCheckboxes = [];
    
        for (let statusLabelCheck of statusLabelsCheck) {
          statusLabelCheck.querySelector("input").checked = false;
    
          if (
            statusLabelCheck.querySelector("input").classList.contains("selected")
          ) {
            arrayCheckboxes.push(
              statusLabelCheck
                .querySelector(".checkbox_content")
                .textContent.toLowerCase()
            );
            statusLabelCheck.querySelector("input").checked = true;
          }
        }
        if (arrayCheckboxes.length == 0) {
          statusTitleCheck.firstElementChild.textContent = "Все статусы";

          statusTitleCheck.style.color = "#C6CBD6";
        } else {
          const str = arrayCheckboxes.join(", ");
          const formatStr = str[0].toUpperCase() + str.slice(1);
          statusTitleCheck.firstElementChild.textContent = formatStr;
          statusTitleCheck.style.color = "#1B254A";
          arrayCheckboxes = [];
        }

      }

    });

  }


	// Конец модального окна для статусов с кнопкой "Применить"