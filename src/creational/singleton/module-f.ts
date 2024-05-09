import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFunctionFromFunctionE } from './module-e';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Roberto', age: 26 });
myDatabaseFunction.add({ name: 'Joana', age: 25 });
myDatabaseFunction.add({ name: 'Luiza', age: 30 });
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseFunctionFromFunctionE);
