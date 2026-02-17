using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using PLANES_DE_AHORRO;
using PLANES_DE_AHORRO.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
// Configuración de planes (SOLID - Dependency Inversion: inyectable)
builder.Services.AddSingleton<IPlanesConfig, PlanesConfigService>();
builder.Services.AddSingleton<IGanadoresConfig, GanadoresConfigService>();

await builder.Build().RunAsync();
