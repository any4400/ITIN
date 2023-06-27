// маска для дат (день.месяц.год)

$(document).ready(function () {
  const maskOptions = {
    mask: Date,
    pattern: '`d.`m.Y',
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2,
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 9999,
      }
    },
    autofix: true
  };

  $('.date-input--js').each(function () {
    IMask($(this)[0], maskOptions);
  })
});
