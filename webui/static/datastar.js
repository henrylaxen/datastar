const w = Symbol(0);
let U = !1, E = null, N = null, $ = null, p = 0, L = [], ne = {};
const Ue = () => {
}, k = 0, be = 1, C = 2, W = 3;
function Ve() {
  U = !0, queueMicrotask(je);
}
function je() {
  if (!L.length) {
    U = !1;
    return;
  }
  for (let e = 0; e < L.length; e++)
    L[e].$st !== k && Ke(L[e]);
  L = [], U = !1;
}
function Ke(e) {
  let t = [e];
  for (; e = e[w]; )
    e.$e && e.$st !== k && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    ae(t[n]);
}
function We(e) {
  const t = Ze();
  return ye(t, e.length ? e.bind(null, I.bind(t)) : e, null);
}
function ze(e, t = E) {
  return t?.$cx[e];
}
function Ge(e, t, n = E) {
  n && (n.$cx = { ...n.$cx, [e]: t });
}
function Ee(e) {
  if (!e || !E)
    return e || Ue;
  const t = E;
  return t.$d ? Array.isArray(t.$d) ? t.$d.push(e) : t.$d = [t.$d, e] : t.$d = e, function() {
    t.$st !== W && (e.call(null), le(t.$d) ? t.$d = null : Array.isArray(t.$d) && t.$d.splice(t.$d.indexOf(e), 1));
  };
}
function I(e = !0) {
  if (this.$st === W)
    return;
  let t = e ? this.$ps || this[w] : this, n = this.$ns, r = null;
  for (; n && n[w] === this; )
    I.call(n, !0), fe(n), r = n.$ns, n.$ns = null, n = r;
  e && fe(this), n && (n.$ps = e ? this.$ps : this), t && (t.$ns = n);
}
function fe(e) {
  e.$st = W, e.$d && ve(e), e.$s && q(e, 0), e.$ps && (e.$ps.$ns = null), e[w] = null, e.$s = null, e.$o = null, e.$ps = null, e.$cx = ne, e.$eh = null;
}
function ve(e) {
  try {
    if (Array.isArray(e.$d))
      for (let t = e.$d.length - 1; t >= 0; t--) {
        const n = e.$d[t];
        n.call(n);
      }
    else
      e.$d.call(e.$d);
    e.$d = null;
  } catch (t) {
    Ae(e, t);
  }
}
function ye(e, t, n) {
  const r = E, s = N;
  E = e, N = n;
  try {
    return t.call(e);
  } finally {
    E = r, N = s;
  }
}
function Ae(e, t) {
  if (!e || !e.$eh)
    throw t;
  let n = 0, r = e.$eh.length, s = he(t);
  for (n = 0; n < r; n++)
    try {
      e.$eh[n](s);
      break;
    } catch (i) {
      s = he(i);
    }
  if (n === r)
    throw s;
}
function he(e) {
  return e instanceof Error ? e : Error(JSON.stringify(e));
}
function re() {
  return this.$st === W ? this.$v : (N && !this.$e && (!$ && N.$s && N.$s[p] == this ? p++ : $ ? $.push(this) : $ = [this]), this.$c && ae(this), this.$v);
}
function Se(e) {
  const t = le(e) ? e(this.$v) : e;
  if (this.$ch(this.$v, t) && (this.$v = t, this.$o))
    for (let n = 0; n < this.$o.length; n++)
      Pe(this.$o[n], C);
  return this.$v;
}
const se = function() {
  this[w] = null, this.$ns = null, this.$ps = null, E && E.append(this);
}, H = se.prototype;
H.$cx = ne;
H.$eh = null;
H.$c = null;
H.$d = null;
H.append = function(e) {
  if (e[w] = this, e.$ps = this, this.$ns)
    if (e.$ns) {
      let t = e.$ns;
      for (; t.$ns; )
        t = t.$ns;
      t.$ns = this.$ns, this.$ns.$ps = t;
    } else
      e.$ns = this.$ns, this.$ns.$ps = e;
  this.$ns = e, e.$cx = e.$cx === ne ? this.$cx : { ...this.$cx, ...e.$cx }, this.$eh && (e.$eh = e.$eh ? [...e.$eh, ...this.$eh] : this.$eh);
};
H.dispose = function() {
  I.call(this);
};
function Ze() {
  return new se();
}
const Me = function(t, n, r) {
  se.call(this), this.$st = n ? C : k, this.$i = !1, this.$e = !1, this.$s = null, this.$o = null, this.$v = t, n && (this.$c = n), r && r.dirty && (this.$ch = r.dirty);
}, ie = Me.prototype;
Object.setPrototypeOf(ie, H);
ie.$ch = Je;
ie.call = re;
function oe(e, t, n) {
  return new Me(e, t, n);
}
function Je(e, t) {
  return e !== t;
}
function le(e) {
  return typeof e == "function";
}
function ae(e) {
  if (e.$st === be)
    for (let t = 0; t < e.$s.length && (ae(e.$s[t]), e.$st !== C); t++)
      ;
  e.$st === C ? Te(e) : e.$st = k;
}
function de(e) {
  e.$ns && e.$ns[w] === e && I.call(e, !1), e.$d && ve(e), e.$eh = e[w] ? e[w].$eh : null;
}
function Te(e) {
  let t = $, n = p;
  $ = null, p = 0;
  try {
    de(e);
    const r = ye(e, e.$c, e);
    if ($) {
      if (e.$s && q(e, p), e.$s && p > 0) {
        e.$s.length = p + $.length;
        for (let i = 0; i < $.length; i++)
          e.$s[p + i] = $[i];
      } else
        e.$s = $;
      let s;
      for (let i = p; i < e.$s.length; i++)
        s = e.$s[i], s.$o ? s.$o.push(e) : s.$o = [e];
    } else
      e.$s && p < e.$s.length && (q(e, p), e.$s.length = p);
    !e.$e && e.$i ? Se.call(e, r) : (e.$v = r, e.$i = !0);
  } catch (r) {
    Ae(e, r), e.$st === C && (de(e), e.$s && q(e, 0));
    return;
  }
  $ = t, p = n, e.$st = k;
}
function Pe(e, t) {
  if (!(e.$st >= t) && (e.$e && e.$st === k && (L.push(e), U || Ve()), e.$st = t, e.$o))
    for (let n = 0; n < e.$o.length; n++)
      Pe(e.$o[n], be);
}
function q(e, t) {
  let n, r;
  for (let s = t; s < e.$s.length; s++)
    n = e.$s[s], n.$o && (r = n.$o.indexOf(e), n.$o[r] = n.$o[n.$o.length - 1], n.$o.pop());
}
function Xe(e, t) {
  const n = oe(e, null, t), r = re.bind(n);
  return r[w] = !0, r.set = Se.bind(n), r;
}
function Ye(e, t) {
  const n = oe(
    t?.initial,
    e,
    t
  ), r = re.bind(n);
  return r[w] = !0, r;
}
function He(e, t) {
  const n = oe(
    null,
    function() {
      let s = e();
      return le(s) && Ee(s), null;
    },
    void 0
  );
  return n.$e = !0, Te(n), I.bind(n, !0);
}
function O(e) {
  return e instanceof HTMLElement || e instanceof SVGElement ? e : null;
}
function Le(e, t) {
  if (e)
    for (t(e), e = e.firstElementChild; e; )
      Le(e, t), e = e.nextElementSibling;
}
function Qe(e) {
  const t = `return ${e}`;
  return new Function("ctx", t);
}
function et(e) {
  const t = e.expressionRaw, n = Qe(t);
  try {
    e.expressionEvaluated = n(e);
  } catch (r) {
    throw console.error(`Error evaluating expression:
${t}`), r;
  }
}
class ue {
  requiredPluginTypes = /* @__PURE__ */ new Set();
}
class d extends ue {
  mustHaveEmptyExpression = !1;
  mustHaveEmptyKey = !1;
  allowedTags;
  allowedModifiers;
  allowedModifierArgs;
}
class z extends ue {
}
class tt extends ue {
}
class nt {
  attributePlugins = [];
  runePlugins = [];
  attributeObserver;
  constructor(...t) {
    if (!t.length)
      throw new Error("No plugins provided");
    this.attributeObserver = new MutationObserver((r) => {
      for (const s of r)
        if (s.type === "attributes") {
          const i = O(s.target);
          if (!i)
            return;
          this.handleAttributePlugin(i, (o, l) => {
            o.onUnmount?.(l), o.onMount(l);
          });
        } else
          s.removedNodes.forEach((i) => {
            const o = O(i);
            o && this.handleAttributePlugin(o, (l, f) => {
              l.onUnmount?.(f);
            });
          });
    }), this.attributeObserver.observe(document.body, {
      attributes: !0,
      attributeOldValue: !0,
      subtree: !0,
      childList: !0
    });
    const n = [];
    for (const r of t) {
      const s = new r();
      s.requiredPluginTypes.forEach((i) => {
        if (!n.find((l) => l instanceof i))
          throw new Error(`Plugin "${s.name}" requires plugin "${i.name}"`);
        if (s instanceof d)
          s.allowedTags && (s.allowedTags = new Set([...s.allowedTags].map((l) => l.toLowerCase()))), this.attributePlugins.push(s);
        else if (s instanceof z)
          this.runePlugins.push(s);
        else
          throw new Error("Unknown plugin type");
        n.push(s);
      });
    }
  }
  run() {
    Le(document.body, (t) => {
      const n = O(t);
      if (!n)
        return;
      let r = !1;
      const s = We((i) => (this.handleAttributePlugin(n, (o, l) => {
        o.onMount(l), r = !0;
      }), i));
      r || s();
    });
  }
  handleAttributePlugin(t, n) {
    this.attributePlugins.forEach((r) => {
      if (r.allowedTags) {
        const i = t.tagName.toLowerCase();
        if (!r.allowedTags.has(i))
          return;
      }
      const s = `data-${r.prefix}`;
      for (const i of t.attributes) {
        if (!i.name.startsWith(s))
          continue;
        let o = i.name.slice(s.length);
        o.startsWith("-") && (o = o.slice(1));
        const [l, ...f] = o.split(".");
        if (r.mustHaveEmptyKey && l.length > 0)
          throw new Error(`Attribute '${i.name}' must have empty key`);
        const m = f.map((c) => {
          const [b, ...Be] = c.split("_");
          return { label: b, args: Be };
        }), a = i.value;
        if (r.mustHaveEmptyExpression && a?.length > 0)
          throw new Error(`Attribute '${i.name}' must have empty expression`);
        if (r.allowedModifiers)
          for (const c of m) {
            if (!r.allowedModifiers.has(c.label))
              throw new Error(`Modifier '${c.label}' is not allowed`);
            if (r.allowedModifierArgs) {
              const b = r.allowedModifierArgs[c.label];
              if (b && !b(c.args))
                throw new Error(`Modifier '${c.label}' arguments are not allowed`);
            }
          }
        const u = /* @__PURE__ */ new Map();
        for (const c of m)
          u.set(c.label, c.args);
        const g = {
          get(c) {
            return ze(c);
          },
          set(c, b) {
            Ge(c, b);
          },
          el: t,
          key: l,
          expressionRaw: a,
          modifiers: u,
          effect: He,
          cleanup: Ee
        };
        g.expressionEvaluated = et(g), n(r, g);
      }
    });
  }
}
class rt extends z {
  name = "ActionRune";
  description = "A action rune";
  regexp = new RegExp(/(?<whole>@(?<action>[a-zA-Z_$][0-9a-zA-Z_$]*)(?<call>\((?<args>.*)\))?)/g);
  replacer({ action: t, args: n }) {
    return `get('${t}')(ctx, ${n || ""})`;
  }
}
const _ = /* @__PURE__ */ new WeakSet();
function st(e, t, n = {}) {
  e instanceof Document && (e = e.documentElement);
  let r;
  typeof t == "string" ? r = ut(t) : r = t;
  const s = ct(r), i = ot(e, s, n);
  return Re(e, s, i);
}
function Re(e, t, n) {
  if (n.head.block) {
    const r = e.querySelector("head"), s = t.querySelector("head");
    if (r && s) {
      const i = ke(s, r, n);
      Promise.all(i).then(() => {
        Re(
          e,
          t,
          Object.assign(n, {
            head: {
              block: !1,
              ignore: !0
            }
          })
        );
      });
      return;
    }
  }
  if (n.morphStyle === "innerHTML")
    return Ne(t, e, n), e.children;
  if (n.morphStyle === "outerHTML" || n.morphStyle == null) {
    const r = ht(t, e, n);
    if (!r)
      throw new Error("Could not find best match");
    const s = r?.previousSibling, i = r?.nextSibling, o = B(e, r, n);
    return r ? ft(s, o, i) : [];
  } else
    throw "Do not understand how to morph style " + n.morphStyle;
}
function B(e, t, n) {
  if (!(n.ignoreActive && e === document.activeElement))
    if (t == null) {
      if (n.callbacks.beforeNodeRemoved(e) === !1)
        return;
      e.remove(), n.callbacks.afterNodeRemoved(e);
      return;
    } else {
      if (V(e, t))
        return n.callbacks.beforeNodeMorphed(e, t) === !1 ? void 0 : (e instanceof HTMLHeadElement && n.head.ignore || (t instanceof HTMLHeadElement && e instanceof HTMLHeadElement && n.head.style !== "morph" ? ke(t, e, n) : (it(t, e), Ne(t, e, n))), n.callbacks.afterNodeMorphed(e, t), e);
      if (n.callbacks.beforeNodeRemoved(e) === !1 || n.callbacks.beforeNodeAdded(t) === !1)
        return;
      if (!e.parentElement)
        throw new Error("oldNode has no parentElement");
      return e.parentElement.replaceChild(t, e), n.callbacks.afterNodeAdded(t), n.callbacks.afterNodeRemoved(e), t;
    }
}
function Ne(e, t, n) {
  let r = e.firstChild, s = t.firstChild, i;
  for (; r; ) {
    if (i = r, r = i.nextSibling, s == null) {
      if (n.callbacks.beforeNodeAdded(i) === !1)
        return;
      t.appendChild(i), n.callbacks.afterNodeAdded(i), P(n, i);
      continue;
    }
    if (Oe(i, s, n)) {
      B(s, i, n), s = s.nextSibling, P(n, i);
      continue;
    }
    let o = lt(e, t, i, s, n);
    if (o) {
      s = pe(s, o, n), B(o, i, n), P(n, i);
      continue;
    }
    let l = at(e, i, s, n);
    if (l) {
      s = pe(s, l, n), B(l, i, n), P(n, i);
      continue;
    }
    if (n.callbacks.beforeNodeAdded(i) === !1)
      return;
    t.insertBefore(i, s), n.callbacks.afterNodeAdded(i), P(n, i);
  }
  for (; s !== null; ) {
    let o = s;
    s = s.nextSibling, Ce(o, n);
  }
}
function it(e, t) {
  let n = e.nodeType;
  if (n === 1) {
    for (const r of e.attributes)
      t.getAttribute(r.name) !== r.value && t.setAttribute(r.name, r.value);
    for (const r of t.attributes)
      e.hasAttribute(r.name) || t.removeAttribute(r.name);
  }
  if ((n === Node.COMMENT_NODE || n === Node.TEXT_NODE) && t.nodeValue !== e.nodeValue && (t.nodeValue = e.nodeValue), e instanceof HTMLInputElement && t instanceof HTMLInputElement && e.type !== "file")
    t.value = e.value || "", D(e, t, "value"), D(e, t, "checked"), D(e, t, "disabled");
  else if (e instanceof HTMLOptionElement)
    D(e, t, "selected");
  else if (e instanceof HTMLTextAreaElement && t instanceof HTMLTextAreaElement) {
    const r = e.value, s = t.value;
    r !== s && (t.value = r), t.firstChild && t.firstChild.nodeValue !== r && (t.firstChild.nodeValue = r);
  }
}
function D(e, t, n) {
  const r = e.getAttribute(n), s = t.getAttribute(n);
  r !== s && (r ? t.setAttribute(n, r) : t.removeAttribute(n));
}
function ke(e, t, n) {
  const r = [], s = [], i = [], o = [], l = n.head.style, f = /* @__PURE__ */ new Map();
  for (const a of e.children)
    f.set(a.outerHTML, a);
  for (const a of t.children) {
    let u = f.has(a.outerHTML), g = n.head.shouldReAppend(a), c = n.head.shouldPreserve(a);
    u || c ? g ? s.push(a) : (f.delete(a.outerHTML), i.push(a)) : l === "append" ? g && (s.push(a), o.push(a)) : n.head.shouldRemove(a) !== !1 && s.push(a);
  }
  o.push(...f.values()), console.log("to append: ", o);
  const m = [];
  for (const a of o) {
    console.log("adding: ", a);
    const u = document.createRange().createContextualFragment(a.outerHTML).firstChild;
    if (!u)
      throw new Error("could not create new element from: " + a.outerHTML);
    if (console.log(u), n.callbacks.beforeNodeAdded(u)) {
      if (u.hasAttribute("href") || u.hasAttribute("src")) {
        let g;
        const c = new Promise((b) => {
          g = b;
        });
        u.addEventListener("load", function() {
          g(void 0);
        }), m.push(c);
      }
      t.appendChild(u), n.callbacks.afterNodeAdded(u), r.push(u);
    }
  }
  for (const a of s)
    n.callbacks.beforeNodeRemoved(a) !== !1 && (t.removeChild(a), n.callbacks.afterNodeRemoved(a));
  return n.head.afterHeadMorphed(t, {
    added: r,
    kept: i,
    removed: s
  }), m;
}
function v() {
}
function ot(e, t, n) {
  return {
    target: e,
    newContent: t,
    config: n,
    morphStyle: n.morphStyle,
    ignoreActive: n.ignoreActive,
    idMap: gt(e, t),
    deadIds: /* @__PURE__ */ new Set(),
    callbacks: Object.assign(
      {
        beforeNodeAdded: v,
        afterNodeAdded: v,
        beforeNodeMorphed: v,
        afterNodeMorphed: v,
        beforeNodeRemoved: v,
        afterNodeRemoved: v
      },
      n.callbacks
    ),
    head: Object.assign(
      {
        style: "merge",
        shouldPreserve: (r) => r.getAttribute("im-preserve") === "true",
        shouldReAppend: (r) => r.getAttribute("im-re-append") === "true",
        shouldRemove: v,
        afterHeadMorphed: v
      },
      n.head
    )
  };
}
function Oe(e, t, n) {
  return !e || !t ? !1 : e.nodeType === t.nodeType && e.tagName === t.tagName ? e?.id?.length && e.id === t.id ? !0 : x(n, e, t) > 0 : !1;
}
function V(e, t) {
  return !e || !t ? !1 : e.nodeType === t.nodeType && e.tagName === t.tagName;
}
function pe(e, t, n) {
  for (; e !== t; ) {
    const r = e;
    if (e = e?.nextSibling, !r)
      throw new Error("tempNode is null");
    Ce(r, n);
  }
  return P(n, t), t.nextSibling;
}
function lt(e, t, n, r, s) {
  const i = x(s, n, t);
  let o = null;
  if (i > 0) {
    o = r;
    let l = 0;
    for (; o != null; ) {
      if (Oe(n, o, s))
        return o;
      if (l += x(s, o, e), l > i)
        return null;
      o = o.nextSibling;
    }
  }
  return o;
}
function at(e, t, n, r) {
  let s = n, i = t.nextSibling, o = 0;
  for (; s && i; ) {
    if (x(r, s, e) > 0)
      return null;
    if (V(t, s))
      return s;
    if (V(i, s) && (o++, i = i.nextSibling, o >= 2))
      return null;
    s = s.nextSibling;
  }
  return s;
}
const me = new DOMParser();
function ut(e) {
  const t = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
  if (t.match(/<\/html>/) || t.match(/<\/head>/) || t.match(/<\/body>/)) {
    const n = me.parseFromString(e, "text/html");
    if (t.match(/<\/html>/))
      return _.add(n), n;
    {
      let r = n.firstChild;
      return r ? (_.add(r), r) : null;
    }
  } else {
    const r = me.parseFromString(`<body><template>${e}</template></body>`, "text/html").body.querySelector("template")?.content;
    if (!r)
      throw new Error("content is null");
    return _.add(r), r;
  }
}
function ct(e) {
  if (e == null)
    return document.createElement("div");
  if (_.has(e))
    return e;
  if (e instanceof Node) {
    const t = document.createElement("div");
    return t.append(e), t;
  } else {
    const t = document.createElement("div");
    for (const n of [...e])
      t.append(n);
    return t;
  }
}
function ft(e, t, n) {
  const r = [], s = [];
  for (; e; )
    r.push(e), e = e.previousSibling;
  for (; r.length > 0; ) {
    const i = r.pop();
    s.push(i), t?.parentElement?.insertBefore(i, t);
  }
  for (s.push(t); n; )
    r.push(n), s.push(n), n = n.nextSibling;
  for (; r.length; )
    t?.parentElement?.insertBefore(r.pop(), t.nextSibling);
  return s;
}
function ht(e, t, n) {
  let r = e.firstChild, s = r, i = 0;
  for (; r; ) {
    let o = dt(r, t, n);
    o > i && (s = r, i = o), r = r.nextSibling;
  }
  return s;
}
function dt(e, t, n) {
  return V(e, t) ? 0.5 + x(n, e, t) : 0;
}
function Ce(e, t) {
  P(t, e), t.callbacks.beforeNodeRemoved(e) !== !1 && (e.remove(), t.callbacks.afterNodeRemoved(e));
}
function pt(e, t) {
  return !e.deadIds.has(t);
}
function mt(e, t, n) {
  return e.idMap.get(n)?.has(t) || !1;
}
function P(e, t) {
  const n = e.idMap.get(t);
  if (n)
    for (const r of n)
      e.deadIds.add(r);
}
function x(e, t, n) {
  const r = e.idMap.get(t);
  if (!r)
    return 0;
  let s = 0;
  for (const i of r)
    pt(e, i) && mt(e, i, n) && ++s;
  return s;
}
function ge(e, t) {
  const n = e.parentElement, r = e.querySelectorAll("[id]");
  for (const s of r) {
    let i = s;
    for (; i !== n && i; ) {
      let o = t.get(i);
      o == null && (o = /* @__PURE__ */ new Set(), t.set(i, o)), o.add(s.id), i = i.parentElement;
    }
  }
}
function gt(e, t) {
  const n = /* @__PURE__ */ new Map();
  return ge(e, n), ge(t, n), n;
}
class xe extends z {
  name = "ReactivityRune";
  description = "A reactivity rune";
  regexp = new RegExp(/(?<whole>\$(?<signal>[a-zA-Z_$][0-9a-zA-Z_$]*))/g);
  replacer(t) {
    const { signal: n } = t;
    return `get(${n}).value`;
  }
}
class $t {
  val;
  constructor(t) {
    this.val = Xe(t);
  }
  get value() {
    return this.val();
  }
  set value(t) {
    this.val.set(t);
  }
}
class ce extends d {
  name = "Signal";
  description = "A signal attribute";
  prefix = "signal";
  onMount({ key: t, set: n, expressionEvaluated: r }) {
    n(t, new $t(r));
  }
}
class wt {
  val;
  constructor(t) {
    this.val = Ye(t);
  }
  get value() {
    return this.val();
  }
}
class Ie extends d {
  name = "Computed";
  description = "A computed attribute";
  prefix = "computed";
  onMount({ key: t, set: n, expressionEvaluated: r }) {
    n(t, new wt(r));
  }
}
class De extends d {
  name = "Effect";
  description = "An effect attribute";
  prefix = "effect";
  onMount({ key: t, set: n, expressionEvaluated: r }) {
    if (typeof r != "function")
      throw new Error("Effect attribute must be a function");
    n(t, He(r));
  }
}
const Fe = /* @__PURE__ */ new Set([
  xe,
  ce,
  Ie,
  De
]), h = (e) => e.length === 0, bt = "selector", Et = "swap", te = "reqHeaders";
class vt extends d {
  name = "FetchRequestHeaders";
  prefix = "header";
  description = "Sets the headers of the fetch request";
  mustHaveEmptyKey = !0;
  onMount({ key: t, get: n, set: r, expressionEvaluated: s }) {
    let i = n(te);
    i || (i = new Headers()), i.set(t, s), r(te, i);
  }
}
const R = "get", A = "post", S = "put", M = "patch", T = "delete", qe = "datastar", G = `${qe}-indicator`, j = `${qe}-request`;
class y extends tt {
  constructor(t) {
    if (super(), this.method = t, this.name = `Fetch${t}`, this.description = `fetches fragments from the server using ${t}`, this.requiredPluginTypes = /* @__PURE__ */ new Set([vt, ...Fe]), !y.hasInjectedStyles) {
      const n = document.createElement("style");
      n.innerHTML = `
.${G}{
  opacity:0;
  transition: opacity 500ms ease-in;
}
.${j} .${G}{
    opacity:1
}
.${j}.${G}{
    opacity:1
}
    `, document.head.appendChild(n), y.hasInjectedStyles = !0;
    }
  }
  static hasInjectedStyles = !1;
  name;
  description;
  async action(t) {
    await Nt(this.method, t);
  }
}
class yt extends y {
  constructor() {
    super(R);
  }
}
class At extends y {
  constructor() {
    super(A);
  }
}
class St extends y {
  constructor() {
    super(S);
  }
}
class Mt extends y {
  constructor() {
    super(M);
  }
}
class Tt extends y {
  constructor() {
    super(T);
  }
}
class Pt extends d {
  name = "Fetch";
  prefix = "fetch";
  description = "URL to fetch from";
  allowedModifiers = /* @__PURE__ */ new Set([R, A, S, M, T]);
  allowedModifierArgs = {
    [R]: h,
    [A]: h,
    [S]: h,
    [M]: h,
    [T]: h
  };
  mustHaveEmptyKey = !0;
  onMount({ expressionEvaluated: t, modifiers: n, set: r }) {
    if (typeof t != "string")
      throw new Error("expressionEvaluated must be a string");
    n.has(A) ? r(A, t) : n.has(S) ? r(S, t) : n.has(M) ? r(M, t) : n.has(T) ? r(T, t) : r(R, t);
  }
  onUnmount({ set: t, modifiers: n }) {
    n.has(A) ? t(A, void 0) : n.has(S) ? t(S, void 0) : n.has(M) ? t(M, void 0) : n.has(T) ? t(T, void 0) : t(R, void 0);
  }
}
const Ht = "Accept", Lt = "Content-Type", _e = "text/html", Rt = "application/json";
async function Nt(e, { el: t, get: n, expressionEvaluated: r }) {
  if (!n(e))
    throw new Error(`No url for ${e}`);
  t.classList.add(j);
  const i = new Headers();
  i.append(Ht, _e), i.append(Lt, Rt);
  const o = n(te);
  if (o)
    for (const [c, b] of o.entries())
      i.append(c, b);
  const l = new URL(r, window.location.origin), m = JSON.stringify({}), a = { method: e, headers: i };
  if (e === R) {
    const c = new URLSearchParams(l.search);
    c.append("dataStack", m), l.search = c.toString();
  } else
    a.body = m;
  const u = await fetch(l, a);
  if (!u.ok)
    throw new Error("Network response was not ok.");
  const g = await u.text();
  Ot(t, g), t.classList.remove(j);
}
const kt = new DOMParser();
function Ot(e, t) {
  const n = [...kt.parseFromString(t, _e).body.children];
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (!(s instanceof Element))
      throw new Error("Not an element");
    const i = O(s), o = s.getAttribute("id"), l = r === 0, f = !!o?.length, m = l && !f;
    let a;
    if (m)
      a = [e];
    else {
      if (!f)
        throw new Error("No id");
      const u = i?.dataset?.[bt] || `#${o}`;
      a = document.querySelectorAll(u) || [];
    }
    if (!a)
      throw new Error("No target element");
    for (const u of a)
      switch (i?.dataset?.[Et] || "morph") {
        case "morph":
          st(u, s);
          break;
        case "inner":
          u.innerHTML = s.innerHTML;
          break;
        case "outer":
          u.outerHTML = s.outerHTML;
          break;
        case "prepend":
          u.prepend(s.outerHTML);
          break;
        case "append":
          u.append(s.outerHTML);
          break;
        case "before":
          u.before(s);
          break;
        case "after":
          u.after(s);
          break;
        case "delete":
          u.remove();
          break;
        default:
          throw new Error("Invalid merge mode");
      }
  }
}
class Ct extends d {
  name = "Bind";
  prefix = "bind";
  description = "Sets the value of the element";
  onMount({ el: t, key: n, expressionEvaluated: r }) {
    t.setAttribute(n, `${r}`);
  }
}
class xt extends z {
  name = "RefRune";
  description = "turns #ref into data.refs.ref.value";
  regexp = new RegExp(/(?<whole>\#(?<ref>[a-zA-Z_$][0-9a-zA-Z_$]*))/g);
  replacer({ ref: t }) {
    return `data.refs.${t}.value`;
  }
}
class It extends d {
  name = "Ref";
  prefix = "ref";
  description = "Sets the value of the element";
  mustHaveEmptyExpression = !0;
  onMount({ el: t, key: n, set: r }) {
    r(n, t);
  }
}
class Dt extends d {
  name = "Model";
  prefix = "model";
  description = "Sets the value of the element";
  allowedTags = /* @__PURE__ */ new Set(["input", "textarea", "select"]);
  requiredPluginTypes = /* @__PURE__ */ new Set([ce]);
  updateEvents = ["change", "input", "keydown"];
  mustHaveEmptyExpression = !0;
  mustHaveEmptyKey = !0;
  onMount({ el: t, expressionEvaluated: n, effect: r, cleanup: s }) {
    if (!("value" in t))
      throw new Error("Element must have a value property");
    const i = n;
    if (!i)
      throw new Error(`Signal ${n} not found`);
    t.value = `${i.value}`;
    const o = () => {
      const l = i.value;
      if (typeof l == "number")
        i.value = Number(t.value);
      else if (typeof l == "string")
        i.value = t.value;
      else if (typeof l == "boolean")
        i.value = !!t.value;
      else
        throw new Error("Unsupported type");
    };
    r(() => {
      for (const l of this.updateEvents)
        t.addEventListener(l, o);
      s(() => {
        for (const l of this.updateEvents)
          t.removeEventListener(l, o);
      });
    });
  }
}
class Ft extends d {
  name = "EventListener";
  prefix = "on";
  description = "Sets the value of the element";
  allowedModifiers = /* @__PURE__ */ new Set(["prevent", "stop", "capture"]);
  allowedModifierArgs = {
    prevent: h,
    stop: h,
    capture: h
  };
  onMount({ el: t, key: n, modifiers: r, expressionEvaluated: s, effect: i, cleanup: o }) {
    const l = s;
    if (!l)
      throw new Error(`Function ${s} not found`);
    const f = {};
    r.has("capture") && (f.capture = !0), r.has("prevent") && (f.passive = !1), r.has("stop") && (f.once = !0), i(() => {
      t.addEventListener(n, l, f), o(() => t.removeEventListener(n, l, f));
    });
  }
}
class qt extends d {
  name = "TextNode";
  prefix = "text";
  description = "Sets the textContent of the element";
  mustHaveEmptyKey = !0;
  mustHaveEmptyExpression = !0;
  onMount({ el: t, expressionEvaluated: n }) {
    if (!(t instanceof HTMLElement))
      throw new Error("Element is not HTMLElement");
    t.textContent = `${n}`;
  }
}
const Z = "display", $e = "none", J = "prepend", X = "append", we = "intersects", F = "important";
class _t extends d {
  name = "Show";
  description = "Sets the display of the element";
  prefix = "show";
  allowedModifiers = /* @__PURE__ */ new Set([F]);
  allowedModifierArgs = { [F]: h };
  onMount({ el: t, expressionEvaluated: n, modifiers: r }) {
    const s = !!n, o = r.has(F) ? F : void 0;
    s ? t.style.length === 1 && t.style.display === $e ? t.style.removeProperty(Z) : t.style.setProperty(Z, "", o) : t.style.setProperty(Z, $e, o);
  }
}
const Y = "once", Q = "full", ee = "half";
class Bt extends d {
  name = "Intersection";
  prefix = we;
  description = "Sets the value of the element";
  requiredPluginTypes = Fe;
  allowedModifiers = /* @__PURE__ */ new Set([Y, Q, ee]);
  allowedModifierArgs = {
    [Y]: h,
    [Q]: h,
    [ee]: h
  };
  onMount({ modifiers: t, el: n, set: r, effect: s, cleanup: i }) {
    const o = { threshold: 0 };
    t.has(Q) ? o.threshold = 1 : t.has(ee) && (o.threshold = 0.5);
    const l = new IntersectionObserver((f) => {
      f.forEach((m) => {
        m.isIntersecting && (r(we, !0), t.has(Y) && l.disconnect());
      });
    }, o);
    s(() => {
      l.observe(n), i(() => l.disconnect());
    });
  }
}
class K extends d {
  name = "Teleport";
  prefix = "teleport";
  description = "Teleports the element to another element";
  allowedModifiers = /* @__PURE__ */ new Set([J, X]);
  allowedModifierArgs = {
    [J]: h,
    [X]: h
  };
  allowedTags = /* @__PURE__ */ new Set(["template"]);
  static parentErr = new Error("Target element must have a parent if using prepend or append");
  onMount({ el: t, modifiers: n, effect: r, expressionEvaluated: s }) {
    if (!(t instanceof HTMLTemplateElement))
      throw new Error("Element must be a template");
    r(() => {
      if (typeof s != "string")
        throw new Error("Only string selectors are supported");
      const i = document.querySelector(s);
      if (!i)
        throw new Error(`Target element not found: ${s}`);
      if (!t.content)
        throw new Error("Template element must have content");
      const o = t.content.cloneNode(!0);
      if (O(o)?.firstElementChild)
        throw new Error("Empty template");
      if (n.has(J)) {
        if (!i.parentNode)
          throw K.parentErr;
        i.parentNode.insertBefore(o, i);
      } else if (n.has(X)) {
        if (!i.parentNode)
          throw K.parentErr;
        i.parentNode.insertBefore(o, i.nextSibling);
      } else
        i.appendChild(o);
    });
  }
}
const Ut = new nt(
  rt,
  xe,
  xt,
  ce,
  Ie,
  De,
  Ct,
  It,
  Dt,
  Ft,
  qt,
  _t,
  Bt,
  K,
  Pt,
  yt,
  At,
  Mt,
  St,
  Tt
);
Ut.run();
//# sourceMappingURL=datastar.js.map
