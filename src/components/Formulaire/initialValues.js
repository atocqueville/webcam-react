export default function() {
    const form = localStorage.getItem('form');

    if (form && form !== 'undefined') {
        return JSON.parse(form);
    } else {
        return {
            ST: false,
            SH: false,
            TT: true,
            TH: false,
            UT: false,
            UH: false,
            VT: true,
            VH: false,
            WT: false,
            WH: false,
            XT: false,
            XH: false
        };
    }
}