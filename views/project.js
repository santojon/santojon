/**
 * The behaviour description for Project pages
 * @param params: params object used to load different user areas
 */
pages.Project = (params) => {
    // add direct support for ProjectController functions
    with(ProjectController) {
        if (params) {
            if (params.projects) {
                index(params.projects)
            }
        } else {
            // Resolve promisse and update the view with projects
            getProjects().then(() => {
                setTimeout(() => {
                    pages.Project({
                        projects: Project.findWhere((project) => {
                            return project.owner.username == user.username
                        }).orderBy('lastUpdate', 'desc')
                    })
                }, 3000)
            })
        }
    }
}