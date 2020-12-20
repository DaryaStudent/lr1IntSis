class Output {
    static showRes(type, result) {
        let pathOutput = document.getElementById(type + '_path_output');
        let stepsCntOutput = document.getElementById(type + '_stepsCnt_output');

        if (result === -1) {
            pathOutput.innerText = 'Путь не существует';
            stepsCntOutput.innerText = 'Путь не существует';
            return;
        }

        let path = result.path;
        let pathOutputText = path.shift();
        for (let vortexName of path) {
            pathOutputText += ' - ' + vortexName;
        }
        pathOutput.innerText = pathOutputText;
        stepsCntOutput.innerText = result.stepsCnt;
    }

}