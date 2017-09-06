$(document).ready(function(){
	$('#submitBtn').click(function() {
	var g = $('#inputText').val();
    $('#mainList').append("<li><button>X</button>" + g + "</li>");
    $('button').addClass("delete");
    form.reset();
	$('#inputText').focus();	
	});
	form.reset();
	$(document).on('click', '.delete',function() {
		$(this).parent().remove();
	})
});
