var justcall = (function () {
	
	var justCallParentObj = {} 
	var params
	//private functions

	justCallParentObj.init = function(){
		setTheParam();
		validateUser();
	}


	var setTheParam = function(){
		var urlparams = document.getElementById('justcall-ajs').src;
		params = makeParam(urlparams);
	}

	var getParamString = function (){
		var parser = document.createElement('a');
		parser.href = document.getElementById('justcall-ajs').src;
		return query = parser.search.substring(1);
	}

	var loadframe = function (){
		let urlprams = getParamString();
		let framehtml = '<div class="iframe-content" id="abc"><iframe allowfullscreen src="app/framepage.php?'+urlprams+'" ></iframe></div>';
		document.body.innerHTML += framehtml;

	}

	var validateUser = function () {
		var c = new XMLHttpRequest;
		var data = new FormData();
		data.append('uhash', params.uhash);
		data.append('usid', params.usid);
		c.onreadystatechange = function(){
			if(4 == this.readyState && 200 == this.status){
				if(JSON.parse(this.responseText).status == true){
					console.log('loading the frame....')
					loadframe();	
				}else{
					alert("You are not authorized to use this service");
				}
			}
		}
		c.open("POST",`api/callsetting.php`,true)
		c.send(data)
	}

	var makeParam = function (url) {		
		var params = {};
		var parser = document.createElement('a');
		parser.href = url;
		var query = parser.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			params[pair[0]] = decodeURIComponent(pair[1]);
		}
		return params;
	};


	return justCallParentObj;

}());



































/***********************DUMPED CODE**********************/

/*
(function($) {

	// get the number setting and populate the

	function loadIframeURL(...dataset){
		return `app/framepage.php?uhash=${dataset[2]}&sid=${dataset[0]}&email=${dataset[1]}`
	}

	function loadIframeHTML(divClassName){
		let framehtml = `<div class="iframe-content"><iframe src="${loadIframeURL()}"></iframe></div>`

		$('body').append(framehtml)
	}

	function loadTheFrame(uhash,usid,divClassName){

		$.ajax({
			url: 'api/callsetting.php',
			type: 'POST',
			dataType: 'json',
			data: {uhash: uhash,usid:usid},
		})
		.done(function(data) {
			let url = loadIframeURL(data.SID,data.email,data.hash,data.name,data.numbertype,data.phonenumber,data.pid,data.status,data.userid)
			loadIframeHTML(url)
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}

    $.fn.justcall = function( options ) {

        var settings = $.extend({
            text         : 'Call',
        }, options);

       	this.each( function() {
            
			    if( settings.uhash && settings.usid && settings.type == "div"){
			    	loadTheFrame(settings.uhash,settings.usid,settings.hit)
			    }else if (settings.uhash && settings.usid && settings.type == "fixed" ){

			    }
			   

        });

    }



}(jQuery));

*/
