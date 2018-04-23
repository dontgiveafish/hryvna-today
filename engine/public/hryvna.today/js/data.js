var day = "15";
var month = "12";
var year = "2017";       
var start_date = "2017-12-15";
var current_currency = 840;
var currency_delta = 'week';

var datas_tank = {

    'week' : {
                    840 : {
                tank : [
                                            27.12,
                                            27.12,
                                            27.13,
                                            27.13,
                                            27.13,
                                            27.15,
                                            27.22,
                                            27.36,
                                            27.51,
                                            27.53,
                                    ],
                story : "За останній тиждень <strong>гривня впала в ціні</strong> і сьогодні один Ð´Ð¾Ð»Ð°Ñ€ коштує приблизно 27.53&nbsp;гривень. Середнє коливання за десять днів – <span style='white-space:nowrap;'>плюс 4 копійки</span> у проміжку від 27.12 до 27.53&nbsp;гривень за Ð´Ð¾Ð»Ð°Ñ€."
            },
                    978 : {
                tank : [
                                            32.06,
                                            32.00,
                                            31.91,
                                            31.92,
                                            31.92,
                                            31.98,
                                            32.04,
                                            32.14,
                                            32.41,
                                            32.44,
                                    ],
                story : "За останній тиждень <strong>гривня впала в ціні</strong> і сьогодні один Ñ”Ð²Ñ€Ð¾ коштує приблизно 32.44&nbsp;гривень. Середнє коливання за десять днів – <span style='white-space:nowrap;'>плюс 4 копійки</span> у проміжку від 31.91 до 32.44&nbsp;гривень за Ñ”Ð²Ñ€Ð¾."
            },
            },
    'month' : {
                    840 : {
                tank : [
                                            26.60,
                                            26.59,
                                            26.82,
                                            26.82,
                                            27.03,
                                            27.05,
                                            27.12,
                                            27.13,
                                            27.22,
                                            27.53,
                                    ],
                story : "За останній місяць <strong>гривня впала в ціні</strong>. Середнє коливання за тридцять днів – <span style='white-space:nowrap;'>плюс 3 копійки</span> у проміжку від 26.59 до 27.53&nbsp;гривень за Ð´Ð¾Ð»Ð°Ñ€. Мінімум було досягнуто 21 November, а максимум – 15 December."
            },
                    978 : {
                tank : [
                                            31.35,
                                            31.26,
                                            31.72,
                                            31.86,
                                            32.01,
                                            32.08,
                                            32.06,
                                            31.92,
                                            32.04,
                                            32.44,
                                    ],
                story : "За останній місяць <strong>гривня впала в ціні</strong>. Середнє коливання за тридцять днів – <span style='white-space:nowrap;'>плюс 4 копійки</span> у проміжку від 31.26 до 32.44&nbsp;гривень за Ñ”Ð²Ñ€Ð¾. Мінімум було досягнуто 21 November, а максимум – 15 December."
            },
            },
    'kvartal' : {
                    840 : {
                tank : [
                                            26.24,
                                            26.89,
                                            26.71,
                                            26.60,
                                            26.80,
                                            26.70,
                                            26.60,
                                            26.82,
                                            27.12,
                                            27.53,
                                    ],
                story : "За останній квартал <strong>гривня впала в ціні</strong>. Середнє коливання за дев'яносто днів – <span style='white-space:nowrap;'>плюс копійку</span> у проміжку від 26.16 до 27.53&nbsp;гривень за Ð´Ð¾Ð»Ð°Ñ€. Мінімум було досягнуто 20 September, а максимум – 15 December."
            },
                    978 : {
                tank : [
                                            31.26,
                                            31.58,
                                            31.61,
                                            31.40,
                                            31.19,
                                            31.01,
                                            31.35,
                                            31.86,
                                            32.06,
                                            32.44,
                                    ],
                story : "За останній квартал <strong>гривня впала в ціні</strong>. Середнє коливання за дев'яносто днів – <span style='white-space:nowrap;'>плюс копійку</span> у проміжку від 31.01 до 32.44&nbsp;гривень за Ñ”Ð²Ñ€Ð¾. Мінімум було досягнуто 09 November, а максимум – 15 December."
            },
            },
    'halfyear' : {
                    840 : {
                tank : [
                                            26.01,
                                            25.87,
                                            25.71,
                                            25.53,
                                            26.18,
                                            26.89,
                                            26.60,
                                            26.70,
                                            26.82,
                                            27.53,
                                    ],
                story : "За останні півроку <strong>гривня впала в ціні</strong>. Середнє коливання за сто вісімдесят днів – <span style='white-space:nowrap;'>плюс копійку</span> у проміжку від 25.50 до 27.53&nbsp;гривень за Ð´Ð¾Ð»Ð°Ñ€. Мінімум було досягнуто 22 August, а максимум – 15 December."
            },
                    978 : {
                tank : [
                                            29.46,
                                            30.04,
                                            30.16,
                                            30.41,
                                            31.16,
                                            31.58,
                                            31.40,
                                            31.01,
                                            31.86,
                                            32.44,
                                    ],
                story : "За останні півроку <strong>гривня впала в ціні</strong>. Середнє коливання за сто вісімдесят днів – <span style='white-space:nowrap;'>плюс 2 копійки</span> у проміжку від 28.99 до 32.44&nbsp;гривень за Ñ”Ð²Ñ€Ð¾. Мінімум було досягнуто 21 June, а максимум – 15 December."
            },
            },
    'year' : {
                    840 : {
                tank : [
                                            27.70,
                                            27.13,
                                            26.95,
                                            26.37,
                                            25.97,
                                            25.87,
                                            25.53,
                                            26.89,
                                            26.70,
                                            27.53,
                                    ],
                story : "За останній рік <strong>гривня впала в ціні</strong>. Середнє коливання за триста шістдесят днів – <span style='white-space:nowrap;'>плюс 0 копійок</span> у проміжку від 25.50 до 28.33&nbsp;гривень за Ð´Ð¾Ð»Ð°Ñ€. Мінімум було досягнуто 22 August, а максимум – 16 January."
            },
                    978 : {
                tank : [
                                            29.63,
                                            28.58,
                                            28.71,
                                            28.70,
                                            29.01,
                                            30.04,
                                            30.41,
                                            31.58,
                                            31.01,
                                            32.44,
                                    ],
                story : "За останній рік <strong>гривня впала в ціні</strong>. Середнє коливання за триста шістдесят днів – <span style='white-space:nowrap;'>плюс копійку</span> у проміжку від 27.96 до 32.44&nbsp;гривень за Ñ”Ð²Ñ€Ð¾. Мінімум було досягнуто 25 December, а максимум – 15 December."
            },
            },

};

