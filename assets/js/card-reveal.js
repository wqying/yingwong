document.addEventListener('DOMContentLoaded', function() {
    var cards = Array.from(document.querySelectorAll('.post, .posts article'));

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            var idx = cards.indexOf(entry.target);
            entry.target.style.transitionDelay = (idx % 4) * 80 + 'ms';
            entry.target.classList.add('card-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(function(c) { observer.observe(c); });
});
