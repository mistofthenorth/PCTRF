$(document).ready(function start(){
	$("#first").append("Do you know your PSA, Gleason Score, and Clinical Stage?<br>");
	$("#first").append("<input type='radio' name='yes' id='yes'> Yes<br>");
	$("#first").append("<input type='radio' name='yes' id='skip'> No, please show me all the risk groups <br>");
	$("#first").append("<button type='button' id='next'> Next </button> ");
	

	
	$("#next").click(function(){
			
			if(skip.checked){
			
			window.location.href = "http://www.pctrf.org";
			}
			if(yes.checked){
			//$("#first").append("<div><hr>");
			next.disabled = true;
			yes.disabled = true;
			skip.disabled = true;
			
			var psa = $("<div><hr>What is your current PSA?<br><input type='radio' name='PSA' id='PSALow'> PSA is less than 10<br><input type='radio' name='PSA' id='PSAMid'> PSA is more than 10 but less than 20<br><input type='radio' name='PSA' id='PSAHigh'> PSA is higher than 20<br><button type='button' id='Pnext'> Next </button> <button type='button' id='startOver'>Start Over</button>").hide().fadeIn(300);
			
			$(psa).appendTo("#first");
			
			//$("#first").append("What is your current PSA?<br>");
			//$("#first").append("<input type='radio' name='PSA' id='PSALow'> PSA is less than 10<br>");
			//$("#first").append("<input type='radio' name='PSA' id='PSAMid'> PSA is more than 10 but less than 20<br>");
			//$("#first").append("<input type='radio' name='PSA' id='PSAHigh'> PSA is higher than 20<br>");
			//$("#first").append("<button type='button' id='Pnext'> Next </button> <button type='button' id='startOver'>Start Over</button>");
			$("#startOver").click(function(){$("#first").empty().fadeIn(500);
																			   start();});
			}
			
				$("#Pnext").click(function(){
				//$("#first").append("<div><hr>");
				$("#startOver").remove();
				PSALow.disabled = true;
				PSAMid.disabled = true;
				PSAHigh.disabled = true;
				Pnext.disabled = true;
				var gleason = $("<div><hr>What is your current Gleason Score?<br><input type='radio' name='Gleason' id='GleasonLow'> Gleason is less than 7<br><input type='radio' name='Gleason' id='GleasonMid'> Gleason is 7<br><input type='radio' name='Gleason' id='GleasonHigh'> Gleason score is between 8 and 10<br><button type='button' id='Gnext'> Next </button> <button type='button' id='startOver'>Start Over</button>").hide().fadeIn(300);
				
				$(gleason).appendTo("#first");
				//$("#first").append("What is your current Gleason Score?<br>");
				//$("#first").append("<input type='radio' name='Gleason' id='GleasonLow'> Gleason is less than 7<br>");
				//$("#first").append("<input type='radio' name='Gleason' id='GleasonMid'> Gleason is 7<br>");
				//$("#first").append("<input type='radio' name='Gleason' id='GleasonHigh'> Gleason score is between 8 and 10<br>");
				//$("#first").append("<button type='button' id='Gnext'> Next </button> <button type='button' id='startOver'>Start Over</button>");
				$("#startOver").click(function(){$("#first").empty().fadeIn(500);
																			   start();});
				
					$("#Gnext").click(function(){
					//$("#first").append("<div><hr>");
					$("#startOver").remove();
					GleasonLow.disabled = true;
					GleasonMid.disabled = true;
					GleasonHigh.disabled = true;
					Gnext.disabled = true;
					var clinical = $("<div><hr>What is your current Clinical Stage?<br><input type='radio' name='Clinical' id='ClinicalLow'> Clinical Stage is T1c to T2a<br><input type='radio' name='Clinical' id='ClinicalMid'> Clinical Stage is T2b<br><input type='radio' name='Clinical' id='ClinicalHigh'> Clinical Stage is T2c to T3c<br><button type='button' id='Cnext'> Next </button> <button type='button' id='startOver'>Start Over</button>").hide().fadeIn(300);
					$(clinical).appendTo("#first");
					//$("#first").append("What is your current Clinical Stage?<br>");
					//$("#first").append("<input type='radio' name='Clinical' id='ClinicalLow'> Clinical Stage is T1c to T2a<br>");
					//$("#first").append("<input type='radio' name='Clinical' id='ClinicalMid'> Clinical Stage is T2b<br>");
					//$("#first").append("<input type='radio' name='Clinical' id='ClinicalHigh'> Clinical Stage is T2c to T3c<br>");
					//$("#first").append("<button type='button' id='Cnext'> Next </button> <button type='button' id='startOver'>Start Over</button>");
					$("#startOver").click(function(){$("#first").empty().fadeIn(500);
																			   start();});
				
				
						$("#Cnext").click(function(){
						//$("#first").append("<div><hr>");
						$("#startOver").remove();
						ClinicalLow.disabled = true;
						ClinicalMid.disabled = true;
						ClinicalHigh.disabled = true;
						Cnext.disabled = true;
						var result = $("<div><hr>Your risk group is ... <br><button type='button' id='startOver'>Start Over</button>").hide().fadeIn(300);
						$(result).appendTo("#first");
						
						//$("#first").append("Your risk group is ...");
						//$("#first").append("<br><button type='button' id='startOver'>Start Over</button>");
						$("#startOver").click(function(){$("#first").empty().fadeIn(500);
																			   start();});
						});
					});
			});
			
	});
	
	
});



