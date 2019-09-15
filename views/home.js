/**
 * The behaviour description for Home pages
 * @param params: params object used to load different home areas
 */
pages.Home = function (params) {
    // add direct support for HomeController functions
    with(HomeController) {
        index(params)
    }
}