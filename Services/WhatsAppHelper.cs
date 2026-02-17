namespace PLANES.Services;

/// <summary>
/// Construye URLs de WhatsApp (SOLID - Single Responsibility).
/// </summary>
public static class WhatsAppHelper
{
    /// <summary>
    /// Genera la URL de wa.me con número y mensaje opcional.
    /// </summary>
    /// <param name="number">Número sin espacios ni + (ej. 5491112345678).</param>
    /// <param name="message">Mensaje prellenado (opcional).</param>
    public static string BuildUrl(string number, string? message = null)
    {
        var clean = new string((number ?? "").Where(char.IsDigit).ToArray());
        var url = $"https://wa.me/{Uri.EscapeDataString(clean)}";
        if (!string.IsNullOrWhiteSpace(message))
            url += "?text=" + Uri.EscapeDataString(message.Trim());
        return url;
    }

    /// <summary>
    /// Genera la URL de api.whatsapp.com con número y mensaje.
    /// </summary>
    public static string BuildApiWhatsAppUrl(string phone, string message)
    {
        var clean = new string((phone ?? "").Where(char.IsDigit).ToArray());
        return "https://api.whatsapp.com/send/?phone=" + Uri.EscapeDataString(clean)
            + "&text=" + Uri.EscapeDataString((message ?? "").Trim())
            + "&type=phone_number&app_absent=0";
    }
}
