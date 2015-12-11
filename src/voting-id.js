import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';
import {Database} from 'lib/database'


@inject( Database, Router )
export class VotingId
{
	constructor( db, router )
	{
		this.db = db;
		this.router = router;
	}
	
	viaPostToHands()
	{
		this.db.set( 'letterType', 1 );
		this.router.navigateToRoute( 'voting-form' );
	}
	
	usingRepresentative()
	{
		this.db.set( 'letterType', 2 );
		this.router.navigateToRoute( 'voting-form' );
	}
}