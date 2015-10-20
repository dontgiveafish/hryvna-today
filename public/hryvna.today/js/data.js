var day = "27";
var month = "06";
var year = "2015";       
var start_date = "27062015";
var current_currency = 840;
var currency_delta = 'week';

var datas_tank = {

    'week' : {
            840 : {
                'tank' : [21.89, 21.71, 21.71, 21.71, 21.77, 21.79, 21.69, 21.58, 21.55, 21.54, ],
                'story' : "За останній тиждень <strong>гривня зміцнилась</strong> і сьогодні один долар коштує приблизно 21.54&nbsp;гривень. Середнє коливання за десять днів – <span style='white-space:nowrap;'>мінус 4 копійки</span> у проміжку від 21.54 до 21.89&nbsp;гривень за долар."

            },
            978 : {
                'tank' : [24.61, 24.49, 24.37, 24.37, 24.47, 24.41, 24.18, 24.05, 23.98, 23.98, ],
                'story' : "За останній тиждень <strong>гривня зміцнилась</strong> і сьогодні один євро коштує приблизно 23.98&nbsp;гривень. Середнє коливання за десять днів – <span style='white-space:nowrap;'>мінус 6 копійок</span> у проміжку від 23.98 до 24.61&nbsp;гривень за євро."
            }
    },
    'month' : {
            840 : {
                'tank' : [21.56, 21.52, 21.39, 21.44, 21.41, 21.46, 21.89, 21.71, 21.69, 21.54, ],
                'story' : "За останній місяць <strong>гривня зміцнилась</strong>. Середнє коливання за тридцять днів – <span style='white-space:nowrap;'>плюс 0 копійок</span> у проміжку від 21.35 до 22.04&nbsp;гривень за долар. Мінімум було досягнуто 08 червня, а максимум – 17 червня."

            },
            978 : {
                'tank' : [23.52, 23.64, 23.51, 23.82, 23.82, 23.81, 24.61, 24.37, 24.18, 23.98, ],
                'story' : "За останній місяць <strong>гривня впала в ціні</strong>. Середнє коливання за тридцять днів – <span style='white-space:nowrap;'>плюс 2 копійки</span> у проміжку від 23.98 до 23.52&nbsp;гривень за євро. Мінімум було досягнуто 27 червня, а максимум – 29 травня."
            }
    },
    'kvartal' : {
            840 : {
                'tank' : [24.35, 23.29, 22.87, 22.17, 21.94, 21.63, 21.56, 21.44, 21.89, 21.54, ],
                'story' : "За останній квартал <strong>гривня зміцнилась</strong>. Середнє коливання за дев'яносто днів – <span style='white-space:nowrap;'>мінус 4 копійки</span> у проміжку від 21.35 до 24.85&nbsp;гривень за долар. Мінімум було досягнуто 08 червня, а максимум – 30 березня."

            },
            978 : {
                'tank' : [26.48, 24.75, 24.50, 24.24, 24.35, 23.81, 23.52, 23.82, 24.61, 23.98, ],
                'story' : "За останній квартал <strong>гривня зміцнилась</strong>. Середнє коливання за дев'яносто днів – <span style='white-space:nowrap;'>мінус 3 копійки</span> у проміжку від 23.98 до 27.09&nbsp;гривень за євро. Мінімум було досягнуто 27 червня, а максимум – 30 березня."
            }
    },
    'halfyear' : {
            840 : {
                'tank' : [16.33, 16.74, 27.01, 24.33, 24.80, 23.29, 22.17, 21.63, 21.44, 21.54, ],
                'story' : "За останні півроку <strong>гривня впала в ціні</strong>. Середнє коливання за сто вісімдесят днів – <span style='white-space:nowrap;'>плюс 3 копійки</span> у проміжку від 15.80 до 31.02&nbsp;гривень за долар. Мінімум було досягнуто 26 січня, а максимум – 25 лютого."

            },
            978 : {
                'tank' : [19.31, 19.10, 30.74, 25.89, 27.09, 24.75, 24.24, 23.81, 23.82, 23.98, ],
                'story' : "За останні півроку <strong>гривня впала в ціні</strong>. Середнє коливання за сто вісімдесят днів – <span style='white-space:nowrap;'>плюс 2 копійки</span> у проміжку від 19.94 до 34.32&nbsp;гривень за євро. Мінімум було досягнуто 05 лютого, а максимум – 24 лютого."
            }
    },
    'year' : {
            840 : {
                'tank' : [12.34, 12.86, 12.93, 15.48, 16.31, 16.74, 24.33, 23.29, 21.63, 21.54, ],
                'story' : "За останній рік <strong>гривня впала в ціні</strong>. Середнє коливання за триста шістдесят днів – <span style='white-space:nowrap;'>плюс 3 копійки</span> у проміжку від 11.71 до 31.02&nbsp;гривень за долар. Мінімум було досягнуто 09 липня, а максимум – 25 лютого."

            },
            978 : {
                'tank' : [16.59, 17.34, 16.94, 19.41, 20.06, 19.10, 25.89, 24.75, 23.81, 23.98, ],
                'story' : "За останній рік <strong>гривня впала в ціні</strong>. Середнє коливання за триста шістдесят днів – <span style='white-space:nowrap;'>плюс 2 копійки</span> у проміжку від 19.94 до 34.32&nbsp;гривень за євро. Мінімум було досягнуто 05 лютого, а максимум – 24 лютого."
            }
    },

};

