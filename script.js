let runs = 0;
let wickets = 0;

function addRun() {
  if (wickets < 10) {
    runs++;
    document.getElementById('runs').innerText = runs;
    animateBall();
    playSound('run-sound');

    // Show dance animation at 50
    if (runs === 50) {
      document.getElementById('dance').classList.remove('hidden');
    }
  }
}

function addWicket() {
  if (wickets < 10) {
    wickets++;
    document.getElementById('wickets').innerText = wickets;
    playSound('wicket-sound');

    if (wickets === 10) {
      document.getElementById('message').classList.remove('hidden');
      document.getElementById('celebration').classList.remove('hidden');
    }

    animateBall();
  }
}

function resetGame() {
  runs = 0;
  wickets = 0;
  document.getElementById('runs').innerText = runs;
  document.getElementById('wickets').innerText = wickets;
  document.getElementById('message').classList.add('hidden');
  document.getElementById('celebration').classList.add('hidden');
  document.getElementById('dance').classList.add('hidden');
}

function animateBall() {
  const ball = document.getElementById('ball');
  const randX = Math.random() * 200;
  const randY = Math.random() * 100;

  ball.style.transition = 'none';
  ball.style.left = '135px';
  ball.style.top = '85px';

  setTimeout(() => {
    ball.style.transition = 'all 0.5s ease-out';
    ball.style.left = `${randX}px`;
    ball.style.top = `${randY}px`;
  }, 50);
}

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) sound.play();
}
