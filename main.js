var pads,
	tampons,
	age,
	stateTax,
	total;


$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var pads = parseInt($("#pads").val());
		var tampons = parseInt($("#tampons").val());
		var age = parseInt($("#age").val());
		var stateTax = $("#state option:selected").data("tax");

		runMath();
		showIt();
		console.log
	});
});

function runMath() {
	var total = ((pads * 5.49) + (tampons * 6.99)) * (51 - age) * stateTax
};

function showIt() {
	$("#total").text(total);
	$("#final-answer").addClass("answer-show");

};
