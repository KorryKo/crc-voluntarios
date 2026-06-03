-- Add fecha_llegada column to track when each dog arrived at the shelter
alter table dogs add column fecha_llegada date;

-- Backfill existing rows with today's date so the column can be NOT NULL
update dogs set fecha_llegada = current_date where fecha_llegada is null;

alter table dogs alter column fecha_llegada set not null;
