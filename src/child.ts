import { NumberHandler } from "./app.js";

export class Child extends NumberHandler{
    private _s: number;
    private _array: number[];
    constructor(a: number, b: number, s:number){
        super(a, b);
        this._s = s;
        this._array = Array.from({length: s}, (_, i) => i+1)
    }
    getArray = () => this._array;

    override multiply(): number {
        if ((this.x) === 0) this.x = 1;
        if ((this.y) === 0) this._y = 1;
        return this.x * this.y;
    }
}