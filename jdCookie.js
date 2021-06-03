let CookieJDs = [
  '__jda=76161171.1622737340284425854305.1622737340.1622737340.1622737340.1; __jdc=76161171; __jdv=76161171|cn.bing.com|-|referral|-|1622737340285; __jdu=1622737340284425854305; areaId=12; ipLoc-djd=12-988-994-0; shshshfpa=fed521ce-2297-3776-e000-ae405c978c7a-1622737349; shshshfpb=me8sR0wBpH90BCC3YCkF8Yw%3D%3D; 3AB9D23F7A4B3C9B=3P76Z5HRJQHAS5GNNHDBSHKSGWTMEAOOKQUICMK3GRHY6K2KOFHWW43P3MI7BYM6YVPZY64TFTWKH2HBEDAL6H6M5I; mba_muid=1622737340284425854305; TrackerID=K5ACVxaykYYaZgNORcVjt5S1JnsEClIjQT_s4Ntscp7eHwRkDc_8TX3_UjbeIE1PLL8UyCMf6wCsVGxGsreperD94T05trTLmUmNocBc6OM2HsmyABqgqKl_n8YVkOcK; pt_key=AAJguQSUADCgZ9vtmOty1Uj2f0P-IgfTKesPn4agFmv5QrVrWdOBOg1DI9De7Y9BUa4EAINHGY4; pt_pin=jd_5a1846ab009ec; pt_token=hvjgzk18; pwdt_id=jd_5a1846ab009ec; sfstoken=tk01mbb741c92a8sMisxKzNiYlN2y0DM5DGcibE4VWkiLP7Fp3ssFPvPa98c0kriDBBqsfKpYdCBU8jw9tOYwXMNUtw/; wxa_level=1; retina=0; cid=9; wqmnx1=MDEyNjM1MXQvZWQvL29jP2UyPW9hIGROLmkgIGVpNyhMa2NDZTAyU2kuZC40M3IyZi0yS1dVSSMmKCk%3D; jxsid=16227380747145768316; webp=1; __jdb=76161171.3.1622737340284425854305|1.1622737340; mba_sid=16227380444398269644359411836.2; __wga=1622738075952.1622738075952.1622738075952.1622738075952.1.1; PPRD_P=UUID.1622737340284425854305; jxsid_s_t=1622738076070; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; visitkey=44592692776291798; sc_width=1536; shshshfp=0d9f140ff505c36b6c189e611c7748af; shshshsID=5b58f90af3edb0b9580307ca67cd2a8e_3_1622738081267'
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
