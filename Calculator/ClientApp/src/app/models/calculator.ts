import { BehaviorSubject } from "rxjs";

export interface ICalculator {
    display: BehaviorSubject<string>;
    numbers: Array<Number>;
    operators: Array<string>;
    encodedOperators: any;
    actions: Array<string>;
    history: Array<string>;
}