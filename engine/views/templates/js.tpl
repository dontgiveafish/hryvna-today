var day = "{{$today->format("d")}}";
var month = "{{$today->format("m")}}";
var year = "{{$today->format("Y")}}";       
var start_date = "{{$today->format("Y-m-d")}}";
var current_currency = 840;
var currency_delta = 'week';

var datas_tank = {

{{foreach from=$days key=code item=period}}
    '{{$code}}' : {
            840 : {
                'tank' : [{{foreach from=$period.dollar.tank item=day}}{{if !empty($day.dollar_avg_rounded)}}{{$day.dollar_avg_rounded}}{{else}}0{{/if}}, {{/foreach}}],
                'story' : "{{$period.dollar.story}}"

            },
            978 : {
                'tank' : [{{foreach from=$period.euro.tank item=day}}{{if !empty($day.euro_avg_rounded)}}{{$day.euro_avg_rounded}}{{else}}0{{/if}}, {{/foreach}}],
                'story' : "{{$period.euro.story}}"
            }
    },
{{/foreach}}

};

var arrayBanks = [
        {{foreach from=$banks_names key=id item=title}}
        {
            id: {{$id}},
            name: "{{$title}}",
            time: "15:00",
            date: [
                    {{foreach from=$banks_exchanges key=date item=day}}
                    {{if !empty($day[$id])}}
                    {
                            dateCurrent: "{{$date}}",
                            currencyBuy: {
                                840 : {{$day[$id].dollar_buy.value|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_buy.value|string_format:"%.2f"}},
                            }, 
                            currencySale: {
                                840 : {{$day[$id].dollar_sale.value|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_sale.value|string_format:"%.2f"}},
                            },
                            currencyBuyIncrement: {
                                840 : {{$day[$id].dollar_buy.diff|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_buy.diff|string_format:"%.2f"}},
                            },
                            currencySaleIncrement: {
                                840 : {{$day[$id].dollar_sale.diff|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_sale.diff|string_format:"%.2f"}},
                            },
                            barLeft: {
                                840 : {{$day[$id].dollar_buy.value * 3|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_buy.value * 3|string_format:"%.2f"}},
                            }, 
                            barRight: {
                                840 : {{$day[$id].dollar_sale.value * 3|string_format:"%.2f"}},
                                978 : {{$day[$id].euro_sale.value * 3|string_format:"%.2f"}},
                            },
                    },
                    {{/if}}
                    {{/foreach}}
            ]

	},
        {{/foreach}}

];