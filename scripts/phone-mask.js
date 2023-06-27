// маска на поля для телефонных номеров
$(document).ready(function () {
  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
  };

  const setPhoneCode = input => {
    $(input).val('+7 (');
    $(input)[0].dispatchEvent(new Event("input", { bubbles: true }));
  };

  $(document).on('focus', '.phone-input--js', function () {
    IMask($(this)[0], maskOptions);
    if (!$(this).val().length) {
      setPhoneCode($(this));
    }
  });

  $(document).on('input', '.phone-input--js', function () {
    if ($(this).val().length < 4) {
      setPhoneCode($(this));
    }
  });
});
