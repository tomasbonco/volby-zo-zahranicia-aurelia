import {cities} from 'data/cities'

export class PdfData
{
	getPDFContent( letterType, data, signature )
	{
		let letterContent = [];
		let paragraph = '';
		let localAddress = [];
		let noVotingId = [];
		let statement = [];
		let votingIdHeader = '';
		let votingIdDelivery = [];
		
		
		let signature1 = ! signature ? [] :[
			{text: '', style: 'space'},
			{
				text: ['V ', {text: data.foreignAddress ? data.foreignAddress.street : '', style: 'value'}],
				style: 'footer',
			},
			{
				text: ['Dátum: ', {text: this.getDate(), style: 'value'}],
				style: 'footer',
			},
			{
				image: signature, width: 120, style: 'signatureStyle'
			},
			{
				text: '                      Podpis                      ',
				style: 'signatureTextStyle'
			}
		];
		
		let signature2 = ! signature ? [] : [
			{text: '', style: 'space'},
			{
				text: ['V ', {text: data.foreignAddress ? data.foreignAddress.street : '', style: 'value'}],
				style: 'footer',
			},
			{
				text: ['Dátum: ', {text: this.getDate(), style: 'value'}],
				style: 'footer',
			},
			{
        		image:signature, width: 150, alignment: 'right'
			},
			{
				text: '                      Podpis                      ',
				style: 'signatureTextStyle'
			}
		];
		
		if ( letterType === 0 )
		{
			paragraph = 'Podľa   § 60 ods. 1   zákona   č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016.';
			localAddress =
			[
				{text: '', style: 'spacesmall'},
				{
					text: 'Adresa trvalého pobytu v Slovenskej republike:',
					style: 'line',
					//style: 'header', 
					bold: true
				},
				{
					columns: [
						{text: 'Ulica: ', style: 'line',},
						{text: data.slovakAddress.street.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns: [
						{text: 'Číslo domu: ', style: 'line',},
						{text: data.slovakAddress.streetno.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns: [
						{text: 'Obec: ', style: 'line',},
						{text: data.slovakAddress.city.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns: [
						{text: 'PSČ: ', style: 'line',},
						{text: data.slovakAddress.zip, style: 'value'},
						{text: ''}
					]
				},
				{text: '', style: 'spacesmall'},
				{
					text: 'Adresa miesta pobytu v cudzine (pre zaslanie hlasovacích lístkov a obálok):',
					style: 'line',
					//style: 'header', 
					bold: true
				}
			];
		}
		
		else if ( letterType === 3 )
		{
			paragraph = 'Podľa   § 59 ods. 1   zákona   č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov žiadam o voľbu poštou pre voľby do Národnej rady Slovenskej republiky v roku 2016 a o zaslanie hlasovacích lístkov a obálok na adresu:';
			noVotingId =
			[
				{text: '', style: 'spacesmall'},
				{
					text: 'Prílohy:',
					style: 'header',
					alignment: 'left'
				},
				{
					ul:
					[
						'čestné vyhlásenie voliča, že nemá trvalý pobyt na území Slovenskej republiky.',
						'fotokópia časti cestovného dokladu Slovenskej republiky s osobnými údajmi voliča alebo fotokópia osvedčenia o štátnom občianstve Slovenskej republiky voliča.',
					]
				}
			];
			
			statement =
			[
				{
					text: data.name + ' ' + data.lastname + ' ' + data.birthno,
					alignment: 'center',
					pageBreak: 'before'
				},
				{
					text: this.getAddress( data.foreignAddress ),
					alignment: 'center',
				},
				
				{text: '', style: 'space'},
				{
					text: 'ČESTNÉ VYHLÁSENIE',
					style: 'header',
					alignment: 'center'
				},
				{text: '', style: 'space'},
				{
					text: 'Na účely voľby poštou do Národnej rady Slovenskej republiky v roku 2016',
					alignment: 'center'
				},
				{text: '', style: 'space'},
				{
					text: 'čestne vyhlasujem,',
					style: 'header',
					alignment: 'center'
				},
				{text: '', style: 'space'},
				{
					text: 'že nemám trvalý pobyt na území Slovenskej republiky.'
				},
				signature2
			];
			
		}
		
		if ( letterType === 0 || letterType === 3 )
		{
			letterContent =
			[
				{
					text: 'Žiadosť',
					style: 'header',
					alignment: 'center'
				},
				{
					text: 'o voľbu poštou',
					style: 'header',
					alignment: 'center'
				},
				{
					text: 'pre voľby do Národnej rady Slovenskej republiky v roku 2016',
					style: 'header',
					alignment: 'center'
				},
				{text: '', style: 'space'},
				{
					text: this.subjectAddress( data.slovakAddress ? data.slovakAddress.city : '' ), // TODO: Add default address
					style: 'address',
				},
				{text: '', style: 'space'},
				
				{text: [ paragraph ]},
				
				{text: '', style: 'spacesmall'},
				{
					columns:
					[
						{text: 'Meno: ', style: 'line',},
						{text: data.name.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'Priezvisko: ', style: 'line',},
						{text:data.lastname.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'Rodné priezvisko: ', style: 'line',},
						{text: data.maidenlastname.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
				columns:
					[
						{text: 'Rodné číslo: ', style: 'line',},
						{text: data.birthno.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				localAddress,
				{
					columns:
					[
						{text: 'Ulica: ', style: 'line',},
						{text: data.foreignAddress.street.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'Číslo domu: ', style: 'line',},
						{text: data.foreignAddress.streetno.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'Obec: ', style: 'line',},
						{text: data.foreignAddress.city.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'PSČ: ', style: 'line',},
						{text: data.foreignAddress.zip, style: 'value'},
						{text: ''}
					]
				},
				{
					columns:
					[
						{text: 'Štát: ', style: 'line',},
						{text: data.foreignAddress.country.toUpperCase(), style: 'value'},
						{text: ''}
					]
				},
				noVotingId
			]
		}
		if ( letterType === 1 )
		{
			votingIdHeader = 'Žiadosť o vydanie hlasovacieho preukazu';
			votingIdDelivery =
			[
				{
					text: 'Hlasovací preukaz žiadam zaslať na adresu:',
					style: 'line',
					alignment: 'left'
				},
				{
					columns:
					[
						{
						text: ['Meno: ', {text: data.name.toUpperCase(), style: 'value'}],
						},
						{
						text: ['Priezvisko: ', {text: data.lastname.toUpperCase(), style: 'value'}],
						}
					]
				},
				{
					text: ['Adresa: ', {text: this.getAddress( data.foreignAddress ).toUpperCase(), style: 'value'}],
					style: 'line'
				}
			]
		}
		
		if ( letterType === 2 )
		{
			votingIdHeader = 'Žiadosť o vydanie hlasovacieho preukazu a splnomocnenie na jeho prevzatie';
			votingIdDelivery =
			[
				{
					text: 'Na prevzatie hlasovacieho preukazu podľa § 46 ods. 6 zákona  splnomocňujem:',
					style: 'line',
					alignment: 'left'
				},
				{
					columns:
					[
						{
						text: ['Meno: ', {text: data.representative.name.toUpperCase(), style: 'value'}],
						},
						{
						text: ['Priezvisko: ', {text: data.representative.lastname.toUpperCase(), style: 'value'}],
						}
					]
				},
				{
					text: ['Číslo občianskeho preukazu: ', {text: data.representative.idno.toUpperCase(), style: 'value'}],
					style: 'line'
				}
			]
		}
		
		if ( letterType === 1 || letterType === 2)
		{
			letterContent =
			[
				{
					text: this.subjectAddress( data.slovakAddress ? data.slovakAddress.city : '' ),
					style: 'address',
				},
				{text: '', style: 'space'},
				{
					text: votingIdHeader,
					style: 'header',
					alignment: 'left'
				},
				{text: '', style: 'space'},
				{
					columns:
					[
						{
							text: ['Meno: ', {text: data.name.toUpperCase(), style: 'value'}],
							style: 'line',
							},
						{
							text: ['Priezvisko: ', {text: data.lastname.toUpperCase(), style: 'value'}],
							style: 'line',
						},
					]
				},
				{
					columns:
					[
						{
							text: ['Rodné číslo: ', {text: data.birthno, style: 'value'}],
							style: 'line',
						},
						{
							text: ['Štátna príslušnosť: ', {text: 'Slovenská republika'.toUpperCase(), style: 'value'}],
							style: 'line',
						}
					]
				},
				{
					text: ['Adresa trvalého pobytu: ', {text: this.getAddress( data.slovakAddress ).toUpperCase(), style: 'value'}],
					style: 'line',
				},
				{text: '', style: 'space'},
				{
					text: 'žiadam',
					style: 'header',
					alignment: 'center'
				},
				{text: '', style: 'space'},
				{
					text:
					[
						{text: 'podľa § 46 zákona č. 180/2014 Z. z. o podmienkach výkonu volebného práva a o zmene a doplnení niektorých zákonov '},
						{text: 'o vydanie hlasovacieho preukazu', bold: true},
						{text: ' pre voľby do Národnej rady Slovenskej republiky v roku 2016.'},
					]
				},
				{text: '', style: 'space'},
				votingIdDelivery
			]
		}
		return [letterContent,
			signature1,
			statement || [],
			[]];
	}
	
	getDate()
	{
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();
		
		if (dd < 10)
		{
			dd = '0' + dd
		}
		
		if (mm < 10)
		{
			mm = '0' + mm
		}
		
		return `${dd}. ${mm}. ${yyyy}`;
	}
	
	getAddress( data )
	{
		let ret = "";
		
		if ( data.street )
		{
			ret += data.street + " " + data.streetno;
		}
		
		else
		{
			ret += data.city + " " + data.streetno;
		}
		
		
		if (ret != " ")
		{
			ret += ", ";
		}
		
		ret += data.zip + " " + data.city;
		
		if (ret != " ")
		{
			ret += ", ";
		}
		
		if ( ! data.country )
		{
			ret += "Slovenská republika";
		}
		
		else
		{
			ret += data.country;
		}
		
		return ret;
	}
	
	subjectAddress( ico )
	{
		let address = '';
		
		if (ico)
		{
			if ( cities[ico] )
			{
				address = cities[ico][0 ] + "\n";
				if (cities[ico][1] != "")
				{
				address += cities[ico][1] + "\n";
				}
				
				if (cities[ico][2] != "" || cities[ico][3] != "")
				{
					if (cities[ico][2])
					{
					address += cities[ico][2] + " ";
					}
					
					if (cities[ico][3])
					{
					address += cities[ico][3];
					}
					
					address += "\n";
				}
			
				address += cities[ico][4] + " " + cities[ico][5] + "\n" + cities[ico][6];
			}
		}
		
		return address;
	}
	
	getPDFStyles()
	{
		return {
			header: {
				fontSize: 12,
				bold: true,
				alignment: 'justify'
			},
			value: {
				fontSize: 12,
				bold: true,
				decoration: 'underline',
				decorationStyle: 'dotted'
			},
			address: {
				fontSize: 12,
				italic: true,
				alignment: 'justify',
				margin: [260, 10, 10, 10],
			},
			line: {
				fontSize: 12,
				margin: [0, 0, 0, 0],
				padding: [0, 0, 0, 0]
			},
			footer: {
				fontSize: 12,
				margin: [0, 0, 0, 0],
				padding: [0, 0, 0, 0]
			},
			space: {
				fontSize: 12,
				margin: [0, 50, 0, 0]
			},
			spacesmall: {
				fontSize: 12,
				margin: [0, 20, 0, 0]
			},
			signatureStyle: {
				margin: [0, -150, 0, 0],
				alignment: 'right'
			},
			signatureTextStyle: {
				decoration: 'overline',
				decorationStyle: 'dotted',
				alignment: 'right',
				margin: [30, 10],
				fontSize: 9
			}
		}
	}
}