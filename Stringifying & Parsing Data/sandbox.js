const todos = [
    { text: 'play mariokart', author: 'shaun' },
    { text: 'buy some milk', author: 'mario' },
    { text: 'buy some bread', author: 'luigi' }
]

//console.log(JSON.stringify(todos));

// turn object into JSON string
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(stored); // return JSON string

console.log(JSON.parse(stored)); // turn back into Object