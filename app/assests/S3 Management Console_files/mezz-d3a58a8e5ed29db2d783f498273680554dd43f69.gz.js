if(!window.AWSC){AWSC={}}AWSC.PanoramaTrackerInit=(function(){var n="panorama",o=".prod.pw.analytics.console.aws.a2z.com",d=".prod.pr.analytics.console.aws.a2z.com",m="/panoramawhitelist",f="us-east-1",e="web",a=3,g=1000,j=2000;var k=function(t,q,r,p){if(!t||!q||!r||!p){return false}var u=new XMLHttpRequest();var s="https://"+f+o+m+"?modality="+r+"&identifier="+q+"&region="+t;u.open("GET",s);u.onreadystatechange=function(){if(u.readyState===4&&u.status===200){var v=JSON.parse(u.response);if(v.isWhitelisted){c(t,window,document,"script",p,n)}}else{if(u.readyState===4&&(u.status>=400||u.status===0)){if(a>0){a--;u.abort();setTimeout(function(){k(t,q,r,p)},g)}}}};u.timeout=j;u.send();return false};var c=function(v,x,s,y,q,t,z,u){if(!x[t]){x.GlobalSnowplowNamespace=x.GlobalSnowplowNamespace||[];x.GlobalSnowplowNamespace.push(t);x[t]=function(){(x[t].q=x[t].q||[]).push(arguments)};x[t].q=x[t].q||[];x[t].trackCustomEvent=function(){[].unshift.call(arguments,"trackCustomEvent");x[t].apply(this,arguments)};z=s.createElement(y);u=s.getElementsByTagName(y)[0];z.async=1;z.src=q;u.parentNode.insertBefore(z,u)}window.panorama("newTracker","cf","//"+v+d,{appId:"aws-console",cookieDomain:"amazon.com",pluginsEnabledByDefault:true,whitelist:false})};if(AWSC.NavFAC){AWSC.NavFAC.loadFeatures();if(AWSC.NavFAC.isFeatureEnabled(n)&&ConsoleNavService&&ConsoleNavService.Model){var i=ConsoleNavService.Model.currentRegionId||f,h=ConsoleNavService.Model.currentService.id,l=e,b=document.currentScript.getAttribute("data-url");k(i,h,l,b)}}})();