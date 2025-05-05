export class Max3Queue<T> {
    protected queue = new Array<T>();
    private capacity: number = 3;

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

class Max3StringQueue extends Max3Queue<string> {
    protected queue = new Array<string>()

    add(item: string) {
        this.queue.push(item); // ❌ Skipping parent rule → allows unlimited size
    }
}

// ✅ Client code
const queue = new Max3StringQueue();
queue.add("1");
queue.add("2");
queue.add("3");
queue.add("4");
queue.add("5");

console.log("queue size: ", queue.size());

