! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    var i = [],
        n = e.document,
        o = i.slice,
        r = i.concat,
        s = i.push,
        a = i.indexOf,
        l = {},
        u = l.toString,
        d = l.hasOwnProperty,
        c = {},
        f = "1.12.4",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        m = /^-ms-/,
        g = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = !!e && "length" in e && e.length,
            i = p.type(e);
        return "function" !== i && !p.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    p.fn = p.prototype = {
        jquery: f,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return p.each(this, e)
        },
        map: function(e) {
            return this.pushStack(p.map(this, (function(t, i) {
                return e.call(t, i, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: i.sort,
        splice: i.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (n in o) e = s[n], s !== (i = o[n]) && (u && i && (p.isPlainObject(i) || (t = p.isArray(i))) ? (t ? (t = !1, r = e && p.isArray(e) ? e : []) : r = e && p.isPlainObject(e) ? e : {}, s[n] = p.extend(u, r, i)) : void 0 !== i && (s[n] = i));
        return s
    }, p.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (!c.ownFirst)
                for (t in e) return d.call(e, t);
            for (t in e);
            return void 0 === t || d.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(m, "ms-").replace(g, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (y(e))
                for (i = e.length; i > n && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (y(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : s.call(i, e)), i
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (a) return a.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
            if (i != i)
                for (; void 0 !== t[n];) e[o++] = t[n++];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; r > o; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, s = 0,
                a = [];
            if (y(e))
                for (n = e.length; n > s; s++) null != (o = t(e[s], s, i)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
            return r.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), p.isFunction(e) ? (i = o.call(arguments, 2), (n = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || p.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: c
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var b = function(e) {
        var t, i, n, o, r, s, a, l, u, d, c, f, p, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
            _ = e.document,
            T = 0,
            x = 0,
            C = se(),
            S = se(),
            E = se(),
            k = function(e, t) {
                return e === t && (c = !0), 0
            },
            I = 1 << 31,
            A = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            L = N.push,
            O = N.push,
            j = N.slice,
            z = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            $ = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
            q = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            W = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            R = new RegExp("^" + H + "*," + H + "*"),
            B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            Q = new RegExp(q),
            Y = new RegExp("^" + M + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ne = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            oe = function() {
                f()
            };
        try {
            O.apply(N = j.call(_.childNodes), _.childNodes)
        } catch (ie) {
            O = {
                apply: N.length ? function(e, t) {
                    L.apply(e, j.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function re(e, t, n, o) {
            var r, a, u, d, c, h, v, y, T = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
            if (!o && ((t ? t.ownerDocument || t : _) !== p && f(t), t = t || p, m)) {
                if (11 !== x && (h = J.exec(e)))
                    if (r = h[1]) {
                        if (9 === x) {
                            if (!(u = t.getElementById(r))) return n;
                            if (u.id === r) return n.push(u), n
                        } else if (T && (u = T.getElementById(r)) && b(t, u) && u.id === r) return n.push(u), n
                    } else {
                        if (h[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = h[3]) && i.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
                    }
                if (i.qsa && !E[e + " "] && (!g || !g.test(e))) {
                    if (1 !== x) T = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((d = t.getAttribute("id")) ? d = d.replace(ee, "\\$&") : t.setAttribute("id", d = w), a = (v = s(e)).length, c = Y.test(d) ? "#" + d : "[id='" + d + "']"; a--;) v[a] = c + " " + ge(v[a]);
                        y = v.join(","), T = Z.test(e) && he(t.parentNode) || t
                    }
                    if (y) try {
                        return O.apply(n, T.querySelectorAll(y)), n
                    } catch (C) {} finally {
                        d === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, n, o)
        }

        function se() {
            var e = [];
            return function t(i, o) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
            }
        }

        function ae(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var i = e.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = t
        }

        function de(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || I) - (~e.sourceIndex || I);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function pe(e) {
            return ae((function(t) {
                return t = +t, ae((function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                }))
            }))
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = re.support = {}, r = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = re.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : _;
                return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, m = !r(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", oe, !1) : o.attachEvent && o.attachEvent("onunload", oe)), i.attributes = le((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), i.getElementsByTagName = le((function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), i.getElementsByClassName = K.test(p.getElementsByClassName), i.getById = le((function(e) {
                    return h.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                })), i.getById ? (n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }, n.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete n.find.ID, n.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && m ? t.getElementsByClassName(e) : void 0
                }, v = [], g = [], (i.qsa = K.test(p.querySelectorAll)) && (le((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                })), le((function(e) {
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (i.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                    i.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === _ && b(_, e) ? -1 : t === p || t.ownerDocument === _ && b(_, t) ? 1 : d ? z(d, e) - z(d, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i, n = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : d ? z(d, e) - z(d, t) : 0;
                    if (o === r) return de(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; s[n] === a[n];) n++;
                    return n ? de(s[n], a[n]) : s[n] === _ ? -1 : a[n] === _ ? 1 : 0
                }, p) : p
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && f(e), t = t.replace(U, "='$1']"), i.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (o) {}
                return re(t, p, null, [e]).length > 0
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && f(e), b(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== p && f(e);
                var o = n.attrHandle[t.toLowerCase()],
                    r = o && A.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== r ? r : i.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    r = 0;
                if (c = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(k), c) {
                    for (; t = e[r++];) t === e[r] && (o = n.push(r));
                    for (; o--;) e.splice(n[o], 1)
                }
                return d = null, e
            }, o = re.getText = function(e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) i += o(t);
                return i
            }, (n = re.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Q.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && C(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var o = re.attr(n, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var u, d, c, f, p, h, m = r !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (p = (u = (d = (c = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            d[e] = [T, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (u = (d = (c = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === b)
                                    for (;
                                        (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((d = (c = f[w] || (f[w] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] = [T, b]), f !== t)););
                                return (b -= o) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : o.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae((function(e, i) {
                            for (var n, r = o(e, t), s = r.length; s--;) e[n = z(e, r[s])] = !(i[n] = r[s])
                        })) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: ae((function(e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(F, "$1"));
                        return n[w] ? ae((function(e, t, i, o) {
                            for (var r, s = n(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function(e, o, r) {
                            return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop()
                        }
                    })),
                    has: ae((function(e) {
                        return function(t) {
                            return re(e, t).length > 0
                        }
                    })),
                    contains: ae((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                    })),
                    lang: ae((function(e) {
                        return Y.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe((function() {
                        return [0]
                    })),
                    last: pe((function(e, t) {
                        return [t - 1]
                    })),
                    eq: pe((function(e, t, i) {
                        return [0 > i ? i + t : i]
                    })),
                    even: pe((function(e, t) {
                        for (var i = 0; t > i; i += 2) e.push(i);
                        return e
                    })),
                    odd: pe((function(e, t) {
                        for (var i = 1; t > i; i += 2) e.push(i);
                        return e
                    })),
                    lt: pe((function(e, t, i) {
                        for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    })),
                    gt: pe((function(e, t, i) {
                        for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                        return e
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = fe(t);

        function me() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function ve(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                r = x++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, r)
            } : function(t, i, s) {
                var a, l, u, d = [T, r];
                if (s) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, s)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if ((a = (l = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}))[n]) && a[0] === T && a[1] === r) return d[2] = a[2];
                            if (l[n] = d, d[2] = e(t, i, s)) return !0
                        }
            }
        }

        function ye(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), u && t.push(a)));
            return s
        }

        function we(e, t, i, n, o, r) {
            return n && !n[w] && (n = we(n)), o && !o[w] && (o = we(o, r)), ae((function(r, s, a, l) {
                var u, d, c, f = [],
                    p = [],
                    h = s.length,
                    m = r || function(e, t, i) {
                        for (var n = 0, o = t.length; o > n; n++) re(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !r && t ? m : be(m, f, e, a, l),
                    v = i ? o || (r ? e : h || n) ? [] : s : g;
                if (i && i(g, v, a, l), n)
                    for (u = be(v, p), n(u, [], a, l), d = u.length; d--;)(c = u[d]) && (v[p[d]] = !(g[p[d]] = c));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], d = v.length; d--;)(c = v[d]) && u.push(g[d] = c);
                            o(null, v = [], u, l)
                        }
                        for (d = v.length; d--;)(c = v[d]) && (u = o ? z(r, c) : f[d]) > -1 && (r[u] = !(s[u] = c))
                    }
                } else v = be(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : O.apply(s, v)
            }))
        }

        function _e(e) {
            for (var t, i, o, r = e.length, s = n.relative[e[0].type], a = s || n.relative[" "], l = s ? 1 : 0, d = ve((function(e) {
                    return e === t
                }), a, !0), c = ve((function(e) {
                    return z(t, e) > -1
                }), a, !0), f = [function(e, i, n) {
                    var o = !s && (n || i !== u) || ((t = i).nodeType ? d(e, i, n) : c(e, i, n));
                    return t = null, o
                }]; r > l; l++)
                if (i = n.relative[e[l].type]) f = [ve(ye(f), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; r > o && !n.relative[e[o].type]; o++);
                        return we(l > 1 && ye(f), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), i, o > l && _e(e.slice(l, o)), r > o && _e(e = e.slice(o)), r > o && ge(e))
                    }
                    f.push(i)
                }
            return ye(f)
        }

        function Te(e, t) {
            var i = t.length > 0,
                o = e.length > 0,
                r = function(r, s, a, l, d) {
                    var c, h, g, v = 0,
                        y = "0",
                        b = r && [],
                        w = [],
                        _ = u,
                        x = r || o && n.find.TAG("*", d),
                        C = T += null == _ ? 1 : Math.random() || .1,
                        S = x.length;
                    for (d && (u = s === p || s || d); y !== S && null != (c = x[y]); y++) {
                        if (o && c) {
                            for (h = 0, s || c.ownerDocument === p || (f(c), a = !m); g = e[h++];)
                                if (g(c, s || p, a)) {
                                    l.push(c);
                                    break
                                }
                            d && (T = C)
                        }
                        i && ((c = !g && c) && v--, r && b.push(c))
                    }
                    if (v += y, i && y !== v) {
                        for (h = 0; g = t[h++];) g(b, w, s, a);
                        if (r) {
                            if (v > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                            w = be(w)
                        }
                        O.apply(l, w), d && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                    }
                    return d && (T = C, u = _), b
                };
            return i ? ae(r) : r
        }
        return me.prototype = n.filters = n.pseudos, n.setFilters = new me, s = re.tokenize = function(e, t) {
            var i, o, r, s, a, l, u, d = S[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], u = n.preFilter; a;) {
                for (s in i && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = B.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(F, " ")
                    }), a = a.slice(i.length)), n.filter) !(o = X[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? re.error(e) : S(e, l).slice(0)
        }, a = re.compile = function(e, t) {
            var i, n = [],
                o = [],
                r = E[e + " "];
            if (!r) {
                for (t || (t = s(e)), i = t.length; i--;)(r = _e(t[i]))[w] ? n.push(r) : o.push(r);
                (r = E(e, Te(o, n))).selector = e
            }
            return r
        }, l = re.select = function(e, t, o, r) {
            var l, u, d, c, f, p = "function" == typeof e && e,
                h = !r && s(e = p.selector || e);
            if (o = o || [], 1 === h.length) {
                if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = u[0]).type && i.getById && 9 === t.nodeType && m && n.relative[u[1].type]) {
                    if (!(t = (n.find.ID(d.matches[0].replace(te, ne), t) || [])[0])) return o;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (l = X.needsContext.test(e) ? 0 : u.length; l-- && !n.relative[c = (d = u[l]).type];)
                    if ((f = n.find[c]) && (r = f(d.matches[0].replace(te, ne), Z.test(u[0].type) && he(t.parentNode) || t))) {
                        if (u.splice(l, 1), !(e = r.length && ge(u))) return O.apply(o, r), o;
                        break
                    }
            }
            return (p || a(e, h))(r, t, !m, o, !t || Z.test(e) && he(t.parentNode) || t), o
        }, i.sortStable = w.split("").sort(k).join("") === w, i.detectDuplicates = !!c, f(), i.sortDetached = le((function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        })), le((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ue("type|href|height|width", (function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), i.attributes && le((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ue("value", (function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        })), le((function(e) {
            return null == e.getAttribute("disabled")
        })) || ue(P, (function(e, t, i) {
            var n;
            return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        })), re
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && p(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        _ = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        T = p.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function S(e, t, i) {
        if (p.isFunction(t)) return p.grep(e, (function(e, n) {
            return !!t.call(e, n, e) !== i
        }));
        if (t.nodeType) return p.grep(e, (function(e) {
            return e === t !== i
        }));
        if ("string" == typeof t) {
            if (C.test(t)) return p.filter(t, e, i);
            t = p.filter(t, e)
        }
        return p.grep(e, (function(e) {
            return p.inArray(e, t) > -1 !== i
        }))
    }
    p.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, p.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter((function() {
                for (t = 0; o > t; t++)
                    if (p.contains(n[t], this)) return !0
            })));
            for (t = 0; o > t; t++) p.find(e, n[t], i);
            return (i = this.pushStack(o > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && T.test(e) ? p(e) : e || [], !1).length
        }
    });
    var E, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t, i) {
        var o, r;
        if (!e) return this;
        if (i = i || E, "string" == typeof e) {
            if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : k.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (p.merge(this, p.parseHTML(o[1], (t = t instanceof p ? t[0] : t) && t.nodeType ? t.ownerDocument || t : n, !0)), x.test(o[1]) && p.isPlainObject(t))
                    for (o in t) p.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            if ((r = n.getElementById(o[2])) && r.parentNode) {
                if (r.id !== o[2]) return E.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = n, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, E = p(n);
    var I = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    p.fn.extend({
        has: function(e) {
            var t, i = p(e, this),
                n = i.length;
            return this.filter((function() {
                for (t = 0; n > t; t++)
                    if (p.contains(this, i[t])) return !0
            }))
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, r = [], s = T.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? p.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return w(e, "parentNode", i)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return w(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return w(e, "previousSibling", i)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, (function(e, t) {
        p.fn[e] = function(i, n) {
            var o = p.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = p.filter(n, o)), this.length > 1 && (A[e] || (o = p.uniqueSort(o)), I.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    }));
    var D, L, O = /\S+/g;

    function j() {
        n.addEventListener ? (n.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z)) : (n.detachEvent("onreadystatechange", z), e.detachEvent("onload", z))
    }

    function z() {
        (n.addEventListener || "load" === e.event.type || "complete" === n.readyState) && (j(), p.ready())
    }
    for (L in p.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return p.each(e.match(O) || [], (function(e, i) {
                    t[i] = !0
                })), t
            }(e) : p.extend({}, e);
            var t, i, n, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = e.once, n = t = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < r.length;) !1 === r[a].apply(i[0], i[1]) && e.stopOnFalse && (a = r.length, i = !1);
                    e.memory || (i = !1), t = !1, o && (r = i ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (i && !t && (a = r.length - 1, s.push(i)), function t(i) {
                            p.each(i, (function(i, n) {
                                p.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== p.type(n) && t(n)
                            }))
                        }(arguments), i && !t && l()), this
                    },
                    remove: function() {
                        return p.each(arguments, (function(e, t) {
                            for (var i;
                                (i = p.inArray(t, r, i)) > -1;) r.splice(i, 1), a >= i && a--
                        })), this
                    },
                    has: function(e) {
                        return e ? p.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = i = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = !0, i || u.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, i) {
                        return o || (i = [e, (i = i || []).slice ? i.slice() : i], s.push(i), t || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, p.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return p.Deferred((function(i) {
                                p.each(t, (function(t, r) {
                                    var s = p.isFunction(e[t]) && e[t];
                                    o[r[1]]((function() {
                                        var e = s && s.apply(this, arguments);
                                        e && p.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? p.extend(e, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, p.each(t, (function(e, r) {
                    var s = r[2],
                        a = r[3];
                    n[r[1]] = s.add, a && s.add((function() {
                        i = a
                    }), t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? n : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                })), n.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, i, n, r = 0,
                    s = o.call(arguments),
                    a = s.length,
                    l = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                    u = 1 === l ? e : p.Deferred(),
                    d = function(e, i, n) {
                        return function(r) {
                            i[e] = this, n[e] = arguments.length > 1 ? o.call(arguments) : r, n === t ? u.notifyWith(i, n) : --l || u.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] && p.isFunction(s[r].promise) ? s[r].promise().progress(d(r, i, t)).done(d(r, n, s)).fail(u.reject) : --l;
                return l || u.resolveWith(n, s), u.promise()
            }
        }), p.fn.ready = function(e) {
            return p.ready.promise().done(e), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? p.readyWait++ : p.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || (D.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready"))))
            }
        }), p.ready.promise = function(t) {
            if (!D)
                if (D = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll) e.setTimeout(p.ready);
                else if (n.addEventListener) n.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z);
            else {
                n.attachEvent("onreadystatechange", z), e.attachEvent("onload", z);
                var i = !1;
                try {
                    i = null == e.frameElement && n.documentElement
                } catch (o) {}
                i && i.doScroll && function n() {
                    if (!p.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(n, 50)
                        }
                        j(), p.ready()
                    }
                }()
            }
            return D.promise(t)
        }, p.ready.promise(), p(c)) break;
    c.ownFirst = "0" === L, c.inlineBlockNeedsLayout = !1, p((function() {
            var e, t, i, o;
            (i = n.getElementsByTagName("body")[0]) && i.style && (t = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(o))
        })),
        function() {
            var e = n.createElement("div");
            c.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                c.deleteExpando = !1
            }
            e = null
        }();
    var P = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
        },
        H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /([A-Z])/g;

    function $(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(M, "-$1").toLowerCase();
            if ("string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : H.test(i) ? p.parseJSON(i) : i)
                } catch (o) {}
                p.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function q(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function W(e, t, n, o) {
        if (P(e)) {
            var r, s, a = p.expando,
                l = e.nodeType,
                u = l ? p.cache : e,
                d = l ? e[a] : e[a] && a;
            if (d && u[d] && (o || u[d].data) || void 0 !== n || "string" != typeof t) return d || (d = l ? e[a] = i.pop() || p.guid++ : a), u[d] || (u[d] = l ? {} : {
                toJSON: p.noop
            }), "object" != typeof t && "function" != typeof t || (o ? u[d] = p.extend(u[d], t) : u[d].data = p.extend(u[d].data, t)), s = u[d], o || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[p.camelCase(t)] = n), "string" == typeof t ? null == (r = s[t]) && (r = s[p.camelCase(t)]) : r = s, r
        }
    }

    function F(e, t, i) {
        if (P(e)) {
            var n, o, r = e.nodeType,
                s = r ? p.cache : e,
                a = r ? e[p.expando] : p.expando;
            if (s[a]) {
                if (t && (n = i ? s[a] : s[a].data)) {
                    o = (t = p.isArray(t) ? t.concat(p.map(t, p.camelCase)) : t in n || (t = p.camelCase(t)) in n ? [t] : t.split(" ")).length;
                    for (; o--;) delete n[t[o]];
                    if (i ? !q(n) : !p.isEmptyObject(n)) return
                }(i || (delete s[a].data, q(s[a]))) && (r ? p.cleanData([e], !0) : c.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    p.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !q(e)
            },
            data: function(e, t, i) {
                return W(e, t, i)
            },
            removeData: function(e, t) {
                return F(e, t)
            },
            _data: function(e, t, i) {
                return W(e, t, i, !0)
            },
            _removeData: function(e, t) {
                return F(e, t, !0)
            }
        }), p.fn.extend({
            data: function(e, t) {
                var i, n, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = p.data(r), 1 === r.nodeType && !p._data(r, "parsedAttrs"))) {
                        for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && $(r, n = p.camelCase(n.slice(5)), o[n]);
                        p._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    p.data(this, e)
                })) : arguments.length > 1 ? this.each((function() {
                    p.data(this, e, t)
                })) : r ? $(r, e, p.data(r, e)) : void 0
            },
            removeData: function(e) {
                return this.each((function() {
                    p.removeData(this, e)
                }))
            }
        }), p.extend({
            queue: function(e, t, i) {
                var n;
                return e ? (n = p._data(e, t = (t || "fx") + "queue"), i && (!n || p.isArray(i) ? n = p._data(e, t, p.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(e, t) {
                var i = p.queue(e, t = t || "fx"),
                    n = i.length,
                    o = i.shift(),
                    r = p._queueHooks(e, t);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, (function() {
                    p.dequeue(e, t)
                }), r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return p._data(e, i) || p._data(e, i, {
                    empty: p.Callbacks("once memory").add((function() {
                        p._removeData(e, t + "queue"), p._removeData(e, i)
                    }))
                })
            }
        }), p.fn.extend({
            queue: function(e, t) {
                var i = 2;
                return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? p.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var i = p.queue(this, e, t);
                    p._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    p.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var i, n = 1,
                    o = p.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --n || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = p._data(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(t)
            }
        }),
        function() {
            var e;
            c.shrinkWrapBlocks = function() {
                return null != e ? e : (e = !1, (i = n.getElementsByTagName("body")[0]) && i.style ? (t = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(n.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(o), e) : void 0);
                var t, i, o
            }
        }();
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        Q = function(e, t) {
            return "none" === p.css(e = t || e, "display") || !p.contains(e.ownerDocument, e)
        };

    function Y(e, t, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return p.css(e, t, "")
            },
            l = a(),
            u = i && i[3] || (p.cssNumber[t] ? "" : "px"),
            d = (p.cssNumber[t] || "px" !== u && +l) && B.exec(p.css(e, t));
        if (d && d[3] !== u) {
            u = u || d[3], i = i || [], d = +l || 1;
            do {
                p.style(e, t, (d /= r = r || ".5") + u)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = d, n.end = o)), o
    }
    var X = function(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                u = null == i;
            if ("object" === p.type(i))
                for (a in o = !0, i) X(e, t, a, i[a], !0, r, s);
            else if (void 0 !== n && (o = !0, p.isFunction(n) || (s = !0), u && (s ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                    return u.call(p(e), i)
                })), t))
                for (; l > a; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : u ? t.call(e) : l ? t(e[0], i) : r
        },
        V = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        K = /^$|\/(?:java|ecma)script/i,
        J = /^\s+/,
        Z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ee(e) {
        var t = Z.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }! function() {
        var e = n.createElement("div"),
            t = n.createDocumentFragment(),
            i = n.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === e.firstChild.nodeType, c.tbody = !e.getElementsByTagName("tbody").length, c.htmlSerialize = !!e.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), c.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), (i = n.createElement("input")).setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !!e.addEventListener, e[p.expando] = 1, c.attributes = !e.getAttribute(p.expando)
    }();
    var te = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function ie(e, t) {
        var i, n, o = 0,
            r = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || p.nodeName(n, t) ? r.push(n) : p.merge(r, ie(n, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], r) : r
    }

    function ne(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) p._data(i, "globalEval", !t || p._data(t[n], "globalEval"))
    }
    te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, te.th = te.td;
    var oe = /<|&#?\w+;/,
        re = /<tbody/i;

    function se(e) {
        V.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ae(e, t, i, n, o) {
        for (var r, s, a, l, u, d, f, h = e.length, m = ee(t), g = [], v = 0; h > v; v++)
            if ((s = e[v]) || 0 === s)
                if ("object" === p.type(s)) p.merge(g, s.nodeType ? [s] : s);
                else if (oe.test(s)) {
            for (l = l || m.appendChild(t.createElement("div")), u = (G.exec(s) || ["", ""])[1].toLowerCase(), l.innerHTML = (f = te[u] || te._default)[1] + p.htmlPrefilter(s) + f[2], r = f[0]; r--;) l = l.lastChild;
            if (!c.leadingWhitespace && J.test(s) && g.push(t.createTextNode(J.exec(s)[0])), !c.tbody)
                for (r = (s = "table" !== u || re.test(s) ? "<table>" !== f[1] || re.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) p.nodeName(d = s.childNodes[r], "tbody") && !d.childNodes.length && s.removeChild(d);
            for (p.merge(g, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = m.lastChild
        } else g.push(t.createTextNode(s));
        for (l && m.removeChild(l), c.appendChecked || p.grep(ie(g, "input"), se), v = 0; s = g[v++];)
            if (n && p.inArray(s, n) > -1) o && o.push(s);
            else if (a = p.contains(s.ownerDocument, s), l = ie(m.appendChild(s), "script"), a && ne(l), i)
            for (r = 0; s = l[r++];) K.test(s.type || "") && i.push(s);
        return l = null, m
    }! function() {
        var t, i, o = n.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            })(c[t] = (i = "on" + t) in e) || (o.setAttribute(i, "t"), c[t] = !1 === o.attributes[i].expando);
        o = null
    }();
    var le = /^(?:input|select|textarea)$/i,
        ue = /^key/,
        de = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ce = /^(?:focusinfocus|focusoutblur)$/,
        fe = /^([^.]*)(?:\.(.+)|)/;

    function pe() {
        return !0
    }

    function he() {
        return !1
    }

    function me() {
        try {
            return n.activeElement
        } catch (e) {}
    }

    function ge(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) ge(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = he;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return p().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = p.guid++)), e.each((function() {
            p.event.add(this, t, o, n, i)
        }))
    }
    p.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, u, d, c, f, h, m, g, v = p._data(e);
            if (v) {
                for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = p.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || ((d = v.handle = function(e) {
                        return void 0 === p || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(d.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(O) || [""]).length; a--;) h = g = (r = fe.exec(t[a]) || [])[1], m = (r[2] || "").split(".").sort(), h && (u = p.event.special[h] || {}, u = p.event.special[h = (o ? u.delegateType : u.bindType) || h] || {}, c = p.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (f = s[h]) || ((f = s[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, m, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), p.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, u, d, c, f, h, m, g, v = p.hasData(e) && p._data(e);
            if (v && (d = v.events)) {
                for (u = (t = (t || "").match(O) || [""]).length; u--;)
                    if (h = g = (a = fe.exec(t[u]) || [])[1], m = (a[2] || "").split(".").sort(), h) {
                        for (c = p.event.special[h] || {}, f = d[h = (n ? c.delegateType : c.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !o && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, c.remove && c.remove.call(e, s));
                        l && !f.length && (c.teardown && !1 !== c.teardown.call(e, m, v.handle) || p.removeEvent(e, h, v.handle), delete d[h])
                    } else
                        for (h in d) p.event.remove(e, h + t[u], i, n, !0);
                p.isEmptyObject(d) && (delete v.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, i, o, r) {
            var s, a, l, u, c, f, h, m = [o || n],
                g = d.call(t, "type") ? t.type : t,
                v = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = f = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !ce.test(g + p.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), a = g.indexOf(":") < 0 && "on" + g, (t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), i = null == i ? [t] : p.makeArray(i, [t]), c = p.event.special[g] || {}, r || !c.trigger || !1 !== c.trigger.apply(o, i))) {
                if (!r && !c.noBubble && !p.isWindow(o)) {
                    for (ce.test((u = c.delegateType || g) + g) || (l = l.parentNode); l; l = l.parentNode) m.push(l), f = l;
                    f === (o.ownerDocument || n) && m.push(f.defaultView || f.parentWindow || e)
                }
                for (h = 0;
                    (l = m[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? u : c.bindType || g, (s = (p._data(l, "events") || {})[t.type] && p._data(l, "handle")) && s.apply(l, i), (s = a && l[a]) && s.apply && P(l) && (t.result = s.apply(l, i), !1 === t.result && t.preventDefault());
                if (t.type = g, !r && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(m.pop(), i)) && P(o) && a && o[g] && !p.isWindow(o)) {
                    (f = o[a]) && (o[a] = null), p.event.triggered = g;
                    try {
                        o[g]()
                    } catch (y) {}
                    p.event.triggered = void 0, f && (o[a] = f)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, i, n, r, s, a = [],
                l = o.call(arguments),
                u = (p._data(this, "events") || {})[e.type] || [],
                d = p.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (a = p.event.handlers.call(this, e, u), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (n = ((p.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (n = [], i = 0; a > i; i++) void 0 === n[o = (r = t[i]).selector + " "] && (n[o] = r.needsContext ? p(o, this).index(l) > -1 : p.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, i, o, r = e.type,
                s = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = de.test(r) ? this.mouseHooks : ue.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(s), t = o.length; t--;) e[i = o[t]] = s[i];
            return e.target || (e.target = s.srcElement || n), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, o, r, s = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (o = e.target.ownerDocument || n).body, e.pageX = t.clientX + ((r = o.documentElement) && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== me() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === me() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i) {
            var n = p.extend(new p.Event, i, {
                type: e,
                isSimulated: !0
            });
            p.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
        }
    }, p.removeEvent = n.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (void 0 === e[n] && (e[n] = null), e.detachEvent(n, i))
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? pe : he) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: he,
        isPropagationStopped: he,
        isImmediatePropagationStopped: he,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = pe, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = pe, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = pe, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === n || p.contains(n, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    })), c.submit || (p.event.special.submit = {
        setup: function() {
            return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", (function(e) {
                var t = e.target,
                    i = p.nodeName(t, "input") || p.nodeName(t, "button") ? p.prop(t, "form") : void 0;
                i && !p._data(i, "submit") && (p.event.add(i, "submit._submit", (function(e) {
                    e._submitBubble = !0
                })), p._data(i, "submit", !0))
            }))
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
        }
    }), c.change || (p.event.special.change = {
        setup: function() {
            return le.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (p.event.add(this, "propertychange._change", (function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            })), p.event.add(this, "click._change", (function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, e)
            }))), !1) : void p.event.add(this, "beforeactivate._change", (function(e) {
                var t = e.target;
                le.test(t.nodeName) && !p._data(t, "change") && (p.event.add(t, "change._change", (function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e)
                })), p._data(t, "change", !0))
            }))
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !le.test(this.nodeName)
        }
    }), c.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var i = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e))
        };
        p.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = p._data(n, t);
                o || n.addEventListener(e, i, !0), p._data(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = p._data(n, t) - 1;
                o ? p._data(n, t, o) : (n.removeEventListener(e, i, !0), p._removeData(n, t))
            }
        }
    })), p.fn.extend({
        on: function(e, t, i, n) {
            return ge(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return ge(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = he), this.each((function() {
                p.event.remove(this, e, i, t)
            }))
        },
        trigger: function(e, t) {
            return this.each((function() {
                p.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? p.event.trigger(e, t, i, !0) : void 0
        }
    });
    var ve = / jQuery\d+="(?:null|\d+)"/g,
        ye = new RegExp("<(?:" + Z + ")[\\s/>]", "i"),
        be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        we = /<script|<style|<link/i,
        _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Te = /^true\/(.*)/,
        xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ce = ee(n).appendChild(n.createElement("div"));

    function Se(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ee(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function ke(e) {
        var t = Te.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var i, n, o, r = p._data(e),
                s = p._data(t, r),
                a = r.events;
            if (a)
                for (i in delete s.handle, s.events = {}, a)
                    for (n = 0, o = a[i].length; o > n; n++) p.event.add(t, i, a[i][n]);
            s.data && (s.data = p.extend({}, s.data))
        }
    }

    function Ae(e, t) {
        var i, n, o;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                for (n in (o = p._data(t)).events) p.removeEvent(t, n, o.handle);
                t.removeAttribute(p.expando)
            }
            "script" === i && t.text !== e.text ? (Ee(t).text = e.text, ke(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && V.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
    }

    function Ne(e, t, i, n) {
        t = r.apply([], t);
        var o, s, a, l, u, d, f = 0,
            h = e.length,
            m = h - 1,
            g = t[0],
            v = p.isFunction(g);
        if (v || h > 1 && "string" == typeof g && !c.checkClone && _e.test(g)) return e.each((function(o) {
            var r = e.eq(o);
            v && (t[0] = g.call(this, o, r.html())), Ne(r, t, i, n)
        }));
        if (h && (o = (d = ae(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === d.childNodes.length && (d = o), o || n)) {
            for (a = (l = p.map(ie(d, "script"), Ee)).length; h > f; f++) s = d, f !== m && (s = p.clone(s, !0, !0), a && p.merge(l, ie(s, "script"))), i.call(e[f], s, f);
            if (a)
                for (u = l[l.length - 1].ownerDocument, p.map(l, ke), f = 0; a > f; f++) K.test((s = l[f]).type || "") && !p._data(s, "globalEval") && p.contains(u, s) && (s.src ? p._evalUrl && p._evalUrl(s.src) : p.globalEval((s.text || s.textContent || s.innerHTML || "").replace(xe, "")));
            d = o = null
        }
        return e
    }

    function De(e, t, i) {
        for (var n, o = t ? p.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || p.cleanData(ie(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && ne(ie(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    p.extend({
        htmlPrefilter: function(e) {
            return e.replace(be, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, r, s, a, l = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !ye.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ce.innerHTML = e.outerHTML, Ce.removeChild(r = Ce.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (n = ie(r), a = ie(e), s = 0; null != (o = a[s]); ++s) n[s] && Ae(o, n[s]);
            if (t)
                if (i)
                    for (a = a || ie(e), n = n || ie(r), s = 0; null != (o = a[s]); s++) Ie(o, n[s]);
                else Ie(e, r);
            return (n = ie(r, "script")).length > 0 && ne(n, !l && ie(e, "script")), n = a = o = null, r
        },
        cleanData: function(e, t) {
            for (var n, o, r, s, a = 0, l = p.expando, u = p.cache, d = c.attributes, f = p.event.special; null != (n = e[a]); a++)
                if ((t || P(n)) && (s = (r = n[l]) && u[r])) {
                    if (s.events)
                        for (o in s.events) f[o] ? p.event.remove(n, o) : p.removeEvent(n, o, s.handle);
                    u[r] && (delete u[r], d || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), i.push(r))
                }
        }
    }), p.fn.extend({
        domManip: Ne,
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return X(this, (function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(e))
            }), null, e, arguments.length)
        },
        append: function() {
            return Ne(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Se(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return Ne(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return Ne(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return Ne(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && p.cleanData(ie(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return p.clone(this, e, t)
            }))
        },
        html: function(e) {
            return X(this, (function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ve, "") : void 0;
                if ("string" == typeof e && !we.test(e) && (c.htmlSerialize || !ye.test(e)) && (c.leadingWhitespace || !J.test(e)) && !te[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = p.htmlPrefilter(e);
                    try {
                        for (; n > i; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(ie(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ne(this, arguments, (function(t) {
                var i = this.parentNode;
                p.inArray(this, e) < 0 && (p.cleanData(ie(this)), i && i.replaceChild(t, this))
            }), e)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        p.fn[e] = function(e) {
            for (var i, n = 0, o = [], r = p(e), a = r.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), p(r[n])[t](i), s.apply(o, i.get());
            return this.pushStack(o)
        }
    }));
    var Le, Oe = {
        HTML: "block",
        BODY: "block"
    };

    function je(e, t) {
        var i = p(t.createElement(e)).appendTo(t.body),
            n = p.css(i[0], "display");
        return i.detach(), n
    }

    function ze(e) {
        var t = n,
            i = Oe[e];
        return i || ("none" !== (i = je(e, t)) && i || ((t = ((Le = (Le || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Le[0].contentDocument).document).write(), t.close(), i = je(e, t), Le.detach()), Oe[e] = i), i
    }
    var Pe = /^margin/,
        He = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
        Me = function(e, t, i, n) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = i.apply(e, n || []), t) e.style[r] = s[r];
            return o
        },
        $e = n.documentElement;
    ! function() {
        var t, i, o, r, s, a, l = n.createElement("div"),
            u = n.createElement("div");
        if (u.style) {
            function d() {
                var d, c, f = n.documentElement;
                f.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = o = a = !1, i = s = !0, e.getComputedStyle && (c = e.getComputedStyle(u), t = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, (d = u.appendChild(n.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", u.style.width = "1px", s = !parseFloat((e.getComputedStyle(d) || {}).marginRight), u.removeChild(d)), u.style.display = "none", (r = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (d = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === d[0].offsetHeight) && (d[0].style.display = "", d[1].style.display = "none", r = 0 === d[0].offsetHeight)), f.removeChild(l)
            }
            u.style.cssText = "float:left;opacity:.5", c.opacity = "0.5" === u.style.opacity, c.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, (l = n.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), c.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, p.extend(c, {
                reliableHiddenOffsets: function() {
                    return null == t && d(), r
                },
                boxSizingReliable: function() {
                    return null == t && d(), o
                },
                pixelMarginRight: function() {
                    return null == t && d(), i
                },
                pixelPosition: function() {
                    return null == t && d(), t
                },
                reliableMarginRight: function() {
                    return null == t && d(), s
                },
                reliableMarginLeft: function() {
                    return null == t && d(), a
                }
            })
        }
    }();
    var qe, We, Fe = /^(top|right|bottom|left)$/;

    function Re(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    e.getComputedStyle ? (qe = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e), i.getComputedStyle(t)
    }, We = function(e, t, i) {
        var n, o, r, s, a = e.style;
        return "" !== (s = (i = i || qe(e)) ? i.getPropertyValue(t) || i[t] : void 0) && void 0 !== s || p.contains(e.ownerDocument, e) || (s = p.style(e, t)), i && !c.pixelMarginRight() && He.test(s) && Pe.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : $e.currentStyle && (qe = function(e) {
        return e.currentStyle
    }, We = function(e, t, i) {
        var n, o, r, s, a = e.style;
        return null == (s = (i = i || qe(e)) ? i[t] : void 0) && a && a[t] && (s = a[t]), He.test(s) && !Fe.test(t) && (n = a.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = n, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var Be = /alpha\([^)]*\)/i,
        Ue = /opacity\s*=\s*([^)]*)/i,
        Qe = /^(none|table(?!-c[ea]).+)/,
        Ye = new RegExp("^(" + R + ")(.*)$", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"],
        Ke = n.createElement("div").style;

    function Je(e) {
        if (e in Ke) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = Ge.length; i--;)
            if ((e = Ge[i] + t) in Ke) return e
    }

    function Ze(e, t) {
        for (var i, n, o, r = [], s = 0, a = e.length; a > s; s++)(n = e[s]).style && (r[s] = p._data(n, "olddisplay"), i = n.style.display, t ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Q(n) && (r[s] = p._data(n, "olddisplay", ze(n.nodeName)))) : (o = Q(n), (i && "none" !== i || !o) && p._data(n, "olddisplay", o ? i : p.css(n, "display"))));
        for (s = 0; a > s; s++)(n = e[s]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function et(e, t, i) {
        var n = Ye.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function tt(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += p.css(e, i + U[r], !0, o)), n ? ("content" === i && (s -= p.css(e, "padding" + U[r], !0, o)), "margin" !== i && (s -= p.css(e, "border" + U[r] + "Width", !0, o))) : (s += p.css(e, "padding" + U[r], !0, o), "padding" !== i && (s += p.css(e, "border" + U[r] + "Width", !0, o)));
        return s
    }

    function it(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = qe(e),
            s = c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if ((0 > (o = We(e, t, r)) || null == o) && (o = e.style[t]), He.test(o)) return o;
            n = s && (c.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + tt(e, t, i || (s ? "border" : "content"), n, r) + "px"
    }

    function nt(e, t, i, n, o) {
        return new nt.prototype.init(e, t, i, n, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = We(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = p.camelCase(t),
                    l = e.style;
                if (t = p.cssProps[a] || (p.cssProps[a] = Je(a) || a), s = p.cssHooks[t] || p.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t];
                if ("string" == (r = typeof i) && (o = B.exec(i)) && o[1] && (i = Y(e, t, o), r = "number"), null != i && i == i && ("number" === r && (i += o && o[3] || (p.cssNumber[a] ? "" : "px")), c.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !s || !("set" in s) || void 0 !== (i = s.set(e, i, n)))) try {
                    l[t] = i
                } catch (u) {}
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = p.camelCase(t);
            return t = p.cssProps[a] || (p.cssProps[a] = Je(a) || a), (s = p.cssHooks[t] || p.cssHooks[a]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = We(e, t, n)), "normal" === r && t in Ve && (r = Ve[t]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }), p.each(["height", "width"], (function(e, t) {
        p.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Qe.test(p.css(e, "display")) && 0 === e.offsetWidth ? Me(e, Xe, (function() {
                    return it(e, t, n)
                })) : it(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var o = n && qe(e);
                return et(0, i, n ? tt(e, t, n, c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    })), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return Ue.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                o = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(r.replace(Be, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = Be.test(r) ? r.replace(Be, o) : r + " " + o)
        }
    }), p.cssHooks.marginRight = Re(c.reliableMarginRight, (function(e, t) {
        return t ? Me(e, {
            display: "inline-block"
        }, We, [e, "marginRight"]) : void 0
    })), p.cssHooks.marginLeft = Re(c.reliableMarginLeft, (function(e, t) {
        return t ? (parseFloat(We(e, "marginLeft")) || (p.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        })) : 0)) + "px" : void 0
    })), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + U[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, Pe.test(e) || (p.cssHooks[e + t].set = et)
    })), p.fn.extend({
        css: function(e, t) {
            return X(this, (function(e, t, i) {
                var n, o, r = {},
                    s = 0;
                if (p.isArray(t)) {
                    for (n = qe(e), o = t.length; o > s; s++) r[t[s]] = p.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
            }), e, t, arguments.length > 1)
        },
        show: function() {
            return Ze(this, !0)
        },
        hide: function() {
            return Ze(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                Q(this) ? p(this).show() : p(this).hide()
            }))
        }
    }), p.Tween = nt, (nt.prototype = {
        constructor: nt,
        init: function(e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (p.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = nt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, p.fx = nt.prototype.init, p.fx.step = {};
    var ot, rt, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function lt() {
        return e.setTimeout((function() {
            ot = void 0
        })), ot = p.now()
    }

    function ut(e, t) {
        var i, n = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n["margin" + (i = U[o])] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function dt(e, t, i) {
        for (var n, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, t, e)) return n
    }

    function ct(e, t, i) {
        var n, o, r = 0,
            s = ct.prefilters.length,
            a = p.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (o) return !1;
                for (var t = ot || lt(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), r = 0, s = u.tweens.length; s > r; r++) u.tweens[r].run(n);
                return a.notifyWith(e, [u, n, i]), 1 > n && s ? i : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: ot || lt(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = p.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) u.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            d = u.props;
        for (function(e, t) {
                var i, n, o, r, s;
                for (i in e)
                    if (o = t[n = p.camelCase(i)], p.isArray(r = e[i]) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = p.cssHooks[n]) && "expand" in s)
                        for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o);
                    else t[n] = o
            }(d, u.opts.specialEasing); s > r; r++)
            if (n = ct.prefilters[r].call(u, e, d, u.opts)) return p.isFunction(n.stop) && (p._queueHooks(u.elem, u.opts.queue).stop = p.proxy(n.stop, n)), n;
        return p.map(d, dt, u), p.isFunction(u.opts.start) && u.opts.start.call(e, u), p.fx.timer(p.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    p.Animation = p.extend(ct, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return Y(i.elem, e, B.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);
                for (var i, n = 0, o = e.length; o > n; n++)(ct.tweeners[i = e[n]] = ct.tweeners[i] || []).unshift(t)
            },
            prefilters: [function(e, t, i) {
                var n, o, r, s, a, l, u, d = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && Q(e),
                    g = p._data(e, "fxshow");
                for (n in i.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, d.always((function() {
                        d.always((function() {
                            a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = p.css(e, "display")) ? p._data(e, "olddisplay") || ze(e.nodeName) : u) && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== ze(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", c.shrinkWrapBlocks() || d.always((function() {
                        h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                    }))), t)
                    if (st.exec(o = t[n])) {
                        if (delete t[n], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[n]) continue;
                            m = !0
                        }
                        f[n] = g && g[n] || p.style(e, n)
                    } else u = void 0;
                if (p.isEmptyObject(f)) "inline" === ("none" === u ? ze(e.nodeName) : u) && (h.display = u);
                else
                    for (n in g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), r && (g.hidden = !m), m ? p(e).show() : d.done((function() {
                            p(e).hide()
                        })), d.done((function() {
                            var t;
                            for (t in p._removeData(e, "fxshow"), f) p.style(e, t, f[t])
                        })), f) s = dt(m ? g[n] : 0, n, d), n in g || (g[n] = s.start, m && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
            }
        }), p.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? p.extend({}, e) : {
                complete: i || !i && t || p.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !p.isFunction(t) && t
            };
            return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
            }, n
        }, p.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(Q).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var o = p.isEmptyObject(e),
                    r = p.speed(t, i, n),
                    s = function() {
                        var t = ct(this, p.extend({}, e), r);
                        (o || p._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = p.timers,
                        s = p._data(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && at.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                    !t && i || p.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, i = p._data(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        r = p.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                }))
            }
        }), p.each(["toggle", "show", "hide"], (function(e, t) {
            var i = p.fn[t];
            p.fn[t] = function(e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ut(t, !0), e, n, o)
            }
        })), p.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            p.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        })), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                i = 0;
            for (ot = p.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
            t.length || p.fx.stop(), ot = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            rt || (rt = e.setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            e.clearInterval(rt), rt = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(t, i) {
            return t = p.fx && p.fx.speeds[t] || t, this.queue(i = i || "fx", (function(i, n) {
                var o = e.setTimeout(i, t);
                n.stop = function() {
                    e.clearTimeout(o)
                }
            }))
        },
        function() {
            var e, t = n.createElement("input"),
                i = n.createElement("div"),
                o = n.createElement("select"),
                r = o.appendChild(n.createElement("option"));
            (i = n.createElement("div")).setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), i.appendChild(t), (e = i.getElementsByTagName("a")[0]).style.cssText = "top:1px", c.getSetAttribute = "t" !== i.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!n.createElement("form").enctype, o.disabled = !0, c.optDisabled = !r.disabled, (t = n.createElement("input")).setAttribute("value", ""), c.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), c.radioValue = "t" === t.value
        }();
    var ft = /\r/g,
        pt = /[\x20\t\r\n\f]+/g;
    p.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = p.isFunction(e), this.each((function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? e.call(this, i, p(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ft, "") : null == i ? "" : i : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e)).replace(pt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (((i = n[l]).selected || l === o) && (c.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
                            if (t = p(i).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = p.makeArray(t), s = o.length; s--;)
                        if (p.inArray(p.valHooks.option.get(n = o[s]), r) > -1) try {
                            n.selected = i = !0
                        } catch (a) {} else n.selected = !1;
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), p.each(["radio", "checkbox"], (function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }));
    var ht, mt, gt = p.expr.attrHandle,
        vt = /^(?:checked|selected)$/i,
        yt = c.getSetAttribute,
        bt = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return X(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                p.removeAttr(this, e)
            }))
        }
    }), p.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? p.prop(e, t, i) : (1 === r && p.isXMLDoc(e) || (t = t.toLowerCase(), o = p.attrHooks[t] || (p.expr.match.bool.test(t) ? mt : ht)), void 0 !== i ? null === i ? void p.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = p.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                r = t && t.match(O);
            if (r && 1 === e.nodeType)
                for (; i = r[o++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) ? bt && yt || !vt.test(i) ? e[n] = !1 : e[p.camelCase("default-" + i)] = e[n] = !1 : p.attr(e, i, ""), e.removeAttribute(yt ? i : n)
        }
    }), mt = {
        set: function(e, t, i) {
            return !1 === t ? p.removeAttr(e, i) : bt && yt || !vt.test(i) ? e.setAttribute(!yt && p.propFix[i] || i, i) : e[p.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var i = gt[t] || p.find.attr;
        gt[t] = bt && yt || !vt.test(t) ? function(e, t, n) {
            var o, r;
            return n || (r = gt[t], gt[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, gt[t] = r), o
        } : function(e, t, i) {
            return i ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    })), bt && yt || (p.attrHooks.value = {
        set: function(e, t, i) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : ht && ht.set(e, t, i)
        }
    }), yt || (ht = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, gt.id = gt.name = gt.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: ht.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, i) {
            ht.set(e, "" !== t && t, i)
        }
    }, p.each(["width", "height"], (function(e, t) {
        p.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    }))), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wt = /^(?:input|select|textarea|button|object)$/i,
        _t = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return X(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each((function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            }))
        }
    }), p.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && p.isXMLDoc(e) || (o = p.propHooks[t = p.propFix[t] || t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), c.hrefNormalized || p.each(["href", "src"], (function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        p.propFix[this.toLowerCase()] = this
    })), c.enctype || (p.propFix.enctype = "encoding");
    var Tt = /[\t\r\n\f]/g;

    function xt(e) {
        return p.attr(e, "class") || ""
    }
    p.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (p.isFunction(e)) return this.each((function(t) {
                p(this).addClass(e.call(this, t, xt(this)))
            }));
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; i = this[l++];)
                    if (o = xt(i), n = 1 === i.nodeType && (" " + o + " ").replace(Tt, " ")) {
                        for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o !== (a = p.trim(n)) && p.attr(i, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (p.isFunction(e)) return this.each((function(t) {
                p(this).removeClass(e.call(this, t, xt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; i = this[l++];)
                    if (o = xt(i), n = 1 === i.nodeType && (" " + o + " ").replace(Tt, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        o !== (a = p.trim(n)) && p.attr(i, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each((function(i) {
                p(this).toggleClass(e.call(this, i, xt(this), t), t)
            })) : this.each((function() {
                var t, n, o, r;
                if ("string" === i)
                    for (n = 0, o = p(this), r = e.match(O) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = xt(this)) && p._data(this, "__className__", t), p.attr(this, "class", t || !1 === e ? "" : p._data(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + xt(i) + " ").replace(Tt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        p.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    })), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ct = e.location,
        St = p.now(),
        Et = /\?/,
        kt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            o = p.trim(t + "");
        return o && !p.trim(o.replace(kt, (function(e, t, o, r) {
            return i && t && (n = 0), 0 === n ? e : (i = o || t, n += !r - !o, "")
        }))) ? Function("return " + o)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? i = (new e.DOMParser).parseFromString(t, "text/xml") : ((i = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(t))
        } catch (o) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), i
    };
    var It = /#.*$/,
        At = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        jt = {},
        zt = {},
        Pt = "*/".concat("*"),
        Ht = Ct.href,
        Mt = Ot.exec(Ht.toLowerCase()) || [];

    function $t(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                r = t.toLowerCase().match(O) || [];
            if (p.isFunction(i))
                for (; n = r[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function qt(e, t, i, n) {
        var o = {},
            r = e === zt;

        function s(a) {
            var l;
            return o[a] = !0, p.each(e[a] || [], (function(e, a) {
                var u = a(t, i, n);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Wt(e, t) {
        var i, n, o = p.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && p.extend(!0, e, i), e
    }

    function Ft(e) {
        return e.style && e.style.display || p.css(e, "display")
    }
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, p.ajaxSettings), t) : Wt(p.ajaxSettings, e)
        },
        ajaxPrefilter: $t(jt),
        ajaxTransport: $t(zt),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0);
            var n, o, r, s, a, l, u, d, c = p.ajaxSetup({}, i = i || {}),
                f = c.context || c,
                h = c.context && (f.nodeType || f.jquery) ? p(f) : p.event,
                m = p.Deferred(),
                g = p.Callbacks("once memory"),
                v = c.statusCode || {},
                y = {},
                b = {},
                w = 0,
                _ = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = Nt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return w || (e = b[i] = b[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return u && u.abort(t), C(0, t), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, c.url = ((t || c.url || Ht) + "").replace(It, "").replace(Lt, Mt[1] + "//"), c.type = i.method || i.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(O) || [""], null == c.crossDomain && (n = Ot.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Mt[1] && n[2] === Mt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Mt[3] || ("http:" === Mt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), qt(jt, c, i, T), 2 === w) return T;
            for (o in (l = p.event && c.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Dt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Et.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = At.test(r) ? r.replace(At, "$1_=" + St++) : r + (Et.test(r) ? "&" : "?") + "_=" + St++)), c.ifModified && (p.lastModified[r] && T.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && T.setRequestHeader("If-None-Match", p.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || i.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : c.accepts["*"]), c.headers) T.setRequestHeader(o, c.headers[o]);
            if (c.beforeSend && (!1 === c.beforeSend.call(f, T, c) || 2 === w)) return T.abort();
            for (o in _ = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](c[o]);
            if (u = qt(zt, c, i, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, c]), 2 === w) return T;
                c.async && c.timeout > 0 && (a = e.setTimeout((function() {
                    T.abort("timeout")
                }), c.timeout));
                try {
                    w = 1, u.send(y, C)
                } catch (x) {
                    if (!(2 > w)) throw x;
                    C(-1, x)
                }
            } else C(-1, "No Transport");

            function C(t, i, n, o) {
                var d, y, b, _, x, C = i;
                2 !== w && (w = 2, a && e.clearTimeout(a), u = void 0, s = o || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, n && (_ = function(e, t, i) {
                    for (var n, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in a)
                            if (a[s] && a[s].test(o)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i) r = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            n || (n = s)
                        }
                        r = r || n
                    }
                    return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
                }(c, T, n)), _ = function(e, t, i, n) {
                    var o, r, s, a, l, u = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = u[l + " " + r] || u["* " + r]))
                            for (o in u)
                                if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: s ? c : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(c, _, T, d), d ? (c.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (p.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (p.etag[r] = x)), 204 === t || "HEAD" === c.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = _.state, y = _.data, d = !(b = _.error))) : (b = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (i || C) + "", d ? m.resolveWith(f, [y, C, T]) : m.rejectWith(f, [T, C, b]), T.statusCode(v), v = void 0, l && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, c, d ? y : b]), g.fireWith(f, [T, C]), l && (h.trigger("ajaxComplete", [T, c]), --p.active || p.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, i) {
            return p.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], (function(e, t) {
        p[t] = function(e, i, n, o) {
            return p.isFunction(i) && (o = o || n, n = i, i = void 0), p.ajax(p.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, p.isPlainObject(e) && e))
        }
    })), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each((function(t) {
                p(this).wrapAll(e.call(this, t))
            }));
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                })).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return p.isFunction(e) ? this.each((function(t) {
                p(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = p(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each((function(i) {
                p(this).wrapAll(t ? e.call(this, i) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            })).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return c.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            if (!p.contains(e.ownerDocument || n, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Ft(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }(e)
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Rt = /%20/g,
        Bt = /\[\]$/,
        Ut = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;

    function Xt(e, t, i, n) {
        var o;
        if (p.isArray(t)) p.each(t, (function(t, o) {
            i || Bt.test(e) ? n(e, o) : Xt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
        }));
        else if (i || "object" !== p.type(t)) n(e, t);
        else
            for (o in t) Xt(e + "[" + o + "]", t[o], i, n)
    }
    p.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, (function() {
            o(this.name, this.value)
        }));
        else
            for (i in e) Xt(i, e[i], t, o);
        return n.join("&").replace(Rt, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Yt.test(this.nodeName) && !Qt.test(e) && (this.checked || !V.test(e))
            })).map((function(e, t) {
                var i = p(this).val();
                return null == i ? null : p.isArray(i) ? p.map(i, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ut, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: i.replace(Ut, "\r\n")
                }
            })).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? Zt() : n.documentMode > 8 ? Jt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt() || Zt()
    } : Jt;
    var Vt = 0,
        Gt = {},
        Kt = p.ajaxSettings.xhr();

    function Jt() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Zt() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    e.attachEvent && e.attachEvent("onunload", (function() {
        for (var e in Gt) Gt[e](void 0, !0)
    })), c.cors = !!Kt && "withCredentials" in Kt, (Kt = c.ajax = !!Kt) && p.ajaxTransport((function(t) {
        var i;
        if (!t.crossDomain || c.cors) return {
            send: function(n, o) {
                var r, s = t.xhr(),
                    a = ++Vt;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                for (r in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                s.send(t.hasContent && t.data || null), i = function(e, n) {
                    var r, l, u;
                    if (i && (n || 4 === s.readyState))
                        if (delete Gt[a], i = void 0, s.onreadystatechange = p.noop, n) 4 !== s.readyState && s.abort();
                        else {
                            u = {}, r = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (d) {
                                l = ""
                            }
                            r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                        }
                    u && o(r, l, u, s.getAllResponseHeaders())
                }, t.async ? 4 === s.readyState ? e.setTimeout(i) : s.onreadystatechange = Gt[a] = i : i()
            },
            abort: function() {
                i && i(void 0, !0)
            }
        }
    })), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    })), p.ajaxTransport("script", (function(e) {
        if (e.crossDomain) {
            var t, i = n.head || p("head")[0] || n.documentElement;
            return {
                send: function(o, r) {
                    (t = n.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || r(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }));
    var ei = [],
        ti = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ei.pop() || p.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", (function(t, i, n) {
        var o, r, s, a = !1 !== t.jsonp && (ti.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ti, "$1" + o) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || p.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, n.always((function() {
            void 0 === r ? p(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, ei.push(o)), s && p.isFunction(r) && r(s[0]), s = r = void 0
        })), "script") : void 0
    })), p.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || n;
        var o = x.exec(e),
            r = !i && [];
        return o ? [t.createElement(o[1])] : (o = ae([e], t, r), r && r.length && p(r).remove(), p.merge([], o.childNodes))
    };
    var ii = p.fn.load;

    function ni(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    p.fn.load = function(e, t, i) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var n, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (n = p.trim(e.slice(a, e.length)), e = e.slice(0, a)), p.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && p.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments, s.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e)
        })).always(i && function(e, t) {
            s.each((function() {
                i.apply(this, r || [e.responseText, t, e])
            }))
        }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), p.expr.filters.animated = function(e) {
        return p.grep(p.timers, (function(t) {
            return e === t.elem
        })).length
    }, p.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, u = p.css(e, "position"),
                d = p(e),
                c = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === u || "fixed" === u) && p.inArray("auto", [r, l]) > -1 ? (s = (n = d.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, i, p.extend({}, a))), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : d.css(c)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                p.offset.setOffset(this, e, t)
            }));
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? p.contains(t = r.documentElement, o) ? (void 0 !== o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = ni(r), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (i = e.offset()), i.top += p.css(e[0], "borderTopWidth", !0), i.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - p.css(n, "marginTop", !0),
                    left: t.left - i.left - p.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || $e
            }))
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var i = /Y/.test(t);
        p.fn[e] = function(n) {
            return X(this, (function(e, n, o) {
                var r = ni(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[n] : e[n] : void(r ? r.scrollTo(i ? p(r).scrollLeft() : o, i ? o : p(r).scrollTop()) : e[n] = o)
            }), e, n, arguments.length, null)
        }
    })), p.each(["top", "left"], (function(e, t) {
        p.cssHooks[t] = Re(c.pixelPosition, (function(e, i) {
            return i ? (i = We(e, t), He.test(i) ? p(e).position()[t] + "px" : i) : void 0
        }))
    })), p.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(i, n) {
            p.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (!0 === n || !0 === o ? "margin" : "border");
                return X(this, (function(t, i, n) {
                    var o;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? p.css(t, i, s) : p.style(t, i, n, s)
                }), t, r ? n : void 0, r, null)
            }
        }))
    })), p.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return p
    }));
    var oi = e.jQuery,
        ri = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ri), t && e.jQuery === p && (e.jQuery = oi), p
    }, t || (e.jQuery = e.$ = p), p
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, (function(e, t) {
    "use strict";
    var i = function(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        }
    }(t);

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }
    var s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var i = e.getAttribute("href");
                t = i && "#" !== i ? i.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = i.default(e).css("transition-duration"),
                n = i.default(e).css("transition-delay"),
                o = parseFloat(t),
                r = parseFloat(n);
            return o || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            i.default(e).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, i) {
            for (var n in i)
                if (Object.prototype.hasOwnProperty.call(i, n)) {
                    var o = i[n],
                        r = t[n],
                        a = r && s.isElement(r) ? "element" : null === (l = r) || void 0 === l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? s.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = i.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    s.jQueryDetection(), i.default.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return i.default(this).one(s.TRANSITION_END, (function() {
            n = !0
        })), setTimeout((function() {
            n || s.triggerTransitionEnd(t)
        }), e), this
    }, i.default.event.special[s.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(e) {
            if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var a = "alert",
        l = i.default.fn[a],
        u = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.alert"), this._element = null
            }, t._getRootElement = function(e) {
                var t = s.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = i.default(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function(e) {
                var t = i.default.Event("close.bs.alert");
                return i.default(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                if (i.default(e).removeClass("show"), i.default(e).hasClass("fade")) {
                    var n = s.getTransitionDurationFromElement(e);
                    i.default(e).one(s.TRANSITION_END, (function(i) {
                        return t._destroyElement(e, i)
                    })).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, t._destroyElement = function(e) {
                i.default(e).detach().trigger("closed.bs.alert").remove()
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.alert");
                    o || (o = new e(this), n.data("bs.alert", o)), "close" === t && o[t](this)
                }))
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u)), i.default.fn[a] = u._jQueryInterface, i.default.fn[a].Constructor = u, i.default.fn[a].noConflict = function() {
        return i.default.fn[a] = l, u._jQueryInterface
    };
    var d = i.default.fn.button,
        c = function() {
            function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains("active")) e = !1;
                            else {
                                var r = n.querySelector(".active");
                                r && i.default(r).removeClass("active")
                            }
                        e && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(o).trigger("change")), o.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && i.default(this._element).toggleClass("active"))
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(t, n) {
                return this.each((function() {
                    var o = i.default(this),
                        r = o.data("bs.button");
                    r || (r = new e(this), o.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === t && r[t]()
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        var t = e.target,
            n = t;
        if (i.default(t).hasClass("btn") || (t = i.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var o = t.querySelector('input:not([type="hidden"])');
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void e.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === t.tagName || c._jQueryInterface.call(i.default(t), "toggle", "INPUT" === n.tagName)
        }
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        var t = i.default(e.target).closest(".btn")[0];
        i.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    })), i.default(window).on("load.bs.button.data-api", (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, i = e.length; t < i; t++) {
            var n = e[t],
                o = n.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked") ? n.classList.add("active") : n.classList.remove("active")
        }
        for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
            var a = e[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
    })), i.default.fn.button = c._jQueryInterface, i.default.fn.button.Constructor = c, i.default.fn.button.noConflict = function() {
        return i.default.fn.button = d, c._jQueryInterface
    };
    var f = "carousel",
        p = i.default.fn[f],
        h = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        m = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        g = {
            TOUCH: "touch",
            PEN: "pen"
        },
        v = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide("next")
            }, t.nextWhenVisible = function() {
                var e = i.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide("prev")
            }, t.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) i.default(this._element).one("slid.bs.carousel", (function() {
                        return t.to(e)
                    }));
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        this._slide(e > n ? "next" : "prev", this._items[e])
                    }
            }, t.dispose = function() {
                i.default(this._element).off(".bs.carousel"), i.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = r({}, h, e), s.typeCheckConfig(f, e, m), e
            }, t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function(t) {
                    return e._keydown(t)
                })), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function(t) {
                    return e.pause(t)
                })).on("mouseleave.bs.carousel", (function(t) {
                    return e.cycle(t)
                })), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var t = function(t) {
                            e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function(t) {
                            e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                return e.cycle(t)
                            }), 500 + e._config.interval))
                        };
                    i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                        return e.preventDefault()
                    })), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function(e) {
                        return t(e)
                    })), i.default(this._element).on("pointerup.bs.carousel", (function(e) {
                        return n(e)
                    })), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function(e) {
                        return t(e)
                    })), i.default(this._element).on("touchmove.bs.carousel", (function(t) {
                        return function(t) {
                            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    })), i.default(this._element).on("touchend.bs.carousel", (function(e) {
                        return n(e)
                    })))
                }
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var i = "next" === e,
                    n = "prev" === e,
                    o = this._getItemIndex(t);
                if ((n && 0 === o || i && o === this._items.length - 1) && !this._config.wrap) return t;
                var r = (o + ("prev" === e ? -1 : 1)) % this._items.length;
                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
            }, t._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = i.default.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: o,
                        to: n
                    });
                return i.default(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    i.default(t).removeClass("active");
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && i.default(n).addClass("active")
                }
            }, t._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                if (e) {
                    var t = parseInt(e.getAttribute("data-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, t._slide = function(e, t) {
                var n, o, r, a = this,
                    l = this._element.querySelector(".active.carousel-item"),
                    u = this._getItemIndex(l),
                    d = t || l && this._getItemByDirection(e, l),
                    c = this._getItemIndex(d),
                    f = Boolean(this._interval);
                if ("next" === e ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), d && i.default(d).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(d), this._activeElement = d;
                    var p = i.default.Event("slid.bs.carousel", {
                        relatedTarget: d,
                        direction: r,
                        from: u,
                        to: c
                    });
                    if (i.default(this._element).hasClass("slide")) {
                        i.default(d).addClass(o), s.reflow(d), i.default(l).addClass(n), i.default(d).addClass(n);
                        var h = s.getTransitionDurationFromElement(l);
                        i.default(l).one(s.TRANSITION_END, (function() {
                            i.default(d).removeClass(n + " " + o).addClass("active"), i.default(l).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout((function() {
                                return i.default(a._element).trigger(p)
                            }), 0)
                        })).emulateTransitionEnd(h)
                    } else i.default(l).removeClass("active"), i.default(d).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(p);
                    f && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this).data("bs.carousel"),
                        o = r({}, h, i.default(this).data());
                    "object" == typeof t && (o = r({}, o, t));
                    var s = "string" == typeof t ? t : o.slide;
                    if (n || (n = new e(this, o), i.default(this).data("bs.carousel", n)), "number" == typeof t) n.to(t);
                    else if ("string" == typeof s) {
                        if (void 0 === n[s]) throw new TypeError('No method named "' + s + '"');
                        n[s]()
                    } else o.interval && o.ride && (n.pause(), n.cycle())
                }))
            }, e._dataApiClickHandler = function(t) {
                var n = s.getSelectorFromElement(this);
                if (n) {
                    var o = i.default(n)[0];
                    if (o && i.default(o).hasClass("carousel")) {
                        var a = r({}, i.default(o).data(), i.default(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), e._jQueryInterface.call(i.default(o), a), l && i.default(o).data("bs.carousel").to(l), t.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return h
                }
            }]), e
        }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var o = i.default(e[t]);
            v._jQueryInterface.call(o, o.data())
        }
    })), i.default.fn[f] = v._jQueryInterface, i.default.fn[f].Constructor = v, i.default.fn[f].noConflict = function() {
        return i.default.fn[f] = p, v._jQueryInterface
    };
    var y = "collapse",
        b = i.default.fn[y],
        w = {
            toggle: !0,
            parent: ""
        },
        _ = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        T = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), n = 0, o = i.length; n < o; n++) {
                    var r = i[n],
                        a = s.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                            return t === e
                        }));
                    null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                i.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, t.show = function() {
                var t, n, o = this;
                if (!(this._isTransitioning || i.default(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                        return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains("collapse")
                    }))).length && (t = null), t && (n = i.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                    var r = i.default.Event("show.bs.collapse");
                    if (i.default(this._element).trigger(r), !r.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data("bs.collapse", null));
                        var a = this._getDimension();
                        i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            u = s.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(s.TRANSITION_END, (function() {
                            i.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i.default(o._element).trigger("shown.bs.collapse")
                        })).emulateTransitionEnd(u), this._element.style[a] = this._element[l] + "px"
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && i.default(this._element).hasClass("show")) {
                    var t = i.default.Event("hide.bs.collapse");
                    if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", s.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show");
                        var o = this._triggerArray.length;
                        if (o > 0)
                            for (var r = 0; r < o; r++) {
                                var a = this._triggerArray[r],
                                    l = s.getSelectorFromElement(a);
                                null !== l && (i.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var u = s.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(s.TRANSITION_END, (function() {
                            e.setTransitioning(!1), i.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        })).emulateTransitionEnd(u)
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = r({}, w, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(y, e, _), e
            }, t._getDimension = function() {
                return i.default(this._element).hasClass("width") ? "width" : "height"
            }, t._getParent = function() {
                var t, n = this;
                s.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var o = [].slice.call(t.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
                return i.default(o).each((function(t, i) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                })), t
            }, t._addAriaAndCollapsedClass = function(e, t) {
                var n = i.default(e).hasClass("show");
                t.length && i.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function(e) {
                var t = s.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.collapse"),
                        s = r({}, w, n.data(), "object" == typeof t && t ? t : {});
                    if (!o && s.toggle && "string" == typeof t && /show|hide/.test(t) && (s.toggle = !1), o || (o = new e(this, s), n.data("bs.collapse", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return w
                }
            }]), e
        }();
    i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = i.default(this),
            n = s.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(n));
        i.default(o).each((function() {
            var e = i.default(this),
                n = e.data("bs.collapse") ? "toggle" : t.data();
            T._jQueryInterface.call(e, n)
        }))
    })), i.default.fn[y] = T._jQueryInterface, i.default.fn[y].Constructor = T, i.default.fn[y].noConflict = function() {
        return i.default.fn[y] = b, T._jQueryInterface
    };
    var x = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        C = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (x && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0
        }(),
        S = x && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then((function() {
                    t = !1, e()
                })))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout((function() {
                    t = !1, e()
                }), C))
            }
        };

    function E(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function k(e, t) {
        if (1 !== e.nodeType) return [];
        var i = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? i[t] : i
    }

    function I(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function A(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = k(e);
        return /(auto|scroll|overlay)/.test(t.overflow + t.overflowY + t.overflowX) ? e : A(I(e))
    }

    function N(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var D = x && !(!window.MSInputMethodContext || !document.documentMode),
        L = x && /MSIE 10/.test(navigator.userAgent);

    function O(e) {
        return 11 === e ? D : 10 === e ? L : D || L
    }

    function j(e) {
        if (!e) return document.documentElement;
        for (var t = O(10) ? document.body : null, i = e.offsetParent || null; i === t && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === k(i, "position") ? j(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function z(e) {
        return null !== e.parentNode ? z(e.parentNode) : e
    }

    function P(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? e : t,
            o = i ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && j(s.firstElementChild) !== s ? j(l) : l;
        var u = z(e);
        return u.host ? P(u.host, t) : P(e, z(t).host)
    }

    function H(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var o = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || o;
            return r[i]
        }
        return e[i]
    }

    function M(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = H(t, "top"),
            o = H(t, "left"),
            r = i ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += o * r, e.right += o * r, e
    }

    function $(e, t) {
        var i = "x" === t ? "Left" : "Top",
            n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(e["border" + i + "Width"]) + parseFloat(e["border" + n + "Width"])
    }

    function q(e, t, i, n) {
        return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], O(10) ? parseInt(i["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function W(e) {
        var t = e.body,
            i = e.documentElement,
            n = O(10) && getComputedStyle(i);
        return {
            height: q("Height", t, i, n),
            width: q("Width", t, i, n)
        }
    }
    var F = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        R = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        B = function(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        },
        U = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        };

    function Q(e) {
        return U({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function Y(e) {
        var t = {};
        try {
            if (O(10)) {
                t = e.getBoundingClientRect();
                var i = H(e, "top"),
                    n = H(e, "left");
                t.top += i, t.left += n, t.bottom += i, t.right += n
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName ? W(e.ownerDocument) : {},
            s = e.offsetWidth - (r.width || e.clientWidth || o.width),
            a = e.offsetHeight - (r.height || e.clientHeight || o.height);
        if (s || a) {
            var l = k(e);
            s -= $(l, "x"), a -= $(l, "y"), o.width -= s, o.height -= a
        }
        return Q(o)
    }

    function X(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = O(10),
            o = "HTML" === t.nodeName,
            r = Y(e),
            s = Y(t),
            a = A(e),
            l = k(t),
            u = parseFloat(l.borderTopWidth),
            d = parseFloat(l.borderLeftWidth);
        i && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var c = Q({
            top: r.top - s.top - u,
            left: r.left - s.left - d,
            width: r.width,
            height: r.height
        });
        if (c.marginTop = 0, c.marginLeft = 0, !n && o) {
            var f = parseFloat(l.marginTop),
                p = parseFloat(l.marginLeft);
            c.top -= u - f, c.bottom -= u - f, c.left -= d - p, c.right -= d - p, c.marginTop = f, c.marginLeft = p
        }
        return (n && !i ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (c = M(c, t)), c
    }

    function V(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.ownerDocument.documentElement,
            n = X(e, i),
            o = Math.max(i.clientWidth, window.innerWidth || 0),
            r = Math.max(i.clientHeight, window.innerHeight || 0),
            s = t ? 0 : H(i),
            a = t ? 0 : H(i, "left"),
            l = {
                top: s - n.top + n.marginTop,
                left: a - n.left + n.marginLeft,
                width: o,
                height: r
            };
        return Q(l)
    }

    function G(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === k(e, "position")) return !0;
        var i = I(e);
        return !!i && G(i)
    }

    function K(e) {
        if (!e || !e.parentElement || O()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === k(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function J(e, t, i, n) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            s = o ? K(e) : P(e, N(t));
        if ("viewport" === n) r = V(s, o);
        else {
            var a = void 0;
            "scrollParent" === n ? "BODY" === (a = A(I(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === n ? e.ownerDocument.documentElement : n;
            var l = X(a, s, o);
            if ("HTML" !== a.nodeName || G(s)) r = l;
            else {
                var u = W(e.ownerDocument),
                    d = u.height,
                    c = u.width;
                r.top += l.top - l.marginTop, r.bottom = d + l.top, r.left += l.left - l.marginLeft, r.right = c + l.left
            }
        }
        var f = "number" == typeof(i = i || 0);
        return r.left += f ? i : i.left || 0, r.top += f ? i : i.top || 0, r.right -= f ? i : i.right || 0, r.bottom -= f ? i : i.bottom || 0, r
    }

    function Z(e) {
        return e.width * e.height
    }

    function ee(e, t, i, n, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = J(i, n, r, o),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map((function(e) {
                return U({
                    key: e
                }, a[e], {
                    area: Z(a[e])
                })
            })).sort((function(e, t) {
                return t.area - e.area
            })),
            u = l.filter((function(e) {
                return e.width >= i.clientWidth && e.height >= i.clientHeight
            })),
            d = u.length > 0 ? u[0].key : l[0].key,
            c = e.split("-")[1];
        return d + (c ? "-" + c : "")
    }

    function te(e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = n ? K(t) : P(t, N(i));
        return X(i, o, n)
    }

    function ie(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + n,
            height: e.offsetHeight + i
        }
    }

    function ne(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return t[e]
        }))
    }

    function oe(e, t, i) {
        i = i.split("-")[0];
        var n = ie(e),
            o = {
                width: n.width,
                height: n.height
            },
            r = -1 !== ["right", "left"].indexOf(i),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - n[l] / 2, o[a] = i === a ? t[a] - n[u] : t[ne(a)], o
    }

    function re(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function se(e, t, i) {
        return (void 0 === i ? e : e.slice(0, function(e, t, i) {
            if (Array.prototype.findIndex) return e.findIndex((function(e) {
                return e[t] === i
            }));
            var n = re(e, (function(e) {
                return e[t] === i
            }));
            return e.indexOf(n)
        }(e, "name", i))).forEach((function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = e.function || e.fn;
            e.enabled && E(i) && (t.offsets.popper = Q(t.offsets.popper), t.offsets.reference = Q(t.offsets.reference), t = i(t, e))
        })), t
    }

    function ae() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = te(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = ee(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = oe(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = se(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function le(e, t) {
        return e.some((function(e) {
            return e.enabled && e.name === t
        }))
    }

    function ue(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var o = t[n],
                r = o ? "" + o + i : e;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function de() {
        return this.state.isDestroyed = !0, le(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ue("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function ce(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function fe() {
        this.state.eventsEnabled || (this.state = function(e, t, i, n) {
            i.updateBound = n, ce(e).addEventListener("resize", i.updateBound, {
                passive: !0
            });
            var o = A(e);
            return function e(t, i, n, o) {
                var r = "BODY" === t.nodeName,
                    s = r ? t.ownerDocument.defaultView : t;
                s.addEventListener(i, n, {
                    passive: !0
                }), r || e(A(s.parentNode), i, n, o), o.push(s)
            }(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i
        }(this.reference, 0, this.state, this.scheduleUpdate))
    }

    function pe() {
        var e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.state, ce(this.reference).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) {
            t.removeEventListener("scroll", e.updateBound)
        })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function he(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function me(e, t) {
        Object.keys(t).forEach((function(i) {
            var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && he(t[i]) && (n = "px"), e.style[i] = t[i] + n
        }))
    }
    var ge = x && /Firefox/i.test(navigator.userAgent);

    function ve(e, t, i) {
        var n = re(e, (function(e) {
                return e.name === t
            })),
            o = !!n && e.some((function(e) {
                return e.name === i && e.enabled && e.order < n.order
            }));
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var ye = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        be = ye.slice(3);

    function we(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = be.indexOf(e),
            n = be.slice(i + 1).concat(be.slice(0, i));
        return t ? n.reverse() : n
    }
    var _e = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            i = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var o = e.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(i),
                                l = a ? "left" : "top",
                                u = a ? "width" : "height",
                                d = {
                                    start: B({}, l, r[l]),
                                    end: B({}, l, r[l] + r[u] - s[u])
                                };
                            e.offsets.popper = U({}, s, d[n])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var i, n = t.offset,
                            o = e.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = e.placement.split("-")[0];
                        return i = he(+n) ? [+n, 0] : function(e, t, i, n) {
                            var o = [0, 0],
                                r = -1 !== ["right", "left"].indexOf(n),
                                s = e.split(/(\+|\-)/).map((function(e) {
                                    return e.trim()
                                })),
                                a = s.indexOf(re(s, (function(e) {
                                    return -1 !== e.search(/,|\s/)
                                })));
                            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                            return (u = u.map((function(e, n) {
                                var o = (1 === n ? !r : r) ? "height" : "width",
                                    s = !1;
                                return e.reduce((function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                                }), []).map((function(e) {
                                    return function(e, t, i, n) {
                                        var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            r = +o[1],
                                            s = o[2];
                                        if (!r) return e;
                                        if (0 === s.indexOf("%")) {
                                            var a = void 0;
                                            switch (s) {
                                                case "%p":
                                                    a = i;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    a = n
                                            }
                                            return Q(a)[t] / 100 * r
                                        }
                                        return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                                    }(e, o, t, i)
                                }))
                            }))).forEach((function(e, t) {
                                e.forEach((function(i, n) {
                                    he(i) && (o[t] += i * ("-" === e[n - 1] ? -1 : 1))
                                }))
                            })), o
                        }(n, r, s, a), "left" === a ? (r.top += i[0], r.left -= i[1]) : "right" === a ? (r.top += i[0], r.left += i[1]) : "top" === a ? (r.left += i[0], r.top -= i[1]) : "bottom" === a && (r.left += i[0], r.top += i[1]), e.popper = r, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var i = t.boundariesElement || j(e.instance.popper);
                        e.instance.reference === i && (i = j(i));
                        var n = ue("transform"),
                            o = e.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = "";
                        var l = J(e.instance.popper, e.instance.reference, t.padding, i, e.positionFixed);
                        o.top = r, o.left = s, o[n] = a, t.boundaries = l;
                        var u = e.offsets.popper,
                            d = {
                                primary: function(e) {
                                    var i = u[e];
                                    return u[e] < l[e] && !t.escapeWithReference && (i = Math.max(u[e], l[e])), B({}, e, i)
                                },
                                secondary: function(e) {
                                    var i = "right" === e ? "left" : "top",
                                        n = u[i];
                                    return u[e] > l[e] && !t.escapeWithReference && (n = Math.min(u[i], l[e] - ("right" === e ? u.width : u.height))), B({}, i, n)
                                }
                            };
                        return t.priority.forEach((function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = U({}, u, d[t](e))
                        })), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            i = t.popper,
                            n = t.reference,
                            o = e.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            u = s ? "width" : "height";
                        return i[a] < r(n[l]) && (e.offsets.popper[l] = r(n[l]) - i[u]), i[l] > r(n[a]) && (e.offsets.popper[l] = r(n[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var i;
                        if (!ve(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var n = t.element;
                        if ("string" == typeof n) {
                            if (!(n = e.instance.popper.querySelector(n))) return e
                        } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0],
                            r = e.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            u = l ? "height" : "width",
                            d = l ? "Top" : "Left",
                            c = d.toLowerCase(),
                            f = l ? "left" : "top",
                            p = l ? "bottom" : "right",
                            h = ie(n)[u];
                        a[p] - h < s[c] && (e.offsets.popper[c] -= s[c] - (a[p] - h)), a[c] + h > s[p] && (e.offsets.popper[c] += a[c] + h - s[p]), e.offsets.popper = Q(e.offsets.popper);
                        var m = a[c] + a[u] / 2 - h / 2,
                            g = k(e.instance.popper),
                            v = parseFloat(g["margin" + d]),
                            y = parseFloat(g["border" + d + "Width"]),
                            b = m - e.offsets.popper[c] - v - y;
                        return b = Math.max(Math.min(s[u] - h, b), 0), e.arrowElement = n, e.offsets.arrow = (B(i = {}, c, Math.round(b)), B(i, f, ""), i), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (le(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var i = J(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            n = e.placement.split("-")[0],
                            o = ne(n),
                            r = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case "flip":
                                s = [n, o];
                                break;
                            case "clockwise":
                                s = we(n);
                                break;
                            case "counterclockwise":
                                s = we(n, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach((function(a, l) {
                            if (n !== a || s.length === l + 1) return e;
                            n = e.placement.split("-")[0], o = ne(n);
                            var u = e.offsets.popper,
                                d = e.offsets.reference,
                                c = Math.floor,
                                f = "left" === n && c(u.right) > c(d.left) || "right" === n && c(u.left) < c(d.right) || "top" === n && c(u.bottom) > c(d.top) || "bottom" === n && c(u.top) < c(d.bottom),
                                p = c(u.left) < c(i.left),
                                h = c(u.right) > c(i.right),
                                m = c(u.top) < c(i.top),
                                g = c(u.bottom) > c(i.bottom),
                                v = "left" === n && p || "right" === n && h || "top" === n && m || "bottom" === n && g,
                                y = -1 !== ["top", "bottom"].indexOf(n),
                                b = !!t.flipVariations && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && m || !y && "end" === r && g) || !!t.flipVariationsByContent && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m);
                            (f || v || b) && (e.flipped = !0, (f || v) && (n = s[l + 1]), b && (r = function(e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(r)), e.placement = n + (r ? "-" + r : ""), e.offsets.popper = U({}, e.offsets.popper, oe(e.instance.popper, e.offsets.reference, e.placement)), e = se(e.instance.modifiers, e, "flip"))
                        })), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            i = t.split("-")[0],
                            n = e.offsets,
                            o = n.popper,
                            r = n.reference,
                            s = -1 !== ["left", "right"].indexOf(i),
                            a = -1 === ["top", "left"].indexOf(i);
                        return o[s ? "left" : "top"] = r[i] - (a ? o[s ? "width" : "height"] : 0), e.placement = ne(t), e.offsets.popper = Q(o), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!ve(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            i = re(e.instance.modifiers, (function(e) {
                                return "preventOverflow" === e.name
                            })).boundaries;
                        if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var i = t.x,
                            n = t.y,
                            o = e.offsets.popper,
                            r = re(e.instance.modifiers, (function(e) {
                                return "applyStyle" === e.name
                            })).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l = void 0 !== r ? r : t.gpuAcceleration,
                            u = j(e.instance.popper),
                            d = Y(u),
                            c = {
                                position: o.position
                            },
                            f = function(e, t) {
                                var i = e.offsets,
                                    n = i.popper,
                                    o = Math.round,
                                    r = Math.floor,
                                    s = function(e) {
                                        return e
                                    },
                                    a = o(i.reference.width),
                                    l = o(n.width),
                                    u = -1 !== ["left", "right"].indexOf(e.placement),
                                    d = -1 !== e.placement.indexOf("-"),
                                    c = t ? u || d || a % 2 == l % 2 ? o : r : s,
                                    f = t ? o : s;
                                return {
                                    left: c(a % 2 == 1 && l % 2 == 1 && !d && t ? n.left - 1 : n.left),
                                    top: f(n.top),
                                    bottom: f(n.bottom),
                                    right: c(n.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !ge),
                            p = "bottom" === i ? "top" : "bottom",
                            h = "right" === n ? "left" : "right",
                            m = ue("transform");
                        if (a = "bottom" === p ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -d.height + f.bottom : f.top, s = "right" === h ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -d.width + f.right : f.left, l && m) c[m] = "translate3d(" + s + "px, " + a + "px, 0)", c[p] = 0, c[h] = 0, c.willChange = "transform";
                        else {
                            var g = "right" === h ? -1 : 1;
                            c[p] = a * ("bottom" === p ? -1 : 1), c[h] = s * g, c.willChange = p + ", " + h
                        }
                        return e.attributes = U({}, {
                            "x-placement": e.placement
                        }, e.attributes), e.styles = U({}, c, e.styles), e.arrowStyles = U({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, i;
                        return me(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach((function(e) {
                            !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                        })), e.arrowElement && Object.keys(e.arrowStyles).length && me(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, i, n, o) {
                        var r = te(o, t, e, i.positionFixed),
                            s = ee(i.placement, r, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), me(t, {
                            position: i.positionFixed ? "fixed" : "absolute"
                        }), i
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Te = function() {
            function e(t, i) {
                var n = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                F(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = S(this.update.bind(this)), this.options = U({}, e.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(U({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
                    n.options.modifiers[t] = U({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                    return U({
                        name: e
                    }, n.options.modifiers[e])
                })).sort((function(e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function(e) {
                    e.enabled && E(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                })), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return R(e, [{
                key: "update",
                value: function() {
                    return ae.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return de.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return fe.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return pe.call(this)
                }
            }]), e
        }();
    Te.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Te.placements = ye, Te.Defaults = _e;
    var xe = "dropdown",
        Ce = i.default.fn[xe],
        Se = new RegExp("38|40|27"),
        Ee = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        ke = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Ie = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
                    var t = i.default(this._menu).hasClass("show");
                    e._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        o = i.default.Event("show.bs.dropdown", n),
                        r = e._getParentFromElement(this._element);
                    if (i.default(r).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if (void 0 === Te) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = r : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"), this._popper = new Te(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = i.default.Event("hide.bs.dropdown", t),
                        o = e._getParentFromElement(this._element);
                    i.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", t)))
                }
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                i.default(this._element).on("click.bs.dropdown", (function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                }))
            }, t._getConfig = function(e) {
                return e = r({}, this.constructor.Default, i.default(this._element).data(), e), s.typeCheckConfig(xe, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, t._getPlacement = function() {
                var e = i.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
            }, t._detectNavbar = function() {
                return i.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), r({}, e, this._config.popperConfig)
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this).data("bs.dropdown");
                    if (n || (n = new e(this, "object" == typeof t ? t : null), i.default(this).data("bs.dropdown", n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = n.length; o < r; o++) {
                        var s = e._getParentFromElement(n[o]),
                            a = i.default(n[o]).data("bs.dropdown"),
                            l = {
                                relatedTarget: n[o]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), a) {
                            var u = a._menu;
                            if (i.default(s).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && i.default.contains(s, t.target))) {
                                var d = i.default.Event("hide.bs.dropdown", l);
                                i.default(s).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), i.default(u).removeClass("show"), i.default(s).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, i = s.getSelectorFromElement(e);
                return i && (t = document.querySelector(i)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || i.default(t.target).closest(".dropdown-menu").length) : !Se.test(t.which)) && !this.disabled && !i.default(this).hasClass("disabled")) {
                    var n = e._getParentFromElement(this),
                        o = i.default(n).hasClass("show");
                    if (o || 27 !== t.which) {
                        if (t.preventDefault(), t.stopPropagation(), !o || 27 === t.which || 32 === t.which) return 27 === t.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");
                        var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                            return i.default(e).is(":visible")
                        }));
                        if (0 !== r.length) {
                            var s = r.indexOf(t.target);
                            38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ee
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ke
                }
            }]), e
        }();
    i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ie._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ie._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ie._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(e) {
        e.preventDefault(), e.stopPropagation(), Ie._jQueryInterface.call(i.default(this), "toggle")
    })).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
        e.stopPropagation()
    })), i.default.fn[xe] = Ie._jQueryInterface, i.default.fn[xe].Constructor = Ie, i.default.fn[xe].noConflict = function() {
        return i.default.fn[xe] = Ce, Ie._jQueryInterface
    };
    var Ae = i.default.fn.modal,
        Ne = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        De = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Le = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    i.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var n = i.default.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                    i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(e) {
                        return t.hide(e)
                    })), i.default(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                        i.default(t._element).one("mouseup.dismiss.bs.modal", (function(e) {
                            i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return t._showElement(e)
                    })))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = i.default.Event("hide.bs.modal");
                    if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = i.default(this._element).hasClass("fade");
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                            var r = s.getTransitionDurationFromElement(this._element);
                            i.default(this._element).one(s.TRANSITION_END, (function(e) {
                                return t._hideModal(e)
                            })).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach((function(e) {
                    return i.default(e).off(".bs.modal")
                })), i.default(document).off("focusin.bs.modal"), i.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = r({}, Ne, e), s.typeCheckConfig("modal", e, De), e
            }, t._triggerBackdropTransition = function() {
                var e = this,
                    t = i.default.Event("hidePrevented.bs.modal");
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var o = s.getTransitionDurationFromElement(this._dialog);
                    i.default(this._element).off(s.TRANSITION_END), i.default(this._element).one(s.TRANSITION_END, (function() {
                        e._element.classList.remove("modal-static"), n || i.default(e._element).one(s.TRANSITION_END, (function() {
                            e._element.style.overflowY = ""
                        })).emulateTransitionEnd(e._element, o)
                    })).emulateTransitionEnd(o), this._element.focus()
                }
            }, t._showElement = function(e) {
                var t = this,
                    n = i.default(this._element).hasClass("fade"),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && s.reflow(this._element), i.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var r = i.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    a = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(r)
                    };
                if (n) {
                    var l = s.getTransitionDurationFromElement(this._dialog);
                    i.default(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, t._enforceFocus = function() {
                var e = this;
                i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(t) {
                    document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus()
                }))
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", (function(t) {
                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                })) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal")
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? i.default(window).on("resize.bs.modal", (function(t) {
                    return e.handleUpdate(t)
                })) : i.default(window).off("resize.bs.modal")
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                    i.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger("hidden.bs.modal")
                }))
            }, t._removeBackdrop = function() {
                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    n = i.default(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", (function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        })), n && s.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !e) return;
                    if (!n) return void e();
                    var o = s.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    i.default(this._backdrop).removeClass("show");
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (i.default(this._element).hasClass("fade")) {
                        var a = s.getTransitionDurationFromElement(this._backdrop);
                        i.default(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    i.default(t).each((function(t, n) {
                        var o = n.style.paddingRight,
                            r = i.default(n).css("padding-right");
                        i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    })), i.default(n).each((function(t, n) {
                        var o = n.style.marginRight,
                            r = i.default(n).css("margin-right");
                        i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }));
                    var o = document.body.style.paddingRight,
                        r = i.default(document.body).css("padding-right");
                    i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                i.default(document.body).addClass("modal-open")
            }, t._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                i.default(e).each((function(e, t) {
                    var n = i.default(t).data("padding-right");
                    i.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                }));
                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(t).each((function(e, t) {
                    var n = i.default(t).data("margin-right");
                    void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right")
                }));
                var n = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, n) {
                return this.each((function() {
                    var o = i.default(this).data("bs.modal"),
                        s = r({}, Ne, i.default(this).data(), "object" == typeof t && t ? t : {});
                    if (o || (o = new e(this, s), i.default(this).data("bs.modal", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t](n)
                    } else s.show && o.show(n)
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ne
                }
            }]), e
        }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var t, n = this,
            o = s.getSelectorFromElement(this);
        o && (t = document.querySelector(o));
        var a = i.default(t).data("bs.modal") ? "toggle" : r({}, i.default(t).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = i.default(t).one("show.bs.modal", (function(e) {
            e.isDefaultPrevented() || l.one("hidden.bs.modal", (function() {
                i.default(n).is(":visible") && n.focus()
            }))
        }));
        Le._jQueryInterface.call(i.default(t), a, this)
    })), i.default.fn.modal = Le._jQueryInterface, i.default.fn.modal.Constructor = Le, i.default.fn.modal.noConflict = function() {
        return i.default.fn.modal = Ae, Le._jQueryInterface
    };
    var Oe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        je = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Pe(e, t, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(n.body.querySelectorAll("*")), s = function(e, i) {
                var n = r[e],
                    s = n.nodeName.toLowerCase();
                if (-1 === o.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var a = [].slice.call(n.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach((function(e) {
                    (function(e, t) {
                        var i = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === Oe.indexOf(i) || Boolean(e.nodeValue.match(je) || e.nodeValue.match(ze));
                        for (var n = t.filter((function(e) {
                                return e instanceof RegExp
                            })), o = 0, r = n.length; o < r; o++)
                            if (i.match(n[o])) return !0;
                        return !1
                    })(e, l) || n.removeAttribute(e.nodeName)
                }))
            }, a = 0, l = r.length; a < l; a++) s(a);
        return n.body.innerHTML
    }
    var He = "tooltip",
        Me = i.default.fn[He],
        $e = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        qe = ["sanitize", "whiteList", "sanitizeFn"],
        We = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Fe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Re = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Be = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Ue = function() {
            function e(e, t) {
                if (void 0 === Te) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = i.default(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = i.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    i.default(this.element).trigger(t);
                    var n = s.findShadowRoot(this.element),
                        o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !o) return;
                    var r = this.getTipElement(),
                        a = s.getUID(this.constructor.NAME);
                    r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(r).addClass("fade");
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    i.default(r).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(d), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Te(this.element, r, this._getPopperConfig(u)), i.default(r).addClass("show"), i.default(r).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, i.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                    };
                    if (i.default(this.tip).hasClass("fade")) {
                        var f = s.getTransitionDurationFromElement(this.tip);
                        i.default(this.tip).one(s.TRANSITION_END, c).emulateTransitionEnd(f)
                    } else c()
                }
            }, t.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    o = i.default.Event(this.constructor.Event.HIDE),
                    r = function() {
                        "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), i.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (i.default(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (i.default(n).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) {
                        var a = s.getTransitionDurationFromElement(n);
                        i.default(n).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(e) {
                i.default(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(i.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(e).removeClass("fade show")
            }, t.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Pe(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? i.default(t).parent().is(e) || e.empty().append(t) : e.text(i.default(t).text())
            }, t.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getPopperConfig = function(e) {
                var t = this;
                return r({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container)
            }, t._getAttachment = function(e) {
                return Fe[e.toUpperCase()]
            }, t._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach((function(t) {
                    if ("click" === t) i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                        return e.toggle(t)
                    }));
                    else if ("manual" !== t) {
                        var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        i.default(e.element).on(n, e.config.selector, (function(t) {
                            return e._enter(t)
                        })).on(o, e.config.selector, (function(t) {
                            return e._leave(t)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), i.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                    "show" === t._hoverState && t.show()
                }), t.config.delay.show) : t.show())
            }, t._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                    "out" === t._hoverState && t.hide()
                }), t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function(e) {
                var t = i.default(this.element).data();
                return Object.keys(t).forEach((function(e) {
                    -1 !== qe.indexOf(e) && delete t[e]
                })), "number" == typeof(e = r({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), s.typeCheckConfig(He, e, this.constructor.DefaultType), e.sanitize && (e.template = Pe(e.template, e.whiteList, e.sanitizeFn)), e
            }, t._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function() {
                var e = i.default(this.getTipElement()),
                    t = e.attr("class").match($e);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (i.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.tooltip"),
                        r = "object" == typeof t && t;
                    if ((o || !/dispose|hide/.test(t)) && (o || (o = new e(this, r), n.data("bs.tooltip", o)), "string" == typeof t)) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Re
                }
            }, {
                key: "NAME",
                get: function() {
                    return He
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Be
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return We
                }
            }]), e
        }();
    i.default.fn[He] = Ue._jQueryInterface, i.default.fn[He].Constructor = Ue, i.default.fn[He].noConflict = function() {
        return i.default.fn[He] = Me, Ue._jQueryInterface
    };
    var Qe = "popover",
        Ye = i.default.fn[Qe],
        Xe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ve = r({}, Ue.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ge = r({}, Ue.DefaultType, {
            content: "(string|element|function)"
        }),
        Ke = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Je = function(e) {
            var t, n;

            function r() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var s = r.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(e) {
                i.default(this.getTipElement()).addClass("bs-popover-" + e)
            }, s.getTipElement = function() {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var e = i.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var e = i.default(this.getTipElement()),
                    t = e.attr("class").match(Xe);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, r._jQueryInterface = function(e) {
                return this.each((function() {
                    var t = i.default(this).data("bs.popover"),
                        n = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new r(this, n), i.default(this).data("bs.popover", t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                }))
            }, o(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ve
                }
            }, {
                key: "NAME",
                get: function() {
                    return Qe
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Ke
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ge
                }
            }]), r
        }(Ue);
    i.default.fn[Qe] = Je._jQueryInterface, i.default.fn[Qe].Constructor = Je, i.default.fn[Qe].noConflict = function() {
        return i.default.fn[Qe] = Ye, Je._jQueryInterface
    };
    var Ze = "scrollspy",
        et = i.default.fn[Ze],
        tt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        it = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        nt = function() {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                    return n._process(e)
                })), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : "position" : this._config.method,
                    n = "position" === t ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                    var o, r = s.getSelectorFromElement(e);
                    if (r && (o = document.querySelector(r)), o) {
                        var a = o.getBoundingClientRect();
                        if (a.width || a.height) return [i.default(o)[t]().top + n, r]
                    }
                    return null
                })).filter((function(e) {
                    return e
                })).sort((function(e, t) {
                    return e[0] - t[0]
                })).forEach((function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                }))
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.scrollspy"), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = r({}, tt, "object" == typeof e && e ? e : {})).target && s.isElement(e.target)) {
                    var t = i.default(e.target).attr("id");
                    t || (t = s.getUID(Ze), i.default(e.target).attr("id", t)), e.target = "#" + t
                }
                return s.typeCheckConfig(Ze, e, it), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= i) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map((function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })),
                    n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                    return e.classList.contains("active")
                })).forEach((function(e) {
                    return e.classList.remove("active")
                }))
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this).data("bs.scrollspy");
                    if (n || (n = new e(this, "object" == typeof t && t), i.default(this).data("bs.scrollspy", n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }]), e
        }();
    i.default(window).on("load.bs.scrollspy.data-api", (function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = i.default(e[t]);
            nt._jQueryInterface.call(n, n.data())
        }
    })), i.default.fn[Ze] = nt._jQueryInterface, i.default.fn[Ze].Constructor = nt, i.default.fn[Ze].noConflict = function() {
        return i.default.fn[Ze] = et, nt._jQueryInterface
    };
    var ot = i.default.fn.tab,
        rt = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled"))) {
                    var t, n, o = i.default(this._element).closest(".nav, .list-group")[0],
                        r = s.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                        n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1]
                    }
                    var l = i.default.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        u = i.default.Event("show.bs.tab", {
                            relatedTarget: n
                        });
                    if (n && i.default(n).trigger(l), i.default(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, o);
                        var d = function() {
                            var t = i.default.Event("hidden.bs.tab", {
                                    relatedTarget: e._element
                                }),
                                o = i.default.Event("shown.bs.tab", {
                                    relatedTarget: n
                                });
                            i.default(n).trigger(t), i.default(e._element).trigger(o)
                        };
                        t ? this._activate(t, t.parentNode, d) : d()
                    }
                }
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.tab"), this._element = null
            }, t._activate = function(e, t, n) {
                var o = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? i.default(t).children(".active") : i.default(t).find("> li > .active"))[0],
                    a = n && r && i.default(r).hasClass("fade"),
                    l = function() {
                        return o._transitionComplete(e, r, n)
                    };
                if (r && a) {
                    var u = s.getTransitionDurationFromElement(r);
                    i.default(r).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(u)
                } else l()
            }, t._transitionComplete = function(e, t, n) {
                if (t) {
                    i.default(t).removeClass("active");
                    var o = i.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    o && i.default(o).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (i.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && i.default(e.parentNode).hasClass("dropdown-menu")) {
                    var r = i.default(e).closest(".dropdown")[0];
                    if (r) {
                        var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        i.default(a).addClass("active")
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.tab");
                    if (o || (o = new e(this), n.data("bs.tab", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
        e.preventDefault(), rt._jQueryInterface.call(i.default(this), "show")
    })), i.default.fn.tab = rt._jQueryInterface, i.default.fn.tab.Constructor = rt, i.default.fn.tab.noConflict = function() {
        return i.default.fn.tab = ot, rt._jQueryInterface
    };
    var st = i.default.fn.toast,
        at = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        lt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ut = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this,
                    t = i.default.Event("show.bs.toast");
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function() {
                        e._element.classList.remove("showing"), e._element.classList.add("show"), i.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
                            e.hide()
                        }), e._config.delay))
                    };
                    if (this._element.classList.remove("hide"), s.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var o = s.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(o)
                    } else n()
                }
            }, t.hide = function() {
                if (this._element.classList.contains("show")) {
                    var e = i.default.Event("hide.bs.toast");
                    i.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i.default(this._element).off("click.dismiss.bs.toast"), i.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, t._getConfig = function(e) {
                return e = r({}, lt, i.default(this._element).data(), "object" == typeof e && e ? e : {}), s.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, t._setListeners = function() {
                var e = this;
                i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                    return e.hide()
                }))
            }, t._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add("hide"), i.default(e._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var n = s.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(s.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, t._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, e._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.toast");
                    if (o || (o = new e(this, "object" == typeof t && t), n.data("bs.toast", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t](this)
                    }
                }))
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return at
                }
            }, {
                key: "Default",
                get: function() {
                    return lt
                }
            }]), e
        }();
    i.default.fn.toast = ut._jQueryInterface, i.default.fn.toast.Constructor = ut, i.default.fn.toast.noConflict = function() {
        return i.default.fn.toast = st, ut._jQueryInterface
    }, e.Alert = u, e.Button = c, e.Carousel = v, e.Collapse = T, e.Dropdown = Ie, e.Modal = Le, e.Popover = Je, e.Scrollspy = nt, e.Tab = rt, e.Toast = ut, e.Tooltip = Ue, e.Util = s, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(i, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, i) {
            e(i).attr("data-slick-index", t)
        })), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? o.$slideTrack.animate(!1 === o.options.vertical ? {
            left: t
        } : {
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), n[o.animType] = !1 === o.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function() {
            o.disableTransition(), i.call()
        }), o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, t.prototype.asNavFor = function(t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        }))
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = !1 === t.options.fade ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var u = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * s + (t * a.options.slidesPerRow + i);
                        r.get(d) && u.appendChild(r.get(d))
                    }
                    l.appendChild(u)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, i) {
        var n, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            u = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = u : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var n, o, r = this,
            s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            e(this).attr("style", e(this).data("originalStyling"))
        })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout((function() {
            i.disableTransition(e), t.call()
        }), i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout((function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
            }), 0)
        }))
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++n;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, t.prototype.getLeft = function(e) {
        var t, i, n, o, r = this,
            s = 0;
        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(o, r) {
            if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft) return t = r, !1
        })), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            n = t.getNavigableIndexes().filter((function(e) {
                return e >= 0 && e < t.slideCount
            }));
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
            var o = n.indexOf(i);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + i,
                tabindex: -1
            }), -1 !== o && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + o
            })
        })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
            var r = n[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        })).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each((function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    s = document.createElement("img");
                s.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, (function() {
                        n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        })), r.$slider.trigger("lazyLoaded", [r, t, i])
                    }))
                }, s.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                }, s.src = i
            }))
        }
        var i, n, o, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, o <= r.slideCount && o++)), i = r.$slider.find(".slick-slide").slice(n, o), "anticipated" === r.options.lazyLoad)
            for (var s = n - 1, a = o, l = r.$slider.find(".slick-slide"), u = 0; u < r.options.slidesToScroll; u++) s < 0 && (s = r.slideCount - 1), i = (i = i.add(l.eq(s))).add(l.eq(a)), s--, a++;
        t(i), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, r, s, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            o && (i.attr("srcset", o), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, s.onerror = function() {
            t < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(t + 1)
            }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            for (t in o.respondTo = o.options.respondTo || "window", r)
                if (n = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                    for (i = r[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[t].settings
                }
            o.breakpoints.sort((function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            }))
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }), 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each((function(n, o) {
            t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        })), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
        else if ("multiple" === r) e.each(n, (function(e, t) {
            s.options[e] = t
        }));
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[i]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, i, n, o, r = this;
        if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : i.slice((n = r.options.slidesToShow + e) - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false"), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) e(o.$slides[i = t - 1]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n + o.slideCount; t += 1) e(o.$slides[i = t]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                e(this).attr("id", "")
            }))
        }
    }, t.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, i) {
        var n, o, r, s, a, l = null,
            u = this;
        if (t = t || !1, !(!0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === e))
            if (!1 === t && u.asNavFor(e), l = u.getLeft(n = e), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll)) !1 === u.options.fade && (n = u.currentSlide, !0 !== i ? u.animateSlide(s, (function() {
                u.postSlide(n)
            })) : u.postSlide(n));
            else if (!1 === u.options.infinite && !0 === u.options.centerMode && (e < 0 || e > u.slideCount - u.options.slidesToScroll)) !1 === u.options.fade && (n = u.currentSlide, !0 !== i ? u.animateSlide(s, (function() {
            u.postSlide(n)
        })) : u.postSlide(n));
        else {
            if (u.options.autoplay && clearInterval(u.autoPlayTimer), o = n < 0 ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + n : n >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : n - u.slideCount : n, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, o]), r = u.currentSlide, u.currentSlide = o, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = (a = u.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), !0 === u.options.fade) return !0 !== i ? (u.fadeSlideOut(r), u.fadeSlide(o, (function() {
                u.postSlide(o)
            }))) : u.postSlide(o), void u.animateHeight();
            !0 !== i ? u.animateSlide(l, (function() {
                u.postSlide(o)
            })) : u.postSlide(o)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, i = this;
        return e = Math.atan2(i.touchObject.startY - i.touchObject.curY, i.touchObject.startX - i.touchObject.curX), (t = Math.round(180 * e / Math.PI)) < 0 && (t = 360 - Math.abs(t)), t <= 45 && t >= 0 || t <= 360 && t >= 315 ? !1 === i.options.rtl ? "left" : "right" : t >= 135 && t <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? t >= 35 && t <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, i, n, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.swipeLeft = !1 === a.options.vertical ? t + n * o : t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (e.interrupted = !!document[e.hidden])
    }, e.fn.slick = function() {
        var e, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = n.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), void 0 !== i) return i;
        return n
    }
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}((function(e) {
    var t, i, n, o, r, s, a = "Close",
        l = "BeforeClose",
        u = "MarkupParse",
        d = "Open",
        c = "Change",
        f = "mfp",
        p = "." + f,
        h = "mfp-ready",
        m = "mfp-removing",
        g = "mfp-prevent-close",
        v = function() {},
        y = !!window.jQuery,
        b = e(window),
        w = function(e, i) {
            t.ev.on(f + e + p, i)
        },
        _ = function(t, i, n, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = e(r), i && r.appendTo(i)), r
        },
        T = function(i, n) {
            t.ev.triggerHandler(f + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
        },
        x = function(i) {
            return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
        },
        C = function() {
            e.magnificPopup.instance || ((t = new v).init(), e.magnificPopup.instance = t)
        };
    v.prototype = {
        constructor: v,
        init: function() {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
        },
        open: function(i) {
            var o;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(), t.index = 0;
                var s, a = i.items;
                for (o = 0; o < a.length; o++)
                    if ((s = a[o]).parsed && (s = s.el[0]), s === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (!t.isOpen) {
                t.types = [], r = "", t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = _("bg").on("click" + p, (function() {
                    t.close()
                })), t.wrap = _("wrap").attr("tabindex", -1).on("click" + p, (function(e) {
                    t._checkIfClose(e.target) && t.close()
                })), t.container = _("container", t.wrap)), t.contentContainer = _("content"), t.st.preloader && (t.preloader = _("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var c = l[o];
                    c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
                }
                T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(u, (function(e, t, i, n) {
                    i.close_replaceWith = x(n.type)
                })), r += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (r += " mfp-align-top"), t.wrap.css(t.fixedContentPos ? {
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                } : {
                    top: b.scrollTop(),
                    position: "absolute"
                }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && n.on("keyup" + p, (function(e) {
                    27 === e.keyCode && t.close()
                })), b.on("resize" + p, (function() {
                    t.updateSize()
                })), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
                var f = t.wH = b.height(),
                    m = {};
                if (t.fixedContentPos && t._hasScrollBar(f)) {
                    var g = t._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout((function() {
                    t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), n.on("focusin" + p, t._onFocusIn)
                }), 16), t.isOpen = !0, t.updateSize(f), T(d), i
            }
            t.updateItemHTML()
        },
        close: function() {
            t.isOpen && (T(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m), setTimeout((function() {
                t._close()
            }), t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(a);
            var i = m + " " + h + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            n.off("keyup.mfp focusin" + p), t.ev.off(p), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T("AfterClose")
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var r = !!t.st[n] && t.st[n].markup;
                T("FirstMarkupParse", r), t.currTemplate[n] = !r || e(r)
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(s, n), i.preloaded = !0, T(c, i), o = i.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", T("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {
                    el: e(o)
                } : (n = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++)
                    if (o.el.hasClass("mfp-" + r[s])) {
                        n = r[s];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, T("ElementParse", o), t.items[i]
        },
        addGroup: function(e, i) {
            var n = function(n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        },
        _openClick: function(i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0
                    } else if (b.width() < r) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {
                    status: e,
                    text: n
                };
                T("UpdateStatus", o), e = o.status, t.preloader.html(n = o.text), t.preloader.find("a").on("click", (function(e) {
                    e.stopImmediatePropagation()
                })), t.container.addClass("mfp-s-" + e), i = e
            }
        },
        _checkIfClose: function(i) {
            if (!e(i).hasClass(g)) {
                var n = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (n && o) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return !0
                } else if (o && e.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), T(u, [t, i, n]), e.each(i, (function(i, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((o = i.split("_")).length > 1) {
                    var r = t.find(p + "-" + o[0]);
                    if (r.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                    }
                } else t.find(p + "-" + i).html(n)
            }))
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function(t, i) {
            return C(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(i) {
        C();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, r = y ? n.data("magnificPopup") : n[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
                    mfpEl: o
                }, n, r)
            } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {}, i), y ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var S, E, k, I = "inline",
        A = function() {
            k && (E.after(k.addClass(S)).detach(), k = null)
        };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(I), w(a + "." + I, (function() {
                    A()
                }))
            },
            getInline: function(i, n) {
                if (A(), i.src) {
                    var o = t.st.inline,
                        r = e(i.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (E || (E = _(S = o.hiddenClass), S = "mfp-" + S), k = r.after(E).detach().removeClass(S)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return i.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var N, D = "ajax",
        L = function() {
            N && e(document.body).removeClass(N)
        },
        O = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(D, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(D), N = t.st.ajax.cursor, w(a + "." + D, O), w("BeforeChange." + D, O)
            },
            getAjax: function(i) {
                N && e(document.body).addClass(N), t.updateStatus("loading");
                var n = e.extend({
                    url: i.src,
                    success: function(n, o, r) {
                        var s = {
                            data: n,
                            xhr: r
                        };
                        T("ParseAjax", s), t.appendContent(e(s.data), D), i.finished = !0, L(), t._setFocus(), setTimeout((function() {
                            t.wrap.addClass(h)
                        }), 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        L(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n), ""
            }
        }
    });
    var j, z, P = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image,
                    n = ".image";
                t.types.push("image"), w(d + n, (function() {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                })), w(a + n, (function() {
                    i.cursor && e(document.body).removeClass(i.cursor), b.off("resize" + p)
                })), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var i = 0,
                    n = e.img[0],
                    o = function(r) {
                        j && clearInterval(j), j = setInterval((function() {
                            return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(j), void(3 == ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                        }), r)
                    };
                o(1)
            },
            getImage: function(i, n) {
                var o = 0,
                    r = function() {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : s())
                    },
                    s = function() {
                        i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    a = t.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = e(u).on("load.mfploader", r).on("error.mfploader", s), u.src = i.src, l.is("img") && (i.img = i.img.clone()), (u = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: P(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    }), e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, i = t.st.zoom,
                    n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, r, s = i.duration,
                        u = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                o = "transition";
                            return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = "all " + i.duration / 1e3 + "s " + i.easing, t.css(n), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + n, (function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void d();
                            (r = u(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout((function() {
                                r.css(t._getOffset(!0)), o = setTimeout((function() {
                                    d(), setTimeout((function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }), 16)
                                }), s)
                            }), 16)
                        }
                    })), w(l + n, (function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                r = u(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout((function() {
                                r.css(t._getOffset())
                            }), 16)
                        }
                    })), w(a + n, (function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    }))
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(i) {
                var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    r = parseInt(n.css("padding-top"), 10),
                    s = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: n.width(),
                    height: (y ? n.innerHeight() : n[0].offsetHeight) - s - r
                };
                return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform), z ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var H = "iframe",
        M = function(e) {
            if (t.currTemplate[H]) {
                var i = t.currTemplate[H].find("iframe");
                i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(H, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(H), w("BeforeChange", (function(e, t, i) {
                    t !== i && (t === H ? M() : i === H && M(!0))
                })), w(a + "." + H, (function() {
                    M()
                }))
            },
            getIframe: function(i, n) {
                var o = i.src,
                    r = t.st.iframe;
                e.each(r.patterns, (function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                }));
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(n, s, i), t.updateStatus("ready"), n
            }
        }
    });
    var $ = function(e) {
            var i = t.items.length;
            return e > i - 1 ? e - i : 0 > e ? i + e : e
        },
        q = function(e, t, i) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = t.st.gallery,
                    o = ".mfp-gallery";
                return t.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", w(d + o, (function() {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", (function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    })), n.on("keydown" + o, (function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    }))
                })), w("UpdateStatus" + o, (function(e, i) {
                    i.text && (i.text = q(i.text, t.currItem.index, t.items.length))
                })), w(u + o, (function(e, n, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? q(i.tCounter, r.index, s) : ""
                })), w("BuildControls" + o, (function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                            r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                        o.click((function() {
                            t.prev()
                        })), r.click((function() {
                            t.next()
                        })), t.container.append(o.add(r))
                    }
                })), w(c + o, (function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout((function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }), 16)
                })), void w(a + o, (function() {
                    n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                })))
            },
            next: function() {
                t.direction = !0, t.index = $(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = $(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload,
                    n = Math.min(i[0], t.items.length),
                    o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(i) {
                if (i = $(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), T("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", (function() {
                        n.hasSize = !0
                    })).on("error.mfploader", (function() {
                        n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
                    })).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var W = "retina";
    e.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, (function(e) {
                    return "@2x" + e
                }))
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize." + W, (function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    })), w("ElementParse." + W, (function(t, n) {
                        n.src = e.replaceSrc(n, i)
                    })))
                }
            }
        }
    }), C()
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
        return t(e, i)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, (function(e, t) {
    "use strict";

    function i(i, r, a) {
        function l(e, t, n) {
            var o, r = "$()." + i + '("' + t + '")';
            return e.each((function(e, l) {
                var u = a.data(l, i);
                if (u) {
                    var d = u[t];
                    if (d && "_" != t.charAt(0)) {
                        var c = d.apply(u, n);
                        o = void 0 === o ? c : o
                    } else s(r + " is not a valid method")
                } else s(i + " not initialized. Cannot call methods, i.e. " + r)
            })), void 0 !== o ? o : e
        }

        function u(e, t) {
            e.each((function(e, n) {
                var o = a.data(n, i);
                o ? (o.option(t), o._init()) : (o = new r(n, t), a.data(n, i, o))
            }))
        }(a = a || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function(e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[i] = function(e) {
            if ("string" == typeof e) {
                var t = o.call(arguments, 1);
                return l(this, e, t)
            }
            return u(this, e), this
        }, n(a))
    }

    function n(e) {
        !e || e && e.bridget || (e.bridget = i)
    }
    var o = Array.prototype.slice,
        r = e.console,
        s = void 0 === r ? function() {} : function(e) {
            r.error(e)
        };
    return n(t || e.jQuery), i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, (function() {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t(e) {
        var t = getComputedStyle(e);
        return t || r("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
            var r = document.body || document.documentElement;
            r.appendChild(i);
            var s = t(i);
            o = 200 == Math.round(e(s.width)), n.isBoxSizeOuter = o, r.removeChild(i)
        }
    }

    function n(n) {
        if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
            var r = t(n);
            if ("none" == r.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; t < a; t++) e[s[t]] = 0;
                return e
            }();
            var l = {};
            l.width = n.offsetWidth, l.height = n.offsetHeight;
            for (var u = l.isBorderBox = "border-box" == r.boxSizing, d = 0; d < a; d++) {
                var c = s[d],
                    f = parseFloat(r[c]);
                l[c] = isNaN(f) ? 0 : f
            }
            var p = l.paddingLeft + l.paddingRight,
                h = l.paddingTop + l.paddingBottom,
                m = l.marginLeft + l.marginRight,
                g = l.marginTop + l.marginBottom,
                v = l.borderLeftWidth + l.borderRightWidth,
                y = l.borderTopWidth + l.borderBottomWidth,
                b = u && o,
                w = e(r.width);
            !1 !== w && (l.width = w + (b ? 0 : p + v));
            var _ = e(r.height);
            return !1 !== _ && (l.height = _ + (b ? 0 : h + y)), l.innerWidth = l.width - (p + v), l.innerHeight = l.height - (h + y), l.outerWidth = l.width + m, l.outerHeight = l.height + g, l
        }
    }
    var o, r = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = s.length,
        l = !1;
    return n
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, (function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var n = t[i] + "MatchesSelector";
            if (e[n]) return n
        }
    }();
    return function(t, i) {
        return t[e](i)
    }
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
        return t(e, i)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, (function(e, t) {
    var i = {
            extend: function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        n = Array.prototype.slice;
    i.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? n.call(e) : [e]
    }, i.removeFrom = function(e, t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, i.getParent = function(e, i) {
        for (; e.parentNode && e != document.body;)
            if (t(e = e.parentNode, i)) return e
    }, i.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.filterFindElements = function(e, n) {
        e = i.makeArray(e);
        var o = [];
        return e.forEach((function(e) {
            if (e instanceof HTMLElement) {
                if (!n) return void o.push(e);
                t(e, n) && o.push(e);
                for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        })), o
    }, i.debounceMethod = function(e, t, i) {
        i = i || 100;
        var n = e.prototype[t],
            o = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[o];
            clearTimeout(e);
            var t = arguments,
                r = this;
            this[o] = setTimeout((function() {
                n.apply(r, t), delete r[o]
            }), i)
        }
    }, i.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, (function(e, t, i) {
            return t + "-" + i
        })).toLowerCase()
    };
    var o = e.console;
    return i.htmlInit = function(t, n) {
        i.docReady((function() {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(l)),
                d = s + "-options",
                c = e.jQuery;
            u.forEach((function(e) {
                var i, r = e.getAttribute(s) || e.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(o && o.error("Error parsing " + s + " on " + e.className + ": " + a))
                }
                var l = new t(e, i);
                c && c.data(e, n, l)
            }))
        }))
    }, i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, (function(e, t) {
    "use strict";

    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var n = document.documentElement.style,
        o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
        s = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[o],
        a = {
            transform: r,
            transition: o,
            transitionDuration: o + "Duration",
            transitionProperty: o + "Property",
            transitionDelay: o + "Delay"
        },
        l = i.prototype = Object.create(e.prototype);
    l.constructor = i, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, l.getSize = function() {
        this.size = t(this.element)
    }, l.css = function(e) {
        var t = this.element.style;
        for (var i in e) t[a[i] || i] = e[i]
    }, l.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = e[t ? "left" : "right"],
            o = e[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r -= t ? a.paddingLeft : a.paddingRight, this.position.y = s
    }, l.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "right" : "left";
        t[i ? "left" : "right"] = this.getXValue(this.position.x + e[i ? "paddingLeft" : "paddingRight"]), t[o] = "";
        var r = n ? "bottom" : "top";
        t[n ? "top" : "bottom"] = this.getYValue(this.position.y + e[n ? "paddingTop" : "paddingBottom"]), t[r] = "", this.css(t), this.emitEvent("layout", [this])
    }, l.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, l.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, l._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), !o || this.isTransitioning) {
            var r = {};
            r.transform = this.getTranslate(e - i, t - n), this.transition({
                to: r,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, l.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, l._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, l.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
            for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
            e.from && this.css(e.from), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var u = "opacity," + function(e) {
        return e.replace(/([A-Z])/g, (function(e) {
            return "-" + e.toLowerCase()
        }))
    }(r);
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            this.css({
                transitionProperty: u,
                transitionDuration: e = "number" == typeof e ? e + "ms" : e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(s, this, !1)
        }
    }, l.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, l.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = d[e.propertyName] || e.propertyName;
            delete t.ingProperties[i],
                function(e) {
                    for (var t in e) return !1;
                    return !0
                }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function(e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(c)
    }, l.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function() {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, n, o, r) {
        return t(e, i, n, o, r)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, (function(e, t, i, n, o) {
    "use strict";

    function r(e, t) {
        var i = n.getQueryElement(e);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
            var o = ++d;
            this.element.outlayerGUID = o, c[o] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
    }

    function s(e) {
        function t() {
            e.apply(this, arguments)
        }
        return (t.prototype = Object.create(e.prototype)).constructor = t, t
    }
    var a = e.console,
        l = e.jQuery,
        u = function() {},
        d = 0,
        c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, t.prototype), f.option = function(e) {
        n.extend(this.options, e)
    }, f._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], o = 0; o < t.length; o++) {
            var r = new i(t[o], this);
            n.push(r)
        }
        return n
    }, f._filterFindItemElements = function(e) {
        return n.filterFindElements(e, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map((function(e) {
            return e.element
        }))
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant");
        this.layoutItems(this.items, void 0 !== e ? e : !this._isLayoutInited), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = i(this.element)
    }, f._getMeasurement = function(e, t) {
        var n, o = this.options[e];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[e] = n ? i(n)[t] : o) : this[e] = 0
    }, f.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, f._getItemsForLayout = function(e) {
        return e.filter((function(e) {
            return !e.isIgnored
        }))
    }, f._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach((function(e) {
                var n = this._getItemLayoutPosition(e);
                n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
            }), this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach((function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }), this)
    }, f.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                n = t && t[2];
            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
        }(e), this.stagger)
    }, f._positionItem = function(e, t, i, n, o) {
        n ? e.goTo(t, i) : (e.stagger(o * this.stagger), e.moveTo(t, i))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = u, f._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, f._emitCompleteOnItems = function(e, t) {
        function i() {
            o.dispatchEvent(e + "Complete", null, [t])
        }

        function n() {
            ++s == r && i()
        }
        var o = this,
            r = t.length;
        if (t && r) {
            var s = 0;
            t.forEach((function(t) {
                t.once(e, n)
            }))
        } else i()
    }, f.dispatchEvent = function(e, t, i) {
        var n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), l)
            if (this.$element = this.$element || l(this.element), t) {
                var o = l.Event(t);
                o.type = e, this.$element.trigger(o, i)
            } else this.$element.trigger(e, i)
    }, f.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, f.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, f.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, f.unstamp = function(e) {
        (e = this._find(e)) && e.forEach((function(e) {
            n.removeFrom(this.stamps, e), this.unignore(e)
        }), this)
    }, f._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), n.makeArray(e)
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, f._manageStamp = u, f._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(e);
        return {
            left: t.left - n.left - o.marginLeft,
            top: t.top - n.top - o.marginTop,
            right: n.right - t.right - o.marginRight,
            bottom: n.bottom - t.bottom - o.marginBottom
        }
    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var e = i(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, f.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, f.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, f.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
        }
    }, f.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, i) {
                e.stagger(i * t), e.reveal()
            }))
        }
    }, f.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, i) {
                e.stagger(i * t), e.hide()
            }))
        }
    }, f.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, f.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, f.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i
        }
    }, f.getItems = function(e) {
        e = n.makeArray(e);
        var t = [];
        return e.forEach((function(e) {
            var i = this.getItem(e);
            i && t.push(i)
        }), this), t
    }, f.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach((function(e) {
            e.remove(), n.removeFrom(this.items, e)
        }), this)
    }, f.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach((function(e) {
            e.destroy()
        })), this.unbindResize(), delete c[this.element.outlayerGUID], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, r.data = function(e) {
        var t = (e = n.getQueryElement(e)) && e.outlayerGUID;
        return t && c[t]
    }, r.create = function(e, t) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = e, i.data = r.data, i.Item = s(o), n.htmlInit(i, e), l && l.bridget && l.bridget(e, i), i
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, (function(e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var i = t.prototype = Object.create(e.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                t = this.layout._sorters;
            for (var i in e) this.sortData[i] = (0, t[i])(this.element, this)
        }
    };
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, (function(e, t) {
    "use strict";

    function i(e) {
        this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(e) {
        n[e] = function() {
            return t.prototype[e].apply(this.isotope, arguments)
        }
    })), n.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(e, t) {
        var i = e + t,
            n = "outer" + t;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + t]
        }
    }, n.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(e, t) {
        function o() {
            i.apply(this, arguments)
        }
        return (o.prototype = Object.create(n)).constructor = o, t && (o.options = t), o.prototype.namespace = e, i.modes[e] = o, o
    }, i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, (function(e, t) {
    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                i = e && e.element;
            this.columnWidth = i && t(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n;
        r = Math[s && s < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function() {
        var e = this._getOption("fitWidth"),
            i = t(e ? this.element.parentNode : this.element);
        this.containerWidth = i && i.innerWidth
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e), o = {
                x: this.columnWidth * n.col,
                y: n.y
            }, r = n.y + e.size.outerHeight, s = i + n.col, a = n.col; a < s; a++) this.colYs[a] = r;
        return o
    }, n._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) t[n] = this._getColGroupY(n, e);
        return t
    }, n._getColGroupY = function(e, t) {
        if (t < 2) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols;
        return i = e > 1 && i + e > this.cols ? 0 : i, this.horizontalColIndex = t.size.outerWidth && t.size.outerHeight ? i + e : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, e)
        }
    }, n._manageStamp = function(e) {
        var i = t(e),
            n = this._getElementOffset(e),
            o = this._getOption("originLeft") ? n.left : n.right,
            r = o + i.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, u = s; u <= a; u++) this.colYs[u] = Math.max(l, this.colYs[u])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, n._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, (function(e, t) {
    "use strict";
    var i = e.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in t.prototype) o[r] || (n[r] = t.prototype[r]);
    var s = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("fitRows"),
        i = t.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter;
        0 !== this.x && t + this.x > this.isotope.size.innerWidth + this.gutter && (this.x = 0, this.y = this.maxY);
        var i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("vertical", {
            horizontalAlignment: 0
        }),
        i = t.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += e.size.outerHeight, {
            x: t,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(i, n, o, r, s, a) {
        return t(e, i, 0, o, r, s, a)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, 0, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, (function(e, t, i, n, o, r, s) {
    var a = e.jQuery,
        l = String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        u = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    u.Item = r, u.LayoutMode = s;
    var d = u.prototype;
    d._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(e)
    }, d.reloadItems = function() {
        this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, d._itemize = function() {
        for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) {
            var n = e[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, d._initLayoutMode = function(e) {
        var t = s.modes[e],
            i = this.options[e] || {};
        this.options[e] = t.options ? o.extend(t.options, i) : i, this.modes[e] = new t(this)
    }, d.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, d.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, d._init = d.arrange, d._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, d._getIsInstant = function() {
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d._bindArrangeComplete = function() {
        function e() {
            t && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var t, i, n, o = this;
        this.once("layoutComplete", (function() {
            t = !0, e()
        })), this.once("hideComplete", (function() {
            i = !0, e()
        })), this.once("revealComplete", (function() {
            n = !0, e()
        }))
    }, d._filter = function(e) {
        for (var t = this.options.filter, i = [], n = [], o = [], r = this._getFilterTest(t = t || "*"), s = 0; s < e.length; s++) {
            var a = e[s];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, d._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        } : "function" == typeof e ? function(t) {
            return e(t.element)
        } : function(t) {
            return n(t.element, e)
        }
    }, d.updateSortData = function(e) {
        var t;
        e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
    }, d._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) this._sorters[t] = c(e[t])
    }, d._updateItemsSortData = function(e) {
        for (var t = e && e.length, i = 0; t && i < t; i++) e[i].updateSortData()
    };
    var c = function(e) {
        if ("string" != typeof e) return e;
        var t = l(e).split(" "),
            i = t[0],
            n = i.match(/^\[(.+)\]$/),
            o = function(e, t) {
                return e ? function(t) {
                    return t.getAttribute(e)
                } : function(e) {
                    var i = e.querySelector(t);
                    return i && i.textContent
                }
            }(n && n[1], i),
            r = u.sortDataParsers[t[1]];
        return r ? function(e) {
            return e && r(o(e))
        } : function(e) {
            return e && o(e)
        }
    };
    u.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    }, d._sort = function() {
        if (this.options.sortBy) {
            var e = o.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var t = function(e, t) {
                return function(i, n) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o],
                            s = i.sortData[r],
                            a = n.sortData[r];
                        if (s > a || s < a) return (s > a ? 1 : -1) * ((void 0 !== t[r] ? t[r] : t) ? 1 : -1)
                    }
                    return 0
                }
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(t)
        }
    }, d._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t] != this.sortHistory[t]) return !1;
        return !0
    }, d._mode = function() {
        var e = this.options.layoutMode,
            t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t
    }, d._resetLayout = function() {
        t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }, d._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }, d._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, d.appended = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
        }
    }, d._filterRevealAdded = function(e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, d.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i, n = t.length;
            for (i = 0; i < n; i++) this.element.appendChild(t[i].element);
            var o = this._filter(t).matches;
            for (i = 0; i < n; i++) t[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete t[i].isLayoutInstant;
            this.reveal(o)
        }
    };
    var f = d.remove;
    return d.remove = function(e) {
        e = o.makeArray(e);
        var t = this.getItems(e);
        f.call(this, e);
        for (var i = t && t.length, n = 0; i && n < i; n++) o.removeFrom(this.filteredItems, t[n])
    }, d.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) this.items[e].sortData.random = Math.random();
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d._noTransition = function(e, t) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = e.apply(this, t);
        return this.options.transitionDuration = i, n
    }, d.getFilteredItemElements = function() {
        return this.filteredItems.map((function(e) {
            return e.element
        }))
    }, u
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(i) {
        return t(e, i)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e, t, o) {
        if (!(this instanceof n)) return new n(e, t, o);
        var r = e;
        return "string" == typeof e && (r = document.querySelectorAll(e)), r ? (this.elements = function(e) {
            return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? l.call(e) : [e]
        }(r), this.options = i({}, this.options), "function" == typeof t ? o = t : i(this.options, t), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (r || e))
    }

    function o(e) {
        this.img = e
    }

    function r(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var s = e.jQuery,
        a = e.console,
        l = Array.prototype.slice;
    (n.prototype = Object.create(t.prototype)).options = {}, n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) this.addImage(i[n]);
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) this.addElementBackgroundImages(o[n])
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, n.prototype.addImage = function(e) {
        var t = new o(e);
        this.images.push(t)
    }, n.prototype.addBackground = function(e, t) {
        var i = new r(e, t);
        this.images.push(i)
    }, n.prototype.check = function() {
        function e(e, i, n) {
            setTimeout((function() {
                t.progress(e, i, n)
            }))
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function(t) {
            t.once("progress", e), t.check()
        })) : void this.complete()
    }, n.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, n.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && this.jqDeferred[this.hasAnyBroken ? "reject" : "resolve"](this)
    }, (o.prototype = Object.create(t.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (r.prototype = Object.create(o.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, n.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(e, t) {
            return new n(this, e, t).jqDeferred.promise(s(this))
        })
    }, n.makeJQueryPlugin(), n
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    function t() {
        var t, i, n = {
            height: u.innerHeight,
            width: u.innerWidth
        };
        return n.height || ((t = l.compatMode) || !e.support.boxModel) && (n = {
            height: (i = "CSS1Compat" === t ? d : l.body).clientHeight,
            width: i.clientWidth
        }), n
    }

    function i() {
        return {
            top: u.pageYOffset || d.scrollTop || l.body.scrollTop,
            left: u.pageXOffset || d.scrollLeft || l.body.scrollLeft
        }
    }

    function n() {
        if (a.length) {
            var n = 0,
                s = e.map(a, (function(e) {
                    var t = e.data.selector,
                        i = e.$element;
                    return t ? i.find(t) : i
                }));
            for (o = o || t(), r = r || i(); n < a.length; n++)
                if (e.contains(d, s[n][0])) {
                    var l = e(s[n]),
                        u = {
                            height: l[0].offsetHeight,
                            width: l[0].offsetWidth
                        },
                        c = l.offset(),
                        f = l.data("inview");
                    if (!r || !o) return;
                    c.top + u.height > r.top && c.top < r.top + o.height && c.left + u.width > r.left && c.left < r.left + o.width ? f || l.data("inview", !0).trigger("inview", [!0]) : f && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var o, r, s, a = [],
        l = document,
        u = window,
        d = l.documentElement;
    e.event.special.inview = {
        add: function(t) {
            a.push({
                data: t,
                $element: e(this),
                element: this
            }), !s && a.length && (s = setInterval(n, 250))
        },
        remove: function(e) {
            for (var t = 0; t < a.length; t++) {
                var i = a[t];
                if (i.element === this && i.data.guid === e.guid) {
                    a.splice(t, 1);
                    break
                }
            }
            a.length || (clearInterval(s), s = null)
        }
    }, e(u).on("scroll resize scrollstop", (function() {
        o = r = null
    })), !d.addEventListener && d.attachEvent && d.attachEvent("onfocusin", (function() {
        r = null
    }))
})),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, (function(e) {
    var t = function(e, t) {
            var i, n = document.createElement("canvas");
            e.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
            var o = n.getContext("2d");
            n.width = n.height = t.size;
            var r = 1;
            window.devicePixelRatio > 1 && (r = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
            var s = (t.size - t.lineWidth) / 2;
            t.scaleColor && t.scaleLength && (s -= t.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var a = function(e, t, i) {
                    var n = 0 >= (i = Math.min(Math.max(-1, i || 0), 1));
                    o.beginPath(), o.arc(0, 0, s, 0, 2 * Math.PI * i, n), o.strokeStyle = e, o.lineWidth = t, o.stroke()
                },
                l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                },
                u = function() {
                    t.scaleColor && function() {
                        var e, i;
                        o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
                        for (var n = 24; n > 0; --n) n % 6 == 0 ? (i = t.scaleLength, e = 0) : e = t.scaleLength - (i = .6 * t.scaleLength), o.fillRect(-t.size / 2 + e, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore()
                    }(), t.trackColor && a(t.trackColor, t.trackWidth || t.lineWidth, 1)
                };
            this.getCanvas = function() {
                return n
            }, this.getCtx = function() {
                return o
            }, this.clear = function() {
                o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
            }, this.draw = (function(e) {
                var n;
                t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = t.lineCap, n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, a(n, t.lineWidth, e / 100)
            }).bind(this), this.animate = (function(e, i) {
                var n = Date.now();
                t.onStart(e, i);
                var o = (function() {
                    var r = Math.min(Date.now() - n, t.animate.duration),
                        s = t.easing(this, r, e, i - e, t.animate.duration);
                    this.draw(s), t.onStep(e, i, s), r >= t.animate.duration ? t.onStop(e, i) : l(o)
                }).bind(this);
                l(o)
            }).bind(this)
        },
        i = function(e, i) {
            var n = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(e, t, i, n, o) {
                    return 1 > (t /= o / 2) ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
                },
                onStart: function(e, t) {},
                onStep: function(e, t, i) {},
                onStop: function(e, t) {}
            };
            if (void 0 !== t) n.renderer = t;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                n.renderer = SVGRenderer
            }
            var o = {},
                r = 0,
                s = (function() {
                    for (var t in this.el = e, this.options = o, n) n.hasOwnProperty(t) && (o[t] = i && void 0 !== i[t] ? i[t] : n[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
                    o.easing = "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? jQuery.easing[o.easing] : n.easing, "number" == typeof o.animate && (o.animate = {
                        duration: o.animate,
                        enabled: !0
                    }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                        duration: 1e3,
                        enabled: o.animate
                    }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                }).bind(this);
            this.update = (function(e) {
                return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
            }).bind(this), this.disableAnimation = function() {
                return o.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return o.animate.enabled = !0, this
            }, s()
        };
    e.fn.easyPieChart = function(t) {
        return this.each((function() {
            var n;
            e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new i(this, n)))
        }))
    }
})),
function(e) {
    var t = "day",
        i = "hour",
        n = "minute",
        o = "second",
        r = {
            d: t,
            h: i,
            m: n,
            s: o
        },
        s = {
            list: [o, n, i, t],
            next: function(e) {
                var t = this.list.indexOf(e);
                return t < this.list.length && this.list[t + 1]
            },
            prev: function(e) {
                var t = this.list.indexOf(e);
                return 0 < t && this.list[t - 1]
            }
        },
        a = {
            year: 2014,
            month: 7,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            timeZone: "local",
            ignoreTransferTime: !1,
            layout: "dhms",
            periodic: !1,
            periodInterval: 7,
            periodUnit: "d",
            doubleNumbers: !0,
            effectType: "none",
            lang: "eng",
            headTitle: "",
            footTitle: "",
            afterDeadline: function(e) {
                e.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>')
            }
        },
        l = {
            second: !1,
            minute: !1,
            hour: !1,
            day: !1
        },
        u = {
            init: function(t) {
                var i = e.extend({}, a, t || {});
                i.itemTypes = d.getItemTypesByLayout(i.layout), i._itemsHas = e.extend({}, l);
                for (var n = 0; n < i.itemTypes.length; n++) i._itemsHas[i.itemTypes[n]] = !0;
                return this.each((function() {
                    e(this).data("syotimer-options", i), u._render.apply(this, []), u._perSecondHandler.apply(this, [])
                }))
            },
            _render: function() {
                for (var t = e(this), i = t.data("syotimer-options"), n = d.getTimerItem(), o = e("<div/>", {
                        class: "syotimer__head"
                    }).html(i.headTitle), r = e("<div/>", {
                        class: "syotimer__body"
                    }), s = e("<div/>", {
                        class: "syotimer__footer"
                    }).html(i.footTitle), a = {}, l = 0; l < i.itemTypes.length; l++) {
                    var u = n.clone();
                    u.addClass("syotimer-cell_type_" + i.itemTypes[l]), r.append(u), a[i.itemTypes[l]] = u
                }
                t.data("syotimer-blocks", {
                    headBlock: o,
                    bodyBlock: r,
                    footBlock: s
                }).data("syotimer-items", a).addClass("syotimer").append(o).append(r).append(s)
            },
            _perSecondHandler: function() {
                var t = e(this),
                    i = t.data("syotimer-options");
                e(".syotimer-cell > .syotimer-cell__value", t).css("opacity", 1);
                var n = new Date,
                    o = new Date(i.year, i.month - 1, i.day, i.hour, i.minute, i.second),
                    r = d.getDifferenceWithTimezone(n, o, i),
                    s = d.getSecondsToDeadLine(r, i);
                0 <= s ? (u._refreshUnitsDom.apply(this, [s]), u._applyEffectSwitch.apply(this, [i.effectType])) : (t = e.extend(t, t.data("syotimer-blocks")), i.afterDeadline(t))
            },
            _refreshUnitsDom: function(i) {
                var n = e(this),
                    o = n.data("syotimer-options"),
                    r = n.data("syotimer-items"),
                    s = o.itemTypes,
                    a = d.getUnitsToDeadLine(i);
                o._itemsHas.day || (a.hour += 24 * a.day), o._itemsHas.hour || (a.minute += 60 * a.hour), o._itemsHas.minute || (a.second += 60 * a.minute);
                for (var l = 0; l < s.length; l++) {
                    var u = s[l],
                        c = a[u],
                        f = r[u];
                    f.data("syotimer-unit-value", c), e(".syotimer-cell__value", f).html(d.format2(c, u !== t && o.doubleNumbers)), e(".syotimer-cell__unit", f).html(e.syotimerLang.getNumeral(c, o.lang, u))
                }
            },
            _applyEffectSwitch: function(t, i) {
                i = i || o;
                var n = this,
                    r = e(n);
                if ("none" === t) setTimeout((function() {
                    u._perSecondHandler.apply(n, [])
                }), 1e3);
                else if ("opacity" === t) {
                    var a = r.data("syotimer-items")[i];
                    if (a) {
                        var l = s.next(i),
                            d = a.data("syotimer-unit-value");
                        e(".syotimer-cell__value", a).animate({
                            opacity: .1
                        }, 1e3, "linear", (function() {
                            u._perSecondHandler.apply(n, [])
                        })), l && 0 === d && u._applyEffectSwitch.apply(n, [t, l])
                    }
                }
            }
        },
        d = {
            getTimerItem: function() {
                var t = e("<div/>", {
                        class: "syotimer-cell__value",
                        text: "0"
                    }),
                    i = e("<div/>", {
                        class: "syotimer-cell__unit"
                    }),
                    n = e("<div/>", {
                        class: "syotimer-cell"
                    });
                return n.append(t).append(i), n
            },
            getItemTypesByLayout: function(e) {
                for (var t = [], i = 0; i < e.length; i++) t.push(r[e[i]]);
                return t
            },
            getSecondsToDeadLine: function(e, t) {
                var i, n = e / 1e3;
                if (n = Math.floor(n), t.periodic) {
                    var o, r, s = d.getPeriodUnit(t.periodUnit),
                        a = e / (1e3 * s);
                    a = Math.ceil(a), a = Math.abs(a), 0 <= n ? (r = 0 == (r = a % t.periodInterval) ? t.periodInterval : r, r -= 1) : r = t.periodInterval - a % t.periodInterval, 0 == (o = n % s) && n < 0 && r--, i = Math.abs(r * s + o)
                } else i = n;
                return i
            },
            getUnitsToDeadLine: function(e) {
                var i = t,
                    n = {};
                do {
                    var o = d.getPeriodUnit(i);
                    n[i] = Math.floor(e / o), e %= o
                } while (i = s.prev(i));
                return n
            },
            getPeriodUnit: function(e) {
                switch (e) {
                    case "d":
                    case t:
                        return 86400;
                    case "h":
                    case i:
                        return 3600;
                    case "m":
                    case n:
                        return 60;
                    case "s":
                    case o:
                        return 1
                }
            },
            getDifferenceWithTimezone: function(e, t, o) {
                var r = t.getTime() - e.getTime(),
                    s = 0,
                    a = 0;
                return "local" !== o.timeZone && (s = 1e3 * (parseFloat(o.timeZone) * d.getPeriodUnit(i) - -e.getTimezoneOffset() * d.getPeriodUnit(n))), o.ignoreTransferTime && (a = 1e3 * (-e.getTimezoneOffset() * d.getPeriodUnit(n) - -t.getTimezoneOffset() * d.getPeriodUnit(n))), r - (s + a)
            },
            format2: function(e, t) {
                return t = !1 !== t, e <= 9 && t ? "0" + e : "" + e
            }
        },
        c = {
            setOption: function(t, i) {
                var n = e(this),
                    o = n.data("syotimer-options");
                o.hasOwnProperty(t) && (o[t] = i, n.data("syotimer-options", o))
            }
        };
    e.fn.syotimer = function(t) {
        if ("string" == typeof t && "setOption" === t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each((function() {
                c[t].apply(this, i)
            }))
        }
        if (null === t || "object" == typeof t) return u.init.apply(this, [t]);
        e.error("SyoTimer. Error in call methods: methods is not exist")
    }, e.syotimerLang = {
        rus: {
            second: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u044b", "\u0441\u0435\u043a\u0443\u043d\u0434"],
            minute: ["\u043c\u0438\u043d\u0443\u0442\u0430", "\u043c\u0438\u043d\u0443\u0442\u044b", "\u043c\u0438\u043d\u0443\u0442"],
            hour: ["\u0447\u0430\u0441", "\u0447\u0430\u0441\u0430", "\u0447\u0430\u0441\u043e\u0432"],
            day: ["\u0434\u0435\u043d\u044c", "\u0434\u043d\u044f", "\u0434\u043d\u0435\u0439"],
            handler: "rusNumeral"
        },
        eng: {
            second: ["second", "seconds"],
            minute: ["minute", "minutes"],
            hour: ["hour", "hours"],
            day: ["day", "days"]
        },
        por: {
            second: ["segundo", "segundos"],
            minute: ["minuto", "minutos"],
            hour: ["hora", "horas"],
            day: ["dia", "dias"]
        },
        spa: {
            second: ["segundo", "segundos"],
            minute: ["minuto", "minutos"],
            hour: ["hora", "horas"],
            day: ["d\xeda", "d\xedas"]
        },
        heb: {
            second: ["\u05e9\u05e0\u05d9\u05d4", "\u05e9\u05e0\u05d9\u05d5\u05ea"],
            minute: ["\u05d3\u05e7\u05d4", "\u05d3\u05e7\u05d5\u05ea"],
            hour: ["\u05e9\u05e2\u05d4", "\u05e9\u05e2\u05d5\u05ea"],
            day: ["\u05d9\u05d5\u05dd", "\u05d9\u05de\u05d9\u05dd"]
        },
        universal: function(e) {
            return 1 === e ? 0 : 1
        },
        rusNumeral: function(e) {
            return 4 < e % 100 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]
        },
        getNumeral: function(t, i, n) {
            var o = this[e.syotimerLang[i].handler || "universal"](t);
            return e.syotimerLang[i][n][o]
        }
    }
}(jQuery), (function() {
    var e, t, i, n, o, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        s = [].indexOf || function(e) {
            for (var t = 0, i = this.length; i > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var i;
            for (i in t) null == e[i] && (e[i] = t[i]);
            return e
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e.prototype.createEvent = function(e, t, i, n) {
            var o;
            return null == t && (t = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, n) : null != document.createEventObject ? (o = document.createEventObject()).eventType = e : o.eventName = e, o
        }, e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }, e.prototype.addEvent = function(e, t, i) {
            return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
        }, e.prototype.removeEvent = function(e, t, i) {
            return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
        }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, e
    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var t, i, n, o;
            for (t = i = 0, n = (o = this.keys).length; n > i; t = ++i)
                if (o[t] === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
            var i, n, o, r;
            for (i = n = 0, o = (r = this.keys).length; o > n; i = ++n)
                if (r[i] === e) return void(this.values[i] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), n = this.getComputedStyle || function(e, t) {
        return this.getPropertyValue = function(t) {
            var i;
            return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, (function(e, t) {
                return t.toUpperCase()
            })), (null != (i = e.currentStyle) ? i[t] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(e) {
            null == e && (e = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var t, i, n;
            if (this.stopped = !1, this.boxes = (function() {
                    var e, t, i, n;
                    for (n = [], e = 0, t = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; t > e; e++) n.push(i[e]);
                    return n
                }).call(this), this.all = (function() {
                    var e, t, i, n;
                    for (n = [], e = 0, t = (i = this.boxes).length; t > e; e++) n.push(i[e]);
                    return n
                }).call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (t = 0, i = (n = this.boxes).length; i > t; t++) this.applyStyle(n[t], !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                return function(t) {
                    var i, n, o, r;
                    for (r = [], i = 0, n = t.length; n > i; i++) o = t[i], r.push((function() {
                        var e, t, i, n;
                        for (n = [], e = 0, t = (i = o.addedNodes || []).length; t > e; e++) n.push(this.doSync(i[e]));
                        return n
                    }).call(e));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(t) {
            return e.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(e) {
            var t, i, n, o, r;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (r = [], i = 0, n = (o = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) s.call(this.all, t = o[i]) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
        }, o.prototype.applyStyle = function(e, t) {
            var i, n, o;
            return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(e, t, n, i, o)
                }
            }(this))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function(e) {
            return window.requestAnimationFrame(e)
        } : function(e) {
            return e()
        }, o.prototype.resetStyle = function() {
            var e, t, i, n;
            for (n = [], e = 0, t = (i = this.boxes).length; t > e; e++) n.push(i[e].style.visibility = "visible");
            return n
        }, o.prototype.resetAnimation = function(e) {
            var t;
            return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0
        }, o.prototype.customStyle = function(e, t, i, n, o) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                animationDuration: i
            }), n && this.vendorSet(e.style, {
                animationDelay: n
            }), o && this.vendorSet(e.style, {
                animationIterationCount: o
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(e, t) {
            var i, n, o;
            for (i in n = [], t) e["" + i] = o = t[i], n.push((function() {
                var t, n, r, s;
                for (s = [], t = 0, n = (r = this.vendors).length; n > t; t++) s.push(e["" + r[t] + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                return s
            }).call(this));
            return n
        }, o.prototype.vendorCSS = function(e, t) {
            var i, o, r, s, a;
            for (s = (a = n(e)).getPropertyCSSValue(t), i = 0, o = (r = this.vendors).length; o > i; i++) s = s || a.getPropertyCSSValue("-" + r[i] + "-" + t);
            return s
        }, o.prototype.animationName = function(e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (i) {
                t = n(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, o.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, o.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var e;
            return !this.scrolled || (this.scrolled = !1, this.boxes = (function() {
                var t, i, n, o;
                for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++)(e = n[t]) && (this.isVisible(e) ? this.show(e) : o.push(e));
                return o
            }).call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, o.prototype.isVisible = function(e) {
            var t, i, n;
            return t = e.getAttribute("data-wow-offset") || this.config.offset, (n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - t >= (i = this.offsetTop(e)) && i + e.clientHeight >= n
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this);