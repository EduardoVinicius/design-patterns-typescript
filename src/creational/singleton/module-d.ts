import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseModule as myDatabaseModuleFromModuleC } from './module-c';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Roberto', age: 26 });
myDatabaseModule.add({ name: 'Joana', age: 25 });
myDatabaseModule.add({ name: 'Luiza', age: 30 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleFromModuleC);
