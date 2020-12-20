class Bfs extends Dfs{

    static findPathByClosed(graph, closed) {
        let prevVortexName = closed[closed.length - 1];
        let path = [];
        path.push(prevVortexName);

        let prevParentInd = closed.length - 1;
        for (let i = 0; i <= prevParentInd; i++) {
            let curVortexName = closed[i];
            let curVortex = graph.getVortexByName(curVortexName);
            let curVortexChilds = curVortex.getChildsNames();

            if (curVortexChilds.includes(prevVortexName)) {
                prevVortexName = curVortexName;
                path.push(prevVortexName);
                prevParentInd = i;
                i = -1;
            }
        }

        return path.reverse();
    }

    static push(open, closed, args) {
        for (let elem of args) {
            if (!open.includes(elem) && !closed.includes(elem)) {
                open.push(elem);
            }
        }
    }

}