-- Create storage bucket for volunteer photos (carousel)
insert into storage.buckets (id, name, public)
values ('volunteer-photos', 'volunteer-photos', true);

-- Allow public read access to volunteer photos
create policy "Volunteer photos are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'volunteer-photos');

-- Allow authenticated users to upload volunteer photos
create policy "Authenticated users can upload volunteer photos"
  on storage.objects for insert
  with check (bucket_id = 'volunteer-photos' and auth.role() = 'authenticated');

-- Allow authenticated users to update volunteer photos
create policy "Authenticated users can update volunteer photos"
  on storage.objects for update
  using (bucket_id = 'volunteer-photos' and auth.role() = 'authenticated');

-- Allow authenticated users to delete volunteer photos
create policy "Authenticated users can delete volunteer photos"
  on storage.objects for delete
  using (bucket_id = 'volunteer-photos' and auth.role() = 'authenticated');
