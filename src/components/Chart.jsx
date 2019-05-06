import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import formatSeries from '../utils/formatSeries';

class Chart extends React.Component {
    render() {
        const {
            S, ST, SH,
            T, TT, TH,
            U, UT, UH,
            V, VT, VH,
            W, WT, WH,
            X, XT, XH,
            mobile
        } = this.props;

        const series = [
            ...formatSeries(S, ST, SH, 'Chambre parents', '#f44336', '#b71c1c'),
            ...formatSeries(T, TT, TH, 'Entrée', '#e91e63', '#880e4f'),
            ...formatSeries(U, UT, UH, 'Chambre Arthur', '#2196f3', '#0d47a1'),
            ...formatSeries(V, VT, VH, 'Extérieur', '#009688', '#004d40'),
            ...formatSeries(W, WT, WH, 'Cave', '#cddc39', '#827717'),
            ...formatSeries(X, XT, XH, 'Sous-sol', '#795548', '#3e2723')
        ].filter(value => Object.keys(value).length !== 0);

        const options = {
            chart: {
                type: 'spline',
                zoomType: 'xy'
            },
            plotOptions: {
                series: {
                    turboThreshold: 0
                }
            },
            tooltip: {
                split: true,
                hideDelay: 0
            },
            title: {
                text: 'Garches'
            },
            series: series,
            xAxis: {
                type: 'datetime'
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