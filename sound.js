window.onload = function() {
    const audio = new Audio('modem.mp3');
    audio.play().catch(e => console.warn('Auto-play blocked by browser', e));
};