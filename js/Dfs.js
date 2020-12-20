class Dfs {

    static findWay(graph, startVortexName, finishVortexName) {
        let open = [startVortexName];
        let closed = [];
        let curVortexName = startVortexName;
        let stepsCnt = 0;

        while (curVortexName != finishVortexName) {

            stepsCnt++;
            if (closed.length == graph.vortexCnt) {
                return -1;
            }

            curVortexName = open.shift();
            if (!graph.isVortexByName(curVortexName)) {
                return -1;
            }

            closed.push(curVortexName);

            let curVortex = graph.getVortexByName(curVortexName);
            let curVortexChilds = curVortex.getChildsNames();

            this.push(open, closed, curVortexChilds);
        }

        let result = {stepsCnt: stepsCnt};
        console.log(closed);
        result.path = this.findPathByClosed(graph, closed);

        return result;
    }

    static findPathByClosed(graph, closed) {
        let prevVortexName = closed[closed.length - 1];
        let path = [];
        path.push(prevVortexName);

        for (let i = closed.length - 2; i > -1; i--) {
            let curVortexName = closed[i];
            let curVortex = graph.getVortexByName(curVortexName);
            let curVortexChilds = curVortex.getChildsNames();

            if (curVortexChilds.includes(prevVortexName)) {
                prevVortexName = curVortexName;
                path.push(prevVortexName);
            }
        }
        return path.reverse();
    }

    static push(open, closed, args) {
        args = args.reverse();
        for (let elem of args) {
            if (!open.includes(elem) && !closed.includes(elem)) {
                open.unshift(elem);
            }
        }
    }

}
