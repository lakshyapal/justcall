"use strict";
var tdevice, universalfrom = "",
    apnacode = {
        init: function() {
            var l = justcall_click2call.conf.scriptConfig.justcall_token,
                c = new XMLHttpRequest;
            c.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status) {
                    var c = this.responseText;
                    console.log(c), c = JSON.parse(c), console.log(c);
                    var a = c.token,
                        t = c.balance,
                        e = c.from,
                        s = c.to;
                    justcall_click2call.conf.number.formated = "+" + c.from, universalfrom = "+" + c.from;
                    var o = {
                        PhoneNumber: "+" + s,
                        From: "+" + e + "^" + t + "^" + l
                    };
                    justcall_click2call.popup.startCall(), document.getElementsByClassName("justcall-clicktcall-status")[0].style.textAlign = "right", document.getElementsByClassName("justcall-clicktcall-status")[0].style.fontSize = "14px", document.getElementsByClassName("justcall-clicktcall-status")[0].style.top = "5px", document.getElementsByClassName("justcall-clicktcall-status")[0].style.right = "59px", Twilio.Device.setup(a, {
                        debug: !0,
                        region: "ie1"
                    }), Twilio.Device.connect(function(l) {
                        "open" == l.status() && (console.log("chckui"), justcall_click2call.popup.startCall())
                    }), Twilio.Device.ready(function(l) {
                        Twilio.Device.connect(o), console.log(o)
                    }), Twilio.Device.error(function(l) {
                        Twilio.Device.destroy()
                    }), Twilio.Device.connect(function(l) {}), tdevice = Twilio.Device, Twilio.Device.disconnect(function(l) {})
                }
            }, c.open("POST", "https://justcall.io/clicktocall/gentoken.php?token=" + l, !0), c.send()
        },
        endCall: function() {
            tdevice.destroy(), tdevice.disconnectAll(), location.reload()
        }
    },
    justcall_click2call = window.justcall_click2call || {},
    load_justcall_click2call = function() {
        var l, c, a = {};
        justcall_click2call.conf = {
            script_url: "",
            plivo: {
                api_host: "https://justcall.io",
                sdk_url: "https://media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js",
                api_info_url: "/v2/click_to_call/new.php?justcall_token=",
                api_endpoint_url: "/v2/click_to_call/create?justcall_token=",
                api_delete_endpoint_url: "/v2/click_to_call/destroy?justcall_token=",
                user: "",
                password: "",
                endpoint_id: null
            },
            messages: {
                init: " ",
                quit: "",
                ringing: "",
                thanks: "",
                end: "",
                mic: "",
                noMic: "",
                error: "An error occured, please try again later",
                flashRequired: "",
                flashUpdate: "",
                userConfirmation: "",
                confirm: "",
                cancel: "",
                calling: "",
                notAvailableForThisBrowser: ""
            },
            classes: {
                button: "justcall-click2call-button",
                eventButton: "justcall-click2call-event",
                popup: "justcall-click2call-call",
                script: "justcall-ajs",
                cssPath: "justcall-click2call.css"
            },
            scriptConfig: {
                justcall_token: null,
                txtColor: "#ffffff",
                bckColor: "#4285f4",
                btnTxt: "Call us",
                buttonSize: "med",
                debug: !1
            },
            company: {
                name: null,
                logoUrl: null
            },
            number: {
                formated: "",
                e164: ""
            }
        }, justcall_click2call.styling = {
            insertCSS: function(l) {
                var c = l.getElementsByTagName("head")[0],
                    a = l.createElement("link");
                a.type = "text/css", a.href = justcall_click2call.conf.script_url + justcall_click2call.conf.classes.cssPath, a.media = "all", a.rel = "stylesheet", c.appendChild(a)
            },
            iframe: function(l) {
                l.style.width = "100%", l.style.height = "100%", l.style.position = "fixed", l.style.top = "0", l.style.left = "0", l.style.right = "0", l.style.bottom = "0", l.style.paddingTop = "0px", l.style.boxSizing = "border-box", l.marginheight = "0", l.marginwidth = "0", document.getElementsByTagName("html")[0].style.margin = "0", document.body.style.margin = "0", document.body.style.padding = "0", document.body.style.height = "100%", document.body.style.overflow = "hidden", document.documentElement.style.height = "100%"
            }
        }, justcall_click2call.tools = {
            isArray: function(l) {
                return void 0 !== l && null !== l && "number" == typeof l.length
            },
            addEventListener: function(l, c, a) {
                var t, e = function(l) {
                    l.addEventListener ? l.addEventListener(c, a) : l.attachEvent("on" + c, a)
                };
                if (justcall_click2call.tools.isArray(l))
                    for (t = 0; t < l.length; t += 1) e(l[t]);
                else e(l)
            },
            getElementsByClassName: function(l, c) {
                return l.getElementsByClassName ? l.getElementsByClassName(c) : l.querySelectorAll("." + c)
            },
            quitWarning: function(l) {
                l.returnValue = justcall_click2call.conf.messages.quit
            }
        }, justcall_click2call.init = function() {
            var c, a, t, e, s, o;
            for ((c = document.createElement("a")).href = document.getElementById(justcall_click2call.conf.classes.script).src, (a = c.href.split("/")).pop(), justcall_click2call.conf.script_url = a.join("/") + "/", o = c.hash.substr(1).split("&"), t = 0; t < o.length; t += 1) e = o[t].split("="), void 0 !== justcall_click2call.conf.scriptConfig[e[0]] ? ("debug" === e[0] && (e[1] = "true" === e[1]), e[0].indexOf("Color") > -1 && (e[1].match(/^#([0-9a-f]{3}){1,2}$/i) || (e[1] = null)), "btnTxt" === e[0] && (e[1] = decodeURI(e[1])), justcall_click2call.conf.scriptConfig[e[0]] = e[1]) : l("'" + e[0] + "' is not configurable");
            if (s = justcall_click2call.tools.getElementsByClassName(document, justcall_click2call.conf.classes.button), justcall_click2call.styling.insertCSS(document), null === s || 0 === s.length) l("No '<div class=\"" + justcall_click2call.conf.classes.button + "\"></div>' found."), justcall_click2call.buttons.loadCompanyInfo();
            else if (document.documentElement.className.indexOf("ie6") > -1 || document.documentElement.className.indexOf("ie7") > -1) l("IE6 or IE7 - JustCall Click2Call fetature is not available for IE6 & IE7");
            else {
                for (t = 0; t < s.length; t += 1) s[t].className = s[t].className + " justcall-clicktcall", justcall_click2call.buttons.design_button(s[t]), null !== justcall_click2call.conf.scriptConfig.bckColor && (s[t].style.background = justcall_click2call.conf.scriptConfig.bckColor), null !== justcall_click2call.conf.scriptConfig.txtColor && (justcall_click2call.tools.getElementsByClassName(s[t], "ctc-title")[0].style.color = justcall_click2call.conf.scriptConfig.txtColor, justcall_click2call.tools.getElementsByClassName(s[t], "ctc-subtitle")[0].style.color = justcall_click2call.conf.scriptConfig.txtColor);
                justcall_click2call.buttons.loadCompanyInfo(function() {
                    justcall_click2call.buttons.setCompanyInfo()
                })
            }!window.mobilecheck() && window.webrtccheck() ? justcall_click2call.tools.addEventListener(justcall_click2call.tools.getElementsByClassName(document, justcall_click2call.conf.classes.eventButton), "click", justcall_click2call.startCall) : justcall_click2call.tools.addEventListener(justcall_click2call.tools.getElementsByClassName(document, justcall_click2call.conf.classes.eventButton), "click", function() {
                console.log("universalfrom" + universalfrom), justcall_click2call.conf.number.formated.startsWith("91") && (justcall_click2call.conf.number.formated = justcall_click2call.conf.number.formated.substring(2), justcall_click2call.conf.number.formated = "000" + justcall_click2call.conf.number.formated, console.log("here boy " + justcall_click2call.conf.number.formated)), window.location.assign("tel:" + justcall_click2call.conf.number.formated.replace(/ /g, ""))
            }), l("Click2Call ready")
        }, justcall_click2call.buttons = {
            design_button: function(l) {
                l.innerHTML = '<div class="icos"><div class="ico ico-call"></div></div><div class ="vertical-line"></div><div class="infos"><div class="ctc-title">' + justcall_click2call.conf.scriptConfig.btnTxt + '</div><div class="ctc-subtitle">' + justcall_click2call.conf.number.formated + "</div></div>";
                var c = document.createElement("div");
                c.className = "ctc-link", c.innerHTML = '<a href="https://www.justcall.io" id="poweredby" target="_blank" class="ctc-powered-by">Powered by <strong class="ctc-powered-by-strong">JustCall</strong></a>', l.parentNode.insertBefore(c, l.nextSibling), document.getElementsByClassName("ctc-powered-by").length > 0 && (document.getElementsByClassName("ctc-powered-by")[0].style.color = justcall_click2call.conf.scriptConfig.bckColor), "large" == justcall_click2call.conf.scriptConfig.buttonSize ? (console.log("large button"), document.getElementsByClassName("justcall-click2call-event").length > 0 && (document.getElementsByClassName("justcall-click2call-event")[0].style.width = "220px", document.getElementsByClassName("justcall-click2call-event")[0].style.height = "45px", document.getElementsByClassName("icos")[0].style.left = "38px", document.getElementsByClassName("icos")[0].style.top = "2px", document.getElementsByClassName("vertical-line")[0].style.left = "160px", document.getElementsByClassName("vertical-line")[0].style.height = "35px")) : "small" == justcall_click2call.conf.scriptConfig.buttonSize && (console.log("small button"), document.getElementsByClassName("justcall-click2call-event").length > 0 && (document.getElementsByClassName("justcall-click2call-event")[0].style.width = "145px", document.getElementsByClassName("icos")[0].style.left = "-28px", document.getElementsByClassName("vertical-line")[0].style.left = "99px", document.getElementsByClassName("ctc-link")[0].style.width = "140px")), console.log(justcall_click2call.conf.scriptConfig.buttonSize)
            },
            setCompanyInfo: function() {
                var l, c = justcall_click2call.tools.getElementsByClassName(document, justcall_click2call.conf.classes.button);
                for (l = 0; l < c.length; l += 1) justcall_click2call.tools.getElementsByClassName(c[l], "ctc-subtitle")[0].innerHTML = justcall_click2call.conf.number.formated
            },
            loadCompanyInfo: function(c) {
                var t, e, s = null;
                (s = new XMLHttpRequest).onreadystatechange = function() {
                    4 !== s.readyState || 200 !== s.status && 0 !== s.status || t()
                }, t = function() {
                    var t = JSON.parse(s.responseText);
                    l(t.company), justcall_click2call.conf.company.name = t.company.name, justcall_click2call.conf.company.logoUrl = t.company.logo_url, justcall_click2call.conf.number.formated = t.number.formated, justcall_click2call.conf.number.e164 = t.number.e164, justcall_click2call.conf.messages = t.messages, a["X-PH-NUMBERTOKEN"] = justcall_click2call.conf.scriptConfig.justcall_token.replace(/-/g, "%20"), c && c()
                }, e = justcall_click2call.conf.plivo.api_host + justcall_click2call.conf.plivo.api_info_url + justcall_click2call.conf.scriptConfig.justcall_token, s.open("GET", e, !0), s.send()
            }
        }, justcall_click2call.startCall = function(l) {
            l && l.preventDefault(), justcall_click2call.iframe.init(), justcall_click2call.popup.init()
        }, justcall_click2call.iframe = {
            frame: null,
            currentURL: null,
            iframeLoaded: !1,
            init: function() {
                for (var l = document.getElementsByTagName("head")[0]; l.firstChild;) l.removeChild(l.firstChild);
                document.body.innerHTML = "", justcall_click2call.iframe.frame = document.createElement("iframe"), justcall_click2call.iframe.frame.frameBorder = 0, justcall_click2call.iframe.frame.id = "frame", justcall_click2call.iframe.frame.src = window.location.href, document.body.appendChild(justcall_click2call.iframe.frame), justcall_click2call.iframe.frame.contentWindow.location.href = justcall_click2call.iframe.frame.src, justcall_click2call.styling.iframe(justcall_click2call.iframe.frame), justcall_click2call.tools.addEventListener(justcall_click2call.iframe.frame, "load", justcall_click2call.iframe.initIFramePages)
            },
            initIFramePages: function() {
                var l = document.getElementById("frame").contentWindow;
                justcall_click2call.iframe.currentURL = l.location.href, justcall_click2call.styling.insertCSS(l.document), justcall_click2call.iframe.addClickListenersOnLinks(), justcall_click2call.iframe.removeC2CButton(), justcall_click2call.iframe.iframeLoaded || (justcall_click2call.iframe.iframeLoaded = !0)
            },
            showIframe: function() {
                for (var l = document.getElementsByTagName("head")[0]; l.firstChild;) l.removeChild(l.firstChild);
                justcall_click2call.styling.insertCSS(document), document.body.innerHTML = "", document.body.appendChild(justcall_click2call.popup.DOM.popup), document.body.appendChild(justcall_click2call.iframe.frame), justcall_click2call.popup.DOM.popup.style.visibility = "visible", justcall_click2call.iframe.frame.style.visibility = "visible", console.log("show iframe")
            },
            addClickListenersOnLinks: function() {
                var l, c, a, t;
                for (c = justcall_click2call.iframe.frame.contentWindow.document.body.getElementsByTagName("a"), a = window.location, t = function(l) {
                        void 0 !== l.preventDefault ? l.preventDefault() : l.returnValue = !1, alert(justcall_click2call.conf.messages.quit)
                    }, l = 0; l < c.length; l += 1) "" === c[l].hostname || c[l].hostname === a.hostname && c[l].protocol === a.protocol || justcall_click2call.tools.addEventListener(c[l], "click", t)
            },
            removeC2CButton: function() {
                console.log("dekho..dekho woh aa gaya");
                var l = document.createElement("P"),
                    c = document.createTextNode("Powered by JustCall.io");
                l.appendChild(c), l.style.fontSize = "12px", console.log("color that we have here is"), console.log(justcall_click2call.conf.scriptConfig.bckColor), document.getElementsByClassName("justcall-click2call-call")[0].style.backgroundColor = justcall_click2call.conf.scriptConfig.bckColor, justcall_click2call.conf.scriptConfig.txtColor, document.getElementsByClassName("justcall-user-confirmation")[0].style.color = justcall_click2call.conf.scriptConfig.bckColor, justcall_click2call.conf.scriptConfig.txtColor, document.getElementsByClassName("justcall-user-cancel")[0].style.color = justcall_click2call.conf.scriptConfig.bckColor;
                var a = document.getElementById("frame"),
                    t = a.contentDocument || a.contentWindow.document;
                console.log(t), document.getElementsByClassName("justcall-clicktcall-status")[0].appendChild(l);
                var e, s = justcall_click2call.tools.getElementsByClassName(justcall_click2call.iframe.frame.contentWindow.document, justcall_click2call.conf.classes.button);
                for (e = 0; e < s.length; e += 1) s[e].style.pointerEvents = "none", s[e].className = s[e].className + " justcall-clicktcall", null !== justcall_click2call.conf.scriptConfig.bckColor && (s[e].style.background = justcall_click2call.conf.scriptConfig.bckColor), justcall_click2call.buttons.design_button(s[e]), null !== justcall_click2call.conf.scriptConfig.txtColor && (justcall_click2call.tools.getElementsByClassName(s[e], "ctc-title")[0].style.color = justcall_click2call.conf.scriptConfig.txtColor, justcall_click2call.tools.getElementsByClassName(s[e], "ctc-subtitle")[0].style.color = justcall_click2call.conf.scriptConfig.txtColor), s[e].lastChild.firstChild.innerHTML = justcall_click2call.conf.messages.calling;
                null != t.getElementById("poweredby") && (t.getElementById("poweredby").style.color = justcall_click2call.conf.scriptConfig.bckColor), "large" == justcall_click2call.conf.scriptConfig.buttonSize ? (t.getElementsByClassName("justcall-click2call-event")[0].style.width = "220px", t.getElementsByClassName("justcall-click2call-event")[0].style.height = "45px", t.getElementsByClassName("icos")[0].style.left = "38px", t.getElementsByClassName("icos")[0].style.top = "2px", t.getElementsByClassName("vertical-line")[0].style.left = "160px", t.getElementsByClassName("vertical-line")[0].style.height = "35px") : "small" == justcall_click2call.conf.scriptConfig.buttonSize && (console.log("small button"), t.getElementsByClassName("justcall-click2call-event").length > 0 && (t.getElementsByClassName("justcall-click2call-event")[0].style.width = "145px", t.getElementsByClassName("icos")[0].style.left = "-28px", t.getElementsByClassName("vertical-line")[0].style.left = "99px", t.getElementsByClassName("ctc-link")[0].style.width = "140px"))
            }
        }, justcall_click2call.popup = {
            DOM: {
                popup: null,
                mute: null,
                endCall: null,
                status: null,
                companyName: null,
                companyNumber: null,
                userConfirmation: null,
                userCancellation: null
            },
            timer: null,
            init: function() {
                null === justcall_click2call.popup.DOM.popup && (justcall_click2call.popup.DOM.popup = document.createElement("div")), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call allow", justcall_click2call.popup.DOM.popup.innerHTML = '<div class="pulses"><div class="pulse pulse-1"></div><div class="pulse pulse-2"></div><div class="pulse pulse-3"></div></div><div class="justcall-wrap"><div class="justcall-clicktcall-loading"></div><div class="justcall-fl-l"><div class="justcall-clicktcall-title">Calling <strong class="company-name"></strong></div><div class="justcall-clicktcall-number"></div></div><div class="justcall-fl-r"><ul class="justcall-actions"><li><a class="end-call" href="#"><span class="ico ico-close"></span><span class="txt">Close</span></a></li><li style="display:none"><a class="mute" href="#"><span class="ico ico-close"></span><span class="txt">Mute</span></a></li><li style="display:none"><a class="poweredby" href="http://justcall.io" target="_blank"><span class="ico ico-powered"></span><span class="txt">Powered by <em>JustCall.io</em></span></a></li></ul></div><div class="justcall-clicktcall-status"></div><div class="justcall-cb"></div></div></div>', document.body.insertBefore(justcall_click2call.popup.DOM.popup, justcall_click2call.iframe.frame), justcall_click2call.styling.insertCSS(document), justcall_click2call.popup.DOM.status = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "justcall-clicktcall-status")[0], justcall_click2call.popup.DOM.mute = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "mute")[0], justcall_click2call.popup.DOM.endCall = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "end-call")[0], justcall_click2call.popup.DOM.companyName = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "company-name")[0], justcall_click2call.popup.DOM.companyNumber = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "justcall-clicktcall-number")[0], justcall_click2call.tools.addEventListener(justcall_click2call.popup.DOM.mute, "click", justcall_click2call.popup.manageMuteCall), justcall_click2call.tools.addEventListener(justcall_click2call.popup.DOM.endCall, "click", justcall_click2call.popup.endCall), justcall_click2call.popup.loadingAnimation(1), justcall_click2call.popup.loadingAnimation(2), justcall_click2call.popup.setCompanyInfo(), justcall_click2call.popup.DOM.userConfirmation = document.createElement("a"), justcall_click2call.popup.DOM.userConfirmation.className = "justcall-user-confirmation", justcall_click2call.popup.DOM.userConfirmation.innerHTML = justcall_click2call.conf.messages.confirm, justcall_click2call.popup.DOM.userCancellation = document.createElement("a"), justcall_click2call.popup.DOM.userCancellation.className = "justcall-user-confirmation justcall-user-cancel", justcall_click2call.popup.DOM.userCancellation.innerHTML = justcall_click2call.conf.messages.cancel, justcall_click2call.tools.addEventListener(justcall_click2call.popup.DOM.userConfirmation, "click", justcall_click2call.plivo.loadSDK), justcall_click2call.tools.addEventListener(justcall_click2call.popup.DOM.userCancellation, "click", function() {
                    location.reload()
                }), window.webrtccheck() ? this.waitingForUserConfirmation() : this.displayNotAvailableForThisBrowserMessage()
            },
            setCompanyInfo: function() {
                justcall_click2call.popup.DOM.companyName.innerHTML = justcall_click2call.conf.company.name, justcall_click2call.popup.DOM.companyNumber.innerHTML = justcall_click2call.conf.number.formated
            },
            displayTimer: function(l) {
                var c = Math.floor(l / 3600),
                    a = Math.floor(l / 60) % 60,
                    t = l % 60,
                    e = "",
                    s = "",
                    o = "";
                return c > 0 && (10 > c && (e = "0"), e += c + ":"), 10 > a && (s = "0"), s += a, 10 > t && (o = "0"), e + s + ":" + (o += t)
            },
            displayNotAvailableForThisBrowserMessage: function() {
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call allow", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.conf.messages.notAvailableForThisBrowser + " <a href='tel:" + justcall_click2call.conf.number.formated.replace(/ /g, "") + "'>" + justcall_click2call.conf.number.formated + "</a>"
            },
            waitingForUserConfirmation: function() {
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call allow", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.conf.messages.userConfirmation, justcall_click2call.popup.DOM.status.appendChild(justcall_click2call.popup.DOM.userConfirmation), justcall_click2call.popup.DOM.status.appendChild(justcall_click2call.popup.DOM.userCancellation)
            },
            waitingForUserMedia: function() {
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call allow", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.conf.messages.mic
            },
            waitingForPlivo: function() {
                justcall_click2call.popup.loadingAnimationDisplay(!0), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call allow", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.conf.messages.init
            },
            ringing: function() {
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.conf.messages.ringing
            },
            startCall: function() {
                var l = 0;
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call", justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.popup.displayTimer(l), justcall_click2call.popup.timer = setInterval(function() {
                    l += 1, justcall_click2call.popup.DOM.status.innerHTML = justcall_click2call.popup.displayTimer(l)
                }, 1e3)
            },
            endCall: function() {
                apnacode.endCall()
            },
            manageMuteCall: function() {
                var l = justcall_click2call.popup.DOM.mute;
                l.className.indexOf("muted") > -1 ? (l.className = l.className.replace(" muted", ""), c.conn.unmute()) : (c.conn.mute(), l.className = l.className + " muted")
            },
            errorMessage: function(l) {
                justcall_click2call.popup.loadingAnimationDisplay(!1), justcall_click2call.popup.DOM.popup.className = justcall_click2call.conf.classes.popup + " justcall-click2call error", justcall_click2call.popup.DOM.status.innerHTML = l
            },
            loadingAnimationTimeout: null,
            loadingAnimationDisplay: function(l) {
                var c = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "justcall-clicktcall-loading")[0];
                c.style.display = l ? "block" : "none"
            },
            loadingAnimation: function(l) {
                var c, a = justcall_click2call.tools.getElementsByClassName(justcall_click2call.popup.DOM.popup, "justcall-clicktcall-loading")[0],
                    t = Math.round((l - 1) / 6 * 100),
                    e = Math.round(l / 6 * 100);
                justcall_click2call.popup.loadingAnimationTimeout && clearTimeout(justcall_click2call.popup.loadingAnimationTimeout), (c = function(l) {
                    l = parseFloat(l), e > l && (a.style.width = l + "%", justcall_click2call.popup.loadingAnimationTimeout = setTimeout(function() {
                        c(l + .2)
                    }, 40))
                })(t)
            }
        }, justcall_click2call.plivo = {
            loadPlivoCredentials: function(c) {
                var a, t, e = null;
                (e = new XMLHttpRequest).onreadystatechange = function() {
                    4 !== e.readyState || 201 !== e.status && 0 !== e.status || a()
                }, a = function() {
                    var a = JSON.parse(e.responseText);
                    l(a.plivo), justcall_click2call.conf.plivo.user = a.plivo.username, justcall_click2call.conf.plivo.password = a.plivo.password, justcall_click2call.conf.plivo.endpoint_id = a.plivo.endpoint_id, c && c()
                }, t = justcall_click2call.conf.plivo.api_host + justcall_click2call.conf.plivo.api_endpoint_url + justcall_click2call.conf.scriptConfig.justcall_token, e.open("POST", t, !0), e.send()
            },
            deletePlivoEndpoint: function() {
                var l, c = null;
                c = new XMLHttpRequest, l = justcall_click2call.conf.plivo.api_host + justcall_click2call.conf.plivo.api_delete_endpoint_url + justcall_click2call.conf.scriptConfig.justcall_token + "&endpoint_id=" + justcall_click2call.conf.plivo.endpoint_id, c.open("DELETE", l, !0), c.send()
            },
            init: function() {
                var t = !1,
                    e = !1,
                    s = !1,
                    o = function() {
                        t && e && !s && (l("Call launched to: " + justcall_click2call.conf.number.e164 + " with token: " + a["X-PH-NUMBERTOKEN"]), c.conn.call(justcall_click2call.conf.number.e164, a))
                    };
                (c = c || window.Plivo || {}).onWebrtcNotSupported = function() {
                    l("WebrtcNotSupported")
                }, c.onReady = function() {
                    justcall_click2call.popup.loadingAnimation(4), l("Plivo ready, trying to login..."), justcall_click2call.popup.waitingForUserMedia(), l("Loading Plivo credentials..."), justcall_click2call.plivo.loadPlivoCredentials(function() {
                        l(justcall_click2call.conf.plivo), c.conn.login(justcall_click2call.conf.plivo.user, justcall_click2call.conf.plivo.password)
                    })
                }, c.onMediaPermission = function(c) {
                    c ? (justcall_click2call.popup.loadingAnimation(6), l("user media ok"), t = !0, justcall_click2call.popup.waitingForPlivo(), o()) : (l("use media disabled"), justcall_click2call.popup.errorMessage(justcall_click2call.conf.messages.noMic))
                }, c.onLogin = function() {
                    justcall_click2call.popup.loadingAnimation(5), l("Logged in on Plivo"), e = !0, o()
                }, c.onLoginFailed = function() {
                    l("Login on Plivo failed, bad login/password"), justcall_click2call.popup.errorMessage(justcall_click2call.conf.messages.error)
                }, c.onLogout = function() {
                    l("Logout")
                }, c.onCalling = function() {
                    l("calling..."), s = !0
                }, c.onCallRemoteRinging = function() {
                    l("ringing..."), window.addEventListener("beforeunload", justcall_click2call.tools.quitWarning), justcall_click2call.popup.ringing()
                }, c.onCallAnswered = function() {
                    l("call answered"), justcall_click2call.popup.startCall()
                }, c.onCallTerminated = function() {
                    console.log("hum call katenge bhosdi k")
                }, c.onCallFailed = function(c) {
                    "Canceled" === c ? (l("call terminated"), justcall_click2call.popup.endCall()) : (l("call failed " + c), justcall_click2call.popup.errorMessage(justcall_click2call.conf.messages.error))
                }, l("Plivo SDK loaded."), justcall_click2call.popup.loadingAnimation(3), apnacode.init()
            },
            getFlashVersion: function() {
                try {
                    try {
                        var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        try {
                            l.AllowScriptAccess = "always"
                        } catch (l) {
                            return "6,0,0"
                        }
                    } catch (l) {}
                    return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (l) {
                    try {
                        if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                    } catch (l) {}
                }
                return "0,0,0"
            },
            loadSDK: function() {
                l("Loading Plivo SDK..."), justcall_click2call.popup.waitingForPlivo();
                var c = document.createElement("script");
                c.setAttribute("type", "text/javascript"), c.setAttribute("src", justcall_click2call.conf.plivo.sdk_url), c.onreadystatechange = function() {
                    justcall_click2call.plivo.init()
                }, c.onload = function() {
                    justcall_click2call.plivo.init()
                }, document.getElementsByTagName("head")[0].appendChild(c)
            }
        }, l = function(l, c) {
            !0 === justcall_click2call.conf.scriptConfig.debug && (null !== c && void 0 !== c ? "object" == typeof c ? (console.log("[justcall] " + l + ":"), console.log(c)) : console.log("[justcall] " + l + ": " + c) : "object" == typeof l ? console.log(l) : console.log("[justcall] " + l))
        }, justcall_click2call.init()
    };
window.mobilecheck = function() {
    var l = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(l) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(l.substr(0, 4))
}, window.webrtccheck = function() {
    return (window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.mozRTCPeerConnection) && (navigator.userAgent.search("Chrome") >= 0 || navigator.userAgent.search("Firefox") >= 0)
};
var click_to_call = function() {
        window.self === window.top && load_justcall_click2call()
    },
    readyStateCheckInterval = setInterval(function() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), click_to_call())
    }, 100);