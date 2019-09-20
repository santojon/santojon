/**
 * The behaviour description for Home pages
 * @param params: params object used to load different home areas
 */
pages.Home = function (params) {
    // add direct support for HomeController functions
    with(HomeController) {
        index(params)

        // Loader related
        while (User.findAll() === []) {
            if (!$('#body-content').hasClass('hidden-body')) {
                $('#body-content').addClass('hidden-body')
            }

            if ($('#loader').hasClass('hidden-body')) {
                $('#loader').removeClass('hidden-body')
            }
        }

        setTimeout(() => {
            $('#body-content').removeClass('hidden-body')
            $('#loader').addClass('hidden-body')
        }, 1000)
    }
}