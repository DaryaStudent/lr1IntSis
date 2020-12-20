class DfsRec extends Dfs {

    static findWay(graph, startVortexName, finishVortexName) {

        let closed = [];
        let stepsCnt = 0;

        function dfs(graph, startVortexName, finishVortexName) {
            stepsCnt++;
            closed.push(startVortexName);
            if (startVortexName == finishVortexName) {
                return 1;
            }
            if (!graph.isVortexByName(startVortexName)) {
                return -1;
            }
            let curVortex = graph.getVortexByName(startVortexName);
            let curVortexChildsNames = curVortex.getChildsNames();
            for (let curVortexChildName of curVortexChildsNames) {
                if (!closed.includes(curVortexChildName)) {
                    let locRes = dfs(graph, curVortexChildName, finishVortexName);
                    if (locRes === 1) {
                        return 1;
                    }
                }
            }
            return -1;
        }

        if (dfs(graph, startVortexName, finishVortexName) !== -1) {
            let result = {stepsCnt: stepsCnt};
            result.path = this.findPathByClosed(graph, closed);
            return result;
        } else {
            return -1;
        }


    }

}