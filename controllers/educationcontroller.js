// 'imports'
with(EducationService) {
    /**
     * Action functions for 'Education' domain
     */
    var EducationController = new Sgfd.Controller({
        metaName: 'EducationController',

        /**
         * Load all education
         * @param params: params from page
         */
        index(params) {
            pages.load_education_list()
        },

        /**
         * Get data from Service
         */
        getEducationList() {
            return getAllEducation()
        }
    })
}