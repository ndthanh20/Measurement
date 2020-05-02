class Input {
	constructor(scene, x, y, weight) {
		this.create();
		this.weight = weight;
		this.text = scene.add.text(x, y, "The toy weighs    	 pound", {
			font: "40px Arial",
			fill: "#000",
		});
		this.inputBox = scene.add.image(x + 300, y + 20, "inputBox");
		this.inputText = scene.add.text(x + 290, y, null, {
			font: "40px Arial",
			fill: "#f00",
		});
	}

	create() {
		this.text = null;
		this.textInput = null;
		this.weight = null;
	}

	clearInput() {
		this.text.destroy();
		this.inputText.destroy();
	}

	isTrue(input) {
		var weighInput = parseInt(input);
		if (weighInput === this.weight) {
			this.text.setText("The toy weighs " + input + " pound");
			this.inputText.setText(null);
			this.inputBox.destroy();
			return true;
		} else {
			this.inputText.setText(input);
			return false;
		}
	}
}