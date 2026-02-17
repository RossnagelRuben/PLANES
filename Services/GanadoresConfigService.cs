namespace PLANES.Services;

using PLANES.Models;

/// <summary>
/// Fuente de datos de ganadores (SOLID - Single Responsibility).
/// </summary>
public class GanadoresConfigService : IGanadoresConfig
{
    private const string BaseUrl = "https://artemis.clubsanjorge.com.ar/images/winners";

    public IReadOnlyList<Ganador> GetGanadores() => new List<Ganador>
    {
        new()
        {
            Nombre = "Bascunan Carlos Placido",
            ImagenUrl = $"{BaseUrl}/714092.webp",
            Cuota = "54",
            Localidad = "Zapala/Neuquen",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Ford Ranger 4x2 cabina doble"
        },
        new()
        {
            Nombre = "Condori Joaquin Calixto",
            ImagenUrl = $"{BaseUrl}/806411.webp",
            Cuota = "1",
            Localidad = "La Quiaca/Jujuy",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Toyota Hilux 4x2 cabina doble"
        },
        new()
        {
            Nombre = "Encina Juan Ramon",
            ImagenUrl = $"{BaseUrl}/799106.webp",
            Cuota = "3",
            Localidad = "Barranqueras/Chaco",
            FechaAdjudicacion = "25-10-2025",
            Premio = "Toyota Hilux 4x4"
        },
        new()
        {
            Nombre = "Jofre Monica Viviana",
            ImagenUrl = $"{BaseUrl}/728824.webp",
            Cuota = "41",
            Localidad = "Moron/Buenos Aires",
            FechaAdjudicacion = "29-11-2025",
            Premio = "Chevrolet Onix Joy"
        }
    };
}
