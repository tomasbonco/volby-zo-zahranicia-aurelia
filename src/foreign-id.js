import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'


@inject( Database, Router )
export class ForeignId
{
	constructor( db, router )
	{
		this.db = db;
		this.router = router;
	}
	
	/**
	 * Callback clicked after pressing button
	 */
	voteViaPostClicked()
	{
		this.db.set( 'letterType', 0 );
		this.router.navigateToRoute( 'voting-form' );
	}
}