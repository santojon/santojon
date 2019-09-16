/**
 * The behaviour description for User pages
 * @param params: params object used to load different user areas
 */
pages.User = (params) => {
    // add direct support for UserController functions
    with(UserController) {
        if (params) {
            if (params.user) {
                index(params.user)
            }
        } else {
            // Resolve promisse and update the view with user
            getUsers().then(() => {
                pages.User({
                    user: User.find({ username: 'santojon' })
                })
            })
        }
    }
}