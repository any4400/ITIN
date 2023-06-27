// // Модальное окно для селектов с чекбоксами (без поиска)
// $(document).ready(function () {

//   const tariffCheck = document.querySelector('.__select-checkbox-tariff-js');
//   const tariffTitleCheck = tariffCheck.querySelector('.__select__title');
//   const tariffLabelsCheck = document.querySelectorAll('.tariff-menu-label-js');


//     let modalButton = tariffCheck.querySelector('.__select__title-big'),
//       overlay = document.querySelector('.overlay-js'),
//       closeButtonOk = document.querySelector('.tariff-menu-close-ok-js'),

//       modal = document.querySelector('.tariff-menu');

//     modalButton.addEventListener('click', function (e) {

//       e.preventDefault();
//       modal.classList.add('active');
//       overlay.classList.add('active');
//     }); // end click


//     tariffLabelsCheck.forEach(function (item, i) {
//       item.addEventListener('click', (evt) => {
//         item.classList.toggle('checked');

//         let arrayCheckboxes = [];

//         for (let tariffLableCheck of tariffLabelsCheck) {
//           if (tariffLableCheck.classList.contains('checked')) {
//             arrayCheckboxes.push(tariffLableCheck.querySelector('.checkbox_content').textContent.toLowerCase());
//           }
//         }
        
//         if (!(arrayCheckboxes.length == 0)) {
//           const str = arrayCheckboxes.join(', ');
//           const formatStr = str[0].toUpperCase() + str.slice(1);
//           tariffTitleCheck.firstElementChild.textContent = formatStr;
//           tariffTitleCheck.style.color = "#1B254A";
//           arrayCheckboxes = [];
//         }
  
//         else {
//           tariffTitleCheck.firstElementChild.textContent = 'Все тарифы';
//           tariffTitleCheck.style.color = "#C6CBD6";
//         }

//         item.querySelector('input').addEventListener('click', (ev) => {
//           ev.stopPropagation();
//         });
//       });
//     });

    
//     closeButtonOk.addEventListener('click', function (e) {
//         var parentModal = e.target.closest('.tariff-menu');
//         parentModal.classList.remove('active');
//         overlay.classList.remove('active');
//       });

//   });

$(document).on('click', '.tariff-menu-label-js', function() {
  const tariffCheck = document.querySelector('.__select-checkbox-tariff-js');
  const tariffTitleCheck = tariffCheck.querySelector('.__select__title');
  const tariffLabelsCheck = document.querySelectorAll('.tariff-menu-label-js');
  const item = $(this)[0];
  item.classList.toggle('checked');

  let arrayCheckboxes = [];

  for (let tariffLableCheck of tariffLabelsCheck) {
      if (tariffLableCheck.classList.contains('checked')) {
      arrayCheckboxes.push(tariffLableCheck.querySelector('.checkbox_content').textContent.toLowerCase());
      }
  }
  
  if (!(arrayCheckboxes.length == 0)) {
      const str = arrayCheckboxes.join(', ');
      const formatStr = str[0].toUpperCase() + str.slice(1);
      tariffTitleCheck.firstElementChild.textContent = formatStr;
      tariffTitleCheck.style.color = "#1B254A";
      arrayCheckboxes = [];
  }

  else {
      tariffTitleCheck.firstElementChild.textContent = 'Все тарифы';
      tariffTitleCheck.style.color = "#C6CBD6";
  }

  item.querySelector('input').addEventListener('click', (ev) => {
      ev.stopPropagation();
  });
});
