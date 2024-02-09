import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const turf = pgTable('turf', {
    id: uuid("id").primaryKey().notNull().unique(),
    name: text("name"),
})