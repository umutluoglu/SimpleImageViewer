var rotateValue;
var showImageCount = document.getElementById("imageArea").getElementsByTagName('img').length;

window.onload = function() {
	showImage(1);
}

function zoom(value) {
	var zoomValue = 1.25;
	if(value == -1) {
		zoomValue = 0.75;
	}

	for(var i = 1; i <= showImageCount; i++) {
		img = document.getElementById("imageScan" + i);
		width = parseInt(img.style.width);
		height = parseInt(img.style.height);
		
		if(isNaN(width) || isNaN(height)) {
			width = img.width;
			height = img.height;
		}
		
		if(value == -1 && (width >=200 || height >= 200)) {
			img.style.width = (width * zoomValue)+"px";
			img.style.height = (height * zoomValue)+"px";
		}
		else if(value == 1 && (width <=3000 || height <= 3000)) {
			img.style.width = (width * zoomValue)+"px";
			img.style.height = (height * zoomValue)+"px";
		}
	}
}

function rotate(value) {
	if(rotateValue == undefined) {
		if(value == 1) {
			rotateValue = 0;
		}
		else {
			rotateValue = 2;
		}
	}
	else {
		if(value == 1) {
			rotateValue++;
		}
		else {
			rotateValue--;
		}
	}
	
	if(rotateValue == 4) {
		rotateValue = 0
	}
	else if(rotateValue == -1) {
		rotateValue = 3
	}
	
	for(var i = 1; i <= showImageCount; i++) {
		img = document.getElementById("imageScan" + i);
	
		if(rotateValue == 0) {
			img.className = "rotate90";
		}
		else if(rotateValue == 1) {
			img.className = "rotate180";
		}
		else if(rotateValue == 2) {
			img.className = "rotate270";
		}
		else if(rotateValue == 3) {
			img.className = "";
		}
	}

}

//
function showImage(val) {
	for (i = 1; i <= showImageCount; i++) {
		document.getElementById('imageScan' + i).style.display = 'none';
	}

	document.getElementById('imageScan' + val).style.display = '';
	currentShowingImageIndex = val;
}

// 
function scaleImages(scaleValue) {
	var divWidth = parseInt(document.getElementById("imageArea").style.width) - 2;
	var divHeight = parseInt(document.getElementById("imageArea").style.height) - 2;
	
	for(var i = 1; i <= showImageCount; i++) {
		img = document.getElementById("imageScan" + i);
		width = img.width;
		height = img.height;
		
		if(width == 0 || height == 0) {
			width = $("#imageScan" + i).css('width');
			width = img.clientWidth;
			height = img.clientHeight;
		}
		
		var widthRatio = divWidth / width;
		var heightRatio = divHeight / height;
		
		if(scaleValue == "vertical") {
			img.style.width = (width * heightRatio)+"px";
			img.style.height = (height * heightRatio)+"px";
		}
		else if(scaleValue == "horizontal") {
			img.style.width = (width * widthRatio)+"px";
			img.style.height = (height * widthRatio)+"px";
		}
		else {
			if(widthRatio >= heightRatio) {
				img.style.width = (width * heightRatio)+"px";
				img.style.height = (height * heightRatio)+"px";
			}
			else {
				img.style.width = (width * widthRatio)+"px";
				img.style.height = (height * widthRatio)+"px";
			}
		}
	}
}