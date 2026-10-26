document.addEventListener('DOMContentLoaded', () => {
    // Автоматическое обновление года в подвале
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Автоматическая дата обновления в Privacy Policy
    const dateSpan = document.getElementById('current-date');
    if (dateSpan) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateSpan.textContent = new Date().toLocaleDateString('ru-RU', options);
    }
});
