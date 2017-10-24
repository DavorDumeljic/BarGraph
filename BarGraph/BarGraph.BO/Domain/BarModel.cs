using System;

namespace BarGraph.BO.Domain
{
    public class BarModel
    {
        public int BarId { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Size { get; set; }
        public DateTime? DeleteDate { get; set; }    
    }
}
