namespace PLANES_DE_AHORRO.Services;

using PLANES_DE_AHORRO.Models;

/// <summary>
/// Fuente de datos de ganadores (SOLID - Single Responsibility).
/// </summary>
public class GanadoresConfigService : IGanadoresConfig
{
    /// <summary>Imágenes locales en wwwroot/Ganadores (raíz del proyecto).</summary>
    private const string BasePath = "/Ganadores";

    public IReadOnlyList<Ganador> GetGanadores() => new List<Ganador>
    {
        new()
        {
            Nombre = "Lamera Laura",
            ImagenUrl = "https://i.imgur.com/OK1juNr.jpeg",
            Cuota = "6",
            Localidad = "Jardin America",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Toyota Yaris"
        },
        new()
        {
            Nombre = "Liz Maribel",
            ImagenUrl = "https://i.imgur.com/TIYx3Wk.jpeg",
            Cuota = "29",
            Localidad = "Puerto Piray",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Toyota Hilux 4x2"
        },
        new()
        {
            Nombre = "Liz Maribel",
            ImagenUrl = "https://i.imgur.com/LUmGkwa.jpeg",
            Cuota = "29",
            Localidad = "Puerto Piray",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Toyota Hilux 4x2"
        },
        new()
        {
            Nombre = "Vazquez Marcelo",
            ImagenUrl = "https://i.imgur.com/C2isk55.jpeg",
            Cuota = "4",
            Localidad = "Irigoyen",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Honda Tornado"
        }
    };
}
