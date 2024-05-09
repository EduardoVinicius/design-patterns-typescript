import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Eduardo', age: 26 });
myDatabaseModule.add({ name: 'Willian', age: 25 });
myDatabaseModule.add({ name: 'Lúcio', age: 30 });
myDatabaseModule.show();

export { myDatabaseModule };
