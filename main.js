var pads,
	tampons,
	age,
	stateTax,
	taxPaid,
	total,
	totalPast;


$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();
		//
		pads = parseFloat($("#pads").val());
		tampons = parseFloat($("#tampons").val());
		age = parseFloat($("#age").val());

		runMath();
		showIt();

	});

	$("#state").on("change", function () {
		stateTax = $("#state").find(":selected");
		taxPaid = stateTax.data("tax");

	});
});

function runMath() {
	total = ((pads * 5.49) + (tampons * 6.99)) * (51 - age) * taxPaid;
	console.log("this is the total amount", total);

};
// shows the final tax paid
function showIt() {
	$("#total").text(total);
	$("#final-answer").addClass("answer-show");
	// $("#past").text(totalPast);
	// $("#past-answer").addClass("answer-show");
};
