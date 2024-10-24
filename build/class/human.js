"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.human = void 0;
class human {
    name;
    age;
    task;
    constructor(name, age, task) {
        this.name = name;
        this.age = age;
        this.task = task;
    }
    doTask() {
        return this.task();
    }
}
exports.human = human;
