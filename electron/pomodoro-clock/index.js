window.onload = () => {
  setupButtonEvents();
}

let clock                = document.querySelector('#clock');
let sessionMinutesButton = document.querySelector('#session-minutes');
let breakMinutesButton   = document.querySelector('#break-minutes');

let [sessionMinutes, breakMinutes, currentTimeSec] = [25, 5, 1500];
let [inSession, inPause, inBreak, countdown]       = [false, false, false, 'interval'];

function setupButtonEvents() {
  document.querySelectorAll('.button').forEach(btn  => btn.addEventListener('click', buttonClicked));
  document.querySelectorAll('#control').forEach(btn => btn.addEventListener('click', buttonClicked));
}

function buttonClicked() {
  switch (this.dataset.key) {
    case 'session-plus':  sessionMinutes++; break;
    case 'session-minus': sessionMinutes--; break;
    case 'break-plus':    breakMinutes++;   break;
    case 'break-minus':   breakMinutes--;   break;
    case 'start':         start();          break;
    case 'restart':       reset();          break;
    case 'pause':         pause();          break;
  }
  updateUI();
}

function start() {
  if (inSession || inPause) { inPause = false; return }
  inSession = true;
  startTimer(sessionMinutes);
}

function reset(session = false) {
  [inBreak, inSession, inPause] = [false, session, false];
  currentTimeSec                = (sessionMinutes * 60);
  clearInterval(countdown);
}

function pause() {
  inPause = true;
}

function timeToString(time, clock) {
  if (clock) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes     = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    seconds     = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${seconds}`;
  } else {
    return (time < 10) ? `0${time}` : `${time}`;
  }
}

function updateUI() {
  sessionMinutes                 = (sessionMinutes < 1) ? 1 : sessionMinutes;
  breakMinutes                   = (breakMinutes < 1) ? 1 : breakMinutes;
  clock.innerText                = timeToString(currentTimeSec, true);
  sessionMinutesButton.innerText = timeToString(sessionMinutes, false);
  breakMinutesButton.innerText   = timeToString(breakMinutes, false);
}

function startTimer(startTime) {
  currentTimeSec = (startTime * 60);
  let start = Date.now();
  let finish = start + currentTimeSec * 1000;

  countdown = setInterval(() => {
    if (inPause) { finish += 1000; return }
    currentTimeSec = Math.round((finish - Date.now()) / 1000);

    if (currentTimeSec < 0) {
      reset(inSession);
      inSession = inSession ? false : true;
      decision ? startTimer(breakMinutes) : startTimer(sessionMinutes);
    }

    updateUI();
  }, 1000);
}
