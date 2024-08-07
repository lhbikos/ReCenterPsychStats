/*
  BeeLine Reader JavaScript Library -- Version 1.0.6
  Copyright 2015, Andrew Cantino and Nicholas Lum, all rights reserved.
*/
(function () {
	var e = [].slice;
	window.BeelineUtils = {
		colorIsDark: function (e) {
			var t, o, r, n, i;
			return i = parseInt(e.substring(1), 16), n = 255 & i >> 16, o = 255 & i >> 8, t = 255 & i >> 0, r = .2126 * n + .7152 * o + .0722 * t, 80 > r
		}, attachElement: function (e, t) {
			var o;
			return null == t && (t = document), o = t.getElementsByTagName("head")[0], o ? o.appendChild(e) : t.body.appendChild(e)
		}, loadScript: function (e, t) {
			var o;
			return null == t && (t = {}), o = document.createElement("SCRIPT"), o.setAttribute("type", "text/javascript"), o.setAttribute("src", e + (t.reload ? "?r=" + Math.random() : "")), this.attachElement(o), null != t.loads && null != t.then ? this.whenTrue(function () {
				return null != window[t.loads]
			}, t.then) : void 0
		}, loadCSS: function (e, t) {
			var o, r;
			return null == t && (t = {}), o = t.document || document, t.id && o.getElementById(t.id) ? void 0 : (r = o.createElement("LINK"), r.setAttribute("rel", "stylesheet"), r.setAttribute("href", e), null != t.id && r.setAttribute("id", t.id), r.setAttribute("type", "text/css"), r.setAttribute("media", t.media || "all"), this.attachElement(r, o))
		}, removeCSS: function (e) {
			var t, o, r, n, i;
			for (n = document.querySelectorAll("link[href='" + e + "']"), i = [], o = 0, r = n.length; r > o; o++) t = n[o], i.push(t.parentNode.removeChild(t));
			return i
		}, afterRender: function (e) {
			var t, o = this;
			return t = function () {
				var t;
				try {
					return e.call(o)
				} catch (r) {
					return t = r, BeelineUtils.log("Exception in afterRender", t, null != t ? t.stack : void 0)
				}
			}, window.setTimeout(t, 1)
		}, log: function () {
			var t;
			return t = 1 <= arguments.length ? e.call(arguments, 0) : [], "undefined" != typeof console ? "function" == typeof console.log ? console.log.apply(console, ["BeeLine Reader: "].concat(e.call(t))) : void 0 : void 0
		}, reload: function (e) {
			return null == e && (e = null), e && e.preventDefault(), window.location.reload()
		}, alert: function (e) {
			return alert(e)
		}, url: function () {
			var e;
			return null != (e = window.location) ? e.href : void 0
		}, urlMatches: function (e) {
			var t, o;
			return null != (t = window.location) ? null != (o = t.href) ? o.match(e) : void 0 : void 0
		}, redirect: function (e, t) {
			var o, r;
			null == t && (t = {}), r = "";
			for (o in t) "" !== r && (r += "&"), r += o + "=" + encodeURIComponent(t[o]);
			return window.location.href = e + (r ? "?" + r : "")
		}, domain: function () {
			var e, t;
			return null != (e = window.location) ? null != (t = e.origin) ? t.replace(/^https?:\/\//i, "") : void 0 : void 0
		}, offset: function (e) {
			var t, o, r;
			if (o = r = 0, e.offsetParent) if (null != window.WebKitCSSMatrix) {
				for (; ;) if (t = new WebKitCSSMatrix(window.getComputedStyle(e).webkitTransform), o += e.offsetLeft + t.m41, r += e.offsetTop + t.m42, !(e = e.offsetParent)) break
			}
			else for (; ;) if (o += e.offsetLeft, r += e.offsetTop, !(e = e.offsetParent)) break;
			return [o, r]
		}, outsideOfViewport: function (e, t) {
			var o, r, n, i, s;
			return null == t && (t = 0), s = this.offset(e), r = s[0], i = s[1], o = i + e.offsetHeight, n = r + e.offsetWidth, o < window.pageYOffset - window.innerHeight * t || n < window.pageXOffset - window.innerWidth * t || r > window.pageXOffset + window.innerWidth * (t + 1) || i > window.pageYOffset + window.innerHeight * (t + 1)
		}, whenTrue: function (e, t) {
			var o;
			return o = function () {
				return e() ? t() : (BeelineUtils.log("Condition hasn't matched, trying again in a moment..."), setTimeout(o, 50))
			}, o()
		}, not: function (e) {
			return function () {
				return !e()
			}
		}, presentSliceOf: function (e) {
			var t, o, r;
			o = {};
			for (t in e) r = e[t], null != r && "" !== r && (o[t] = r);
			return o
		}, evalOrReturn: function () {
			var t, o, r;
			return o = arguments[0], r = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], "function" == typeof r ? r.apply(o, t) : r
		}, installCustomCSS: function (e, t, o) {
			var r;
			if (!(document.getElementsByClassName(t).length > 0)) return (r = document.getElementById(e)) && r.parentNode.removeChild(r), r = document.createElement("style"), r.setAttribute("type", "text/css"), r.setAttribute("id", e), r.setAttribute("class", t), /trident/i.test(navigator.userAgent) ? r.sheet.cssText = o : /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? r.styleSheet.cssText = o : null != r.innerText ? r.innerText = o : r.innerHTML = o, document.getElementsByTagName("head")[0].appendChild(r)
		}, epochInSeconds: function () {
			return parseInt((new Date).getTime() / 1e3)
		}, sendGaTrack: function (e, t, o) {
			var r, n, i, s, l, a, u, c, h;
			return i = function (e, t) {
				return e + Math.floor(Math.random() * (t - e))
			}, l = 1e9, a = i(l, 9999999999), r = i(1e7, 99999999), u = i(l, 2147483647), n = (new Date).getTime(), s = window.location, c = new Image, h = "//www.google-analytics.com/__utm.gif?utmwv=1.3&utmn=" + a + "&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn=" + t + "&utmr=" + s + "&utmp=" + o + "&utmac=" + e + "&utmcc=__utma%3D" + r + "." + u + "." + n + "." + n + "." + n + ".2%3B%2B__utmb%3D" + r + "%3B%2B__utmc%3D" + r + "%3B%2B__utmz%3D" + r + "." + n + ".2.2.utmccn%3D(referral)%7Cutmcsr%3D" + s.host + "%7Cutmcct%3D" + s.pathname + "%7Cutmcmd%3Dreferral%3B%2B__utmv%3D" + r + ".-%3B", c.src = h
		}
	}
}).call(this),/*
  Copyright 2015, Andrew Cantino and Nicholas Lum, all rights reserved.
*/
	function () {
		var e = function (e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		}, t = [].slice, o = [].indexOf || function (e) {
			for (var t = 0, o = this.length; o > t; t++) if (t in this && this[t] === e) return t;
			return -1
		};
		window.BeeLineReader = function () {
			function r(t, o) {
				var r;
				if (null == o && (o = {}), this._resizeHandler = e(this._resizeHandler, this), this.recolor = e(this.recolor, this), this.uncolor = e(this.uncolor, this), this.wrap = e(this.wrap, this), this.color = e(this.color, this), !t || t && t.jquery) throw"A raw DOM Node is required when creating a BeeLineReader instance.  If you are providing a jQuery node, you should call get(0) on it to extract the DOM node.";
				this.node = t, this.options = o, this.listeners = {}, this.reflowNeeded = !0, this.colorCache = {}, this.tohexCache = {}, this.coloring = !1, this.colored = !1, this.charsColored = 0, this.charsWrapped = 0, this.abortCount = 0, this.workInterval = o.workInterval || this.WORK_INTERVAL, (r = this.options).skipTags || (r.skipTags = this.DEFAULT_SKIP_TAGS), this.browserIsCompatible() && (this.options.handleResize && this._setupResizeHandler(), this.options.colorImmediately && BeelineUtils.afterRender(this.color))
			}
			
			return r.prototype.BEELINE_INDICATOR_CLASS = "beeline-node", r.SKIP_COLOR_ATTRIBUTE = "data-beeline-skip", r.prototype.DEFAULT_SKIP_TAGS = ["svg", "h1", "h2", "h3", "h4", "h5", "style", "script"], r.prototype.NUM_COLORS = 4, r.prototype.SPACE_REGEX = /^\s+$/, r.prototype.MIN_COLOR_WIDTH = 100, r.prototype.WRAPPER_TYPE = "beelinespan", r.prototype.BASE_CLASS_PATTERN = /^(beeline-colored-area|beeline-theme-\w+)$/g, r.THEMES = {
				bright: ["#000000", "#0000FF", "#000000", "#FF0500", "#FBFBFB"],
				dark: ["#000000", "#00057F", "#000000", "#970000", "#FBFBFB"],
				blues: ["#000000", "#0000FF", "#000000", "#840DD2", "#FBFBFB"],
				gray: ["#000000", "#666666", "#000000", "#666666", "#FBFBFB"],
				night_gray: ["#FBFBFB", "#666666", "#FBFBFB", "#666666", "#000000"],
				night_blues: ["#FBFBFB", "#56AAFF", "#FBFBFB", "#9E8DFC", "#000000"],
				custom: ["#000000", "#0000FF", "#000000", "#FF0500", "#FBFBFB"]
			}, r.DEFAULT_THEME = "bright", r.THEME_ORDER = ["bright", "dark", "blues", "gray", "night_gray", "night_blues"], r.prototype.COLOR_BLOCK_LENGTH = 2e3, r.prototype.WORK_INTERVAL = 20, r.prototype.color = function (e) {
				var o, n = this;
				return this.browserIsCompatible() ? (o = function () {
					var o;
					return o = 1 <= arguments.length ? t.call(arguments, 0) : [], n.trigger.apply(n, ["afterColor"].concat(t.call(o))), e ? e.apply(null, o) : void 0
				}, this.trigger("beforeColor"), "custom" === this.getTheme() ? this._traverse.apply(this, [this.node].concat(t.call(this._customColors()), [o])) : this._traverse.apply(this, [this.node].concat(t.call(r.THEMES[this.getTheme()]), [o]))) : "function" == typeof e ? e() : void 0
			}, r.prototype.wrap = function (e) {
				return this.browserIsCompatible() ? "custom" === this.getTheme() ? this._traverse.apply(this, [this.node].concat(t.call(this._customColors()), [e], [{wrapOnly: !0}])) : this._traverse.apply(this, [this.node].concat(t.call(r.THEMES[this.getTheme()]), [e], [{wrapOnly: !0}])) : "function" == typeof e ? e() : void 0
			}, r.prototype.getTheme = function () {
				return this.options.theme && r.THEMES[this.options.theme] && this.options.theme || r.DEFAULT_THEME
			}, r.prototype.setCustom = function (e, t, o, r, n) {
				return this.options.theme = "custom", this.options.customColor1 = e, this.options.customColor2 = t, this.options.customColor3 = o, this.options.customColor4 = r, this.options.customBackground = n
			}, r.prototype.setOptions = function (e) {
				var t, o, r;
				r = [];
				for (t in e) o = e[t], r.push(this.options[t] = o);
				return r
			}, r.prototype.uncolor = function () {
				return this.trigger("beforeUncolor"), this._unwrap(this.node), this.options.skipBackgroundColor || this._revertBackground(this.node), this._removeClasses(this.node, this.BASE_CLASS_PATTERN), this.colored = !1, this.reflowNeeded = !0
			}, r.prototype.recolor = function (e) {
				return this.browserIsCompatible() ? (this.trigger("beforeRecolor"), this.reflowNeeded = !0, this.color(e)) : "function" == typeof e ? e() : void 0
			}, r.prototype.cleanup = function () {
				return this.alreadySetupResizeHandler && window.removeEventListener("resize", this._resizeHandler, !1), this.trigger("afterCleanup")
			}, r.prototype.bind = function (e, t, o) {
				var r;
				return (r = this.listeners)[e] || (r[e] = []), this.listeners[e].push([t, o || this])
			}, r.prototype.trigger = function () {
				var e, o, r, n, i, s, l, a, u;
				for (n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], l = this.listeners[n] || [], u = [], i = 0, s = l.length; s > i; i++) a = l[i], r = a[0], o = a[1], u.push(r.apply(o, e));
				return u
			}, r.prototype.browserIsCompatible = function () {
				var e;
				return e = this._getInternetExplorerVersion(), -1 === e || e >= 9
			}, r.prototype._customColors = function () {
				return [this.options.customColor1 || r.THEMES.custom[0], this.options.customColor2 || r.THEMES.custom[1], this.options.customColor3 || r.THEMES.custom[2], this.options.customColor4 || r.THEMES.custom[3], this.options.customBackground || r.THEMES.custom[4]]
			}, r.prototype._getInternetExplorerVersion = function () {
				var e, t, o;
				return t = -1, "Microsoft Internet Explorer" === navigator.appName && (o = navigator.userAgent, e = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null !== e.exec(o) && (t = parseFloat(RegExp.$1))), t
			}, r.prototype._setupResizeHandler = function () {
				return this.alreadySetupResizeHandler ? void 0 : (this.alreadySetupResizeHandler = !0, window.addEventListener("resize", this._resizeHandler, !1))
			}, r.prototype._resizeHandler = function () {
				var e = this;
				return this.resizeTimer && clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function () {
					return e.resizeTimer = null, e.colored ? (BeelineUtils.log("re-coloring after resize"), e.recolor()) : void 0
				}, 500)
			}, r.prototype._addClasses = function (e, o) {
				return e.className = t.call(e.className.split(/\s+/)).concat([o]).join(" ")
			}, r.prototype._removeClasses = function (e, t) {
				var o, r;
				return r = e.className.split(/\s+/), e.className = function () {
					var e, n, i;
					for (i = [], e = 0, n = r.length; n > e; e++) o = r[e], o.match(t) || i.push(o);
					return i
				}().join(" ")
			}, r.prototype._installCustomStyles = function (e) {
				var t, o;
				return t = ".beeline-node { display: inline; font: inherit; }\n\n.beeline-colored-area a,\n.beeline-colored-area a:hover,\n.beeline-colored-area a:active,\n.beeline-colored-area a:visited {\n  text-decoration: underline;\n}\n\n" + function () {
					var e, t, r, n;
					for (r = this.options.skipTags, n = [], e = 0, t = r.length; t > e; e++) o = r[e], n.push(".beeline-colored-area " + o + ", ");
					return n
				}.call(this).join(" ") + "\n.beeline-colored-area a,\n.beeline-colored-area a:hover,\n.beeline-colored-area a:active,\n.beeline-colored-area a:visited {\n  color: " + e + ";\n}", BeelineUtils.installCustomCSS("beeline-custom-styles", "beeline-custom-styles-" + e.replace("#", ""), t.replace(/[\n\r]/g, ""))
			}, r.prototype._traverse = function (e, t, o, r, n, i, s, l) {
				var a = this;
				return null == l && (l = {}), this.abortCount++, BeelineUtils.whenTrue(function () {
					return !a.coloring
				}, function () {
					var u, c;
					return u = function () {
						return a.reflowNeeded = !1, a.colored = !0, a.coloring = !1, s ? s() : void 0
					}, e.hasChildNodes() ? (a.coloring = !0, a.abortCount--, a.options.skipBackgroundColor || (e.style.backgroundColor && !e.originalBackgroundColor && (e.originalBackgroundColor = e.style.backgroundColor), e.style.backgroundColor = i), a._installCustomStyles(t), a._removeClasses(e, a.BASE_CLASS_PATTERN), a._addClasses(e, "beeline-colored-area beeline-theme-" + a.getTheme()), c = {
						workQueue1: [],
						workQueue2: [],
						reflowNeeded: a.reflowNeeded,
						xlast: null,
						ylast: null,
						xfirst: null,
						line: [],
						thisColor: 0,
						colorOne: t,
						colorTwo: o,
						colorThree: r,
						colorFour: n,
						rtl: "rtl" === (window.getComputedStyle(e, null).direction || "").toLowerCase(),
						colorPairs: [],
						wrapOnly: l.wrapOnly
					}, c.xmin === c.xmax && (c.xmax += 1), a._wrapAndColor(e, c), a._workOff(c.workQueue1, c.workQueue2, {
						abortable: !0,
						after: function (e) {
							return e ? (a.trigger("coloringAborted"), BeelineUtils.log("aborted coloring"), u()) : (a._colorLine(c, !0), a._workOff(c.workQueue1, c.workQueue2, {after: u}))
						}
					})) : s ? s({error: "This node has no children"}) : void 0
				})
			}, r.prototype._wrapAndColor = function (e, t) {
				var n, i, s, l = this;
				if (1 === e.nodeType) {
					if (e = e.firstChild) {
						for (s = []; ;) {
							if (n = e.nextSibling, 1 === e.nodeType && (i = e.nodeName.toLowerCase(), o.call(this.options.skipTags, i) >= 0 || "true" === e.getAttribute(r.SKIP_COLOR_ATTRIBUTE)) || (e.className === this.BEELINE_INDICATOR_CLASS ? t.wrapOnly || this._colorNode(e, t) : this._wrapAndColor(e, t)), !(e = n)) break;
							s.push(void 0)
						}
						return s
					}
				}
				else if (3 === e.nodeType) {
					if (this.options.viewportOnly && BeelineUtils.outsideOfViewport(e.parentNode, this.options.viewportMarginMultiple || 0)) return;
					return t.workQueue1.push(function () {
						var o, r, n, i, s, a, u, c, h;
						if (s = e.length, c = e.parentNode, a = e.nodeValue, c && s && !l.SPACE_REGEX.test(a)) {
							for (o = "", r = h = 0; s >= 0 ? s > h : h > s; r = s >= 0 ? ++h : --h) u = a.charAt(r), " " === u || "\n" === u || "	" === u || "\r" === u ? o += u : (o && (i = document.createTextNode(o), n = document.createElement(l.WRAPPER_TYPE), n.className = l.BEELINE_INDICATOR_CLASS, n.appendChild(i), c.insertBefore(n, e), l.charsWrapped += 1, t.wrapOnly ? l._measureNode(n, t) : l._colorNode(n, t)), o = u);
							return o && (i = document.createTextNode(o), n = document.createElement(l.WRAPPER_TYPE), n.className = l.BEELINE_INDICATOR_CLASS, n.appendChild(i), c.insertBefore(n, e), l.charsWrapped += 1, t.wrapOnly ? l._measureNode(n, t) : l._colorNode(n, t)), c.removeChild(e)
						}
					})
				}
			}, r.prototype._measureNode = function (e, t) {
				return t.workQueue2.push(function () {
					return t.reflowNeeded ? e.cachedBeeLineXRect = e.getBoundingClientRect() : e.cachedBeeLineXRect || (e.cachedBeeLineXRect = e.getBoundingClientRect())
				})
			}, r.prototype._colorNode = function (e, t) {
				var o = this;
				return t.workQueue2.push(function () {
					var r, n, i, s;
					return o.charsColored += 1, t.reflowNeeded ? (n = e.getBoundingClientRect(), e.cachedBeeLineXRect = n) : n = e.cachedBeeLineXRect || e.getBoundingClientRect(), i = n.left, s = n.top, i >= 0 || o.options.colorOffScreen ? (null === t.xlast && (t.xfirst = i, t.xlast = i, t.ylast = s), r = t.rtl ? i - t.xlast > 3 : i - t.xlast < -3 || s - t.ylast < -50, r && (o._colorLine(t), t.xfirst = i), t.xlast = i, t.ylast = s, t.line.push([e, i])) : void 0
				})
			}, r.prototype._colorLine = function (e, t) {
				var o, r, n, i, s, l, a, u, c;
				if (null == t && (t = !1), e.line.length) {
					for (e.thisColor < 2 ? (s = e.colorOne, i = e.colorTwo) : (s = e.colorThree, i = e.colorFour), n = e.line[e.line.length - 1][1], u = e.line, l = 0, a = u.length; a > l; l++) c = u[l], o = c[0], r = c[1], e.rtl ? e.colorPairs.push([o, this._getColor(e.thisColor, r, e.xfirst, n, i, s)]) : e.colorPairs.push([o, this._getColor(e.thisColor, r, e.xfirst, n, s, i)]);
					return this._partialColor(e, t), e.thisColor += 1, e.thisColor %= this.NUM_COLORS, e.line = []
				}
			}, r.prototype._partialColor = function (e, t) {
				var o, r, n, i, s, l;
				if (t || e.colorPairs.length > this.COLOR_BLOCK_LENGTH) {
					for (s = e.colorPairs, n = 0, i = s.length; i > n; n++) l = s[n], o = l[0], r = l[1], o.style.setProperty("color", r, "important");
					return e.colorPairs = []
				}
			}, r.prototype._getColor = function (e, t, o, r, n, i) {
				var s, l, a, u, c, h, p, d, f, m, g, C, _, w, y, v, T, E, B, b, S, x, A;
				switch (this.colorCache[n + i] ? (A = this.colorCache[n + i], u = A[0], f = A[1], a = A[2], d = A[3], l = A[4], p = A[5]) : (u = this._hexToR(i), f = this._hexToR(n), a = this._hexToG(i), d = this._hexToG(n), l = this._hexToB(i), p = this._hexToB(n), this.colorCache[n + i] = [u, f, a, d, l, p]), x = S = b = 0, s = 3.1415 / (r - o), m = u - f, h = a - d, c = l - p, g = C = B = v = E = T = _ = y = y = 0, e) {
					case 0:
						g = t - o, C = s * g, B = C - 3.1415, y = Math.cos(B), y += 1, y /= 2, E = m * y, E += f, T = h * y, T += d, _ = c * y, _ += p, x = Math.round(E), S = Math.round(T), b = Math.round(_);
						break;
					case 1:
						g = t - o, C = s * g, v = C, w = Math.cos(v), w += 1, w /= 2, E = m * w, E += f, T = h * w, T += d, _ = c * w, _ += p, x = Math.round(E), S = Math.round(T), b = Math.round(_);
						break;
					case 2:
						g = t - o, C = s * g, B = C - 3.1415, y = Math.cos(B), y += 1, y /= 2, E = m * y, E += f, T = h * y, T += d, _ = c * y, _ += p, x = Math.round(E), S = Math.round(T), b = Math.round(_);
						break;
					case 3:
						g = t - o, C = s * g, v = C, w = Math.cos(v), w += 1, w /= 2, E = m * w, E += f, T = h * w, T += d, _ = c * w, _ += p, x = Math.round(E), S = Math.round(T), b = Math.round(_);
						break;
					default:
						x = 127, S = 127, b = 127
				}
				return this._rgbToHex(x, S, b)
			}, r.prototype._rgbToHex = function (e, t, o) {
				return "#" + this._toHex(e) + this._toHex(t) + this._toHex(o)
			}, r.prototype._toHex = function (e) {
				var t;
				if (!(t = this.tohexCache[e])) {
					if (e = parseInt(e, 10), isNaN(e)) return "00";
					e = Math.max(0, Math.min(e, 255)), t = "0123456789ABCDEF".charAt((e - e % 16) / 16) + "0123456789ABCDEF".charAt(e % 16), this.tohexCache[e] = t
				}
				return t
			}, r.prototype._hexToR = function (e) {
				return parseInt(this._cutHex(e).substring(0, 2), 16)
			}, r.prototype._hexToG = function (e) {
				return parseInt(this._cutHex(e).substring(2, 4), 16)
			}, r.prototype._hexToB = function (e) {
				return parseInt(this._cutHex(e).substring(4, 6), 16)
			}, r.prototype._cutHex = function (e) {
				return "#" === e.charAt(0) ? e.substring(1, 7) : e
			}, r.prototype._time = function (e, t) {
				var o, r;
				return r = (new Date).getTime(), t(), o = (new Date).getTime(), BeelineUtils.log("" + e + " took " + (o - r) + "ms")
			}, r.prototype._revertBackground = function (e) {
				return e.style.backgroundColor = e.originalBackgroundColor || ""
			}, r.prototype._unwrap = function (e) {
				var t, o, r, n, i, s, l, a, u, c;
				for (t = [], n = [], u = e.getElementsByClassName(this.BEELINE_INDICATOR_CLASS), i = 0, l = u.length; l > i; i++) o = u[i], 0 === t.length || o === t[t.length - 1].nextSibling ? t.push(o) : (n.push(t), t = [o]);
				for (t.length > 0 && n.push(t), c = [], s = 0, a = n.length; a > s; s++) r = n[s], c.push(this._mergeContents(r));
				return c
			}, r.prototype._mergeContents = function (e) {
				var t, o, r, n, i, s, l, a, u, c;
				for (o = e[0].parentNode, r = "", n = 0, s = e.length; s > n; n++) t = e[n], null !== (null != (a = t.firstChild) ? a.nodeValue : void 0) && (r += t.firstChild.nodeValue);
				for (o.replaceChild(document.createTextNode(r), e[0]), u = e.slice(1, e.length), c = [], i = 0, l = u.length; l > i; i++) t = u[i], c.push(o.removeChild(t));
				return c
			}, r.prototype._workOff = function (e, t, o) {
				var r, n, i = this;
				for (null == o && (o = {}), n = (new Date).getTime(); (new Date).getTime() - n < this.workInterval && (r = e.shift() || t.shift());) r();
				if (e.length + t.length > 0 && o.abortable && this.abortCount > 0) {
					if (o.after) return o.after(!0)
				}
				else {
					if (e.length + t.length > 0) return BeelineUtils.afterRender(function () {
						return i._workOff(e, t, o)
					});
					if (o.after) return o.after()
				}
			}, r
		}()
	}.call(this);