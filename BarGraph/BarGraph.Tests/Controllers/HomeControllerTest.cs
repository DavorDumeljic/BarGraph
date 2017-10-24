using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BarGraph;
using BarGraph.Web.Controllers;
using static BarGraph.Common.Enums.Definitions;
using BarGraph.Helpers;
using System.Web;
using System.IO;
using Moq;

namespace BarGraph.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void TestValidateAndMapFile()
        {
            string filePath = Path.GetFullPath(@"TestFiles\Correct.txt");
            FileStream fileStream = new FileStream(filePath, FileMode.Open);
            Mock<HttpPostedFileBase> file = new Mock<HttpPostedFileBase>();

            file.Setup(f => f.ContentLength).Returns(10);
            file.Setup(f => f.FileName).Returns("Correct.txt");
            file.Setup(f => f.InputStream).Returns(fileStream);

            StatusMessage status;

            var actual = fileSystemService.IsValidImage(uploadedFile.Object, 720, 960);

            List<BO.Bar> bars = FileHelper.ValidateAndMapFileToModel(file, out status);

            Assert.AreEqual(status, StatusMessage.OK);
        }
        
    }
}
