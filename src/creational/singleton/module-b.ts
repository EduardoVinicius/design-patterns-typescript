import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Roberto', age: 26 });
myDatabaseClassic.add({ name: 'Joana', age: 25 });
myDatabaseClassic.add({ name: 'Luiza', age: 30 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
