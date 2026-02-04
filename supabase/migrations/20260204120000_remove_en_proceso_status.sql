-- Update any dogs currently 'en proceso' to 'disponible'
update dogs set estado = 'disponible' where estado = 'en proceso';

-- Create new enum without 'en proceso'
create type estado_perro_new as enum ('disponible', 'adoptado');

-- Drop the default before changing type
alter table dogs alter column estado drop default;

-- Update column to use new enum
alter table dogs
  alter column estado type estado_perro_new
  using estado::text::estado_perro_new;

-- Restore default with new type
alter table dogs alter column estado set default 'disponible'::estado_perro_new;

-- Drop old enum and rename new one
drop type estado_perro;
alter type estado_perro_new rename to estado_perro;
