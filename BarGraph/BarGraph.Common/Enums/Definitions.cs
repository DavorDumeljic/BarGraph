using System.ComponentModel;

namespace BarGraph.Common.Enums
{
    public class Definitions
    {
        public enum StatusMessage
        {
            Ok = 1,
            [Description("File is not in valid format")]
            FileIsNotValid,
            [Description("Rendering file problem")]
            RenderFileError,
            [Description("Please choose file")]
            MissingFile,
            [Description("Successful insert")]
            InsertSuccess,
            [Description("Unsuccessful insert")]
            InsertFail,
        }
    }
}
