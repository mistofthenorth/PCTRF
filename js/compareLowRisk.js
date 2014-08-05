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

	var seedsebrt = document.getElementById("seedsebrt");
	if(seedsebrt.checked){
		if(chart.series[3].visible == false){chart.series[3].show();}
		if(chart.series[4].visible == false){chart.series[4].show();}
	}
	else{
		if(chart.series[3].visible == true){chart.series[3].hide();}
		if(chart.series[4].visible == true){chart.series[4].hide();}
	}
	
	var seeds = document.getElementById("seeds");
	if(seeds.checked){
		if(chart.series[5].visible == false){chart.series[5].show();}
		if(chart.series[6].visible == false){chart.series[6].show();}
	}
	else{
		if(chart.series[5].visible == true){chart.series[5].hide();}
		if(chart.series[6].visible == true){chart.series[6].hide();}
	}
	
	var ebrt = document.getElementById("ebrt");
	if(ebrt.checked){
		if(chart.series[7].visible == false){chart.series[7].show();}
		if(chart.series[8].visible == false){chart.series[8].show();}
	}
	else{
		if(chart.series[7].visible == true){chart.series[7].hide();}
		if(chart.series[8].visible == true){chart.series[8].hide();}
	}

	var protons = document.getElementById("protons");
	if(protons.checked){
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
	}
	else{
		if(chart.series[11].visible == true){chart.series[11].hide();}
	}

	var hifu = document.getElementById("hifu");
	if(hifu.checked){
		if(chart.series[12].visible == false){chart.series[12].show();}
	}
	else{
		if(chart.series[12].visible == true){chart.series[12].hide();}
	}
	chart.hideLoading();
 }
});


$("#selectAll").click(function(){
	surgery.checked = true;
	seedsebrt.checked = true;
	seeds.checked = true;
	ebrt.checked = true;
	protons.checked = true;
	HDR.checked = true;
	hifu.checked = true;

});

$("#selectNone").click(function(){
	surgery.checked = false;
	seedsebrt.checked = false;
	seeds.checked = false;
	ebrt.checked = false;
	protons.checked = false;
	HDR.checked = false;
	hifu.checked = false;

});