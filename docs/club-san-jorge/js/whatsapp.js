/**
 * whatsapp.js
 * SOLID - Single Responsibility: única responsabilidad de abrir WhatsApp con un mensaje.
 * No conoce el DOM ni el formulario; solo recibe número y mensaje (Dependency Inversion).
 */

(function (global) {
    'use strict';

    /**
     * Construye la URL de WhatsApp para chat con un número y mensaje opcional.
     * @param {string} number - Número sin espacios ni + (ej. 5491112345678)
     * @param {string} [message] - Mensaje prellenado (opcional)
     * @returns {string} URL para wa.me
     */
    function buildWhatsAppUrl(number, message) {
        var base = 'https://wa.me/' + encodeURIComponent(String(number).replace(/\D/g, ''));
        if (message && message.trim()) {
            return base + '?text=' + encodeURIComponent(message.trim());
        }
        return base;
    }

    /**
     * Abre WhatsApp en nueva pestaña (o misma según dispositivo).
     * @param {string} number - Número de WhatsApp
     * @param {string} [message] - Mensaje opcional
     */
    function openWhatsApp(number, message) {
        var url = buildWhatsAppUrl(number, message);
        global.open(url, '_blank', 'noopener,noreferrer');
    }

    /**
     * Inicializa los botones con clase .js-whatsapp-hero y .js-whatsapp-footer y .js-whatsapp-plan.
     * Depende de CLUB_SAN_JORGE_CONFIG (inyección de configuración).
     */
    function initWhatsAppButtons() {
        var config = global.CLUB_SAN_JORGE_CONFIG;
        if (!config || !config.whatsappNumber) return;

        var number = config.whatsappNumber;

        // Mensaje por defecto según contexto
        var getDefaultMessage = function (context) {
            if (context === 'hero') {
                return 'Hola, me interesan los planes de capitalización y ahorro.';
            }
            if (context === 'footer') {
                return 'Hola, quiero más información sobre los planes.';
            }
            return 'Hola, me interesa este plan.';
        };

        var handleClick = function (e) {
            e.preventDefault();
            var context = e.currentTarget.getAttribute('data-whatsapp-context') || '';
            var customMessage = e.currentTarget.getAttribute('data-whatsapp-message');
            var message = customMessage != null ? customMessage : getDefaultMessage(context);
            openWhatsApp(number, message);
        };

        var selectors = '.js-whatsapp-hero, .js-whatsapp-footer, .js-whatsapp-plan';
        var buttons = document.querySelectorAll(selectors);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', handleClick);
        }
    }

    // API pública
    global.ClubSanJorgeWhatsApp = {
        open: openWhatsApp,
        buildUrl: buildWhatsAppUrl,
        initButtons: initWhatsAppButtons
    };
})(typeof window !== 'undefined' ? window : this);
