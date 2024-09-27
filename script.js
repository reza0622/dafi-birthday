document.getElementById('startButton').addEventListener('click', function() {
    // Sembunyikan tombol awal
    document.querySelector('.start-message').style.display = 'none';
    
    // Tampilkan konten ucapan ulang tahun dengan efek fade in
    const content = document.querySelector('.content');
    content.classList.remove('hidden');
    
    // Putar musik ulang tahun
    const music = document.getElementById('birthdayMusic');
    music.play();
});

document.getElementById('backButton').addEventListener('click', function() {
    // Tampilkan kembali tombol awal
    document.querySelector('.start-message').style.display = 'flex';
    
    // Sembunyikan konten ucapan ulang tahun
    const content = document.querySelector('.content');
    content.classList.add('hidden');
    
    // Hentikan musik
    const music = document.getElementById('birthdayMusic');
    music.pause();
    music.currentTime = 0; // Reset ke awal
});