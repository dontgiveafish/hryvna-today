var addthis_config = {ui_click: true}

function dateCreater(date) {
	day = start_date.substring(0, 2);
	month = start_date.substring(2, 4);
	year = start_date.substring(4, 8);
	var month_str = '';
	switch(month){
		case '01':{
			month_str = 'Січня';
			break;
		}
		case '02':{
			month_str = 'Лютого';
			break;
		}
		case '03':{
			month_str = 'Березеня';
			break;
		}
		case '04':{
			month_str = 'Квітня';
			break;
		}
		case '05':{
			month_str = 'Травня';
			break;
		}
		case '06':{
			month_str = 'Червня';
			break;
		}
		case '07':{
			month_str = 'Липня';
			break;
		}
		case '08':{
			month_str = 'Серпня';
			break;
		}
		case '09':{
			month_str = 'Вересня';
			break;
		}
		case '10':{
			month_str = 'Жовтня';
			break;
		}
		case '11':{
			month_str = 'Листопада';
			break;
		}
		case '12':{
			month_str = 'Грудня';
			break;
		}
	}
	$('.datepicker-btn-value').html(day+' '+month_str);
}

// graphics
var windowWidth = $(window).width(),
datas,
pointIntervalSettting,
marginLeftSetting,
labelsMarghin,
MarghinRightSetting,
markerSheight,
markerSWidth,
styleLabel,
backgroundColorSetting = '#512da7';


var max_visible_banks = 5; // максимальное количество показываемых банков
var max_small_count = 7; // количество дней в графике при 640 разрешении
var datasBuy = [];
var datasBuySmall = [];
var datasSale = [];
var datasSaleSmall = [];
var datasDates = [];
var datasDatesSmall = [];


/*custom inputs*/
function customInputs(objBlockInput){
	if(objBlockInput.length){
		var inp = ':text, :password, textarea, input[type="date"], input[type="datetime"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"]';
		objBlockInput.on('click', function(e){
			var 
				self = $(this),
				curInp = self.find(inp).not('[disabled]');
			if (curInp.length){
				self.addClass('focus');
				curInp.trigger('focus');
			}
		});
		objBlockInput.on('click, focus', inp, function(e){
			$(e.delegateTarget).addClass('focus');
		});
		objBlockInput.on('blur', inp, function(e){
			$(e.delegateTarget).removeClass('focus');
		});
	}
};
/*custom inputs end*/

/*placeholder*/
function placeholder(objInputs){
	if (objInputs.length) objInputs.placeholder();
};
/*placeholder end*/

/*SCROLLPANE*/
/*vertical*/
function scrollbarVertical(obj){
	obj.each(function(){
		$(this).jScrollPane({
			mouseWheelSpeed: 50,
			showArrows: false,
			arrowScrollOnHover: false,
			verticalDragMinHeight: 45,
			verticalDragMaxHeight: 45,
			horizontalDragMinWidth: 0,
			horizontalDragMaxWidth: 0,
			autoReinitialise: true
		});
	});
};
/*vertical end*/

/*scrollpane scroll bug fix*/
function scrollpaneFix(scroll){
	if(scroll.length){
		scroll.hover(
			function(){
				$(document).bind('mousewheel.false', function(){return false;});
			}, 
			function(){	
				$(document).unbind('mousewheel.false');
			}
		); 
	}
	/*scrollpane in fancybox fix*/
	var skin = $('.fancybox-skin');
	if(skin.length){
		skin.hover(
			function(){
				$('.fancybox-overlay').bind('mousewheel.falseFancy', function(){return false;});
			}, 
			function(){ 
				$('.fancybox-overlay').unbind('mousewheel.falseFancy');
			}
		);
	}	
};	
/*scrollpane scroll bug fix end*/
/*SCROLLPANE END*/

/*CUSTOM CHECKBOX(RADIOBOX)*/

/*checkbox list*/
function checkList(objList){
	if (objList.length){
		objList.on('check', ':checkbox', function(){
			$(this).parents('li').eq(0).addClass('checked');
		});
		objList.on('uncheck', ':checkbox', function(){
			$(this).parents('li').eq(0).removeClass('checked');
		});
		objList.on('disable', ':checkbox', function(){
			$(this).parents('li').eq(0).addClass('disabled');
		});
		objList.on('enable', ':checkbox', function(){
			$(this).parents('li').eq(0).removeClass('disabled');
		});
	}	
};
/*checkbox list end*/
/*radiobox list*/
function radioList(objList){
	if (objList.length){		
		objList.on('disable', ':radio', function(){
			$(this).parents('li').eq(0).addClass('disabled');
		});
		objList.on('enable', ':radio', function(){
			$(this).parents('li').eq(0).removeClass('disabled');
		});
		objList.on('check', ':radio', function(){
			$(this).parents('li').eq(0)
				.addClass('checked')
				.siblings().removeClass('checked');
		});
                
                
	}	
};
/*radiobox list end*/

