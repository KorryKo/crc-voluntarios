-- Create storage bucket for dog photos
insert into storage.buckets (id, name, public)
values ('dog-photos', 'dog-photos', true);

-- Allow public read access to dog photos
create policy "Dog photos are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'dog-photos');

-- Allow authenticated users to upload dog photos
create policy "Authenticated users can upload dog photos"
  on storage.objects for insert
  with check (bucket_id = 'dog-photos' and auth.role() = 'authenticated');

-- Allow authenticated users to update dog photos
create policy "Authenticated users can update dog photos"
  on storage.objects for update
  using (bucket_id = 'dog-photos' and auth.role() = 'authenticated');

-- Allow authenticated users to delete dog photos
create policy "Authenticated users can delete dog photos"
  on storage.objects for delete
  using (bucket_id = 'dog-photos' and auth.role() = 'authenticated');
