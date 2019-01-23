<!DOCTYPE HTML>
<html lang="uk">
<head>
	<meta charset="utf-8">
	<title>Гривня Тудей | Курс гривні, долара та євро</title>
	<meta name="keywords" content="курс валют, курс гривні, курс долара, курс євро, курс банків, міжбанк, чорний ринок, конвертер валют, історія курсу">
	<meta name="description" content="Стежте щодня за курсом гривні по відношенню до долара та євро. Актуальний курс валют банків України та міжбанку, аналітичні інструменти на кожен день">
	<link rel="shortcut icon" href="img/favicon.ico" />

	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<!-- Media queries -->
	<meta name="viewport" content="width=device-width, target-densitydpi=device-dpi, user-scalable=yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="format-detection" content="telephone=no">

	<!-- FAVICON -->
	<link href="favicon.ico" rel="shortcut icon">

	<!-- CSS LINKS -->
	<!-- Widgets style -->
	<link href="css/widgets.css" rel="stylesheet" media="screen">
	<!-- Main style -->
	<link href="css/all.css?v2" rel="stylesheet" media="screen">
	<!--[if gte IE 9]><link rel="stylesheet" href="css/ie9.css" media="screen, projection"><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="css/ie8.css" media="screen, projection"><![endif]-->
	<!--[if lte IE 7]><link rel="stylesheet" href="css/ie7.css" media="screen, projection"><![endif]-->
	<!-- Media queries style -->
	<link href="css/mq-all.css" rel="stylesheet" media="screen">

	<!-- Social -->
	<meta property="og:title" content="Гривня Тудей" />
	<meta property="og:site_name" content="Гривня Тудей" />
	<meta property="og:image" content="http://hryvna.today/img/preview.png" />
	<meta property="og:url" content="http://hryvna.today" />
	<meta property="og:see_also" content="http://dontgiveafish.com" />

