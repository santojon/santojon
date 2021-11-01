with (Sgfd.Base) {
    var DataBridge = new Sgfd.Bridge({
        metaName: 'DataBridge',
        type: 'json',
        base: './data/json',
        paths: {
            projects: 'projects.json',
            experiences: 'experiences.json',
            users: 'users.json',
            institutions: 'institutions.json',
            education: 'education.json'
        },
        bridgeTo: (to) => {
            with (DataBridge) {
                return base + '/' + paths[to]
            }
        }
    })
}