with (DataBridge) {
    var DataBridgeService = new Sgfd.Service({
        metaName: 'DataBridgeService',

        /**
         * Get users from bridge
         */
        fetchUsers: () => {
            return $.get(DataBridge.bridgeTo('users'), (users, textStatus, jqXHR) => {
                users.forEach((user) => {
                    new User(user).save(() => {
                        // Get user language translations after save (if given)
                        if (user.translations && user.translations[appConfig.conf.language]) {
                            $.get(user.translations[appConfig.conf.language], (translations, textStatus, jqXHR) => {
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
            return $.get(DataBridge.bridgeTo('institutions'), (institutions, textStatus, jqXHR) => {
                institutions.forEach((institution) => {
                    new Institution(institution).save()
                })
            })
        },

        /**
         * Get projects from bridge
         */
        fetchProjects: () => {
            return $.get(DataBridge.bridgeTo('projects'), (projects, textStatus, jqXHR) => {
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
         * Get education from bridge
         */
        fetchEducationList: () => {
            return $.get(DataBridge.bridgeTo('education'), (educationList, textStatus, jqXHR) => {
                educationList.forEach((education) => {
                    education.institution = Institution.find({
                        name: education.institution
                    })
                    education.user = User.find({
                        username: education.user
                    })
                    education.startDate = new Date(education.startDate)
                    if (education.endDate) {
                        education.endDate = new Date(education.endDate)
                    } else {
                        education.endDate = __('Present')
                    }
                    new Education(education).save()
                })
            })
        },

        /**
         * Get experiences from bridge
         */
        fetchExperiences: () => {
            return $.get(DataBridge.bridgeTo('experiences'), (experiences, textStatus, jqXHR) => {
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