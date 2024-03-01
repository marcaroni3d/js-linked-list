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
    }

    return {
        append,
        prepend,
        size,
        head,
        tail
    }
}

const myList = LinkedList()

myList.append('banana')
myList.append(5)

console.log(myList.head(), myList.tail())