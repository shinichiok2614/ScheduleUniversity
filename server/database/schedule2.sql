-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 09, 2023 at 06:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedule`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dateofbirth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `acedemicrank` varchar(255) DEFAULT NULL,
  `armyrank` varchar(255) DEFAULT NULL,
  `profilepicture` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `firstname`, `lastname`, `username`, `password`, `phone`, `email`, `dateofbirth`, `address`, `degree`, `acedemicrank`, `armyrank`, `profilepicture`, `createdAt`, `updatedAt`) VALUES
(1, 'Tuan', 'Minh', 'minhtuandepartment', 'sfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-22 08:36:20', '2023-08-22 08:36:20'),
(2, NULL, NULL, 'minhtuandepartment2', '$argon2id$v=19$m=65536,t=3,p=4$ooDvJaqZ1wxMVH5o5VgjqQ$mE+KutoFVsNvvb90j/ly3SiwRyJ56axWVCvooU33Slc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-22 08:47:11', '2023-08-22 08:47:11'),
(3, 'Tuan', 'Minh', 'minhtuandepartment', 'sfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-25 01:42:10', '2023-08-25 01:42:10'),
(4, 'Tuan', 'Minh', 'minhtuandepartment', 'sfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-25 01:56:28', '2023-08-25 01:56:28'),
(5, 'Tuan', 'Minh', 'minhtuandepartment', 'sfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-25 01:56:50', '2023-08-25 01:56:50'),
(6, 'Tuan', 'Minh', 'minhtuandepartment', 'sfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-25 01:57:15', '2023-08-25 01:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `lecturers`
--

CREATE TABLE `lecturers` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dateofbirth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `acedemicRank` varchar(255) DEFAULT NULL,
  `armyRank` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lecturers`
--

