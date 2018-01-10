var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Events Guide | Tickets' });
  
});

//save ticket to db and generate digital ticket layout

router.post('/PurchaseTicket',function(req,res){

	//get the  db variable
	var db = req.db;
	//collection
	var tickets_collection = db.get('ticketscollection');

	var ticket_data ={
		ticket_type    :req.body.type,
		ticket_no      :req.body.no_of_tickets,
		payment_method :req.body.pay,
		amount         :req.body.amount,
	};

	tickets_collection.insert(ticket_data, function(err, tickets){
		if(err){
			 res.send({message:"There was a problem processing your ticket(s). " + err.message});
             console.log(err.message);
		}
		else{
			console.log(tickets);
			 data = {'message': 'Ticket(s) processed successfully, Thank you!'};
             return res.send(data.message);
		}

	});

});

router.get('/events', function(req,res,next){

	res.render('events',{title:'My Ticket'});
	
});


function getData(req,res){

	var db = req.db;
	var tickets = db.get('ticketscollection');
	
}

module.exports = router;
