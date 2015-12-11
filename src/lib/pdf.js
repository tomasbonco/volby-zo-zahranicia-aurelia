export class Pdf
{
	constructor()
	{
		this.styles = {}
		this.content = []
		this.pdf = null
	}
	
	setStyle( name, style )
	{
		if ( ! name ) throw new Error('Missing required paramter name');
		if ( ! style ) throw new Error('Missing required paramter style');
		
		this.styles[ name ] = style
	}
	
	removeStyle( name )
	{
		this.styles[ name ] = null;
		delete this.styles[ name ];
	}
	
	addContent( content )
	{
		this.content.push( content );
	}
	
	removeContent( content )
	{
		this.content.splice( this.content.indexOf( content ), 1 );
	}
	
	generatePdf()
	{
		this.pdf = window.pdfMake.createPdf( { styles: this.styles, content: this.content } );
	}
	
	getUrlAsPromise()
	{
		return new Promise(( resolve, reject )=>
		{
			this.pdf.getDataUrl(( url )=>
			{
				if ( url )
				{
					return resolve( url );
				}
				
				throw new Error('URL not generated');
			})
		})
	}
	
	openPdf()
	{
		this.pdf.open();
	}
}