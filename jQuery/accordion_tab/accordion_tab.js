$(document).ready( function() {
	$('#accordion').accordion({
		// collapsible: true;
	});
	$('#tabs').tabs({

	});
    $('#speed').selectmenu();
 
    $('#files').selectmenu();
 
    $('#number')
    	.selectmenu()
      	.selectmenu( "menuWidget" )
        .addClass( "overflow" );

});