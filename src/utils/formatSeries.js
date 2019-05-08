export default function (data, showT, showH, location, colorT, colorH) {
    let tempSerie = { }, hygroSerie = { };

    if (data && (showT || showH)) {
        if (showT) tempSerie = { data: [], name: `Température ${location}`, color: colorT, yAxis: 0, id: location + colorT, states: {
            inactive: {
                opacity: 1
            }
        } };
        if (showH) hygroSerie = { data: [], name: `Hygrométrie ${location}`, color: colorH, yAxis: 1, id: location + colorH, states: {
            inactive: {
                opacity: 1
            }
        } };

        data.forEach(point => {
            if (showT) tempSerie.data.push({
                x: point.date,
                y: point.y1
            });
            if (showH) hygroSerie.data.push({
                x: point.date,
                y: point.y2
            });
        });
    } else {
        return [];
    }

    return [ tempSerie, hygroSerie ];
}