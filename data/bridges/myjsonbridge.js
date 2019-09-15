with(Sgfd.Base) {
    var MyjsonBridge = new Sgfd.Bridge({
        metaName: 'MyjsonBridge',
        type: 'json',
        base: 'https://api.myjson.com/bins',
        paths: {
            projects: '18bk0d',
            experiences: 'i1af9'
        },
        bridgeTo: (to) => {
            with(MyjsonBridge) {
                return base + '/' + paths[to]
            }
        }
    })
}