/*CUSTOM CHECKBOX(RADIOBOX) END*/

/*FANCYBOX*/
/*popup options array*/
popupConfig = new Array();
popupConfig = {
	wrapCSS: 'fancybox-popup',
	padding: ['0','0','0','0'],
	scrolling: 'visible',
	openEffect: 'none',
	closeEffect: 'none',
	helpers: {
        overlay: {
//			css: {'background': 'url(img/overlay.png) repeat'}
		}
    },
	beforeShow   : function() {
		var 
			self = $(this.outer),
			el = $(this.element),
			inner = self.find('.popup-inner');
		
		/*scroll-pane part*/
		var 
			scrollWrap = inner.find('.wrap-scrollpane'),
			scroll = inner.find('.scrollpane');

		if(scrollWrap.length && scroll.length){
			scrollWrap.css({
				'min-height': 600
			});
			if (scroll.data('jsp')){
				scroll.data('jsp').destroy();
			}
			scrollbarVertical(inner.find('.scrollpane'));
			scrollWrap.css({'min-height': 0});
		}
		/*scroll-pane part end*/
		
		/*multiselect part*/
		var select = inner.find('.wrap-select select, [class^="wrap-select-"] select, [class*=" wrap-select-"] select');
		if(select.length){
			select.multiselect("refresh");
			customSelectRefreshPlaceholder(select);
		}
		$('html, body, .fancybox-overlay').scroll(function(){
//			customSelectClose(select);
		});
		$(window).scroll(function(){
//			customSelectClose(select);
		});
		/*multiselect part end*/
		
		/*iframe part*/
		var iframeSrc = el.attr('data-iframe-src');
		if(iframeSrc){
			var iframe = inner.find('.wrap-iframe > iframe');
			iframe.prop('src', iframeSrc);
		}
		/*iframe part end*/	
	}
};
/*popup options array end*/
/*fancybox popup open*/
function fancyboxPopup(obj, arrConfig){
	if (obj.length){
		if( $(window).width() > 640 ) {
			obj.fancybox(arrConfig);
		}
		
	}	
};
/*fancybox popup open end*/

/* CONVERTER CALCULATIONS */
function calculateMyMoney() {

	// @todo prepare to many currencies

    var table = $('.table-currency-converter');
    
    var money = $('#converter-sum').val();
    if (isNaN(money)) return;
    
    var currency = $('input[name=currency]:checked').val();
    var operation = $('input[name=buy]:checked').val();


    if (currency == 'usd') {
        table.find('thead th.col-uah div span').text('UAH');
        table.find('thead th.col-eur div span').text('EUR');
    }
    else if (currency == 'eur') {
        table.find('thead th.col-uah div span').text('UAH');
        table.find('thead th.col-eur div span').text('USD');
    }
    else if (currency == 'uah') {
        table.find('thead th.col-uah div span').text('USD');
        table.find('thead th.col-eur div span').text('EUR');
    }

    table.find('tbody tr').each(function() {

       if (operation == 'buy') {

           if (currency == 'usd') {
               var uah_k = $(this).data('usd-sale');
               var eur_k = $(this).data('usd-sale') / $(this).data('eur-sale');
               
           }
           else if (currency == 'eur') {
               var uah_k = $(this).data('eur-sale');
               var eur_k = $(this).data('eur-sale') / $(this).data('usd-sale');
               
           }
           else if (currency == 'uah') {
               var uah_k = 1/$(this).data('usd-sale');
               var eur_k = 1/$(this).data('eur-sale');
           }



       }
       else if (operation == 'sale') {
           
           if (currency == 'usd') {
               var uah_k = $(this).data('usd-buy');
               var eur_k = $(this).data('usd-buy') / $(this).data('eur-buy');
               
           }
           else if (currency == 'eur') {
               var uah_k = $(this).data('eur-buy');
               var eur_k = $(this).data('eur-buy') / $(this).data('usd-buy');
               
           }
           else if (currency == 'uah') {
               var uah_k = 1/$(this).data('usd-buy');
               var eur_k = 1/$(this).data('eur-buy');
           }

       }

       $(this).find('.col-uah').text((uah_k * money).toFixed(2));
       $(this).find('.col-eur').text((eur_k * money).toFixed(2));
    });

    sortTableCurrencyConverter();
}
$('#converter-sum').keyup(function() {
    calculateMyMoney();
});
$('input[type=radio]').click(function() {
//    calculateMyMoney();
});


/* end of CONVERTER CALCULATIONS */

/*FANCYBOX END*/

