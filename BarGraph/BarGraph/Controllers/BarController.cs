using BarGraph.Common;
using BarGraph.Common.Enums;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using BarGraph.BO.Domain;
using BarGraph.Web.Helpers;
using static BarGraph.Common.Enums.Definitions;

namespace BarGraph.Web.Controllers
{
    public class BarController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.ErrorMessage = TempData["errorMessage"] ?? "";
            ViewBag.SuccessMessage = TempData["successMessage"] ?? "";

            return View();
        }

        [HttpPost]
        public JsonResult GetBars(bool randomized)
        {
            WebAPICallResponseT<List<BarModel>> webApiResponse;
            List<BarModel> bars = new List<BarModel>();
            bool hasError = false;

            string url = "BarGraph/GetBars";
            if (randomized)
            {
                url = "BarGraph/GetRandomizedBars";
            }

            try
            {
                using (var client = new OurHttpClient())
                {
                    var postElem = new StringContent(JsonConvert.SerializeObject(randomized), Encoding.UTF8, "application/json");
                    HttpResponseMessage response = client.PostAsync(url, postElem).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        var barData = response.Content.ReadAsStringAsync().Result;
                        webApiResponse = JsonConvert.DeserializeObject<WebAPICallResponseT<List<BarModel>>>(barData);
                        if (webApiResponse.WebAPICallStatus)
                        {
                            bars = webApiResponse.Value;
                        }
                        else
                        {
                            hasError = true;
                        }
                    }
                    else
                    {
                        hasError = true;
                    }
                }
            }
            catch
            {
                hasError = true;
            }
            return Json(new
            {
                HasErrors = hasError,
                data = JsonConvert.SerializeObject(bars),
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UploadData(HttpPostedFileBase file)
        {
            if (file != null)
            {
                WebAPICallResponse webApiResponse = new WebAPICallResponse();
                StatusMessage status;

                List<BarModel> bars = FileHelper.ValidateAndMapFileToModel(file, out status);
                if (status == StatusMessage.Ok)
                {
                    using (var client = new OurHttpClient())
                    {
                        var postElem = new StringContent(JsonConvert.SerializeObject(bars), Encoding.UTF8, "application/json");
                        HttpResponseMessage response = client.PostAsync("BarGraph/UploadData", postElem).Result;

                        if (response.IsSuccessStatusCode)
                        {
                            var barData = response.Content.ReadAsStringAsync().Result;
                            webApiResponse = JsonConvert.DeserializeObject<WebAPICallResponse>(barData);

                            if (webApiResponse.WebAPICallStatus)
                            {
                                TempData["successMessage"] = webApiResponse.WebAPICallMessage;
                            }
                            else
                            {
                                TempData["errorMessage"] = webApiResponse.WebAPICallMessage;
                            }
                        }
                        else
                        {
                            TempData["errorMessage"] = webApiResponse.WebAPICallMessage;
                        }
                    }
                }
                else
                {
                    TempData["errorMessage"] = EnumHelper.GetDescription(StatusMessage.FileIsNotValid);
                }
            }
            else
            {
                TempData["errorMessage"] = EnumHelper.GetDescription(StatusMessage.MissingFile);
            }
            return RedirectToAction("Index");
        }
    }
}