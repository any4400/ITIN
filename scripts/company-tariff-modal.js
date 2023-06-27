
// $(document).ready(function () {
//   // функционал селекта
//   const selects = document.querySelectorAll('.__select-tariff-js');
//   const tariffMenu = document.querySelector('.tariff-menu');
//   const overlay = document.querySelector('.overlay-js');


//   for (let select of selects) {
//     let selectTitle = select.querySelector('.__select__title');
//     let selectLabels = document.querySelectorAll('.tafiff-menu-close-js');


//     selectLabels.forEach(function (item, i) {
//       item.addEventListener('click', (evt) => {
//         // появление модального окна

//         const modal = $('.modal-window');

//         if (selectTitle.textContent !== evt.target.textContent && modal) {
//           modal.addClass('modal-window_active');

//           modal.find($('.btn-white')).on('click', () => {
//             modal.removeClass('modal-window_active');
//             overlay.classList.remove('active');
//           });

//           modal.find($('.btn-blue')).on('click', () => {
//             selectTitle.textContent = evt.target.textContent;
//             if (!select.classList.contains('__select-small')) {
//               selectTitle.style.color = "#1B254A";
//             }
//             modal.removeClass('modal-window_active');
//             overlay.classList.remove('active');
//           });

//           overlay.addEventListener('click', () => {
//             modal.removeClass('modal-window_active');
//             overlay.classList.remove('active');
//           });
//         }
//         else {
//           selectTitle.textContent = evt.target.textContent;
//           selectTitle.style.color = "#1B254A";
//           overlay.classList.remove('active');
//         }
//         tariffMenu.classList.remove('active');
//       }
//       );
//     }
//     );
//   }
// });

$(document).on('click', '.__select-tariff-js', function () {
  const tariffMenu = document.querySelector('.tariff-menu');
  const overlay = document.querySelector('.overlay-js');
  const select = $(this)[0];
  let selectTitle = select.querySelector('.__select__title');
  let selectLabels = document.querySelectorAll('.tafiff-menu-close-js');

  selectLabels.forEach(function (item, i) {
    item.addEventListener('click', (evt) => {
      // появление модального окна

      const modal = $('.modal-window');

      if (selectTitle.textContent !== evt.target.textContent && modal) {
        modal.addClass('modal-window_active');

        modal.find($('.btn-white')).on('click', () => {
          modal.removeClass('modal-window_active');
          overlay.classList.remove('active');
        });

        modal.find($('.btn-blue')).on('click', () => {
          selectTitle.textContent = evt.target.textContent;
          if (!select.classList.contains('__select-small')) {
            selectTitle.style.color = "#1B254A";
          }
          modal.removeClass('modal-window_active');
          overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
          modal.removeClass('modal-window_active');
          overlay.classList.remove('active');
        });
      }
      else {
        selectTitle.textContent = evt.target.textContent;
        selectTitle.style.color = "#1B254A";
        overlay.classList.remove('active');
      }
      tariffMenu.classList.remove('active');
    });
  });
});
