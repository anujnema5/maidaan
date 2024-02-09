CREATE TABLE IF NOT EXISTS "turf" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	CONSTRAINT "turf_id_unique" UNIQUE("id")
);
