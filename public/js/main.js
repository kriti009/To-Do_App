$("ul").on("click" ,"li", function(){    //run code when li is clicked inside of ul
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){  //run code when span is clicked inside ul
	// $(this).parent().remove();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();  //to stop event bubbling
});

$("input[type='text']").on("keypress" , function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		//creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");	
	};
	
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle();
})