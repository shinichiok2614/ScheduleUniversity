alter table timetable drop foreign key fk_subject;
alter table timetable drop foreign key fk_class;
alter table TBsubject drop foreign key fk_teacher;
alter table class drop foreign key fk_student;

drop table if exists student;
drop table if exists class;
drop table if exists teacher;
drop table if exists TBsubject;
drop table if exists timetable;
