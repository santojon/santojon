// 'imports'
with (Sgfd.Base) {
    var HomeController = new Sgfd.Controller({
        metaName: 'HomeController',

        /**
         * Homepage
         */
        index(params) {
            if (params) {
                if (params.user) {
                    pages.load_user_nav()
                    pages.load_user_nav_extras()
                    pages.load_user_nav_extra_footer()
                    pages.User()

                    if (params.experiences) {
                        pages.load_experience_nav()
                        pages.Experience()
                    }

                    if (params.education) {
                        pages.load_education_nav()
                        pages.Education()
                    }

                    if (params.projects) {
                        pages.load_projects_nav()
                        pages.Project()
                    }
                }

                updateSmoothScrolling(jQuery)
            }
        }
    })
}