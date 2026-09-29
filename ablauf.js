// Blendet Angebote aus, deren Frist (data-bis, JJJJ-MM-TT) vorbei ist.
const heute = new Date().toLocaleDateString('sv');
document.querySelectorAll('[data-bis]').forEach(e => { if (e.dataset.bis < heute) e.remove(); });
