/**
 * main.js
 * Orquestador: única responsabilidad de inicializar la página.
 * Depende de abstracciones (config, WhatsApp, form, render de planes), no de detalles internos (Dependency Inversion).
 * No contiene lógica de negocio; solo ensambla y arranca.
 */

(function (global) {
    'use strict';

    /**
     * Crea el HTML de una tarjeta de plan.
     * SOLID - Single Responsibility: solo renderiza un plan dado.
     * SOLID - Open/Closed: si el contrato Plan cambia, solo se ajusta aquí; el resto no toca DOM de planes.
     * @param {Object} plan - Objeto con id, subtitle, title, headerVariant, imageUrl, imageAlt, priceLabel, priceSmall
     * @returns {string} HTML de la tarjeta
     */
    function renderPlanCard(plan) {
        var headerClass = 'plan-card__header plan-card__header--' + (plan.headerVariant === 'red' ? 'red' : 'green');
        var subtitleHtml = plan.subtitle
            ? '<span class="plan-card__subtitle">' + escapeHtml(plan.subtitle) + '</span>'
            : '';
        var priceHtml = plan.priceSmall
            ? '<small>' + escapeHtml(plan.priceSmall) + '</small> ' + escapeHtml(plan.priceLabel)
            : escapeHtml(plan.priceLabel);

        return (
            '<article class="plan-card" role="listitem" id="plan-' + escapeHtml(plan.id) + '">' +
                '<div class="' + headerClass + '">' +
                    subtitleHtml +
                    '<span class="plan-card__title">' + escapeHtml(plan.title) + '</span>' +
                '</div>' +
                '<div class="plan-card__image-wrap">' +
                    '<img class="plan-card__image" src="' + escapeHtml(plan.imageUrl) + '" alt="' + escapeHtml(plan.imageAlt) + '" width="280" height="160" loading="lazy">' +
                '</div>' +
                '<div class="plan-card__price">' +
                    '<span class="plan-card__price-tag">' + priceHtml + '</span>' +
                '</div>' +
                '<div class="plan-card__cta">' +
                    '<a href="#" class="btn btn--primary btn--whatsapp js-whatsapp-plan" data-whatsapp-context="plan" data-whatsapp-message="Hola, me interesa el plan ' + escapeHtml(plan.title) + '">' +
                        'HABLAR POR WHATSAPP' +
                    '</a>' +
                '</div>' +
            '</article>'
        );
    }

    /**
     * Escapa HTML para evitar XSS.
     * @param {string} str
     * @returns {string}
     */
    function escapeHtml(str) {
        if (str == null) return '';
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Pinta las tarjetas de planes en el contenedor.
     * Depende de CLUB_SAN_JORGE_CONFIG.plans (contrato), no de cómo se obtienen los datos.
     */
    function renderPlans() {
        var config = global.CLUB_SAN_JORGE_CONFIG;
        var container = document.querySelector('.js-plans-container');
        if (!config || !config.plans || !Array.isArray(config.plans) || !container) return;

        var html = '';
        for (var i = 0; i < config.plans.length; i++) {
            html += renderPlanCard(config.plans[i]);
        }
        container.innerHTML = html;
    }

    /**
     * Punto de entrada: inicializa formulario, planes y botones de WhatsApp.
     */
    function init() {
        renderPlans();
        if (global.ClubSanJorgeForm && typeof global.ClubSanJorgeForm.init === 'function') {
            global.ClubSanJorgeForm.init();
        }
        if (global.ClubSanJorgeWhatsApp && typeof global.ClubSanJorgeWhatsApp.initButtons === 'function') {
            global.ClubSanJorgeWhatsApp.initButtons();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(typeof window !== 'undefined' ? window : this);
