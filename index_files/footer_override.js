const legalUrls={wellhello:{members_link:"https://wellhello.com",support_link:"https://wellhello.com/site/contactus",privacy_link:"https://wellhello.com/privacy",terms_link:"https://wellhello.com/terms",dmca_link:"https://wellhello.com/dmca"},myhornysingles:{members_link:"https://myhornysingles.com/",support_link:"https://myhornysingles.com/site/contactus",privacy_link:"https://myhornysingles.com/privacy",terms_link:"https://myhornysingles.com/terms",dmca_link:"https://myhornysingles.com/dmca"},lustseek:{members_link:"https://lustseek.com/",support_link:"https://lustseek.com/site/contactus",privacy_link:"https://lustseek.com/privacy",terms_link:"https://lustseek.com/terms",dmca_link:"https://lustseek.com/dmca"},yoursecrethookup:{members_link:"https://yoursecrethookup.com",support_link:"https://yoursecrethookup.com/site/contactus",privacy_link:"https://yoursecrethookup.com/privacy",terms_link:"https://yoursecrethookup.com/terms",dmca_link:"https://yoursecrethookup.com/dmca"},yourlocalhookup:{members_link:"https://yourlocalhookup.com",support_link:"https://yourlocalhookup.com/site/contactus",privacy_link:"https://yourlocalhookup.com/privacy",terms_link:"https://yourlocalhookup.com/terms",dmca_link:"https://yourlocalhookup.com/dmca"},hushlove:{members_link:"https://hushlove.com",support_link:"https://hushlove.com/site/contactus",privacy_link:"https://hushlove.com/privacy",terms_link:"https://hushlove.com/terms",dmca_link:"https://hushlove.com/dmca"},comewithyou:{members_link:"https://comewithyou.com",support_link:"https://comewithyou.com/site/contactus",privacy_link:"https://comewithyou.com/privacy",terms_link:"https://comewithyou.com/terms",dmca_link:"https://comewithyou.com/dmca"},comewithdaddy:{members_link:"https://comewithdaddy.com/",support_link:"https://comewithdaddy.com/site/contactus",privacy_link:"https://comewithdaddy.com/privacy",terms_link:"https://comewithdaddy.com/terms",dmca_link:"https://comewithdaddy.com/dmca"},scream18:{members_link:"http://scream18.com/start/",support_link:"http://scream18.com/support/",privacy_link:"http://scream18.com/legal.php",terms_link:"http://scream18.com/legal.php",link_2257:"http://scream18.com/2257.php",dmca_link:"http://scream18.com/dmca.php"},pornvault:{members_link:"http://pornvault.com/start/",support_link:"http://pornvault.com/support/",privacy_link:"http://pornvault.com/legal.php",terms_link:"http://pornvault.com/legal.php",link_2257:"http://pornvault.com/2257.php",dmca_link:"http://pornvault.com/dmca.php"},"18yoga":{members_link:"http://18yoga.com/login/",support_link:"http://18yoga.com/support",privacy_link:"http://18yoga.com/privacy",terms_link:"http://18yoga.com/terms",link_2257:"http://18yoga.com/2257"},badoinkvr:{members_link:"http://badoinkvr.com/login/",support_link:"http://badoinkvr.com/support/",privacy_link:"http://badoinkvr.com/privacy",terms_link:"http://badoinkvr.com/terms",link_2257:"http://badoinkvr.com/2257",dmca_link:"http://badoinkvr.com/DMCA/"},xposure:{members_link:"http://members.badoink.com/xposure/",support_link:"http://wwww.badoink.com/support/",privacy_link:"http://www.badoink.com/privacy.html",terms_link:"http://www.badoink.com/terms.html",dmca_link:"http://www.badoink.com/DMCA.html",link_2257:"http://www.badoink.com/2257_info.html"},seekverify:{members_link:"http://publicseek.com/user/login",support_link:"",privacy_link:"http://publicseek.com/privacy",terms_link:"http://publicseek.com/terms",fcra_link:"http://publicseek.com/fcra"},publicseek:{members_link:"http://publicseek.com/user/login",support_link:"",privacy_link:"http://publicseek.com/privacy",terms_link:"http://publicseek.com/terms",fcra_link:"http://publicseek.com/fcra"},vrcosplayx:{members_link:"https://vrcosplayx.com/login/",support_link:"https://vrcosplayx.com/support/",privacy_link:"https://vrcosplayx.com/privacy",terms_link:"https://vrcosplayx.com/terms",link_2257:"https://vrcosplayx.com/2257",dmca_link:"https://vrcosplayx.com/DMCA/"},"18vr":{members_link:"https://18vr.com/login/",support_link:"https://18vr.com/support/",privacy_link:"https://18vr.com/privacy",terms_link:"https://18vr.com/terms",link_2257:"https://18vr.com/2257",dmca_link:"https://18vr.com/DMCA/"},babevr:{members_link:"https://babevr.com/login/",support_link:"https://babevr.com/support/",privacy_link:"https://babevr.com/privacy",terms_link:"https://babevr.com/terms",link_2257:"https://babevr.com/2257",dmca_link:"https://babevr.com/DMCA/"},badoink:{members_link:"http://members.badoink.com/login/",support_link:"http://wwww.badoink.com/support/",privacy_link:"http://www.badoink.com/privacy.html",terms_link:"http://www.badoink.com/terms.html",dmca_link:"http://www.badoink.com/DMCA.html",link_2257:"http://www.badoink.com/2257_info.html"},kinkyswipe:{members_link:"https://kinkyswipe.com",support_link:"https://kinkyswipe.com/site/contactus",privacy_link:"https://kinkyswipe.com/privacy",terms_link:"https://kinkyswipe.com/terms",dmca_link:"https://kinkyswipe.com/dmca"},sidechicks:{members_link:"https://sidechicks.co",support_link:"https://sidechicks.co/site/contactus",privacy_link:"https://sidechicks.co/privacy",terms_link:"https://sidechicks.co/terms",dmca_link:"https://sidechicks.co/dmca"},qkkie:{members_link:"https://qkkie.com/",support_link:"https://qkkie.com/contact",privacy_link:"https://qkkie.com/privacy",terms_link:"https://qkkie.com/terms",dmca_link:"https://qkkie.com/terms#intellectual"}};utl.directive("utlFooterOr",[function(){return{link:function(scope,element,attrs){const actualProduct=scope.product?scope.product:"badoink",fcraLink=legalUrls[actualProduct].fcra_link?"<li><a href="+legalUrls[actualProduct].fcra_link+' target="_blank">FCRA</a></li>':"",dmcaLink=legalUrls[actualProduct].dmca_link?"<li><a href="+legalUrls[actualProduct].dmca_link+' target="_blank">DMCA</a></li>':"",numberLink=legalUrls[actualProduct].link_2257?"<li><a href="+legalUrls[actualProduct].link_2257+' target="_blank">2257</a></li>':"",links=(attrs.showMl&&legalUrls[actualProduct].members_link?"<li><a href="+legalUrls[actualProduct].members_link+' target="_blank">Members</a></li>':"")+(attrs.showSl&&legalUrls[actualProduct].support_link?"<li><a href="+legalUrls[actualProduct].support_link+' target="_blank">Support</a></li>':"")+(attrs.showPl&&legalUrls[actualProduct].privacy_link?"<li><a href="+legalUrls[actualProduct].privacy_link+' target="_blank">Privacy</a></li>':"")+(attrs.showTl&&legalUrls[actualProduct].terms_link?"<li><a href="+legalUrls[actualProduct].terms_link+' target="_blank">Terms</a></li>':"")+numberLink+dmcaLink+fcraLink;element.html('\n                    <style type="text/css">\n                        footer {\n                            margin: 0 auto;\n                            width: 100%;\n                            text-align: center;\n                        }\n                        footer ul {\n                            padding: 0;\n                        }\n                        footer ul li {\n                            display: inline-block;\n                            margin: 0 10px;\n                            padding: 0;\n                            list-style:none;\n                        }\n                    </style>\n                    <footer>\n                        <ul>\n                            '+links+"\n                        </ul>\n                    </footer>\n                ")}}}]);