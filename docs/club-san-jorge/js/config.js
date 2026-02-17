/**
 * config.js
 * SOLID - Single Responsibility: única responsabilidad de proveer datos de configuración.
 * SOLID - Open/Closed: para agregar planes solo se añaden objetos aquí, sin modificar el resto del código.
 * SOLID - Dependency Inversion: el resto de la app depende de este "contrato" (array de planes), no de implementaciones.
 */

(function (global) {
    'use strict';

    /**
     * Número de WhatsApp del club (reemplazar por el real).
     * Se usa sin prefijo + ni espacios para el enlace wa.me
     */
    var WHATSAPP_NUMBER = '5491112345678';

    /**
     * Contrato de un plan (Interface Segregation: solo las propiedades necesarias para la UI).
     * @typedef {Object} Plan
     * @property {string} id - Identificador único
     * @property {string} subtitle - Texto pequeño del header (ej. "TRIPLE CHANCE")
     * @property {string} title - Nombre principal del plan (ej. "HONDA WAVE")
     * @property {string} headerVariant - "red" | "green" para estilo del header
     * @property {string} imageUrl - URL de la imagen del producto
     * @property {string} imageAlt - Texto alternativo para accesibilidad
     * @property {string} priceLabel - Etiqueta de precio (ej. "DESDE 37.000" o "$35.000 - $42.000 + $200.000")
     * @property {string} [priceSmall] - Parte opcional más pequeña del precio (ej. "DESDE")
     */

    /**
     * Lista de planes de capitalización.
     * Extensible sin modificar el código que renderiza (Open/Closed).
     */
    var PLANS = [
        {
            id: 'triple-chance-honda-wave',
            subtitle: 'TRIPLE CHANCE',
            title: 'HONDA WAVE',
            headerVariant: 'red',
            imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400',
            imageAlt: 'Honda Wave - Plan Triple Chance',
            priceLabel: '37.000',
            priceSmall: 'DESDE'
        },
        {
            id: 'motos-alta-gama',
            subtitle: '',
            title: 'MOTOS DE ALTA GAMA',
            headerVariant: 'green',
            imageUrl: 'https://images.unsplash.com/photo-1609630875883-2b1d40262f4b?auto=format&fit=crop&w=400',
            imageAlt: 'Motos de alta gama',
            priceLabel: '$35.000 - $42.000 + $200.000'
        },
        {
            id: 'quintuple-chance-fiat-cronos',
            subtitle: 'QUINTUPLE CHANCE',
            title: 'FIAT CRONOS',
            headerVariant: 'green',
            imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=400',
            imageAlt: 'Fiat Cronos - Plan Quintuple Chance',
            priceLabel: '120.000',
            priceSmall: 'DESDE'
        }
    ];

    // Exponer al global para uso por main.js (sin módulos ES6 para compatibilidad)
    global.CLUB_SAN_JORGE_CONFIG = {
        whatsappNumber: WHATSAPP_NUMBER,
        plans: PLANS
    };
})(typeof window !== 'undefined' ? window : this);
