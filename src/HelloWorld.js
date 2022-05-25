const hello = <h1>Hello, World!</h1>;

const sayHello = name => <h1>Hello, {name}</h1>;

// if the name variable is not passed to the function, the tag h1 will render only Hello,

// if the name variable contains a JSX expression instead of a string, we will render the result of the expression
// example: a = 10, b = 18, num = a + b,  <h1> Result {num} </h1>, this will render a h1 contain Result 28

const sum = (a,b) => <h2>{a+b}</h2>