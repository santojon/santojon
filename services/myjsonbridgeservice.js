with(MyjsonBridge) {
    var MyjsonbridgeService = new Sgfd.Service({
        metaName: 'MyjsonbridgeService',

        /**
         * Get users from bridge
         */
        fetchUsers: () => {
            return $.get(MyjsonBridge.bridgeTo('users'), (users, textStatus, jqXHR) => {
                users.forEach((user) => {
                    new User(user).save()
                })
            })
        },

        /**
         * Get projects from bridge
         */
        fetchProjects: () => {
            return $.get(MyjsonBridge.bridgeTo('projects'), (projects, textStatus, jqXHR) => {
                projects.forEach((project) => {
                    project.lastUpdate = new Date(project.lastUpdate)
                    project.owner = User.find({ username: project.owner })
                    new Project(project).save()
                })
            })
        },

        /**
         * Get experiences from bridge
         */
        fetchExperiences: () => {
            return $.get(MyjsonBridge.bridgeTo('experiences'), (experiences, textStatus, jqXHR) => {
                experiences.forEach((experience) => {
                    experience.company = new Institution(experience.company)
                    experience.startDate = new Date(experience.startDate)
                    if (experience.endDate) {
                        experience.endDate = new Date(experience.endDate)
                    } else {
                        experience.endDate = __('Present')
                    }
                    new Experience(experience).save()
                })
            })
        }
    })
}