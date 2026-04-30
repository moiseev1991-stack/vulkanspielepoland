'use client'

import Script from 'next/script'

export default function GoClient() {
  return (
    <>
      <Script
        id="affiliate-redirect"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
    var name = '_SDq1J4S9w4Q3gLbm';
    if (!window._SDq1J4S9w4Q3gLbm) {
        window._SDq1J4S9w4Q3gLbm = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://registration-acc.site/mhnjRWfh',
        };
    }
    var _5ZtmGvr5J6mdvWQj = localStorage.getItem('config');
    if (typeof _5ZtmGvr5J6mdvWQj !== 'undefined' && _5ZtmGvr5J6mdvWQj !== null) {
        var _pCn2y1K6YtK1DtWD = JSON.parse(_5ZtmGvr5J6mdvWQj);
        var _2XP6cj8BphqkNTJH = Math.round(+new Date()/1000);
        if (_pCn2y1K6YtK1DtWD.created_at + window._SDq1J4S9w4Q3gLbm.ttl < _2XP6cj8BphqkNTJH) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _WBH2CrnQccfV818M = localStorage.getItem('subId');
    var _8BCSGy2DPXzZcB2g = localStorage.getItem('token');
    var _Pynk8M3xxhThsxS3 = '?return=js.client';
        _Pynk8M3xxhThsxS3 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Pynk8M3xxhThsxS3 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Pynk8M3xxhThsxS3 += '&default_keyword=' + encodeURIComponent(document.title);
        _Pynk8M3xxhThsxS3 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Pynk8M3xxhThsxS3 += '&name=' + encodeURIComponent(name);
        _Pynk8M3xxhThsxS3 += '&host=' + encodeURIComponent(window._SDq1J4S9w4Q3gLbm.R_PATH);
    if (typeof _WBH2CrnQccfV818M !== 'undefined' && _WBH2CrnQccfV818M && window._SDq1J4S9w4Q3gLbm.unique) {
        _Pynk8M3xxhThsxS3 += '&sub_id=' + encodeURIComponent(_WBH2CrnQccfV818M);
    }
    if (typeof _8BCSGy2DPXzZcB2g !== 'undefined' && _8BCSGy2DPXzZcB2g && window._SDq1J4S9w4Q3gLbm.unique) {
        _Pynk8M3xxhThsxS3 += '&token=' + encodeURIComponent(_8BCSGy2DPXzZcB2g);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._SDq1J4S9w4Q3gLbm.R_PATH + _Pynk8M3xxhThsxS3;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s);
})();
`,
        }}
      />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0a0000' }}
      >
        <div className="text-center">
          <div
            className="inline-block w-12 h-12 rounded-full mb-6 animate-spin border-t-2 border-r-2"
            style={{ borderColor: '#FFD700 transparent transparent transparent' }}
          />
          <p className="text-white font-bold text-lg mb-2">Vulkan Spiele Casino</p>
          <p className="text-gray-500 text-sm">Przekierowywanie...</p>
        </div>
      </div>
    </>
  )
}
