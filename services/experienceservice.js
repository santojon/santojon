with(MyjsonbridgeService) {
    /**
     * The service that process and manage Experience related data
     */
    var ExperienceService = new Sgfd.Service({
        metaName: 'ExperienceService',
        /**
         * Get all the experiences from DB
         */
        getAllExperiences() {
            return fetchExperiences()
        }
    })
}