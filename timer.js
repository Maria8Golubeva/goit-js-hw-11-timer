class CountdownTimer  {
  constructor({ selector, targetDate}) {
      this.selector = selector,
      this.targetDate = targetDate      
  }

  updateTimer() {
    const refs = {
      days: document.querySelector(`${this.selector} span[data-value="days"]`),
      hours: document.querySelector(`${this.selector} span[data-value="hours"]`),
      mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      secs: document.querySelector(`${this.selector} span[data-value="secs"]`)
    };

    const time = this.targetDate - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;

  }
  
  start() {
    const updateTimerBinder = this.updateTimer.bind(this);
     setInterval(updateTimerBinder, 1000)
  }

};


const taskTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
});

taskTimer.start();