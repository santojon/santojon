with(Sgfd.Base) {
    var MyjsonBridge = new Sgfd.Bridge({
        metaName: 'MyjsonBridge',
        type: 'json',
        base: 'https://api.myjson.com/bins',
        paths: {
            projects: '18bk0d'
        },
        bridgeTo: (to) => {
            with(MyjsonBridge) {
                return base + '/' + paths[to]
            }
        }
    })
}