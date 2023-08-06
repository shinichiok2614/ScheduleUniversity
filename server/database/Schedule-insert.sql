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
    `army_rank`,
    `avatar`
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
    -- thuong si
    'Staff sergeant',
    'sadfasdf'
);

insert into class(
    `name`,
    `id_student`
)
values
(
    'CNTT12',
    1    
);

insert into teacher(
    `firstName`,
    `lastName`,
    `username`,
    `password`,
    `phone`,
    `email`,
    `age`,
    `address`,
    `degree`,
    `acedemic_rank`,
    `army_rank`,
    `avatar`
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
    -- Trung ta
    'Lieutenant Colonel', 
    'sdfasdfasdf'
);



insert into TBsubject(
    `name`,
    `subject_code`,
    `credit_load`,
    `credits`,
    `credit_hours`,
    `type_exam`,
    `id_teacher`
)
values
(
    'Một số nội dung CB về phòng chống tham nhũng',
    '52AD',
    15,
    1,
    1,
    'vấn đáp',
    1
);


insert into timetable(
    `id_subject`,
    `id_class`,
    `room`,
    `day`,
    `classes_start`,
    `classes_end`
)
values
(
    '1',
    '1',
    '1',
    '2023-06-28',
    '1',
    '3'
)
