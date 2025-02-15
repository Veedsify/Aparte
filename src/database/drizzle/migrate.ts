import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './db';

const main = async () => {
     // This will run migrations on the database, skipping the ones already applied
     await migrate(db, { migrationsFolder: './src/database/drizzle/migrations' });   
     // Don't forget to close the connection, otherwise the script will hang
     await connection.end();
}

main();