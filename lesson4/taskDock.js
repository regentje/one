const Dockyard = function () {
  this.createBoat = function (boat) {
    if((this instanceof DockyardSailBoat && boat instanceof DockyardSailBoat) || (this instanceof DockyardMotorBoat && boat instanceof DockyardMotorBoat)){
      boat.create = true;
    };
  };
  this.rebuildBoat = function (boat) {
    if((this instanceof DockyardSailBoat && boat instanceof DockyardSailBoat) || (this instanceof DockyardMotorBoat && boat instanceof DockyardMotorBoat)){
    boat.rebuild = true;
    };
  };
  this.exchangeBoat = function (boat) {
    if((this instanceof DockyardSailBoat && boat instanceof DockyardSailBoat) || (this instanceof DockyardMotorBoat && boat instanceof DockyardMotorBoat)){
    boat.exchange = true;
    };
  };
  this.paintBoat = function (boat) {
    boat.paint = 'red';
  };
};

const DockyardMotorBoat = function () {
  Dockyard.call(this);
};

const DockyardSailBoat = function () {
    Dockyard.call(this);
};

const MotorBoat = function (enginePower, material) {
  this.enginePower = enginePower;
  this.material = material;
};

const Sailboat = function (countMasts, sailSquare) {
  this.countMasts = countMasts;
  this.sailSquare = sailSquare;
};

DockyardMotorBoat.prototype = Object.create(Dockyard.prototype);
DockyardMotorBoat.prototype.constructor = DockyardMotorBoat;
DockyardSailBoat.prototype = Object.create(Dockyard.prototype);

MotorBoat.prototype = Object.create(DockyardMotorBoat.prototype);
Sailboat.prototype = Object.create(DockyardSailBoat.prototype);
DockyardSailBoat.prototype.constructor = DockyardSailBoat;

const motorDock = new DockyardMotorBoat();
const sailDock = new DockyardSailBoat();

const baotMotor = new MotorBoat(1200, 'steel');
const boatSail = new Sailboat(5, 50);
const baotMotor1 = new MotorBoat(1500, 'steel');


console.log(baotMotor1);
motorDock.createBoat(baotMotor1);
console.log(baotMotor1);

motorDock.exchangeBoat(boatSail);
console.log(boatSail);