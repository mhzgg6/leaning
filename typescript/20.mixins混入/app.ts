let age: number = 18
console.log(age);

interface Name {
  name: string
}
interface Age {
  age: number
}
interface Sex {
  sex: number
}

let people1: Name = { name: 'mhz' }
let people2: Age = { age: 18 }
let people3: Sex = { sex: 1 }

const people = Object.assign(people1, people2, people3)
console.log(people);


/*************** implements ****************/
interface Alarm {
  alert(): void
}

class Door {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class SecurityDoor extends Door implements Alarm {
  alert(): void {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert(): void {
    console.log('car alert');
  }
}

let mhzDoor = new SecurityDoor('mhz');
console.log(mhzDoor);
mhzDoor.alert();

let car = new Car();
console.log(car);
car.alert();

//  一个类可以实现多个接口
interface Light {
  lightOn(): void
  lightOff(): void
}

class Room implements Alarm, Light {
  alert(): void {
    console.log('room alert');
  }
  lightOn(): void {
    console.log('light on');
  }
  lightOff(): void {
    console.log('light off');
  }
}
let mhzRoom = new Room()
mhzRoom.alert()
mhzRoom.lightOn()
mhzRoom.lightOff()

/** 接口继承接口 **/
interface LightableAlarm extends Alarm {
  lightOff(): void
  lightOn(): void
}
let lightAlarm: LightableAlarm = {
  lightOff() {},
  lightOn() {},
  alert() {}
}



class A {
  type: boolean
  changeType(): void {
    this.type = !this.type
  }
}

class B {
  name: string
  getName(): string {
    return this.name
  }
}

class C implements A,B {
  type: boolean = false
  name: string = 'mhz'
  changeType: () => void
  getName: () => string
}

console.log(B.prototype);
mixins(C, [A, B]) 
function mixins(curClas, itemClas) {

}