/* FnBurger */
function FnBurger() {
	if ( $('.navigation').length ) {
		var btn = $('.navigation .navigation-title'),
			hiddenMenu = $('.hidden-menu'),
			windowWidth = $(window).width(),
			skin = $('.skin-menu'),
			delay = 300

		hiddenMenu.css('padding-bottom', $(window).height()).slideUp(0);	
		btn.on('click' , function(e){
			var cur = $(this),
				curParent = cur.parents('.navigation'); 
				if ( !curParent.hasClass('active') ) {
					curParent.addClass('active');
					cur.addClass('active');
					hiddenMenu.slideDown(delay);
					if( windowWidth > 640 ) {
					   skin.fadeIn();
					}
					if( windowWidth < 640 ) {
					    setTimeout(function() { 
							var vindowHeight = $(window).height();
							$('.navigation.active .navigation-inner').css({
							    'height': vindowHeight-50,
								'overflow-y': 'scroll'
						    });
						}, 300)
					}
					
				}else {
					setTimeout(function() {curParent.removeClass('active')}, delay)
					cur.removeClass('active');
					hiddenMenu.slideUp(delay);
					if( windowWidth > 640 ) {
					   skin.fadeOut('active');
					}
					if( windowWidth < 640 ) {
					    setTimeout(function() { 
							var vindowHeight = $(window).height();
							$('.navigation .navigation-inner').css({
							    'height': 'auto',
								'overflow-y': 'none'
						    });
						}, 300)
					}
				}
			e.preventDefault();
		});	
	}	
	skin.on('click' , function(e){
		btn.trigger('click');
		skin.fadeOut(0);
	});
}
/* FnBurger end */

/* showDrop */
function showDrop() {
	if ( $('.drop').length ) {
		var btn = $('.drop-title');	
		btn.on('click',function(e) {
			var cur = $(this);
			$(document).unbind('click.drop-content');
			$('.drop-content').fadeOut();
			btn.not(cur).removeClass('active');
			if ( !cur.hasClass('active') ) {
                            
                           
				var yourClick = true;
				var drop = cur.parents('.drop').find('.drop-content');
				drop.fadeIn();
				cur.addClass('active');
				
				$(document).bind('click.drop-content', function (e) {
					if (!yourClick  && !$(e.target).closest(drop).length || $(e.target).closest(drop.find('li')).length ) {
						drop.fadeOut();
						btn.removeClass('active');
						$(document).unbind('click.drop-content');
					}

					yourClick  = false;
				});
			} else {

				cur.removeClass('active');
				$('.drop-content').fadeOut();
			}

			e.preventDefault();
		});

		var dropTitle = $('.drop-title')

		$('.drop-content-list a').on('click', function(e) {
                        
			var cur = $(this),
				curText = cur.text();
				cur.addClass('current').parent().siblings().find('a').removeClass('current');
				dropTitle.text(curText);
			e.preventDefault();	
                        
                        currency_delta = cur.attr('href').replace('#','')
                        $('.choose-currency-text-inner p').html(datas_tank[currency_delta][current_currency]['story']);
                        firstGraphic();
		});
	}
}
/* showDrop end */

var coef = 1/(24*60*60*1000);   
	function fnDateDay(day){
	var date = new Date().getTime() + (day/coef); 
	return new Date(date);
}

function datepicker() {

        Highcharts.setOptions({
            lang: {weekdays: ['НД','ПН','ВТ','СР','ЧТ','ПТ','СБ']}
        });
    
	$.datepicker.regional['uk'] = {
		closeText: 'Закрити',
		prevText: '&#x3c;',
		nextText: '&#x3e;',
		currentText: 'Сьогодні',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
		'Лип','Сер','Вер','Жов','Лис','Гру'],
		dayNames: ['неділя','понеділок','вівторок','середа','четвер','пятниця','суббота'],
		dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy', firstDay: 1,
		isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['uk']);

	$('.datepicker').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		maxDate:0,
		dateFormat: 'dd.mm.yy',
		beforeShow: function() {
			setTimeout(function() {
				$('.datepicker-btn').addClass('active');
			}, 0);
		},
		beforeShowDay: function(date){
			var flag = false;
			var day = date.getDate();
			if ( day < 10 )
				day = '0'+day;
			var month = date.getMonth()+1;
			if ( month < 10 )
				month = '0'+month;
			var search = day + month + date.getFullYear();
			$.each(arrayBanks, function(i, item){
				var bank_date = item.date;
				$.each(bank_date,function(j,k){
					if ( k.dateCurrent == search ){
						flag = true;
						return false;
					}
				});
			});
			if ( flag == true )
				return [true];
			else
				return [false];
		},
		onSelect: function(dateText, inst) {
			dateText = dateText.replace('.','');
			dateText = dateText.replace('.','');
			start_date = dateText;
			graficCurrency(dateText);
			dateCreater(dateText);
			$('.back-to-banks').trigger('click');
			$('.show-more-banks').removeClass('active').html('Показати більше банків');
		},
		onClose:function() {
			setTimeout(function() { 
				$('.datepicker-btn').removeClass('active');
			}, 0);
		}
	});
}
/* datepicker End */


