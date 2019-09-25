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
                setTimeout(() => {
                    pages.Experience({
                        experiences: Experience.findWhere((experience) => {
                            return experience.user.username == user.username
                        }).orderBy('startDate', 'desc')
                    })
                }, 1000)
            })
        }
    }
}