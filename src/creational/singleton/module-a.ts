import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Eduardo', age: 26 });
myDatabaseClassic.add({ name: 'Willian', age: 25 });
myDatabaseClassic.add({ name: 'Lúcio', age: 30 });
myDatabaseClassic.show();

export { myDatabaseClassic };
