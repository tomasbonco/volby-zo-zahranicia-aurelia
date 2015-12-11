export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      	moduleId: 'welcome',      	nav: true, title: 'Welcome' },
			{ route: 'intro',					name: 'intro',      		moduleId: 'intro',      		nav: true, title: 'Zahraničie' },
			{ route: 'abroad',				name: 'abroad',      		moduleId: 'abroad',      		nav: true, title: 'Zahraničie' },
      { route: 'voting-card',   name: 'voting-card',    moduleId: 'voting-card',  	nav: true, title: 'Github Users' },
      { route: 'voting-form',   name: 'voting-form', 	  moduleId: 'voting-form', 	  nav: true, title: 'Child Router' },
			{ route: 'pdf-preview', 	name: 'pdf-preview', 		moduleId: 'pdf-preview', 		nav: true, title: 'Child Router' },
			{ route: 'sign-pdf', 			name: 'sign-pdf', 			moduleId: 'sign-pdf', 			nav: true, title: 'Child Router' },
			{ route: 'pdf-final', 		name: 'pdf-final', 			moduleId: 'pdf-final', 			nav: true, title: 'Child Router' },
			{ route: 'foreign-id', 		name: 'foreign-id', 			moduleId: 'foreign-id', 			nav: true, title: 'Child Router' },
			{ route: 'voting-id', 		name: 'voting-id', 			moduleId: 'voting-id', 			nav: true, title: 'Child Router' },
			{ route: 'send-section', 		name: 'send-section', 			moduleId: 'send-section', 			nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
