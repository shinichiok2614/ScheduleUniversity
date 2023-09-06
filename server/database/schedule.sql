-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th9 06, 2023 lúc 03:37 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `schedule`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `departments`
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
-- Đang đổ dữ liệu cho bảng `departments`
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
-- Cấu trúc bảng cho bảng `lecturers`
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
-- Đang đổ dữ liệu cho bảng `lecturers`
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
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230806125540-create-student.js'),
('20230822022721-create-lecturer.js'),
('20230822082943-create-department.js'),
('20230825013642-create-timetable.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `students`
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
-- Đang đổ dữ liệu cho bảng `students`
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
-- Cấu trúc bảng cho bảng `timetables`
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
-- Đang đổ dữ liệu cho bảng `timetables`
--

INSERT INTO `timetables` (`id`, `subject`, `classes`, `room`, `day`, `timestart`, `timeend`, `createdAt`, `updatedAt`, `id_lecturer`) VALUES
(5, 'Kinh tế chính trị', 'CNTT11', '102', '', '2018-06-29 10:05:00', '2018-06-29 15:05:00', '2023-06-26 10:05:00', '2023-06-26 10:05:00', 35),
(6, 'C++ cơ bản', 'CNTT11', '102', '', '2023-09-28 10:05:00', '2023-09-28 15:05:00', '2023-06-26 10:05:00', '2023-06-26 10:05:00', 36),
(34, 'Thiết kế cơ sở dữ liệu', 'CNTT11', '123', NULL, '2023-09-28 12:00:00', '2023-09-28 12:00:00', '2023-09-02 08:24:01', '2023-09-02 08:24:01', 39),
(35, 'Thực tập kỹ thuật lập trình', 'CNTT11', '145', NULL, '2023-09-15 12:00:00', '2023-09-08 12:00:00', '2023-09-02 08:25:15', '2023-09-02 08:25:15', 42);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lecturers`
--
ALTER TABLE `lecturers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `timetables`
--
ALTER TABLE `timetables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lecturer` (`id_lecturer`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `lecturers`
--
ALTER TABLE `lecturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `timetables`
--
ALTER TABLE `timetables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `timetables`
--
ALTER TABLE `timetables`
  ADD CONSTRAINT `timetables_ibfk_1` FOREIGN KEY (`id_lecturer`) REFERENCES `lecturers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
