const Node = (value) => {
    return {
        value: value || null,
        nextNode: null
    }
};

const LinkedList = () => {
    let HEAD = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value)
        if (HEAD === null) {
            HEAD = newNode;
        } else {
            let pointer = HEAD;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = newNode;
        }
        length++;
    };

    const prepend = (value) => {
        const newNode = Node(value);
        HEAD = newNode;
        length++;
    }

    const size = () => {
        if (!HEAD) return null;
        return length;
    };

    const head = () => {
        if (!HEAD) return null;
        return HEAD.value;
    };

    const tail = () => {
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        return pointer;
    };

    const at = (index) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        for (let i = 0; i < index ; i++) {
            pointer = pointer.nextNode
        }
        return pointer;
    };

    const pop = () => {
        if (!HEAD) return null;
        // for a List with only one node
        if (HEAD.nextNode === null) {
            HEAD = null
        }
        at(size() - 2).nextNode = null
    };

    const contains = (value) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            if (pointer.value === value) return true;
            pointer = pointer.nextNode;
        }
        // check tail node as well
        return pointer.value === value ? true : false;
    };

    const find = (value) => {
        if (!HEAD) return null;
        let index = 0;
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            if (pointer.value === value) return index;
            pointer = pointer.nextNode;
            index++;
        }
        // check tail node as well
        return pointer.value === value ? index : null;
    };

    const toString = () => {
        if (!HEAD) return null;
        let pointer = HEAD;
        let result = '';
        while (pointer.nextNode !== null) {
            result = result.concat(`( ${pointer.value} ) --> `);
            pointer = pointer.nextNode;
        }
        // for the tail
        result = result.concat(`( ${pointer.value} ) --> null`)
        return result;
    };

    const insertAt = (value, index) => {
        if (!HEAD) return null;
        const newNode = Node(value)
        length++;
        let pointer = HEAD;
        for (let i = 0; i < index - 1; i++) {
            pointer = pointer.nextNode
        }
        const nextNode = pointer.nextNode
        pointer.nextNode = newNode
        newNode.nextNode = nextNode
    };

    const removeAt = (index) => {
        if (!HEAD) return null;
        if (index > length || index < 0) return;
        if (index === 0) { HEAD === HEAD.nextNode}
        else {
            const prePointer = at(index - 1);
            prePointer.nextNode = prePointer.nextNode.nextNode
        }
        length--;
    };

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

const myList = LinkedList()

myList.append('banana')
myList.append(5)
myList.append('purple')
myList.append(2437)

console.log(myList.toString())

export default LinkedList;