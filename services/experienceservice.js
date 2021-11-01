with (
Sgfd.Base.merge(
    DataBridgeService,
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