with(
    Sgfd.Base.merge(
        MyjsonbridgeService,
        InstitutionService
    )
) {
    /**
     * The service that process and manage Experience related data
     */
    var ExperienceService = new Sgfd.Service({
        metaName: 'ExperienceService',
        /**
         * Get all the experiences from DB
         */
        getAllExperiences() {
            return getAllInstitutions().then(() => {
                return fetchExperiences()
            })
        }
    })
}