// map classes to DB
dataPool.map(
    Project
)

// used to inter-object casting
Loki.lokify(
    Project
)

// static page mappings (for Frgg pages)
pages.attach(
    'load_portifolio',
    'templates/pages/project/_list.frgg',
    'projects'
)