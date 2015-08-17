requirejs.config({
    // By default load any module IDs from js/
    baseUrl: 'js',
    // except, if the module ID starts with "panel", load it from the js/panel
    // directory. paths config is relative to the baseUrl, and never includes
    // a ".js" extension since the paths config could be for a directory.
    paths: {
        panel: 'panel'
    }
});

// Start the main app logic.
requirejs(['app'], function (app) {
  app.init();
});

