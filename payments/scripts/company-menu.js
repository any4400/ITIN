$(document).ready(function () {

    const companySelect = document.querySelector('.__select-checkbox-search-js');
    const companyTitleCheck = companySelect.querySelector('.__select__title');
    const companyLabelsCheck = document.querySelectorAll('.company-menu-label-js');
  
      let modalButton = companySelect.querySelector('.__select__title'),
        overlay = document.querySelector('.overlay-js'),
        closeButtonOk = document.querySelector('.company-menu-close-ok-js'),
        // closeButtonEsc = document.querySelector('.company-menu-close-esc-js'),
        companyMenu = document.querySelector('.company-menu');
  
      modalButton.addEventListener('click', function (e) {
        e.preventDefault();
        companyMenu.classList.add('active');
        overlay.classList.add('active');
      }); // end click
  
  
      companyLabelsCheck.forEach(function (item, i) {
        item.addEventListener('click', (evt) => {
          item.classList.toggle('active');
  
          let arrayCheckboxes = [];
  
          for (let companyLabelCheck of companyLabelsCheck) {
            if (companyLabelCheck.classList.contains('active')) {
              arrayCheckboxes.push(companyLabelCheck.querySelector('.checkbox_content').textContent);
            }
          }
          
          if (!(arrayCheckboxes.length == 0)) {
            companyTitleCheck.firstElementChild.textContent = arrayCheckboxes.join(", ");
            companyTitleCheck.style.color = "#1B254A";
            arrayCheckboxes = [];
          }
    
          else {
            companyTitleCheck.firstElementChild.textContent = 'Все компании';
            companyTitleCheck.style.color = "#C6CBD6";
          }
  
          item.querySelector('input').addEventListener('click', (ev) => {
            ev.stopPropagation();
          });
        });
      });
  
    closeButtonOk.addEventListener('click', function (e) {
        var parentModal = this.closest('.company-menu');
        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });
    // closeButtonEsc.addEventListener('click', function (e) {
    //     var parentModal = this.closest('.company-menu');
    //     parentModal.classList.remove('active');
    //     overlay.classList.remove('active');
    //     companyTitleCheck.firstElementChild.textContent = 'Все компании';
    //     companyTitleCheck.style.color = "#C6CBD6";
    //     arrayCheckboxes = [];
    //     companyLabelsCheck.forEach( function (item) {
    //     item.classList.remove('active');
    //     item.querySelector('input').checked = false;
    //   }) ;
  
      document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
  
        if (key == 27) {
  
          document.querySelector('.company-menu.active').classList.remove('active');
          document.querySelector('.overlay').classList.remove('active');
        }
      }, false);
    });
// });
  