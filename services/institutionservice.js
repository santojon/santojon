with(MyjsonbridgeService) {
    /**
     * The service that process and manage Institution related data
     */
    var InstitutionService = new Sgfd.Service({
        metaName: 'InstitutionService',
        /**
         * Get all the institutions from DB
         */
        getAllInstitutions() {
            return fetchInstitutions()
        }
    })
}