/*UI progressbar*/
function fnProgressbar(obj){	
	if (obj.length){		
		 obj.each(function(){
			 var self = $(this);
			 self.progressbar({
				max: 100,
				value: (self.attr('data-value')*1)
			});
		 });		 
	}	
};
/*UI progressbar end*/

/* scrollLinks */
function scrollLinks(parent, indent, delay){
var links = $(parent).find('a');
	$(links).each(function(index, item){
		var id = $(item).attr('href');
		if ( id.length ){
			$(item).on('click', function(e){
				var idOffset = $(id).offset().top - indent;
			$('html, body').animate({scrollTop: idOffset}, delay);
				e.preventDefault();
			});
		}
	});
}
/* scrollLinks end */

/* checkbox */
function radiobox(obj){
	if (obj.length){
		obj.checkbox({cls:'jquery-radiobox'});
	}	
}
/* checkbox end */

/*checkbox/radiobox list*/
function checkList(objList){
	if (objList.length){		
		objList.on('change', '.def-radio, .def-check ', function(){
                    
			$(this).parents('li')
				.addClass('active')
				.siblings().removeClass('active');
                                
                        calculateMyMoney();
		});
	}	
};
/*checkbox/radiobox list end*/

/* checkbox */
function checkbox(obj){
	if (obj.length){
		obj.checkbox({cls:'jquery-checkbox'});	
	}
};
/* checkbox end */

/* prepend elements */
/* prependElements */
function prependElements(){
	var wWidth = $(window).width(),
		textChooseC = $('.choose-currency-text-inner'),
		chooseCurrencyContainer = $('.choose-currency .container'), 
		topText = $('.top-text'), 
		priceLarge = $('.price-large'), 
		share = $('.share'), 
		navigationList = $('.navigation-list') 
		headerRight = $('.header-right') 
		

	if ( wWidth < 789 ) {
		chooseCurrencyContainer.append(textChooseC);
	}else {			
		topText.append(textChooseC);
	}
	
	if ( wWidth < 650 ) {
		navigationList.after(share);
	}else {			
		headerRight.prepend(share);
	}
}
/* prependElements end */


/*animations blocks*/
function animationsBlocks(obj){	
	var windowWidth = $(window).width();
	if (obj.length){	
		var header = $('.header');
		function returnObjGroup(curObj){
			var objGroup = $('[data-aimate-group="'+curObj.attr('data-aimate-group')+'"]');
			if (objGroup.length){
				return objGroup;
			}else{
				return curObj;
			}
		};				
		function init(obj){
			obj.each(function(){					
				var 
					cur = $(this),
					offset = parseInt(cur.offset().top),			
					wTop = $(window).scrollTop() + 40,						
					h = parseInt(offset + cur.outerHeight());
		
				if ( ( 	offset <= wTop && h >= wTop ) ){

					header.removeClass('header-today-info');																						
					header.removeClass('header-choose-currency');												
					header.removeClass('header-banks');												
					header.removeClass('header-about');	
					
					var dataColor = cur.data('color');
					header.addClass(dataColor);
					setTimeout(function() { 
						header.addClass('active-h');
					}, 0)
	
                    if ( ( 	(offset-40) <= wTop && offset+40 >= wTop ) ){
					    setTimeout(function() { 
							header.removeClass('active-h');
					    }, 50)
						setTimeout(function() { 
							header.addClass('active-h');
					    }, 100)
					}					
				} 	
			});
		};	
		//init(obj);
		$(window).scroll(function(){
			setTimeout(	function(){
				init(obj);
			}, 2);		
		});		
	}	
};
/*animations blocks end*/

/* mobileMenuScroll */
function mobileMenuScroll() {
	var wWidth = $(window).width();
	$('.navigation-list a').on('click', function() {
		$('.icon-menu').trigger('click');
	});	
}
/* mobileMenuScroll end */

/* scrollNavigation */
function scrollNavigation() {
    var vindowHeight = $(window).height();
	$('.navigation.active .navigation-inner').css('height', vindowHeight);
}
/* scrollNavigation end */

/**
 * Apply jQuery TableSorter plugin to table object
 * @param table
 */
function tableSort(table) {
    table.trigger('destroy');
    table.tablesorter({
        widgets: ['zebra', 'columns'],
        sortReset: true,
        sortRestart: true
    });
}

function sortTableBuySale() {
	if (document.all && (!document.documentMode || (document.documentMode && document.documentMode < 8))) {

	} else {
        tableSort(
            $('.table-bay-sale')
        );
	}
}

function sortTableCurrencyConverter() {
    tableSort(
        $('.table-currency-converter')
    );
}

