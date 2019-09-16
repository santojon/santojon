var appConfig = {
    front: {
        styles: ['resume', 'stylish-portfolio', 'style'],
        scripts: ['resume', 'stylish-portfolio', 'utils'],
        externalStyles: [
            '/assets/vendor/bootstrap/css/bootstrap.min.css',
            '/assets/vendor/fontawesome-free/css/all.min.css',
            '/assets/vendor/simple-line-icons/css/simple-line-icons.css'
        ],
        externalScripts: [
            '/assets/vendor/jquery/jquery.min.js',
            '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
            '/assets/vendor/jquery-easing/jquery.easing.min.js'
        ]
    },
    back: {
        views: ['home', 'user', 'project', 'experience'],
        bridges: ['myjson'],
        bwfDomains: ['user', 'project', 'institution', 'experience'],
        services: ['myjsonbridge', 'user', 'project', 'experience'],
        controllers: ['home', 'user', 'project', 'experience']
    },
    conf: {
        appName: 'Jonathan Santos (@santojon)',
        language: navigator.language || 'pt-BR',
        dependencies: [
            'libs/bwf.full.js',
            'libs/bhdr.js',
            'libs/frgg.js',
            'libs/hdllr.js',
            'libs/loki.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pageLoader: 'Frgg',
        securityWatcher: 'Hdllr',
        session: true,
        bwfDomain: true,
        bootstrap: false,
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
        production: true
    }
}