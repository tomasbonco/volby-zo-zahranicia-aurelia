export class Database
{
	constructor()
	{
		this.storage = new Map();
	}
	
	set( key, value )
	{
		this.storage.set( key, value );
	}
	
	get( key )
	{
		return this.storage.get( key );
	}
}