using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using BarGraph.BL.Domain;
using BarGraph.BO.Domain;
using Newtonsoft.Json;

namespace BarGraph.WebAPI.Tests.Controllers
{
    [TestClass]
    public class BarControllerTest
    {
        /// <summary>
        /// Test does GetBars return bars
        /// </summary>
        [TestMethod]
        public void TestGetBars()
        {
            List<BarModel> bars = new BarRepository().GetBars();
            Assert.IsNotNull(bars);
        }
        
        /// <summary>
        /// Test does GetRandomizedBars return randomized size
        /// </summary>
        [TestMethod]
        public void TestGetRandomizedBars()
        {
            List<BarModel> bars1 = new BarRepository().GetRandomizedBars();
            List<BarModel> bars2 = new BarRepository().GetRandomizedBars();
            Assert.IsNotNull(bars1);
            Assert.IsNotNull(bars1);
            if (bars1.Count > 0 && bars2.Count > 0)
            {
                Assert.AreNotEqual(JsonConvert.SerializeObject(bars1), JsonConvert.SerializeObject(bars2));
            }
            else
            {
                Assert.AreEqual(JsonConvert.SerializeObject(bars1), JsonConvert.SerializeObject(bars2));
            }
        }
        
        [TestMethod]
        public void TestUploadBars()
        {
            BarRepository brep = new BarRepository();

            //Get bars from database 
            List<BarModel> bars = brep.GetBars();
            
            //create bar for insert
            List<BarModel> barsForInsert = new List<BarModel>();
            barsForInsert.Add(new BarModel { Color = "testColor", Name = "testName", Size = 10 });
            
            //Insert new data and get from databaase
            var insertedBar = brep.UploadData(barsForInsert);
            
            //Get bars for check does insert pass well
            List<BarModel> newBars = brep.GetBars();

            foreach (var bar in newBars)
                bar.BarId = 0;
            
            //Delete added test bar
            var isDeleted = brep.DeleteById(insertedBar[0].BarId);

            if (bars.Count > 0)
            {
                new BarRepository().UploadData(bars);
            }

            Assert.AreEqual(JsonConvert.SerializeObject(newBars), JsonConvert.SerializeObject(barsForInsert));
        }
    }
}
