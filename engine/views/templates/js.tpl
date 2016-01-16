var day = "{{$today->format("d")}}";
var month = "{{$today->format("m")}}";
var year = "{{$today->format("Y")}}";       
var start_date = "{{$today->format("Y-m-d")}}";
var current_currency = {{$base_currency_id}};
var currency_delta = 'week';

var datas_tank = {

{{foreach from=$days key=code item=period}}
    '{{$code}}' : {
        {{foreach from=$currencies key=currency_id item=currency}}
            {{$currency_id}} : {
                tank : [
                    {{foreach from=$period item=value}}
                        {{$value[$currency_id].avg.avg.value|string_format:"%.2f"}},
                    {{/foreach}}
                ],
                story : "{{$stories[$currency_id][$code]}}"
            },
        {{/foreach}}
    },
{{/foreach}}

};

var arrayBanks = [
        {{foreach from=$banks_names key=bank_id item=title}}
        {
            id: {{$bank_id}},
            name: "{{$title}}",
            time: "15:00",
            date: [
                    {{foreach from=$banks_exchanges key=date item=day}}
                    {{if !empty($day[$base_currency_id][$bank_id])}}
                    {
                            dateCurrent: "{{$date}}",
                            currencyBuy: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].buy.value|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                            currencySale: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].sale.value|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                            currencyBuyIncrement: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].buy.diff|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                            currencySaleIncrement: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].sale.diff|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                            barLeft: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].buy.value * 3|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                            barRight: {
                                {{foreach from=$currencies key=currency_id item=currency}}
                                    {{$currency_id}} : {{$day[$currency_id][$bank_id].sale.value * 3|string_format:"%.2f"}},
                                {{/foreach}}
                            },
                    },
                    {{/if}}
                    {{/foreach}}
            ]

	},
        {{/foreach}}

];