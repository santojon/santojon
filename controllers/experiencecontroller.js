// 'imports'
with(ExperienceService) {
    /**
     * Action functions for 'Experience' domain
     */
    var ExperienceController = new Sgfd.Controller({
        metaName: 'ExperienceController',

        /**
         * Load all experiences
         * @param params: params from page
         */
        index(params) {
            pages.load_experiences()
        },

        /**
         * Get data from Service
         */
        getExperiences() {
            return getAllExperiences()
        }
    })
}