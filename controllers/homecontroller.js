// 'imports'
with(Sgfd.Base) {
    var HomeController = new Sgfd.Controller({
        metaName: 'HomeController',

        /**
         * Homepage
         */
        index(params) {
            if (params) {
                if (params.user) {
                    pages.User()
                }

                if (params.projects) {
                    pages.Project()
                }

                if (params.education) {
                    pages.Education()
                }

                if (params.experiences) {
                    pages.Experience()
                }
            }
        }
    })
}