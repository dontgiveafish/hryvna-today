<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>

        {{function name=diff}}
        {{$value.value|string_format:"%.2f"}}
        {{if $value.diff > 0}}
            <img style="vertical-align:top; margin:3px 0px 0px 6px;" alt="up" src="http://hryvna.today/img/letter/up.png" />
        {{elseif $value.diff < 0}}
            <img style="vertical-align:top; margin:3px 0px 0px 6px;" alt="down" src="http://hryvna.today/img/letter/down.png" />
        {{else}}
            <img style="vertical-align:top; margin:6px 0px 0px 6px;" alt="stable" src="http://hryvna.today/img/letter/stable.png" />
        {{/if}}

        {{/function}}
    
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title>Mail</title>
	<style type="text/css">
		body, *{
			margin:0;
			padding:0;			
		}		
	</style>

</head>
<body style="background-color:#fff;">
	<div style="width:784px; margin:0px auto; font-size:13px; line-height:30px; font-family: Arial, Tahoma, sans-serif; color:#424242;">
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<!-- header -->			
			<thead>
				<tr>
					<th valign="top" align="left" style="padding:0px 0px 0px 0px;" ><a href="http://hryvna.today"><img style="margin:0 0 0 0; vertical-align:top;" width="784" height="75" alt="image" src="http://hryvna.today/img/letter/header.jpeg" /></a></th>
				</tr>
			</thead>
			<!-- header end -->
			<!-- content -->
			<tbody>
				<tr>
					<td valign="top" align="left" style="padding:34px 40px 0px 40px;">
						<h2 style="color: #424242; font-size: 17px; font-weight: bold; line-height: 30px; padding: 0 0 22px;">Доброго дня!</h2>
						<p style="padding:0px 0px 30px 0px;">{{$story}}</p>
						<p style="padding:0px 0px 30px 0px;">Більш детальна інформація, як завжди, на сайті <a style="color:#303f9f; text-decoration:underline;" href="http://hryvna.today">Гривня Тудей</a>.</p>
						<p style="padding:0px 0px 60px 0px;">Доречі, ми додали Монобанк до списку банків!</p>
						<div style="width:109px; height:3px; background-color:#448aff; margin:0px auto 25px;"></div>
						<p style="padding:0px 0px 29px 0px; font-size:23px; line-height:30px; font-weight:bold; text-align:center;">Курс гривні {{$today->format("d.m.Y")}}, станом на {{$today->format("H:i")}}</p>
						<p style="padding:0px 0px 67px 0px; font-size:100px; line-height:101px; font-weight:bold; color:#448aff; text-align:center;">{{$review.avg.avg.value|string_format:"%.2f"}}</p>
						<!-- table -->
						<table border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse: collapse; margin:0 0 57px 0;">
							<thead>
								<tr>
									<th valign="top" align="right" style="padding:0px 50px 9px 10px; font-size:15px; line-height:20px; font-weight:300; width:136px;">&nbsp;</th>
									<th valign="top" align="left" style="padding:0px 0px 9px 10px; font-size:15px; line-height:20px; font-weight:300; width:103px;">НБУ</th>
									<th valign="top" align="left" style="padding:0px 0px 9px 10px; font-size:15px; line-height:20px; font-weight:300; width:107px;">Банки</th>
									<th valign="top" align="left" style="padding:0px 0px 9px 10px; font-size:15px; line-height:20px; font-weight:300; width:106px;">Міжбанк</th>
									<th valign="top" align="left" style="padding:0px 0px 9px 10px; font-size:15px; line-height:20px; font-weight:300;">Міняйли</th>
								</tr>
							</thead>							
							<tbody>
								<tr>
									<td valign="top" align="right" style="padding:19px 50px 19px 10px; font-size:15px; line-height:20px; font-weight:400; width:136px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">Купівля</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:103px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.government.avg}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:107px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.commercial.buy}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:106px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.interbank.buy}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.black.buy}}</td>
								</tr>
								<tr>
									<td valign="top" align="right" style="padding:19px 50px 19px 10px; font-size:15px; line-height:20px; font-weight:400; width:136px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">Продаж</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:103px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.government.avg}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:107px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.commercial.sale}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; width:106px; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.interbank.sale}}</td>
									<td valign="top" align="left" style="padding:19px 0px 19px 10px; font-size:15px; line-height:20px; font-weight:700; border-top:1px solid #ededed; border-bottom:1px solid #ededed;">{{diff value=$review.black.sale}}</td>
								</tr>
							</tbody>
						</table>
						<!-- table end -->
						<p style="color: #a8a8a8; font-size: 17px; font-weight: 300; line-height: 30px; padding: 0 0 19px; text-align:center;">Слідкуйте за гривнею у соцмережах</p>
						<p style="text-align:center; padding: 0 0 19px;">
							<a href="https://twitter.com/hryvna_today"><img style="margin:0 7px;" alt="image"  src="http://hryvna.today/img/letter/twitter.png?v2" /></a>
							<a href="https://facebook.com/hryvna"><img style="margin:0 7px;" alt="image"  src="http://hryvna.today/img/letter/facebook.png?v2" /></a>
							<a href="https://telegram.me/HryvnaTodayBot"><img style="margin:0 7px;" alt="image"  src="http://hryvna.today/img/letter/telegram.png?v2" /></a>
						</p>
					</td>
				</tr>
			</tbody>
			<!-- content end -->
		</table>	
	</div>
</body>
</html>