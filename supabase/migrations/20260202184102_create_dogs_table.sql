-- Create enum types
create type estado_perro as enum ('disponible', 'adoptado', 'en proceso');
create type sexo_perro as enum ('macho', 'hembra');
create type tamano_perro as enum ('pequeño', 'mediano', 'grande');

-- Create dogs table
create table dogs (
  id bigint generated always as identity primary key,
  nombre text not null,
  edad text not null,
  sexo sexo_perro not null,
  tamano tamano_perro not null,
  foto text not null default '',
  descripcion text not null default '',
  estado estado_perro not null default 'disponible',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table dogs enable row level security;

-- Public read access
create policy "Dogs are publicly readable"
  on dogs for select
  using (true);

-- Seed with existing data
insert into dogs (nombre, edad, sexo, tamano, foto, descripcion, estado) values
  ('Pin Pon', '3 años', 'macho', 'mediano', '/pinpon.jpg', 'Pin Pon es un perro alegre y juguetón que adora los paseos al aire libre. Es muy cariñoso con las personas y se lleva bien con otros perros.', 'disponible'),
  ('Luna', '2 años', 'hembra', 'grande', '/pinpon.jpg', 'Luna es una perra tranquila y dulce. Le encanta acurrucarse y es ideal para familias con niños.', 'disponible'),
  ('Rocky', '5 años', 'macho', 'grande', '/pinpon.jpg', 'Rocky es un perro leal y protector. Está entrenado en comandos básicos y busca un hogar con patio.', 'en proceso'),
  ('Canela', '1 año', 'hembra', 'pequeño', '/pinpon.jpg', 'Canela es una cachorra enérgica y curiosa. Aprende rápido y le encanta jugar con pelotas.', 'disponible'),
  ('Max', '4 años', 'macho', 'grande', '/pinpon.jpg', 'Max es un perro noble y calmado. Fue rescatado de la calle y ahora busca una familia que le dé mucho amor.', 'adoptado'),
  ('Miel', '6 meses', 'hembra', 'pequeño', '/pinpon.jpg', 'Miel es una cachorrita adorable y sociable. Se lleva bien con todos y está lista para ser adoptada.', 'disponible');
