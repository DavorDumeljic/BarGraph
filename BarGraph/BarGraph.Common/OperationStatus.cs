using static BarGraph.Common.Enums.Definitions;

namespace BarGraph.Common
{
    public class OperationStatus
    {
        public bool HasError { get; set; }

        public StatusMessage Message { get; set; }

        public OperationStatus(bool hasError, StatusMessage message)
        {
            HasError = hasError;
            Message = message;
        }
    }
}
