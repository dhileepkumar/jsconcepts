/* clock class using class decleration in es6 */
class Clock {
    constructor(_date = new Date()) {
        this.currentdate_time = _date;
        this.final_timer = '';
        this.year = "";
        this.month = "";
        this.date = "";
        this.hours = "";
        this.mins = "";
        this.seconds = "";
    }

    /* method to initiallize date */
    initializeDate(_date = this.currentdate_time) {
        this.year = _date.getFullYear();
        this.month = _date.getMonth();
        this.date = _date.getDate();
        this.hours = _date.getHours();
        this.mins = _date.getMinutes();
        this.seconds = _date.getSeconds();
        return [this.year, this.month, this.date, this.hours, this.mins, this.seconds];
    }

    /* method to change currentdate_time variable */
    changeTocurrentTime(_date = this.currentdate_time) {
        this.currentdate_time = _date;
    }

    /* method to display timer */
    displayTimer() {
        this.final_timer = `${this.year}-${this.month}-${this.date} Time : ${this.hours}:${this.mins}:${this.seconds}`;
    }

}

class Myclock extends Clock {
    constructor(final_timer) {
        super(final_timer);

        this.presentTime = _date => {
            this.displayTimer = super.initializeDate(_date);
        };

        this.addtohtml = clock => {
            document.getElementById('demo').textContent = clock;
        };

        this.getTimer = () => {
            this.displayTimer = super.changeTocurrentTime(new Date());
            this.presentTime();
            super.displayTimer();
            this.addtohtml(this.final_timer);
        };

        this.setTime = () => {
            return setInterval(this.getTimer, 1000);
        };

        this.clearTime = _time_interval => {
            console.log('123');return clearInterval(_time_interval);
        };

        this.displayTimer = '';
    }

    get displayPresentTimer() {
        super.displayTimer();
    }
}

export default {
    Clock: Clock,
    Myclock: Myclock
};

let _current_time = new Myclock();
var _time_interval = _current_time.setTime();
console.log('_time_interval', _time_interval);
//setTimeout(()=>{_current_time.clearTime(_time_interval)},3000);