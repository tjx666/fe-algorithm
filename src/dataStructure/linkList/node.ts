export default class Node<T = number> {
    constructor(public value?: T, public next?: Node<T>) {}
}
