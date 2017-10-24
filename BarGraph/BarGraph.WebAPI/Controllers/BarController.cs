using BarGraph.Common;
using System;
using System.Collections.Generic;
using System.Web.Http;
using BarGraph.BL.Domain;
using BarGraph.BO.Domain;
using BarGraph.Common.Enums;

namespace BarGraph.WebAPI.Controllers
{
    public class BarController : ApiController
    {
        /// <summary>
        /// Get active bars
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("api/BarGraph/GetBars")]
        public WebAPICallResponseT<List<BarModel>> GetBars()
        {
            WebAPICallResponseT<List<BarModel>> webApiResponse = new WebAPICallResponseT<List<BarModel>>();

            try
            {
                List<BarModel> bars = new BarRepository().GetBars();
                webApiResponse.Value = bars;
                webApiResponse.WebAPICallStatus = true;
            }
            catch
            {
                webApiResponse.Value = new List<BarModel>();
                webApiResponse.WebAPICallStatus = false;
            }

            return webApiResponse;
        }

        /// <summary>
        /// Get active bars with random size value
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("api/BarGraph/GetRandomizedBars")]
        public WebAPICallResponseT<List<BarModel>> GetRandomizedBars()
        {
            WebAPICallResponseT<List<BarModel>> webApiResponse = new WebAPICallResponseT<List<BarModel>>();

            try
            {
                List<BarModel> bars = new BarRepository().GetRandomizedBars();
                webApiResponse.WebAPICallStatus = true;
                webApiResponse.Value = bars;
            }
            catch (Exception ex)
            {
                webApiResponse.Value = new List<BarModel>();
                webApiResponse.WebAPICallStatus = true;
                webApiResponse.WebAPICallMessage = ex.Message;
            }

            return webApiResponse;
        }

        /// <summary>
        /// OverrideData use history pattern (end date setup)
        /// for oweride current data with new data set
        /// </summary>
        /// <param name="bars"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/BarGraph/UploadData")]
        public WebAPICallResponse UploadData(List<BarModel> bars)
        {
            WebAPICallResponse webApiResponse = new WebAPICallResponse();

            try
            {
                var insertedBars = new BarRepository().UploadData(bars);
                if (insertedBars.Count == bars.Count)
                {
                    webApiResponse.WebAPICallStatus = true;
                    webApiResponse.WebAPICallMessage = EnumHelper.GetDescription(Definitions.StatusMessage.InsertSuccess);
                }
                else
                {
                    webApiResponse.WebAPICallStatus = true;
                    webApiResponse.WebAPICallMessage = EnumHelper.GetDescription(Definitions.StatusMessage.InsertFail);
                }
            }
            catch
            {
                webApiResponse.WebAPICallStatus = true;
                webApiResponse.WebAPICallMessage = EnumHelper.GetDescription(Definitions.StatusMessage.InsertFail);
            }

            return webApiResponse;
        }
    }
}
