// const studentsDatabase = ['jordan', 'erick', 'john', 'michel'];

// const findStudent = (allStudents, studentName) => {
//     for (let i = 0; i < allStudents.length; i++) {
//         if (allStudents[i] == studentName) {
//             console.log(`Found ${StudentName}`);
//         }
//     }
// };

// findStudent(studentDatabase, "erick");

//DSA arrays
const stringArr = ['a', 'b', 'c', 'd', 'e']
const numArr = [1, 2, 3, 4, 5]
const boolArr = [true, false]
const mixed = ["a", 2, true, undefined, null, { a: "a" },
    ["b"]
];
console.log


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item
        console.log(this.data[this.length]);
        this.length++;
        return this.length;


    }
}
pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]
    this.length--;
    return lastItem;
}

shift() {
    const firstitem = this.data[0]
    for (let i = 0; i < this.length; i++) { this.data[i] = this.data[i + 1] }
    delete this.data[this.length - 1]
    this.length--;
    return firstitem;
}

deleteByIndex(index) {
        const item = this.data[index]
        for (let i = index; i < this. + x {
                thise = array[i];
                index
                const myNEwArray = new MyArray();
                myNewArray.push("apple");
                myNewArray.push("orange");
                myNewArray.push("mango");
                myNewArray.get() myNewArray.pop() console.log("myNewArray");
                console.log(myNewArray.shift());
                console.log("myNewArray");



                const item = [1, 2, 3, 4, 5]

                items.shift()
            }
        }



        // reversing String
        function convertString(n) {
            n = this.data[n].split();
            n = n.reverse();
            n = n.join();
            return n;
        }

        convertString(louis);



        