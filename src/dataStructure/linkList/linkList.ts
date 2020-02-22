import Node from './node';

type EqualsFn<T> = (a: T | undefined, b: T) => boolean;

function defaultEquals<T>(a: T | undefined, b: T): boolean {
    return a === b;
}

export default class LinkList<T = number> {
    public head: Node<T> | undefined;
    private _size = 0;

    constructor(private _equals: EqualsFn<T> = defaultEquals) {}

    get size(): number {
        return this._size;
    }

    append(value: T): this {
        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }

        this._size++;

        return this;
    }

    getAt(index: number): Node<T> | undefined {
        if (index >= 0 && index < this._size) {
            let current = this.head;
            for (let i = 0; i !== index; i++) {
                current = current!.next;
            }

            return current;
        }

        return undefined;
    }

    insert(index: number, value: T): boolean {
        if (index >= 0 && index <= this._size) {
            const node = new Node(value);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getAt(index - 1)!;
                node.next = previous.next;
                previous.next = node;
            }
            this._size++;

            return true;
        }

        return false;
    }

    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this._size) {
            if (index === 0) {
                if (this.head != null) {
                    const { head } = this;
                    this.head = this.head.next;
                    return head.value;
                }
                return undefined;
            }

            const previous = this.getAt(index - 1)!;
            const current = this.getAt(index)!;
            previous.next = current.next;
            this._size--;

            return current.value;
        }

        return undefined;
    }

    indexOf(value: T): number {
        let current = this.head;
        let index = 0;
        while (current != null && !this._equals(current.value, value)) {
            current = current.next;
            index++;
        }

        if (current != null) {
            return index;
        }

        return -1;
    }

    remove(value: T): T | undefined {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    clear(): void {
        this.head = undefined;
        this._size = 0;
    }

    toString(): string {
        let str = '';
        let current = this.head;
        while (current != null) {
            str = `${str}${current.value} -> `;
            current = current.next;
        }

        if (str) {
            str = str.slice(0, -4);
        }

        return str;
    }
}