</head>
<body>
<!-- wrapper -->
<div class="wrapper">
	<!-- header -->
	<header class="header active-h" role="banner">
		<div class="header-gradient"></div>
		<div class="container">
			<!-- header-right -->
			<div class="header-right">
				<!-- share -->
				<div class="share">
					<a class="addthis_button" href="javascript: void();"><i class="icon-share"></i><span>Поділитися</span></a>
				</div>
				<!-- share end -->				
				<!-- choose-language -->
				<div class="choose-language">
					<ul class="choose-language-list">
						{{foreach from=$currencies key=currency_id item=currency name=loop}}
							<li><a href="#{{$currency.code|strtolower}}"{{if $smarty.foreach.loop.first}} class="active alert"{{/if}} data-currency-id="{{$currency.id}}">{{$currency.code}}</a></li>
						{{/foreach}}
					</ul>
				</div>
				<!-- choose-language end -->
			</div>
			<!-- header-right end -->
			<!-- navigation -->
			<nav class="navigation">
				<div class="navigation-inner">
					<div class="clearfix">
						<div class="navigation-title">
							<i class="icon-menu"><span></span><span></span><span class="last"></span></i>
							<!-- header logo -->
							<h1 class="logo">Hryvna Today</h1>
						</div>
						<!-- header logo end -->
					</div>
					<div class="hidden-menu">
						<ul class="navigation-list">
							<li><a href="#today-info">Гривня сьогодні</a></li>
							<li><a href="#choose-currency">Гривня за тиждень</a></li>
							<li><a href="#banks">Банки сьогодні</a></li>
							<li><a href="#about">Про проект</a></li>
						</ul>
						<a href="#currency-converter" class="btn-def popup-open">Конвертер валют</a>
					</div>
				</div>
			</nav>
			<!-- navigation end -->
			<div class="skin-menu"></div>
		</div>
	</header>
	<!-- header end -->
	
	<!-- content -->
	<div class="content" role="main">
		<!-- today-info -->
		<section class="today-info" id="today-info" data-color="header-today-info">
			<div class="container">
				<div class="title"><div class="title-text"><div class="title-currency">Гривня</div> сьогодні</div></div>
				<div class="price-large"
					{{foreach from=$currencies key=currency_id item=currency name=loop}}
						data-{{$currency_id}}-value="{{$review[$currency_id].avg.avg.value|string_format:"%.2f"}}"
					{{/foreach}}
				>
					{{$review[$base_currency_id].avg.avg.value|string_format:"%.2f"}}
				</div>
				<!-- table-today-info -->
				<table class="table-today-info">
					<thead>
						<tr>
							{{foreach from=$bank_types key=alias item=title name=loop}}
							<th{{if $smarty.foreach.loop.first}} colspan="2"{{/if}}><div><span>{{$title}}</span></div></th>
							{{/foreach}}
						</tr>
					</thead>
					<tbody>
					{{foreach from=['buy' => 'Купівля', 'sale' => 'Продаж'] key=operation_alias item=operation_title}}
						<tr>
							<td><div><span>{{$operation_title}}</span></div></td>
							{{foreach from=$bank_types key=alias item=title name=loop}}

									<td>
										<div

												{{foreach from=$currencies key=currency_id item=currency}}
													{{assign var=rate value=$review[$currency_id][$alias][$operation_alias]}}
													data-{{$currency_id}}-value="{{if !empty($rate)}}{{$rate.value|string_format:"%.2f"}}{{else}}-{{/if}}"
													data-{{$currency_id}}-diff="{{if !empty($rate)}}{{$rate.diff|string_format:"%.2f"}}{{else}}-{{/if}}"
												{{/foreach}}
										>

												{{assign var=rate value=$review[$base_currency_id][$alias][$operation_alias]}}
												<span>{{$rate.value|string_format:"%.2f"}}
														{{if $rate.diff > 0}}
															<i class="icon-arrow-yellow-top"></i>
														{{elseif $rate.diff < 0}}
															<i class="icon-arrow-yellow-down"></i>
														{{else}}
															<i class="icon-arrow-medium"></i>
														{{/if}}
												</span>
										</div>
									</td>

							{{/foreach}}
						</tr>
					{{/foreach}}
					</tbody>
				</table>
				<!-- table-today-info end -->
				<div class="scroll-link">
					<a href="#choose-currency" class="icon-arrow-bottom"></a>
				</div>
			</div>
		</section>
		<!-- today-info end -->

		<!-- choose-currency -->
		<section class="choose-currency" id="choose-currency" data-color="header-choose-currency">
			<div class="container">
				<div class="top-text">
					<div class="title title-gray">
						<div class="title-text">
							<div class="title-currency">Гривня</div>за
							<!-- drop -->
							<div class="drop">
								<div class="drop-title">тиждень</div>
								<div class="drop-content">
									<div class="drop-content-inner">
										<ul class="drop-content-list">
											<li><a href="#week" class="current">Тиждень</a></li>
											<li><a href="#month">Місяць</a></li>
											<li><a href="#kvartal">Квартал</a></li>
											<li><a href="#halfyear">Півроку</a></li>
											<li><a href="#year">Рік</a></li>
										</ul>
									</div>
								</div>
							</div>
							<!-- drop end -->
						</div>
					</div>
					<div class="choose-currency-text-inner">
						<p>{{$stories[$base_currency_id].week}}</p>
					</div>
				</div>
				<!-- add class usd or eur -->
				<div class="choose-currency-graph usd">
					<div id="container"></div>
				</div>
			</div>
		</section>
		<!-- choose-currency end -->
		<!-- banks -->
		<section class="banks" id="banks" data-color="header-banks">
			<div class="container">
				<div class="title title-gray-light">
					<div class="title-text">
						<div class="title-currency"><span>Банки</span><a href="index.html#" class="btn-light-small back-to-banks">Повернутися до списку банків</a></div>за <span class="datepicker-btn"><span class="datepicker-btn-value">Сьогодні</span><input type="text" class="datepicker" value="{{$today->format("d.m.Y")}}" /></span>
					</div>
				</div>
				<div class="banks-show hidden">
					<div class="banks-graphics" ></div>
				</div>
				<!-- bay-sale -->
				<table class="table-bay-sale">
					<thead>
						<tr>
							<th><span class="title-sort double-title-sort">Банки</span></th>
							<th class="col-buy"><span class="title-sort double-title-sort">Купівля</span></th>
							<th class="col-sale"><span class="title-sort double-title-sort">Продаж</span></th>
							<th class="col-hint"></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				<!-- bay-sale end -->
				<a href="" class="btn-light show-more-banks" id="show-more-banks">Показати більше банків</a>
				<div class="scroll-link scroll-link-banks"><a href="#banks">sdf</a></div>
			</div>
		</section>
		<!-- banks end -->
		
                
                
		<!-- about -->
		<section class="about" id="about" data-color="header-about">
			<div class="container">
				<div class="title title-yellow">
					<div class="title-text">
						Кілька слів<br> про проект
					</div>
				</div>
				<!-- columns -->
				<div class="columns">
					<div class="column">
						<div class="column-inner">
							<div class="about-text">
								<p>Гривня Тудей – невеликий волонтерський проект, що має за мету детально розповісти про актуальний <strong>курс гривні</strong>, використовуючи <strong>просту і зрозумілу</strong> інфографіку. Доречі, ми є на <a href="https://github.com/dontgiveafish/hryvna-today">гітхабі</a>!</p>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="column-inner">
							<!-- subscribe -->
							<div class="subscribe">
								<h3>Підпишіться на новини</h3>
								<h4>Hryvna Today</h4>
								<p>Підпишіться, щоб отримувати інформацію про актуальний курс гривні на пошту або у твітері кожного дня біля 15:00.</p>
								<!-- subscribe-form -->
								<div class="subscribe-form">
									<form action="//today.us10.list-manage.com/subscribe/post?u=a038c94c64fe7c80500dce96d&amp;id=c957293d0f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
										<div class="btn-blue">	
											Підписатись
											<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
										</div>
										<div class="wrap-input">
											<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Ваша електронна пошта" required>
										</div>
										<input type="hidden" name="b_a038c94c64fe7c80500dce96d_c957293d0f" tabindex="-1" value="">
									</form>
								</div>
								<!-- subscribe-form end -->
								<div class="social">
									<ul class="social-list">
										<li><a href="https://twitter.com/hryvna_today" class="soc-icon-twitter"></a></li>
										<li><a href="https://www.facebook.com/hryvna" class="soc-icon-facebook"></a></li>
										<li><a href="https://telegram.me/HryvnaTodayBot" class="soc-icon-telegram"></a></li>
									</ul>
								</div>
							</div>
							<!-- subscribe end -->
						</div>
					</div>
				</div>
				<!-- columns end -->
			</div>
		</section>
		<!-- about end -->
		<div class="footer-spacer"></div>
	</div>
	<!-- content end -->
