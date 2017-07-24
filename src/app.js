class Drone {
    constructor(id,name) {
        this.id=id;
        this.name=name;
        console.log('in drone constructor');
    }
}

let drone = new Drone('A123','Flyer');

console.log(typeof drone);