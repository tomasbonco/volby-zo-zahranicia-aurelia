import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'
import {PDF} from 'lib/pdf';
import {PdfData} from 'data/pdfData';

@inject( Database, Router, PDF, PdfData )
export class PdfPreview
{
	constructor( db, router, pdf, pdfData )
	{
		this.db = db;
		this.router = router;
		this.pdf = pdf;
		this.pdfData = pdfData;
		
		this.iframeSrc = null;
	}
	
	activate()
	{
		let letterType = this.db.get('letterType');
		let formData = this.db.get('formData');
		
		if ( letterType === undefined || formData === undefined ) // we suppose user opened page with wrong hash
		{
			this.router.navigateToRoute( 'intro' );
		}
		
		let styles = this.pdfData.getPDFStyles();
		Object.keys( styles ).forEach( ( key )=>
		{
			this.pdf.setStyle( key, styles[key])
		})
		
		
		this.pdf.content =  this.pdfData.getPDFContent( letterType, formData );
		this.pdf.generatePDF();
		
		this.pdf.getUrlAsPromise().then(( url )=>
		{
			this.iframeSrc = url
		})
		.catch( ( e )=>{ console.error( e ) } );
		
		return true;
	}
	
	downloadPDFClicked()
	{
		this.pdf.openPDF()
	}
}