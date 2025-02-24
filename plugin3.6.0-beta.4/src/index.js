'use strict'

// import { registerRoute } from '../../routes'
import { registerRoute } from '@/routes'

//import Vue file;
import httpViewer from './httpViewer.vue'


// Register a route
registerRoute(httpViewer, {
	Plugins: {
		httpViewer: {
			icon: 'mdi-transition',
			caption: 'httpViewer',
			path: '/httpViewer'
		}
	}
});