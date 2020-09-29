import { BaseClass as base } from './BaseClass.js';

export class ExtendedClass extends base {
    constructor() {
        super();
        this.name = 'ExtendedClass';
    }

    ExtendedFunc() {
        const msg = `I'm a method of superduper cooling ${this.name}.`;
        console.log(msg);
    }
}