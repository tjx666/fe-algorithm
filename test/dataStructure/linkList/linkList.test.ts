import assert = require('assert');
import LinkList from 'dataStructure/linkList/linkList';

it('#linkList', () => {
    describe('#init status', () => {
        const list = new LinkList();

        it('should head and size be init correctly', () => {
            assert.strictEqual(list.head, undefined);
            assert.strictEqual(list.size, 0);
        });
    });

    describe('#append', () => {
        const list = new LinkList();
        it('should append the given value when empty', () => {
            list.append(6);
            assert.strictEqual(list.head!.value, 6);
        });

        it('should append the given value when not empty', () => {
            list.append(8);
            assert.strictEqual(list.head!.next!.value, 8);
        });

        it('should return self', () => {
            assert.deepStrictEqual(list.append(9), list);
        });
    });

    describe('#getAt', () => {
        const list = new LinkList();

        it('should return undefined when empty', () => {
            assert.strictEqual(list.getAt(-1), undefined);
            assert.strictEqual(list.getAt(0), undefined);
            assert.strictEqual(list.getAt(6), undefined);
        });

        it('should get the node at given index when not empty', () => {
            list.append(1);
            list.append(2);
            assert.strictEqual(list.getAt(-1), undefined);
            assert.strictEqual(list.getAt(0)!.value, 1);
            assert.strictEqual(list.getAt(1)!.value, 2);
            assert.strictEqual(list.getAt(6), undefined);
        });
    });

    describe('#insert', () => {
        const list = new LinkList();

        it('should inset value to given index when empty', () => {
            assert.strictEqual(list.head, undefined);
            assert.ok(list.insert(0, 6));
            assert.strictEqual(list.insert(-1, 0), false);
            assert.strictEqual(list.insert(8, 0), false);
            assert.strictEqual(list.head!.value, 6);
        });

        it('should inset value to given index when not empty', () => {
            list.insert(1, 9);
            assert.strictEqual(list.head!.next!.value, 9);
        });
    });

    describe('#removeAt', () => {
        const list = new LinkList();

        it('should return undefined when empty', () => {
            assert.strictEqual(list.removeAt(-1), undefined);
            assert.strictEqual(list.removeAt(0), undefined);
            assert.strictEqual(list.removeAt(11), undefined);
        });

        it('should remove the node at given index when not empty', () => {
            list.append(6);
            list.append(8);
            assert.strictEqual(list.removeAt(0), 6);
            assert.strictEqual(list.head!.value, 8);
            assert.strictEqual(list.removeAt(0), 8);
            assert.strictEqual(list.removeAt(0), undefined);

            list.append(1)
                .append(2)
                .append(3);
            assert.strictEqual(list.removeAt(2), 3);
        });
    });

    describe('#indexOf', () => {
        const list = new LinkList();

        it('should return -1 when empty', () => {
            assert.strictEqual(list.indexOf(888), -1);
        });

        it('should return index of node when not empty', () => {
            list.append(1);
            list.append(2);
            assert.strictEqual(list.indexOf(1), 0);
            assert.strictEqual(list.indexOf(2), 1);
            assert.strictEqual(list.indexOf(3), -1);
        });
    });

    describe('#remove', () => {
        const list = new LinkList();

        it('should return undefined when empty', () => {
            assert.strictEqual(list.remove(686), undefined);
        });

        it('should remove the first node which value equals to given value when not empty', () => {
            list.append(6);
            list.append(8);
            assert.strictEqual(list.remove(6), 6);
            assert.strictEqual(list.head!.value, 8);
            assert.strictEqual(list.remove(8), 8);
            assert.strictEqual(list.head, undefined);
        });
    });

    describe('isEmpty', () => {
        it('should return if the linkList is empty', () => {
            const list = new LinkList();
            assert.ok(list.isEmpty());
            list.append(1);
            assert.strictEqual(list.isEmpty(), false);
        });
    });

    describe('#clear', () => {
        it('should reset linkList', () => {
            const list = new LinkList();

            list.append(1).append(2);
            assert.strictEqual(list.size, 2);

            list.clear();
            assert.strictEqual(list.size, 0);
        });
    });

    describe('#toString', () => {
        const list = new LinkList<string>();

        it('should return empty string when empty', () => {
            assert.strictEqual(list.toString(), '');
        });

        it('should return linkLink string join with arrow', () => {
            list.append('first');
            list.append('second');
            list.append('third');
            assert.strictEqual(list.toString(), 'first -> second -> third');
        });
    });
});
