namespace BarGraph.Common
{
    public class WebAPICallResponseT<T>
    {
        public T Value { get; set; }

        public bool WebAPICallStatus { get; set; }

        public string WebAPICallMessage { get; set; }

        public WebAPICallResponseT()
        {
            Value = default(T);
        }

        public WebAPICallResponseT(T val)
        {
            Value = val;
        }

    }
}
