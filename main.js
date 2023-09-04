
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
fabric.Image.fromURL(get_Image, function(img) {
	block-image-object.scaleTowidth(block_image_Width);
	block-image-object.scaleToheight(block_image_Heigth);
	block-image-object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_image_object);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?')
	{
		new_image('rr1.png');
		console.log("");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log("");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log("");
	}
	
}

