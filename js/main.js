'use strict';

// Реализовать иерархию:
// ПассажирскийТранспорт=>ТранспортноеСредство (3-4 свойства, 1-2 метода)
// ГрузовойТранспорт=>ТранспортноеСредство.
// Для базового класса Vehicle реализовать:
// - свойства:
// --- dimensions - габариты (объект с длиной, шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.
// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).
// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.

// Создать объекты всех классов иерархии, протестировать работу методов.

class Vehicle {
  constructor(length, width, height, brand, model, manufactureDate) {
    this.dimensions =  {
      length: length,
      width: width,
      height: height,
    };
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }
  getMaxSize() {
    if (this.dimensions.length > this.dimensions.width && this.dimensions.length > this.dimensions.height) {
      return this.dimensions.length;
    } else if (this.dimensions.width > this.dimensions.length && this.dimensions.width > this.dimensions.height) {
      return this.dimensions.width;
    } else {
      return this.dimensions.height;
    }
  }
  
  getAge() {
    return new Date().getFullYear() - this.manufactureDate.getFullYear();
  }
}

class PassengerTransport extends Vehicle {
  constructor(length, width, height, brand, model, manufactureDate, passengerLimit, passengerCount) {
    super(length, width, height, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    let freeSeats = this.passengerLimit - this.passengerCount;
    if (freeSeats > 0) {
      this.passengerCount++;
      return true;
    } else {
      return false;
    }
  }
}

class FreightTransport extends Vehicle {
  constructor(length, width, height, brand, model, manufactureDate, capacity) {
    super (length, width, height, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(tonnes) {
    return tonnes <= this.capacity;
  }
}

const car = new Vehicle(4097, 1789, 1561, 'Mini', 'Countryman', '2014-01-01');
console.log(car.getAge());
console.log(car.getMaxSize());

const bus = new PassengerTransport(12140, 2550, 3355, 'Mercedes-Benz', 'Intouro', '2020-09-23', 55, 50);
console.log(bus.getAge());
console.log(bus.getMaxSize());
bus.addPassenger();

const truck = new FreightTransport(12500, 2550, 3500, 'DAF', 'XF Euro 6', '2013-01-01', 44);

console.log(truck.checkLoadingPossibility(50));
console.log(truck.checkLoadingPossibility(4));
console.log(truck.getAge());
console.log(truck.getMaxSize());


