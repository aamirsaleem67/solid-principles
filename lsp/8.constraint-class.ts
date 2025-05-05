export class BoundedQueue<T> {
    protected queue = new Array<T>();
    protected capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    add(item: T) {
        if (this.queue.length >= this.capacity) {
            this.dequeue();
        }
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

// ❌ Subclass → breaks the constraint
// allows modifying capacity after construction
class BoundedStringQueue extends BoundedQueue<string> {
    constructor(capacity: number) {
        super(capacity);
    }

    setCapacity(capacity: number) {
        this.capacity = capacity;
    }
}

const boundedQueue = new BoundedStringQueue(5);
boundedQueue.setCapacity(2);
boundedQueue.add("1");
boundedQueue.add("2");
boundedQueue.add("3");
console.log("boundedQueue size: ", boundedQueue.size());
