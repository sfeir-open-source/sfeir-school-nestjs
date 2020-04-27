create database nestschool;
use nestschool;
DROP TABLE user;
CREATE TABLE user ( id smallint unsigned not null auto_increment, firstname varchar(200), lastname varchar(200),email varchar(200)
    not null, password
    varchar(200) not null, age INTEGER, constraint pk_user primary key(id) );
INSERT INTO user VALUES ( null, 'John', 'Doe', 'doe.j@sfeir.com', '123456', 23 );
INSERT INTO user VALUES ( null, 'Dan', 'Heli', 'heli.d@sfeir.com', '789456', 40 );