INSERT INTO `lecturers` (`id`, `firstName`, `lastName`, `username`, `password`, `phone`, `email`, `dateofbirth`, `address`, `degree`, `acedemicRank`, `armyRank`, `profilePicture`, `createdAt`, `updatedAt`) VALUES
(35, 'Trần', 'Trung Kiên', 'trungkien', 'asdfsaf', '123456', 'trungkien@g.com', '01011995', NULL, 'asfsd', 'asf', 'asf', 'asfsf', '2023-08-25 01:56:28', '2023-08-25 01:56:28'),
(36, 'Hồ', 'Huy Luật', 'hohuyluat', 'asdfsaf', '123456', 'huyluat@gmail.com', '01011995', 'asdf', 'asfsd', 'asf', 'asf', 'asfsf', '2023-08-25 01:56:50', '2023-08-25 01:56:50'),
(37, 'Nguyễn', 'Tiến Dũng', 'tiendung', 'asdfsaf', '123456', 'tiendung@gmail.com', '01011995', 'asdf', 'asfsd', 'asf', 'asf', 'asfsf', '2023-08-25 01:57:15', '2023-08-25 01:57:15'),
(38, 'Đỗ', 'Tùng Lâm', 'tunglam', 'b', 'b', 'tunglam@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-30 16:23:28', '2023-08-30 16:23:28'),
(39, 'Phạm', 'Minh Toán', 'minhtoan', 'a', 'a', 'minhtoan@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-30 16:28:54', '2023-08-30 16:28:54'),
(40, 'Nguyễn', 'Văn Hiếu', 'vanhieu', 'c', 'c', 'vanhieu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-30 16:33:40', '2023-08-30 16:33:40'),
(41, 'Nguyễn', 'Hữu Thọ', 'huutho', 'd', 'd', 'huutho@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-30 16:34:59', '2023-08-30 16:34:59'),
(42, 'Phạm', 'Minh Trọng', 'minhtrong', 'e', 'e', 'minhtrong@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-30 16:36:56', '2023-08-30 16:36:56');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `name`) VALUES
(3, 'Phòng 102'),
(4, 'Phòng 103'),
(5, 'Phòng 104'),
(6, 'Phòng 105'),
(7, 'Phòng 106'),
(8, 'Phòng 107'),
(9, 'Phòng 108'),
(10, 'Phòng 109'),
(11, 'Phòng 110'),
(12, 'Phòng 200'),
(13, 'Phòng 201'),
(14, 'Phòng 202'),
(15, 'Phòng 203'),
(16, 'Phòng 204'),
(17, 'Phòng 205'),
(18, 'Phòng 206'),
(19, 'Phòng 207'),
(20, 'Phòng 208'),
(21, 'Phòng 209'),
(22, 'Phòng 210'),
(23, 'Phòng thí nghiệm 1'),
(24, 'Phòng thí nghiệm 2'),
(25, 'Phòng thí nghiệm 3'),
(26, 'Phòng thí nghiệm 4'),
(27, 'Phòng thực hành 1'),
(28, 'Phòng thực hành 2'),
(29, 'Phòng thực hành 3'),
(30, 'Phòng thực hành 4');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230806125540-create-student.js'),
('20230822022721-create-lecturer.js'),
('20230822082943-create-department.js'),
('20230825013642-create-timetable.js');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `firstname`, `lastname`, `username`, `password`) VALUES
(2, 'Jane', 'Smith', 'janesmith', 'password2'),
(3, 'Michael', 'Johnson', 'michaelj', 'password3'),
(4, 'Emily', 'Davis', 'emilyd', 'password4'),
(5, 'David', 'Wilson', 'davidw', 'password5'),
(6, 'Sarah', 'Miller', 'sarahm', 'password6'),
(7, 'Robert', 'Jones', 'robertj', 'password7'),
(8, 'Linda', 'Brown', 'lindab', 'password8'),
(9, 'William', 'Taylor', 'williamt', 'password9'),
(10, 'Jennifer', 'Anderson', 'jennifera', 'password10'),
(11, 'James', 'Moore', 'jamesm', 'password11'),
(12, 'Patricia', 'Lee', 'patricial', 'password12'),
(13, 'Daniel', 'Harris', 'danielh', 'password13'),
(14, 'Karen', 'Martin', 'karenm', 'password14'),
(15, 'Richard', 'White', 'richardw', 'password15'),
(16, 'a', 'a', 'a', 'a'),
(17, 'a', 'a', 'a', 'a'),
(18, 'a', 'a', 'a', 'a'),
(19, 'a', 'a', 'a', 'a'),
(20, 'a', 'a', 'a', 'a'),
(21, 'a', 'a', 'a', 'a'),
(22, 'a', 'a', 'a', 'a'),
(23, 'a', 'a', 'a', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `army_rank` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstName`, `lastName`, `email`, `username`, `password`, `phone`, `age`, `address`, `class`, `army_rank`, `avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-15 02:02:02', '2023-08-15 02:02:02'),
(2, NULL, NULL, NULL, 'John1', '$argon2id$v=19$m=65536,t=3,p=4$FVrQyZA8kpduwjvTMHg5Bg$W7MGl3mmsLuczsvwQN/su90sQiY7TlVjcakNcJxmhZA', NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-16 07:10:14', '2023-08-16 07:10:14'),
(9, 'ádf', 'sf', 'asfdas@fsfsf.com', 'shinichiok2614', '$argon2id$v=19$m=65536,t=3,p=4$O9Ch7wZtGREtoOD4sH01iA$Jv8C36eDdVHFWvvI6dd6Vnr7MUOu8P1xK5+gIhvve+g', '352345', NULL, NULL, NULL, 'sdf', NULL, '2023-08-18 09:02:59', '2023-08-18 09:02:59'),
(10, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:34:08', '2023-08-22 02:34:08'),
(11, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:34:55', '2023-08-22 02:34:55'),
(12, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:36:02', '2023-08-22 02:36:02'),
(13, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:36:16', '2023-08-22 02:36:16'),
(14, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:40:15', '2023-08-22 02:40:15'),
(15, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 02:43:11', '2023-08-22 02:43:11'),
(17, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 08:36:02', '2023-08-22 08:36:02'),
(18, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-22 08:36:20', '2023-08-22 08:36:20'),
(19, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-25 01:42:10', '2023-08-25 01:42:10'),
(20, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-25 01:56:28', '2023-08-25 01:56:28'),
(21, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-25 01:56:50', '2023-08-25 01:56:50'),
(22, 'John', 'Doe', 'test', 'test', 'test', 'test', 1, 'test', 'test', 'test', NULL, '2023-08-25 01:57:15', '2023-08-25 01:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `timetables`
--

CREATE TABLE `timetables` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `classes` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `timestart` varchar(255) DEFAULT NULL,
  `timeend` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_lecturer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timetables`
--

INSERT INTO `timetables` (`id`, `subject`, `classes`, `room`, `day`, `timestart`, `timeend`, `createdAt`, `updatedAt`, `id_lecturer`) VALUES
(1, 'Kinh tế chính trị', 'CNTT11', '102', '', '2018-06-29 10:05:00', '2018-06-29 15:05:00', '2023-06-26 10:05:00', '2023-06-26 10:05:00', 35),
(2, 'C++ cơ bản', 'CNTT11', '102', '', '2023-09-28 10:05:00', '2023-09-28 15:05:00', '2023-06-26 10:05:00', '2023-06-26 10:05:00', 36),
(3, 'Thiết kế cơ sở dữ liệu', 'CNTT11', '123', NULL, '2023-09-28 12:00:00', '2023-09-28 12:00:00', '2023-09-02 08:24:01', '2023-09-02 08:24:01', 39),
(4, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-15 12:00:00', '2023-09-15 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(5, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-16 12:00:00', '2023-09-16 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(6, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-17 12:00:00', '2023-09-17 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(7, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-18 12:00:00', '2023-09-18 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(8, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-19 12:00:00', '2023-09-19 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(9, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-20 12:00:00', '2023-09-20 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(10, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-21 12:00:00', '2023-09-21 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(11, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-22 12:00:00', '2023-09-22 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(12, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-23 12:00:00', '2023-09-23 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(13, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-24 12:00:00', '2023-09-24 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(14, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-25 12:00:00', '2023-09-25 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(15, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-26 12:00:00', '2023-09-26 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(16, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-27 12:00:00', '2023-09-27 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(17, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-28 12:00:00', '2023-09-28 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(18, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-29 12:00:00', '2023-09-29 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(19, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-30 12:00:00', '2023-09-30 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(20, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-31 12:00:00', '2023-09-31 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(21, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-01 12:00:00', '2023-10-01 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(22, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-02 12:00:00', '2023-10-02 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(23, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-03 12:00:00', '2023-10-03 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(24, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-04 12:00:00', '2023-10-04 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(25, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-05 12:00:00', '2023-10-05 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(26, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-06 12:00:00', '2023-10-06 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(27, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-07 12:00:00', '2023-10-07 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(28, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-08 12:00:00', '2023-10-08 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42),
(29, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-10-09 12:00:00', '2023-10-09 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lecturers`
--
ALTER TABLE `lecturers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timetables`
--
ALTER TABLE `timetables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lecturer` (`id_lecturer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lecturers`
--
ALTER TABLE `lecturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `timetables`
--
ALTER TABLE `timetables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `timetables`
--
ALTER TABLE `timetables`
  ADD CONSTRAINT `timetables_ibfk_1` FOREIGN KEY (`id_lecturer`) REFERENCES `lecturers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
