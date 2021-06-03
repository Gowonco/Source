let CookieJDs = [
  '$logid=1622737638729.190924573$wq_unionid=$uuid=16227373544021168098124$jd_uuid=16227373544021168098124$chan_type=6$net_type=99$pinid=$wid=$openid=$screen=400x700$color=24-bit$os=android/8.0.0$browser=JDAPP/0$device_type=android$fst=1622737410048$pst=1622737410048$vct=1622737410048$visit_times=3$jdv=76161171|direct|-|none|-|1622737354404$unpl=$clientid=$wxapp_type=$appkey=$wxapp_uuid=$user_type_gx=$pin_status=$wq_uits=$appversion=$oaid=$aid=$os_brand=$vs=wa$wxNickName=$wxAvatarUrl=$wxuser_info=___$__jxjda=$fd=jdw'
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
