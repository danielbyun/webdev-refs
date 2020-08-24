begin TRANSACTION;

create table login
(
  id serial primary key,
  hash VARCHAR(100) not null,
  email text unique not null
);

commit;