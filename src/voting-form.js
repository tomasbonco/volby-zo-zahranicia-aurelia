import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'

@inject( Database, Router )
export class VotingForm {
	
	constructor( db, router )
	{
		this.db = db;
		this.router = router;
		
		this.form = {
			showRepresentative: false,
			showSlovakAddress: false,
			showForeignAddress: false
		}
	}
	
	activate()
	{
		let letterType = this.db.get('letterType');
		
		if ( letterType === undefined )
		{
			this.router.navigateToRoute( 'intro' );
		}
		
		switch ( letterType )
		{
			case 0: // Chcem volit postou
			
				this.form.showSlovakAddress = true;
				this.form.showForeignAddress = true;
				break;
			
			case 1: // Chcem hlasovaci preukaz postou do vl. ruk
			
				this.form.showSlovakAddress = true;
				this.form.showForeignAddress = true;
				break;
			
			case 2: // Pre preukaz mi zajde na urad splnomocnenec
			
				this.form.showRepresentative = true;
				this.form.showSlovakAddress = true;
				break;
			
			case 3: // Odhlaseny
			
				this.form.showForeignAddress = true;
				break;
		}
	}
	
	submitForm()
	{
		// TODO: Validation
		this.db.set('formData', this.field );
		this.router.navigateToRoute( 'pdf-preview' );
	}
}