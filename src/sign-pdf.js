import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'
import {PDF} from 'lib/pdf';
import {Signature} from 'lib/signature';


@inject( Database, Router, Signature )
export class SignPdf
{
	constructor( db, router, signature )
	{
		this.db = db;
		this.router = router;
		this.signature = signature;
		
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
		
		this.signature.initialize();
	}
	
	signedClicked()
	{
		let data = this.signature.getSignatureURL();
		
		if ( data.length > 0 )
		{
			this.router.navigateToRoute('pdf-final')
		}
	}
	
	clearSignatureClicked()
	{
		this.signature.clearSignature()
	}
}