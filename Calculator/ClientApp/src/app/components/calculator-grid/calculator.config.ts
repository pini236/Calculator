import { BehaviorSubject } from "rxjs";
import { ICalculator } from "src/app/models/calculator";

export const CALCULATOR: ICalculator = {
    display: new BehaviorSubject(''),
    numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    operators: ['+', '-', '*', '/'],
    encodedOperators: {
        '+': '%2B',
        '-': '%2D',
        '*': '%2A',
        '/': '%2F'
    },
    actions: ['c', 'ac'],
    history: []
}