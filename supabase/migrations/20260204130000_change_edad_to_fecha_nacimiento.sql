-- Add fecha_nacimiento column
alter table dogs add column fecha_nacimiento date;

-- Migrate existing edad data to approximate dates
-- "3 años" -> 3 years ago, "6 meses" -> 6 months ago, etc.
update dogs set fecha_nacimiento = current_date - interval '3 years' where edad = '3 años';
update dogs set fecha_nacimiento = current_date - interval '2 years' where edad = '2 años';
update dogs set fecha_nacimiento = current_date - interval '5 years' where edad = '5 años';
update dogs set fecha_nacimiento = current_date - interval '1 year' where edad = '1 año';
update dogs set fecha_nacimiento = current_date - interval '4 years' where edad = '4 años';
update dogs set fecha_nacimiento = current_date - interval '6 months' where edad = '6 meses';

-- Set default for any remaining nulls
update dogs set fecha_nacimiento = current_date - interval '1 year' where fecha_nacimiento is null;

-- Make column required
alter table dogs alter column fecha_nacimiento set not null;

-- Drop old edad column
alter table dogs drop column edad;
