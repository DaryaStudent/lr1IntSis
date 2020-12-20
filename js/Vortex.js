class Vortex {
    constructor(name) {
        this.name = name;
        this.parents = {};
        this.childs = {};
    }

    addChild(childVortex) {
        this.childs[childVortex.name] = childVortex;
    }

    addParent(parentVortex) {
        this.parents[parentVortex.name] = parentVortex;
    }

    getChildsNames() {
        return Object.keys(this.childs);
    }
}