function graficCurrency(start_date) {
	// create table banks
	var banks_table = $('.table-bay-sale tbody');
	banks_table.html('');
	datasBuy.length = 0;
	datasBuySmall.length = 0;
	datasSale.length = 0;
	datasSaleSmall.length = 0;
	datasDates.length = 0;
	datasDatesSmall.length = 0;
	var bank_index = 0;
	$.each(arrayBanks,function(i,bank){
		var bank_id = bank.id;
		var bank_name = bank.name;
//		var bank_time = bank.time;
		var bank_date = bank.date;
		$.each(bank_date,function(j,date){
			if ( date.dateCurrent == start_date ) {
				var dateCurrencyBuy = date.currencyBuy[current_currency].toFixed(2);
				var dateCurrencySale = date.currencySale[current_currency].toFixed(2);
				var dateCurrencyBuyIncrement = date.currencyBuyIncrement[current_currency].toFixed(2);
				var dateCurrencySaleIncrement = date.currencySaleIncrement[current_currency].toFixed(2);
				var dateBarLeft = date.barLeft[current_currency];
				var datebarRight = date.barRight[current_currency];
				
				// buy_icon
				if ( parseFloat(dateCurrencyBuyIncrement) > 0 )
					var buy_icon = 'icon-arrow-yellow-top';
				if ( parseFloat(dateCurrencyBuyIncrement) == 0 )
					var buy_icon = 'icon-square';
				if ( parseFloat(dateCurrencyBuyIncrement) < 0 )
					var buy_icon = 'icon-arrow-yellow-down';
					
				// sale_icon
				if ( parseFloat(dateCurrencySaleIncrement) > 0 )
					var sale_icon = 'icon-arrow-yellow-top';
				if ( parseFloat(dateCurrencySaleIncrement) == 0 )
					var sale_icon = 'icon-square';
				if ( parseFloat(dateCurrencySaleIncrement) < 0 )
					var sale_icon = 'icon-arrow-yellow-down';
					
				// adding plus
				if ( parseFloat(dateCurrencyBuyIncrement) > 0 )
					dateCurrencyBuyIncrement = '+'+dateCurrencyBuyIncrement;
				else if (parseFloat(dateCurrencyBuyIncrement) == 0) {
					dateCurrencyBuyIncrement = '';
				}
				if ( parseFloat(dateCurrencySaleIncrement) > 0 )
					dateCurrencySaleIncrement = '+'+dateCurrencySaleIncrement;
				else if (parseFloat(dateCurrencySaleIncrement) == 0) {
					dateCurrencySaleIncrement = '';
				}
				if ( bank_index < max_visible_banks )
					bank_status = '';
				else
					bank_status = 'hidden';
					
				// append rows
				banks_table.append('<tr data-id="'+bank_id+'">\
							<td>\
								<div class="inner">\
									<div class="inner-text">\
										<span class="banks-name">'+bank_name+'</span>\
									</div>\
								</div>\
							</td>\
							<td class="col-buy" >\
								<div class="inner">\
									<div class="inner-text">\
										<div class="number-c">\
											<strong>'+dateCurrencyBuy+'</strong> <i class="'+buy_icon+'"></i> <span class="increment-currensy">'+dateCurrencyBuyIncrement+'</span>\
										</div>\
									</div>\
								</div>\
							</td>\
							<td class="col-sale">\
								<div class="inner">\
									<div class="inner-text">\
										<div class="number-c">\
											<strong>'+dateCurrencySale+'</strong> <i class="'+sale_icon+'"></i> <span class="increment-currensy">'+dateCurrencySaleIncrement+'</span>\
										</div>\
									</div>\
								</div>	\
							</td>	\
							<td class="col-progressbar">\
								<div class="inner">\
									<div class="inner-text">\
										<div class="double-progressbar">\
											<div class="wrap-progressbar wrap-progressbar-gray-light">\
												<div data-value="'+dateBarLeft+'" class="progressbar"></div>\
											</div>\
											<div class="wrap-progressbar wrap-progressbar-gray">\
												<div data-value="'+datebarRight+'" class="progressbar"></div>\
											</div>\
										</div>\
									</div>\
								</div>	\
							</td>\
						</tr>');
				bank_index++;
				banks_table.find('tr:last-child').addClass(bank_status);
				return false;
			}
		});
	});
	fnProgressbar($('.progressbar'));
    showMoreBanksButton.switchToInactiveMode();
    sortTableBuySale();
}

