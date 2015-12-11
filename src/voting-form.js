import {Database} from 'lib/database'
import {inject} from 'aurelia-framework'

@inject( Database )
export class VotingLetter {
	
	constructor( db )
	{
		this.db = db;
		
		this.form = {
			showRepresentative: false,
			showSlovakAddress: false,
			showForeignAddress: false
		}
	}
	
	activate()
	{
		let letterType = this.db.get('letterType');
		
		if ( ! letterType )
		{
			// TODO: redirect to intro
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
}