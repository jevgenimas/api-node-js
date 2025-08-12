import { test, expect } from '@playwright/test';

test.describe('Lesson 14: Arrays and Loops', () => {

    test('Array with three integers', async () => {
        const nums = [1, 2, 3];
        expect(nums.length).toBe(3);
        expect(nums).toEqual([1, 2, 3]);
    });

    test('Array with two strings and push', async () => {
        const strings = ['apple', 'banana'];
        strings.push('cherry');
        expect(strings.length).toBe(3);
        expect(strings).toContain('cherry');
    });

    test('Array with three strings and pop', async () => {
        const animals = ['cat', 'dog', 'mouse'];
        animals.pop();
        expect(animals.length).toBe(2);
        expect(animals).not.toContain('mouse');
    });

    test('Empty array of numbers + push', async () => {
        const emptyNums: number[] = [];
        emptyNums.push(10);
        expect(emptyNums.length).toBe(1);
        emptyNums.push(20);
        expect(emptyNums.length).toBe(2);
    });

    test('Print each element of an array (for)', async () => {
        const fiveNums = [1, 2, 3, 4, 5];
        let output = '';
        for (let i = 0; i < fiveNums.length; i++) {
            output += fiveNums[i] + ' ';
        }
        expect(output.trim()).toBe('1 2 3 4 5');
    });

    test('Sum of all elements of an array', async () => {
        const fiveNums = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < fiveNums.length; i++) {
            sum += fiveNums[i];
        }
        expect(sum).toBe(15);
    });

    test('New array (elements * 2)', async () => {
        const baseNums = [2, 4, 6];
        const doubled: number[] = [];
        for (let i = 0; i < baseNums.length; i++) {
            doubled.push(baseNums[i] * 2);
        }
        expect(doubled).toEqual([4, 8, 12]);
    });

    test('Array elements in reverse order', async () => {
        const reverseNums = [1, 2, 3];
        const reversed: number[] = [];
        for (let i = reverseNums.length - 1; i >= 0; i--) {
            reversed.push(reverseNums[i]);
        }
        expect(reversed).toEqual([3, 2, 1]);
    });

});