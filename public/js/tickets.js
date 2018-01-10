(function(){

	$('#process_tickets').on('submit',function(e){
		e.preventDefault();
		purchase();
	});

}());


function purchase(){
		var tc_type = $('#type').val();
		var tc_no = $('#no_of_tickets').val();
		var airtel = $('#aitrel').val();
		var mtn = $('#mtn').val();
		var card = $('#card').val();
		
         if ($('#aitrel').is(':checked')) {
         	var amount = 10000 * tc_no;
         	amount = 'UGX' + amount;
         	var form_data = {};
        	form_data.type = tc_type;
        	form_data.no_of_tickets = tc_no;
        	form_data.pay = airtel;
        	form_data.amount = amount;
        	 //$('.form-message').fadeIn("Slow");
         	  $.ajax({
					url: "/PurchaseTicket",
					type: "POST",
					contentType: "application/json",
					data: JSON.stringify(form_data),
					success: function (response) {
					if (response.err) {
						alert(response.err);
					}
					else {
                  		//$('.form-message').fadeOut("Slow");
                  		$('div.result').html(response).fadeIn('Slow');
                  		$('div.ticket').fadeIn('Slow');
                  		$('#process_tickets').fadeOut('Fast');
					}
					},
					error:function(XHR, status, response){
						alert(response)
					}
				});

         }


}