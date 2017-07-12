
	var arr="abcdefghijklmnopqrstuvwxyz".split('');
	var guesses_left=9;
	var guesses_so_far=[];
	var wins=0;
	var loss=0;
	var myChoice= Math.floor(Math.random()*25);

	document.onkeyup = function(event){

		var inp=event.key;
		console.log(inp,myChoice,arr[myChoice]);
		
		if (/[a-zA-Z]/.test(inp)){		
			guesses_left--;
			if(guesses_left>-1){
				guesses_so_far.push(inp);
				decideresult(inp,guesses_left);
				document.getElementById("gleft").textContent=guesses_left;
				document.getElementById("guesses").textContent=guesses_so_far;
			}
			else{
				reset();
			}
				
	}
		document.getElementById("win").textContent=wins;
		document.getElementById("loss").textContent=loss;
		
}
function decideresult(x,y){
	
	if(y==0){
		loss++;
		document.getElementById("Result").textContent="Lost";
		reset();
	}
	else if(x==arr[myChoice]){
		wins++;
		document.getElementById("Result").textContent="Win";
		reset();
	}
	else{
		document.getElementById("Result").textContent="Try again";
	}

}
function reset(){
	guesses_left=9;
	guesses_so_far=[];
	myChoice= Math.floor(Math.random()*25);
	console.log(myChoice,Math.floor(Math.random()*25));
}