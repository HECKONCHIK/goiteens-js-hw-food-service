const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};


const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }


        const startTime = Date.now();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime;
            getTimeComponents(deltaTime);

            this.isActive = true;

        }, 1000)

    },
    stop() {
        clearInterval(this.intervalId);
        getTimeComponents(0);
        this.isActive = false;
    }
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
// timer.start()
// timer.stop()

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
  
function pad(value) {
    return String(value).padStart(2, '0');
}