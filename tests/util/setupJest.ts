import { MithrilQuery } from './mithrilQuery';
import { } from 'jest';

// have to cast to any as ExpectExtendMap in @types/jest dosn't allow for calling with multiple arguments.
expect.extend(<any>{
    selectorToHave(received: MithrilQuery, selector: string | string[], count?: number) {
        if (count === undefined) {
            if (Array.isArray(selector)) {
                var failedSelector = '';
                const pass = selector.every(s => {
                    const pass = received.find(s).length > 0;
                    if (!pass)
                        failedSelector = s;
                    return pass;
                });
                const message = pass
                    ? () =>
                        this.utils.matcherHint('.not.selectorToHave', 'MithrilQuery', 'selector[]') +
                        '\n\n' +
                        'Expected selector ' +
                        `${this.utils.EXPECTED_COLOR(failedSelector)} to not occur`
                    : () =>
                        this.utils.matcherHint('.selectorToHave', 'MithrilQuery', 'selector[]') +
                        '\n\n' +
                        `Expected selector ` +
                        `${this.utils.EXPECTED_COLOR(failedSelector)} to occur at least once`;

                return { message: message, pass: pass };
            }

            if (typeof selector !== 'string')
                throw new Error(
                    this.utils.matcherHint('[.not].selectorToHave', 'MithrilQuery', 'selector') +
                    '\n\n' +
                    `Expected ` + this.utils.RECEIVED_COLOR('selector') + ` to be a string or string array.\n` +
                    this.utils.printWithType('Received', selector, this.utils.printReceived)
                );

            const pass = received.find(selector).length > 0;
            const message = pass
                ? () =>
                    this.utils.matcherHint('.not.selectorToHave', 'MithrilQuery', 'selector') +
                    '\n\n' +
                    `Expected selector ` +
                    `${this.utils.EXPECTED_COLOR(selector)} to not occur`
                : () =>
                    this.utils.matcherHint('.selectorToHave', 'MithrilQuery', 'selector') +
                    '\n\n' +
                    `Expected selector ` +
                    `${this.utils.EXPECTED_COLOR(selector)} to occur at least once`;
            return { message: message, pass: pass };
        }

        if (typeof selector !== 'string')
            throw new Error(
                this.utils.matcherHint('[.not].selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected ${this.utils.RECEIVED_COLOR('selector')} to be a string.\n` +
                this.utils.printWithType('Received', selector, this.utils.printReceived)
            );
        this.utils.ensureExpectedIsNumber(count, 'selectorToHave');

        const actualCount = received.find(selector).length;
        const pass = actualCount === count;
        const message = pass
            ? () =>
                this.utils.matcherHint('.not.selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected selector ${this.utils.EXPECTED_COLOR(selector)}\n` +
                ` to not occur ${this.utils.EXPECTED_COLOR(count)} times\n` +
                ` actually occured ${this.utils.printReceived(actualCount)} times`
            : () =>
                this.utils.matcherHint('.selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected selector ${this.utils.EXPECTED_COLOR(selector)}\n` +
                ` to occur ${this.utils.EXPECTED_COLOR(count)} times\n` +
                ` actually occured ${this.utils.printReceived(actualCount)} times`;
        return { message: message, pass: pass };
    },
    selectorToHaveAtLeast(received: MithrilQuery, selector: string, count: number) {
        if (typeof selector !== 'string')
            throw new Error(
                this.utils.matcherHint('[.not].selectorToHaveAtleast', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected ${this.utils.RECEIVED_COLOR('selector')} to be a string.\n` +
                this.utils.printWithType('Received', selector, this.utils.printReceived)
            );
        this.utils.ensureExpectedIsNumber(count, 'selectorToHaveAtleast');

        const actualCount = received.find(selector).length;
        const pass = actualCount >= count;
        const message = pass
            ? () =>
                this.utils.matcherHint('.not.selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected selector ${this.utils.EXPECTED_COLOR(selector)}\n` +
                ` to occur less than ${this.utils.EXPECTED_COLOR(count)} times\n` +
                ` actually occured ${this.utils.printReceived(actualCount)} times`
            : () =>
                this.utils.matcherHint('.selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected selector ${this.utils.EXPECTED_COLOR(selector)}\n` +
                ` to occur at least ${this.utils.EXPECTED_COLOR(count)} times\n` +
                ` actually occured ${this.utils.printReceived(actualCount)} times`;
        return { message: message, pass: pass };
    },
    selectorToContain(received: MithrilQuery, value: string) {
        if (typeof value !== 'string')
            throw new Error(
                this.utils.matcherHint('[.not].selectorToHaveAtleast', 'MithrilQuery', 'value') +
                '\n\n' +
                `Expected ${this.utils.RECEIVED_COLOR('selector')} to be a string.\n` +
                this.utils.printWithType('Received', value, this.utils.printReceived)
            );
        const pass = received.contains(value);
        const message = pass
            ? () =>
                this.utils.matcherHint('.not.selectorToHave', 'MithrilQuery', 'value') +
                '\n\n' +
                `Expected string ${this.utils.EXPECTED_COLOR(value)} to not be found`
            : () =>
                this.utils.matcherHint('.selectorToHave', 'MithrilQuery', 'selector, value') +
                '\n\n' +
                `Expected string ${this.utils.EXPECTED_COLOR(value)} to be found`;
        return { message: message, pass: pass };
    }
});