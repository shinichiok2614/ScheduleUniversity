create database if not exists schedule;
use schedule;

create table if not exists student(
    `id` int primary key auto_increment,
    `firstName` varchar(50) not null,
    `lastName` varchar(50) not null,
    `username` varchar(20) not null,
    `password` varchar(20) not null,
    `phone` varchar(20),
    `email` varchar(50),
    `age` int,
    `address` varchar(50),
    `class` varchar(50),
    `army-rank` varchar(50),
    `avatar` varchar(50)
) engine=innodb;

create table teacher(
    `id_teacher` int primary key auto_increment,
    `firstName` varchar(50) not null,
    `lastName` varchar(50) not null,
    `username` varchar(20) not null,
    `password` varchar(20) not null,
    `phone` varchar(20),
    `email` varchar(50),
    `age` int,
    `address` varchar(50),
    -- hoc vi
    `degree` varchar(50),
    --  hoc ham
    `acedemic-rank` varchar(50),
    `army-rank` varchar(50),
    `avatar` varchar(50),
)engine=innodb;

create table subject(
    `id_subject` int primary key auto_increment,
    `name` varchar not null,
    `subject_code` varchar not null,
    -- số tiết
    `credit-load` int not null
    -- tín chỉ
    `credits` int not null,
    -- đơn vị học trình
    `credit-hours` int not null,
    `type_exam` varchar(50),
    `id_teacher` varchar(50),
) engine=innodb;


create table timetable(
    `id` int primary key auto_increment,
    `id_subject` int,
    `room` int,
    `day` date not null,
    `classes_start` int not null,
    `duration` int not null,
) engine=innodb;