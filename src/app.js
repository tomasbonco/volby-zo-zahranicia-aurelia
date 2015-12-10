export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      	moduleId: 'welcome',      	nav: true, title: 'Welcome' },
			{ route: 'abroad',				name: 'abroad',      		moduleId: 'abroad',      		nav: true, title: 'Zahraničie' },
      { route: 'voting-card',   name: 'voting-card',    moduleId: 'voting-card',  	nav: true, title: 'Github Users' },
      { route: 'voting-letter', name: 'voting-letter', 	moduleId: 'voting-letter', 	nav: true, title: 'Child Router' },
			{ route: 'pdf-preview', 	name: 'pdf-preview', 		moduleId: 'pdf-preview', 		nav: true, title: 'Child Router' },
			{ route: 'sign_pdf', 			name: 'sign_pdf', 			moduleId: 'sign_pdf', 			nav: true, title: 'Child Router' },
			{ route: 'pdf_final', 		name: 'pdf_final', 			moduleId: 'pdf_final', 			nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
