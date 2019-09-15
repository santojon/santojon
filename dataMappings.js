// map classes to DB
dataPool.map(
    Project,
    Experience
)

// used to inter-object casting
Loki.lokify(
    Project,
    Experience
)

// static page mappings (for Frgg pages)
pages.attach(
    'load_portifolio',
    'templates/pages/project/_list.frgg',
    'projects'
)

pages.attach(
    'load_experiences',
    'templates/pages/experience/_list.frgg',
    'experiences'
)