/**
 * The behaviour description for Education pages
 * @param params: params object used to load different user areas
 */
pages.Education = (params) => {
    // add direct support for EducationController functions
    with(EducationController) {
        if (params) {
            if (params.educationList) {
                index(params.educationList)
            }
        } else {
            // Resolve promisse and update the view with projects
            getEducationList().then(() => {
                pages.Education({
                    educationList: Education.findAll().orderBy('startDate', 'desc')
                })
            })
        }
    }
}