import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Eduardo', age: 26 });
myDatabaseFunction.add({ name: 'Willian', age: 25 });
myDatabaseFunction.add({ name: 'Lúcio', age: 30 });
myDatabaseFunction.show();

export { myDatabaseFunction };
