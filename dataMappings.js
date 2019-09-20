// map classes to DB
dataPool.map(
    User,
    Project,
    Experience
)

// used to inter-object casting
Loki.lokify(
    User,
    Project,
    Experience
)

// static page mappings (for Frgg pages)
/**
 * Projects page
 */
pages.attach(
    'load_portifolio',
    'templates/pages/project/_list.frgg',
    'projects'
)

/**
 * Experiences page
 */
pages.attach(
    'load_experiences',
    'templates/pages/experience/_list.frgg',
    'experiences'
)

/**
 * Default user info page
 */
pages.attach(
    'load_user_info',
    'templates/pages/user/_about.frgg',
    'user'
)

/**
 * Default user info on navbar
 */
pages.attach(
    'load_user_info_navbar',
    'templates/pages/user/_navbar.frgg',
    'user-info'
)

/**
 * Default user interests
 */
pages.attach(
    'load_user_interests',
    'templates/pages/user/_interests.frgg',
    'user-interests'
)

/**
 * Default user skills
 */
pages.attach(
    'load_user_skills_languages',
    'templates/pages/user/_skills_languages.frgg',
    'languages'
)

pages.attach(
    'load_user_skills_qualifications',
    'templates/pages/user/_skills_qualifications.frgg',
    'qualifications'
)

/**
 * Default user footer data
 */
pages.attach(
    'load_user_footer',
    'templates/pages/user/_footer.frgg',
    'user-footer'
)