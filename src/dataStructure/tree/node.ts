export default class Node<T = number> {
    public left: Node<T> | undefined;
    public right: Node<T> | undefined;
    constructor(public value?: T) {}
}
