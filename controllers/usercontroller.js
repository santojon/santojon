// 'imports'
with(UserService) {
    /**
     * Action functions for 'User' domain
     */
    var UserController = new Sgfd.Controller({
        metaName: 'UserController',

        /**
         * Load all current user
         * @param params: params from page
         */
        index(params) {
            pages.load_user_info()
            pages.load_user_info_navbar()
            pages.load_user_interests()
            pages.load_user_footer()
            pages.load_user_skills()
            pages.load_user_skills_languages()
            pages.load_user_skills_qualifications()
        },

        /**
         * Get data from Service
         */
        getUsers() {
            return getAllUsers()
        }
    })
}