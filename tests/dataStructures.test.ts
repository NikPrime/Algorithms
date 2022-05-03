import { Stack } from '../DataStructures/Stack'

function checkLastStackValue(firstElement, secondElement, thirdElement) {
    const stack = new Stack<number>();
    stack.push(firstElement)
    stack.push(secondElement);
    stack.push(thirdElement);
    stack.pop();
    return stack.getLastValue();
}
test('Stack: check last value of stack', () => {
    expect(checkLastStackValue(1, 2, 3)).toBe(2);
});