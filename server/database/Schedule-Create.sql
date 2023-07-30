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

create table if not exists class (
    `id` int primary key auto_increment,
    `name` varchar(50) not null,
    `id_student` int
)engine=innodb;

create table if not exists teacher(
    `id` int primary key auto_increment,
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
    `avatar` varchar(50)
)engine=innodb;

create table if not exists TBsubject(
    `id` int primary key auto_increment,
    `name` varchar(50) not null,
    `subject_code` varchar(50) not null,
    -- số tiết
    `credit-load` int not null,
    -- tín chỉ
    `credits` int not null,
    -- đơn vị học trình
    `credit-hours` int not null,
    `type_exam` varchar(50),
    `id_teacher` int
) engine=innodb;

create table if not exists timetable(
    `id` int primary key auto_increment,
    `id_subject` int,
    `id_class` int,
    `room` int,
    `day` date not null,
    `classes_start` int not null,
    `classes_end` int not null
) engine=innodb;

alter table timetable add constraint fk_subject foreign key (id_subject) references TBsubject(id);

alter table timetable add constraint fk_class foreign key (id_class) references class(id);

alter table TBsubject add constraint fk_teacher foreign key (id_teacher) references teacher(id);

alter table class add constraint fk_student foreign key(id_student) references student(id);