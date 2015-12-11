import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'


@inject( Database, Router )
export class Intro
{
	constructor( db, router )
	{
		this.db = db;
		this.router = router;
	}
	
	/**
	 * Calback after clicking button
	 */
	unsignedButtonClicked()
	{
		this.db.set( 'letterType', 3 );
		return this.router.navigateToRoute( 'voting-form' );
	}
}