with(MyjsonBridge) {
    var MyjsonbridgeService = new Sgfd.Service({
        metaName: 'MyjsonbridgeService',

        /**
         * Get users from bridge
         */
        fetchUsers: () => {
            return $.get(MyjsonBridge.bridgeTo('users'), (users, textStatus, jqXHR) => {
                users.forEach((user) => {
                    new User(user).save(() => {
                        // Get user language translations after save (if given)
                        if (user.translations) {
                            $.get(user.translations, (translations, textStatus, jqXHR) => {
                                // Update App translations
                                if (_language) {
                                    _language = Sgfd.Base.merge(
                                        _language,
                                        translations
                                    )
                                } else {
                                    _language = translations
                                }
                            })
                        }
                    })
                })
            })
        },

        /**
         * Get institutions from bridge
         */
        fetchInstitutions: () => {
            return $.get(MyjsonBridge.bridgeTo('institutions'), (institutions, textStatus, jqXHR) => {
                institutions.forEach((institution) => {
                    new Institution(institution).save()
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
                    project.owner = User.find({
                        username: project.owner
                    })
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
                    experience.company = Institution.find({
                        name: experience.company
                    })
                    experience.user = User.find({
                        username: experience.user
                    })
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