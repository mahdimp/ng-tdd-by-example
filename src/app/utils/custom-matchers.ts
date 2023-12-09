declare var global: any;
const _global = typeof window === 'undefined' ? global : window;

export const expect: (actual: any) => NgMatchers = _global.expect;

export interface NgMatchers extends jasmine.Matchers<any> {
    toHaveStyle(expected: {[k: string]: string}): boolean;
    not: NgMatchers;
}

export function hasStyle(style: string, value: string) {
    return (element: HTMLElement) => {
        const styleValue = element.style.getPropertyValue(style);
        return styleValue === value;
    };
}

export const customMatchers: jasmine.CustomMatcherFactories = {
    toHaveStyle: () => {
        return {
            compare: (actual: HTMLElement, expected: {[k: string]: string}) => {
                const pass = Object.keys(expected).every(style => hasStyle(style, expected[style])(actual));
                const message = pass
                    ? `Expected element to not have styles: ${JSON.stringify(expected)}`
                    : `Expected element to have styles: ${JSON.stringify(expected)}`;
                return { pass, message };
            }
        };
    }
};