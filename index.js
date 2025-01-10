const data = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 32 }
    ],
    [
        { name: 'Bob', age: 24 }
    ]
];

function extractNames(dataArray) {
    return dataArray.flatMap(innerArray => innerArray.map(item => item.name));
}

// Example usage:
const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob']