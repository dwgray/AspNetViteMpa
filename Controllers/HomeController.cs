using AspNetViteMpa.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

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
            return RenderVue("home", "Home Page", "Home Page for AspNetViteMpa Sample");
        }

        public IActionResult Vite()
        {
            return RenderVue("vite-info", "Vite Info", "Vite Info Page for AspNetViteMpa Sample");
        }

        public IActionResult AspNet()
        {
            return RenderVue("dotnet-info", "Asp.Net Info", "Asp.Net Info Page for AspNetViteMpa Sample");
        }

        public IActionResult Vue()
        {
            return RenderVue("vue-info", "Vue Info", "Vue Info Page for AspNetViteMpa Sample");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}