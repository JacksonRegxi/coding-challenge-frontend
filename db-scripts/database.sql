drop database if exists conding_challenge_movies_db;
create database if not exists conding_challenge_movies_db;

use conding_challenge_movies_db;

create table movie(
	id int primary key auto_increment,
    title varchar(255) not null,
    topic enum("Terror", "Accion","Comedia"),
    releaseYear int not null,
    image text,
    summary text not null,
    available boolean default false
);

CREATE TABLE customer (
    id INT PRIMARY KEY auto_increment,
    customerName VARCHAR(255) not null,
    lastname VARCHAR(255) not null,
    phone VARCHAR(255) not null,
    email VARCHAR(255) not null
);

create table loan(
	id int primary key auto_increment,
    movie_id int,
    customer_id int,
    loanDate timestamp not null,
    returnDate timestamp not null,
    constraint pk_movie foreign key (movie_id) references movie(id),
    constraint pk_customer foreign key (customer_id) references customer(id)
);

create table movieReturn(
	id int primary key auto_increment,
    movie_id int,
    customer_id int,
    available boolean,
    constraint pk_return_movie foreign key (movie_id) references movie(id),
    constraint pk_return_customer foreign key (customer_id) references customer(id)
);

