// map classes to DB
dataPool.map(
    User,
    Project,
    Institution,
    Experience,
    Education
)

// used to inter-object casting
Loki.lokify(
    User,
    Project,
    Institution,
    Experience,
    Education
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
 * Education page
 */
pages.attach(
    'load_education_list',
    'templates/pages/education/_list.frgg',
    'education-list'
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
    'load_user_skills',
    'templates/pages/user/_skills.frgg',
    'user-skills'
)

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

/**
 * Nav Items
 */
pages.attach(
    'load_user_nav',
    'templates/common/nav/_user.frgg',
    'nav-user'
)

pages.attach(
    'load_user_nav_extras',
    'templates/common/nav/_user_extras.frgg',
    'nav-user-extras'
)

pages.attach(
    'load_user_nav_extra_footer',
    'templates/common/nav/_user_extra_footer.frgg',
    'nav-user-extra-footer'
)

pages.attach(
    'load_experience_nav',
    'templates/common/nav/_experience.frgg',
    'nav-experience'
)

pages.attach(
    'load_education_nav',
    'templates/common/nav/_education.frgg',
    'nav-education'
)

pages.attach(
    'load_projects_nav',
    'templates/common/nav/_projects.frgg',
    'nav-projects'
)