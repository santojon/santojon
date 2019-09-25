with(
    Sgfd.Base.merge(
        MyjsonbridgeService,
        InstitutionService
    )
) {
    /**
     * The service that process and manage Education related data
     */
    var EducationService = new Sgfd.Service({
        metaName: 'EducationService',
        /**
         * Get all the experiences from DB
         */
        getAllEducation() {
            return getAllInstitutions().then(() => {
                return fetchEducationList()
            })
        }
    })
}