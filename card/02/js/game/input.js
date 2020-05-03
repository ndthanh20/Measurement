class Input {
	constructor(scene, x, y, weight) {
		this.create();
		this.weight = weight;
		this.inputBox = scene.add.image(x + 300, y + 20, "inputBox");
		this.updateinput(scene,x,y);
		this.inputText = scene.add.text(x + 290, y, null, {
			font: "40px Arial",
			fill: "#f00",
		});
	}

	create(scene,x,y) {
		this.text = null;
		this.textInput = null;
		this.weight = null;
	}

	updateinput(scene,x,y){
		if(this.weight === 5){	
			this.text = scene.add.text(x, y, "The dog weighs    	 pound", {
					font: "40px Arial",
					fill: "#000",
			});
			this.inputBox.x = x + 315;
		}
		if(this.weight === 8){	
			this.text = scene.add.text(x, y, "The cat weighs    	 pound", {
					font: "40px Arial",
					fill: "#000",
			});
		}
		if(this.weight === 6){	
			this.text = scene.add.text(x, y, "The pig weighs    	 pound", {
					font: "40px Arial",
					fill: "#000",
			});
		}
		if(this.weight === 1){	
			this.text = scene.add.text(x, y, "The monkey weighs    	 pound", {
					font: "40px Arial",
					fill: "#000",
			});
			this.inputBox.x = x + 385;
		}
		if(this.weight === 9){	
			this.text = scene.add.text(x, y, "The duck weighs    	 pound", {
					font: "40px Arial",
					fill: "#000",
			});
			this.inputBox.x = x + 330;
		}
	}

	clearInput() {
		this.text.destroy();
		this.inputText.destroy();
	}

	isTrue(input) {
		var weighInput = parseInt(input);
		if (weighInput === this.weight) {
			//this.text.setText("The toy weighs " + input + " pound");
			this.InputText(weighInput,input);
			this.inputText.setText(null);
			this.inputBox.destroy();
			return true;
		} else {
			this.inputText.setText(input);
			return false;
		}
	}
	InputText(weighInput,input){
		if(weighInput === 5)	this.text.setText("The dog weighs " + input + " pound");
		if(weighInput === 8)	this.text.setText("The cat weighs " + input + " pound");
		if(weighInput === 6)	this.text.setText("The pig weighs " + input + " pound");
		if(weighInput === 1)	this.text.setText("The monkey weighs " + input + " pound");
		if(weighInput === 9)	this.text.setText("The duck weighs " + input + " pound");
	}

}