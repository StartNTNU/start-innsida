# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table local_group (
  id                        varchar(255) not null,
  name                      varchar(255) not null,
  constraint uq_local_group_name unique (name),
  constraint pk_local_group primary key (id))
;

create sequence local_group_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists local_group;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists local_group_seq;

