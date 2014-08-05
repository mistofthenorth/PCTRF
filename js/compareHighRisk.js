$("#send").click(function(){
var chart = $('#container').highcharts();
chart.showLoading();
setTimeout(function(){cont();}, 100);



function cont(){
	var surgery = document.getElementById("surgery");
	if(surgery.checked){
		if(chart.series[0].visible == false){chart.series[0].show();}
		if(chart.series[1].visible == false){chart.series[1].show();}
		if(chart.series[2].visible == false){chart.series[2].show();}
	}
	else{
		if(chart.series[0].visible == true){chart.series[0].hide();}
		if(chart.series[1].visible == true){chart.series[1].hide();}
		if(chart.series[2].visible == true){chart.series[2].hide();}
	}
	
	var seeds = document.getElementById("seeds");
	if(seeds.checked){
		if(chart.series[3].visible == false){chart.series[3].show();}
		if(chart.series[4].visible == false){chart.series[4].show();}
	}
	else{
		if(chart.series[3].visible == true){chart.series[3].hide();}
		if(chart.series[4].visible == true){chart.series[4].hide();}
	}
	
	var seedsebrt = document.getElementById("seedsebrt");
	if(seedsebrt.checked){
		if(chart.series[5].visible == false){chart.series[5].show();}
		if(chart.series[6].visible == false){chart.series[6].show();}
	}
	else{
		if(chart.series[5].visible == true){chart.series[5].hide();}
		if(chart.series[6].visible == true){chart.series[6].hide();}
	}
	
	var ebrt = document.getElementById("ebrt");
	if(ebrt.checked){
		if(chart.series[9].visible == false){chart.series[9].show();}
		if(chart.series[10].visible == false){chart.series[10].show();}

	}
	else{
		if(chart.series[9].visible == true){chart.series[9].hide();}
		if(chart.series[10].visible == true){chart.series[10].hide();}
	}

	var hdr = document.getElementById("HDR");
	if(HDR.checked){
		if(chart.series[11].visible == false){chart.series[11].show();}
		if(chart.series[12].visible == false){chart.series[12].show();}
	}
	else{
		if(chart.series[11].visible == true){chart.series[11].hide();}
		if(chart.series[12].visible == true){chart.series[12].hide();}
	}

	
	var ebrtadt = document.getElementById("ebrtadt");
	if(ebrtadt.checked){
		if(chart.series[7].visible == false){chart.series[7].show();}
		if(chart.series[8].visible == false){chart.series[8].show();}
	}
	else{
		if(chart.series[7].visible == true){chart.series[7].hide();}
		if(chart.series[8].visible == true){chart.series[8].hide();}
	}

	var ebrtseedsadt = document.getElementById("ebrtseedsadt");
	if(ebrtseedsadt.checked){
		if(chart.series[13].visible == false){chart.series[13].show();}
		if(chart.series[14].visible == false){chart.series[14].show();}
	}
	else{
		if(chart.series[13].visible == true){chart.series[13].hide();}
		if(chart.series[14].visible == true){chart.series[14].hide();}
	}

	var hifu = document.getElementById("hifu");
	if(hifu.checked){
		if(chart.series[16].visible == false){chart.series[16].show();}
	}
	else{
		if(chart.series[16].visible == true){chart.series[16].hide();}
	}
	
	var cryo = document.getElementById("cryo");
	if(cryo.checked){
		if(chart.series[17].visible == false){chart.series[17].show();}
	}
	else{
		if(chart.series[17].visible == true){chart.series[17].hide();}
	}
	
	var hypoebrt = document.getElementById("hypoebrt");
	if(hypoebrt.checked){
		if(chart.series[15].visible == false){chart.series[15].show();}
	}
	else{
		if(chart.series[15].visible == true){chart.series[15].hide();}
	}
	
	
	chart.hideLoading();
 }
});


$("#selectAll").click(function(){
	surgery.checked = true;
	seedsebrt.checked = true;
	seeds.checked = true;
	ebrt.checked = true;
	ebrtseedsadt.checked = true;
	HDR.checked = true;
	hifu.checked = true;
	hypoebrt.checked = true;
	ebrtadt.checked = true;
	cryo.checked = true;
	
	

});

$("#selectNone").click(function(){
	surgery.checked = false;
	seedsebrt.checked = false;
	seeds.checked = false;
	ebrt.checked = false;
	ebrtseedsadt.checked = false;
	HDR.checked = false;
	hifu.checked = false;
	hypoebrt.checked = false;
	ebrtadt.checked = false;
	cryo.checked = false;
	

});