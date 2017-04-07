var pads,
	tampons,
	cycles,
	age,
	stateTax,
	taxPaid,
	total,
	totalPast;
// defines the variables globally

$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		pads = parseFloat($("#pads").val());
		tampons = parseFloat($("#tampons").val());
		cycles = parseFloat($("#cycles").val());
		age = parseFloat($("#age").val());
		// stores the numbers entered by the user
		runMath();
		showIt();
		// runs the global functions
	});

	$("#state").on("change", function () {
		stateTax = $("#state").find(":selected");
		taxPaid = stateTax.data("tax");
		// stores the data attribute from a selection whenever it is changed by the user
	});
});

function runMath() {
	total = (((((pads * .15) + (tampons * .19)) * cycles) * (51 - age) * taxPaid) * 1.0322).toFixed(2);
	totalPast = (((((pads * .15) + (tampons * .19)) * cycles) * (age - 12) * taxPaid) * 1.0322).toFixed(2);
	// multiply the numer of product used by price per unit and add them together
	// multiply that sum by the number of cycles, age compared to average first menstruation and menopause, and state tax rate
	// multiply by 1.0322 to adjust for inflation, not sure if this is right...
};
// shows the final tax paid
function showIt() {
	$("#total").text(total);
	$("#final-answer").addClass("answer-show");
	$("#past").text(totalPast);
	$("#past-answer").addClass("answer-show");
};
