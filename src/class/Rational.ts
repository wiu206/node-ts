//import { gcd, number } from 'mathjs';

export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public get_numerator(): number {
        return this.numerator;
    }

    public get_denominator(): number {
        return this.denominator;
    }

    public normalize(): Rational {
        let d: number = this.gcd(this.numerator, this.denominator);
        let r: Rational = new Rational(this.numerator, this.denominator);
        r.numerator /= d;
        r.denominator /= d;
        // denominator should be positive
        if (r.denominator < 0) {
            r.numerator = -r.numerator;
            r.denominator = -r.denominator;
        }
        return r;
    }
    private gcd(a: number, b: number): number{
        while(b != 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;        
    }

    public isWhole(): boolean {
        return this.numerator % this.denominator == 0;
    }

    public isDecimal(): boolean {
        return !this.isWhole();
    }

    public equals(param: any, denominator?: number): boolean {
        let other: Rational
        if (param instanceof Rational) {
            other = param;
        } else {
            other = new Rational(param, denominator!);
        }
        other.normalize();
        this.normalize();
        return this.numerator === other.get_numerator() && this.denominator === other.get_denominator();
    }

    public parseRational(input: string | string[], denominator?: string[]): Rational {
        if (Array.isArray(input) && Array.isArray(denominator)) {
            const n = parseInt(input.join(''), 10);
            const d = parseInt(denominator.join(''), 10);
            return new Rational(n, d);
        } else if (typeof input === 'string') {
            const sp = input.split("/");
            const n = parseInt(sp[0], 10);
            const d = parseInt(sp[1], 10);
            return new Rational(n, d);
        } else {
            throw new Error("Invalid input");
        }
    }
    public static _parseRational(numerator: string[], denominator: string[]): Rational {
        let n: number = parseInt(numerator.join(""));
        let d: number = parseInt(denominator.join(""));
        return new Rational(n, d);
    }
    public static parseRational(s: string): Rational {
        let sp: string[] = s.split("/");
        let n: number = parseInt(sp[0]);
        let d: number = parseInt(sp[1]);
        return new Rational(n, d);
    }

    public toString(): string {
        return this.numerator + "/" + this.denominator;
    }
}