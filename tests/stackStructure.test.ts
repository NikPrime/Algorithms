import { StackStructure } from '../DataStructures/StackStructure'

function checkLastStackValue(firstElement, secondElement, thirdElement) {
    const stack = new StackStructure<number>();
    stack.push(firstElement)
    stack.push(secondElement);
    stack.push(thirdElement);
    stack.pop();
    return stack.getLastValue();
}
test('StackStructure: check last value of stack', () => {
    expect(checkLastStackValue(1, 2, 3)).toBe(2);
});