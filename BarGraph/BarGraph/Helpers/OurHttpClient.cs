using System;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;

namespace BarGraph.Web.Helpers
{
    public class OurHttpClient : HttpClient
    {
        public OurHttpClient()
        {
            this.BaseAddress = new Uri(ConfigurationManager.AppSettings["BarGraph.WebAPI"]);
            this.DefaultRequestHeaders.Accept.Clear();
            this.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
    }
}