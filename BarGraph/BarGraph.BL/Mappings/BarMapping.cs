using BarGraph.BO.Domain;
using BarGraph.Data;
using System.Collections.Generic;
using System.Linq;

namespace BarGraph.BL.Mappings
{
    public static class BarMapping
    {
        public static List<BarModel> MapDataObjectListToBussinesObjectList(List<Bar> bars)
        {
            return bars.Select(MapDataObjectToBussinesObject).ToList();
        }

        public static BarModel MapDataObjectToBussinesObject(Bar bar)
        {
            return new BarModel()
            {
                BarId = bar.BarId,
                Name = bar.Name,
                Size = bar.Size,
                Color = bar.Color,
                DeleteDate = bar.DeleteDate
            };
        }

        public static List<Bar> MapBussinesObjectListToDataObjectList(List<BarModel> bars)
        {
            return bars.Select(MapBussinesObjectToDataObject).ToList();
        }

        /// <summary>
        /// Map bussines object into data object
        /// Mapping for id has excluded because for this example i don't need it in mapping from bo to do
        /// </summary>
        /// <param name="bar"></param>
        /// <returns></returns>
        public static Bar MapBussinesObjectToDataObject(BarModel bar)
        {
            return new Bar()
            {
                Name = bar.Name,
                Size = bar.Size,
                Color = bar.Color,
                DeleteDate = bar.DeleteDate
            };
        }
    }
}