function firstGraphic() {

        var delta = 0;
        switch(currency_delta) {
            case 'week': delta = 1; break;
            case 'month': delta = 3; break;
            case 'kvartal': delta = 9; break;
            case 'halfyear': delta = 18; break;
            case 'year': delta = 36; break;
        }

	if (document.all && (!document.documentMode || (document.documentMode && document.documentMode < 9))) {
		backgroundColorSetting = '#512da8';
	}
        else {
            backgroundColorSetting = 'transparent';
        }
	var windowWidth = $(window).width();
	if ( windowWidth > 980 ) {
		datas = datas_tank[currency_delta][current_currency]['tank'].slice(0, 10);

		marginLeftSetting = '103',
		labelsMarghin = 103,
		markerSheight = 28,
		markerSWidth = 28,
		MarghinRightSetting = '30',
                MarginTopSetting = '20',
		styleLabel = {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "300", "font-family": "Roboto Condensed", "textShadow": "0 0 0px contrast, 0 0 0px contrast"}
	}
	if ( 640 < windowWidth < 980 ) {
		datas = datas_tank[currency_delta][current_currency]['tank'].slice(0, 10);

		marginLeftSetting = '70';
                MarginTopSetting = '20',
		labelsMarghin = -70;
		markerSheight = 28,
		markerSWidth = 28,
		styleLabel = {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "300", "font-family": "Roboto Condensed", "textShadow": "0 0 0px contrast, 0 0 0px contrast"}
	} 
	if ( windowWidth < 640 ){
		datas = datas_tank[currency_delta][current_currency]['tank'].slice(3, 10);

		marginLeftSetting = '50';
		labelsMarghin = -50;
		markerSheight = 16,
		markerSWidth = 16,
		MarghinRightSetting = '5',
                MarginTopSetting = '10',
		styleLabel = {"display": "none"}
	}
	
    $('#container').highcharts({
		chart: {
            type: 'line',
			backgroundColor: backgroundColorSetting,
			marginLeft: marginLeftSetting,
			marginRight: MarghinRightSetting,
                        marginTop: MarginTopSetting
        },
        title: {
            text: ''
        },
		
        subtitle: {
            text: ''
        },
        xAxis: {
            gridLineWidth: 1,
			type: 'datetime',
			gridLineColor: '#6342b1',
			lineColor: '#6342b1',
			labels: {
				formatter: function () {
					return Highcharts.dateFormat('%a <br> %e.%b', this.value);
				},
				align: 'center',
                x: 0,
                y: 40
			}
        },
		yAxis: {
            gridLineWidth: 1,
			title: {
                text: ''
            },

			gridLineColor: '#6342b1',
			lineColor: '#6342b1',
			labels: {
				align: 'left',
                                x: labelsMarghin,
                                y: 5,
				style: {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "800", "font-family": "Roboto Condensed"}
			}
        },
		legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
		plotOptions: {
            series: {
                            dataLabels: {
                                                    align: 'left',
                                                    enabled: true,
                                                    shadow:true
                            },
                            color: '#866cc2',
                            dataLabels: {
                                            enabled: true,
                                            color: '#fff',
                                            y: -11,
                                            style:  styleLabel,
                                            crop: false,
                                            overflow: 'none'
                                    },
                            marker: {	
                                    symbol: 'url(./img/symbol.png)',
                                    width: markerSWidth,
                                    height: markerSheight
                }
				
            },
			line: {
					color: '#fff'
				}
        },
        tooltip: {
            style: {"display": "none"}
        },
        series: [{
            data: datas,
            pointStart: poinstart = Date.UTC(year, month-1, day, 0, 0, 0) - delta * (datas.length-1) * 24 * 3600 * 1000 ,
            pointInterval: delta * 24 * 3600 * 1000 
        }]
    });
    

}