</div>
<!-- wrapper end -->

<!-- footer -->
<footer class="footer" role="contentinfo">
	<div class="footer-inner">
		<div class="container">
			<p class="copyright">Гривня Тудей  &#169; {{$current_year}}</p>
			<div class="studio">Зроблено в <a href="http://dontgiveafish.com">Don’t give a fish</a></div>
		</div>
	</div>
</footer>
<!-- footer end -->

<!-- popup -->
<div class="popup currency-converter" id="currency-converter">
	<div class="popup-inner">

		<div class="popup-title">
			<h2>Конвертер валют</h2>
		</div>
		<div class="popup-title-second">
			<div class="want">
				<div class="want-title">Я хочу</div>
				<ul class="want-list">
					<li class="active"><label><input type="radio" name="buy" value="buy" checked="checked" class="def-radio" /><em>Купити</em></label></li>
					<li><label><input type="radio" name="buy" value="sale" class="def-radio" /><em>Продати</em></label></li>
				</ul>
			</div>
			<div class="sum-currency">
				<div class="sum-currency-title">Суму</div>
				<div class="wrap-input">
					<input type="number" id="converter-sum" value="100" />
				</div>
			</div>
			<ul class="checkbox-currency-list">
				<li class="active">
					<label>
						<input type="radio" name="currency" class="def-check" value="usd" checked="checked" />
						USD
					</label>
				</li>
				<li>
					<label>
						<input type="radio" name="currency" class="def-check" value="eur" />
						EUR
					</label>
				</li>
				<li>
					<label>	
						<input type="radio" name="currency" class="def-check" value="uah" />
						UAH
					</label>
				</li>
			</ul>
		</div>
		<!-- popup-content -->
		<div class="popup-content">
			<div class="scroll-pane">
				<div class="scroll-inner">
					<table class="table-currency-converter">
						<thead>
							<tr>
								<th>
									<div>
										<span class="title-sort double-title-sort">Банки</span>
									</div>
								</th>
								<th class="col-uah">
									<div>
										<span class="title-sort double-title-sort">UAH</span>
									</div>
								</th>
								<th class="col-eur">
									<div>
										<span class="title-sort double-title-sort">EUR</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{{foreach from=$converter_exchanges key=bank_id item=bank}}
							<tr
								{{foreach from=$currencies key=currency_id item=currency}}
									{{foreach from=['buy', 'sale'] item=operation}}
										data-{{$currency.code|strtolower}}-{{$operation}}="{{$converter_exchanges[$bank_id]['values'][$currency_id][$operation]}}"
									{{/foreach}}
								{{/foreach}}
							>
								<td>{{$converter_exchanges[$bank_id].title}}</td>

								<td class="col-uah"></td>
								<td class="col-eur"></td>
							</tr>
							{{/foreach}}

						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- popup-content end -->
	</div>
</div>
<!-- popup end -->

<!-- SCRIPT LINKS -->
<!-- Jquery library -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Addthis -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-551c75cb498bb202" async="async"></script>
<!-- UI -->
<script src="js/jquery-ui.min.js"></script>	
<!-- Widgets -->
<script src="js/widgets.js"></script>
<!-- Main functions -->
<script src="js/functions.js?v6"></script>
<!-- Data -->
<script src="js/data.js?{{$today->getTimestamp()}}"></script>

{{if $metrics}}
<!-- Hello Google -->
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-30640626-3', 'auto');
	ga('send', 'pageview');
</script>
<!-- Hello Heatmap -->
<script type="text/javascript">
(function() {
var hm = document.createElement('script'); hm.type ='text/javascript'; hm.async = true;
hm.src = ('++u-heatmap-it+log-js').replace(/[+]/g,'/').replace(/-/g,'.');
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hm, s);
})();
</script>
{{/if}}


</body>
</html>
