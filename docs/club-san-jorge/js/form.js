/**
 * form.js
 * SOLID - Single Responsibility: única responsabilidad de validar y enviar el formulario de contacto.
 * No conoce WhatsApp ni los planes; solo el formulario .js-contact-form (Interface Segregation).
 */

(function (global) {
    'use strict';

    /**
     * Valida que un campo no esté vacío (trim).
     * @param {string} value
     * @returns {boolean}
     */
    function isRequiredValid(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }

    /**
     * Valida formato básico de teléfono (números y quizá + o espacios).
     * @param {string} value
     * @returns {boolean}
     */
    function isPhoneValid(value) {
        if (!isRequiredValid(value)) return false;
        return /^[\d\s+\-()]{8,20}$/.test(value.trim());
    }

    /**
     * Obtiene los datos del formulario como objeto plano.
     * @param {HTMLFormElement} form
     * @returns {{ nombre: string, localidad: string, celular: string }}
     */
    function getFormData(form) {
        var data = form.elements;
        return {
            nombre: (data.nombre && data.nombre.value) ? data.nombre.value.trim() : '',
            localidad: (data.localidad && data.localidad.value) ? data.localidad.value.trim() : '',
            celular: (data.celular && data.celular.value) ? data.celular.value.trim() : ''
        };
    }

    /**
     * Muestra error en el campo (clase o aria-invalid).
     * @param {HTMLInputElement} input
     * @param {boolean} show
     */
    function setFieldError(input, show) {
        if (!input) return;
        if (show) {
            input.setAttribute('aria-invalid', 'true');
            input.classList.add('contact-form__input--error');
        } else {
            input.removeAttribute('aria-invalid');
            input.classList.remove('contact-form__input--error');
        }
    }

    /**
     * Valida el formulario y devuelve si es válido; opcionalmente marca campos con error.
     * @param {{ nombre: string, localidad: string, celular: string }} data
     * @param {HTMLFormElement} form
     * @returns {boolean}
     */
    function validateForm(data, form) {
        var nombreOk = isRequiredValid(data.nombre);
        var localidadOk = isRequiredValid(data.localidad);
        var celularOk = isPhoneValid(data.celular);

        setFieldError(form.elements.nombre, !nombreOk);
        setFieldError(form.elements.localidad, !localidadOk);
        setFieldError(form.elements.celular, !celularOk);

        return nombreOk && localidadOk && celularOk;
    }

    /**
     * Envía los datos (aquí solo simulamos; en producción sería fetch a un backend).
     * Abierto a extensión: se puede reemplazar por un servicio real (Open/Closed).
     * @param {{ nombre: string, localidad: string, celular: string }} data
     */
    function submitFormData(data) {
        // En producción: fetch('/api/contacto', { method: 'POST', body: JSON.stringify(data), ... })
        console.log('Formulario enviado (simulado):', data);
        alert('Gracias. Tus datos fueron enviados. Te contactaremos pronto.');
    }

    /**
     * Inicializa el formulario .js-contact-form: validación y envío.
     */
    function initContactForm() {
        var form = document.querySelector('.js-contact-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = getFormData(form);
            if (!validateForm(data, form)) {
                return;
            }
            submitFormData(data);
            form.reset();
            setFieldError(form.elements.nombre, false);
            setFieldError(form.elements.localidad, false);
            setFieldError(form.elements.celular, false);
        });

        // Quitar error al escribir (mejor UX)
        var inputs = form.querySelectorAll('.contact-form__input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function () {
                setFieldError(this, false);
            });
        }
    }

    global.ClubSanJorgeForm = {
        init: initContactForm,
        validate: validateForm,
        getFormData: getFormData,
        submitFormData: submitFormData
    };
})(typeof window !== 'undefined' ? window : this);
