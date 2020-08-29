begin TRANSACTION;

create table login
(
  id serial PRIMARY KEY,
  hash VARCHAR(100) not null,
  email text unique not null
);

commit;