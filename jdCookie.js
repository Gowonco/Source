let CookieJDs = [
  '__jdc=76161171; __jdv=76161171|cn.bing.com|-|referral|-|1622737340285; __jdu=1622737340284425854305; areaId=12; ipLoc-djd=12-988-994-0; shshshfpa=fed521ce-2297-3776-e000-ae405c978c7a-1622737349; shshshfpb=me8sR0wBpH90BCC3YCkF8Yw==; 3AB9D23F7A4B3C9B=3P76Z5HRJQHAS5GNNHDBSHKSGWTMEAOOKQUICMK3GRHY6K2KOFHWW43P3MI7BYM6YVPZY64TFTWKH2HBEDAL6H6M5I; mba_muid=1622737340284425854305; jcap_dvzw_fp=G21EfOZuvYqjdMkp-7XGIbW9ggaS-stbV5VoF-DVEhfAay1G3K21RKHbIVLk9fMS-xS4_w==; whwswswws=; wxa_level=1; cid=9; jxsid=16227380747145768316; webp=1; PPRD_P=UUID.1622737340284425854305; visitkey=44592692776291798; sc_width=1536; retina=1; autoOpenApp_downCloseDate_auto=1622738693106_10800000; TrackerID=hpjtSzDj078cAQvLbSSW3AZTQARK7MCNV7pr1oNO_SJME7oAqoSTObzz1XhGQK0o55eWlY9apyMRDsr4FdraL34h1-AleLRuPVVR_iY01H14fxb30a6lyrqDxCJG-hL0; pt_key=AAJguQc0ADDLULr29TRRH1vT7VQn_3pGMmQoCU-_Ztyjus1U22D1HRcSznjAPTbKCf1WvALghPQ; pt_pin=倾城丶hz; pt_token=4g63km04; pwdt_id=倾城丶hz; sfstoken=tk01md4d91c39a8sMiszeDNraWhCJuofR/y7V0WN+EfOTexRWWflOz+idpe3uwTlYqdJGHD8KbGRWBmIWPA1pK3E3H5o; wqmnx1=MDEyNjM3M3BtLkpvaW4mODQxMG81bmQudWk1cGkzTWUpZTQgIC8gLjNGN2YyMUVPSCg=; __wga=1622738748889.1622738075952.1622738075952.1622738075952.3.1; jxsid_s_t=1622738748972; jxsid_s_u=https://home.m.jd.com/myJd/newhome.action; shshshfp=cbff190b5600b08b8e96e58c551ecfe2; __jda=76161171.1622737340284425854305.1622737340.1622737340.1622741399.2; __jdb=76161171.2.1622737340284425854305|2.1622741399; mba_sid=16227413994556403243007175912.2; __jd_ref_cls=JingDou_NewHome_Sign'
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
  console.log("yes!!");
}console.log("no!!");
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
