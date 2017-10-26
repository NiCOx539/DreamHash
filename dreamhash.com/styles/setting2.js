$(document).ready(function(){

	var percent 	= [9,11,12];
	var minMoney 	= [0.001,10.001,50.001];
	var maxMoney	= [10,50,100];
	$("#amount").val(minMoney[0]);
	
	//Calculator
	function calc(){
		amount = parseFloat($("#amount").val());
		days = parseFloat($("#days").val());
		
		if(days < 1 || isNaN(days) == true){
			days = 1;
		}
		
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= amount && amount <= maxMoney[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){
			profitDaily = amount / 100 * percent[id];
			profitDaily = profitDaily.toFixed(8);
			profitWeekly = profitDaily * 7;
			profitWeekly = profitWeekly.toFixed(8);
			profitMonthly = profitDaily * 30;
			profitMonthly = profitMonthly.toFixed(8);
			summa = profitDaily *30;
			summa = summa.toFixed(8);


			if(amount < minMoney[id] || isNaN(amount) == true){
				$("#profit").text("Error!");
				$("#profitDaily").text("Error!");
				$("#profitWeekly").text("Error!");
				$("#profitMonthly").text("Error!");
			} else {
				$("#profit").text(summa);
				$("#profitDaily").text(profitDaily);
				$("#profitWeekly").text(profitWeekly);
				$("#profitMonthly").text(profitMonthly);
				
				$("#percent").text("(" + percent[id] * days + "%)");
				$("#percentDaily").text("(" + percent[id] + "%)");
				$("#percentMonthly").text("(" + percent[id] * 30 + "%)");
			}
		} else {
			$("#profit").text("Error!");
			$("#profitDaily").text("Error!");
			$("#profitWeekly").text("Error!");
			$("#profitMonthly").text("Error!");
		}
	}
	if($("#amount").length){
		calc();
	}
	$("#amount, #days").keyup(function(){
		calc();
	});
});
