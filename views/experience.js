/**
 * The behaviour description for Experience pages
 * @param params: params object used to load different user areas
 */
pages.Experience = (params) => {
    // add direct support for ExperienceController functions
    with(ExperienceController) {
        if (params) {
            if (params.experiences) {
                index(params.experiences)
            }
        } else {
            // Resolve promisse and update the view with projects
            getExperiences().then(() => {
                pages.Experience({
                    experiences: Experience.findAll().orderBy('startDate', 'desc')
                })
            })
        }
    }
}