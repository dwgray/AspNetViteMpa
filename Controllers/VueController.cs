using AspNetViteMpa.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetViteMpa.Controllers;

public class VueController : Controller
{
    protected ActionResult RenderVue(string name, string title, string description)
    {
        return View("Vue", new VueModel(name, title, description));
    }
}