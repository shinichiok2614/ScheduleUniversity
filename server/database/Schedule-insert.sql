use schedule;
insert into student(
    `firstName`,
    `lastName`,
    `username`,
    `password`,
    `phone`,
    `email`,
    `age`,
    `address`,
    `class`,
    `army-rank`,
    `avatar`,
) 
values
(
    'minh',
    'tuan', 
    'shinichiok2614',
    '1234', 
    '0974187915', 
    'phuonghoangit2614@gmail.com',
    '20',
    'ben tre',
    'cntt12',
    `Staff sergeant`,--thuong si
    'sadfasdf'
);

create table teacher(
    `firstName`,
    `lastName`,
    `username`,
    `password`,
    `phone`,
    `email`,
    `age`,
    `address`,
    `degree`,
    `acedemic-rank`,
    `army-rank`,
    `avatar`,
)
values
(
    'Rizal',
    'Jose',
    'rizalzz',
    '1111',
    '12345678',
    'rizalz123@gmail.com',
    30,
    'adsfadsfa',
    'Doctor of Philosophy',
    'Professor',
    'Lieutenant Colonel', --Trung ta
    'sdfasdfasdf'
)



create table subject(
    `name`,
    `subject_code`,
    `credit-load`,
    `credits`,
    `credit-hours`,
    `type_exam`,
    `id_teacher`,
)
values
(
    'Một số nội dung CB về phòng chống tham nhũng',
    '52AD',
    15,
    1,
    1,
    `vấn đáp`,
    1,
)


create table timetable(
    `id_subject`,
    `room`,
    `day`,
    `classes_start`,
    `duration`,
)
values
(
    '1',
    '1',
    '2023-06-28',
    '1',
    '2',
)
