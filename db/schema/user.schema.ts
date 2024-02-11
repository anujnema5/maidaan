import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  varchar,
  uuid,
  serial,
} from "drizzle-orm/pg-core"

import type { AdapterAccount } from '@auth/core/adapters'
import { nanoid } from "@/utils/ID-generator"

export const users = pgTable("user", {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  phoneNumber: varchar("phoneNumber", { length: 15 }),
  password: varchar("password", { length: 20 }),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})

export const accounts = pgTable(
  "account", {
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: text("type").$type<AdapterAccount["type"]>().notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
},
  (account) => ({
    compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
  })
)