var appConfig = {
    front: {
        styles: ['resume', 'stylish-portfolio', 'style'],
        scripts: ['resume', 'stylish-portfolio', 'utils'],
        externalStyles: [
            '/apps/santojon' + '/assets/vendor/bootstrap/css/bootstrap.min.css',
            '/apps/santojon' + '/assets/vendor/fontawesome-free/css/all.min.css',
            '/apps/santojon' + '/assets/vendor/simple-line-icons/css/simple-line-icons.css'
        ],
        externalScripts: [
            '/apps/santojon' + '/assets/vendor/jquery/jquery.min.js',
            '/apps/santojon' + '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
            '/apps/santojon' + '/assets/vendor/jquery-easing/jquery.easing.min.js'
        ]
    },
    back: {
        views: ['home', 'project'],
        bridges: ['myjson'],
        bwfDomains: ['project'],
        services: ['myjsonbridge', 'project'],
        controllers: ['home', 'project']
    },
    conf: {
        appName: 'Jonathan Santos (@santojon)',
        language: navigator.language || 'pt-BR',
        dependencies: [
            norse.bwf.full,
            norse.bhdr,
            norse.frgg,
            norse.hdllr,
            norse.loki
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pageLoader: 'Frgg',
        securityWatcher: 'Hdllr',
        session: true,
        bwfDomain: true,
        bootstrap: true,
        debug: {
            controllers: true,
            services: true,
            bridges: true
        },
        transactional: {
            controllers: false,
            services: true,
            bridges: false
        },
        production: false
    }
}