create database bd_ciberphone;
use bd_ciberphone;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `tb_administrador` (
  `id_admi` int(11) NOT NULL,
  `nom_admi` varchar(250) NOT NULL,
  `correo_admi` varchar(250) NOT NULL,
  `pass_admi` varchar(13) NOT NULL,
  `user_admi` varchar(100) NOT NULL,
  `ape_admi` varchar(250) NOT NULL,
  `id_tipousu` int(11) NOT NULL,
  `fech_crea` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `tb_boleta` (
  `id_boleta` int(11) NOT NULL,
  `id_direccionFact` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `diaventa_boleta` datetime NOT NULL,
  `subtotal_boleta` decimal(10,2) NOT NULL,
  `id_currier` int(11) NOT NULL,
  `total_boleta` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tb_categoria` (
  `id_catepro` int(11) NOT NULL,
  `nom_cate` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_cliente` (
  `id_Cliente` int(11) NOT NULL,
  `nom_cli` varchar(250) NOT NULL,
  `ape_cli` varchar(250) NOT NULL,
  `correo_cli` varchar(300) NOT NULL,
  `pass_cli` varchar(13) NOT NULL,
  `id_tipousu` int(11) NOT NULL,
  `fech_crea` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `tb_currier` (
  `id_currier` int(11) NOT NULL,
  `nom_currier` varchar(250) NOT NULL,
  `precio_currier` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_detalleboleta` (
  `id_detalleboleta` int(11) NOT NULL,
  `id_boleta` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad_detbol` int(11) NOT NULL,
  `total_detbol` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_direccionfacturacion` (
  `id_direccionFac` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `nom_direccionFac` varchar(300) NOT NULL,
  `ape_direccionFac` varchar(300) NOT NULL,
  `dni_direccionFac` char(8) NOT NULL,
  `correo_direccionFac` varchar(300) NOT NULL,
  `ciudad_direccionFac` varchar(300) NOT NULL,
  `tel_direccionFac` varchar(10) NOT NULL,
  `direccion_direccionFac` varchar(300) NOT NULL,
  `provincia_direccionFac` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_marca` (
  `id_marca` int(11) NOT NULL,
  `nom_marca` varchar(250) NOT NULL,
  `foto_marca` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_producto` (
  `id_pro` int(11) NOT NULL,
  `nom_pro` varchar(250) NOT NULL,
  `des_pro` varchar(1000) NOT NULL,
  `foto_pro` varchar(500) NOT NULL,
  `stock_pro` int(11) NOT NULL,
  `precio_pro` decimal(5,2) NOT NULL,
  `estado_pro` char(1) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `id_cate` int(11) NOT NULL,
  `fech_crea` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `tb_tipousuario` (
  `id_tipousu` int(11) NOT NULL,
  `tipo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `tb_administrador`
  ADD PRIMARY KEY (`id_admi`),
  ADD KEY `id_tipousu` (`id_tipousu`);


ALTER TABLE `tb_boleta`
  ADD PRIMARY KEY (`id_boleta`),
  ADD KEY `id_direccionFact` (`id_direccionFact`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_currier` (`id_currier`);

ALTER TABLE `tb_categoria`
  ADD PRIMARY KEY (`id_catepro`);


ALTER TABLE `tb_cliente`
  ADD PRIMARY KEY (`id_Cliente`),
  ADD KEY `id_tipousu` (`id_tipousu`);

ALTER TABLE `tb_currier`
  ADD PRIMARY KEY (`id_currier`);

ALTER TABLE `tb_detalleboleta`
  ADD PRIMARY KEY (`id_detalleboleta`);

ALTER TABLE `tb_direccionfacturacion`
  ADD PRIMARY KEY (`id_direccionFac`),
  ADD KEY `id_cliente` (`id_cliente`);

ALTER TABLE `tb_marca`
  ADD PRIMARY KEY (`id_marca`);


ALTER TABLE `tb_producto`
  ADD PRIMARY KEY (`id_pro`),
  ADD KEY `id_marca` (`id_marca`),
  ADD KEY `id_cate` (`id_cate`);


ALTER TABLE `tb_tipousuario`
  ADD PRIMARY KEY (`id_tipousu`);


ALTER TABLE `tb_administrador`
  MODIFY `id_admi` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_boleta`
  MODIFY `id_boleta` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_categoria`
  MODIFY `id_catepro` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_cliente`
  MODIFY `id_Cliente` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `tb_currier`
  MODIFY `id_currier` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `tb_detalleboleta`
  MODIFY `id_detalleboleta` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_direccionfacturacion`
  MODIFY `id_direccionFac` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `tb_marca`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `tb_producto`
  MODIFY `id_pro` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `tb_tipousuario`
  MODIFY `id_tipousu` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
