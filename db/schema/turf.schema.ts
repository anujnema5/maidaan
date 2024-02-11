import { nanoid } from "@/utils/ID-generator";
import { pgTable, text, uuid, integer, decimal, real, timestamp, serial } from "drizzle-orm/pg-core";

export const turfs = pgTable('turf', {
    // id: uuid('id').$defaultFn(()=> nanoid()).primaryKey().notNull(),
    id: uuid('id').defaultRandom().primaryKey(),

    name: text("name").notNull(),
    owner: text("owner").notNull(),
    location: text("location").notNull(),
    capacity: integer('capacity'),
    pricePerHour: real("pricePerHour"),
    longitude: decimal("latitude", { precision: 10, scale: 6 }),
    latitude: decimal("latitude", { precision: 10, scale: 6 }),
    createdAt: timestamp('createdAt', {mode: 'date'}).defaultNow(),
})