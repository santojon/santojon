with(MyjsonBridge) {
    var MyjsonbridgeService = new Sgfd.Service({
        metaName: 'MyjsonbridgeService',

        /**
         * Get projects from bridge
         */
        fetchProjects: () => {
            return $.get(MyjsonBridge.bridgeTo('projects'), (data, textStatus, jqXHR) => {
                data.forEach((project) => {
                    project.lastUpdate = new Date(project.lastUpdate)
                    new Project(project).save()
                })
            })
        }
    })
}