/* chooseBanks */
function chooseBanks() {
	var grahp = $('.banks-show'),
		table = $('.table-bay-sale');

	$('.btn-light-small').hide();
	$('.table-bay-sale tbody').on('click','tr',function() {
		datasBuy.length = 0;
		datasSale.length = 0;
		$('.btn-light-small').show();
		var cur = $(this);
		var cur_id = cur.attr('data-id');
		$.each(arrayBanks,function(i,bank){
			if ( bank.id == cur_id ) {
				var bank_date = bank.date;
				$.each(bank_date,function(j,date){
					if ( date.dateCurrent == start_date ) {
						for(var k=j;k>j-11;k--) {
							datasBuy.unshift(parseFloat(arrayBanks[i].date[k].currencyBuy[current_currency]));
							datasSale.unshift(parseFloat(arrayBanks[i].date[k].currencySale[current_currency]));
							var cur_date = arrayBanks[i].date[k].dateCurrent;
							var cur_day = cur_date.substring(8, 10)-0;
							var cur_month = cur_date.substring(5, 7)-1;
							var cur_year = cur_date.substring(0, 4)-1;
							var dateObj = new Date(cur_year, cur_month, cur_day);
							var cur_day_number = dateObj.getDay();
							var cur_day_text;
							
							switch(cur_day_number){
								case 0:{
									cur_day_text = 'ПН';
									break;
								}
								case 1:{
									cur_day_text = 'ВТ';
									break;
								}
								case 2:{
									cur_day_text = 'СР';
									break;
								}
								case 3:{
									cur_day_text = 'ЧТ';
									break;
								}
								case 4:{
									cur_day_text = 'ПТ';
									break;
								}
								case 5:{
									cur_day_text = 'СБ';
									break;
								}
								case 6:{
									cur_day_text = 'НД';
									break;
								}
							}
							cur_day_text+="<br />";
							cur_month++;
							if ( cur_month < 10 )
								cur_month = '0'+cur_month;
							datasDates.unshift(cur_day_text+cur_day+'.'+cur_month);
							if ( k<=0 )
								return false;
						}
						return false;
					}
				});
				return false;
			}
		});
		
		$.each(datasBuy,function(i,cur){
			if ( i < max_small_count )
				datasBuySmall.push(cur);
			else
				return false;
		});
		
		$.each(datasSale,function(i,cur){
			if ( i < max_small_count )
				datasSaleSmall.push(cur);
			else
				return false;
		});
		
		$.each(datasDates,function(i,cur){
			if ( i < max_small_count )
				datasDatesSmall.push(cur);
			else
				return false;
		});

		//'SECOND GRAPHIC'
		
		SecondGraphic();
		setTimeout(function(){
			$(window).trigger('resize');
		},0);
		curText = cur.find('.banks-name').text();
		$('.banks .title-currency span').text(curText);	
		grahp.slideDown(300);
		table.addClass('hidden');
		cur.parents('.banks').find('.scroll-link-banks a').trigger('click');
	});
	
	function SecondGraphic(){
		var windowWidth = $(window).width();
		
		// sizes
		if ( windowWidth > 980 ) {
			pointIntervalSetttingSecondGfaf = 1 * 24 * 3600 * 1000;
			marginLeftSetting = '103',
			labelsMarghin = 103,
			markerSheight = 28,
			markerSWidth = 28,
			MarghinRightSetting = '30',
			styleLabel = {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "300", "font-family": "Roboto Condensed", "textShadow": "0 0 0px contrast, 0 0 0px contrast"};
			secondGrafBuyArray = datasBuy;
			secondGrafSaleArray = datasSale;
			secondGrafDatesArray = datasDates;
		}
		if ( 640 < windowWidth < 980 ) {
			pointIntervalSetttingSecondGfaf = 2 * 24 * 3600 * 1000;
			marginLeftSetting = '70';
			labelsMarghin = -70;
			markerSheight = 28,
			markerSWidth = 28,
			styleLabel = {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "300", "font-family": "Roboto Condensed", "textShadow": "0 0 0px contrast, 0 0 0px contrast"};
			secondGrafBuyArray = datasBuy;
			secondGrafSaleArray = datasSale;
			secondGrafDatesArray = datasDates;
		}
		if ( windowWidth < 640 ){
			pointIntervalSetttingSecondGfaf = 1 * 24 * 3600 * 1000;
			marginLeftSetting = '50';
			labelsMarghin = -50;
			markerSheight = 16,
			markerSWidth = 16,
			MarghinRightSetting = '5',
			styleLabel = {"display": "none"};
			secondGrafBuyArray = datasBuySmall;
			secondGrafSaleArray = datasSaleSmall;
			secondGrafDatesArray = datasDatesSmall;
		}
		
		$('.banks-graphics').highcharts({
			chart: {
				type: 'line',
				backgroundColor: '#448aff',
				marginLeft: marginLeftSetting,
				marginRight: '30'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: secondGrafDatesArray,
				gridLineWidth: 1,
				type: 'datetime',
				gridLineColor: '#5796ff',
				lineColor: '#5796ff',
				labels: {
					align: 'center',
					x: 0,
					y: 40
				}
			},
			yAxis: {
				gridLineWidth: 1,
				title: {
					text: ''
				},
				gridLineColor: '#5796ff',
				lineColor: '#5796ff',
				labels: {
					align: 'left',
					x: labelsMarghin,
					y: 5,
					style: {"color": "#fff", "opacity": "1", "fontSize": "16px", "fontWeight": "800", "font-family": "Roboto Condensed"}
				}
			},
			legend: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			plotOptions: {
				line: {
					color: '#fff'
				}
			},
			tooltip: {
				shared: true,
				snap: 0,
				crosshairs: true,
				headerFormat: '<small>{point.key}</small><table>',
				pointFormat: '<tr><td class="title-t">{series.name}: </td>' + '<td style="text-align: right"><b>{point.y}</b></td></tr>',
				footerFormat: '</table>',
				valueDecimals: 2,
				backgroundColor: 'transparent',
				borderWidth: 0,
				shadow: false,
				useHTML: true,
				style: {"color": "#373737", "opacity": "1", "fontSize": "15px", "fontWeight": "300", "font-family": "Roboto Condensed"}
			},
			
			series: [{
				data: secondGrafBuyArray,
				marker: {	
					symbol: 'url(./img/symbol-blue-2.png)',
					width: markerSWidth,
					height: markerSheight
				},
				name: '<span class="square-orange"></span>Продаж'
			}, {
				data: secondGrafSaleArray,
				marker: {	
					symbol: 'url(./img/symbol-blue.png)',
					width: markerSWidth,
					height: markerSheight
				},
				name: '<span class="square-gray"></span>Купівля'
			}]
		});
	}
	SecondGraphic();
	
	$(window).resize(function(){
		SecondGraphic();
	});
}
/* chooseBanks end */