var arrayBanks = [
                {
            id: 1,
            name: "ÐÐ°Ñ†Ñ–Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¸Ð¹ Ð±Ð°Ð½Ðº Ð£ÐºÑ€Ð°Ñ—Ð½Ð¸",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.16,
                                                                    978 : 32.18,
                                                            },
                            currencySale: {
                                                                    840 : 27.16,
                                                                    978 : 32.18,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.06,
                                                                    978 : -0.11,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.06,
                                                                    978 : -0.11,
                                                            },
                            barLeft: {
                                                                    840 : 81.48,
                                                                    978 : 96.54,
                                                            },
                            barRight: {
                                                                    840 : 81.48,
                                                                    978 : 96.54,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.11,
                                                                    978 : 32.03,
                                                            },
                            currencySale: {
                                                                    840 : 27.11,
                                                                    978 : 32.03,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.05,
                                                                    978 : -0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.05,
                                                                    978 : -0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.33,
                                                                    978 : 96.09,
                                                            },
                            barRight: {
                                                                    840 : 81.33,
                                                                    978 : 96.09,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.07,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.07,
                                                            },
                            barLeft: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.96,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.88,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.11,
                                                                    978 : 31.83,
                                                            },
                            currencySale: {
                                                                    840 : 27.11,
                                                                    978 : 31.83,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.01,
                                                                    978 : -0.13,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.01,
                                                                    978 : -0.13,
                                                            },
                            barLeft: {
                                                                    840 : 81.33,
                                                                    978 : 95.49,
                                                            },
                            barRight: {
                                                                    840 : 81.33,
                                                                    978 : 95.49,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.14,
                                                                    978 : 32.01,
                                                            },
                            currencySale: {
                                                                    840 : 27.14,
                                                                    978 : 32.01,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.18,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.18,
                                                            },
                            barLeft: {
                                                                    840 : 81.42,
                                                                    978 : 96.03,
                                                            },
                            barRight: {
                                                                    840 : 81.42,
                                                                    978 : 96.03,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.18,
                                                                    978 : 31.98,
                                                            },
                            currencySale: {
                                                                    840 : 27.18,
                                                                    978 : 31.98,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.04,
                                                                    978 : -0.03,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.04,
                                                                    978 : -0.03,
                                                            },
                            barLeft: {
                                                                    840 : 81.54,
                                                                    978 : 95.94,
                                                            },
                            barRight: {
                                                                    840 : 81.54,
                                                                    978 : 95.94,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.27,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.00,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.09,
                                                                    978 : 0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.09,
                                                                    978 : 0.02,
                                                            },
                            barLeft: {
                                                                    840 : 81.81,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.41,
                                                                    978 : 32.47,
                                                            },
                            currencySale: {
                                                                    840 : 27.41,
                                                                    978 : 32.47,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.14,
                                                                    978 : 0.47,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.14,
                                                                    978 : 0.47,
                                                            },
                            barLeft: {
                                                                    840 : 82.23,
                                                                    978 : 97.41,
                                                            },
                            barRight: {
                                                                    840 : 82.23,
                                                                    978 : 97.41,
                                                            },
                    },
                                                    ]

	},
                {
            id: 3,
            name: "ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð‘Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.15,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.45,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.30,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.85,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 83.55,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.85,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 83.55,
                                                                    978 : 97.5,
                                                            },
                    },
                                                    ]

	},
                {
            id: 2,
            name: "Ð Ð°Ð¹Ñ„Ñ„Ð°Ð¹Ð·ÐµÐ½ Ð‘Ð°Ð½Ðº ÐÐ²Ð°Ð»ÑŒ",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 26.95,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.85,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.35,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 82.05,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.15,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.60,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.45,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 82.8,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.20,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.70,
                                                                    978 : 32.80,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.45,
                                                            },
                            barLeft: {
                                                                    840 : 81.6,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 83.1,
                                                                    978 : 98.4,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.20,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.70,
                                                                    978 : 32.80,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.6,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 83.1,
                                                                    978 : 98.4,
                                                            },
                    },
                                                    ]

	},
                {
            id: 17,
            name: "ÐœÑ–Ð¶Ð±Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.95,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.97,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.01,
                                                                    978 : -0.12,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.14,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.85,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.91,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.97,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.99,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.02,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.91,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.97,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.82,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.17,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.17,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.46,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.87,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.61,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.12,
                                                                    978 : 31.87,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.36,
                                                                    978 : 95.61,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.97,
                                                            },
                            currencySale: {
                                                                    840 : 27.13,
                                                                    978 : 31.99,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.12,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.01,
                                                                    978 : 0.12,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.91,
                                                            },
                            barRight: {
                                                                    840 : 81.39,
                                                                    978 : 95.97,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.17,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.19,
                                                                    978 : 31.92,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.07,
                                                                    978 : -0.07,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.06,
                                                                    978 : -0.07,
                                                            },
                            barLeft: {
                                                                    840 : 81.51,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.57,
                                                                    978 : 95.76,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.27,
                                                                    978 : 32.04,
                                                            },
                            currencySale: {
                                                                    840 : 27.29,
                                                                    978 : 32.06,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.14,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.14,
                                                            },
                            barLeft: {
                                                                    840 : 81.81,
                                                                    978 : 96.12,
                                                            },
                            barRight: {
                                                                    840 : 81.87,
                                                                    978 : 96.18,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.43,
                                                                    978 : 32.37,
                                                            },
                            currencySale: {
                                                                    840 : 27.46,
                                                                    978 : 32.41,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.16,
                                                                    978 : 0.33,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.17,
                                                                    978 : 0.35,
                                                            },
                            barLeft: {
                                                                    840 : 82.29,
                                                                    978 : 97.11,
                                                            },
                            barRight: {
                                                                    840 : 82.38,
                                                                    978 : 97.23,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.43,
                                                                    978 : 32.37,
                                                            },
                            currencySale: {
                                                                    840 : 27.46,
                                                                    978 : 32.41,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.29,
                                                                    978 : 97.11,
                                                            },
                            barRight: {
                                                                    840 : 82.38,
                                                                    978 : 97.23,
                                                            },
                    },
                                                    ]

	},
                {
            id: 16,
            name: "Ð§Ð¾Ñ€Ð½Ð¸Ð¹ Ñ€Ð¸Ð½Ð¾Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.16,
                                                                    978 : 32.09,
                                                            },
                            currencySale: {
                                                                    840 : 27.20,
                                                                    978 : 32.17,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.06,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.07,
                                                            },
                            barLeft: {
                                                                    840 : 81.48,
                                                                    978 : 96.27,
                                                            },
                            barRight: {
                                                                    840 : 81.6,
                                                                    978 : 96.51,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.19,
                                                                    978 : 32.10,
                                                            },
                            currencySale: {
                                                                    840 : 27.24,
                                                                    978 : 32.18,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.01,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.04,
                                                                    978 : 0.01,
                                                            },
                            barLeft: {
                                                                    840 : 81.57,
                                                                    978 : 96.3,
                                                            },
                            barRight: {
                                                                    840 : 81.72,
                                                                    978 : 96.54,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.21,
                                                                    978 : 32.03,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.12,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.07,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.06,
                                                            },
                            barLeft: {
                                                                    840 : 81.63,
                                                                    978 : 96.09,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.36,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.22,
                                                                    978 : 32.04,
                                                            },
                            currencySale: {
                                                                    840 : 27.26,
                                                                    978 : 32.11,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.01,
                                                                    978 : 0.01,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.01,
                                                            },
                            barLeft: {
                                                                    840 : 81.66,
                                                                    978 : 96.12,
                                                            },
                            barRight: {
                                                                    840 : 81.78,
                                                                    978 : 96.33,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.23,
                                                                    978 : 32.05,
                                                            },
                            currencySale: {
                                                                    840 : 27.29,
                                                                    978 : 32.13,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.01,
                                                                    978 : 0.01,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.02,
                                                            },
                            barLeft: {
                                                                    840 : 81.69,
                                                                    978 : 96.15,
                                                            },
                            barRight: {
                                                                    840 : 81.87,
                                                                    978 : 96.39,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.26,
                                                                    978 : 32.15,
                                                            },
                            currencySale: {
                                                                    840 : 27.31,
                                                                    978 : 32.23,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.02,
                                                                    978 : 0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.78,
                                                                    978 : 96.45,
                                                            },
                            barRight: {
                                                                    840 : 81.93,
                                                                    978 : 96.69,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.38,
                                                                    978 : 32.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.46,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.12,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.07,
                                                            },
                            barLeft: {
                                                                    840 : 82.14,
                                                                    978 : 96.6,
                                                            },
                            barRight: {
                                                                    840 : 82.38,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.54,
                                                                    978 : 32.37,
                                                            },
                            currencySale: {
                                                                    840 : 27.64,
                                                                    978 : 32.49,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.16,
                                                                    978 : 0.17,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.18,
                                                                    978 : 0.19,
                                                            },
                            barLeft: {
                                                                    840 : 82.62,
                                                                    978 : 97.11,
                                                            },
                            barRight: {
                                                                    840 : 82.92,
                                                                    978 : 97.47,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.79,
                                                                    978 : 32.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.89,
                                                                    978 : 32.86,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.33,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.37,
                                                            },
                            barLeft: {
                                                                    840 : 83.37,
                                                                    978 : 98.1,
                                                            },
                            barRight: {
                                                                    840 : 83.67,
                                                                    978 : 98.58,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.77,
                                                                    978 : 32.68,
                                                            },
                            currencySale: {
                                                                    840 : 27.89,
                                                                    978 : 32.86,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 83.31,
                                                                    978 : 98.04,
                                                            },
                            barRight: {
                                                                    840 : 83.67,
                                                                    978 : 98.58,
                                                            },
                    },
                                                    ]

	},
                {
            id: 4,
            name: "ÐšÑ€ÐµÐ´Ð¸Ñ‚ Ð”Ð½Ñ–Ð¿Ñ€Ð¾",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.05,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.03,
                                                                    978 : -0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.12,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.32,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.36,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.96,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.20,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.40,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.08,
                                                                    978 : 0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.08,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.6,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 97.2,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.35,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.60,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.20,
                                                            },
                            barLeft: {
                                                                    840 : 82.05,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.8,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.45,
                                                                    978 : 32.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.80,
                                                                    978 : 33.00,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.25,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.40,
                                                            },
                            barLeft: {
                                                                    840 : 82.35,
                                                                    978 : 96.75,
                                                            },
                            barRight: {
                                                                    840 : 83.4,
                                                                    978 : 99,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.45,
                                                                    978 : 32.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.80,
                                                                    978 : 33.00,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.35,
                                                                    978 : 96.75,
                                                            },
                            barRight: {
                                                                    840 : 83.4,
                                                                    978 : 99,
                                                            },
                    },
                                                    ]

	},
                {
            id: 5,
            name: "ÐžÑ‰Ð°Ð´Ð±Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 30.95,
                                                            },
                            currencySale: {
                                                                    840 : 27.22,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.05,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 92.85,
                                                            },
                            barRight: {
                                                                    840 : 81.66,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.22,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93,
                                                            },
                            barRight: {
                                                                    840 : 81.66,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 93,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 93,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 93,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.22,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.02,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 93,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.66,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.18,
                                                            },
                            currencySale: {
                                                                    840 : 27.32,
                                                                    978 : 32.28,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.18,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.07,
                                                                    978 : 0.06,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 93.54,
                                                            },
                            barRight: {
                                                                    840 : 81.96,
                                                                    978 : 96.84,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.28,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.08,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 93.6,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.84,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.45,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.45,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.25,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.17,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 94.35,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.35,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.45,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.45,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 94.35,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.35,
                                                            },
                    },
                                                    ]

	},
                {
            id: 6,
            name: "ÐšÑ€ÐµÐ´Ñ– ÐÐ³Ñ€Ñ–ÐºÐ¾Ð»ÑŒ Ð‘Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.28,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.10,
                                                                    978 : -0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.07,
                                                                    978 : -0.25,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 81.84,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.03,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.10,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.3,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.15,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.45,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 31.95,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 95.85,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.80,
                                                                    978 : 32.90,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.30,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.40,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96.75,
                                                            },
                            barRight: {
                                                                    840 : 83.4,
                                                                    978 : 98.7,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.80,
                                                                    978 : 32.90,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96.75,
                                                            },
                            barRight: {
                                                                    840 : 83.4,
                                                                    978 : 98.7,
                                                            },
                    },
                                                    ]

	},
                {
            id: 7,
            name: "Ð£ÐºÑ€Ð¡Ð¸Ð±Ð±Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.60,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.01,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.05,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.8,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.55,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.65,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.60,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 94.8,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.55,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 97.65,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.55,
                                                                    978 : 32.70,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.65,
                                                                    978 : 98.1,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.35,
                                                                    978 : 32.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.75,
                                                                    978 : 32.98,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.28,
                                                            },
                            barLeft: {
                                                                    840 : 82.05,
                                                                    978 : 96.6,
                                                            },
                            barRight: {
                                                                    840 : 83.25,
                                                                    978 : 98.94,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.35,
                                                                    978 : 32.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.75,
                                                                    978 : 32.98,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.05,
                                                                    978 : 96.6,
                                                            },
                            barRight: {
                                                                    840 : 83.25,
                                                                    978 : 98.94,
                                                            },
                    },
                                                    ]

	},
                {
            id: 8,
            name: "ÐšÑ€ÐµÐ´Ð¾Ð±Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 26.85,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.55,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.9,
                                                            },
                    },
                                                    ]

	},
                {
            id: 9,
            name: "Ð£ÐºÑ€ÐµÐºÑÑ–Ð¼Ð±Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.50,
                                                            },
                            currencySale: {
                                                                    840 : 27.21,
                                                                    978 : 32.44,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.06,
                                                                    978 : -0.07,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 94.5,
                                                            },
                            barRight: {
                                                                    840 : 81.63,
                                                                    978 : 97.32,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.30,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.31,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.04,
                                                                    978 : -0.13,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.9,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.93,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.22,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.09,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.75,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.66,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.22,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.75,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.66,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.25,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.22,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.75,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.66,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.30,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.29,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.07,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.9,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.87,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.32,
                                                            },
                            currencySale: {
                                                                    840 : 27.29,
                                                                    978 : 32.26,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.04,
                                                                    978 : -0.03,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 93.96,
                                                            },
                            barRight: {
                                                                    840 : 81.87,
                                                                    978 : 96.78,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.51,
                                                            },
                            currencySale: {
                                                                    840 : 27.45,
                                                                    978 : 32.45,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.19,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.16,
                                                                    978 : 0.19,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 94.53,
                                                            },
                            barRight: {
                                                                    840 : 82.35,
                                                                    978 : 97.35,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.82,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.29,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.37,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 98.46,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.82,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 98.46,
                                                            },
                    },
                                                    ]

	},
                {
            id: 10,
            name: "ÐžÐ¢ÐŸ Ð‘Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.40,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.03,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.03,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.2,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.65,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.15,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.15,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.95,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.45,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.65,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.15,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.95,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.45,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.65,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.15,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 94.95,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.45,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.07,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.21,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.03,
                                                                    978 : 0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.50,
                                                                    978 : 32.40,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.5,
                                                                    978 : 97.2,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.80,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.30,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.40,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 98.4,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.10,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.80,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96.3,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 98.4,
                                                            },
                    },
                                                    ]

	},
                {
            id: 11,
            name: "Ð†Ð´ÐµÑ Ð‘Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.70,
                                                            },
                            currencySale: {
                                                                    840 : 27.45,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.1,
                                                            },
                            barRight: {
                                                                    840 : 82.35,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.65,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.30,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.95,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.80,
                                                                    978 : 32.90,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.40,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96.6,
                                                            },
                            barRight: {
                                                                    840 : 83.4,
                                                                    978 : 98.7,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.40,
                                                                    978 : 32.20,
                                                            },
                            currencySale: {
                                                                    840 : 27.95,
                                                                    978 : 32.90,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.2,
                                                                    978 : 96.6,
                                                            },
                            barRight: {
                                                                    840 : 83.85,
                                                                    978 : 98.7,
                                                            },
                    },
                                                    ]

	},
                {
            id: 12,
            name: "ÐŸÑ€Ð¾ÐšÑ€ÐµÐ´Ð¸Ñ‚ Ð‘Ð°Ð½Ðº",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.67,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.37,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.03,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.03,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 95.01,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 97.11,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 26.88,
                                                                    978 : 31.56,
                                                            },
                            currencySale: {
                                                                    840 : 27.23,
                                                                    978 : 32.26,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.11,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.02,
                                                                    978 : -0.11,
                                                            },
                            barLeft: {
                                                                    840 : 80.64,
                                                                    978 : 94.68,
                                                            },
                            barRight: {
                                                                    840 : 81.69,
                                                                    978 : 96.78,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.58,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.28,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.02,
                                                                    978 : 0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.02,
                                                                    978 : 0.02,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 94.74,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.84,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.58,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.28,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 94.74,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.84,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 26.90,
                                                                    978 : 31.58,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.28,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 80.7,
                                                                    978 : 94.74,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.84,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 26.92,
                                                                    978 : 31.53,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.22,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.02,
                                                                    978 : -0.06,
                                                            },
                            barLeft: {
                                                                    840 : 80.76,
                                                                    978 : 94.59,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.66,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 26.92,
                                                                    978 : 31.59,
                                                            },
                            currencySale: {
                                                                    840 : 27.27,
                                                                    978 : 32.29,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.06,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.07,
                                                            },
                            barLeft: {
                                                                    840 : 80.76,
                                                                    978 : 94.77,
                                                            },
                            barRight: {
                                                                    840 : 81.81,
                                                                    978 : 96.87,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.62,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.32,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.13,
                                                                    978 : 0.03,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.13,
                                                                    978 : 0.03,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 94.86,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.96,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.88,
                                                            },
                            currencySale: {
                                                                    840 : 27.60,
                                                                    978 : 32.58,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.26,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.26,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 95.64,
                                                            },
                            barRight: {
                                                                    840 : 82.8,
                                                                    978 : 97.74,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.25,
                                                                    978 : 31.88,
                                                            },
                            currencySale: {
                                                                    840 : 27.60,
                                                                    978 : 32.58,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.75,
                                                                    978 : 95.64,
                                                            },
                            barRight: {
                                                                    840 : 82.8,
                                                                    978 : 97.74,
                                                            },
                    },
                                                    ]

	},
                {
            id: 13,
            name: "ÐŸÐ£ÐœÐ‘",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.30,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 81.9,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.80,
                                                            },
                            currencySale: {
                                                                    840 : 27.40,
                                                                    978 : 32.30,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.4,
                                                            },
                            barRight: {
                                                                    840 : 82.2,
                                                                    978 : 96.9,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.20,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.60,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.6,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.8,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.70,
                                                                    978 : 32.50,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 83.1,
                                                                    978 : 97.5,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.50,
                                                                    978 : 32.40,
                                                            },
                            currencySale: {
                                                                    840 : 27.95,
                                                                    978 : 33.00,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.40,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.25,
                                                                    978 : 0.50,
                                                            },
                            barLeft: {
                                                                    840 : 82.5,
                                                                    978 : 97.2,
                                                            },
                            barRight: {
                                                                    840 : 83.85,
                                                                    978 : 99,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.50,
                                                                    978 : 32.40,
                                                            },
                            currencySale: {
                                                                    840 : 27.95,
                                                                    978 : 33.00,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.5,
                                                                    978 : 97.2,
                                                            },
                            barRight: {
                                                                    840 : 83.85,
                                                                    978 : 99,
                                                            },
                    },
                                                    ]

	},
                {
            id: 14,
            name: "Ð‘Ð°Ð½Ðº ÐŸÑ–Ð²Ð´ÐµÐ½Ð½Ð¸Ð¹",
            time: "15:00",
            date: [
                                                            {
                            dateCurrent: "2017-12-06",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.20,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : -0.01,
                                                                    978 : -0.25,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-07",
                            currencyBuy: {
                                                                    840 : 27.00,
                                                                    978 : 31.85,
                                                            },
                            currencySale: {
                                                                    840 : 27.15,
                                                                    978 : 32.15,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.05,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81,
                                                                    978 : 95.55,
                                                            },
                            barRight: {
                                                                    840 : 81.45,
                                                                    978 : 96.45,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-08",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.16,
                                                                    978 : 32.05,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : -0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.01,
                                                                    978 : -0.10,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.48,
                                                                    978 : 96.15,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-09",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.16,
                                                                    978 : 32.05,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.48,
                                                                    978 : 96.15,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-10",
                            currencyBuy: {
                                                                    840 : 27.05,
                                                                    978 : 31.75,
                                                            },
                            currencySale: {
                                                                    840 : 27.16,
                                                                    978 : 32.05,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 81.15,
                                                                    978 : 95.25,
                                                            },
                            barRight: {
                                                                    840 : 81.48,
                                                                    978 : 96.15,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-11",
                            currencyBuy: {
                                                                    840 : 27.10,
                                                                    978 : 31.92,
                                                            },
                            currencySale: {
                                                                    840 : 27.25,
                                                                    978 : 32.25,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.05,
                                                                    978 : 0.17,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.09,
                                                                    978 : 0.20,
                                                            },
                            barLeft: {
                                                                    840 : 81.3,
                                                                    978 : 95.76,
                                                            },
                            barRight: {
                                                                    840 : 81.75,
                                                                    978 : 96.75,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-12",
                            currencyBuy: {
                                                                    840 : 27.20,
                                                                    978 : 31.90,
                                                            },
                            currencySale: {
                                                                    840 : 27.33,
                                                                    978 : 32.20,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : -0.02,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.08,
                                                                    978 : -0.05,
                                                            },
                            barLeft: {
                                                                    840 : 81.6,
                                                                    978 : 95.7,
                                                            },
                            barRight: {
                                                                    840 : 81.99,
                                                                    978 : 96.6,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-13",
                            currencyBuy: {
                                                                    840 : 27.30,
                                                                    978 : 32.00,
                                                            },
                            currencySale: {
                                                                    840 : 27.60,
                                                                    978 : 32.35,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.10,
                                                                    978 : 0.10,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.27,
                                                                    978 : 0.15,
                                                            },
                            barLeft: {
                                                                    840 : 81.9,
                                                                    978 : 96,
                                                            },
                            barRight: {
                                                                    840 : 82.8,
                                                                    978 : 97.05,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-14",
                            currencyBuy: {
                                                                    840 : 27.50,
                                                                    978 : 32.39,
                                                            },
                            currencySale: {
                                                                    840 : 27.75,
                                                                    978 : 32.85,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.20,
                                                                    978 : 0.39,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.15,
                                                                    978 : 0.50,
                                                            },
                            barLeft: {
                                                                    840 : 82.5,
                                                                    978 : 97.17,
                                                            },
                            barRight: {
                                                                    840 : 83.25,
                                                                    978 : 98.55,
                                                            },
                    },
                                                                                {
                            dateCurrent: "2017-12-15",
                            currencyBuy: {
                                                                    840 : 27.50,
                                                                    978 : 32.39,
                                                            },
                            currencySale: {
                                                                    840 : 27.75,
                                                                    978 : 32.85,
                                                            },
                            currencyBuyIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            currencySaleIncrement: {
                                                                    840 : 0.00,
                                                                    978 : 0.00,
                                                            },
                            barLeft: {
                                                                    840 : 82.5,
                                                                    978 : 97.17,
                                                            },
                            barRight: {
                                                                    840 : 83.25,
                                                                    978 : 98.55,
                                                            },
                    },
                                                    ]

	},
        
];