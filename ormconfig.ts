// File used only to generate migrations
import "dotenv/config";
import {Config} from "./src/config/Config";

export default {
    synchronize: false,
    logging: false,
    entities: ["./src/**/entities/**/*.{ts,js}"],
    migrations: ["./src/database/intelligentSuiteMigrations/*.{ts,js}"],
    migrationsRun: false,
    ...Config.db.sqlMigrations,
};
