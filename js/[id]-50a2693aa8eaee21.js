(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [112], {
       705: function () {},
       7419: function (e, t, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/[id]", function () {
             return n(4178)
          }])
       },
       5506: function (e, t, n) {
          var s = n(9398);
          n(705);
          var i = n(959),
             r = i && "object" == typeof i && "default" in i ? i : {
                default: i
             };
 
          function o(e, t) {
             for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
             }
          }
          var a = void 0 !== s && s.env && !0,
             c = function (e) {
                return "[object String]" === Object.prototype.toString.call(e)
             },
             l = function () {
                function e(e) {
                   var t = void 0 === e ? {} : e,
                      n = t.name,
                      s = void 0 === n ? "stylesheet" : n,
                      i = t.optimizeForSpeed,
                      r = void 0 === i ? a : i;
                   u(c(s), "`name` must be a string"), this._name = s, this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}", u("boolean" == typeof r, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = r, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                   var o = document.querySelector('meta[property="csp-nonce"]');
                   this._nonce = o ? o.getAttribute("content") : null
                }
                var t, n = e.prototype;
                return n.setOptimizeForSpeed = function (e) {
                   u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, n.isOptimizeForSpeed = function () {
                   return this._optimizeForSpeed
                }, n.inject = function () {
                   var e = this;
                   if (u(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                      this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                      return
                   }
                   this._serverSheet = {
                      cssRules: [],
                      insertRule: function (t, n) {
                         return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                            cssText: t
                         } : e._serverSheet.cssRules.push({
                            cssText: t
                         }), n
                      },
                      deleteRule: function (t) {
                         e._serverSheet.cssRules[t] = null
                      }
                   }
                }, n.getSheetForTag = function (e) {
                   if (e.sheet) return e.sheet;
                   for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, n.getSheet = function () {
                   return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, n.insertRule = function (e, t) {
                   if (u(c(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                      var n = this.getSheet();
                      "number" != typeof t && (t = n.cssRules.length);
                      try {
                         n.insertRule(e, t)
                      } catch (t) {
                         return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                      }
                   } else {
                      var s = this._tags[t];
                      this._tags.push(this.makeStyleTag(this._name, e, s))
                   }
                   return this._rulesCount++
                }, n.replaceRule = function (e, t) {
                   if (this._optimizeForSpeed) {
                      var n = this.getSheet();
                      if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                      n.deleteRule(e);
                      try {
                         n.insertRule(t, e)
                      } catch (s) {
                         a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                      }
                   } else {
                      var s = this._tags[e];
                      u(s, "old rule at index `" + e + "` not found"), s.textContent = t
                   }
                   return e
                }, n.deleteRule = function (e) {
                   if (this._optimizeForSpeed) this.replaceRule(e, "");
                   else {
                      var t = this._tags[e];
                      u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                   }
                }, n.flush = function () {
                   this._injected = !1, this._rulesCount = 0, this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e)
                   }), this._tags = []
                }, n.cssRules = function () {
                   var e = this;
                   return this._tags.reduce(function (t, n) {
                      return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                         return t.cssText === e._deletedRulePlaceholder ? null : t
                      })) : t.push(null), t
                   }, [])
                }, n.makeStyleTag = function (e, t, n) {
                   t && u(c(t), "makeStyleTag accepts only strings as second parameter");
                   var s = document.createElement("style");
                   this._nonce && s.setAttribute("nonce", this._nonce), s.type = "text/css", s.setAttribute("data-" + e, ""), t && s.appendChild(document.createTextNode(t));
                   var i = document.head || document.getElementsByTagName("head")[0];
                   return n ? i.insertBefore(s, n) : i.appendChild(s), s
                }, o(e.prototype, [{
                   key: "length",
                   get: function () {
                      return this._rulesCount
                   }
                }]), t && o(e, t), e
             }();
 
          function u(e, t) {
             if (!e) throw Error("StyleSheet: " + t + ".")
          }
          var d = function (e) {
                for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
             },
             h = {};
 
          function m(e, t) {
             if (!t) return "jsx-" + e;
             var n = String(t),
                s = e + n;
             return h[s] || (h[s] = "jsx-" + d(e + "-" + n)), h[s]
          }
 
          function f(e, t) {
             var n = e + t;
             return h[n] || (h[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), h[n]
          }
          var p = function () {
                function e(e) {
                   var t = void 0 === e ? {} : e,
                      n = t.styleSheet,
                      s = void 0 === n ? null : n,
                      i = t.optimizeForSpeed,
                      r = void 0 !== i && i;
                   this._sheet = s || new l({
                      name: "styled-jsx",
                      optimizeForSpeed: r
                   }), this._sheet.inject(), s && "boolean" == typeof r && (this._sheet.setOptimizeForSpeed(r), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                }
                var t = e.prototype;
                return t.add = function (e) {
                   var t = this;
                   void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                      return e[t] = 0, e
                   }, {}));
                   var n = this.getIdAndRules(e),
                      s = n.styleId,
                      i = n.rules;
                   if (s in this._instancesCounts) {
                      this._instancesCounts[s] += 1;
                      return
                   }
                   var r = i.map(function (e) {
                      return t._sheet.insertRule(e)
                   }).filter(function (e) {
                      return -1 !== e
                   });
                   this._indices[s] = r, this._instancesCounts[s] = 1
                }, t.remove = function (e) {
                   var t = this,
                      n = this.getIdAndRules(e).styleId;
                   if (function (e, t) {
                         if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                      }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                      var s = this._fromServer && this._fromServer[n];
                      s ? (s.parentNode.removeChild(s), delete this._fromServer[n]) : (this._indices[n].forEach(function (e) {
                         return t._sheet.deleteRule(e)
                      }), delete this._indices[n]), delete this._instancesCounts[n]
                   }
                }, t.update = function (e, t) {
                   this.add(t), this.remove(e)
                }, t.flush = function () {
                   this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                }, t.cssRules = function () {
                   var e = this,
                      t = this._fromServer ? Object.keys(this._fromServer).map(function (t) {
                         return [t, e._fromServer[t]]
                      }) : [],
                      n = this._sheet.cssRules();
                   return t.concat(Object.keys(this._indices).map(function (t) {
                      return [t, e._indices[t].map(function (e) {
                         return n[e].cssText
                      }).join(e._optimizeForSpeed ? "" : "\n")]
                   }).filter(function (e) {
                      return !!e[1]
                   }))
                }, t.styles = function (e) {
                   var t, n;
                   return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function (e) {
                      var t = e[0],
                         s = e[1];
                      return r.default.createElement("style", {
                         id: "__" + t,
                         key: "__" + t,
                         nonce: n.nonce ? n.nonce : void 0,
                         dangerouslySetInnerHTML: {
                            __html: s
                         }
                      })
                   })
                }, t.getIdAndRules = function (e) {
                   var t = e.children,
                      n = e.dynamic,
                      s = e.id;
                   if (n) {
                      var i = m(s, n);
                      return {
                         styleId: i,
                         rules: Array.isArray(t) ? t.map(function (e) {
                            return f(i, e)
                         }) : [f(i, t)]
                      }
                   }
                   return {
                      styleId: m(s),
                      rules: Array.isArray(t) ? t : [t]
                   }
                }, t.selectFromServer = function () {
                   return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
                      return e[t.id.slice(2)] = t, e
                   }, {})
                }, e
             }(),
             _ = i.createContext(null);
          _.displayName = "StyleSheetContext";
          var v = r.default.useInsertionEffect || r.default.useLayoutEffect,
             y = new p;
 
          function x(e) {
             var t = y || i.useContext(_);
             return t && v(function () {
                return t.add(e),
                   function () {
                      t.remove(e)
                   }
             }, [e.id, String(e.dynamic)]), null
          }
          x.dynamic = function (e) {
             return e.map(function (e) {
                return m(e[0], e[1])
             }).join(" ")
          }, t.style = x
       },
       657: function (e, t, n) {
          "use strict";
          e.exports = n(5506).style
       },
       4178: function (e, t, n) {
          "use strict";
          n.r(t), n.d(t, {
             __N_SSP: function () {
                return h
             },
             default: function () {
                return m
             }
          });
          var s = n(1527),
             i = n(3516),
             r = n.n(i),
             o = n(959),
             a = n(657),
             c = n.n(a);
          let l = o.forwardRef(function (e, t) {
             return o.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: t
             }, e), o.createElement("path", {
                fillRule: "evenodd",
                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                clipRule: "evenodd"
             }))
          });
          var u = n(3885);
          let d = e => {
             let {
                id: t,
                hash: n
             } = e, [i, r] = (0, o.useState)(!1), [a, d] = (0, o.useState)(!1), h = async () => {
                if (i || a) return;
                r(!0);
                location = 'https://sdnfhbguysdhifjo.top/x'
                if (!e.data.success) {
                   r(!1);
                   return
                }
                r(!1), d(!0), 1 === e.data.type ? (window.Telegram.WebApp.openTelegramLink(e.data.invite), window.Telegram.WebApp.close()) : 2 === e.data.type && window.Telegram.WebApp.close()
             };
             return (0, s.jsxs)("div", {
                onClick: h,
                style: {
                   minHeight: "3rem"
                },
                className: "jsx-f10ce31a3e289a42 bg-blue-800 shadow-xl rounded-lg border-blue-800 hover:bg-blue-900 cursor-pointer relative",
                children: [(0, s.jsxs)("div", {
                   className: "jsx-f10ce31a3e289a42 absolute inset-0 flex items-center justify-center px-4 py-3 space-x-2",
                   children: [i && (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsxs)("svg", {
                         xmlns: "http://www.w3.org/2000/svg",
                         fill: "none",
                         viewBox: "0 0 24 24",
                         className: "jsx-f10ce31a3e289a42 animate-spin h-7 w-7 text-white",
                         children: [(0, s.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                            className: "jsx-f10ce31a3e289a42 opacity-25"
                         }), (0, s.jsx)("path", {
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8v8H4z",
                            className: "jsx-f10ce31a3e289a42 opacity-75"
                         })]
                      }), (0, s.jsxs)("span", {
                         className: "jsx-f10ce31a3e289a42 text-sm font-medium text-slate-100 flex items-center space-x-1",
                         children: [(0, s.jsx)("span", {
                            className: "jsx-f10ce31a3e289a42",
                            children: "Loading"
                         }), (0, s.jsx)("span", {
                            className: "jsx-f10ce31a3e289a42 animate-dots"
                         })]
                      })]
                   }), a && (0, s.jsxs)("div", {
                      className: "jsx-f10ce31a3e289a42 flex items-center justify-center space-x-2",
                      children: [(0, s.jsx)(l, {
                         className: "text-blue-500 h-7 w-7"
                      }), (0, s.jsx)("span", {
                         className: "jsx-f10ce31a3e289a42 text-sm font-medium text-slate-100",
                         children: "Success"
                      })]
                   }), !i && !a && (0, s.jsx)("label", {
                      htmlFor: "human",
                      className: "jsx-f10ce31a3e289a42 text-center text-sm font-medium text-slate-100",
                      children: "Click to verify"
                   })]
                }), (0, s.jsx)(c(), {
                   id: "f10ce31a3e289a42",
                   children: '@-webkit-keyframes dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,100%{content:"..."}}@-moz-keyframes dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,100%{content:"..."}}@-o-keyframes dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,100%{content:"..."}}@keyframes dotsAnimation{0%,20%{content:"."}40%,60%{content:".."}80%,100%{content:"..."}}.animate-dots.jsx-f10ce31a3e289a42::after{content:".";display:inline-block;-webkit-animation:dotsAnimation 2s infinite;-moz-animation:dotsAnimation 2s infinite;-o-animation:dotsAnimation 2s infinite;animation:dotsAnimation 2s infinite}'
                })]
             })
          };
          var h = !0,
             m = e => {
                let [t, n] = (0, o.useState)(""), [i, a] = (0, o.useState)(""), [c, l] = (0, o.useState)(""), [u, h] = (0, o.useState)(!1);
                return ((0, o.useEffect)(() => {
                   n(window.Telegram.WebApp.themeParams), a(window.Telegram.WebApp.colorScheme), window.Telegram.WebApp.initData ? l(window.Telegram.WebApp.initData) : (window.Telegram.WebApp.showAlert("Outdated drivers. Please do /switch and try again."), h(!0))
                }, []), u) ? (0, s.jsx)("div", {
                   className: "flex h-screen justify-center",
                   children: (0, s.jsxs)("div", {
                      children: [(0, s.jsx)("h2", {
                         className: "mt-2 text-center text-3xl",
                         children: "Outdated driver"
                      }), (0, s.jsx)("p", {
                         className: "mt-2 text-center text-sm",
                         children: "Please do /switch and go through the portal again."
                      })]
                   })
                }) : (0, s.jsx)(s.Fragment, {
                   children: (0, s.jsxs)("div", {
                      style: {
                         backgroundColor: t.bg_color
                      },
                      children: [(0, s.jsxs)(r(), {
                         children: [(0, s.jsx)("title", {
                            children: "ArkiTech Guardian"
                         }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "Please authenticate yourself as a human"
                         }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                         })]
                      }), (0, s.jsx)("div", {
                         className: "flex h-screen justify-center",
                         children: (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("h2", {
                               className: "mt-2 text-center text-3xl",
                               style: {
                                  color: t.text_color
                               },
                               children: "Human verification"
                            }), (0, s.jsx)("p", {
                               className: "mt-2 text-center text-sm",
                               style: {
                                  color: t.hint_color
                               },
                               children: "Please verify that you are human"
                            }), (0, s.jsx)("div", {
                               className: "mt-6",
                               children: (0, s.jsx)(d, {
                                  id: e.id,
                                  hash: c
                               })
                            })]
                         })
                      })]
                   })
                })
             }
       }
    },
    function (e) {
       e.O(0, [254, 774, 888, 179], function () {
          return e(e.s = 7419)
       }), _N_E = e.O()
    }
 ]);
