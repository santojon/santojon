with(MyjsonbridgeService) {
    /**
     * The service that process and manage Project related data
     */
    var ProjectService = new Sgfd.Service({
        metaName: 'ProjectService',
        /**
         * Get all the projects from DB
         */
        getAllProjects() {
            return fetchProjects()
        }
    })
}