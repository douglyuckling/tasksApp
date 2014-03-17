requirejs.config({
    baseUrl: "js/lib",
    paths: {
        'app': "../app",
        'jquery': "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min",
        'underscore': "//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.compat.min",
        'backbone': "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
        'd3': "//cdnjs.cloudflare.com/ajax/libs/d3/3.4.2/d3.min",
        'bootstrap': "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'd3': {
            exports: 'd3'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

requirejs(['app/main']);
