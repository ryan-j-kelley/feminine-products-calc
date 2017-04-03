$(document).ready(function () {
			$("#submit").on("click", function (e) {
						e.preventDefault();

						var cycles = parseInt($("#cycles").val());
						var tampons = parseInt($("#tampons").val());
						var pads = parseInt($("#pads").val());
						var number3 = parseInt($("#number3").val());
