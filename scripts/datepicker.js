// КАЛЕНДАРЬ

// svg иконок (неактивной и активной)
const grayIcon = "data:image/svg+xml,%3Csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V1C15 0.45 14.55 0 14 0ZM16 18H2V8H16V18ZM8 11C8 10.45 8.45 10 9 10C9.55 10 10 10.45 10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11ZM4 11C4 10.45 4.45 10 5 10C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12C4.45 12 4 11.55 4 11ZM12 11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12C12.45 12 12 11.55 12 11ZM8 15C8 14.45 8.45 14 9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15ZM4 15C4 14.45 4.45 14 5 14C5.55 14 6 14.45 6 15C6 15.55 5.55 16 5 16C4.45 16 4 15.55 4 15ZM12 15C12 14.45 12.45 14 13 14C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16C12.45 16 12 15.55 12 15Z' fill='%238895BB'/%3E%3C/svg%3E%0A";
const blackIcon = "data:image/svg+xml,%3Csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V1C15 0.45 14.55 0 14 0ZM16 18H2V8H16V18ZM8 11C8 10.45 8.45 10 9 10C9.55 10 10 10.45 10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11ZM4 11C4 10.45 4.45 10 5 10C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12C4.45 12 4 11.55 4 11ZM12 11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12C12.45 12 12 11.55 12 11ZM8 15C8 14.45 8.45 14 9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15ZM4 15C4 14.45 4.45 14 5 14C5.55 14 6 14.45 6 15C6 15.55 5.55 16 5 16C4.45 16 4 15.55 4 15ZM12 15C12 14.45 12.45 14 13 14C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16C12.45 16 12 15.55 12 15Z' fill='%231B254A'/%3E%3C/svg%3E%0A";


//настройки календаря
$.datepicker.regional['ru'] = {
  showOn: 'button',
  buttonImage: grayIcon,
  buttonImageOnly: true,
  buttonText: "Выбрать дату",
  closeText: 'Закрыть',
  prevText: 'Предыдущий месяц',
  nextText: 'Следующий месяц',
  currentText: 'Сегодня',
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: '',
  showOtherMonths: true,
  showAnim: '',
  beforeShow: function (textbox, instance) {
    $(textbox).trigger('click');
    instance.dpDiv.css('padding', `24px`);

    // центрирование или
    // сдвиг к правому краю текстового поля
    // в зависимости от разрешения экрана
    const width = window.innerWidth;
    if (width < 768) {
      $('.overlay-datepicker--js').addClass('active');
      instance.dpDiv.css('padding', `16px`);
      instance.dpDiv.css('left', `17px`);
      instance.dpDiv.css('margin-left', '0');
      $('.overlay-js').addClass('active');
    } else if (width < 1200) {
      if (!$(textbox).hasClass('datepicker-small--js')) {
        instance.dpDiv.css('margin-left', '-44px');
      }
      if ($(textbox).hasClass('datepicker-big--js')) {
        instance.dpDiv.css('margin-left', '192px');
      }
    } else {
      if ($(textbox).hasClass('datepicker-big--js')) {
        instance.dpDiv.css('margin-left', '288px');
      }
    }

    // перекрытие шапки
    setTimeout(function(){
      instance.dpDiv.css('z-index', '7');
    }, 0);

    // смена иконки на черную при открытии
    $(this).next('.ui-datepicker-trigger').attr('src', blackIcon);
  },
  onSelect: function (date, instance) {
    $(this).trigger('input');
    $('.overlay-datepicker--js').removeClass('active');

    if ($(this).hasClass('date-input-start--js')) {
      const selectedDay = instance.selectedDay;
      const selectedMonth = instance.selectedMonth;
      const selectedYear = instance.selectedYear;

      const startDate = new Date(selectedYear, selectedMonth, selectedDay);
      $('.date-input-end--js').datepicker('option', 'minDate', startDate);
    }
  },
  onClose: function () {
    // смена иконки на серую при закрытии
    $(this).next('.ui-datepicker-trigger').attr('src', grayIcon);
    const width = window.innerWidth;
    if (width <= 768) {
      $('.overlay-js').removeClass('active');
    }
  }
};

$.datepicker.setDefaults($.datepicker.regional['ru']);

$('.datepicker--js').datepicker();

const startDateInput = $('.date-input-start--js').val();

if (startDateInput) {
  const date = startDateInput.split('.');
  const [day, month, year] = date;
  const startDate = new Date(year, month - 1, day);
  $('.date-input-end--js').datepicker('destroy');
  $('.date-input-end--js').datepicker({minDate: startDate});
}

$(document).ready(function () {
  $(document).on('click', '.overlay-datepicker--js', function () {
    $(this).removeClass('active');
  });
});
