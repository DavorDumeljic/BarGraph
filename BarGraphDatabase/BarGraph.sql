USE [master]
GO
/****** Object:  Database [BarGraph]    Script Date: 10/22/2017 10:45:07 AM ******/
CREATE DATABASE [BarGraph]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BarGraph', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLEXPRESS\MSSQL\DATA\BarGraph.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BarGraph_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLEXPRESS\MSSQL\DATA\BarGraph_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [BarGraph] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BarGraph].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BarGraph] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BarGraph] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BarGraph] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BarGraph] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BarGraph] SET ARITHABORT OFF 
GO
ALTER DATABASE [BarGraph] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [BarGraph] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BarGraph] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BarGraph] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BarGraph] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BarGraph] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BarGraph] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BarGraph] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BarGraph] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BarGraph] SET  ENABLE_BROKER 
GO
ALTER DATABASE [BarGraph] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BarGraph] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BarGraph] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BarGraph] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BarGraph] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BarGraph] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BarGraph] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BarGraph] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BarGraph] SET  MULTI_USER 
GO
ALTER DATABASE [BarGraph] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BarGraph] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BarGraph] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BarGraph] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BarGraph] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BarGraph] SET QUERY_STORE = OFF
GO
USE [BarGraph]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [BarGraph]
GO
/****** Object:  Table [dbo].[Bars]    Script Date: 10/22/2017 10:45:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bars](
	[BarId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](70) NOT NULL,
	[Color] [varchar](50) NOT NULL,
	[Size] [int] NOT NULL,
	[DeleteDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[BarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
USE [master]
GO
ALTER DATABASE [BarGraph] SET  READ_WRITE 
GO
