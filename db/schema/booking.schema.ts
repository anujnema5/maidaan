import { nanoid } from "@/utils/ID-generator";
import {
    boolean,
    date,
    pgEnum,
    pgTable,
    smallint,
    text,
    time,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";

import { users } from "@/db/schema/user.schema";
import { turfs } from "@/db/schema/turf.schema";
import { relations } from "drizzle-orm";

export const paymentModeEnum = pgEnum('paymentMode', ['UPI', 'COD', 'debit card', 'credit card', 'bank', 'other'])
export const bookingStatusEnum = pgEnum('status', ['confirmed', 'pending', 'cancelled'])

export const bookings = pgTable('booking', {
    id: uuid('id').defaultRandom().primaryKey(),

    userId: uuid("userId").notNull().references(() => users.id, { onDelete: 'cascade' }),
    turfId: text("turfId").notNull().references(() => turfs.id, { onDelete: "cascade" }),

    bookingDate: date('bookingDate', { mode: 'date' }),
    startTime: time('startTime'),
    endTime: time('endTime'),
    slots: smallint('slots').notNull().default(1),
    totalPlayers: smallint('totalPlayers'),
    status: bookingStatusEnum('status'),

    paymentDone: boolean('paymentDone').default(false),
    paymentAt: timestamp('paymentAt', { mode: 'date' }),
    paymentMode: paymentModeEnum('paymentMode'),

    bookingDoneDate: date("bookingDoneAt", { mode: 'date' }).defaultNow(),
    bookingDoneTime: time('bookingDoneTime', { precision: 0, withTimezone: false }).defaultNow(),

    rating: smallint('rating'),
    review: text('review'),
})

export const bookingRelations = relations(bookings, ({ one }) => ({
    turf: one(turfs, {
        fields: [bookings.turfId],
        references: [turfs.id]
    }),

    user: one(users, {
        fields: [bookings.userId],
        references: [users.id]
    })
}))