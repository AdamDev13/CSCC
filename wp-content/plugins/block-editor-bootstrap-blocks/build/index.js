(window.webpackJsonp_block_editor_bootstrap_blocks =
  window.webpackJsonp_block_editor_bootstrap_blocks || []).push([
  [1],
  { 23: function (e, t, l) {}, 24: function (e, t, l) {} },
]),
  (function (e) {
    function t(t) {
      for (
        var n, r, s = t[0], c = t[1], i = t[2], b = 0, p = [];
        b < s.length;
        b++
      )
        (r = s[b]),
          Object.prototype.hasOwnProperty.call(o, r) && o[r] && p.push(o[r][0]),
          (o[r] = 0);
      for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
      for (m && m(t); p.length; ) p.shift()();
      return a.push.apply(a, i || []), l();
    }
    function l() {
      for (var e, t = 0; t < a.length; t++) {
        for (var l = a[t], n = !0, s = 1; s < l.length; s++) {
          var c = l[s];
          0 !== o[c] && (n = !1);
        }
        n && (a.splice(t--, 1), (e = r((r.s = l[0]))));
      }
      return e;
    }
    var n = {},
      o = { 0: 0 },
      a = [];
    function r(t) {
      if (n[t]) return n[t].exports;
      var l = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(l.exports, l, l.exports, r), (l.l = !0), l.exports;
    }
    (r.m = e),
      (r.c = n),
      (r.d = function (e, t, l) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (
          (r.r(l),
          Object.defineProperty(l, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            r.d(
              l,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return l;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = "");
    var s = (window.webpackJsonp_block_editor_bootstrap_blocks =
        window.webpackJsonp_block_editor_bootstrap_blocks || []),
      c = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var i = 0; i < s.length; i++) t(s[i]);
    var m = c;
    a.push([25, 1]), l();
  })([
    function (e, t) {
      e.exports = window.wp.element;
    },
    function (e, t) {
      e.exports = window.wp.blockEditor;
    },
    function (e, t) {
      e.exports = window.wp.components;
    },
    function (e, t) {
      e.exports = window.React;
    },
    function (e, t) {
      e.exports = window.wp.hooks;
    },
    function (e, t) {
      e.exports = window.wp.compose;
    },
    function (e, t) {
      function l() {
        return (
          (e.exports = l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          l.apply(this, arguments)
        );
      }
      (e.exports = l),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, l) {
      e.exports = l(22);
    },
    function (e, t) {
      e.exports = window.wp.primitives;
    },
    function (e, t) {
      e.exports = window.wp.data;
    },
    function (e, t) {
      e.exports = window.wp.richText;
    },
    function (e, t, l) {
      var n;
      !(function () {
        "use strict";
        var l = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var a = typeof n;
              if ("string" === a || "number" === a) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var r = o.apply(null, n);
                  r && e.push(r);
                }
              } else if ("object" === a)
                if (n.toString === Object.prototype.toString)
                  for (var s in n) l.call(n, s) && n[s] && e.push(s);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    function (e, t) {
      e.exports = window.wp.blocks;
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/container","title":"Bootstrap container","category":"bootstrap","description":"Bootstrap container","keywords":["container","layout","grid","columns","section","wrapper"],"textdomain":"bootstrap","attributes":{"containerType":{"type":"string","default":"container"}},"supports":{"anchor":true,"align":false,"html":false,"color":{"gradients":true,"link":true}}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/row","title":"Bootstrap row","category":"bootstrap","description":"Bootstrap row","keywords":["container","layout","grid","columns","section"],"textdomain":"bootstrap","attributes":{"alignItems":{"type":"object","default":{}},"justifyContent":{"type":"object","default":{}},"gutter":{"type":"object","default":{}},"rowCols":{"type":"object","default":{}}},"supports":{"anchor":true,"align":["wide","full"],"html":false,"color":{"gradients":true,"link":true}}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/row-column","title":"Bootstrap column","category":"bootstrap","parent":["bootstrap/row"],"description":"Bootstrap column","textdomain":"bootstrap","attributes":{"size":{"type":"object","default":{}},"offset":{"type":"object","default":{}},"order":{"type":"object","default":{}},"alignSelf":{"type":"object","default":{}},"templateLock":{"enum":["all","insert",false]}},"supports":{"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true}}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/tabs","title":"Bootstrap tabs","category":"bootstrap","description":"Bootstrap tabs","keywords":["horizontal","vertical","pills"],"textdomain":"bootstrap","attributes":{"anchor":{"type":"string","source":"attribute","attribute":"id","selector":"*"},"tabsActive":{"type":"integer","default":0},"tabsStyle":{"type":"string","default":"tabs"},"tabs":{"type":"array","default":["Tab 1","Tab 2"]},"layout":{"type":"object","default":{}}},"supports":{"anchor":true,"align":false,"html":false,"className":false}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/tabs-tab","title":"Bootstrap tab","category":"bootstrap","parent":["bootstrap/tabs"],"description":"Bootstrap tab","textdomain":"bootstrap","attributes":{"tabItemIndex":{"type":"integer","default":0},"tabRootId":{"type":"string"},"tabTitle":{"type":"string"},"tabActiveInEditor":{"type":"boolean","default":false}},"supports":{"anchor":true,"reusable":false,"inserter":false,"html":false,"color":{"gradients":true,"link":true}}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/accordion","title":"Bootstrap accordion","category":"bootstrap","description":"Bootstrap accordion","keywords":["vertically","collapsing"],"textdomain":"bootstrap","attributes":{"anchor":{"type":"string","source":"attribute","attribute":"id","selector":"*"},"accordionStyle":{"type":"string","default":""},"accordionAlwaysOpen":{"type":"boolean","default":false},"accordionFirstOpen":{"type":"boolean","default":false},"accordionButtonWrapper":{"type":"string","default":"div"}},"supports":{"anchor":true,"align":false,"html":false,"className":true}}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"apiVersion":2,"name":"bootstrap/accordion-item","title":"Bootstrap accordion item","category":"bootstrap","parent":["bootstrap/accordion"],"description":"Bootstrap accordion item","textdomain":"bootstrap","attributes":{"accordionItemIndex":{"type":"integer","default":0},"accordionRootId":{"type":"string"},"accordionOpened":{"type":"boolean","default":false},"accordionAlwaysOpen":{"type":"boolean","default":false},"accordionItemTitle":{"type":"string"},"accordionButtonWrapper":{"type":"string","default":"div"}},"supports":{"anchor":true,"reusable":false,"inserter":false,"html":false,"color":{"gradients":true,"link":true}}}'
      );
    },
    ,
    function (e, t) {
      e.exports = window.wp.plugins;
    },
    function (e, t) {
      function l(e) {
        var t = 0;
        if (0 == e.length) return t;
        for (var l = 0; l < e.length; l++)
          (t = (t << 5) - t + e.charCodeAt(l)), (t &= t);
        return t;
      }
      function n(e, t) {
        t = t || 62;
        var l,
          n = [],
          o = "",
          a = e < 0 ? "-" : "";
        function r(e) {
          return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            e
          ];
        }
        for (e = Math.abs(e); e >= t; )
          (l = e % t), (e = Math.floor(e / t)), n.push(r(l));
        e > 0 && n.push(r(e));
        for (var s = n.length - 1; s >= 0; s--) o += n[s];
        return a + o;
      }
      (t.bitwise = l),
        (t.binaryTransfer = n),
        (t.unique = function (e) {
          return n(l(e), 61).replace("-", "Z");
        }),
        (t.random = function (e) {
          for (
            var t =
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
              l = "",
              n = e || 8,
              o = 0;
            o < n;
            o++
          ) {
            var a = Math.floor(Math.random() * t.length);
            l += t.substring(a, a + 1);
          }
          return l;
        });
    },
    ,
    ,
    function (e, t, l) {
      "use strict";
      l.r(t);
      var n = {};
      l.r(n),
        l.d(n, "metadata", function () {
          return $e;
        }),
        l.d(n, "name", function () {
          return De;
        }),
        l.d(n, "settings", function () {
          return _e;
        });
      var o = {};
      l.r(o),
        l.d(o, "metadata", function () {
          return st;
        }),
        l.d(o, "name", function () {
          return Ht;
        }),
        l.d(o, "settings", function () {
          return $t;
        });
      var a = {};
      l.r(a),
        l.d(a, "metadata", function () {
          return Rt;
        }),
        l.d(a, "name", function () {
          return Gt;
        }),
        l.d(a, "settings", function () {
          return qt;
        });
      var r = {};
      l.r(r),
        l.d(r, "metadata", function () {
          return Kt;
        }),
        l.d(r, "name", function () {
          return Yt;
        }),
        l.d(r, "settings", function () {
          return el;
        });
      var s = {};
      l.r(s),
        l.d(s, "metadata", function () {
          return tl;
        }),
        l.d(s, "name", function () {
          return nl;
        }),
        l.d(s, "settings", function () {
          return ol;
        });
      var c = {};
      l.r(c),
        l.d(c, "metadata", function () {
          return cl;
        }),
        l.d(c, "name", function () {
          return bl;
        }),
        l.d(c, "settings", function () {
          return pl;
        });
      var i = {};
      l.r(i),
        l.d(i, "metadata", function () {
          return dl;
        }),
        l.d(i, "name", function () {
          return gl;
        }),
        l.d(i, "settings", function () {
          return xl;
        });
      var m = l(6),
        b = l.n(m),
        p = l(0),
        d = l(2),
        u = l(5),
        g = l(4),
        x = l(1);
      class f extends p.Component {
        constructor(e) {
          super(e), (this.getStyle = this.getStyle.bind(this));
        }
        getStyle() {
          return "absolute" === this.props.type
            ? {
                position: "absolute",
                top: "50%",
                right: "-10px",
                marginTop: "-1px",
                width: "6px",
                height: "6px",
                backgroundColor: "var(--wp-admin-theme-color)",
                borderRadius: "6px",
              }
            : {
                width: "6px",
                height: "6px",
                backgroundColor: "var(--wp-admin-theme-color)",
                borderRadius: "6px",
                float: "left",
                margin: "7px 6px 0 0",
              };
        }
        render() {
          return Object(p.createElement)("span", { style: this.getStyle() });
        }
      }
      var h = l(11),
        v = l.n(h);
      const y = () => {},
        O = function (e) {
          for (
            var t = arguments.length, l = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            l[n - 1] = arguments[n];
          return function () {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return e(...l, ...n);
          };
        },
        j = (e) => {
          let { tabId: t, onClick: l, children: n, selected: o, ...a } = e;
          return Object(p.createElement)(
            d.Button,
            b()(
              {
                role: "tab",
                tabIndex: o ? null : -1,
                "aria-selected": o,
                id: t,
                onClick: l,
              },
              a
            ),
            n
          );
        };
      function w(e) {
        let {
          className: t,
          children: l,
          tabs: n,
          initialTabName: o,
          orientation: a = "horizontal",
          activeClass: r = "is-active",
          onSelect: s = y,
        } = e;
        const c = Object(u.useInstanceId)(w, "breakpoints-tab-panel"),
          [i, m] = Object(p.useState)(null),
          b = (e) => {
            m(e), s(e);
          },
          g = n.find((e) => e.name == i),
          x = `${c}-${g ? g.name : "none"}`;
        return (
          Object(p.useEffect)(() => {
            const e = n.find((e) => e.active);
            e && e.name !== i && m(e.name),
              n.find((e) => e.name == i) ||
                m(o || (n.length > 0 ? n[0].name : null));
          }, [n]),
          Object(p.createElement)(
            "div",
            { className: t },
            Object(p.createElement)(
              d.NavigableMenu,
              {
                role: "tablist",
                orientation: a,
                onNavigate: (e, t) => {
                  t.click();
                },
                className: "components-breakpoints-tab-panel__tabs",
              },
              n.map((e) =>
                Object(p.createElement)(
                  j,
                  {
                    className: v()(
                      "components-breakpoints-tab-panel__tabs-item",
                      e.className,
                      { [r]: e.name === i }
                    ),
                    tabId: `${c}-${e.name}`,
                    "aria-controls": `${c}-${e.name}-view`,
                    selected: e.name === i,
                    key: e.name,
                    onClick: O(b, e.name),
                  },
                  e.title
                )
              )
            ),
            g &&
              Object(p.createElement)(
                "div",
                {
                  key: x,
                  "aria-labelledby": x,
                  role: "tabpanel",
                  id: x + "-view",
                  className: "components-breakpoints-tab-panel__tab-content",
                },
                l(g)
              )
          )
        );
      }
      var k = l(9);
      const E = {
        breakpoint_control: {
          activeBreakpoint: Object.values(bootstrapBlocks.breakpoints).find(
            (e) => e.default
          ).prefix,
        },
      };
      wp.data.registerStore("bootstrap/breakpoints", {
        reducer: function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : E,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "UPDATE_BREAKPOINT_CONTROL_VALUE":
              return {
                ...e,
                breakpoint_control: {
                  ...e.breakpoint_control,
                  activeBreakpoint: t.activeBreakpoint,
                },
              };
          }
          return e;
        },
        actions: {
          updateBreakpointControlValue: (e) => ({
            type: "UPDATE_BREAKPOINT_CONTROL_VALUE",
            activeBreakpoint: e,
          }),
        },
        selectors: {
          getBreakpointControlValue: (e) =>
            e.breakpoint_control.activeBreakpoint,
        },
      });
      class B extends p.Component {
        render() {
          const {
              activeBreakpoint: e,
              updateBreakpointControlValue: t,
              breakpointsTabs: l = {},
              activeClass: n = "is-active",
              instanceId: o,
              orientation: a = "horizontal",
            } = this.props,
            r = [];
          let s = Object.keys(bootstrapBlocks.breakpoints);
          return (
            s.sort(function (e, t) {
              return t - e;
            }),
            s.forEach((t) => {
              let n = bootstrapBlocks.breakpoints[t].prefix,
                o = bootstrapBlocks.breakpoints[t].label;
              r.unshift({
                name: n,
                title: Object(p.createElement)(
                  d.Tooltip,
                  { text: `≥${t}px`, position: "top left" },
                  Object(p.createElement)(
                    "div",
                    { style: { position: "relative" } },
                    o,
                    l && l[n]
                      ? Object(p.createElement)(f, { type: "absolute" })
                      : ""
                  )
                ),
                active: n == e,
              });
            }),
            Object(p.createElement)(
              w,
              {
                tabs: r,
                activeClass: n,
                instanceId: o,
                orientation: a,
                initialTabName: e,
                className: "breakpoints-panel",
                onSelect: (e) => t(e),
              },
              this.props.children
            )
          );
        }
      }
      var C = Object(u.compose)([
          Object(k.withDispatch)((e, t) => {
            const { updateBreakpointControlValue: l } = e(
              "bootstrap/breakpoints"
            );
            return { updateBreakpointControlValue: l };
          }),
          Object(k.withSelect)((e, t) => {
            const { getBreakpointControlValue: l } = e("bootstrap/breakpoints");
            return { activeBreakpoint: l() };
          }),
        ])(B),
        I = l(7),
        F = l.n(I);
      let S = !1;
      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        return (
          "object" == typeof e &&
            (!1 === t
              ? Object.keys(e).forEach(function (t) {
                  "object" == typeof e[t] &&
                    Object.keys(e[t]).forEach(function (n) {
                      Object.keys(e[t][n]).forEach(function (o) {
                        "" !== e[t][n][o] && (l = !0);
                      });
                    });
                })
              : Object.keys(e).forEach(function (n) {
                  void 0 !== e[n][t] &&
                    Object.keys(e[n][t]).forEach(function (o) {
                      "" !== e[n][t][o] && (l = !0);
                    });
                })),
          l
        );
      }
      class A extends p.Component {
        getSpacing(e, t, l) {
          const { attributes: n } = this.props,
            { bsSpacing: o } = n;
          return void 0 !== o[e][t] && void 0 !== o[e][t][l] ? o[e][t][l] : "";
        }
        setSpacing(e, t, l, n) {
          const { attributes: o, setAttributes: a } = this.props,
            { bsSpacing: r } = o;
          a({
            bsSpacing: { ...r, [e]: { ...r[e], [t]: { ...r[e][t], [l]: n } } },
          });
        }
        hasSpacing() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props,
            { bsSpacing: l } = t;
          return N(l, e);
        }
        onKeyDown(e) {
          if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
            let t = e.target,
              l = t.value,
              n = e.ctrlKey ? 100 : e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
            "ArrowDown" === e.key && (n *= -1),
              (t.value = t.value.replace(/-?\d*\.?\d+/, function (e) {
                return 0.1 === Math.abs(n)
                  ? (10 * parseFloat(e) + 10 * n) / 10
                  : parseFloat(e) + n;
              }));
            let o = new Event("input", { bubbles: !0 });
            o.simulated = !0;
            let a = t._valueTracker;
            a && a.setValue(l), t.dispatchEvent(o);
          }
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapSpacing.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            { bsSpacing: o } = l,
            a = {};
          let r = "",
            s = Object.keys(bootstrapBlocks.breakpoints);
          s.sort(function (e, t) {
            return e - t;
          }),
            s.forEach((e) => {
              let l = bootstrapBlocks.breakpoints[e].prefix;
              a[l] = this.hasSpacing(l);
              let n = "";
              if (
                (o &&
                  void 0 !== o.margin[l] &&
                  Object.keys(o.margin[l]).forEach(function (e) {
                    if ("" !== o.margin[l][e]) {
                      let t = o.margin[l][e];
                      parseFloat(t) == t && (t += "px"),
                        (n += `margin-${e.toLowerCase()}:${
                          t + (o.important ? " !important" : "")
                        };`);
                    }
                  }),
                o &&
                  void 0 !== o.padding[l] &&
                  Object.keys(o.padding[l]).forEach(function (e) {
                    if ("" !== o.padding[l][e]) {
                      let t = o.padding[l][e];
                      parseFloat(t) == t && (t += "px"),
                        (n += `padding-${e.toLowerCase()}:${
                          t + (o.important ? " !important" : "")
                        };`);
                    }
                  }),
                n)
              ) {
                const l = "bs-" + F.a.unique(t);
                r += e
                  ? `\n\t\t\t\t\t\t@media(min-width:${e}px){\n\t\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}`
                  : `\n\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t}`;
              }
            });
          const c = (e, t, l) => ({
            type: "text",
            placeholder: "-",
            autoComplete: "off",
            onKeyDown: this.onKeyDown,
            value: this.getSpacing(e, t, l),
            onChange: (n) => this.setSpacing(e, t, l, n.target.value),
          });
          return Object(p.createElement)(
            p.Fragment,
            null,
            Object(p.createElement)(
              x.InspectorControls,
              null,
              Object(p.createElement)(
                d.PanelBody,
                {
                  title: Object(p.createElement)(
                    "div",
                    { style: { position: "relative" } },
                    Object(p.createElement)("span", null, "Spacing"),
                    this.hasSpacing() ? Object(p.createElement)(f, null) : ""
                  ),
                  initialOpen: S,
                  onToggle: () => (S = !S),
                },
                Object(p.createElement)(C, { breakpointsTabs: a }, (e) =>
                  Object(p.createElement)(
                    "div",
                    { className: "bs-metrics", style: { marginTop: "20px" } },
                    Object(p.createElement)(
                      "div",
                      { className: "bs-margin" },
                      Object(p.createElement)(
                        "div",
                        { className: "bs-label" },
                        "margin"
                      ),
                      Object(p.createElement)(
                        "div",
                        { className: "bs-top" },
                        Object(p.createElement)(
                          "input",
                          c("margin", e.name, "top")
                        )
                      ),
                      Object(p.createElement)(
                        "div",
                        { className: "bs-right" },
                        Object(p.createElement)(
                          "input",
                          c("margin", e.name, "right")
                        )
                      ),
                      Object(p.createElement)(
                        "div",
                        { className: "bs-bottom" },
                        Object(p.createElement)(
                          "input",
                          c("margin", e.name, "bottom")
                        )
                      ),
                      Object(p.createElement)(
                        "div",
                        { className: "bs-left" },
                        Object(p.createElement)(
                          "input",
                          c("margin", e.name, "left")
                        )
                      ),
                      Object(p.createElement)(
                        "div",
                        { className: "bs-padding" },
                        Object(p.createElement)(
                          "div",
                          { className: "bs-label" },
                          "padding"
                        ),
                        Object(p.createElement)(
                          "div",
                          { className: "bs-top" },
                          Object(p.createElement)(
                            "input",
                            c("padding", e.name, "top")
                          )
                        ),
                        Object(p.createElement)(
                          "div",
                          { className: "bs-right" },
                          Object(p.createElement)(
                            "input",
                            c("padding", e.name, "right")
                          )
                        ),
                        Object(p.createElement)(
                          "div",
                          { className: "bs-bottom" },
                          Object(p.createElement)(
                            "input",
                            c("padding", e.name, "bottom")
                          )
                        ),
                        Object(p.createElement)(
                          "div",
                          { className: "bs-left" },
                          Object(p.createElement)(
                            "input",
                            c("padding", e.name, "left")
                          )
                        ),
                        Object(p.createElement)(
                          "div",
                          { className: "bs-inner" },
                          Object(p.createElement)(
                            "label",
                            null,
                            Object(p.createElement)("input", {
                              type: "checkbox",
                              checked: !!o.important,
                              onChange: (e) =>
                                n({
                                  bsSpacing: {
                                    ...o,
                                    important: e.target.checked,
                                  },
                                }),
                            }),
                            Object(p.createElement)("span", null, "!important")
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            r ? Object(p.createElement)("style", null, r) : ""
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/spacing/attribute",
        function (e) {
          return (
            e.attributes.tempID || (e.attributes.tempID = { type: "string" }),
            e.attributes.bsSpacing ||
              (e.attributes.bsSpacing = {
                type: "object",
                default: { margin: {}, padding: {}, important: !1 },
              }),
            e
          );
        }
      );
      const T = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(A, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/spacing/control", T);
      const P = Object(u.createHigherOrderComponent)(
        (e) => (t) => {
          if (N(t.attributes.bsSpacing)) {
            const { attributes: l, clientId: n, setAttributes: o } = t,
              { tempID: a } = l;
            Object(p.useEffect)(() => o({ tempID: F.a.unique(n) }), [n]);
            let r = "bs-spacing bs-" + F.a.unique(n);
            return Object(p.createElement)(
              e,
              b()({}, t, {
                className: (t.className ? t.className + " " : "") + r,
              })
            );
          }
          return Object(p.createElement)(e, t);
        },
        "withSpacingClassName"
      );
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/spacing/editor-class",
        P
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/spacing/frontend-class",
          function (e, t, l) {
            const { bsSpacing: n, tempID: o } = l;
            if (N(n) && o) {
              const t = "bs-" + o;
              (" " + e.className + " ").includes(t) ||
                (e.className = (e.className ? e.className + " " : "") + t);
            }
            return e;
          }
        );
      var z = l(8),
        H = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z",
          })
        ),
        $ = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z",
          })
        ),
        M = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z",
          })
        );
      function D(e) {
        const { bsAlignment: t } = e;
        let l = [];
        return (
          Object.keys(t).forEach(function (e) {
            t[e] && l.push(`text-${e ? e + "-" : ""}${t[e]}`);
          }),
          v()(l)
        );
      }
      let _ = !1;
      function V(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        return (
          "object" == typeof e &&
            (!1 === t
              ? Object.keys(e).forEach(function (t) {
                  e[t] && (l = e[t]);
                })
              : e[t] && (l = e[t])),
          l
        );
      }
      class L extends p.Component {
        hasAlignment() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props,
            { bsAlignment: l } = t;
          return V(l, e);
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapAlignment.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            { bsAlignment: o } = l,
            a = {};
          let r = Object.keys(bootstrapBlocks.breakpoints);
          return (
            r.sort(function (e, t) {
              return t - e;
            }),
            r.forEach((e) => {
              let t = bootstrapBlocks.breakpoints[e].prefix;
              a[t] = this.hasAlignment(t);
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Alignment"),
                      this.hasAlignment()
                        ? Object(p.createElement)(f, null)
                        : ""
                    ),
                    initialOpen: _,
                    onToggle: () => (_ = !_),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: a }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.ToolbarGroup, {
                        controls: [
                          {
                            icon: H,
                            title: "Left",
                            onClick: () =>
                              n({
                                bsAlignment: {
                                  ...o,
                                  [e.name]: "start" !== o[e.name] && "start",
                                },
                              }),
                            isActive: "start" === o[e.name],
                          },
                          {
                            icon: $,
                            title: "Center",
                            onClick: () =>
                              n({
                                bsAlignment: {
                                  ...o,
                                  [e.name]: "center" !== o[e.name] && "center",
                                },
                              }),
                            isActive: "center" === o[e.name],
                          },
                          {
                            icon: M,
                            title: "Right",
                            onClick: () =>
                              n({
                                bsAlignment: {
                                  ...o,
                                  [e.name]: "end" !== o[e.name] && "end",
                                },
                              }),
                            isActive: "end" === o[e.name],
                          },
                        ],
                      })
                    )
                  )
                )
              )
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/alignment/attribute",
        function (e) {
          return (
            e.attributes.bsAlignment ||
              (e.attributes.bsAlignment = { type: "object", default: {} }),
            e
          );
        }
      );
      const R = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(L, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/alignment/control", R);
      const G = Object(u.createHigherOrderComponent)(
        (e) => (t) =>
          V(t.attributes.bsAlignment)
            ? Object(p.createElement)(
                e,
                b()({}, t, {
                  className:
                    (t.className ? t.className + " " : "") + D(t.attributes),
                })
              )
            : Object(p.createElement)(e, t),
        "withCustomClassName"
      );
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-alignment/editor-class",
        G
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-alignment/frontend-class",
          function (e, t, l) {
            return (
              V(l.bsAlignment) &&
                (e.className = (e.className ? e.className + " " : "") + D(l)),
              e
            );
          }
        );
      var q = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M6 15h14V9H6v6zm6-10.8v1.5h8V4.2h-8zm0 15.6h8v-1.5h-8v1.5z",
          })
        ),
        U = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z",
          })
        ),
        W = Object(p.createElement)(
          z.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          Object(p.createElement)(z.Path, {
            d: "M4 9v6h14V9H4zm8-4.8H4v1.5h8V4.2zM4 19.8h8v-1.5H4v1.5z",
          })
        );
      function J(e) {
        const { bsSnapping: t, bsSnappingWithoutInner: l } = e;
        let n = [];
        return (
          l && n.push("bs-snap-wo-inner"),
          Object.keys(t).forEach(function (e) {
            t[e] && n.push(`bs-snap-${e ? e + "-" : ""}${t[e]}`);
          }),
          v()(n)
        );
      }
      let K = !1;
      function Z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        return (
          "object" == typeof e &&
            (!1 === t
              ? Object.keys(e).forEach(function (t) {
                  e[t] && (l = e[t]);
                })
              : e[t] && (l = e[t])),
          l
        );
      }
      class Q extends p.Component {
        constructor(e) {
          super(e), (this.onUpdate = this.onUpdate.bind(this));
        }
        componentDidMount() {
          this.onUpdate();
        }
        componentDidUpdate() {
          this.onUpdate();
        }
        onUpdate() {
          const { attributes: e, clientId: t } = this.props,
            { bsSnapping: l, bsSnappingWithoutInner: n } = e;
          let o =
            document.querySelector("iframe[name]") ||
            document.querySelector('iframe[src^="blob:"]') ||
            document.querySelector(".editor-styles-wrapper");
          if (!o) return;
          "IFRAME" == o.tagName && (o = o.contentDocument.body);
          let a = o.getBoundingClientRect(),
            r = Object.keys(bootstrapBlocks.breakpoints);
          r.sort(function (e, t) {
            return t - e;
          });
          let s = !1;
          r.forEach((e) => {
            s ||
              (a.width >= parseFloat(e) &&
                (s = Z(l, bootstrapBlocks.breakpoints[e].prefix)));
          });
          let c = o.querySelector("#block-" + t);
          if (s) {
            let e = c.getAttribute("style");
            if (
              (e &&
                ((e = e.replace(
                  /\s?(?:margin|padding)-(?:left|right)\s?[^;]+;?/g,
                  ""
                )),
                c.setAttribute("style", e)),
              "none" != s)
            ) {
              let t = c.getBoundingClientRect(),
                l = Math.abs(a[s] - t[s]);
              (e = "margin-" + s + ":" + -1 * l + "px;" + e),
                n && (e = "padding-" + s + ":" + l + "px;" + e),
                c.setAttribute("style", e);
            }
          }
        }
        hasSnapping() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props,
            { bsSnapping: l } = t;
          return Z(l, e);
        }
        render() {
          let e = !0;
          if (
            ((e = ["core/group", "core/cover"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapSnapping.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            { bsSnapping: o, bsSnappingWithoutInner: a } = l,
            r = {};
          let s = Object.keys(bootstrapBlocks.breakpoints);
          return (
            s.sort(function (e, t) {
              return t - e;
            }),
            s.forEach((e) => {
              let t = bootstrapBlocks.breakpoints[e].prefix;
              r[t] = this.hasSnapping(t);
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Snapping"),
                      this.hasSnapping() ? Object(p.createElement)(f, null) : ""
                    ),
                    initialOpen: K,
                    onToggle: () => (K = !K),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: r }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.ToolbarGroup, {
                        controls: [
                          {
                            icon: q,
                            title: "Left",
                            onClick: () =>
                              n({
                                bsSnapping: {
                                  ...o,
                                  [e.name]: "left" !== o[e.name] && "left",
                                },
                              }),
                            isActive: "left" === o[e.name],
                          },
                          {
                            icon: U,
                            title: "None",
                            onClick: () =>
                              n({
                                bsSnapping: {
                                  ...o,
                                  [e.name]: "none" !== o[e.name] && "none",
                                },
                              }),
                            isActive: "none" === o[e.name],
                          },
                          {
                            icon: W,
                            title: "Right",
                            onClick: () =>
                              n({
                                bsSnapping: {
                                  ...o,
                                  [e.name]: "right" !== o[e.name] && "right",
                                },
                              }),
                            isActive: "right" === o[e.name],
                          },
                        ],
                      }),
                      Object(p.createElement)(d.ToggleControl, {
                        label: "Snap without inner content",
                        checked: !!a,
                        onChange: (e) => n({ bsSnappingWithoutInner: e }),
                      })
                    )
                  )
                )
              )
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/snapping/attribute",
        function (e) {
          return (
            e.attributes.bsSnapping ||
              (e.attributes.bsSnapping = { type: "object", default: {} }),
            e.attributes.bsSnappingWithoutInner ||
              (e.attributes.bsSnappingWithoutInner = {
                type: "boolean",
                default: !0,
              }),
            e
          );
        }
      );
      const X = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(Q, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/snapping/control", X);
      const Y = Object(u.createHigherOrderComponent)(
        (e) => (t) =>
          Z(t.attributes.bsSnapping)
            ? Object(p.createElement)(
                e,
                b()({}, t, {
                  className:
                    (t.className ? t.className + " " : "") + J(t.attributes),
                })
              )
            : Object(p.createElement)(e, t),
        "withCustomClassName"
      );
      function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const {
          bsDisplay: l,
          bsDisplayPrint: n,
          bsHideForLoggedIn: o,
          bsHideForLoggedOut: a,
        } = e;
        let r = [];
        return (
          Object.keys(l).forEach(function (e) {
            l[e] &&
              (t && "none" == l[e]
                ? r.push("d-editor-none")
                : r.push(`d-${e ? e + "-" : ""}${l[e]}`));
          }),
          t && (o || a) && r.push("d-editor-none"),
          n && r.push("d-print-" + n),
          v()(r)
        );
      }
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-snapping/editor-class",
        Y
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-snapping/frontend-class",
          function (e, t, l) {
            return (
              Z(l.bsSnapping) &&
                (e.className = (e.className ? e.className + " " : "") + J(l)),
              e
            );
          }
        );
      let te = !1;
      function le(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        return (
          "object" == typeof e &&
            (!1 === t
              ? Object.keys(e).forEach(function (t) {
                  e[t] && (l = e[t]);
                })
              : e[t] && (l = e[t])),
          l
        );
      }
      class ne extends p.Component {
        hasDisplay() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props,
            { bsDisplay: l } = t;
          return le(l, e);
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapDisplay.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { attributes: t, setAttributes: l } = this.props,
            {
              bsDisplay: n,
              bsDisplayPrint: o,
              bsHideForLoggedIn: a,
              bsHideForLoggedOut: r,
            } = t,
            s = {};
          let c = Object.keys(bootstrapBlocks.breakpoints);
          return (
            c.sort(function (e, t) {
              return t - e;
            }),
            c.forEach((e) => {
              let t = bootstrapBlocks.breakpoints[e].prefix;
              s[t] = this.hasDisplay(t);
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Display"),
                      this.hasDisplay() || o || a || r
                        ? Object(p.createElement)(f, null)
                        : ""
                    ),
                    initialOpen: te,
                    onToggle: () => (te = !te),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: s }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.SelectControl, {
                        label: "Display",
                        value: n[e.name],
                        onChange: (t) =>
                          l({ bsDisplay: { ...n, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "none", value: "none" },
                          { label: "inline", value: "inline" },
                          { label: "inline-block", value: "inline-block" },
                          { label: "block", value: "block" },
                          { label: "grid", value: "grid" },
                          { label: "table", value: "table" },
                          { label: "table-cell", value: "table-cell" },
                          { label: "table-row", value: "table-row" },
                          { label: "flex", value: "flex" },
                          { label: "inline-flex", value: "inline-flex" },
                        ],
                      })
                    )
                  ),
                  Object(p.createElement)("hr", null),
                  Object(p.createElement)(d.SelectControl, {
                    label: "Display in print",
                    value: o,
                    onChange: (e) => l({ bsDisplayPrint: e }),
                    options: [
                      { label: "Inherit from smaller", value: "" },
                      { label: "none", value: "none" },
                      { label: "inline", value: "inline" },
                      { label: "inline-block", value: "inline-block" },
                      { label: "block", value: "block" },
                      { label: "grid", value: "grid" },
                      { label: "table", value: "table" },
                      { label: "table-cell", value: "table-cell" },
                      { label: "table-row", value: "table-row" },
                      { label: "flex", value: "flex" },
                      { label: "inline-flex", value: "inline-flex" },
                    ],
                  }),
                  Object(p.createElement)(d.ToggleControl, {
                    label: "Hide for logged in user",
                    checked: !!a,
                    onChange: () => l({ bsHideForLoggedIn: !a }),
                    help: a
                      ? "Now it's hidden for logged in user"
                      : "Now it's visible for logged in user",
                  }),
                  Object(p.createElement)(d.ToggleControl, {
                    label: "Hide for logged out visitor",
                    checked: !!r,
                    onChange: () => l({ bsHideForLoggedOut: !r }),
                    help: r
                      ? "Now it's hidden for logged out visitor"
                      : "Now it's visible for logged out visitor",
                  })
                )
              )
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/display/attribute",
        function (e) {
          return (
            e.attributes.bsDisplay ||
              (e.attributes.bsDisplay = { type: "object", default: {} }),
            e.attributes.bsDisplayPrint ||
              (e.attributes.bsDisplayPrint = { type: "string", default: "" }),
            e.attributes.bsHideForLoggedIn ||
              (e.attributes.bsHideForLoggedIn = {
                type: "boolean",
                default: !1,
              }),
            e.attributes.bsHideForLoggedOut ||
              (e.attributes.bsHideForLoggedOut = {
                type: "boolean",
                default: !1,
              }),
            e
          );
        }
      );
      const oe = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(ne, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/display/control", oe);
      const ae = Object(u.createHigherOrderComponent)(
        (e) => (t) =>
          le(t.attributes.bsDisplay) ||
          t.attributes.bsDisplayPrint ||
          t.attributes.bsHideForLoggedIn ||
          t.attributes.bsHideForLoggedOut
            ? Object(p.createElement)(
                e,
                b()({}, t, {
                  className:
                    (t.className ? t.className + " " : "") +
                    ee(t.attributes, !0),
                })
              )
            : Object(p.createElement)(e, t),
        "withCustomClassName"
      );
      function re(e) {
        const {
          bsFlexDirection: t,
          bsFlexWrap: l,
          bsFlexJustifyContent: n,
          bsFlexAlignItems: o,
          bsFlexAlignContent: a,
        } = e;
        let r = [];
        return (
          Object.keys(t).forEach(function (e) {
            t[e] && r.push(`flex-${e ? e + "-" : ""}${t[e]}`);
          }),
          Object.keys(l).forEach(function (e) {
            l[e] && r.push(`flex-${e ? e + "-" : ""}${l[e]}`);
          }),
          Object.keys(n).forEach(function (e) {
            n[e] && r.push(`justify-content-${e ? e + "-" : ""}${n[e]}`);
          }),
          Object.keys(o).forEach(function (e) {
            o[e] && r.push(`align-items-${e ? e + "-" : ""}${o[e]}`);
          }),
          Object.keys(a).forEach(function (e) {
            a[e] && r.push(`align-content-${e ? e + "-" : ""}${a[e]}`);
          }),
          v()(r)
        );
      }
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-display/editor-class",
        ae
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-display/frontend-class",
          function (e, t, l) {
            return (
              (le(l.bsDisplay) || l.bsDisplayPrint) &&
                (e.className = (e.className ? e.className + " " : "") + ee(l)),
              e
            );
          }
        );
      let se = !1;
      function ce(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        for (let n of [
          "bsFlexDirection",
          "bsFlexWrap",
          "bsFlexJustifyContent",
          "bsFlexAlignItems",
          "bsFlexAlignContent",
          "bsFlexGap",
        ])
          if (
            "object" == typeof e[n] &&
            (!1 === t
              ? Object.keys(e[n]).forEach(function (t) {
                  e[n][t] && (l = e[n][t]);
                })
              : e[n][t] && (l = e[n][t]),
            l)
          )
            break;
        return l;
      }
      function ie(e) {
        let t = !1;
        return (
          "object" == typeof e &&
            Object.keys(e).forEach(function (l) {
              e[l] && (t = e[l]);
            }),
          t
        );
      }
      class me extends p.Component {
        hasFlex() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props;
          return ce(t, e);
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapFlex.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            {
              bsFlexDirection: o,
              bsFlexWrap: a,
              bsFlexJustifyContent: r,
              bsFlexAlignItems: s,
              bsFlexAlignContent: c,
              bsFlexGap: i,
            } = l,
            m = {};
          let b = "",
            u = Object.keys(bootstrapBlocks.breakpoints);
          return (
            u.sort(function (e, t) {
              return t - e;
            }),
            u.forEach((e) => {
              let l = bootstrapBlocks.breakpoints[e].prefix;
              m[l] = this.hasFlex(l);
              let n = "";
              if (i && void 0 !== i[l] && "" !== i[l]) {
                let e = i[l];
                parseFloat(e) == e && (e += "px"), (n += `gap:${e};`);
              }
              if (n) {
                const l = "bs-" + F.a.unique(t);
                b += e
                  ? `\n\t\t\t\t\t\t@media(min-width:${e}px){\n\t\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}`
                  : `\n\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t}`;
              }
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Flex container"),
                      this.hasFlex() ? Object(p.createElement)(f, null) : ""
                    ),
                    initialOpen: se,
                    onToggle: () => (se = !se),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: m }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.SelectControl, {
                        label: "Flex direction",
                        value: o[e.name],
                        onChange: (t) =>
                          n({ bsFlexDirection: { ...o, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "row", value: "row" },
                          { label: "row-reverse", value: "row-reverse" },
                          { label: "column", value: "column" },
                          { label: "column-reverse", value: "column-reverse" },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Flex wrap",
                        value: a[e.name],
                        onChange: (t) =>
                          n({ bsFlexWrap: { ...a, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "nowrap", value: "nowrap" },
                          { label: "wrap", value: "wrap" },
                          { label: "wrap-reverse", value: "wrap-reverse" },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Justify content",
                        value: r[e.name],
                        onChange: (t) =>
                          n({ bsFlexJustifyContent: { ...r, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "flex-start", value: "start" },
                          { label: "flex-end", value: "end" },
                          { label: "center", value: "center" },
                          { label: "space-between", value: "between" },
                          { label: "space-around", value: "around" },
                          { label: "space-evenly", value: "evenly" },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Align items",
                        value: s[e.name],
                        onChange: (t) =>
                          n({ bsFlexAlignItems: { ...s, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "flex-start", value: "start" },
                          { label: "flex-end", value: "end" },
                          { label: "center", value: "center" },
                          { label: "baseline", value: "baseline" },
                          { label: "stretch", value: "stretch" },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Align content",
                        value: c[e.name],
                        onChange: (t) =>
                          n({ bsFlexAlignContent: { ...c, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "flex-start", value: "start" },
                          { label: "flex-end", value: "end" },
                          { label: "center", value: "center" },
                          { label: "space-between", value: "between" },
                          { label: "space-around", value: "around" },
                          { label: "stretch", value: "stretch" },
                        ],
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Gap",
                        value: i[e.name],
                        onChange: (t) =>
                          n({ bsFlexGap: { ...i, [e.name]: t } }),
                      })
                    )
                  )
                )
              ),
              b ? Object(p.createElement)("style", null, b) : ""
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/flex/attribute",
        function (e) {
          return (
            e.attributes.tempID || (e.attributes.tempID = { type: "string" }),
            e.attributes.bsFlexDirection ||
              (e.attributes.bsFlexDirection = { type: "object", default: {} }),
            e.attributes.bsFlexWrap ||
              (e.attributes.bsFlexWrap = { type: "object", default: {} }),
            e.attributes.bsFlexJustifyContent ||
              (e.attributes.bsFlexJustifyContent = {
                type: "object",
                default: {},
              }),
            e.attributes.bsFlexAlignItems ||
              (e.attributes.bsFlexAlignItems = { type: "object", default: {} }),
            e.attributes.bsFlexAlignContent ||
              (e.attributes.bsFlexAlignContent = {
                type: "object",
                default: {},
              }),
            e.attributes.bsFlexGap ||
              (e.attributes.bsFlexGap = { type: "object", default: {} }),
            e
          );
        }
      );
      const be = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(me, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/flex/control", be);
      const pe = Object(u.createHigherOrderComponent)(
        (e) => (t) => {
          if (ce(t.attributes)) {
            const { attributes: l, clientId: n, setAttributes: o } = t,
              { tempID: a, bsFlexGap: r } = t.attributes;
            let s = re(l);
            return (
              ie(r) &&
                (Object(p.useEffect)(() => o({ tempID: F.a.unique(n) }), [n]),
                (s += " bs-" + F.a.unique(n))),
              Object(p.createElement)(
                e,
                b()({}, t, {
                  className: (t.className ? t.className + " " : "") + s,
                })
              )
            );
          }
          return Object(p.createElement)(e, t);
        },
        "withCustomClassName"
      );
      function de(e) {
        const {
          bsFlexGrow: t,
          bsFlexShrink: l,
          bsFlexAlignSelf: n,
          bsFlexOrder: o,
        } = e;
        let a = [];
        return (
          Object.keys(t).forEach(function (e) {
            t[e] && a.push(`flex-${e ? e + "-" : ""}grow-${t[e]}`);
          }),
          Object.keys(l).forEach(function (e) {
            l[e] && a.push(`flex-${e ? e + "-" : ""}shrink-${l[e]}`);
          }),
          Object.keys(n).forEach(function (e) {
            n[e] && a.push(`align-self-${e ? e + "-" : ""}${n[e]}`);
          }),
          Object.keys(o).forEach(function (e) {
            o[e] && a.push(`order-${e ? e + "-" : ""}${o[e]}`);
          }),
          v()(a)
        );
      }
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-flex/editor-class",
        pe
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-flex/frontend-class",
          function (e, t, l) {
            if (ce(l)) {
              const { tempID: t, bsFlexGap: n } = l;
              let o = re(l);
              if (ie(n) && t) {
                const l = "bs-" + t;
                (" " + e.className + " ").includes(l) || (o += " " + l);
              }
              e.className = (e.className ? e.className + " " : "") + o;
            }
            return e;
          }
        );
      let ue = !1;
      function ge(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        for (let n of [
          "bsFlexGrow",
          "bsFlexShrink",
          "bsFlexBasis",
          "bsFlexAlignSelf",
          "bsFlexOrder",
        ])
          if (
            "object" == typeof e[n] &&
            (!1 === t
              ? Object.keys(e[n]).forEach(function (t) {
                  e[n][t] && (l = e[n][t]);
                })
              : e[n][t] && (l = e[n][t]),
            l)
          )
            break;
        return l;
      }
      function xe(e) {
        let t = !1;
        return (
          "object" == typeof e &&
            Object.keys(e).forEach(function (l) {
              e[l] && (t = e[l]);
            }),
          t
        );
      }
      class fe extends p.Component {
        hasFlex() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props;
          return ge(t, e);
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapFlexItem.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            {
              bsFlexGrow: o,
              bsFlexShrink: a,
              bsFlexBasis: r,
              bsFlexAlignSelf: s,
              bsFlexOrder: c,
            } = l,
            i = {};
          let m = "",
            b = Object.keys(bootstrapBlocks.breakpoints);
          return (
            b.sort(function (e, t) {
              return t - e;
            }),
            b.forEach((e) => {
              let l = bootstrapBlocks.breakpoints[e].prefix;
              i[l] = this.hasFlex(l);
              let n = "";
              if (r && void 0 !== r[l] && "" !== r[l]) {
                let e = r[l];
                parseFloat(e) == e && (e += "px"), (n += `flex-basis:${e};`);
              }
              if (n) {
                const l = "bs-" + F.a.unique(t);
                m += e
                  ? `\n\t\t\t\t\t\t@media(min-width:${e}px){\n\t\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}`
                  : `\n\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t}`;
              }
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Flex item"),
                      this.hasFlex() ? Object(p.createElement)(f, null) : ""
                    ),
                    initialOpen: ue,
                    onToggle: () => (ue = !ue),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: i }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.SelectControl, {
                        label: "Flex grow",
                        value: o[e.name],
                        onChange: (t) =>
                          n({ bsFlexGrow: { ...o, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: 0, value: 0 },
                          { label: 1, value: 1 },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Flex shrink",
                        value: a[e.name],
                        onChange: (t) =>
                          n({ bsFlexShrink: { ...a, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: 0, value: 0 },
                          { label: 1, value: 1 },
                        ],
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Flex basis",
                        value: r[e.name],
                        onChange: (t) =>
                          n({ bsFlexBasis: { ...r, [e.name]: t } }),
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Align self",
                        value: s[e.name],
                        onChange: (t) =>
                          n({ bsFlexAlignSelf: { ...s, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "auto", value: "auto" },
                          { label: "flex-start", value: "start" },
                          { label: "flex-end", value: "end" },
                          { label: "center", value: "center" },
                          { label: "baseline", value: "baseline" },
                          { label: "stretch", value: "stretch" },
                        ],
                      }),
                      Object(p.createElement)(d.SelectControl, {
                        label: "Flex order",
                        value: c[e.name],
                        onChange: (t) =>
                          n({ bsFlexOrder: { ...c, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: -1, value: "first" },
                          { label: 0, value: 0 },
                          { label: 1, value: 1 },
                          { label: 2, value: 2 },
                          { label: 3, value: 3 },
                          { label: 4, value: 4 },
                          { label: 5, value: 5 },
                          { label: 6, value: "last" },
                        ],
                      })
                    )
                  )
                )
              ),
              m ? Object(p.createElement)("style", null, m) : ""
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/flex-item/attribute",
        function (e) {
          return (
            e.attributes.tempID || (e.attributes.tempID = { type: "string" }),
            e.attributes.bsFlexGrow ||
              (e.attributes.bsFlexGrow = { type: "object", default: {} }),
            e.attributes.bsFlexShrink ||
              (e.attributes.bsFlexShrink = { type: "object", default: {} }),
            e.attributes.bsFlexBasis ||
              (e.attributes.bsFlexBasis = { type: "object", default: {} }),
            e.attributes.bsFlexAlignSelf ||
              (e.attributes.bsFlexAlignSelf = { type: "object", default: {} }),
            e.attributes.bsFlexOrder ||
              (e.attributes.bsFlexOrder = { type: "object", default: {} }),
            e
          );
        }
      );
      const he = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(fe, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)(
        "editor.BlockEdit",
        "bootstrap/flex-item/control",
        he
      );
      const ve = Object(u.createHigherOrderComponent)(
        (e) => (t) => {
          if (ge(t.attributes)) {
            const { attributes: l, clientId: n, setAttributes: o } = t,
              { tempID: a, bsFlexBasis: r } = t.attributes;
            let s = de(l);
            return (
              xe(r) &&
                (Object(p.useEffect)(() => o({ tempID: F.a.unique(n) }), [n]),
                (s += " bs-" + F.a.unique(n))),
              Object(p.createElement)(
                e,
                b()({}, t, {
                  className: (t.className ? t.className + " " : "") + s,
                })
              )
            );
          }
          return Object(p.createElement)(e, t);
        },
        "withCustomClassName"
      );
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-flex-item/editor-class",
        ve
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-flex-item/frontend-class",
          function (e, t, l) {
            if (ge(l)) {
              const { tempID: t, bsFlexBasis: n } = l;
              let o = de(l);
              if (xe(n) && t) {
                const l = "bs-" + t;
                (" " + e.className + " ").includes(l) || (o += " " + l);
              }
              e.className = (e.className ? e.className + " " : "") + o;
            }
            return e;
          }
        );
      let ye = !1;
      function Oe(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = !1;
        for (let n of [
          "bsPosition",
          "bsPositionZindex",
          "bsPositionTop",
          "bsPositionRight",
          "bsPositionBottom",
          "bsPositionLeft",
        ])
          if (
            "object" == typeof e[n] &&
            (!1 === t
              ? Object.keys(e[n]).forEach(function (t) {
                  e[n][t] && (l = e[n][t]);
                })
              : e[n][t] && (l = e[n][t]),
            l)
          )
            break;
        return l;
      }
      class je extends p.Component {
        hasPosition() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const { attributes: t } = this.props;
          return Oe(t, e);
        }
        render() {
          let e = !0;
          if (
            ((e = !["core/block", "core/shortcode"].includes(this.props.name)),
            (e = Object(g.applyFilters)(
              "bootstrap.BootstrapPosition.allow",
              e,
              this.props
            )),
            !e)
          )
            return null;
          const { clientId: t, attributes: l, setAttributes: n } = this.props,
            {
              bsPosition: o,
              bsPositionZindex: a,
              bsPositionTop: r,
              bsPositionRight: s,
              bsPositionBottom: c,
              bsPositionLeft: i,
            } = l,
            m = {};
          let b = "",
            u = Object.keys(bootstrapBlocks.breakpoints);
          return (
            u.sort(function (e, t) {
              return t - e;
            }),
            u.forEach((e) => {
              let l = bootstrapBlocks.breakpoints[e].prefix;
              m[l] = this.hasPosition(l);
              let n = "";
              if (
                (o &&
                  void 0 !== o[l] &&
                  "" !== o[l] &&
                  (n += `position:${o[l]};`),
                a &&
                  void 0 !== a[l] &&
                  "" !== a[l] &&
                  (n += `z-index:${a[l]};`),
                r &&
                  void 0 !== r[l] &&
                  "" !== r[l] &&
                  (n += `top:${
                    r[l] + (parseFloat(r[l]) == r[l] ? "px" : "")
                  };`),
                s &&
                  void 0 !== s[l] &&
                  "" !== s[l] &&
                  (n += `right:${
                    s[l] + (parseFloat(s[l]) == s[l] ? "px" : "")
                  };`),
                c &&
                  void 0 !== c[l] &&
                  "" !== c[l] &&
                  (n += `bottom:${
                    c[l] + (parseFloat(c[l]) == c[l] ? "px" : "")
                  };`),
                i &&
                  void 0 !== i[l] &&
                  "" !== i[l] &&
                  (n += `left:${
                    i[l] + (parseFloat(i[l]) == i[l] ? "px" : "")
                  };`),
                n)
              ) {
                const l = "bs-" + F.a.unique(t);
                b += e
                  ? `\n\t\t\t\t\t\t@media(min-width:${e}px){\n\t\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}`
                  : `\n\t\t\t\t\t\thtml .editor-styles-wrapper .${l}{\n\t\t\t\t\t\t\t${n}\n\t\t\t\t\t\t}`;
              }
            }),
            Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.InspectorControls,
                null,
                Object(p.createElement)(
                  d.PanelBody,
                  {
                    title: Object(p.createElement)(
                      "div",
                      { style: { position: "relative" } },
                      Object(p.createElement)("span", null, "Position"),
                      this.hasPosition() ? Object(p.createElement)(f, null) : ""
                    ),
                    initialOpen: ye,
                    onToggle: () => (ye = !ye),
                  },
                  Object(p.createElement)(C, { breakpointsTabs: m }, (e) =>
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.SelectControl, {
                        label: "Position",
                        value: o[e.name],
                        onChange: (t) =>
                          n({ bsPosition: { ...o, [e.name]: t } }),
                        options: [
                          { label: "Inherit from smaller", value: "" },
                          { label: "static", value: "static" },
                          { label: "relative", value: "relative" },
                          { label: "fixed", value: "fixed" },
                          { label: "absolute", value: "absolute" },
                          { label: "sticky", value: "sticky" },
                        ],
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Z-index",
                        value: a[e.name],
                        onChange: (t) =>
                          n({ bsPositionZindex: { ...a, [e.name]: t } }),
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Top",
                        value: r[e.name],
                        onChange: (t) =>
                          n({ bsPositionTop: { ...r, [e.name]: t } }),
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Right",
                        value: s[e.name],
                        onChange: (t) =>
                          n({ bsPositionRight: { ...s, [e.name]: t } }),
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Bottom",
                        value: c[e.name],
                        onChange: (t) =>
                          n({ bsPositionBottom: { ...c, [e.name]: t } }),
                      }),
                      Object(p.createElement)(d.TextControl, {
                        label: "Left",
                        value: i[e.name],
                        onChange: (t) =>
                          n({ bsPositionLeft: { ...i, [e.name]: t } }),
                      })
                    )
                  )
                )
              ),
              b ? Object(p.createElement)("style", null, b) : ""
            )
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/position/attribute",
        function (e) {
          return (
            e.attributes.tempID || (e.attributes.tempID = { type: "string" }),
            e.attributes.bsPosition ||
              (e.attributes.bsPosition = { type: "object", default: {} }),
            e.attributes.bsPositionZindex ||
              (e.attributes.bsPositionZindex = { type: "object", default: {} }),
            e.attributes.bsPositionTop ||
              (e.attributes.bsPositionTop = { type: "object", default: {} }),
            e.attributes.bsPositionRight ||
              (e.attributes.bsPositionRight = { type: "object", default: {} }),
            e.attributes.bsPositionBottom ||
              (e.attributes.bsPositionBottom = { type: "object", default: {} }),
            e.attributes.bsPositionLeft ||
              (e.attributes.bsPositionLeft = { type: "object", default: {} }),
            e
          );
        }
      );
      const we = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(je, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)("editor.BlockEdit", "bootstrap/position/control", we);
      const ke = Object(u.createHigherOrderComponent)(
        (e) => (t) => {
          if (Oe(t.attributes)) {
            const { clientId: l, attributes: n, setAttributes: o } = t;
            Object(p.useEffect)(() => o({ tempID: F.a.unique(l) }), [l]);
            let a = t.className;
            const r = "bs-" + F.a.unique(l);
            return (
              (" " + a + " ").includes(r) || (a += " " + r),
              Object(p.createElement)(e, b()({}, t, { className: a }))
            );
          }
          return Object(p.createElement)(e, t);
        },
        "withCustomClassName"
      );
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-position/editor-class",
        ke
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-position/frontend-class",
          function (e, t, l) {
            if (Oe(l) && l.tempID) {
              const t = "bs-" + l.tempID;
              (" " + e.className + " ").includes(t) ||
                (e.className = (e.className ? e.className + " " : "") + t);
            }
            return e;
          }
        );
      const Ee = [
        "accordion",
        "accordion-body",
        "accordion-button",
        "accordion-collapse",
        "accordion-flush",
        "accordion-header",
        "accordion-item",
        "active",
        "active-visible",
        "alert",
        "alert-danger",
        "alert-dark",
        "alert-dismissible",
        "alert-heading",
        "alert-info",
        "alert-light",
        "alert-link",
        "alert-primary",
        "alert-secondary",
        "alert-success",
        "alert-warning",
        "align-baseline",
        "align-bottom",
        "align-content-around",
        "align-content-between",
        "align-content-center",
        "align-content-end",
        "align-content-lg-around",
        "align-content-lg-between",
        "align-content-lg-center",
        "align-content-lg-end",
        "align-content-lg-start",
        "align-content-lg-stretch",
        "align-content-md-around",
        "align-content-md-between",
        "align-content-md-center",
        "align-content-md-end",
        "align-content-md-start",
        "align-content-md-stretch",
        "align-content-sm-around",
        "align-content-sm-between",
        "align-content-sm-center",
        "align-content-sm-end",
        "align-content-sm-start",
        "align-content-sm-stretch",
        "align-content-start",
        "align-content-stretch",
        "align-content-xl-around",
        "align-content-xl-between",
        "align-content-xl-center",
        "align-content-xl-end",
        "align-content-xl-start",
        "align-content-xl-stretch",
        "align-content-xxl-around",
        "align-content-xxl-between",
        "align-content-xxl-center",
        "align-content-xxl-end",
        "align-content-xxl-start",
        "align-content-xxl-stretch",
        "align-items-baseline",
        "align-items-center",
        "align-items-end",
        "align-items-lg-baseline",
        "align-items-lg-center",
        "align-items-lg-end",
        "align-items-lg-start",
        "align-items-lg-stretch",
        "align-items-md-baseline",
        "align-items-md-center",
        "align-items-md-end",
        "align-items-md-start",
        "align-items-md-stretch",
        "align-items-sm-baseline",
        "align-items-sm-center",
        "align-items-sm-end",
        "align-items-sm-start",
        "align-items-sm-stretch",
        "align-items-start",
        "align-items-stretch",
        "align-items-xl-baseline",
        "align-items-xl-center",
        "align-items-xl-end",
        "align-items-xl-start",
        "align-items-xl-stretch",
        "align-items-xxl-baseline",
        "align-items-xxl-center",
        "align-items-xxl-end",
        "align-items-xxl-start",
        "align-items-xxl-stretch",
        "align-middle",
        "align-self-auto",
        "align-self-baseline",
        "align-self-center",
        "align-self-end",
        "align-self-lg-auto",
        "align-self-lg-baseline",
        "align-self-lg-center",
        "align-self-lg-end",
        "align-self-lg-start",
        "align-self-lg-stretch",
        "align-self-md-auto",
        "align-self-md-baseline",
        "align-self-md-center",
        "align-self-md-end",
        "align-self-md-start",
        "align-self-md-stretch",
        "align-self-sm-auto",
        "align-self-sm-baseline",
        "align-self-sm-center",
        "align-self-sm-end",
        "align-self-sm-start",
        "align-self-sm-stretch",
        "align-self-start",
        "align-self-stretch",
        "align-self-xl-auto",
        "align-self-xl-baseline",
        "align-self-xl-center",
        "align-self-xl-end",
        "align-self-xl-start",
        "align-self-xl-stretch",
        "align-self-xxl-auto",
        "align-self-xxl-baseline",
        "align-self-xxl-center",
        "align-self-xxl-end",
        "align-self-xxl-start",
        "align-self-xxl-stretch",
        "align-text-bottom",
        "align-text-top",
        "align-top",
        "badge",
        "bg-black",
        "bg-body",
        "bg-danger",
        "bg-dark",
        "bg-gradient",
        "bg-info",
        "bg-light",
        "bg-opacity-10",
        "bg-opacity-25",
        "bg-opacity-50",
        "bg-opacity-75",
        "bg-opacity-100",
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-transparent",
        "bg-warning",
        "bg-white",
        "blockquote",
        "blockquote-footer",
        "border",
        "border-0",
        "border-1",
        "border-2",
        "border-3",
        "border-4",
        "border-5",
        "border-bottom",
        "border-bottom-0",
        "border-danger",
        "border-dark",
        "border-end",
        "border-end-0",
        "border-info",
        "border-light",
        "border-opacity-10",
        "border-opacity-25",
        "border-opacity-50",
        "border-opacity-75",
        "border-opacity-100",
        "border-primary",
        "border-secondary",
        "border-start",
        "border-start-0",
        "border-success",
        "border-top",
        "border-top-0",
        "border-warning",
        "border-white",
        "bottom-0",
        "bottom-50",
        "bottom-100",
        "breadcrumb",
        "breadcrumb-item",
        "bs-popover-auto",
        "bs-popover-bottom",
        "bs-popover-end",
        "bs-popover-start",
        "bs-popover-top",
        "bs-tooltip-auto",
        "bs-tooltip-bottom",
        "bs-tooltip-end",
        "bs-tooltip-start",
        "bs-tooltip-top",
        "btn",
        "btn-check",
        "btn-check-visible",
        "btn-close",
        "btn-close-white",
        "btn-danger",
        "btn-dark",
        "btn-group",
        "btn-group-lg",
        "btn-group-sm",
        "btn-group-vertical",
        "btn-info",
        "btn-lg",
        "btn-light",
        "btn-link",
        "btn-link-visible",
        "btn-outline-danger",
        "btn-outline-dark",
        "btn-outline-info",
        "btn-outline-light",
        "btn-outline-primary",
        "btn-outline-secondary",
        "btn-outline-success",
        "btn-outline-warning",
        "btn-primary",
        "btn-secondary",
        "btn-sm",
        "btn-success",
        "btn-toolbar",
        "btn-visible",
        "btn-warning",
        "caption-top",
        "card",
        "card-body",
        "card-footer",
        "card-group",
        "card-header",
        "card-header-pills",
        "card-header-tabs",
        "card-img",
        "card-img-bottom",
        "card-img-overlay",
        "card-img-top",
        "card-link",
        "card-subtitle",
        "card-text",
        "card-title",
        "carousel",
        "carousel-caption",
        "carousel-control-next",
        "carousel-control-next-icon",
        "carousel-control-prev",
        "carousel-control-prev-icon",
        "carousel-dark",
        "carousel-fade",
        "carousel-indicators",
        "carousel-inner",
        "carousel-item",
        "carousel-item-end",
        "carousel-item-next",
        "carousel-item-prev",
        "carousel-item-start",
        "clearfix",
        "col",
        "col-1",
        "col-2",
        "col-3",
        "col-4",
        "col-5",
        "col-6",
        "col-7",
        "col-8",
        "col-9",
        "col-10",
        "col-11",
        "col-12",
        "col-auto",
        "col-form-label",
        "col-form-label-lg",
        "col-form-label-sm",
        "col-lg",
        "col-lg-1",
        "col-lg-2",
        "col-lg-3",
        "col-lg-4",
        "col-lg-5",
        "col-lg-6",
        "col-lg-7",
        "col-lg-8",
        "col-lg-9",
        "col-lg-10",
        "col-lg-11",
        "col-lg-12",
        "col-lg-auto",
        "col-md",
        "col-md-1",
        "col-md-2",
        "col-md-3",
        "col-md-4",
        "col-md-5",
        "col-md-6",
        "col-md-7",
        "col-md-8",
        "col-md-9",
        "col-md-10",
        "col-md-11",
        "col-md-12",
        "col-md-auto",
        "col-sm",
        "col-sm-1",
        "col-sm-2",
        "col-sm-3",
        "col-sm-4",
        "col-sm-5",
        "col-sm-6",
        "col-sm-7",
        "col-sm-8",
        "col-sm-9",
        "col-sm-10",
        "col-sm-11",
        "col-sm-12",
        "col-sm-auto",
        "col-xl",
        "col-xl-1",
        "col-xl-2",
        "col-xl-3",
        "col-xl-4",
        "col-xl-5",
        "col-xl-6",
        "col-xl-7",
        "col-xl-8",
        "col-xl-9",
        "col-xl-10",
        "col-xl-11",
        "col-xl-12",
        "col-xl-auto",
        "col-xxl",
        "col-xxl-1",
        "col-xxl-2",
        "col-xxl-3",
        "col-xxl-4",
        "col-xxl-5",
        "col-xxl-6",
        "col-xxl-7",
        "col-xxl-8",
        "col-xxl-9",
        "col-xxl-10",
        "col-xxl-11",
        "col-xxl-12",
        "col-xxl-auto",
        "collapse",
        "collapse-horizontal",
        "collapsed",
        "collapsing",
        "container",
        "container-fluid",
        "container-lg",
        "container-md",
        "container-sm",
        "container-xl",
        "container-xxl",
        "d-block",
        "d-flex",
        "d-grid",
        "d-inline",
        "d-inline-block",
        "d-inline-flex",
        "d-lg-block",
        "d-lg-flex",
        "d-lg-grid",
        "d-lg-inline",
        "d-lg-inline-block",
        "d-lg-inline-flex",
        "d-lg-none",
        "d-lg-table",
        "d-lg-table-cell",
        "d-lg-table-row",
        "d-md-block",
        "d-md-flex",
        "d-md-grid",
        "d-md-inline",
        "d-md-inline-block",
        "d-md-inline-flex",
        "d-md-none",
        "d-md-table",
        "d-md-table-cell",
        "d-md-table-row",
        "d-none",
        "d-print-block",
        "d-print-flex",
        "d-print-grid",
        "d-print-inline",
        "d-print-inline-block",
        "d-print-inline-flex",
        "d-print-none",
        "d-print-table",
        "d-print-table-cell",
        "d-print-table-row",
        "d-sm-block",
        "d-sm-flex",
        "d-sm-grid",
        "d-sm-inline",
        "d-sm-inline-block",
        "d-sm-inline-flex",
        "d-sm-none",
        "d-sm-table",
        "d-sm-table-cell",
        "d-sm-table-row",
        "d-table",
        "d-table-cell",
        "d-table-row",
        "d-xl-block",
        "d-xl-flex",
        "d-xl-grid",
        "d-xl-inline",
        "d-xl-inline-block",
        "d-xl-inline-flex",
        "d-xl-none",
        "d-xl-table",
        "d-xl-table-cell",
        "d-xl-table-row",
        "d-xxl-block",
        "d-xxl-flex",
        "d-xxl-grid",
        "d-xxl-inline",
        "d-xxl-inline-block",
        "d-xxl-inline-flex",
        "d-xxl-none",
        "d-xxl-table",
        "d-xxl-table-cell",
        "d-xxl-table-row",
        "disabled",
        "display-1",
        "display-2",
        "display-3",
        "display-4",
        "display-5",
        "display-6",
        "dropdown",
        "dropdown-center",
        "dropdown-divider",
        "dropdown-header",
        "dropdown-item",
        "dropdown-item-text",
        "dropdown-menu",
        "dropdown-menu-dark",
        "dropdown-menu-end",
        "dropdown-menu-lg-end",
        "dropdown-menu-lg-start",
        "dropdown-menu-md-end",
        "dropdown-menu-md-start",
        "dropdown-menu-sm-end",
        "dropdown-menu-sm-start",
        "dropdown-menu-start",
        "dropdown-menu-xl-end",
        "dropdown-menu-xl-start",
        "dropdown-menu-xxl-end",
        "dropdown-menu-xxl-start",
        "dropdown-toggle",
        "dropdown-toggle-split",
        "dropend",
        "dropstart",
        "dropup",
        "dropup-center",
        "end-0",
        "end-50",
        "end-100",
        "fade",
        "figure",
        "figure-caption",
        "figure-img",
        "fixed-bottom",
        "fixed-top",
        "flex-column",
        "flex-column-reverse",
        "flex-fill",
        "flex-grow-0",
        "flex-grow-1",
        "flex-lg-column",
        "flex-lg-column-reverse",
        "flex-lg-fill",
        "flex-lg-grow-0",
        "flex-lg-grow-1",
        "flex-lg-nowrap",
        "flex-lg-row",
        "flex-lg-row-reverse",
        "flex-lg-shrink-0",
        "flex-lg-shrink-1",
        "flex-lg-wrap",
        "flex-lg-wrap-reverse",
        "flex-md-column",
        "flex-md-column-reverse",
        "flex-md-fill",
        "flex-md-grow-0",
        "flex-md-grow-1",
        "flex-md-nowrap",
        "flex-md-row",
        "flex-md-row-reverse",
        "flex-md-shrink-0",
        "flex-md-shrink-1",
        "flex-md-wrap",
        "flex-md-wrap-reverse",
        "flex-nowrap",
        "flex-row",
        "flex-row-reverse",
        "flex-shrink-0",
        "flex-shrink-1",
        "flex-sm-column",
        "flex-sm-column-reverse",
        "flex-sm-fill",
        "flex-sm-grow-0",
        "flex-sm-grow-1",
        "flex-sm-nowrap",
        "flex-sm-row",
        "flex-sm-row-reverse",
        "flex-sm-shrink-0",
        "flex-sm-shrink-1",
        "flex-sm-wrap",
        "flex-sm-wrap-reverse",
        "flex-wrap",
        "flex-wrap-reverse",
        "flex-xl-column",
        "flex-xl-column-reverse",
        "flex-xl-fill",
        "flex-xl-grow-0",
        "flex-xl-grow-1",
        "flex-xl-nowrap",
        "flex-xl-row",
        "flex-xl-row-reverse",
        "flex-xl-shrink-0",
        "flex-xl-shrink-1",
        "flex-xl-wrap",
        "flex-xl-wrap-reverse",
        "flex-xxl-column",
        "flex-xxl-column-reverse",
        "flex-xxl-fill",
        "flex-xxl-grow-0",
        "flex-xxl-grow-1",
        "flex-xxl-nowrap",
        "flex-xxl-row",
        "flex-xxl-row-reverse",
        "flex-xxl-shrink-0",
        "flex-xxl-shrink-1",
        "flex-xxl-wrap",
        "flex-xxl-wrap-reverse",
        "float-end",
        "float-lg-end",
        "float-lg-none",
        "float-lg-start",
        "float-md-end",
        "float-md-none",
        "float-md-start",
        "float-none",
        "float-sm-end",
        "float-sm-none",
        "float-sm-start",
        "float-start",
        "float-xl-end",
        "float-xl-none",
        "float-xl-start",
        "float-xxl-end",
        "float-xxl-none",
        "float-xxl-start",
        "font-monospace",
        "form-check",
        "form-check-inline",
        "form-check-input",
        "form-check-label",
        "form-check-reverse",
        "form-control",
        "form-control-color",
        "form-control-lg",
        "form-control-plaintext",
        "form-control-sm",
        "form-floating",
        "form-floating-within",
        "form-label",
        "form-range",
        "form-select",
        "form-select-lg",
        "form-select-sm",
        "form-switch",
        "form-text",
        "fs-1",
        "fs-2",
        "fs-3",
        "fs-4",
        "fs-5",
        "fs-6",
        "fst-italic",
        "fst-normal",
        "fw-bold",
        "fw-bolder",
        "fw-light",
        "fw-lighter",
        "fw-normal",
        "fw-semibold",
        "g-0",
        "g-1",
        "g-2",
        "g-3",
        "g-4",
        "g-5",
        "g-lg-0",
        "g-lg-1",
        "g-lg-2",
        "g-lg-3",
        "g-lg-4",
        "g-lg-5",
        "g-md-0",
        "g-md-1",
        "g-md-2",
        "g-md-3",
        "g-md-4",
        "g-md-5",
        "g-sm-0",
        "g-sm-1",
        "g-sm-2",
        "g-sm-3",
        "g-sm-4",
        "g-sm-5",
        "g-xl-0",
        "g-xl-1",
        "g-xl-2",
        "g-xl-3",
        "g-xl-4",
        "g-xl-5",
        "g-xxl-0",
        "g-xxl-1",
        "g-xxl-2",
        "g-xxl-3",
        "g-xxl-4",
        "g-xxl-5",
        "gap-0",
        "gap-1",
        "gap-2",
        "gap-3",
        "gap-4",
        "gap-5",
        "gap-lg-0",
        "gap-lg-1",
        "gap-lg-2",
        "gap-lg-3",
        "gap-lg-4",
        "gap-lg-5",
        "gap-md-0",
        "gap-md-1",
        "gap-md-2",
        "gap-md-3",
        "gap-md-4",
        "gap-md-5",
        "gap-sm-0",
        "gap-sm-1",
        "gap-sm-2",
        "gap-sm-3",
        "gap-sm-4",
        "gap-sm-5",
        "gap-xl-0",
        "gap-xl-1",
        "gap-xl-2",
        "gap-xl-3",
        "gap-xl-4",
        "gap-xl-5",
        "gap-xxl-0",
        "gap-xxl-1",
        "gap-xxl-2",
        "gap-xxl-3",
        "gap-xxl-4",
        "gap-xxl-5",
        "gx-0",
        "gx-1",
        "gx-2",
        "gx-3",
        "gx-4",
        "gx-5",
        "gx-lg-0",
        "gx-lg-1",
        "gx-lg-2",
        "gx-lg-3",
        "gx-lg-4",
        "gx-lg-5",
        "gx-md-0",
        "gx-md-1",
        "gx-md-2",
        "gx-md-3",
        "gx-md-4",
        "gx-md-5",
        "gx-sm-0",
        "gx-sm-1",
        "gx-sm-2",
        "gx-sm-3",
        "gx-sm-4",
        "gx-sm-5",
        "gx-xl-0",
        "gx-xl-1",
        "gx-xl-2",
        "gx-xl-3",
        "gx-xl-4",
        "gx-xl-5",
        "gx-xxl-0",
        "gx-xxl-1",
        "gx-xxl-2",
        "gx-xxl-3",
        "gx-xxl-4",
        "gx-xxl-5",
        "gy-0",
        "gy-1",
        "gy-2",
        "gy-3",
        "gy-4",
        "gy-5",
        "gy-lg-0",
        "gy-lg-1",
        "gy-lg-2",
        "gy-lg-3",
        "gy-lg-4",
        "gy-lg-5",
        "gy-md-0",
        "gy-md-1",
        "gy-md-2",
        "gy-md-3",
        "gy-md-4",
        "gy-md-5",
        "gy-sm-0",
        "gy-sm-1",
        "gy-sm-2",
        "gy-sm-3",
        "gy-sm-4",
        "gy-sm-5",
        "gy-xl-0",
        "gy-xl-1",
        "gy-xl-2",
        "gy-xl-3",
        "gy-xl-4",
        "gy-xl-5",
        "gy-xxl-0",
        "gy-xxl-1",
        "gy-xxl-2",
        "gy-xxl-3",
        "gy-xxl-4",
        "gy-xxl-5",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "h-25",
        "h-50",
        "h-75",
        "h-100",
        "h-auto",
        "has-validation",
        "hiding",
        "hstack",
        "img-fluid",
        "img-thumbnail",
        "initialism",
        "input-group",
        "input-group-lg",
        "input-group-sm",
        "input-group-text",
        "invalid-feedback",
        "invalid-tooltip",
        "invisible",
        "is-invalid",
        "is-valid",
        "justify-content-around",
        "justify-content-between",
        "justify-content-center",
        "justify-content-end",
        "justify-content-evenly",
        "justify-content-lg-around",
        "justify-content-lg-between",
        "justify-content-lg-center",
        "justify-content-lg-end",
        "justify-content-lg-evenly",
        "justify-content-lg-start",
        "justify-content-md-around",
        "justify-content-md-between",
        "justify-content-md-center",
        "justify-content-md-end",
        "justify-content-md-evenly",
        "justify-content-md-start",
        "justify-content-sm-around",
        "justify-content-sm-between",
        "justify-content-sm-center",
        "justify-content-sm-end",
        "justify-content-sm-evenly",
        "justify-content-sm-start",
        "justify-content-start",
        "justify-content-xl-around",
        "justify-content-xl-between",
        "justify-content-xl-center",
        "justify-content-xl-end",
        "justify-content-xl-evenly",
        "justify-content-xl-start",
        "justify-content-xxl-around",
        "justify-content-xxl-between",
        "justify-content-xxl-center",
        "justify-content-xxl-end",
        "justify-content-xxl-evenly",
        "justify-content-xxl-start",
        "lead",
        "lh-1",
        "lh-base",
        "lh-lg",
        "lh-sm",
        "link-danger",
        "link-dark",
        "link-info",
        "link-light",
        "link-primary",
        "link-secondary",
        "link-success",
        "link-warning",
        "list-group",
        "list-group-flush",
        "list-group-horizontal",
        "list-group-horizontal-lg",
        "list-group-horizontal-md",
        "list-group-horizontal-sm",
        "list-group-horizontal-xl",
        "list-group-horizontal-xxl",
        "list-group-item",
        "list-group-item-action",
        "list-group-item-danger",
        "list-group-item-dark",
        "list-group-item-info",
        "list-group-item-light",
        "list-group-item-primary",
        "list-group-item-secondary",
        "list-group-item-success",
        "list-group-item-warning",
        "list-group-numbered",
        "list-inline",
        "list-inline-item",
        "list-unstyled",
        "m-0",
        "m-1",
        "m-2",
        "m-3",
        "m-4",
        "m-5",
        "m-auto",
        "m-lg-0",
        "m-lg-1",
        "m-lg-2",
        "m-lg-3",
        "m-lg-4",
        "m-lg-5",
        "m-lg-auto",
        "m-md-0",
        "m-md-1",
        "m-md-2",
        "m-md-3",
        "m-md-4",
        "m-md-5",
        "m-md-auto",
        "m-sm-0",
        "m-sm-1",
        "m-sm-2",
        "m-sm-3",
        "m-sm-4",
        "m-sm-5",
        "m-sm-auto",
        "m-xl-0",
        "m-xl-1",
        "m-xl-2",
        "m-xl-3",
        "m-xl-4",
        "m-xl-5",
        "m-xl-auto",
        "m-xxl-0",
        "m-xxl-1",
        "m-xxl-2",
        "m-xxl-3",
        "m-xxl-4",
        "m-xxl-5",
        "m-xxl-auto",
        "mark",
        "mb-0",
        "mb-1",
        "mb-2",
        "mb-3",
        "mb-4",
        "mb-5",
        "mb-auto",
        "mb-lg-0",
        "mb-lg-1",
        "mb-lg-2",
        "mb-lg-3",
        "mb-lg-4",
        "mb-lg-5",
        "mb-lg-auto",
        "mb-md-0",
        "mb-md-1",
        "mb-md-2",
        "mb-md-3",
        "mb-md-4",
        "mb-md-5",
        "mb-md-auto",
        "mb-sm-0",
        "mb-sm-1",
        "mb-sm-2",
        "mb-sm-3",
        "mb-sm-4",
        "mb-sm-5",
        "mb-sm-auto",
        "mb-xl-0",
        "mb-xl-1",
        "mb-xl-2",
        "mb-xl-3",
        "mb-xl-4",
        "mb-xl-5",
        "mb-xl-auto",
        "mb-xxl-0",
        "mb-xxl-1",
        "mb-xxl-2",
        "mb-xxl-3",
        "mb-xxl-4",
        "mb-xxl-5",
        "mb-xxl-auto",
        "me-0",
        "me-1",
        "me-2",
        "me-3",
        "me-4",
        "me-5",
        "me-auto",
        "me-lg-0",
        "me-lg-1",
        "me-lg-2",
        "me-lg-3",
        "me-lg-4",
        "me-lg-5",
        "me-lg-auto",
        "me-md-0",
        "me-md-1",
        "me-md-2",
        "me-md-3",
        "me-md-4",
        "me-md-5",
        "me-md-auto",
        "me-sm-0",
        "me-sm-1",
        "me-sm-2",
        "me-sm-3",
        "me-sm-4",
        "me-sm-5",
        "me-sm-auto",
        "me-xl-0",
        "me-xl-1",
        "me-xl-2",
        "me-xl-3",
        "me-xl-4",
        "me-xl-5",
        "me-xl-auto",
        "me-xxl-0",
        "me-xxl-1",
        "me-xxl-2",
        "me-xxl-3",
        "me-xxl-4",
        "me-xxl-5",
        "me-xxl-auto",
        "mh-100",
        "min-vh-100",
        "min-vw-100",
        "modal",
        "modal-backdrop",
        "modal-body",
        "modal-content",
        "modal-dialog",
        "modal-dialog-centered",
        "modal-dialog-scrollable",
        "modal-footer",
        "modal-fullscreen",
        "modal-fullscreen-lg-down",
        "modal-fullscreen-md-down",
        "modal-fullscreen-sm-down",
        "modal-fullscreen-xl-down",
        "modal-fullscreen-xxl-down",
        "modal-header",
        "modal-lg",
        "modal-sm",
        "modal-static",
        "modal-title",
        "modal-xl",
        "ms-0",
        "ms-1",
        "ms-2",
        "ms-3",
        "ms-4",
        "ms-5",
        "ms-auto",
        "ms-lg-0",
        "ms-lg-1",
        "ms-lg-2",
        "ms-lg-3",
        "ms-lg-4",
        "ms-lg-5",
        "ms-lg-auto",
        "ms-md-0",
        "ms-md-1",
        "ms-md-2",
        "ms-md-3",
        "ms-md-4",
        "ms-md-5",
        "ms-md-auto",
        "ms-sm-0",
        "ms-sm-1",
        "ms-sm-2",
        "ms-sm-3",
        "ms-sm-4",
        "ms-sm-5",
        "ms-sm-auto",
        "ms-xl-0",
        "ms-xl-1",
        "ms-xl-2",
        "ms-xl-3",
        "ms-xl-4",
        "ms-xl-5",
        "ms-xl-auto",
        "ms-xxl-0",
        "ms-xxl-1",
        "ms-xxl-2",
        "ms-xxl-3",
        "ms-xxl-4",
        "ms-xxl-5",
        "ms-xxl-auto",
        "mt-0",
        "mt-1",
        "mt-2",
        "mt-3",
        "mt-4",
        "mt-5",
        "mt-auto",
        "mt-lg-0",
        "mt-lg-1",
        "mt-lg-2",
        "mt-lg-3",
        "mt-lg-4",
        "mt-lg-5",
        "mt-lg-auto",
        "mt-md-0",
        "mt-md-1",
        "mt-md-2",
        "mt-md-3",
        "mt-md-4",
        "mt-md-5",
        "mt-md-auto",
        "mt-sm-0",
        "mt-sm-1",
        "mt-sm-2",
        "mt-sm-3",
        "mt-sm-4",
        "mt-sm-5",
        "mt-sm-auto",
        "mt-xl-0",
        "mt-xl-1",
        "mt-xl-2",
        "mt-xl-3",
        "mt-xl-4",
        "mt-xl-5",
        "mt-xl-auto",
        "mt-xxl-0",
        "mt-xxl-1",
        "mt-xxl-2",
        "mt-xxl-3",
        "mt-xxl-4",
        "mt-xxl-5",
        "mt-xxl-auto",
        "mw-100",
        "mx-0",
        "mx-1",
        "mx-2",
        "mx-3",
        "mx-4",
        "mx-5",
        "mx-auto",
        "mx-lg-0",
        "mx-lg-1",
        "mx-lg-2",
        "mx-lg-3",
        "mx-lg-4",
        "mx-lg-5",
        "mx-lg-auto",
        "mx-md-0",
        "mx-md-1",
        "mx-md-2",
        "mx-md-3",
        "mx-md-4",
        "mx-md-5",
        "mx-md-auto",
        "mx-sm-0",
        "mx-sm-1",
        "mx-sm-2",
        "mx-sm-3",
        "mx-sm-4",
        "mx-sm-5",
        "mx-sm-auto",
        "mx-xl-0",
        "mx-xl-1",
        "mx-xl-2",
        "mx-xl-3",
        "mx-xl-4",
        "mx-xl-5",
        "mx-xl-auto",
        "mx-xxl-0",
        "mx-xxl-1",
        "mx-xxl-2",
        "mx-xxl-3",
        "mx-xxl-4",
        "mx-xxl-5",
        "mx-xxl-auto",
        "my-0",
        "my-1",
        "my-2",
        "my-3",
        "my-4",
        "my-5",
        "my-auto",
        "my-lg-0",
        "my-lg-1",
        "my-lg-2",
        "my-lg-3",
        "my-lg-4",
        "my-lg-5",
        "my-lg-auto",
        "my-md-0",
        "my-md-1",
        "my-md-2",
        "my-md-3",
        "my-md-4",
        "my-md-5",
        "my-md-auto",
        "my-sm-0",
        "my-sm-1",
        "my-sm-2",
        "my-sm-3",
        "my-sm-4",
        "my-sm-5",
        "my-sm-auto",
        "my-xl-0",
        "my-xl-1",
        "my-xl-2",
        "my-xl-3",
        "my-xl-4",
        "my-xl-5",
        "my-xl-auto",
        "my-xxl-0",
        "my-xxl-1",
        "my-xxl-2",
        "my-xxl-3",
        "my-xxl-4",
        "my-xxl-5",
        "my-xxl-auto",
        "nav",
        "nav-fill",
        "nav-item",
        "nav-justified",
        "nav-link",
        "nav-pills",
        "nav-tabs",
        "navbar",
        "navbar-brand",
        "navbar-collapse",
        "navbar-dark",
        "navbar-expand",
        "navbar-expand-lg",
        "navbar-expand-md",
        "navbar-expand-sm",
        "navbar-expand-xl",
        "navbar-expand-xxl",
        "navbar-nav",
        "navbar-nav-scroll",
        "navbar-text",
        "navbar-toggler",
        "navbar-toggler-icon",
        "offcanvas",
        "offcanvas-backdrop",
        "offcanvas-body",
        "offcanvas-bottom",
        "offcanvas-end",
        "offcanvas-header",
        "offcanvas-lg",
        "offcanvas-md",
        "offcanvas-sm",
        "offcanvas-start",
        "offcanvas-title",
        "offcanvas-top",
        "offcanvas-xl",
        "offcanvas-xxl",
        "offset-1",
        "offset-2",
        "offset-3",
        "offset-4",
        "offset-5",
        "offset-6",
        "offset-7",
        "offset-8",
        "offset-9",
        "offset-10",
        "offset-11",
        "offset-lg-0",
        "offset-lg-1",
        "offset-lg-2",
        "offset-lg-3",
        "offset-lg-4",
        "offset-lg-5",
        "offset-lg-6",
        "offset-lg-7",
        "offset-lg-8",
        "offset-lg-9",
        "offset-lg-10",
        "offset-lg-11",
        "offset-md-0",
        "offset-md-1",
        "offset-md-2",
        "offset-md-3",
        "offset-md-4",
        "offset-md-5",
        "offset-md-6",
        "offset-md-7",
        "offset-md-8",
        "offset-md-9",
        "offset-md-10",
        "offset-md-11",
        "offset-sm-0",
        "offset-sm-1",
        "offset-sm-2",
        "offset-sm-3",
        "offset-sm-4",
        "offset-sm-5",
        "offset-sm-6",
        "offset-sm-7",
        "offset-sm-8",
        "offset-sm-9",
        "offset-sm-10",
        "offset-sm-11",
        "offset-xl-0",
        "offset-xl-1",
        "offset-xl-2",
        "offset-xl-3",
        "offset-xl-4",
        "offset-xl-5",
        "offset-xl-6",
        "offset-xl-7",
        "offset-xl-8",
        "offset-xl-9",
        "offset-xl-10",
        "offset-xl-11",
        "offset-xxl-0",
        "offset-xxl-1",
        "offset-xxl-2",
        "offset-xxl-3",
        "offset-xxl-4",
        "offset-xxl-5",
        "offset-xxl-6",
        "offset-xxl-7",
        "offset-xxl-8",
        "offset-xxl-9",
        "offset-xxl-10",
        "offset-xxl-11",
        "opacity-0",
        "opacity-25",
        "opacity-50",
        "opacity-75",
        "opacity-100",
        "order-0",
        "order-1",
        "order-2",
        "order-3",
        "order-4",
        "order-5",
        "order-first",
        "order-last",
        "order-lg-0",
        "order-lg-1",
        "order-lg-2",
        "order-lg-3",
        "order-lg-4",
        "order-lg-5",
        "order-lg-first",
        "order-lg-last",
        "order-md-0",
        "order-md-1",
        "order-md-2",
        "order-md-3",
        "order-md-4",
        "order-md-5",
        "order-md-first",
        "order-md-last",
        "order-sm-0",
        "order-sm-1",
        "order-sm-2",
        "order-sm-3",
        "order-sm-4",
        "order-sm-5",
        "order-sm-first",
        "order-sm-last",
        "order-xl-0",
        "order-xl-1",
        "order-xl-2",
        "order-xl-3",
        "order-xl-4",
        "order-xl-5",
        "order-xl-first",
        "order-xl-last",
        "order-xxl-0",
        "order-xxl-1",
        "order-xxl-2",
        "order-xxl-3",
        "order-xxl-4",
        "order-xxl-5",
        "order-xxl-first",
        "order-xxl-last",
        "overflow-auto",
        "overflow-hidden",
        "overflow-scroll",
        "overflow-visible",
        "p-0",
        "p-1",
        "p-2",
        "p-3",
        "p-4",
        "p-5",
        "p-lg-0",
        "p-lg-1",
        "p-lg-2",
        "p-lg-3",
        "p-lg-4",
        "p-lg-5",
        "p-md-0",
        "p-md-1",
        "p-md-2",
        "p-md-3",
        "p-md-4",
        "p-md-5",
        "p-sm-0",
        "p-sm-1",
        "p-sm-2",
        "p-sm-3",
        "p-sm-4",
        "p-sm-5",
        "p-xl-0",
        "p-xl-1",
        "p-xl-2",
        "p-xl-3",
        "p-xl-4",
        "p-xl-5",
        "p-xxl-0",
        "p-xxl-1",
        "p-xxl-2",
        "p-xxl-3",
        "p-xxl-4",
        "p-xxl-5",
        "page-item",
        "page-link",
        "pagination",
        "pagination-lg",
        "pagination-sm",
        "pb-0",
        "pb-1",
        "pb-2",
        "pb-3",
        "pb-4",
        "pb-5",
        "pb-lg-0",
        "pb-lg-1",
        "pb-lg-2",
        "pb-lg-3",
        "pb-lg-4",
        "pb-lg-5",
        "pb-md-0",
        "pb-md-1",
        "pb-md-2",
        "pb-md-3",
        "pb-md-4",
        "pb-md-5",
        "pb-sm-0",
        "pb-sm-1",
        "pb-sm-2",
        "pb-sm-3",
        "pb-sm-4",
        "pb-sm-5",
        "pb-xl-0",
        "pb-xl-1",
        "pb-xl-2",
        "pb-xl-3",
        "pb-xl-4",
        "pb-xl-5",
        "pb-xxl-0",
        "pb-xxl-1",
        "pb-xxl-2",
        "pb-xxl-3",
        "pb-xxl-4",
        "pb-xxl-5",
        "pe-0",
        "pe-1",
        "pe-2",
        "pe-3",
        "pe-4",
        "pe-5",
        "pe-auto",
        "pe-lg-0",
        "pe-lg-1",
        "pe-lg-2",
        "pe-lg-3",
        "pe-lg-4",
        "pe-lg-5",
        "pe-md-0",
        "pe-md-1",
        "pe-md-2",
        "pe-md-3",
        "pe-md-4",
        "pe-md-5",
        "pe-none",
        "pe-sm-0",
        "pe-sm-1",
        "pe-sm-2",
        "pe-sm-3",
        "pe-sm-4",
        "pe-sm-5",
        "pe-xl-0",
        "pe-xl-1",
        "pe-xl-2",
        "pe-xl-3",
        "pe-xl-4",
        "pe-xl-5",
        "pe-xxl-0",
        "pe-xxl-1",
        "pe-xxl-2",
        "pe-xxl-3",
        "pe-xxl-4",
        "pe-xxl-5",
        "placeholder",
        "placeholder-glow",
        "placeholder-lg",
        "placeholder-sm",
        "placeholder-wave",
        "placeholder-xs",
        "pointer-event",
        "popover",
        "popover-arrow",
        "popover-body",
        "popover-header",
        "position-absolute",
        "position-fixed",
        "position-relative",
        "position-static",
        "position-sticky",
        "progress",
        "progress-bar",
        "progress-bar-animated",
        "progress-bar-striped",
        "ps-0",
        "ps-1",
        "ps-2",
        "ps-3",
        "ps-4",
        "ps-5",
        "ps-lg-0",
        "ps-lg-1",
        "ps-lg-2",
        "ps-lg-3",
        "ps-lg-4",
        "ps-lg-5",
        "ps-md-0",
        "ps-md-1",
        "ps-md-2",
        "ps-md-3",
        "ps-md-4",
        "ps-md-5",
        "ps-sm-0",
        "ps-sm-1",
        "ps-sm-2",
        "ps-sm-3",
        "ps-sm-4",
        "ps-sm-5",
        "ps-xl-0",
        "ps-xl-1",
        "ps-xl-2",
        "ps-xl-3",
        "ps-xl-4",
        "ps-xl-5",
        "ps-xxl-0",
        "ps-xxl-1",
        "ps-xxl-2",
        "ps-xxl-3",
        "ps-xxl-4",
        "ps-xxl-5",
        "pt-0",
        "pt-1",
        "pt-2",
        "pt-3",
        "pt-4",
        "pt-5",
        "pt-lg-0",
        "pt-lg-1",
        "pt-lg-2",
        "pt-lg-3",
        "pt-lg-4",
        "pt-lg-5",
        "pt-md-0",
        "pt-md-1",
        "pt-md-2",
        "pt-md-3",
        "pt-md-4",
        "pt-md-5",
        "pt-sm-0",
        "pt-sm-1",
        "pt-sm-2",
        "pt-sm-3",
        "pt-sm-4",
        "pt-sm-5",
        "pt-xl-0",
        "pt-xl-1",
        "pt-xl-2",
        "pt-xl-3",
        "pt-xl-4",
        "pt-xl-5",
        "pt-xxl-0",
        "pt-xxl-1",
        "pt-xxl-2",
        "pt-xxl-3",
        "pt-xxl-4",
        "pt-xxl-5",
        "px-0",
        "px-1",
        "px-2",
        "px-3",
        "px-4",
        "px-5",
        "px-lg-0",
        "px-lg-1",
        "px-lg-2",
        "px-lg-3",
        "px-lg-4",
        "px-lg-5",
        "px-md-0",
        "px-md-1",
        "px-md-2",
        "px-md-3",
        "px-md-4",
        "px-md-5",
        "px-sm-0",
        "px-sm-1",
        "px-sm-2",
        "px-sm-3",
        "px-sm-4",
        "px-sm-5",
        "px-xl-0",
        "px-xl-1",
        "px-xl-2",
        "px-xl-3",
        "px-xl-4",
        "px-xl-5",
        "px-xxl-0",
        "px-xxl-1",
        "px-xxl-2",
        "px-xxl-3",
        "px-xxl-4",
        "px-xxl-5",
        "py-0",
        "py-1",
        "py-2",
        "py-3",
        "py-4",
        "py-5",
        "py-lg-0",
        "py-lg-1",
        "py-lg-2",
        "py-lg-3",
        "py-lg-4",
        "py-lg-5",
        "py-md-0",
        "py-md-1",
        "py-md-2",
        "py-md-3",
        "py-md-4",
        "py-md-5",
        "py-sm-0",
        "py-sm-1",
        "py-sm-2",
        "py-sm-3",
        "py-sm-4",
        "py-sm-5",
        "py-xl-0",
        "py-xl-1",
        "py-xl-2",
        "py-xl-3",
        "py-xl-4",
        "py-xl-5",
        "py-xxl-0",
        "py-xxl-1",
        "py-xxl-2",
        "py-xxl-3",
        "py-xxl-4",
        "py-xxl-5",
        "ratio",
        "ratio-1x1",
        "ratio-4x3",
        "ratio-16x9",
        "ratio-21x9",
        "rounded",
        "rounded-0",
        "rounded-1",
        "rounded-2",
        "rounded-3",
        "rounded-4",
        "rounded-5",
        "rounded-bottom",
        "rounded-circle",
        "rounded-end",
        "rounded-pill",
        "rounded-start",
        "rounded-top",
        "row",
        "row-cols-1",
        "row-cols-2",
        "row-cols-3",
        "row-cols-4",
        "row-cols-5",
        "row-cols-6",
        "row-cols-auto",
        "row-cols-lg-1",
        "row-cols-lg-2",
        "row-cols-lg-3",
        "row-cols-lg-4",
        "row-cols-lg-5",
        "row-cols-lg-6",
        "row-cols-lg-auto",
        "row-cols-md-1",
        "row-cols-md-2",
        "row-cols-md-3",
        "row-cols-md-4",
        "row-cols-md-5",
        "row-cols-md-6",
        "row-cols-md-auto",
        "row-cols-sm-1",
        "row-cols-sm-2",
        "row-cols-sm-3",
        "row-cols-sm-4",
        "row-cols-sm-5",
        "row-cols-sm-6",
        "row-cols-sm-auto",
        "row-cols-xl-1",
        "row-cols-xl-2",
        "row-cols-xl-3",
        "row-cols-xl-4",
        "row-cols-xl-5",
        "row-cols-xl-6",
        "row-cols-xl-auto",
        "row-cols-xxl-1",
        "row-cols-xxl-2",
        "row-cols-xxl-3",
        "row-cols-xxl-4",
        "row-cols-xxl-5",
        "row-cols-xxl-6",
        "row-cols-xxl-auto",
        "shadow",
        "shadow-lg",
        "shadow-none",
        "shadow-sm",
        "show",
        "show-visible",
        "showing",
        "small",
        "spinner-border",
        "spinner-border-sm",
        "spinner-grow",
        "spinner-grow-sm",
        "start-0",
        "start-50",
        "start-100",
        "sticky-bottom",
        "sticky-lg-bottom",
        "sticky-lg-top",
        "sticky-md-bottom",
        "sticky-md-top",
        "sticky-sm-bottom",
        "sticky-sm-top",
        "sticky-top",
        "sticky-xl-bottom",
        "sticky-xl-top",
        "sticky-xxl-bottom",
        "sticky-xxl-top",
        "stretched-link",
        "tab-content",
        "tab-pane",
        "table",
        "table-active",
        "table-bordered",
        "table-borderless",
        "table-danger",
        "table-dark",
        "table-group-divider",
        "table-hover",
        "table-info",
        "table-light",
        "table-primary",
        "table-responsive",
        "table-responsive-lg",
        "table-responsive-md",
        "table-responsive-sm",
        "table-responsive-xl",
        "table-responsive-xxl",
        "table-secondary",
        "table-sm",
        "table-striped",
        "table-striped-columns",
        "table-success",
        "table-warning",
        "text-bg-danger",
        "text-bg-dark",
        "text-bg-info",
        "text-bg-light",
        "text-bg-primary",
        "text-bg-secondary",
        "text-bg-success",
        "text-bg-warning",
        "text-black",
        "text-black-50",
        "text-body",
        "text-break",
        "text-capitalize",
        "text-center",
        "text-danger",
        "text-dark",
        "text-decoration-line-through",
        "text-decoration-none",
        "text-decoration-underline",
        "text-end",
        "text-info",
        "text-lg-center",
        "text-lg-end",
        "text-lg-start",
        "text-light",
        "text-lowercase",
        "text-md-center",
        "text-md-end",
        "text-md-start",
        "text-muted",
        "text-nowrap",
        "text-opacity-25",
        "text-opacity-50",
        "text-opacity-75",
        "text-opacity-100",
        "text-primary",
        "text-reset",
        "text-secondary",
        "text-sm-center",
        "text-sm-end",
        "text-sm-start",
        "text-start",
        "text-success",
        "text-truncate",
        "text-uppercase",
        "text-warning",
        "text-white",
        "text-white-50",
        "text-wrap",
        "text-xl-center",
        "text-xl-end",
        "text-xl-start",
        "text-xxl-center",
        "text-xxl-end",
        "text-xxl-start",
        "toast",
        "toast-body",
        "toast-container",
        "toast-header",
        "tooltip",
        "tooltip-arrow",
        "tooltip-inner",
        "top-0",
        "top-50",
        "top-100",
        "translate-middle",
        "translate-middle-x",
        "translate-middle-y",
        "user-select-all",
        "user-select-auto",
        "user-select-none",
        "valid-feedback",
        "valid-tooltip",
        "vh-100",
        "visible",
        "visually-hidden",
        "visually-hidden-focusable",
        "vr",
        "vstack",
        "vw-100",
        "w-25",
        "w-50",
        "w-75",
        "w-100",
        "w-auto",
        "was-validated",
      ];
      let Be = !1;
      class Ce extends p.Component {
        constructor(e) {
          super(e);
          let t = e.attributes.bsClasses;
          (t = t ? t.split(" ") : []),
            (this.state = { tokens: t, suggestions: Ee });
        }
        render() {
          const { tokens: e, suggestions: t } = this.state,
            { attributes: l, setAttributes: n } = this.props,
            { bsClasses: o } = l;
          let a = !0;
          return (
            (a = !["core/block", "core/shortcode"].includes(this.props.name)),
            (a = Object(g.applyFilters)(
              "bootstrap.bootstrapClasses.allow",
              a,
              this.props
            )),
            a
              ? Object(p.createElement)(
                  x.InspectorControls,
                  null,
                  Object(p.createElement)(
                    d.PanelBody,
                    {
                      title: Object(p.createElement)(
                        "div",
                        { style: { position: "relative" } },
                        Object(p.createElement)(
                          "span",
                          null,
                          "Bootstrap classes"
                        ),
                        this.props.attributes.bsClasses
                          ? Object(p.createElement)(f, null)
                          : ""
                      ),
                      initialOpen: Be,
                      onToggle: () => (Be = !Be),
                    },
                    Object(p.createElement)(d.FormTokenField, {
                      value: e,
                      suggestions: t,
                      onChange: (e) => {
                        n({ bsClasses: e.join(" ") }),
                          this.setState({ tokens: e });
                      },
                      __experimentalValidateInput: (e) => Ee.includes(e),
                    })
                  )
                )
              : null
          );
        }
      }
      Object(g.addFilter)(
        "blocks.registerBlockType",
        "bootstrap/bootstrap-classes/attribute",
        function (e) {
          return (
            e.attributes.bsClasses ||
              (e.attributes.bsClasses = { type: "string", default: "" }),
            e
          );
        }
      );
      const Ie = Object(u.createHigherOrderComponent)(
        (e) =>
          function (t) {
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(e, t),
              Object(p.createElement)(Ce, t)
            );
          },
        "withAdvancedControls"
      );
      Object(g.addFilter)(
        "editor.BlockEdit",
        "bootstrap/bootstrap-classes/control",
        Ie
      );
      const Fe = Object(u.createHigherOrderComponent)(
        (e) => (t) =>
          t.attributes.bsClasses
            ? Object(p.createElement)(
                e,
                b()({}, t, {
                  className:
                    (t.className ? t.className + " " : "") +
                    t.attributes.bsClasses,
                })
              )
            : Object(p.createElement)(e, t),
        "withCustomClassName"
      );
      Object(g.addFilter)(
        "editor.BlockListBlock",
        "bootstrap/bootstrap-classes/editor-class",
        Fe
      ),
        Object(g.addFilter)(
          "blocks.getSaveContent.extraProps",
          "bootstrap/bootstrap-classes/frontend-class",
          function (e, t, l) {
            return (
              l.bsClasses &&
                (e.className =
                  (e.className ? e.className + " " : "") + l.bsClasses),
              e
            );
          }
        );
      var Se = l(10);
      Object(Se.registerFormatType)("bootstrap/mark", {
        title: "Highlight",
        tagName: "mark",
        className: null,
        edit: (e) => {
          const { isActive: t, value: l, onChange: n } = e;
          return Object(p.createElement)(x.RichTextToolbarButton, {
            icon: Object(p.createElement)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
              Object(p.createElement)("path", {
                fillRule: "evenodd",
                d: "M10.68 18.363l2.478 1.239L12.5 21s-.726 1-1.5 1H9.5c-.5 0 .14-1.444.303-1.796.359-.777.876-1.841.876-1.841zm4.768-15.314c.346-.13 6.062 2.78 6.161 3.144.115.423-3.41 8.872-3.917 10.173-.17.438-.875.81-1.686 1.241-.74.393-2.002 1.757-2.344 1.589-1.18-.58-1.792-.826-2.838-1.48-.426-.267-.154-1.737-.32-2.67-.142-.798-.798-1.737-.464-2.359.624-1.16 5-9.484 5.409-9.638zm.422 1.4l4.475 2.284-3.826 8.844-5.09-2.566 4.441-8.563z",
              }),
              Object(p.createElement)("path", {
                opacity: "0.3",
                d: "M1 21a1 1 0 011-1h9v2H2a1 1 0 01-1-1z",
              })
            ),
            title: "Highlight",
            onClick: () => {
              n(Object(Se.toggleFormat)(l, { type: "bootstrap/mark" }));
            },
            isActive: t,
          });
        },
      }),
        Object(Se.registerFormatType)("bootstrap/nbsp", {
          title: "Nonbreaking space",
          tagName: "span",
          className: "nbsp",
          edit: (e) => {
            const { value: t, onChange: l } = e,
              n = () => {
                const e = Object(Se.getTextContent)(t)
                    .slice(0, t.start)
                    .lastIndexOf(" "),
                  n = t.replacements[e];
                let o = [,];
                n && (o = [n]);
                const a = { formats: [,], replacements: o, text: " " },
                  r = Object(Se.insert)(t, a, t.start, t.end);
                l({ ...r, needsSelectionUpdate: !0 });
              };
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(x.RichTextShortcut, {
                type: "primaryShift",
                character: "SPACE",
                onUse: n,
              }),
              Object(p.createElement)(x.RichTextToolbarButton, {
                icon: Object(p.createElement)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                  },
                  Object(p.createElement)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0V0z",
                  }),
                  Object(p.createElement)("path", {
                    d: "M18 9v4H6V9H4v6h16V9z",
                  })
                ),
                title: "Nonbreaking space",
                onClick: n,
              })
            );
          },
        }),
        Object(Se.registerFormatType)("bootstrap/shy", {
          title: "Soft hyphen",
          tagName: "span",
          className: "shy",
          edit: (e) => {
            const { value: t, onChange: l } = e;
            return Object(p.createElement)(x.RichTextToolbarButton, {
              icon: Object(p.createElement)(
                "svg",
                {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                Object(p.createElement)(
                  "g",
                  { fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
                  Object(p.createElement)("path", {
                    d: "m4.8 7.7c-2.4 2.4-2.4 6.2 0 8.6",
                  }),
                  Object(p.createElement)("path", {
                    d: "m19.2 16.3c2.4-2.4 2.4-6.2 0-8.6",
                  }),
                  Object(p.createElement)("path", { d: "m7 12h10" })
                )
              ),
              title: "Soft hyphen",
              onClick: () => {
                const e = Object(Se.getTextContent)(t)
                    .slice(0, t.start)
                    .lastIndexOf("­"),
                  n = t.replacements[e];
                let o = [,];
                n && (o = [n]);
                const a = { formats: [,], replacements: o, text: "­" },
                  r = Object(Se.insert)(t, a, t.start, t.end);
                l({ ...r, needsSelectionUpdate: !0 });
              },
            });
          },
        }),
        Object(Se.registerFormatType)("bootstrap/uppercase", {
          title: "Uppercase",
          tagName: "span",
          className: "text-uppercase",
          edit: (e) => {
            const { isActive: t, value: l, onChange: n } = e;
            return Object(p.createElement)(x.RichTextToolbarButton, {
              icon: Object(p.createElement)(
                "svg",
                {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                Object(p.createElement)("path", {
                  d: "m8.5 17h-1.8v-9.5h-3.2v-1.5h8.3v1.5h-3.3z",
                }),
                Object(p.createElement)("path", {
                  d: "m17.2 17h-1.8v-9.5h-3.2v-1.5h8.3v1.5h-3.2v9.5z",
                })
              ),
              title: "​Uppercase",
              onClick: () => {
                n(Object(Se.toggleFormat)(l, { type: "bootstrap/uppercase" }));
              },
              isActive: t,
            });
          },
        }),
        Object(Se.registerFormatType)("bootstrap/capitalize", {
          title: "Capitalize",
          tagName: "span",
          className: "text-capitalize",
          edit: (e) => {
            const { isActive: t, value: l, onChange: n } = e;
            return Object(p.createElement)(x.RichTextToolbarButton, {
              icon: Object(p.createElement)(
                "svg",
                {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                Object(p.createElement)("path", {
                  d: "m9.9 17h-1.8v-9.5h-3.3v-1.5h8.3v1.5h-3.2z",
                }),
                Object(p.createElement)("path", {
                  d: "m17.7 15.7c.4 0 .9-.1 1.3-.2v1.3c-.2.1-.4.2-.8.2-.3.1-.6.1-1 .1-1.7 0-2.5-.9-2.5-2.6v-4.5h-1.1v-.8l1.2-.6.6-1.8h1.1v1.8h2.4v1.4h-2.4v4.5c0 .4.1.7.3.9.3.2.5.3.9.3z",
                })
              ),
              title: "​Capitalize",
              onClick: () => {
                n(Object(Se.toggleFormat)(l, { type: "bootstrap/capitalize" }));
              },
              isActive: t,
            });
          },
        }),
        Object(Se.registerFormatType)("bootstrap/lowercase", {
          title: "Lowercase",
          tagName: "span",
          className: "text-lowercase",
          edit: (e) => {
            const { isActive: t, value: l, onChange: n } = e;
            return Object(p.createElement)(x.RichTextToolbarButton, {
              icon: Object(p.createElement)(
                "svg",
                {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                Object(p.createElement)("path", {
                  d: "m10.3 15.7c.4 0 .9-.1 1.3-.2v1.3c-.2.1-.4.2-.8.2s-.6.1-1 .1c-1.7 0-2.5-.9-2.5-2.6v-4.5h-1.1v-.8l1.2-.6.6-1.8h1.1v1.8h2.4v1.4h-2.4v4.5c0 .4.1.7.3.9.3.2.6.3.9.3z",
                }),
                Object(p.createElement)("path", {
                  d: "m16.4 15.7c.4 0 .9-.1 1.3-.2v1.3c-.2.1-.4.2-.8.2-.3.1-.6.1-1 .1-1.7 0-2.5-.9-2.5-2.6v-4.5h-1.1v-.8l1.2-.6.6-1.8h1.1v1.8h2.4v1.4h-2.4v4.5c0 .4.1.7.3.9s.5.3.9.3z",
                })
              ),
              title: "​Lowercase",
              onClick: () => {
                n(Object(Se.toggleFormat)(l, { type: "bootstrap/lowercase" }));
              },
              isActive: t,
            });
          },
        }),
        Object(Se.registerFormatType)("bootstrap/stretched-link", {
          title: "Streched link",
          tagName: "span",
          className: "stretched-link",
          edit: (e) => {
            if (
              e.contentRef.current &&
              !e.contentRef.current.classList.contains(
                "wp-block-button__link"
              ) &&
              !e.contentRef.current.classList.contains("stretched-link")
            ) {
              const e = window.getSelection();
              if (0 === e.rangeCount) return !1;
              const t = e.getRangeAt(0);
              let l = t.startContainer,
                n = t.startContainer.nextElementSibling;
              for (; l.nodeType !== window.Node.ELEMENT_NODE; )
                l = l.parentNode;
              if (
                !(
                  ("a" === l.tagName.toLowerCase() &&
                    l.getAttribute("data-rich-text-format-boundary")) ||
                  (n && n.getAttribute("data-rich-text-format-boundary")) ||
                  l.classList.contains("wp-block-button__link") ||
                  l.classList.contains("stretched-link")
                )
              )
                return !1;
            }
            const { isActive: t, value: l, onChange: n } = e;
            return Object(p.createElement)(
              p.Fragment,
              null,
              Object(p.createElement)(
                x.BlockControls,
                null,
                Object(p.createElement)(
                  d.Toolbar,
                  null,
                  Object(p.createElement)(d.ToolbarButton, {
                    icon: Object(p.createElement)(
                      "svg",
                      {
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      Object(p.createElement)("path", {
                        d: "m1.6 6h1.4v-3h3v-1.4h-4.4zm19.4 14.9h-3v1.4h4.5v-4.3h-1.4zm-3-19.3v1.4h2.9v3h1.4v-4.4zm-15 16.4h-1.4v4.4h4.4v-1.4h-3z",
                      }),
                      Object(p.createElement)("path", {
                        d: "m15 7.7h-1.3v1.3h1.3c1.6 0 3 1.4 3 3s-1.4 3-3 3h-1.3v1.2h1.3c2.3 0 4.3-1.9 4.3-4.3s-2-4.2-4.3-4.2zm-9 4.3c0-1.6 1.4-3 3-3h1.3v-1.3h-1.3c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3h1.3v-1.3h-1.3c-1.6 0-3-1.4-3-3zm3.8.7h4.4v-1.2h-4.4z",
                      })
                    ),
                    title: "​​Stretched link",
                    onClick: () => {
                      n(
                        Object(Se.toggleFormat)(l, {
                          type: "bootstrap/stretched-link",
                        })
                      );
                    },
                    isActive: t,
                  })
                )
              )
            );
          },
        });
      var Ne = l(12),
        Ae = l(21);
      class Te extends p.Component {
        constructor() {
          super(...arguments),
            (this.triggerShortcut = this.triggerShortcut.bind(this));
        }
        triggerShortcut(e) {
          e.preventDefault();
          const {
              selectedBlock: t,
              updateBlockAttributes: l,
              replaceBlocks: n,
            } = this.props,
            o = parseInt(e.code.replace(/^\D+/g, ""));
          if ("core/heading" === t.name)
            o < 7
              ? l(t.clientId, { level: o })
              : n(
                  t.clientId,
                  Object(Ne.switchToBlockType)(t, "core/paragraph")
                );
          else {
            let e = Object(Ne.switchToBlockType)(t, "core/heading");
            n(t.clientId, e), l(e[0].clientId, { level: o });
          }
        }
        render() {
          const { selectedBlock: e } = this.props;
          if (void 0 === e) return !1;
          if (!["core/heading", "core/paragraph"].includes(e.name)) return !1;
          let t = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
            ? {
                "ctrl+option+1": this.triggerShortcut,
                "ctrl+option+2": this.triggerShortcut,
                "ctrl+option+3": this.triggerShortcut,
                "ctrl+option+4": this.triggerShortcut,
                "ctrl+option+5": this.triggerShortcut,
                "ctrl+option+6": this.triggerShortcut,
                "ctrl+option+7": this.triggerShortcut,
              }
            : {
                "shift+alt+1": this.triggerShortcut,
                "shift+alt+2": this.triggerShortcut,
                "shift+alt+3": this.triggerShortcut,
                "shift+alt+4": this.triggerShortcut,
                "shift+alt+5": this.triggerShortcut,
                "shift+alt+6": this.triggerShortcut,
                "shift+alt+7": this.triggerShortcut,
              };
          return Object(p.createElement)(
            p.Fragment,
            null,
            Object(p.createElement)(d.KeyboardShortcuts, {
              bindGlobal: !0,
              shortcuts: t,
            })
          );
        }
      }
      Object(Ae.registerPlugin)("botstrap-paragraph-headings-shortcuts", {
        icon: !1,
        render: Object(u.compose)([
          Object(k.withSelect)(() => {
            const { getSelectedBlock: e } = Object(k.select)(
                "core/block-editor"
              ),
              t = e();
            return t ? { selectedBlock: t } : {};
          }),
          Object(k.withDispatch)((e) => ({
            replaceBlocks: e("core/block-editor").replaceBlocks,
            updateBlockAttributes: e("core/block-editor").updateBlockAttributes,
          })),
          Object(u.ifCondition)(
            (e) =>
              "undefined" !== e.selectedBlock && "undefined" !== e.selectedBlock
          ),
          d.withSpokenMessages,
        ])(Te),
      });
      var Pe,
        ze = l(3);
      function He() {
        return (He = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var $e = l(13);
      if (void 0 === x.useInnerBlocksProps)
        var Me = x.__experimentalUseInnerBlocksProps;
      else Me = x.useInnerBlocksProps;
      const { name: De } = $e,
        _e = {
          ...$e,
          icon: function (e) {
            return ze.createElement(
              "svg",
              He(
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                e
              ),
              Pe ||
                (Pe = ze.createElement("path", {
                  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5z",
                }))
            );
          },
          edit: function (e) {
            let { attributes: t, setAttributes: l, clientId: n } = e;
            const { containerType: o, templateLock: a = !1 } = t,
              { hasChildBlocks: r } = Object(k.useSelect)(
                (e) => {
                  const { getBlockOrder: t } = e(x.store);
                  return { hasChildBlocks: t(n).length > 0 };
                },
                [n]
              ),
              s = Object(x.useBlockProps)({ className: o }),
              c = Me(s, {
                template: [["core/paragraph", {}]],
                templateLock: a,
                renderAppender: r ? void 0 : x.InnerBlocks.ButtonBlockAppender,
              });
            let i = [],
              m = Object.keys(bootstrapBlocks.breakpoints);
            return (
              m.sort(function (e, t) {
                return e - t;
              }),
              m.forEach((e) => {
                let t = bootstrapBlocks.breakpoints[e].prefix;
                i.push({
                  label: "container" + (t ? "-" + t : ""),
                  value: "container" + (t ? "-" + t : ""),
                });
              }),
              i.push({ label: "container-fluid", value: "container-fluid" }),
              Object(p.createElement)(
                p.Fragment,
                null,
                Object(p.createElement)(
                  x.InspectorControls,
                  null,
                  Object(p.createElement)(
                    d.PanelBody,
                    { title: "Container settings" },
                    Object(p.createElement)(
                      "div",
                      { style: { marginTop: "20px" } },
                      Object(p.createElement)(d.SelectControl, {
                        label: "Type",
                        value: o,
                        onChange: (e) => l({ containerType: e }),
                        options: i,
                      })
                    )
                  )
                ),
                Object(p.createElement)("div", c, c.children)
              )
            );
          },
          save: function (e) {
            let { attributes: t } = e;
            const l = t.containerType;
            return Object(p.createElement)(
              "div",
              x.useBlockProps.save({ className: l }),
              Object(p.createElement)(x.InnerBlocks.Content, null)
            );
          },
        };
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-container-class",
        function (e, t) {
          return "wp-block-bootstrap-container" == e ? "" : e;
        }
      ),
        l(23);
      var Ve,
        Le,
        Re,
        Ge,
        qe,
        Ue,
        We,
        Je,
        Ke,
        Ze,
        Qe,
        Xe,
        Ye,
        et,
        tt,
        lt,
        nt,
        ot,
        at,
        rt = Object(p.createElement)(
          z.SVG,
          { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
          Object(p.createElement)(z.Path, {
            d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z",
          })
        ),
        st = l(14);
      function ct(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const { alignItems: l, justifyContent: n, gutter: o, rowCols: a } = e;
        let r = [];
        l &&
          Object.keys(l).forEach(function (e) {
            l[e] && r.push(`align-items-${e ? e + "-" : ""}${l[e]}`);
          });
        let s = [];
        n &&
          Object.keys(n).forEach(function (e) {
            n[e] && s.push(`justify-content-${e ? e + "-" : ""}${n[e]}`);
          });
        let c = [];
        o &&
          Object.keys(o).forEach(function (e) {
            !1 !== o[e] && c.push(`g-${e ? e + "-" : ""}${o[e]}`);
          });
        let i = [];
        return (
          a &&
            Object.keys(a).forEach(function (e) {
              !1 !== a[e] && i.push(`row-cols-${e ? e + "-" : ""}${a[e]}`);
            }),
          v()("row", t, r, s, c, i)
        );
      }
      function it() {
        return (it = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function mt(e) {
        return ze.createElement(
          "svg",
          it({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, e),
          Ve ||
            (Ve = ze.createElement("path", {
              d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z",
            }))
        );
      }
      function bt() {
        return (bt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function pt(e) {
        return ze.createElement(
          "svg",
          bt({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, e),
          Le ||
            (Le = ze.createElement("path", {
              d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z",
            }))
        );
      }
      function dt() {
        return (dt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function ut(e) {
        return ze.createElement(
          "svg",
          dt({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, e),
          Re ||
            (Re = ze.createElement("path", {
              d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z",
            }))
        );
      }
      function gt() {
        return (gt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function xt(e) {
        return ze.createElement(
          "svg",
          gt({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          Ge ||
            (Ge = ze.createElement("path", {
              d: "M15 4H9v11h6zM4 18.5V20h16v-1.5z",
            })),
          qe || (qe = ze.createElement("path", { d: "M9 4h6v16H9z" })),
          Ue ||
            (Ue = ze.createElement("path", {
              d: "M4 18.5h16V20H4zM4 4h16v1.5H4z",
            }))
        );
      }
      function ft() {
        return (ft = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function ht(e) {
        return ze.createElement(
          "svg",
          ft({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, e),
          We ||
            (We = ze.createElement("path", {
              d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z",
            }))
        );
      }
      function vt() {
        return (vt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function yt(e) {
        return ze.createElement(
          "svg",
          vt({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          Je || (Je = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          Ke ||
            (Ke = ze.createElement("path", { d: "M4 4h4v16H4zM10 4h4v16h-4z" }))
        );
      }
      function Ot() {
        return (Ot = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function jt(e) {
        return ze.createElement(
          "svg",
          Ot({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          Ze || (Ze = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          Qe ||
            (Qe = ze.createElement("path", { d: "M7 4h4v16H7zM13 4h4v16h-4z" }))
        );
      }
      function wt() {
        return (wt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function kt(e) {
        return ze.createElement(
          "svg",
          wt({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          Xe || (Xe = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          Ye ||
            (Ye = ze.createElement("path", {
              d: "M10 4h4v16h-4zM16 4h4v16h-4z",
            }))
        );
      }
      function Et() {
        return (Et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function Bt(e) {
        return ze.createElement(
          "svg",
          Et({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          et || (et = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          tt ||
            (tt = ze.createElement("path", { d: "M4 4h4v16H4zM16 4h4v16h-4z" }))
        );
      }
      function Ct() {
        return (Ct = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function It(e) {
        return ze.createElement(
          "svg",
          Ct({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          lt || (lt = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          nt ||
            (nt = ze.createElement("path", { d: "M6 4h4v16H6zM14 4h4v16h-4z" }))
        );
      }
      function Ft() {
        return (Ft = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function St(e) {
        return ze.createElement(
          "svg",
          Ft({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
          ot || (ot = ze.createElement("path", { d: "M4 11h16v1.5H4z" })),
          at ||
            (at = ze.createElement("path", {
              d: "M6.5 4h4v16h-4zM13.5 4h4v16h-4z",
            }))
        );
      }
      if (void 0 === d.InputControl) var Nt = d.__experimentalInputControl;
      else Nt = d.InputControl;
      if (void 0 === x.useInnerBlocksProps)
        var At = x.__experimentalUseInnerBlocksProps;
      else At = x.useInnerBlocksProps;
      const Tt = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e) => e;
        return Array.from({ length: e }).map((e, l) => t(l));
      };
      function Pt(e) {
        const t = [],
          l = e.match(/[\d\a-zA-Z]+/g);
        return (
          l &&
            l.forEach((e) => {
              let l = "";
              switch (e) {
                case "a":
                  l = "auto";
                  break;
                case 0:
                case "0":
                case "g":
                  l = "";
                  break;
                default:
                  l = parseInt(e);
              }
              t.push(l);
            }),
          t
        );
      }
      var zt = Object(k.withDispatch)((e, t, l) => ({
        updateColumns(n, o) {
          const { clientId: a } = t,
            { replaceInnerBlocks: r } = e(x.store),
            { getBlocks: s } = l.select(x.store);
          let c = s(a);
          (c =
            o > n
              ? [
                  ...c,
                  ...Tt(o - n, () =>
                    Object(Ne.createBlock)("bootstrap/row-column", {}, [
                      Object(Ne.createBlock)("core/paragraph", {
                        placeholder: "Column content",
                      }),
                    ])
                  ),
                ]
              : (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                  return e.slice(0, -t || e.length);
                })(c, n - o)),
            r(a, c);
        },
        getPlaceholder() {
          let e = [
            "12",
            "6-6",
            "4-4-4",
            "3-3-3-3",
            "5-7",
            "3-6-3",
            "2-8-2",
            "g-a",
          ];
          return (
            (e = Object(g.applyFilters)("bootrap.row.layouts", e, t)),
            Object(p.createElement)(
              d.Placeholder,
              { label: "Bootstrap row", instructions: "Select some layout" },
              Object(p.createElement)(
                "div",
                { className: "w-100 pb-4" },
                Object(p.createElement)(
                  "div",
                  { className: "row g-4" },
                  e.map((e) => {
                    const t = Pt(e);
                    return Object(p.createElement)(
                      "div",
                      { key: "layout-" + e, className: "col-lg-2" },
                      Object(p.createElement)(
                        d.Button,
                        {
                          className: "d-block w-100 p-0 text-center",
                          onClick: () => this.setLayout(e),
                        },
                        Object(p.createElement)(
                          "div",
                          { className: "row g-0" },
                          t.map((t, l) =>
                            Object(p.createElement)(
                              "div",
                              {
                                key: `layout-${e}-${l}`,
                                className:
                                  "border p-2 col" + (t ? "-" + t : ""),
                              },
                              t ? ("auto" === t ? "a" : t) : "0"
                            )
                          )
                        )
                      )
                    );
                  })
                )
              ),
              Object(p.createElement)(
                "div",
                { className: "w-100" },
                Object(p.createElement)(Nt, {
                  autoFocus: !0,
                  label: "or enter your own:",
                  labelPosition: "top",
                  value: "",
                  type: "text",
                  isPressEnterToChange: !0,
                  onChange: (e) => this.setLayout(e),
                })
              ),
              Object(p.createElement)(
                "div",
                { className: "w-100 py-2" },
                Object(p.createElement)(
                  "div",
                  { className: "small text-muted" },
                  "Use any divider: ",
                  Object(p.createElement)("strong", null, "6+6"),
                  " or ",
                  Object(p.createElement)("strong", null, "5-2-2"),
                  " or ",
                  Object(p.createElement)("strong", null, "1/10/1"),
                  ".",
                  Object(p.createElement)("br", null),
                  "Use ",
                  Object(p.createElement)("strong", null, "g"),
                  " or ",
                  Object(p.createElement)("strong", null, "0"),
                  " for auto grow and ",
                  Object(p.createElement)("strong", null, "a"),
                  " for auto shrink column: ",
                  Object(p.createElement)("strong", null, "0+a")
                )
              )
            )
          );
        },
        setLayout(l) {
          const { replaceInnerBlocks: n } = e(x.store),
            o = Pt(l),
            a = [];
          let r = Object.values(bootstrapBlocks.breakpoints).filter(function (
            e
          ) {
            return e.default;
          })[0].prefix;
          o.forEach((e) => {
            a.push(
              Object(Ne.createBlock)(
                "bootstrap/row-column",
                { size: { [r]: e } },
                [
                  Object(Ne.createBlock)("core/paragraph", {
                    placeholder: "Column content",
                  }),
                ]
              )
            );
          }),
            n(t.clientId, a);
        },
      }))(function (e) {
        let {
          attributes: t,
          setAttributes: l,
          isSelected: n,
          updateColumns: o,
          getPlaceholder: a,
          setLayout: r,
          clientId: s,
        } = e;
        const { alignItems: c, justifyContent: i, gutter: m, rowCols: b } = t,
          { count: u } = Object(k.useSelect)(
            (e) => ({ count: e(x.store).getBlockCount(s) }),
            [s]
          ),
          g = ct(t),
          f = Object(x.useBlockProps)(),
          h = At(f, {
            allowedBlocks: ["bootstrap/row-column"],
            orientation: "horizontal",
            renderAppender: !1,
          }),
          v = {};
        let y = Object.keys(bootstrapBlocks.breakpoints);
        return (
          y.sort(function (e, t) {
            return t - e;
          }),
          y.forEach((e) => {
            let t = bootstrapBlocks.breakpoints[e].prefix;
            v[t] = c[t] || i[t] || m[t] || 0 === m[t || b[t]];
          }),
          Object(p.createElement)(
            p.Fragment,
            null,
            Object(p.createElement)(
              x.InspectorControls,
              null,
              Object(p.createElement)(
                d.PanelBody,
                null,
                Object(p.createElement)(d.RangeControl, {
                  label: "Columns",
                  value: u,
                  onChange: (e) => o(u, e),
                  min: 1,
                  max: Math.max(12, u),
                }),
                Object(p.createElement)(C, { breakpointsTabs: v }, (e) =>
                  Object(p.createElement)(
                    "div",
                    { style: { marginTop: "20px" } },
                    Object(p.createElement)(
                      d.BaseControl,
                      { label: "Vertical alignment (align-items)" },
                      Object(p.createElement)(
                        "div",
                        { style: { marginTop: "8px" } },
                        Object(p.createElement)(d.ToolbarGroup, {
                          controls: [
                            {
                              icon: mt,
                              title: "Top",
                              onClick: () =>
                                l({
                                  alignItems: {
                                    ...c,
                                    [e.name]: "start" !== c[e.name] && "start",
                                  },
                                }),
                              isActive: "start" === c[e.name],
                            },
                            {
                              icon: pt,
                              title: "Middle",
                              onClick: () =>
                                l({
                                  alignItems: {
                                    ...c,
                                    [e.name]:
                                      "center" !== c[e.name] && "center",
                                  },
                                }),
                              isActive: "center" === c[e.name],
                            },
                            {
                              icon: ut,
                              title: "Bottom",
                              onClick: () =>
                                l({
                                  alignItems: {
                                    ...c,
                                    [e.name]: "end" !== c[e.name] && "end",
                                  },
                                }),
                              isActive: "end" === c[e.name],
                            },
                            {
                              icon: xt,
                              title: "Stretch",
                              onClick: () =>
                                l({
                                  alignItems: {
                                    ...c,
                                    [e.name]:
                                      "stretch" !== c[e.name] && "stretch",
                                  },
                                }),
                              isActive: "stretch" === c[e.name],
                            },
                            {
                              icon: ht,
                              title: "Baseline",
                              onClick: () =>
                                l({
                                  alignItems: {
                                    ...c,
                                    [e.name]:
                                      "baseline" !== c[e.name] && "baseline",
                                  },
                                }),
                              isActive: "baseline" === c[e.name],
                            },
                          ],
                        })
                      )
                    ),
                    Object(p.createElement)(
                      d.BaseControl,
                      { label: "Horizontal alignment (justify-content)" },
                      Object(p.createElement)(
                        "div",
                        { style: { marginTop: "8px" } },
                        Object(p.createElement)(d.ToolbarGroup, {
                          controls: [
                            {
                              icon: yt,
                              title: "Start",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]: "start" !== i[e.name] && "start",
                                  },
                                }),
                              isActive: "start" === i[e.name],
                            },
                            {
                              icon: jt,
                              title: "Center",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]:
                                      "center" !== i[e.name] && "center",
                                  },
                                }),
                              isActive: "center" === i[e.name],
                            },
                            {
                              icon: kt,
                              title: "End",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]: "end" !== i[e.name] && "end",
                                  },
                                }),
                              isActive: "end" === i[e.name],
                            },
                            {
                              icon: Bt,
                              title: "Between",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]:
                                      "between" !== i[e.name] && "between",
                                  },
                                }),
                              isActive: "between" === i[e.name],
                            },
                            {
                              icon: It,
                              title: "Around",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]:
                                      "around" !== i[e.name] && "around",
                                  },
                                }),
                              isActive: "around" === i[e.name],
                            },
                            {
                              icon: St,
                              title: "Evenly",
                              onClick: () =>
                                l({
                                  justifyContent: {
                                    ...i,
                                    [e.name]:
                                      "evenly" !== i[e.name] && "evenly",
                                  },
                                }),
                              isActive: "evenly" === i[e.name],
                            },
                          ],
                        })
                      )
                    ),
                    Object(p.createElement)(
                      d.BaseControl,
                      { label: "Gutter" },
                      Object(p.createElement)(
                        "div",
                        { style: { marginTop: "8px" } },
                        Object(p.createElement)(
                          d.ButtonGroup,
                          null,
                          [0, 1, 2, 3, 4, 5].map((t) => {
                            const n = m[e.name] === t;
                            return Object(p.createElement)(
                              d.Button,
                              {
                                isPrimary: n,
                                isPressed: n,
                                onClick: () => {
                                  l({ gutter: { ...m, [e.name]: !n && t } });
                                },
                                key: `g_${e.name}_${t}`,
                              },
                              t
                            );
                          })
                        )
                      )
                    ),
                    Object(p.createElement)(
                      d.BaseControl,
                      { label: "Row columns" },
                      Object(p.createElement)(
                        "div",
                        { style: { marginTop: "8px" } },
                        Object(p.createElement)(
                          d.ButtonGroup,
                          null,
                          ["auto", 1, 2, 3, 4, 5, 6].map((t) => {
                            const n = b[e.name] === t;
                            return Object(p.createElement)(
                              d.Button,
                              {
                                isPrimary: n,
                                isPressed: n,
                                onClick: () => {
                                  l({ rowCols: { ...b, [e.name]: !n && t } });
                                },
                                key: `row_cols_${e.name}_${t}`,
                              },
                              t
                            );
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            Object(p.createElement)(
              "div",
              h,
              u > 0
                ? Object(p.createElement)(
                    p.Fragment,
                    null,
                    n
                      ? ""
                      : Object(p.createElement)(
                          "div",
                          { className: "row-quick-select" },
                          Object(p.createElement)(
                            d.Tooltip,
                            { text: "Select row" },
                            Object(p.createElement)(p.Fragment, null, "row")
                          )
                        ),
                    Object(p.createElement)("div", { className: g }, h.children)
                  )
                : a()
            )
          )
        );
      });
      const { name: Ht } = st,
        $t = {
          ...st,
          icon: rt,
          edit: zt,
          save: function (e) {
            let { attributes: t } = e;
            const l = (t.className ? t.className + " " : "") + ct(t);
            return Object(p.createElement)(
              "div",
              x.useBlockProps.save({ className: l }),
              Object(p.createElement)(x.InnerBlocks.Content, null)
            );
          },
        };
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-row-class",
        function (e, t) {
          return "wp-block-bootstrap-row" == e ? "" : e;
        }
      );
      var Mt = Object(p.createElement)(
        z.SVG,
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        Object(p.createElement)(z.Path, {
          d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z",
        })
      );
      function Dt(e) {
        const { size: t, offset: l, order: n, alignSelf: o } = e;
        let a = [];
        t &&
          Object.keys(t).forEach(function (e) {
            "false" !== t[e] &&
              a.push(
                "col" +
                  (e || t[e] ? "-" : "") +
                  e +
                  (e && t[e] ? "-" : "") +
                  t[e]
              );
          }),
          0 == a.length && a.push("col");
        let r = [];
        l &&
          Object.keys(l).forEach(function (e) {
            !1 !== l[e] && r.push(`offset-${e ? e + "-" : ""}${l[e]}`);
          });
        let s = [];
        n &&
          Object.keys(n).forEach(function (e) {
            !1 !== n[e] && s.push(`order-${e ? e + "-" : ""}${n[e]}`);
          });
        let c = [];
        return (
          o &&
            Object.keys(o).forEach(function (e) {
              o[e] && c.push(`align-self-${e ? e + "-" : ""}${o[e]}`);
            }),
          v()(a, r, s, c)
        );
      }
      if (void 0 === x.useInnerBlocksProps)
        var _t = x.__experimentalUseInnerBlocksProps;
      else _t = x.useInnerBlocksProps;
      const Vt = function () {
          const e = [
            { label: "Inherit from smaller", value: !1 },
            { label: "Auto grow", value: "" },
            { label: "Auto shrink", value: "auto" },
          ];
          for (let t = 1; t <= 12; t++)
            e.push({
              label:
                t +
                (1 === t ? " Column " : " Columns ") +
                "(" +
                Math.round(((100 * t) / 12) * 100) / 100 +
                "%)",
              value: t,
            });
          return e;
        },
        Lt = function () {
          const e = [{ label: "Inherit from smaller", value: !1 }];
          for (let t = 0; t <= 11; t++)
            e.push({
              label:
                t +
                (1 === t ? " Column " : " Columns ") +
                "(" +
                Math.round(((100 * t) / 12) * 100) / 100 +
                "%)",
              value: t,
            });
          return e;
        };
      var Rt = l(15);
      const { name: Gt } = Rt,
        qt = {
          ...Rt,
          icon: Mt,
          edit: function (e) {
            let {
              attributes: t,
              setAttributes: l,
              isSelected: n,
              clientId: o,
            } = e;
            const {
                size: a,
                offset: r,
                order: s,
                alignSelf: c,
                templateLock: i = !1,
              } = t,
              m = Dt(t),
              {
                columnsIds: b,
                hasChildBlocks: u,
                rootClientId: g,
              } = Object(k.useSelect)(
                (e) => {
                  const { getBlockOrder: t, getBlockRootClientId: l } = e(
                      x.store
                    ),
                    n = l(o);
                  return {
                    hasChildBlocks: t(o).length > 0,
                    rootClientId: n,
                    columnsIds: t(n),
                  };
                },
                [o]
              ),
              f = Object(x.useBlockProps)({ className: m }),
              h = _t(f, {
                templateLock: i,
                renderAppender: u ? void 0 : x.InnerBlocks.ButtonBlockAppender,
              }),
              v = {};
            let y = Object.keys(bootstrapBlocks.breakpoints);
            return (
              y.sort(function (e, t) {
                return t - e;
              }),
              y.forEach((e) => {
                let t = bootstrapBlocks.breakpoints[e].prefix;
                v[t] =
                  (a[t] && "false" !== a[t]) ||
                  "" === a[t] ||
                  (r[t] && "false" !== r[t]) ||
                  s[t] ||
                  0 === s[t] ||
                  c[t];
              }),
              Object(p.createElement)(
                p.Fragment,
                null,
                Object(p.createElement)(
                  x.InspectorControls,
                  null,
                  Object(p.createElement)(
                    d.PanelBody,
                    { title: "Column settings" },
                    Object(p.createElement)(C, { breakpointsTabs: v }, (e) =>
                      Object(p.createElement)(
                        "div",
                        { style: { marginTop: "20px" } },
                        Object(p.createElement)(d.SelectControl, {
                          label: "Size",
                          value: a[e.name],
                          onChange: (t) => l({ size: { ...a, [e.name]: t } }),
                          options: Vt(),
                        }),
                        Object(p.createElement)(d.SelectControl, {
                          label: "Offset",
                          value: r[e.name],
                          onChange: (t) => l({ offset: { ...r, [e.name]: t } }),
                          options: Lt(),
                        }),
                        Object(p.createElement)(
                          d.BaseControl,
                          { label: "Order" },
                          Object(p.createElement)(
                            "div",
                            { style: { marginTop: "8px" } },
                            Object(p.createElement)(
                              d.ButtonGroup,
                              null,
                              ["first", 0, 1, 2, 3, 4, 5, "last"].map((t) => {
                                const n = s[e.name] === t;
                                return Object(p.createElement)(
                                  d.Button,
                                  {
                                    isSmall: !0,
                                    isPrimary: n,
                                    isPressed: n,
                                    onClick: () => {
                                      l({ order: { ...s, [e.name]: !n && t } });
                                    },
                                    key: `order_${e.name}_${t}`,
                                  },
                                  t
                                );
                              })
                            )
                          )
                        ),
                        Object(p.createElement)(
                          d.BaseControl,
                          { label: "Vertical alignment (align-self)" },
                          Object(p.createElement)(
                            "div",
                            { style: { marginTop: "8px" } },
                            Object(p.createElement)(d.ToolbarGroup, {
                              controls: [
                                {
                                  icon: mt,
                                  title: "Top",
                                  onClick: () =>
                                    l({
                                      alignSelf: {
                                        ...c,
                                        [e.name]:
                                          "start" !== c[e.name] && "start",
                                      },
                                    }),
                                  isActive: "start" === c[e.name],
                                },
                                {
                                  icon: pt,
                                  title: "Middle",
                                  onClick: () =>
                                    l({
                                      alignSelf: {
                                        ...c,
                                        [e.name]:
                                          "center" !== c[e.name] && "center",
                                      },
                                    }),
                                  isActive: "center" === c[e.name],
                                },
                                {
                                  icon: ut,
                                  title: "Bottom",
                                  onClick: () =>
                                    l({
                                      alignSelf: {
                                        ...c,
                                        [e.name]: "end" !== c[e.name] && "end",
                                      },
                                    }),
                                  isActive: "end" === c[e.name],
                                },
                                {
                                  icon: xt,
                                  title: "Stretch",
                                  onClick: () =>
                                    l({
                                      alignSelf: {
                                        ...c,
                                        [e.name]:
                                          "stretch" !== c[e.name] && "stretch",
                                      },
                                    }),
                                  isActive: "stretch" === c[e.name],
                                },
                                {
                                  icon: ht,
                                  title: "Baseline",
                                  onClick: () =>
                                    l({
                                      alignSelf: {
                                        ...c,
                                        [e.name]:
                                          "baseline" !== c[e.name] &&
                                          "baseline",
                                      },
                                    }),
                                  isActive: "baseline" === c[e.name],
                                },
                              ],
                            })
                          )
                        )
                      )
                    )
                  )
                ),
                Object(p.createElement)(
                  "div",
                  h,
                  n
                    ? ""
                    : Object(p.createElement)(
                        "div",
                        { className: "column-quick-select" },
                        Object(p.createElement)(
                          d.Tooltip,
                          { text: "Select column" },
                          Object(p.createElement)(p.Fragment, null, "col")
                        )
                      ),
                  h.children
                )
              )
            );
          },
          save: function (e) {
            let { attributes: t } = e;
            const l = (t.className ? t.className + " " : "") + Dt(t);
            return Object(p.createElement)(
              "div",
              x.useBlockProps.save({ className: l }),
              Object(p.createElement)(x.InnerBlocks.Content, null)
            );
          },
        };
      var Ut;
      function Wt() {
        return (Wt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function Jt(e) {
        return ze.createElement(
          "svg",
          Wt({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, e),
          Ut ||
            (Ut = ze.createElement("path", {
              d: "M14 4V2H0v13h16V4h-2zm-4-1h3v1h-3V3zM6 3h3v1H6V3zm9 11H1V3h4v2h10v9z",
            }))
        );
      }
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-row-column-class",
        function (e, t) {
          return "wp-block-bootstrap-row-column" == e ? "" : e;
        }
      ),
        l(24);
      var Kt = l(16);
      function Zt(e) {
        let t = { parent: [], ul: [] };
        return (
          e &&
            Object.keys(e).forEach(function (l) {
              e[l] &&
                (t.parent.push(
                  `d-${l ? l + "-" : ""}${
                    "horizontal" === e[l] ? "block" : "flex"
                  }`
                ),
                t.ul.push(
                  `flex-${l ? l + "-" : ""}${
                    "horizontal" === e[l] ? "row" : "column"
                  }`
                ));
            }),
          (t.parent = v()(t.parent)),
          (t.ul = v()(t.ul)),
          t
        );
      }
      if (void 0 === x.useInnerBlocksProps)
        var Qt = x.__experimentalUseInnerBlocksProps;
      else Qt = x.useInnerBlocksProps;
      var Xt = Object(k.withDispatch)((e, t, l) => ({
        updateInnerBlocksAttributes() {
          const { clientId: n, attributes: o } = t,
            { anchor: a } = o,
            { updateBlockAttributes: r } = e(x.store),
            { getBlocks: s } = l.select(x.store);
          s(n).forEach((e, t) =>
            r(e.clientId, {
              anchor: `${a}-${t}-pane`,
              tabItemIndex: t,
              tabRootId: a,
            })
          );
        },
        activateTab(n) {
          const { clientId: o } = t,
            { getBlocks: a } = l.select(x.store),
            { updateBlockAttributes: r } = e("core/block-editor");
          a(o).forEach((e, t) => {
            r(e.clientId, { tabActiveInEditor: n == t });
          }),
            t.setAttributes({ tabsActive: n });
        },
        addTab() {
          let e = [...t.attributes.tabs];
          e.push("New tab"),
            t.setAttributes({ tabs: e }),
            this.activateTab(e.length - 1);
        },
        removeTab(n) {
          const { clientId: o } = t,
            { replaceInnerBlocks: a } = e(x.store),
            { getBlocks: r } = l.select(x.store),
            { updateBlockAttributes: s } = e("core/block-editor");
          let c = r(o);
          c.splice(n, 1),
            a(o, c),
            c.forEach((e, t) => {
              s(e.clientId, { tabItemIndex: t });
            });
          let i = [...t.attributes.tabs];
          i.splice(n, 1), t.setAttributes({ tabs: i });
        },
        moveTab(n, o) {
          const { clientId: a, attributes: r } = t,
            { replaceInnerBlocks: s } = e(x.store),
            { getBlocks: c } = l.select(x.store),
            { updateBlockAttributes: i } = e("core/block-editor");
          let m = c(a),
            b = n + o;
          if (b >= 0 && b < m.length) {
            ([m[n], m[b]] = [m[b], m[n]]),
              m.forEach((e, t) => {
                e.isValid ||
                  ((e.attributes = {
                    ...e.attributes,
                    anchor: `${r.anchor}-${t}-pane`,
                    tabItemIndex: t,
                    tabRootId: r.anchor,
                  }),
                  (e.isValid = !0),
                  (e.originalContent = ""),
                  (e.validationIssues = []),
                  delete e.__unstableBlockSource);
              }),
              s(a, m),
              m.forEach((e, t) => {
                i(e.clientId, { tabItemIndex: t });
              });
            let e = [...t.attributes.tabs];
            ([e[n], e[b]] = [e[b], e[n]]), t.setAttributes({ tabs: e });
          }
        },
        updateTab(n, o) {
          const { clientId: a } = t,
            { getBlocks: r } = l.select(x.store),
            { updateBlockAttributes: s } = e("core/block-editor");
          s(r(a)[n].clientId, { tabTitle: o, tabItemIndex: n });
        },
      }))(function (e) {
        let {
          attributes: t,
          setAttributes: l,
          isSelected: n,
          updateInnerBlocksAttributes: o,
          addTab: a,
          removeTab: r,
          moveTab: s,
          activateTab: c,
          updateTab: i,
          clientId: m,
        } = e;
        const {
          anchor: u,
          tabs: g,
          tabsStyle: f,
          tabsActive: h,
          layout: v,
        } = t;
        Object(p.useEffect)(
          (e) => {
            (u && "bs-tabs-" != u.substr(0, 9)) ||
              l({ anchor: "bs-tabs-" + F.a.unique(m) }),
              o();
          },
          [m, u]
        );
        const y = Zt(v),
          O = Object(x.useBlockProps)({
            className: !!y.parent.length && y.parent,
          }),
          j = Qt(O, {
            allowedBlocks: ["bootstrap/tabs-tab"],
            template: g.map((e, t) => [
              "bootstrap/tabs-tab",
              {
                tabRootId: u,
                tabItemIndex: t,
                tabTitle: e,
                tabActiveInEditor: !t,
              },
            ]),
            templateLock: "all",
            renderAppender: !1,
          });
        let w = "nav nav-" + f + (y.ul.length ? " " + y.ul : "");
        const k = {};
        let E = Object.keys(bootstrapBlocks.breakpoints);
        return (
          E.sort(function (e, t) {
            return t - e;
          }),
          E.forEach((e) => {
            let t = bootstrapBlocks.breakpoints[e].prefix;
            k[t] = v[t];
          }),
          Object(p.createElement)(
            p.Fragment,
            null,
            Object(p.createElement)(
              x.InspectorControls,
              null,
              Object(p.createElement)(
                d.PanelBody,
                null,
                Object(p.createElement)(d.SelectControl, {
                  label: "Style",
                  value: f,
                  onChange: (e) => l({ tabsStyle: e }),
                  options: [
                    { label: "tabs", value: "tabs" },
                    { label: "pills", value: "pills" },
                    { label: "text", value: "text" },
                  ],
                }),
                Object(p.createElement)(C, { breakpointsTabs: k }, (e) =>
                  Object(p.createElement)(
                    "div",
                    { style: { marginTop: "20px" } },
                    Object(p.createElement)(d.SelectControl, {
                      label: "Layout",
                      value: v[e.name],
                      onChange: (t) => l({ layout: { ...v, [e.name]: t } }),
                      options: [
                        { label: "Inherit from smaller", value: "" },
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                      ],
                    }),
                    Object(p.createElement)(
                      "small",
                      { style: { display: "block", marginTop: "-20px" } },
                      "*horizontal by default"
                    )
                  )
                )
              )
            ),
            Object(p.createElement)(
              "div",
              j,
              Object(p.createElement)(
                "ul",
                { className: w + "farrukh", role: "tablist" },
                g.map((e, t) => {
                  const n = t == h,
                    o = u + "-" + t;
                  return Object(p.createElement)(
                    "li",
                    {
                      key: "tab_" + o,
                      className: "nav-item",
                      role: "presentation",
                    },
                    Object(p.createElement)(
                      "a",
                      {
                        id: o + "-tab",
                        "data-bs-target": "#" + o + "-pane",
                        "aria-controls": o + "-tab",
                        "aria-selected": n ? " true" : "false",
                        "data-bs-toggle": "tab",
                        type: "button",
                        role: "tab",
                        className: "nav-link" + (n ? " active" : ""),
                      },
                      Object(p.createElement)(
                        x.RichText,
                        b()(
                          {
                            tagName: "span",
                            placeholder: "Tab label",
                            value: e,
                          },
                          bootstrapBlocks.useOnFocus && {
                            onFocus: () => {
                              c(t);
                            },
                          },
                          !bootstrapBlocks.useOnFocus && {
                            unstableOnFocus: () => {
                              c(t);
                            },
                          },
                          {
                            onChange: (e) => {
                              i(t, e);
                              let n = [...g];
                              (n[t] = e), l({ tabs: n });
                            },
                            withoutInteractiveFormatting: !0,
                          }
                        )
                      )
                    ),
                    Object(p.createElement)(
                      "a",
                      {
                        type: "button",
                        className: "moveTabLeft",
                        title: "move left",
                        onClick: (e) => {
                          e.preventDefault(), s(t, -1);
                        },
                      },
                      "‹"
                    ),
                    Object(p.createElement)(
                      "a",
                      {
                        type: "button",
                        className: "moveTabRight",
                        title: "move right",
                        onClick: (e) => {
                          e.preventDefault(), s(t, 1);
                        },
                      },
                      "›"
                    ),
                    Object(p.createElement)(
                      "a",
                      {
                        type: "button",
                        className: "removeTab",
                        title: "remove",
                        onClick: (e) => {
                          e.preventDefault(), r(t);
                        },
                      },
                      "×"
                    )
                  );
                }),
                n
                  ? Object(p.createElement)(
                      d.Tooltip,
                      { text: "Add Tab" },
                      Object(p.createElement)(d.Button, {
                        icon: Object(p.createElement)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                          },
                          Object(p.createElement)("path", {
                            d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z",
                          })
                        ),
                        onClick: () => a(),
                      })
                    )
                  : ""
              ),
              Object(p.createElement)(
                "div",
                { className: "tab-content" },
                j.children
              )
            )
          )
        );
      });
      const { name: Yt } = Kt,
        el = {
          ...Kt,
          icon: Jt,
          edit: Xt,
          save: function (e) {
            let { attributes: t } = e;
            const { anchor: l, tabs: n, tabsStyle: o, layout: a } = t,
              r = Zt(a);
            let s =
              (t.className ? t.className + " " : "") +
              "nav nav-" +
              o +
              (r.ul.length ? " " + r.ul : "");
            return Object(p.createElement)(
              "div",
              b()(
                {},
                x.useBlockProps.save({
                  className: (!!r.parent.length && r.parent) || "tabs-main-ul",
                }),
                { id: l }
              ),
              Object(p.createElement)(
                "ul",
                { className: s, role: "tablist" },
                n.map((e, t) => {
                  const n = l + "-" + t;
                  return Object(p.createElement)(
                    "li",
                    {
                      key: "tab_" + n,
                      className: "nav-item",
                      role: "presentation",
                    },
                    Object(p.createElement)(x.RichText.Content, {
                      tagName: "a",
                      href: "#",
                      id: n + "-tab",
                      "data-bs-target": "#" + n + "-pane",
                      "aria-controls": n + "-pane",
                      "aria-selected": 0 == t ? " true" : "false",
                      "data-bs-toggle": "tab",
                      type: "button",
                      role: "tab",
                      className: "nav-link" + (0 == t ? " active" : ""),
                      value: e,
                    })
                  );
                })
              ),
              Object(p.createElement)(
                "div",
                { className: "tab-content" },
                Object(p.createElement)(x.InnerBlocks.Content, null)
              )
            );
          },
        };
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-tabs-class",
        function (e, t) {
          return "wp-block-bootstrap-tabs" == e ? "" : e;
        }
      );
      var tl = l(17);
      if (void 0 === x.useInnerBlocksProps)
        var ll = x.__experimentalUseInnerBlocksProps;
      else ll = x.useInnerBlocksProps;
      const { name: nl } = tl,
        ol = {
          ...tl,
          icon: Jt,
          edit: function (e) {
            let {
              attributes: t,
              setAttributes: l,
              isSelected: n,
              clientId: o,
            } = e;
            const { hasChildBlocks: a, rootClientId: r } = Object(k.useSelect)(
                (e) => {
                  const { getBlockOrder: t, getBlockRootClientId: l } = e(
                      x.store
                    ),
                    n = l(o);
                  return { hasChildBlocks: t(o).length > 0, rootClientId: n };
                },
                [o]
              ),
              s = Object(x.useBlockProps)(),
              c = ll(s, {
                templateLock: !1,
                renderAppender: a ? void 0 : x.InnerBlocks.ButtonBlockAppender,
              }),
              i = F.a.unique(r + "-" + t.tabItemIndex);
            Object(p.useEffect)(() => {
              const e = wp.data.select("core/block-editor").getBlockIndex(o);
              l({ tabItemIndex: e });
            }, [o]);
            const m =
              "tab-pane fade" + (t.tabActiveInEditor ? " show active" : "");
            return Object(p.createElement)(
              "div",
              b()({}, c, {
                className: m,
                id: i + "-pane",
                role: "tabpanel",
                "aria-labelledby": i + "-tab",
              }),
              c.children
            );
          },
          save: function (e) {
            let { attributes: t } = e;
            const l = t.tabRootId + "-" + t.tabItemIndex,
              n =
                (t.className ? t.className + " " : "") +
                "tab-pane fade" +
                (0 == t.tabItemIndex ? " show active" : "");
            return Object(p.createElement)(
              "div",
              b()({}, x.useBlockProps.save({ className: n }), {
                id: l + "-pane",
                role: "tabpanel",
                "aria-labelledby": l + "-tab",
              }),
              Object(p.createElement)(x.InnerBlocks.Content, null)
            );
          },
        };
      var al;
      function rl() {
        return (rl = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var l = arguments[t];
                for (var n in l)
                  Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function sl(e) {
        return ze.createElement(
          "svg",
          rl({ viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, e),
          al ||
            (al = ze.createElement("path", {
              d: "M0 4v8h16V4H0zm15 7H1V7h14v4zM0 0h16v3H0V0zM0 13h16v3H0v-3z",
            }))
        );
      }
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-tabs-tab-class",
        function (e, t) {
          return "wp-block-bootstrap-tabs-tab" == e ? "" : e;
        }
      );
      var cl = l(18);
      if (void 0 === x.useInnerBlocksProps)
        var il = x.__experimentalUseInnerBlocksProps;
      else il = x.useInnerBlocksProps;
      var ml = Object(k.withDispatch)((e, t, l) => ({
        addAccordionItem() {
          const { clientId: n, attributes: o } = t,
            { anchor: a, accordionButtonWrapper: r } = o,
            { replaceInnerBlocks: s } = e(x.store),
            { getBlocks: c } = l.select(x.store);
          let i = c(n);
          (i = [
            ...i,
            Object(Ne.createBlock)("bootstrap/accordion-item", {
              accordionRootId: a,
              accordionButtonWrapper: r,
              accordionItemTitle: "Accordion item " + (i.length + 1),
            }),
          ]),
            s(n, i);
        },
        updateInnerBlocksAttributes() {
          const { clientId: n, attributes: o } = t,
            {
              anchor: a,
              accordionAlwaysOpen: r,
              accordionFirstOpen: s,
              accordionButtonWrapper: c,
            } = o,
            { updateBlockAttributes: i } = e(x.store),
            { getBlocks: m } = l.select(x.store);
          m(n).forEach((e, t) =>
            i(e.clientId, {
              accordionItemIndex: t,
              accordionRootId: a,
              accordionButtonWrapper: c,
              accordionAlwaysOpen: r,
              accordionOpened: !(!s || t),
            })
          );
        },
      }))(function (e) {
        let {
          attributes: t,
          setAttributes: l,
          isSelected: n,
          addAccordionItem: o,
          updateInnerBlocksAttributes: a,
          clientId: r,
        } = e;
        const { count: s, isInnerSelected: c } = Object(k.useSelect)(
            (e) => ({
              count: e(x.store).getBlockCount(r),
              isInnerSelected: e(x.store).hasSelectedInnerBlock(r, !0),
            }),
            [r]
          ),
          {
            anchor: i,
            accordionStyle: m,
            accordionAlwaysOpen: b,
            accordionFirstOpen: u,
            accordionButtonWrapper: g,
          } = t;
        Object(p.useEffect)(
          (e) => {
            (i && "bs-acrdn-" != i.substr(0, 9)) ||
              l({ anchor: "bs-acrdn-" + F.a.unique(r) }),
              a();
          },
          [r, i, b, u, g]
        );
        const f = Object(x.useBlockProps)({
          className: "accordion" + (m ? " accordion-" + m : ""),
        });
        let h = s || 1,
          v = [];
        for (let e = 1; e <= h; e++)
          v.push([
            "bootstrap/accordion-item",
            { accordionItemTitle: "Accordion item " + e },
          ]);
        const y = il(f, {
          allowedBlocks: ["bootstrap/accordion-item"],
          template: v,
        });
        return Object(p.createElement)(
          p.Fragment,
          null,
          Object(p.createElement)(
            x.InspectorControls,
            null,
            Object(p.createElement)(
              d.PanelBody,
              null,
              Object(p.createElement)(d.SelectControl, {
                label: "Style",
                value: m,
                onChange: (e) => l({ accordionStyle: e }),
                options: [
                  { label: "default", value: "" },
                  { label: "flush", value: "flush" },
                ],
              }),
              Object(p.createElement)(d.ToggleControl, {
                label: "Always open",
                checked: !!b,
                onChange: (e) => l({ accordionAlwaysOpen: e }),
              }),
              Object(p.createElement)(d.ToggleControl, {
                label: "First open on load",
                checked: !!u,
                onChange: (e) => l({ accordionFirstOpen: e }),
              }),
              Object(p.createElement)(d.SelectControl, {
                label: "Collapse buttons wrapper tag",
                value: g,
                onChange: (e) => l({ accordionButtonWrapper: e }),
                options: [
                  { label: "div", value: "div" },
                  { label: "h1", value: "h1" },
                  { label: "h2", value: "h2" },
                  { label: "h3", value: "h3" },
                  { label: "h4", value: "h4" },
                  { label: "h5", value: "h5" },
                  { label: "h6", value: "h6" },
                ],
              })
            )
          ),
          Object(p.createElement)(
            "div",
            y,
            y.children,
            n || c
              ? Object(p.createElement)(
                  d.Button,
                  { isSecondary: !0, onClick: () => o() },
                  "+ Add accordion item"
                )
              : ""
          )
        );
      });
      const { name: bl } = cl,
        pl = {
          ...cl,
          icon: sl,
          edit: ml,
          save: function (e) {
            let { attributes: t, clientId: l } = e;
            const { anchor: n, accordionStyle: o } = t;
            let a =
              (t.className ? t.className + " " : "") +
              "accordion" +
              (o ? " accordion-" + o : "");
            return Object(p.createElement)(
              "div",
              b()({}, x.useBlockProps.save({ className: a }), { id: n }),
              Object(p.createElement)(x.InnerBlocks.Content, null)
            );
          },
        };
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-accordion-class",
        function (e, t) {
          return "wp-block-bootstrap-accordion" == e ? "" : e;
        }
      );
      var dl = l(19);
      if (void 0 === x.useInnerBlocksProps)
        var ul = x.__experimentalUseInnerBlocksProps;
      else ul = x.useInnerBlocksProps;
      const { name: gl } = dl,
        xl = {
          ...dl,
          icon: sl,
          edit: function (e) {
            let {
              attributes: t,
              setAttributes: l,
              isSelected: n,
              clientId: o,
            } = e;
            const { accordionItemTitle: a, accordionButtonWrapper: r } = t,
              { hasChildBlocks: s, rootClientId: c } = Object(k.useSelect)(
                (e) => {
                  const { getBlockOrder: t, getBlockRootClientId: l } = e(
                      x.store
                    ),
                    n = l(o);
                  return { hasChildBlocks: t(o).length > 0, rootClientId: n };
                },
                [o]
              ),
              i = Object(x.useBlockProps)({ className: "accordion-item" }),
              m = ul(i, {
                templateLock: !1,
                renderAppender: s ? void 0 : x.InnerBlocks.ButtonBlockAppender,
              }),
              b = F.a.unique(o);
            Object(p.useEffect)(() => {
              const e = wp.data.select("core/block-editor").getBlockIndex(o);
              l({ accordionItemIndex: e });
            }, [o]);
            const d = "" + r;
            return Object(p.createElement)(
              "div",
              m,
              Object(p.createElement)(
                d,
                { className: "accordion-header", id: b },
                Object(p.createElement)(
                  "button",
                  {
                    className: "accordion-button",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#" + b + "-collapse",
                    "aria-expanded": "true",
                    "aria-controls": b + "-collapse",
                  },
                  Object(p.createElement)(x.RichText, {
                    tagName: "span",
                    placeholder: "Accordion item title",
                    value: a,
                    onChange: (e) => {
                      l({ accordionItemTitle: e });
                    },
                    withoutInteractiveFormatting: !0,
                  })
                )
              ),
              Object(p.createElement)(
                "div",
                {
                  id: b + "-collapse",
                  className: "accordion-collapse collapse show",
                  "aria-labelledby": b,
                },
                Object(p.createElement)(
                  "div",
                  { className: "accordion-body" },
                  m.children
                )
              )
            );
          },
          save: function (e) {
            let { attributes: t } = e;
            const {
                accordionItemIndex: l,
                accordionRootId: n,
                accordionButtonWrapper: o,
                accordionAlwaysOpen: a,
                accordionOpened: r,
                accordionItemTitle: s,
              } = t,
              c = n + "-item-" + l,
              i = "" + o;
            let m = (t.className ? t.className + " " : "") + "accordion-item";
            return Object(p.createElement)(
              "div",
              x.useBlockProps.save({ className: m }),
              Object(p.createElement)(
                i,
                { className: "accordion-header", id: c },
                Object(p.createElement)(
                  "button",
                  {
                    className: "accordion-button" + (r ? "" : " collapsed"),
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#" + c + "-collapse",
                    "aria-expanded": !!r,
                    "aria-controls": c + "-collapse",
                  },
                  Object(p.createElement)(x.RichText.Content, {
                    tagName: "span",
                    value: s,
                  })
                )
              ),
              Object(p.createElement)(
                "div",
                b()({}, a ? {} : { "data-bs-parent": "#" + n }, {
                  id: c + "-collapse",
                  className: "accordion-collapse collapse" + (r ? " show" : ""),
                  "aria-labelledby": c,
                }),
                Object(p.createElement)(
                  "div",
                  { className: "accordion-body" },
                  Object(p.createElement)(x.InnerBlocks.Content, null)
                )
              )
            );
          },
        };
      wp.hooks.addFilter(
        "blocks.getBlockDefaultClassName",
        "bootstrap/remove-default-accordion-item-class",
        function (e, t) {
          return "wp-block-bootstrap-accordion-item" == e ? "" : e;
        }
      ),
        [n, o, a, r, s, c, i].forEach(function (e) {
          const { settings: t, name: l } = e;
          Object(Ne.registerBlockType)(l, t);
        });
    },
  ]);
