namespace PLANES_DE_AHORRO.Services;

using PLANES_DE_AHORRO.Models;

/// <summary>
/// Implementación de la configuración de planes (SOLID - Single Responsibility: única fuente de datos).
/// </summary>
public class PlanesConfigService : IPlanesConfig
{
    public string WhatsappNumber { get; } = "5491112345678";

    public string WhatsappPlansPhone { get; } = "3751418382";

    public string WhatsappPlansUrl { get; } = "https://api.whatsapp.com/send/?phone=3751418382&text=HOLA+ME+INTERESAN+LOS+PLANES+DE+HONDA+WAVE&type=phone_number&app_absent=0";

    public string WhatsappPagarBoletaUrl { get; } = "https://api.whatsapp.com/send/?phone=3751418382&text=Hola%2C+quiero+pagar+mi+boleta&type=phone_number&app_absent=0";

    public IReadOnlyList<Plan> GetPlans() => new List<Plan>
    {
        new()
        {
            Id = "triple-chance-honda-wave",
            Subtitle = "",
            Title = "HONDA WAVE",
            HeaderVariant = "green",
            ImageUrl = "https://artemis.clubsanjorge.com.ar/images/870.webp",
            ImageAlt = "Honda Wave - Plan Triple Chance",
            PriceLabel = "$45.000",
            PriceSmall = "DESDE"
        },
        new()
        {
            Id = "motos-alta-gama",
            Subtitle = "",
            Title = "MOTOS DE ALTA GAMA",
            HeaderVariant = "red",
            ImageUrl = "https://artemis.clubsanjorge.com.ar/images/883.webp",
            ImageAlt = "Motos de alta gama",
            PriceLabel = "$80.000",
            PriceSmall = "DESDE",
            WhatsappMessage = "HOLA, ESTOY INTERESADO EN LOS PLANES DE MOTOS DE ALTA GAMA"
        },
        new()
        {
            Id = "quintuple-chance-fiat-cronos",
            Subtitle = "",
            Title = "FIAT CRONOS",
            HeaderVariant = "green",
            ImageUrl = "https://artemis.clubsanjorge.com.ar/images/895.webp",
            ImageAlt = "Fiat Cronos - Plan Quintuple Chance",
            PriceLabel = "$120.000",
            PriceSmall = "DESDE",
            WhatsappMessage = "HOLA, ESTOY INTERESADO EN LOS PLANES DE FIAT CRONOS"
        }
    };
}
