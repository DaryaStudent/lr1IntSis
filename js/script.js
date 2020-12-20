let fileText;
let start;
let finish;
let n;
let button = document.getElementById("button");
let form = document.getElementById('form');

button.onclick = function () {
    FormReader.readForm(form);

    if (fileText && start && finish) {
        startCalc(form);
    } else {
        alert("error");
    }
};

function startCalc(form) {
    let graph = new Graph();
    graph.calcFromText(fileText);

    let dfsRes = Dfs.findWay(graph, start, finish);
    let bfsRes = Bfs.findWay(graph, start, finish);
    let dfsRecRes = DfsRec.findWay(graph, start, finish);
    let dfsRecModRes = DfsRecMod.findWay(graph, start, finish);

    Output.showRes('dfs', dfsRes);
    Output.showRes('bfs', bfsRes);
    Output.showRes('dfsRec', dfsRecRes);
    Output.showRes('dfsRecMod', dfsRecModRes);
}

