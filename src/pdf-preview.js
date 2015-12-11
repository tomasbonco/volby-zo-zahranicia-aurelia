import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'
import {PDF} from 'lib/pdf';


@inject( Database, Router, PDF )
export class PdfPreview
{
	constructor( db, router, pdf )
	{
		this.db = db;
		this.router = router;
		this.pdf = pdf;
		
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
		
		this.pdf.generatePDF();
		
		this.pdf.getUrlAsPromise().then(( url )=>
		{
			this.iframeSrc = url
		});
	}
	
	downloadPDFClicked()
	{
		this.pdf.openPDF()
	}
}