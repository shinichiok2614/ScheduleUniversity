-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th9 12, 2023 lúc 11:01 AM
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
(1, 'Hồ Huy', 'Luật', 'username_dept1', 'password_dept1', '1234567890', 'dept1@example.com', '1990-01-01', 'Địa chỉ Bộ phận 1', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'dept1_avatar.jpg', '2023-09-10 10:16:51', '2023-09-10 10:16:51');

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
  `Department` varchar(255) NOT NULL,
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

INSERT INTO `lecturers` (`id`, `firstName`, `lastName`, `username`, `password`, `Department`, `phone`, `email`, `dateofbirth`, `address`, `degree`, `acedemicRank`, `armyRank`, `profilePicture`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyễn Thị Ánh', 'Tuyết', 'lecturer1', 'password1', 'CNTT', '1234567891', 'email1@example.com', '1990-01-01', 'Địa chỉ 1', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar1.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(2, 'Lê Văn Minh', 'Tùng', 'lecturer2', 'password2', 'CNTT', '1234567892', 'email2@example.com', '1990-01-02', 'Địa chỉ 2', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar2.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(3, 'Trần Thị Thảo', 'Dung', 'lecturer3', 'password3', 'CNTT', '1234567893', 'email3@example.com', '1990-01-03', 'Địa chỉ 3', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar3.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(4, 'Phạm Văn Quốc', 'Tùng', 'lecturer4', 'password4', 'CNTT', '1234567894', 'email4@example.com', '1990-01-04', 'Địa chỉ 4', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar4.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(5, 'Hoàng Thị Hương', 'Trâm', 'lecturer5', 'password5', 'CNTT', '1234567895', 'email5@example.com', '1990-01-05', 'Địa chỉ 5', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar5.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(6, 'Võ Văn Đức', 'Nghĩa', 'lecturer6', 'password6', 'CNTT', '1234567896', 'email6@example.com', '1990-01-06', 'Địa chỉ 6', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar6.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(7, 'Đỗ Thị Minh', 'Trang', 'lecturer7', 'password7', 'CNTT', '1234567897', 'email7@example.com', '1990-01-07', 'Địa chỉ 7', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar7.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(8, 'Trịnh Văn Hùng', 'Đức', 'lecturer8', 'password8', 'CNTT', '1234567898', 'email8@example.com', '1990-01-08', 'Địa chỉ 8', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar8.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(9, 'Đặng Thị Bích', 'Liên', 'lecturer9', 'password9', 'CNTT', '1234567899', 'email9@example.com', '1990-01-09', 'Địa chỉ 9', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar9.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(10, 'Mai Thế', 'Nhân', 'lecturer10', 'password10', 'CNTT', '1234567810', 'email10@example.com', '1990-01-10', 'Địa chỉ 10', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar10.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(11, 'Vương Văn', 'Lực', 'lecturer11', 'password11', 'KTDK', '1234567811', 'email11@example.com', '1990-01-11', 'Địa chỉ 11', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar11.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(12, 'Nguyễn Thị Lan', 'Hương', 'lecturer12', 'password12', 'KTDK', '1234567812', 'email12@example.com', '1990-01-12', 'Địa chỉ 12', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar12.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(13, 'Trần Đình', 'Hải', 'lecturer13', 'password13', 'VK', '1234567813', 'email13@example.com', '1990-01-13', 'Địa chỉ 13', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar13.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(14, 'Lê Quốc', 'Hưng', 'lecturer14', 'password14', 'VK', '1234567814', 'email14@example.com', '1990-01-14', 'Địa chỉ 14', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar14.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30'),
(15, 'Phạm Thị Thúy', 'Dung', 'lecturer15', 'password15', 'VK', '1234567815', 'email15@example.com', '1990-01-15', 'Địa chỉ 15', 'Tiến sĩ', 'Phó giáo sư', 'Đại tá', 'avatar15.jpg', '2023-09-10 10:15:30', '2023-09-10 10:15:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `room`
--

INSERT INTO `room` (`id`, `name`) VALUES
(1, 'Phòng 101'),
(2, 'Phòng 102'),
(3, 'Phòng 103'),
(4, 'Phòng 104'),
(5, 'Phòng 105'),
(6, 'Phòng 106'),
(7, 'Phòng 107'),
(8, 'Phòng 108'),
(9, 'Phòng 109'),
(10, 'Phòng 110'),
(11, 'Phòng 111'),
(12, 'Phòng 112'),
(13, 'Phòng 113'),
(14, 'Phòng 114'),
(15, 'Phòng 115'),
(16, 'Phòng thí nghiệm 1'),
(17, 'Phòng thí nghiệm 2'),
(18, 'Phòng thí nghiệm 3'),
(19, 'Phòng thí nghiệm 4'),
(20, 'Phòng thực hành 1'),
(21, 'Phòng thực hành 2'),
(22, 'Phòng thực hành 3'),
(23, 'Phòng thực hành 4');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`id`, `firstname`, `lastname`, `username`, `password`) VALUES
(1, 'Nguyễn Văn', 'A', 'nhanvien1', 'password1'),
(2, 'Trần Thị', 'B', 'nhanvien2', 'password2'),
(3, 'Lê Quốc', 'C', 'nhanvien3', 'password3'),
(4, 'Phạm Thị', 'D', 'nhanvien4', 'password4'),
(5, 'Hoàng Văn', 'E', 'nhanvien5', 'password5'),
(6, 'Võ Thị', 'F', 'nhanvien6', 'password6'),
(7, 'Đỗ Thành', 'G', 'nhanvien7', 'password7'),
(8, 'Trịnh Minh', 'H', 'nhanvien8', 'password8'),
(9, 'Đặng Hồng', 'I', 'nhanvien9', 'password9'),
(10, 'Mai Kim', 'K', 'nhanvien10', 'password10'),
(11, 'Vương Thị', 'L', 'nhanvien11', 'password11'),
(12, 'Nguyễn Văn', 'M', 'nhanvien12', 'password12'),
(13, 'Trần Minh', 'N', 'nhanvien13', 'password13'),
(14, 'Lê Hoàng', 'P', 'nhanvien14', 'password14'),
(15, 'Phạm Thị', 'Q', 'nhanvien15', 'password15');

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `timetables`
--

