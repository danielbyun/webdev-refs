begin TRANSACTION;

create table users
(
  id serial primary key,
  name varchar(100),
  email text unique not null,
  entries bigint DEFAULT 0,
  joined TIMESTAMP not null
);

commit;