function formatTime(czas) {
    czas = czas.toFixed(0);
    var resztaSekund = czas % 3600;
    var hours = (czas - resztaSekund) / 3600;
    var seconds = Math.round(resztaSekund % 60);
    var minutes = (resztaSekund - seconds) / 60;
    var sformatowanyCzas = '';

    // jak nie ma godzin albo minut albo sekund to nie wyświetlam
    if (hours !== 0) {
        sformatowanyCzas += hours + ' godz. ';
    }

    if (minutes !== 0) {
        sformatowanyCzas += minutes + ' min. ';
    }

    if (seconds !== 0) {
        sformatowanyCzas += seconds + ' sek.';
    }

    return sformatowanyCzas;
}

exports.format = formatTime;