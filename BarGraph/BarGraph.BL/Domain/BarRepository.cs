using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using BarGraph.BL.Mappings;
using BarGraph.BO.Domain;
using BarGraph.Data;

namespace BarGraph.BL.Domain
{
    public class BarRepository
    {
        /// <summary>
        /// Get active bars from database
        /// </summary>
        /// <returns>Return all active values from database</returns>
        public List<BarModel> GetBars()
        {
            List<Bar> bars;

            using (BarGraphEntities data = new BarGraphEntities())
            {
                bars = data.Bars.Where(con => con.DeleteDate == null)
                    .OrderBy(ob => ob.Name).ToList();
            }

            return BarMapping.MapDataObjectListToBussinesObjectList(bars);
        }

        /// <summary>
        /// Get bars from database with random size value
        /// </summary>
        /// <returns>Return bar list with random size value</returns>
        public List<BarModel> GetRandomizedBars()
        {
            Random rnd = new Random();

            List<BarModel> bars = GetBars();

            foreach (var bar in bars)
            {
                bar.Size = rnd.Next(bar.Size);
            }
            return bars;
        }

        /// <summary>
        /// Add new or override old bars with new data
        /// </summary>
        /// <param name="bars"> new data list for upload </param>
        /// <returns></returns>
        public List<BarModel> UploadData(List<BarModel> bars)
        {
            List<BarModel> returnBars = new List<BarModel>();
            using (BarGraphEntities data = new BarGraphEntities())
            {
                using (DbContextTransaction transaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        //Read old data and prepare for update (set end date)
                        var existBars = data.Bars.Where(con => con.DeleteDate == null).ToList();
                        existBars.ForEach(item => item.DeleteDate = DateTime.Now);

                        //Prapare new data for insert
                        foreach (var bar in bars)
                        {
                            data.Bars.Add(BarMapping.MapBussinesObjectToDataObject(bar));
                        }

                        data.SaveChanges();
                        transaction.Commit();
                        returnBars = BarMapping.MapDataObjectListToBussinesObjectList(
                            data.Bars
                            .Where(cond => cond.DeleteDate == null)
                            .ToList()
                            );
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                    }
                }
            }
            return returnBars;
        }

        /// <summary>
        /// Delete all bars from database
        /// </summary>
        public void DeleteAll()
        {
            using (BarGraphEntities data = new BarGraphEntities())
            {
                using (DbContextTransaction transaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        var existBars = data.Bars.Where(con => con.DeleteDate == null).ToList();
                        existBars.ForEach(item => item.DeleteDate = DateTime.Now);

                        data.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                    }
                }
            }
        }

        /// <summary>
        /// Delete bar by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool DeleteById(int id)
        {
            using (BarGraphEntities data = new BarGraphEntities())
            {
                using (DbContextTransaction transaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        var existBar = data.Bars.Single(con => con.DeleteDate == null && con.BarId == id);
                        existBar.DeleteDate = DateTime.Now;
                        data.SaveChanges();
                        transaction.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                        return false;
                    }
                }
            }
        }

    }
}