var arrayBanks = [
                {
            id: 1,
            name: "Національний банк України",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.65,
                                978 : 24.42,
                            }, 
                            currencySale: {
                                840 : 21.65,
                                978 : 24.42,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : -0.42,
                            },
                            currencySaleIncrement: {
                                840 : -0.50,
                                978 : -0.42,
                            },
                            barLeft: {
                                840 : 64.95072,
                                978 : 73.2579,
                            }, 
                            barRight: {
                                840 : 64.95072,
                                978 : 73.2579,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.33,
                                978 : 24.32,
                            }, 
                            currencySale: {
                                840 : 21.33,
                                978 : 24.32,
                            },
                            currencyBuyIncrement: {
                                840 : -0.32,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.32,
                                978 : -0.10,
                            },
                            barLeft: {
                                840 : 63.98745,
                                978 : 72.97131,
                            }, 
                            barRight: {
                                840 : 63.98745,
                                978 : 72.97131,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.33,
                                978 : 24.32,
                            }, 
                            currencySale: {
                                840 : 21.33,
                                978 : 24.32,
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
                                840 : 63.98745,
                                978 : 72.97131,
                            }, 
                            barRight: {
                                840 : 63.98745,
                                978 : 72.97131,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.33,
                                978 : 24.32,
                            }, 
                            currencySale: {
                                840 : 21.33,
                                978 : 24.32,
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
                                840 : 63.98745,
                                978 : 72.97131,
                            }, 
                            barRight: {
                                840 : 63.98745,
                                978 : 72.97131,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.64,
                                978 : 24.45,
                            }, 
                            currencySale: {
                                840 : 21.64,
                                978 : 24.45,
                            },
                            currencyBuyIncrement: {
                                840 : 0.31,
                                978 : 0.12,
                            },
                            currencySaleIncrement: {
                                840 : 0.31,
                                978 : 0.12,
                            },
                            barLeft: {
                                840 : 64.90629,
                                978 : 73.33761,
                            }, 
                            barRight: {
                                840 : 64.90629,
                                978 : 73.33761,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.77,
                                978 : 24.70,
                            }, 
                            currencySale: {
                                840 : 21.77,
                                978 : 24.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.13,
                                978 : 0.25,
                            },
                            currencySaleIncrement: {
                                840 : 0.13,
                                978 : 0.25,
                            },
                            barLeft: {
                                840 : 65.3061,
                                978 : 74.08977,
                            }, 
                            barRight: {
                                840 : 65.3061,
                                978 : 74.08977,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.53,
                                978 : 24.12,
                            }, 
                            currencySale: {
                                840 : 21.53,
                                978 : 24.12,
                            },
                            currencyBuyIncrement: {
                                840 : -0.24,
                                978 : -0.58,
                            },
                            currencySaleIncrement: {
                                840 : -0.24,
                                978 : -0.58,
                            },
                            barLeft: {
                                840 : 64.57716,
                                978 : 72.35226,
                            }, 
                            barRight: {
                                840 : 64.57716,
                                978 : 72.35226,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.18,
                                978 : 23.75,
                            }, 
                            currencySale: {
                                840 : 21.18,
                                978 : 23.75,
                            },
                            currencyBuyIncrement: {
                                840 : -0.35,
                                978 : -0.37,
                            },
                            currencySaleIncrement: {
                                840 : -0.35,
                                978 : -0.37,
                            },
                            barLeft: {
                                840 : 63.53406,
                                978 : 71.24073,
                            }, 
                            barRight: {
                                840 : 63.53406,
                                978 : 71.24073,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.75,
                            }, 
                            currencySale: {
                                840 : 21.20,
                                978 : 23.75,
                            },
                            currencyBuyIncrement: {
                                840 : 0.02,
                                978 : 0.01,
                            },
                            currencySaleIncrement: {
                                840 : 0.02,
                                978 : 0.01,
                            },
                            barLeft: {
                                840 : 63.58821,
                                978 : 71.25696,
                            }, 
                            barRight: {
                                840 : 63.58821,
                                978 : 71.25696,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.75,
                            }, 
                            currencySale: {
                                840 : 21.20,
                                978 : 23.75,
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
                                840 : 63.58821,
                                978 : 71.25696,
                            }, 
                            barRight: {
                                840 : 63.58821,
                                978 : 71.25696,
                            },
                    },
                                ]

	},
                {
            id: 3,
            name: "ПриватБанк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.50,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 20.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : -0.50,
                                978 : -0.50,
                            },
                            barLeft: {
                                840 : 60,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 20.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.00,
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
                                840 : 60,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 20.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.00,
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
                                840 : 60,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.50,
                                978 : 0.50,
                            },
                            currencySaleIncrement: {
                                840 : 0.50,
                                978 : 0.50,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.50,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 20.30,
                                978 : 22.70,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.30,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 60.9,
                                978 : 68.1,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 20.10,
                                978 : 22.70,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.70,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 60.3,
                                978 : 68.1,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.1,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 20.10,
                                978 : 22.70,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.70,
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
                                840 : 60.3,
                                978 : 68.1,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.1,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.10,
                                978 : 22.70,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.70,
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
                                840 : 60.3,
                                978 : 68.1,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.1,
                            },
                    },
                                ]

	},
                {
            id: 2,
            name: "Райффайзен Банк Аваль",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 22.00,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.00,
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
                                840 : 66,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.50,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
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
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
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
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -1.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 77.1,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.30,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 24.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -1.00,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 73.5,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.50,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.00,
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
                                840 : 64.5,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 75,
                            },
                    },
                                ]

	},
                {
            id: 5,
            name: "Ощадбанк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.10,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : -0.30,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.15,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 62.1,
                                978 : 69.3,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.30,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 62.1,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.20,
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
                                840 : 62.1,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.20,
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
                                840 : 62.1,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.30,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : 0.10,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 62.1,
                                978 : 69.9,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 20.75,
                                978 : 23.35,
                            }, 
                            currencySale: {
                                840 : 22.35,
                                978 : 25.25,
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
                                840 : 62.25,
                                978 : 70.05,
                            }, 
                            barRight: {
                                840 : 67.05,
                                978 : 75.75,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 20.75,
                                978 : 23.10,
                            }, 
                            currencySale: {
                                840 : 22.25,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.25,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.25,
                            },
                            barLeft: {
                                840 : 62.25,
                                978 : 69.3,
                            }, 
                            barRight: {
                                840 : 66.75,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 20.65,
                                978 : 22.90,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.90,
                            },
                            currencyBuyIncrement: {
                                840 : -0.10,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.15,
                                978 : -0.10,
                            },
                            barLeft: {
                                840 : 61.95,
                                978 : 68.7,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.7,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 20.65,
                                978 : 22.80,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.80,
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
                                840 : 61.95,
                                978 : 68.4,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.4,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.65,
                                978 : 22.80,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.80,
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
                                840 : 61.95,
                                978 : 68.4,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.4,
                            },
                    },
                                ]

	},
                {
            id: 16,
            name: "Чорний ринок",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.71,
                                978 : 24.64,
                            }, 
                            currencySale: {
                                840 : 22.01,
                                978 : 25.03,
                            },
                            currencyBuyIncrement: {
                                840 : -0.18,
                                978 : -0.11,
                            },
                            currencySaleIncrement: {
                                840 : -0.24,
                                978 : -0.19,
                            },
                            barLeft: {
                                840 : 65.1195,
                                978 : 73.91214,
                            }, 
                            barRight: {
                                840 : 66.03738,
                                978 : 75.08238,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.85,
                                978 : 24.70,
                            }, 
                            currencySale: {
                                840 : 22.09,
                                978 : 25.03,
                            },
                            currencyBuyIncrement: {
                                840 : 0.14,
                                978 : 0.06,
                            },
                            currencySaleIncrement: {
                                840 : 0.08,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 65.54526,
                                978 : 74.08908,
                            }, 
                            barRight: {
                                840 : 66.26682,
                                978 : 75.09735,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.86,
                                978 : 24.69,
                            }, 
                            currencySale: {
                                840 : 22.18,
                                978 : 25.09,
                            },
                            currencyBuyIncrement: {
                                840 : 0.02,
                                978 : -0.01,
                            },
                            currencySaleIncrement: {
                                840 : 0.09,
                                978 : 0.06,
                            },
                            barLeft: {
                                840 : 65.59308,
                                978 : 74.06646,
                            }, 
                            barRight: {
                                840 : 66.53655,
                                978 : 75.26646,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.85,
                                978 : 24.86,
                            }, 
                            currencySale: {
                                840 : 22.26,
                                978 : 25.17,
                            },
                            currencyBuyIncrement: {
                                840 : -0.02,
                                978 : 0.17,
                            },
                            currencySaleIncrement: {
                                840 : 0.08,
                                978 : 0.09,
                            },
                            barLeft: {
                                840 : 65.54787,
                                978 : 74.586,
                            }, 
                            barRight: {
                                840 : 66.77187,
                                978 : 75.52326,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.89,
                                978 : 24.73,
                            }, 
                            currencySale: {
                                840 : 22.12,
                                978 : 25.11,
                            },
                            currencyBuyIncrement: {
                                840 : 0.04,
                                978 : -0.13,
                            },
                            currencySaleIncrement: {
                                840 : -0.14,
                                978 : -0.07,
                            },
                            barLeft: {
                                840 : 65.66418,
                                978 : 74.20224,
                            }, 
                            barRight: {
                                840 : 66.35352,
                                978 : 75.31533,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.85,
                                978 : 24.71,
                            }, 
                            currencySale: {
                                840 : 22.08,
                                978 : 25.05,
                            },
                            currencyBuyIncrement: {
                                840 : -0.04,
                                978 : -0.02,
                            },
                            currencySaleIncrement: {
                                840 : -0.04,
                                978 : -0.06,
                            },
                            barLeft: {
                                840 : 65.5551,
                                978 : 74.145,
                            }, 
                            barRight: {
                                840 : 66.24444,
                                978 : 75.135,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.80,
                                978 : 24.53,
                            }, 
                            currencySale: {
                                840 : 21.98,
                                978 : 24.88,
                            },
                            currencyBuyIncrement: {
                                840 : -0.05,
                                978 : -0.19,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.16,
                            },
                            barLeft: {
                                840 : 65.41437,
                                978 : 73.58595,
                            }, 
                            barRight: {
                                840 : 65.95287,
                                978 : 74.64642,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.84,
                                978 : 24.58,
                            }, 
                            currencySale: {
                                840 : 22.01,
                                978 : 24.88,
                            },
                            currencyBuyIncrement: {
                                840 : 0.03,
                                978 : 0.05,
                            },
                            currencySaleIncrement: {
                                840 : 0.02,
                                978 : -0.00,
                            },
                            barLeft: {
                                840 : 65.5182,
                                978 : 73.72707,
                            }, 
                            barRight: {
                                840 : 66.02691,
                                978 : 74.64567,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.88,
                                978 : 24.59,
                            }, 
                            currencySale: {
                                840 : 22.09,
                                978 : 24.88,
                            },
                            currencyBuyIncrement: {
                                840 : 0.05,
                                978 : 0.02,
                            },
                            currencySaleIncrement: {
                                840 : 0.08,
                                978 : -0.00,
                            },
                            barLeft: {
                                840 : 65.6538,
                                978 : 73.77933,
                            }, 
                            barRight: {
                                840 : 66.28179,
                                978 : 74.63445,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.99,
                                978 : 24.64,
                            }, 
                            currencySale: {
                                840 : 22.27,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.11,
                                978 : 0.05,
                            },
                            currencySaleIncrement: {
                                840 : 0.17,
                                978 : 0.12,
                            },
                            barLeft: {
                                840 : 65.97165,
                                978 : 73.92,
                            }, 
                            barRight: {
                                840 : 66.80205,
                                978 : 74.98614,
                            },
                    },
                                ]

	},
                {
            id: 4,
            name: "Кредит Дніпро",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.25,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.25,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 64.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 64.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 64.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 23.70,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 71.1,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 23.80,
                            }, 
                            currencySale: {
                                840 : 22.40,
                                978 : 25.40,
                            },
                            currencyBuyIncrement: {
                                840 : 0.10,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.10,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 71.4,
                            }, 
                            barRight: {
                                840 : 67.2,
                                978 : 76.2,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.10,
                                978 : 0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.40,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.10,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.80,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72.3,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.4,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.30,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.80,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.60,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 63.9,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.4,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.30,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.80,
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
                                840 : 63.9,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.4,
                            },
                    },
                                ]

	},
                {
            id: 6,
            name: "Креді Агріколь Банк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : 0.30,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : -0.30,
                                978 : -0.50,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.20,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 63.6,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.00,
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
                                840 : 63.6,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.30,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.1,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : 0.20,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.20,
                                978 : 0.80,
                            },
                            barLeft: {
                                840 : 63.6,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 76.5,
                            },
                    },
                                ]

	},
                {
            id: 7,
            name: "УкрСиббанк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 21.40,
                            }, 
                            currencySale: {
                                840 : 22.90,
                                978 : 22.90,
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
                                840 : 64.2,
                                978 : 64.2,
                            }, 
                            barRight: {
                                840 : 68.7,
                                978 : 68.7,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 21.20,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.40,
                                978 : -0.40,
                            },
                            barLeft: {
                                840 : 63.6,
                                978 : 63.6,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 21.20,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
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
                                840 : 63.6,
                                978 : 63.6,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 21.20,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
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
                                840 : 63.6,
                                978 : 63.6,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 21.60,
                            }, 
                            currencySale: {
                                840 : 22.70,
                                978 : 22.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.40,
                                978 : 0.40,
                            },
                            currencySaleIncrement: {
                                840 : 0.20,
                                978 : 0.20,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 64.8,
                            }, 
                            barRight: {
                                840 : 68.1,
                                978 : 68.1,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 21.60,
                            }, 
                            currencySale: {
                                840 : 22.70,
                                978 : 22.70,
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
                                840 : 64.8,
                                978 : 64.8,
                            }, 
                            barRight: {
                                840 : 68.1,
                                978 : 68.1,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 21.60,
                            }, 
                            currencySale: {
                                840 : 22.70,
                                978 : 22.70,
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
                                840 : 64.8,
                                978 : 64.8,
                            }, 
                            barRight: {
                                840 : 68.1,
                                978 : 68.1,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 21.40,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 64.2,
                                978 : 64.2,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 21.40,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
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
                                840 : 64.2,
                                978 : 64.2,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 21.40,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 22.50,
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
                                840 : 64.2,
                                978 : 64.2,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 67.5,
                            },
                    },
                                ]

	},
                {
            id: 8,
            name: "Кредобанк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.25,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.35,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.15,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.25,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69.75,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 79.05,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.30,
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
                                840 : 63,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 78.9,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.30,
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
                                840 : 63,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 78.9,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.20,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.30,
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
                                840 : 63,
                                978 : 69.6,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 78.9,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.80,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.40,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.60,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 71.4,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 79.2,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.60,
                            }, 
                            currencySale: {
                                840 : 23.00,
                                978 : 26.10,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.8,
                            }, 
                            barRight: {
                                840 : 69,
                                978 : 78.3,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 22.90,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : -0.70,
                            },
                            currencySaleIncrement: {
                                840 : -0.50,
                                978 : -0.60,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 68.7,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 22.90,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 61.5,
                                978 : 68.7,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 22.90,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 61.5,
                                978 : 68.7,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 22.90,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.50,
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
                                840 : 61.5,
                                978 : 68.7,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 76.5,
                            },
                    },
                                ]

	},
                {
            id: 9,
            name: "Укрексімбанк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.70,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 25.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 71.1,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 77.1,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.50,
                                978 : -0.50,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.20,
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
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 25.20,
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
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.30,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.30,
                                978 : 0.10,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.9,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.60,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.10,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.8,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.3,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.20,
                                978 : 24.90,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66.6,
                                978 : 74.7,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.80,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.10,
                            },
                            barLeft: {
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.4,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.70,
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
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.1,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.50,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.70,
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
                                840 : 61.5,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.1,
                            },
                    },
                                ]

	},
                {
            id: 10,
            name: "ОТП Банк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.30,
                            }, 
                            currencySale: {
                                840 : 23.50,
                                978 : 26.70,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.80,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72.9,
                            }, 
                            barRight: {
                                840 : 70.5,
                                978 : 80.1,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.30,
                            }, 
                            currencySale: {
                                840 : 23.50,
                                978 : 26.70,
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
                                840 : 64.5,
                                978 : 72.9,
                            }, 
                            barRight: {
                                840 : 70.5,
                                978 : 80.1,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.30,
                            }, 
                            currencySale: {
                                840 : 23.50,
                                978 : 26.70,
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
                                840 : 64.5,
                                978 : 72.9,
                            }, 
                            barRight: {
                                840 : 70.5,
                                978 : 80.1,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.30,
                            }, 
                            currencySale: {
                                840 : 23.50,
                                978 : 26.70,
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
                                840 : 64.5,
                                978 : 72.9,
                            }, 
                            barRight: {
                                840 : 70.5,
                                978 : 80.1,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.35,
                            }, 
                            currencySale: {
                                840 : 22.70,
                                978 : 25.95,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.05,
                            },
                            currencySaleIncrement: {
                                840 : -0.80,
                                978 : -0.75,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 73.05,
                            }, 
                            barRight: {
                                840 : 68.1,
                                978 : 77.85,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.20,
                            }, 
                            currencySale: {
                                840 : 22.60,
                                978 : 25.60,
                            },
                            currencyBuyIncrement: {
                                840 : 0.10,
                                978 : -0.15,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.35,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 72.6,
                            }, 
                            barRight: {
                                840 : 67.8,
                                978 : 76.8,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.10,
                            }, 
                            currencySale: {
                                840 : 22.40,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.40,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 72.3,
                            }, 
                            barRight: {
                                840 : 67.2,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.50,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.10,
                            },
                            currencyBuyIncrement: {
                                840 : -0.10,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.10,
                            },
                            barLeft: {
                                840 : 64.5,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.3,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.60,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.80,
                            },
                            currencyBuyIncrement: {
                                840 : -0.30,
                                978 : -0.40,
                            },
                            currencySaleIncrement: {
                                840 : -0.30,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 63.6,
                                978 : 70.8,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.4,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.20,
                                978 : 23.60,
                            }, 
                            currencySale: {
                                840 : 22.00,
                                978 : 24.80,
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
                                840 : 63.6,
                                978 : 70.8,
                            }, 
                            barRight: {
                                840 : 66,
                                978 : 74.4,
                            },
                    },
                                ]

	},
                {
            id: 11,
            name: "Ідея Банк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 1.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -1.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -2.00,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 26.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 78,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 2.00,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 22.50,
                                978 : 28.00,
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
                                840 : 63,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 67.5,
                                978 : 84,
                            },
                    },
                                ]

	},
                {
            id: 12,
            name: "ПроКредит Банк",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.52,
                            }, 
                            currencySale: {
                                840 : 22.95,
                                978 : 26.03,
                            },
                            currencyBuyIncrement: {
                                840 : -0.50,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : -0.51,
                                978 : -0.51,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.56,
                            }, 
                            barRight: {
                                840 : 68.85,
                                978 : 78.0912,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.71,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 26.22,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.19,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : 0.19,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 71.13,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 78.6726,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.61,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 26.03,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.19,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.83,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 78.0912,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.61,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 26.03,
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
                                840 : 63,
                                978 : 70.83,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 78.0912,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.61,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 26.03,
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
                                840 : 63,
                                978 : 70.83,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 78.0912,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.65,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 26.06,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.04,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.03,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.95,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 78.183,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.22,
                            }, 
                            currencySale: {
                                840 : 22.75,
                                978 : 25.62,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.43,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.44,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69.66,
                            }, 
                            barRight: {
                                840 : 68.238,
                                978 : 76.8672,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.73,
                            }, 
                            currencySale: {
                                840 : 22.64,
                                978 : 26.04,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.51,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : 0.42,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 71.19,
                            }, 
                            barRight: {
                                840 : 67.932,
                                978 : 78.1218,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.25,
                            }, 
                            currencySale: {
                                840 : 22.54,
                                978 : 25.55,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.48,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.49,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 69.75,
                            }, 
                            barRight: {
                                840 : 67.626,
                                978 : 76.653,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.80,
                                978 : 22.95,
                            }, 
                            currencySale: {
                                840 : 22.24,
                                978 : 25.25,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.30,
                            },
                            currencySaleIncrement: {
                                840 : -0.31,
                                978 : -0.31,
                            },
                            barLeft: {
                                840 : 62.4,
                                978 : 68.85,
                            }, 
                            barRight: {
                                840 : 66.708,
                                978 : 75.735,
                            },
                    },
                                ]

	},
                {
            id: 13,
            name: "ПУМБ",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.60,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.40,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : 0.10,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 73.8,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 76.2,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.50,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.30,
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
                                840 : 64.8,
                                978 : 73.5,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.9,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.50,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.30,
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
                                840 : 64.8,
                                978 : 73.5,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.9,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.50,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.30,
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
                                840 : 64.8,
                                978 : 73.5,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.9,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.60,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.40,
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
                                840 : 64.8,
                                978 : 73.8,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 76.2,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.30,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : -0.30,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 64.8,
                                978 : 72.9,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.6,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 21.60,
                                978 : 24.20,
                            }, 
                            currencySale: {
                                840 : 22.30,
                                978 : 25.10,
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
                                840 : 64.8,
                                978 : 72.6,
                            }, 
                            barRight: {
                                840 : 66.9,
                                978 : 75.3,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.90,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            currencySaleIncrement: {
                                840 : -0.20,
                                978 : -0.20,
                            },
                            barLeft: {
                                840 : 64.2,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.7,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.90,
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
                                840 : 64.2,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.7,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 21.40,
                                978 : 24.00,
                            }, 
                            currencySale: {
                                840 : 22.10,
                                978 : 24.90,
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
                                840 : 64.2,
                                978 : 72,
                            }, 
                            barRight: {
                                840 : 66.3,
                                978 : 74.7,
                            },
                    },
                                ]

	},
                {
            id: 14,
            name: "Банк Південний",
            time: "15:00",
            date: [
                                        {
                            dateCurrent: "18062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 25.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.10,
                                978 : 0.00,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.30,
                            },
                            barLeft: {
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "19062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "20062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "21062015",
                            currencyBuy: {
                                840 : 21.00,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 25.00,
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
                                840 : 63,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 75,
                            },
                    },
                                        {
                            dateCurrent: "22062015",
                            currencyBuy: {
                                840 : 20.80,
                                978 : 23.40,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 24.40,
                            },
                            currencyBuyIncrement: {
                                840 : -0.20,
                                978 : -0.10,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : -0.60,
                            },
                            barLeft: {
                                840 : 62.4,
                                978 : 70.2,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 73.2,
                            },
                    },
                                        {
                            dateCurrent: "23062015",
                            currencyBuy: {
                                840 : 20.80,
                                978 : 23.50,
                            }, 
                            currencySale: {
                                840 : 21.80,
                                978 : 24.60,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.10,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.20,
                            },
                            barLeft: {
                                840 : 62.4,
                                978 : 70.5,
                            }, 
                            barRight: {
                                840 : 65.4,
                                978 : 73.8,
                            },
                    },
                                        {
                            dateCurrent: "24062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 21.70,
                                978 : 24.00,
                            },
                            currencyBuyIncrement: {
                                840 : -0.10,
                                978 : -0.50,
                            },
                            currencySaleIncrement: {
                                840 : -0.10,
                                978 : -0.60,
                            },
                            barLeft: {
                                840 : 62.1,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 65.1,
                                978 : 72,
                            },
                    },
                                        {
                            dateCurrent: "25062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 22.80,
                            }, 
                            currencySale: {
                                840 : 21.70,
                                978 : 23.80,
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
                                840 : 62.1,
                                978 : 68.4,
                            }, 
                            barRight: {
                                840 : 65.1,
                                978 : 71.4,
                            },
                    },
                                        {
                            dateCurrent: "26062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 21.70,
                                978 : 24.20,
                            },
                            currencyBuyIncrement: {
                                840 : 0.00,
                                978 : 0.20,
                            },
                            currencySaleIncrement: {
                                840 : 0.00,
                                978 : 0.40,
                            },
                            barLeft: {
                                840 : 62.1,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 65.1,
                                978 : 72.6,
                            },
                    },
                                        {
                            dateCurrent: "27062015",
                            currencyBuy: {
                                840 : 20.70,
                                978 : 23.00,
                            }, 
                            currencySale: {
                                840 : 21.70,
                                978 : 24.20,
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
                                840 : 62.1,
                                978 : 69,
                            }, 
                            barRight: {
                                840 : 65.1,
                                978 : 72.6,
                            },
                    },
                                ]

	},
        
];