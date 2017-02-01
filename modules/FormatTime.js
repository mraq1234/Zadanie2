function formatTime(timeInSec) {
    timeInSec = timeInSec.toFixed(0);
    var remainder = timeInSec % 3600;
    var hours = (timeInSec - remainder) / 3600;
    var seconds = Math.round(remainder % 60);
    var minutes = (remainder - seconds) / 60;
    var timeFormatedStr = '';

    if (hours !== 0) {
        timeFormatedStr += hours + ' godz. ';
    }

    if (minutes !== 0) {
        timeFormatedStr += minutes + ' min. ';
    }

    if (seconds !== 0) {
        timeFormatedStr += seconds + ' sek.';
    }

    return timeFormatedStr;
}

exports.format = formatTime;