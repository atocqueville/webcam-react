import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import formatSeries from '../utils/formatSeries';

class Chart extends React.Component {
    static formatTooltip(tooltip, x = this.x, points = this.points) {
        let s = '<b>' + Highcharts.dateFormat('%e %B, %H:%M:%S', x) + '</b>';
        points[0].series.chart.series.forEach(series => {
            let closest = series.data.reduce((prev, curr) => {
                return (Math.abs(curr.x - x) < Math.abs(prev.x - x) ? curr : prev);
            });
            if (Math.abs(x - closest.x) < 1000 * 3600 * 5) {
                s += '<br/>' + series.name + ' <b>' + closest.y;
                s += series.yAxis.opposite ? ' %</b>' : ' °C</b>';
            }
        });

        return s;
    }

    render() {
        const { S, T, U, V, W, X, formValues, mobile } = this.props;

        const series = [
            ...formatSeries(S, formValues.ST, formValues.SH, 'Chambre parents', '#f44336', '#b71c1c'),
            ...formatSeries(T, formValues.TT, formValues.TH, 'Entrée', '#e91e63', '#880e4f'),
            ...formatSeries(U, formValues.UT, formValues.UH, 'Chambre Arthur', '#2196f3', '#0d47a1'),
            ...formatSeries(V, formValues.VT, formValues.VH, 'Extérieur', '#009688', '#004d40'),
            ...formatSeries(W, formValues.WT, formValues.WH, 'Cave', '#cddc39', '#827717'),
            ...formatSeries(X, formValues.XT, formValues.XH, 'Sous-sol', '#795548', '#3e2723')
        ].filter(value => Object.keys(value).length !== 0);

        const options = {
            chart: {
                type: 'spline',
                zoomType: 'xy'
            },
            plotOptions: {
                series: {
                    turboThreshold: 0,
                    findNearestPointBy: 'xy',
                    states: {
                        hover: false
                    }
                }
            },
            legend: {
                itemDistance: 0
            },
            tooltip: {
                shared: true,
                formatter: Chart.formatTooltip,
                followPointer: true,
                hideDelay: 0,
                positioner: function (labelWidth, labelHeight, point) {
                    return {
                        x: point.plotX - labelWidth / 2 + 20,
                        y: point.plotY - labelHeight / 2
                    };
                }
            },
            title: {
                text: 'Garches',
                style: { 'color': '#333333', 'fontSize': '15px' }
            },
            series: series,
            xAxis: {
                type: 'datetime',
                crosshair: true
            },
            yAxis: [{
                labels: { format: '{value}°C' },
                title: { text: mobile ? '' : 'Temperature' },
                allowDecimals: false
            }, {
                labels: { format: '{value}%' },
                title: { text: mobile ? '' : 'Hygrométrie' },
                opposite: true
            }],

        };

        return (
            <div style={{ width: '100%' }}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    containerProps={{ style: { width: '100%', height: '100%' } }}
                />
            </div>
        );
    }
}

export default Chart;