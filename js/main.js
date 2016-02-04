$(document).ready(function(){
	// console.log("document ready");
	$('#login-btn').click(function(){
		$('.backdrop').show();
		$('.signin').show();
	});

	$('.backdrop').click(function(){
		$('.backdrop').hide();
		$('.signin').hide();
	});

	$('.menu-btn').click(function(){
		$('ul.main-nav-list').toggle();
	});

	$('.go-to-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('input[type=range]').mouseup(function(){
		var range_id = $(this).attr('id');
		var range_value = $(this).val();
		$('#range-value-' + range_id).html(range_value);
	});


	var i;
	// for orders-page
	for(i=0;i<6;i++){
		$('.orders-list .complete-inner').append('<ul id="details-dark"><li class="order"><small class="content-pro">#99</small></li><li class="desc-input"><small class=""> 2 Bedrooms + 1 Bathroom</small></li><li class="name-input"><small class="content-pro"> Aialna Johns</small></li><li class="status"><small class="content-pro orange"> Pending</small></li><li class="price"><small class="content-pro"> $100</small></li><li class="remain"><small class="content-pro"> $200</small></li></ul>');
	}

	for(i=0;i<6;i++){
		$('.orders-list .complete-inner').append('<ul id="details-dark"><li class="order"><small class="content-pro">#99</small></li><li class="desc-input"><small class=""> 2 Bedrooms + 1 Bathroom</small></li><li class="name-input"><small class="content-pro"> Aialna Johns</small></li><li class="status"><small class="content-pro green"> Completed</small></li><li class="price"><small class="content-pro"> $100</small></li><li class="remain"><small class="content-pro"> $200</small></li></ul>');
	}

	// for customer page
	for(i=0;i<6;i++){
		$('.details .complete-inner').append('<ul id="details-dark"><li class="order"><small class="content-pro">#99</small></li><li class="desc-input"><small class=""> 2 Bedrooms + 1 Bathroom</small></li><li class="name-input"><small class="content-pro"> Aialna Johns</small></li><li class="status"><small class="content-pro "> Completed</small></li><li class="price"><small class="content-pro"> $100</small></li><li class="remain"><small class="content-pro"> $200</small></li></ul>');
	}

	$('.load-orders').click(function(){
		$('.orders-list .complete-inner').append('<ul id="details-dark"><li class="order"><small class="content-pro">#99</small></li><li class="desc-input"><small class=""> 2 Bedrooms + 1 Bathroom</small></li><li class="name-input"><small class="content-pro"> Aialna Johns</small></li><li class="status"><small class="content-pro green"> Completed</small></li><li class="price"><small class="content-pro"> $100</small></li><li class="remain"><small class="content-pro"> $200</small></li></ul>');
	})
	$('.load-more').click(function(){
		$('.details .complete-inner').append('<ul id="details-dark"><li class="order"><small class="content-pro">#99</small></li><li class="desc-input"><small class=""> 2 Bedrooms + 1 Bathroom</small></li><li class="name-input"><small class="content-pro"> Aialna Johns</small></li><li class="status"><small class="content-pro"> Completed</small></li><li class="price"><small class="content-pro"> $100</small></li><li class="remain"><small class="content-pro"> $200</small></li></ul>');
	})

	$(".filter").click(function(){

	$(".filter-details").fadeIn();
	})

	$("#cross").click(function(){

	$(".filter-details").fadeOut();
	})

	$("side-arrow").click(function(){
		$(".complete-list").animate(function(){
			scroll
		})
	})

	$(".side-arrow").click(function () {
		 event.preventDefault();
		 $(".complete-list").animate({
            scrollLeft: "+=200"
        }, 200);
    });

	

// filtering functions
	var pend=0;
	var comp=0;
	var imp=0;



	$("#completed-order").click(function(){
		if(this.checked){
			comp=1;
		}
		else{
			comp=0;
		}
	})
	$("#pending-order").click(function(){
		if(this.checked){
			pend=1;
		}
		else{
			pend=0;
		}
	})
	$("#important-customer").click(function(){
		if(this.checked){
			imp=1;
		}
		else{
			imp=0;
		}
	})

	$(".btn-apply").click(function(){
	// show pending items
		if(pend===1 && imp===0 && comp===0){

			$(".complete-list .pending-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"none"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})

		}

		// show comleted items
		if(pend===0 && imp===0 && comp===1){

			$(".complete-list .pending-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"none"
			})
		}

		// show important items
		if(pend===0 && imp===1 && comp===0){

			$(".complete-list .pending-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})
		}

		// show complete and important items
		if(pend===0 && imp===1 && comp===1){

			$(".complete-list .pending-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"none"
			})
		}

		// show pending and important items
		if(pend===1 && imp===1 && comp===0){

			$(".complete-list .pending-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"none"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})
		}

		// show imp-pending, imp-complete 
		if(pend===1 && imp===1 && comp===1){

			$(".complete-list .pending-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-filter").css({
				"display":"none"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})
		}

		// show pending, complete or all listings
		if(pend===1 && imp===0 && comp===1){

			$(".complete-list .pending-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})
		}
	})
	
	$(".btn-clear").click(function(){
	pend=0;
	comp=0;
	imp=0;

	$("#completed-order").prop("checked",false);
	$("#pending-order").prop('checked',false);
	$("#important-customer").prop("checked",false);

	if(pend===0 && imp===0 && comp===0){

			$(".complete-list .pending-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-filter").css({
				"display":"block"
			})
			$(".complete-list .completed-important-filter").css({
				"display":"block"
			})
			$(".complete-list .pending-important-filter").css({
				"display":"block"
			})
		}
});

	// applicants

	$(".load-appl").click(function(){
		
		$(".applicant-container").append('<div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div>')

	})
$(".load-emp").click(function(){
		
		$(".employee-container").append('<div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div><div class="card-size small-padding  left "><div class="card-emp"><div class="applicant-image"><img src="img/pro.jpg"></div><div class="bottom-text small-padding"><h3>Angeline Kaith</h3><small>2+ year Experience<br>worked for own customers</small></div></div></div>')

	})
    
  
});