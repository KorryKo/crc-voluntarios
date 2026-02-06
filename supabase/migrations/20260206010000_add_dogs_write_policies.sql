-- Allow authenticated users to insert dogs
create policy "Authenticated can insert dogs"
  on dogs for insert
  to authenticated
  with check (true);

-- Allow authenticated users to update dogs
create policy "Authenticated can update dogs"
  on dogs for update
  to authenticated
  using (true)
  with check (true);

-- Allow authenticated users to delete dogs
create policy "Authenticated can delete dogs"
  on dogs for delete
  to authenticated
  using (true);
