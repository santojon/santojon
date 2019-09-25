with(Sgfd.Base) {
    var MyjsonBridge = new Sgfd.Bridge({
        metaName: 'MyjsonBridge',
        type: 'json',
        base: 'https://api.myjson.com/bins',
        paths: {
            projects: '18bk0d',
            experiences: 'i1af9',
            users: '14208d',
            institutions: '92ecl',
            education: '1dfi8d'
        },
        bridgeTo: (to) => {
            with(MyjsonBridge) {
                return base + '/' + paths[to]
            }
        }
    })
}