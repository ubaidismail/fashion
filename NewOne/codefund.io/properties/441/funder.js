(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"bottom-bar","theme":"light","fallback":false,"urls":{"impression":"https://codefund.io/display/c632d49f-ff57-4cd7-9f26-cf8735e37a2a.gif","campaign":"https://codefund.io/impressions/c632d49f-ff57-4cd7-9f26-cf8735e37a2a/click?campaign_id=941\u0026creative_id=272\u0026property_id=441\u0026template=bottom-bar\u0026theme=light","poweredBy":"https://codefund.io/invite/uaY8mStZDXQ","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.io/impressions/c632d49f-ff57-4cd7-9f26-cf8735e37a2a/uplift?advertiser_id=907"},"creative":{"name":"CircleCI","headline":"CircleCI","body":"⚡️Automate your development process quickly, safely, and at scale.","cta":"Start Building","imageUrls":{"icon":"https://cdn2.codefund.io/9BiMtCudjgiRyCzFGZVuvjP2","small":"https://cdn2.codefund.io/DCSnADHtuBaKXEYQa51WBcYw","large":"https://cdn2.codefund.io/cQYSXXU13rPyd2sGfc19xC6S","wide":"https://cdn2.codefund.io/Ci4dB3iQt2onfMV4GLoDFmiM"}}})
  }

  const codefundThemeName = 'light'
  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId) && codefundThemeName !== 'unstyled') {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.io/packs/css/code_fund_ad-a233c80b.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.io/packs/js/code_fund_ad-ebfaf14f54241ab3fc1f.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
