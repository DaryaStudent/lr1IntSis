class DfsRecMod {

    static findWay(graph, startVortexName, finishVortexName) {
        let res = {stepsCnt: 0, path: []};

        if (startVortexName == finishVortexName) {
            res.stepsCnt++;
            res.path.unshift(startVortexName);
            return res;
        }

        if (!graph.isVortexByName(startVortexName)) {
            return -1;
        }

        let curVortex = graph.getVortexByName(startVortexName);
        let curVortexChildsNames = curVortex.getChildsNames();
        for (let curVortexChildName of curVortexChildsNames) {

            let locRes = this.findWay(graph, curVortexChildName, finishVortexName);
            if (locRes !== -1) {
                locRes.stepsCnt++;
                locRes.path.unshift(startVortexName);
                return locRes;
            }

        }

        return -1;
    }

}