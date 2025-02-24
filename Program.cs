using Vite.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddViteServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.MapStaticAssets(); // According to the .net 9 documentation, MapStaticAssets is the correct way to serve static files
app.UseStaticFiles();  // and shouldn't require the call to app.UseStaticFiles() anymore, but that doesn't work for this
                       // site for some reason, so I'm leaving it in for now.

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapGet("/api/hello", () => "Hello from the Server");

if (app.Environment.IsDevelopment())
{
    app.UseWebSockets();
    app.UseViteDevelopmentServer(true);
}

app.Run();
