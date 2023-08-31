using AspNetViteMpa.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Reflection;

namespace AspNetViteMpa.Controllers
{
    public class HomeController : VueController
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            //return View();
            return RenderVue("home", "Home Page", "Home Page for AspNetViteMpa Sample");
        }

        public IActionResult Vite()
        {
            return RenderVue("vite-info", "Vite Info", "Vite Info Page for AspNetViteMpa Sample");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}