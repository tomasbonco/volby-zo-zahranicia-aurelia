export class Database
{
	constructor()
	{
		this.storage = new Map();
	}
	
	set( key, value )
	{
		if ( ! key ) throw new Error('Missing required parameter key');
		if ( value == undefined ) throw new Error('Missing required parameter value');
		
		this.storage.set( key, value );
	}
	
	get( key )
	{
		if ( ! key ) throw new Error('Missing required parameter key');
		
		return this.storage.get( key );
	}
}