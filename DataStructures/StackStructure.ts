export class StackStructure<T> {
    private data: T[] = [];

    push(value: T) : void {
        this.data.push(value);
    }
    pop() : void {
        if (this.data.length > 0) this.data.length -= 1;
    }

    getLastValue() : T | null {
       return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
}
