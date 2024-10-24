"use strict";
//import { gcd, number } from 'mathjs';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    get_numerator() {
        return this.numerator;
    }
    get_denominator() {
        return this.denominator;
    }
    normalize() {
        let d = this.gcd(this.numerator, this.denominator);
        let r = new Rational(this.numerator, this.denominator);
        r.numerator /= d;
        r.denominator /= d;
        // denominator should be positive
        if (r.denominator < 0) {
            r.numerator = -r.numerator;
            r.denominator = -r.denominator;
        }
        return r;
    }
    gcd(a, b) {
        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    isWhole() {
        return this.numerator % this.denominator == 0;
    }
    isDecimal() {
        return !this.isWhole();
    }
    equals(param, denominator) {
        let other;
        if (param instanceof Rational) {
            other = param;
        }
        else {
            other = new Rational(param, denominator);
        }
        other.normalize();
        this.normalize();
        return this.numerator === other.get_numerator() && this.denominator === other.get_denominator();
    }
    parseRational(input, denominator) {
        if (Array.isArray(input) && Array.isArray(denominator)) {
            const n = parseInt(input.join(''), 10);
            const d = parseInt(denominator.join(''), 10);
            return new Rational(n, d);
        }
        else if (typeof input === 'string') {
            const sp = input.split("/");
            const n = parseInt(sp[0], 10);
            const d = parseInt(sp[1], 10);
            return new Rational(n, d);
        }
        else {
            throw new Error("Invalid input");
        }
    }
    static _parseRational(numerator, denominator) {
        let n = parseInt(numerator.join(""));
        let d = parseInt(denominator.join(""));
        return new Rational(n, d);
    }
    static parseRational(s) {
        let sp = s.split("/");
        let n = parseInt(sp[0]);
        let d = parseInt(sp[1]);
        return new Rational(n, d);
    }
    toString() {
        return this.numerator + "/" + this.denominator;
    }
}
exports.Rational = Rational;
