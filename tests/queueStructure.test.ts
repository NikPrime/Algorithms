import { QueueStructure } from '../DataStructures/QueueStructure'

function checkLastQueueValue(firstElement, secondElement, thirdElement) {
    const stack = new QueueStructure<number>();
    stack.push(firstElement)
    stack.push(secondElement);
    stack.push(thirdElement);
    stack.pop();
    return stack.getLastValue();
}

function checkFirstQueueValue(firstElement, secondElement, thirdElement) {
    const stack = new QueueStructure<number>();
    stack.push(firstElement)
    stack.push(secondElement);
    stack.push(thirdElement);
    stack.pop();
    return stack.getFirstValue();
}

test('StackStructure: check last value of queue', () => {
    expect(checkLastQueueValue(1, 2, 3)).toBe(3);
});
test('StackStructure: check first value of queue', () => {
    expect(checkFirstQueueValue(1, 2, 3)).toBe(2);
});