$(document).ready( function() {
	$('#from_date').datepicker();
	$('#until_date').datepicker();

	// ToDo: toggle the display:none and show option for the span tag that indicates missing name error 
	$('input.submit').click(function() {
		var from_date = $('#from_date').val();
		var until_date = $('#until_date').val();
		var name = $('#name').val();
		if (from_date == '' || until_date == '' || name == '') {
			if (name == '') {
				$('p:nth-child(3)').append('<span class="error"> Your name cannot be blank!</span>')
			}
			$('input.submit').css('background-color', 'red');
			if (from_date == '' || until_date == '') {
				alert('Please select your departure and return dates.');
			}
		} else {
			$('input.submit').css('background-color', 'blue');
			alert('Thanks, ' + name + '!  Your cruise leaves on ' + from_date + ' and returns on ' + until_date + '!');
		}
		return false;
	})
});