/* backToBanks */
function backToBanks() {
	var grahp = $('.banks-show'),
		table = $('.table-bay-sale');
	$('.back-to-banks').on('click',function(e) {
		var cur = $(this);
		e.preventDefault();	
		cur.hide();
		$('.title-currency span').text('Банки');
		grahp.slideUp(200);
		table.removeClass('hidden');
	});	
}
/* backToBanks end */

/* positionEl */
function positionEl() {
    $('.banks-graphics').mousemove(function(e){
		var x1 = e.pageX - $(this).offset().left; 
		var y1 = e.pageY - $(this).offset().top;
		if (x1 < 200)  { 
			$('.highcharts-tooltip').addClass('left');
		} else {
			$('.highcharts-tooltip').removeClass('left');
		}
     }); 
}
/* positionEl end */

/* choose currency */
function chooseCurrency() {

	if ($('.choose-language-list').length){
		$( ".choose-language-list a" ).click(function(e) {
			$(this).addClass('active').parent().siblings().find('a').removeClass('active');
                        
			e.preventDefault();
                        
			current_currency = $(this).data('currency-id');
			var current_currency_code =  $(this).attr('href').replace('#','');

			$('.choose-currency-graph').removeClass('usd eur').addClass(current_currency_code);

			// ЗДЕСЬ ПРОИСХОДИТ НЕЧТО ПРЕКРАСНОЕ

			firstGraphic();
			$('.back-to-banks').trigger('click');
			graficCurrency(start_date);

			var selector_currency_value = current_currency + '-value';
			var selector_currency_diff =  current_currency + '-diff';

			$('.choose-currency-text-inner p').html(datas_tank[currency_delta][current_currency]['story']);

			$('.price-large').text($('.price-large').data(selector_currency_value));

			$('.table-today-info tbody td div').each(function() {

				if ($(this).data(selector_currency_value) == null) return;

				var i = '';
				var diff = $(this).data(selector_currency_diff);

				if (diff != null) {
					if (diff > 0) i_class = 'icon-arrow-yellow-top';
					if (diff < 0) i_class = 'icon-arrow-yellow-down';
					if (diff == 0) i_class = 'icon-arrow-medium';

					i = ' <i class="' + i_class + '"></i>';
				}

				$(this).find('span').html(
					$(this).data(selector_currency_value) + i);
				});

		});
                
	}
	
}
/* choose currency end */

/**
 * Working with the "show more banks" button
 */
var showMoreBanksButton = {

    $button: $('#show-more-banks'),
    $baySaleTable: $('#banks').find('.table-bay-sale'),
    activeButtonClassName: 'active',
    hiddenRowsClassName: 'tr.hidden',
    activeButtonText: 'Приховати',
    inactiveButtonText: 'Показати більше банків',

    init: function () {
        var that = this;

        this.$button.click(function (event) {
            event.preventDefault();
            that.actionClick();
        });
    },

    actionClick: function () {
        this.$baySaleTable.find(this.hiddenRowsClassName).fadeToggle();

        this.isActive() ? this.switchToInactiveMode() : this.switchToActiveMode();
    },

    isActive: function () {
        return this.$button.hasClass(this.activeButtonClassName);
    },

    switchToActiveMode: function () {
        this.$button.text(this.activeButtonText);
        this.$button.addClass(this.activeButtonClassName);
    },

    switchToInactiveMode: function () {
        this.$button.text(this.inactiveButtonText);
        this.$button.removeClass(this.activeButtonClassName);
    },
};

/* showMoreBanks */
function showMoreBanks() {
    showMoreBanksButton.init();
}
/* showMoreBanks end */

$(document).ready( function(){



	backToBanks();
	chooseBanks();
	scrollNavigation();
	prependElements();
	mobileMenuScroll();
	checkbox($('.def-check'));
	checkList($('.want-list, .checkbox-currency-list'));
	radiobox($('.def-radio'));	
	scrollLinks($('.scroll-link'), 0, 500);
	scrollLinks($('.navigation-list'), 0, 500);
	datepicker();
	showDrop();
	FnBurger();
	placeholder($('input[placeholder], textarea[placeholder]'));
	customInputs($('.wrap-input, [class^="wrap-input-"], [class*=" wrap-input-"]'));
	scrollbarVertical($('.scroll-pane'))
	scrollpaneFix($('.jspScrollable'));
	checkList($('.check-list'));
	radioList($('.radio-list'));
	fancyboxPopup($('.popup-open'), popupConfig);
	animationsBlocks($('.today-info, .choose-currency, .banks, .about'));
	positionEl();
	chooseCurrency();
	graficCurrency(start_date);
	firstGraphic();
    showMoreBanks();
	calculateMyMoney();
    sortTableCurrencyConverter();
});
$(window).resize(function(){
	prependElements();
	scrollbarVertical($('.scroll-pane'));
	firstGraphic();
});