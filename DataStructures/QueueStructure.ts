export class QueueStructure<T> {
    private data: T[] = [];

    push(value: T) : void {
        this.data.push(value);
    }
    pop() : void {
        if (this.data.length > 0) this.data.shift();
    }

    getLastValue() : T | null {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

    getFirstValue() : T | null {
        return this.data.length > 0 ? this.data[0] : null;
    }
}
