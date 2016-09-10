$(document).ready(function() {
	// .addClass and .removeClass
	$('button#f_addClass').click(function(){
		$('ul').addClass('fruits');
	});
	$('button#f_removeClass').click(function(){
		$('ul').removeClass('fruits');
	});

	//.append
	$('button#f_append').click(function(){
		$('p.append').append("<strong>wozniak</strong>");
	});

	// .after
	$('button#f_after').click(function(){
		$('p.after').after("<div>how are you?</div>");
	});

	//.prepend
	$('button#f_prepend').click(function(){
		$('p.prepend').prepend("<b>Hola </b>");
	});	

	//.before
	$('button#f_before').click(function(){
		$('p.before').before("<div>what comes first?</div>");
	});	

	//.attr getter
	$('button#f_attr1').click(function(){				
		var class_type = $("h3").attr("class");
		$('p.attr1').text(class_type);
	});	

	//.attr setter
	$('button#f_attr2').click(function(){				
		// $('p.attr2').css("background-color", "purple");
		$('p.attr2').attr("class", "new");
	});	
		
	//.html getter
	$('button#f_html_get').click(function(){
		var content = $("button#f_html_get").html();
		$('p.html').text(content)

	});	
	//.html setter
	$('button#f_html_set').click(function(){
		$("button#f_html_set").html("<div>Yay!</div>");

	});

	//.text getter
	$('button#f_text_get').click(function(){
		var content = $("p.html2").text();
		$('p.text1').text(content);

	});	
	//.text setter
	$('button#f_text_set').click(function(){
		$("p.text2").text("<div>Yay!</div>");

	});	

	//.val getter
	$('button#f_val_get').click(function(){
		var content = $("input#play").val();
		$('p.val1').text(content);

	});	
	//.val setter
	$('button#f_val_set').click(function(){
		$("input#play").val("Game on!");

	});	

	//.toggle. duration: fast and slow (200 and 600 milliseconds)
	$('button#f_toggle').click(function(){
		$("p.toggle").toggle();

	});
	$('button#f_toggle2').click(function(){
		$("p.toggle2").toggle("slow");

	});

	//.hide
	$('button#f_hide').click(function(){
		$('button#f_hide').hide("slow");

	});	

	//.show
	$('button#f_show').click(function(){
		$('button#f_hide').show("slow");

	});	

	//.slideDown
	$('button#f_slidedown').click(function(){
		$('div.hide').slideDown("fast");

	});	

	//.slideUp
	$('button#f_slideup').click(function(){
		$('div.hide').slideUp("slow");
	});	

	//.slideToggle
	$('button#f_slidetoggle').click(function(){
		$('div.hide').slideToggle("slow");
	});	

	//.fadeOut
	$('button#f_fadeout').click(function(){
		$('p.fadeout').fadeOut("slow");
	});	

	//.fadeIn
	$('button#f_fadein').click(function(){
		$('p.fadeout').fadeIn("1600");
	});	

	//.focus
	$('input').focus(function(){
		$('span').css("display", "inline").fadeOut(3000);
	});		

	//.click
	$('div.click').click(function(){
		$(this).slideUp();
	});	
	//.data
	$('button#f_data1').click(function(){
		$("div#data").data("greeting", "that's all folks");
	});	
	$('button#f_data2').click(function(){
		$("div#data").text($("div#data").data("greeting"));
		// alert($("div#data").data("greeting"));
	});																
});
		
