create database if not exists ng_games_db;
use ng_games_db;

create table if not exists games(
    id int not null auto_increment primary key,
    title varchar(180) not null,
    description varchar(255) not null,
    image text not null,
    created_at TIMESTAMP default CURRENT_TIMESTAMP
);