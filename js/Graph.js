class Graph {
    constructor() {
        this.vortexCnt = 0;
        this.vortexArr = {};
    }

    addVortex(vortexName) {
        this.vortexCnt++;
        this.vortexArr[vortexName] = new Vortex(vortexName);
    }

    connect(parentName, childName) {
        this.getVortexByName(childName).addParent(this.getVortexByName(parentName));
        this.getVortexByName(parentName).addChild(this.getVortexByName(childName));
    }

    getVortexByName(name = '') {
        return this.vortexArr[name];
    }

    calcFromText(text) {

        text = text.replace(/ +/g, ' ').trim().split('\n');
        n = text[0];
        text = text.slice(1);
        let vortexNamesSet = new Set;

        for (let line of text) {
            line = line.split(' ');
            for (let name of line) {
                vortexNamesSet.add(name.trim());
            }
        }

        vortexNamesSet.forEach((name) => {
            this.addVortex(name);
        });

        for (let line of text) {
            line = line.split(' ');
            let parentName = line[0];
            line = line.slice(1);
            for (let childName of line) {
                this.connect(parentName.trim(), childName.trim());
            }
        }
    }

    isVortexByName(name) {
        if (this.vortexArr[name]) {
            return 1;
        }
        return 0;
    }
}