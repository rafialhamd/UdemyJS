
// when selecting an li, it must toggle between grey & strike through and black
// can only use jquery on code that is run the first time so this needs to be attached to the ul rather than the li
$('ul').on("click","li",function(event){
	$(this).toggleClass("completed");
});

$('ul').on("click","span",function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

// add new items
$('input').keypress(function(event){
	if(event.which === 13){
		// extracts number
		var newEntry=$(this).val();
		// just clears the entry box
		$(this).val("");
		// formatting
		$('ul').append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + newEntry + "</li>");  
		// add this in somehow <i class="fa fa-trash-o" aria-hidden="true"></i> 

	}
});

// fade out input when '+'' is hit
$('.fa-plus').on("click",function(){
	$('input').fadeToggle();

});