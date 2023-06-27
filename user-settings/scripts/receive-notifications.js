$(document).ready(function () {
	$(document).on("change", ".checkbox--js", function () {
		$(".email-input--js").prop("disabled", (i, v) => !v);
		$(".plus-button--js").prop("disabled", (i, v) => !v);
		$(".minus-button--js").prop("disabled", (i, v) => !v);
	});
});
