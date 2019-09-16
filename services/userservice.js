with(MyjsonbridgeService) {
    /**
     * The service that process and manage User related data
     */
    var UserService = new Sgfd.Service({
        metaName: 'UserService',
        /**
         * Get all the users from DB
         */
        getAllUsers() {
            return fetchUsers()
        }
    })
}