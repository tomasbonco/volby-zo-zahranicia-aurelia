export class PDF
{
	constructor()
	{
		this.styles = {}
		this.content = []
		this.pdf = null
	}
	
	setStyle( name, style )
	{
		if ( ! name ) throw new Error('Missing required parameter name');
		if ( ! style ) throw new Error('Missing required parameter style');
		
		this.styles[ name ] = style
	}
	
	removeStyle( name )
	{
		if ( ! name ) throw new Error('Missing required parameter name');
		
		this.styles[ name ] = null;
		delete this.styles[ name ];
	}
	
	addContent( content )
	{
		if ( ! content ) throw new Error('Missing required parameter content');
		
		this.content.push( content );
	}
	
	removeContent( content )
	{
		if ( ! content ) throw new Error('Missing required parameter content');
		
		this.content.splice( this.content.indexOf( content ), 1 );
	}
	
	generatePDF()
	{
		this.pdf = window.pdfMake.createPdf( { content: this.content, styles: this.styles } );
	}
	
	getUrlAsPromise()
	{
		let self = this;
		
		return new Promise(( resolve, reject )=>
		{
			console.log( JSON.stringify( this.pdf ) )
			self.pdf.getDataUrl(( url )=>
			{
				if ( url )
				{
					return resolve( url );
				}
				
				throw new Error('URL not generated');
			})
		})
	}
	
	openPDF()
	{
		this.pdf.open();
	}
}