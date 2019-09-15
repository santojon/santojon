// 'imports'
with(ProjectService) {
    /**
     * Action functions for 'Project' domain
     */
    var ProjectController = new Sgfd.Controller({
        metaName: 'ProjectController',

        /**
         * Load all projects
         * @param params: params from page
         */
        index(params) {
            pages.load_portifolio()
        },

        /**
         * Get data from Service
         */
        getProjects() {
            return getAllProjects()
        }
    })
}