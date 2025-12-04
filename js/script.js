document.addEventListener('DOMContentLoaded', () => {
    // i18n Logic
    const currentLang = 'ru'; // Default language

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    // Initialize content
    updateContent(currentLang);

    // Form Handling (Mock)
    const forms = document.querySelectorAll('.waitlist-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;

            if (email) {
                // Simulate API call
                const btn = form.querySelector('button');
                const originalText = btn.textContent;
                btn.textContent = '...';
                btn.disabled = true;

                setTimeout(() => {
                    btn.textContent = '✓';
                    btn.style.backgroundColor = '#10B981'; // Success green

                    // Show success message if it exists in this section
                    const successMsg = form.nextElementSibling;
                    if (successMsg && successMsg.classList.contains('form-success')) {
                        successMsg.classList.remove('hidden');
                    }

                    form.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                        if (successMsg) successMsg.classList.add('hidden');
                    }, 3000);
                }, 1000);
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