CREATE TABLE `timetables` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `classes` varchar(255) DEFAULT NULL,
  `room` int(11) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `timestart` varchar(255) DEFAULT NULL,
  `timeend` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_lecturer` int(11) DEFAULT NULL,
  `id_staff` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `timetables`
--

INSERT INTO `timetables` (`id`, `subject`, `classes`, `room`, `day`, `timestart`, `timeend`, `createdAt`, `updatedAt`, `id_lecturer`, `id_staff`) VALUES
(37, 'Kinh tế chính trị', 'CNTT11', 1, NULL, '2023-09-01 08:00:00', '2023-09-01 10:00:00', '2023-09-10 10:47:42', '2023-09-10 10:47:42', 1, 1),
(38, 'C++ cơ bản', 'CNTT11', 1, NULL, '2023-09-01 13:00:00', '2023-09-01 17:00:00', '2023-09-10 10:48:29', '2023-09-10 10:48:29', 2, 2),
(39, 'Thiết kế cơ sở dữ liệu', 'CNTT11', 1, NULL, '2023-09-01 19:00:00', '2023-09-01 21:00:00', '2023-09-10 10:48:53', '2023-09-10 10:48:53', 3, 3),
(40, 'Kinh tế chính trị', 'CNTT11', 2, NULL, '2023-09-02 07:00:00', '2023-09-01 10:00:00', '2023-09-10 10:50:07', '2023-09-10 10:50:07', 4, 1),
(41, 'Thiết kế cơ sở dữ liệu', 'CNTT11', 2, NULL, '2023-09-02 13:00:00', '2023-09-01 17:00:00', '2023-09-10 10:50:51', '2023-09-10 10:50:51', 5, 4),
(42, 'Thực tập kỹ thuật lập trình', 'CNTT11', 2, NULL, '2023-09-02 19:00:00', '2023-09-01 21:00:00', '2023-09-10 10:51:24', '2023-09-10 10:51:24', 5, 4);

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
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `id_lecturer` (`id_lecturer`),
  ADD KEY `timetables_ibfk_2` (`room`),
  ADD KEY `timetables_ibfk_3` (`id_staff`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT cho bảng `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `timetables`
--
ALTER TABLE `timetables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `timetables`
--
ALTER TABLE `timetables`
  ADD CONSTRAINT `timetables_ibfk_1` FOREIGN KEY (`id_lecturer`) REFERENCES `lecturers` (`id`),
  ADD CONSTRAINT `timetables_ibfk_2` FOREIGN KEY (`room`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `timetables_ibfk_3` FOREIGN KEY (`id_staff`) REFERENCES `staff` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
