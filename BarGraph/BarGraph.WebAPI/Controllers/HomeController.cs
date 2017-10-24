using System.Web.Mvc;

namespace BarGraph.WebAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            return RedirectToAction("../Help");
        }
    }
}
