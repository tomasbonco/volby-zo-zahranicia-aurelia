export class Signature
{
	constructor()
	{
		this.signature = null;
		this.canvas = null;
	}
	
	initialize()
	{
		this.canvas = document.querySelector( 'canvas' );
		this.resizeCanvas();
		
		this.signature = new window.SignaturePad( this.canvas );
	}
	
	clearSignature()
	{
		this.signature.clear();
	}
	
	getSignatureURL()
	{
		return this.signature.toDataURL();
	}
	
	resizeCanvas()
	{
		// When zoomed out to less than 100%, for some very strange reason,
		// some browsers report devicePixelRatio as less than 1
		// and only part of the canvas is cleared then.
		var ratio =  Math.max(window.devicePixelRatio || 1, 1);
		this.canvas.width = this.canvas.offsetWidth * ratio;
		this.canvas.height = this.canvas.offsetHeight * ratio;
		this.canvas.getContext("2d").scale(ratio, ratio);
	}
}