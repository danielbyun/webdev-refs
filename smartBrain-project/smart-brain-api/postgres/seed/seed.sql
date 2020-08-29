begin transaction;

insert into users
  (name, email, entries, joined)
values
  ('test', 'test@test.com', 5, '2020-08-24');
insert into login
  (hash, email)
values
  ('$2b$10$TSzUvGdlOgnqQtQYRjW/pe5cQz4.Ls0OU0tiL0m5AyocxAaWhI9A6', 'test@test.com');

commit;