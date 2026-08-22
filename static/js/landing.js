(function () {
    var trigger = document.getElementById('how-it-works-btn');
    var modal = document.getElementById('how-it-works-modal');
    var closeBtn = document.getElementById('how-it-works-close');
    var video = document.getElementById('how-it-works-video');
    var videoSrc = video.getAttribute('data-src');

    function openModal(event) {
        event.preventDefault();
        video.setAttribute('src', videoSrc + '?autoplay=1');
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
        video.removeAttribute('src');
    }

    trigger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
})();
