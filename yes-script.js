let musicPlaying = false;

window.addEventListener('load', () => {
    launchConfetti();

    // Autoplay music
    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    music.play().catch(() => {});
    musicPlaying = true;
    document.getElementById('music-toggle').textContent = '🔊';
});

function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00'];
    const duration = 6000;
    const end = Date.now() + duration;

    // Confetti options with heart shapes
    const heartConfetti = confetti.shapeFromPath({ path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' });

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors,
        shapes: [heartConfetti], // Use heart shape
        scalar: 2 // Make them a bit bigger
    });

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors,
            shapes: [heartConfetti], // Use heart shape
            scalar: 2
        });

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors,
            shapes: [heartConfetti], // Use heart shape
            scalar: 2
        });
    }, 300);
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}
