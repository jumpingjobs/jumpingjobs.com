/* @ds-bundle: {"format":4,"namespace":"JumpingJobsDesignSystem_9ca721","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"CommandBlock","sourcePath":"components/core/CommandBlock.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f05b319a7563","components/core/Button.jsx":"d373a7dd8d16","components/core/Card.jsx":"95fe42db945f","components/core/Checkbox.jsx":"62217d9c2134","components/core/CommandBlock.jsx":"bc015715b04b","components/core/Dialog.jsx":"37d3f5dcc9c1","components/core/Icon.jsx":"471e12ab1505","components/core/IconButton.jsx":"13bfa383f5f4","components/core/Input.jsx":"01a013877ef8","components/core/Radio.jsx":"39d9f639c823","components/core/Select.jsx":"d977fce8b716","components/core/Switch.jsx":"1b000c9a11bc","components/core/Tabs.jsx":"faec5ddb70b6","components/core/Tag.jsx":"82dd87b28107","components/core/Toast.jsx":"eacba002db93","components/core/Tooltip.jsx":"f3f67e039f01","ui_kits/app/App.jsx":"da2c65b59297","ui_kits/app/data.js":"4ec075fe45a8","ui_kits/website/Site.jsx":"ef025d9bf543"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JumpingJobsDesignSystem_9ca721 = window.JumpingJobsDesignSystem_9ca721 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: ["var(--surface-sunken)", "var(--text-muted)"],
  accent: ["var(--accent-soft)", "var(--accent-text)"],
  info: ["var(--info-soft)", "var(--info-text)"],
  success: ["var(--success-soft)", "var(--success-text)"],
  warning: ["var(--warning-soft)", "var(--warning-text)"],
  danger: ["var(--danger-soft)", "var(--danger-text)"],
  solid: ["var(--accent)", "var(--accent-on)"],
  inverse: ["var(--surface-inverse)", "var(--text-inverse)"]
};
function Badge({
  tone = "neutral",
  dot,
  children,
  style
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 9px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      font: "var(--type-label)",
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: "var(--control-sm)",
    px: "14px",
    fs: "var(--text-sm)",
    gap: "6px"
  },
  md: {
    h: "var(--control-md)",
    px: "18px",
    fs: "var(--text-base)",
    gap: "8px"
  },
  lg: {
    h: "var(--control-lg)",
    px: "24px",
    fs: "var(--text-md)",
    gap: "10px"
  }
};
const variants = {
  primary: {
    bg: "var(--accent)",
    fg: "var(--accent-on)",
    border: "transparent",
    hoverBg: "var(--accent-hover)"
  },
  secondary: {
    bg: "var(--surface-card)",
    fg: "var(--text-heading)",
    border: "var(--border-default)",
    hoverBg: "var(--surface-sunken)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-body)",
    border: "transparent",
    hoverBg: "var(--surface-sunken)"
  },
  soft: {
    bg: "var(--accent-soft)",
    fg: "var(--accent-text)",
    border: "transparent",
    hoverBg: "color-mix(in oklab,var(--accent-soft),var(--accent) 12%)"
  },
  danger: {
    bg: "var(--danger)",
    fg: "var(--accent-on)",
    border: "transparent",
    hoverBg: "var(--clay-5)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  loading,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = sizes[size] || sizes.md,
    v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "-0.005em",
      lineHeight: 1,
      color: v.fg,
      background: hover && !disabled ? v.hoverBg : v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      transform: down && !disabled ? "scale(.98)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), color var(--dur-fast)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      border: "2px solid currentColor",
      borderRightColor: "transparent",
      borderRadius: "50%",
      animation: "jj-spin .8s linear infinite"
    }
  }) : iconLeft, children, iconRight, /*#__PURE__*/React.createElement("style", null, `@keyframes jj-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "default",
  padding = 24,
  interactive,
  wash,
  selected,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    default: {
      bg: "var(--surface-card)",
      border: "var(--border-subtle)",
      shadow: "var(--shadow-1)"
    },
    raised: {
      bg: "var(--surface-raised)",
      border: "transparent",
      shadow: "var(--shadow-2)"
    },
    sunken: {
      bg: "var(--surface-sunken)",
      border: "transparent",
      shadow: "none"
    },
    outline: {
      bg: "transparent",
      border: "var(--border-default)",
      shadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: wash ? `jj-wash jj-grain ${wash}` : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: wash ? "hidden" : undefined,
      padding,
      background: base.bg,
      border: `1px solid ${selected ? "var(--accent)" : interactive && hover ? "var(--border-strong)" : base.border}`,
      borderRadius: "var(--radius-lg)",
      boxShadow: interactive && hover ? "var(--shadow-2)" : base.shadow,
      transform: interactive && hover ? "translateY(-1px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-fast)",
      cursor: interactive ? "pointer" : undefined,
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isCtl = checked !== undefined,
    val = isCtl ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (!isCtl) setInner(!val);
    onChange && onChange(!val);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      font: "var(--type-body)",
      color: "var(--text-body)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": val,
    tabIndex: 0,
    onKeyDown: e => (e.key === " " || e.key === "Enter") && (e.preventDefault(), toggle()),
    style: {
      width: 18,
      height: 18,
      flex: "none",
      marginTop: 3,
      display: "grid",
      placeItems: "center",
      borderRadius: 6,
      background: val ? "var(--accent)" : "var(--surface-card)",
      border: `1.5px solid ${val ? "var(--accent)" : "var(--border-strong)"}`,
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, val && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent-on)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/CommandBlock.jsx
try { (() => {
function CommandBlock({
  command,
  prompt = "$",
  label,
  size = "md",
  tone = "inverse",
  onCopy,
  style
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(command);
    } catch (e) {}
    setCopied(true);
    onCopy && onCopy(command);
    setTimeout(() => setCopied(false), 1600);
  };
  const inv = tone === "inverse";
  const fs = size === "lg" ? "var(--text-md)" : "var(--text-sm)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: size === "lg" ? "var(--control-xl)" : "var(--control-lg)",
      padding: "0 8px 0 18px",
      borderRadius: "var(--radius-lg)",
      background: inv ? "var(--surface-inverse)" : "var(--surface-card)",
      color: inv ? "var(--text-inverse)" : "var(--text-body)",
      border: inv ? "1px solid transparent" : "1px solid var(--border-default)",
      boxShadow: inv ? "var(--shadow-2)" : "none",
      fontFamily: "var(--font-mono)",
      fontSize: fs
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: inv ? "var(--moss-2)" : "var(--accent)",
      userSelect: "none"
    }
  }, prompt), /*#__PURE__*/React.createElement("code", {
    style: {
      flex: 1,
      minWidth: 0,
      font: "inherit",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, command), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    "aria-label": "Copy command",
    style: {
      all: "unset",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: "0 12px",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-small)",
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      background: copied ? "var(--accent)" : inv ? "rgba(255,255,255,.08)" : "var(--surface-sunken)",
      color: copied ? "var(--accent-on)" : "inherit",
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, copied ? /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
  }))), copied ? "Copied" : "Copy")));
}
Object.assign(__ds_scope, { CommandBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CommandBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  width = 480,
  children,
  style
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "grid",
      placeItems: "center",
      padding: 24,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      animation: "jj-fade var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      color: "var(--text-body)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-3)",
      border: "1px solid var(--border-subtle)",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      animation: "jj-rise var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      width: 32,
      height: 32,
      display: "grid",
      placeItems: "center",
      borderRadius: 999,
      color: "var(--text-muted)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      paddingTop: 4
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes jj-fade{from{opacity:0}}@keyframes jj-rise{from{opacity:0;transform:translateY(12px) scale(.98)}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide icons via CDN (window.lucide). Load https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js before use.
const toPascal = n => n.split(/[-_ ]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const lib = typeof window !== "undefined" && window.lucide && window.lucide.icons;
  const def = lib ? lib[toPascal(name)] || lib[name] : null;
  // Registry shapes: [[tag,attrs],…] (lucide ≥0.300), ["svg",attrs,[[tag,attrs],…]] (older), or {…}
  let nodes = [];
  if (Array.isArray(def)) nodes = Array.isArray(def[0]) ? def : Array.isArray(def[2]) ? def[2] : [];else if (def && typeof def === "object") nodes = Array.isArray(def.children) ? def.children : Array.isArray(def.iconNode) ? def.iconNode : [];
  nodes = nodes.filter(n => Array.isArray(n) && typeof n[0] === "string");
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    }
  }, rest), nodes.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sz = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sz[size] || 40;
  const v = {
    ghost: ["transparent", "var(--text-body)", "transparent", "var(--surface-sunken)"],
    secondary: ["var(--surface-card)", "var(--text-heading)", "var(--border-default)", "var(--surface-sunken)"],
    primary: ["var(--accent)", "var(--accent-on)", "transparent", "var(--accent-hover)"]
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flex: "none",
      color: v[1],
      background: hover && !disabled ? v[3] : v[0],
      border: `1px solid ${v[2]}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = "md",
  style,
  inputStyle,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "lg" ? "var(--control-lg)" : size === "sm" ? "var(--control-sm)" : "var(--control-md)";
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "var(--type-small)",
      color: "var(--text-muted)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: "0 14px",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      color: "var(--text-faint)"
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-body)",
      boxShadow: "none",
      ...inputStyle
    }
  }, rest)), iconRight), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: error ? "var(--danger-text)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = "column",
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const isCtl = value !== undefined,
    val = isCtl ? value : inner;
  const pick = v => {
    if (!isCtl) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? 20 : 10,
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const on = val === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      onClick: () => !opt.disabled && pick(opt.value),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: opt.disabled ? "not-allowed" : "pointer",
        opacity: opt.disabled ? .5 : 1,
        font: "var(--type-body)",
        color: "var(--text-body)",
        userSelect: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      tabIndex: 0,
      onKeyDown: e => (e.key === " " || e.key === "Enter") && (e.preventDefault(), pick(opt.value)),
      style: {
        width: 18,
        height: 18,
        flex: "none",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: "var(--surface-card)",
        border: `1.5px solid ${on ? "var(--accent)" : "var(--border-strong)"}`,
        transition: "border-color var(--dur-fast)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--accent)",
        transform: on ? "scale(1)" : "scale(0)",
        transition: "transform var(--dur-fast) var(--ease-out)"
      }
    })), /*#__PURE__*/React.createElement("span", null, opt.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = "md",
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "lg" ? "var(--control-lg)" : size === "sm" ? "var(--control-sm)" : "var(--control-md)";
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "var(--type-small)",
      color: "var(--text-muted)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: h,
      background: "var(--surface-card)",
      border: `1px solid ${focus ? "var(--border-focus)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: "100%",
      padding: "0 36px 0 14px",
      border: 0,
      outline: 0,
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-body)",
      boxShadow: "none",
      cursor: "pointer"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), hint && /*#__PURE__*/React.createElement("span", null, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  size = "md",
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isCtl = checked !== undefined,
    on = isCtl ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (!isCtl) setInner(!on);
    onChange && onChange(!on);
  };
  const w = size === "sm" ? 32 : 40,
    h = size === "sm" ? 18 : 22,
    k = h - 4;
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      font: "var(--type-body)",
      color: "var(--text-body)",
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    tabIndex: 0,
    onKeyDown: e => (e.key === " " || e.key === "Enter") && (e.preventDefault(), toggle()),
    style: {
      width: w,
      height: h,
      flex: "none",
      borderRadius: 999,
      padding: 2,
      boxSizing: "border-box",
      background: on ? "var(--accent)" : "var(--border-strong)",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: k,
      height: k,
      borderRadius: "50%",
      background: "var(--birch-0)",
      boxShadow: "var(--shadow-1)",
      transform: on ? `translateX(${w - k - 4}px)` : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  size = "md",
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const isCtl = value !== undefined,
    val = isCtl ? value : inner;
  const pick = v => {
    if (!isCtl) setInner(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: pill ? 4 : 4,
      padding: pill ? 4 : 0,
      background: pill ? "var(--surface-sunken)" : "transparent",
      borderRadius: pill ? "var(--radius-pill)" : 0,
      borderBottom: pill ? "none" : "1px solid var(--border-subtle)",
      width: pill ? "fit-content" : "100%",
      ...style
    }
  }, items.map(it => {
    const o = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const on = o.value === val;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(o.value),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        height: size === "sm" ? 32 : 40,
        padding: pill ? "0 16px" : "0 4px",
        marginBottom: pill ? 0 : -1,
        borderRadius: pill ? "var(--radius-pill)" : 0,
        background: pill && on ? "var(--surface-card)" : "transparent",
        boxShadow: pill && on ? "var(--shadow-1)" : "none",
        borderBottom: pill ? "none" : `2px solid ${on ? "var(--accent)" : "transparent"}`,
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        font: size === "sm" ? "var(--type-small)" : "var(--type-body)",
        fontWeight: "var(--weight-medium)",
        whiteSpace: "nowrap",
        transition: "color var(--dur-fast), border-color var(--dur-fast), background var(--dur-fast)"
      }
    }, o.icon, o.label, o.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        padding: "3px 6px",
        borderRadius: 999,
        background: on ? "var(--accent-soft)" : "var(--surface-sunken)",
        color: on ? "var(--accent-text)" : "var(--text-faint)"
      }
    }, o.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  onRemove,
  icon,
  children,
  size = "md",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const h = size === "sm" ? 26 : 32;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: h,
      padding: size === "sm" ? "0 10px" : "0 12px",
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--accent-soft)" : hover && onClick ? "var(--surface-sunken)" : "var(--surface-card)",
      color: selected ? "var(--accent-text)" : "var(--text-body)",
      border: `1px solid ${selected ? "var(--accent)" : "var(--border-default)"}`,
      font: size === "sm" ? "var(--type-small)" : "var(--type-body)",
      fontWeight: "var(--weight-medium)",
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      userSelect: "none",
      transition: "background var(--dur-fast), border-color var(--dur-fast)",
      ...style
    }
  }, icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      all: "unset",
      display: "grid",
      placeItems: "center",
      width: 16,
      height: 16,
      marginRight: -4,
      borderRadius: "50%",
      cursor: "pointer",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
const tones = {
  neutral: "var(--border-strong)",
  success: "var(--success)",
  info: "var(--info)",
  warning: "var(--warning)",
  danger: "var(--danger)"
};
function Toast({
  tone = "neutral",
  title,
  description,
  action,
  onDismiss,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: 360,
      maxWidth: "100%",
      padding: "14px 16px",
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-3)",
      animation: "jj-toast var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 6,
      borderRadius: "50%",
      flex: "none",
      background: tones[tone] || tones.neutral
    }
  }), icon, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-faint)",
      display: "grid",
      placeItems: "center",
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("style", null, `@keyframes jj-toast{from{opacity:0;transform:translateY(8px)}}`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = "top",
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      font: "var(--type-small)",
      fontWeight: "var(--weight-medium)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-out)",
      boxShadow: "var(--shadow-2)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.JumpingJobsDesignSystem_9ca721;
const {
  Button,
  IconButton,
  Icon,
  Input,
  Select,
  Checkbox,
  Switch,
  Card,
  Badge,
  Tag,
  Tabs,
  Dialog,
  Toast,
  Tooltip
} = NS;
const {
  JOBS,
  APPLIED
} = window.JJ_DATA;
const H = {
  fontFamily: "var(--font-display)",
  color: "var(--text-heading)",
  margin: 0,
  textWrap: "balance"
};
function Sidebar({
  view,
  setView,
  dark,
  setDark
}) {
  const items = [["search", "Search", "search", JOBS.length], ["saved", "Saved", "bookmark", 2], ["applied", "Applications", "send", APPLIED.length], ["alerts", "Alerts", "bell"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flex: "none",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: 20,
      borderRight: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 20px/1 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--text-heading)",
      padding: "6px 10px 22px"
    }
  }, "jumping", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "jobs")), items.map(([k, l, ic, n]) => {
    const on = view === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setView(k),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 40,
        padding: "0 12px",
        borderRadius: "var(--radius-md)",
        background: on ? "var(--surface-card)" : "transparent",
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        fontWeight: 500,
        boxShadow: on ? "var(--shadow-1)" : "none",
        border: `1px solid ${on ? "var(--border-subtle)" : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: on ? "var(--accent)" : "currentColor"
    }), l, n !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        font: "var(--type-label)",
        color: "var(--text-faint)"
      }
    }, n));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, "MCP connected"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Claude Desktop \xB7 12 calls today")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: "var(--fjord-4)",
      color: "var(--birch-0)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-label)"
    }
  }, "IS"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, "Ingrid S."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-faint)"
    }
  }, "Plus"))), /*#__PURE__*/React.createElement(Tooltip, {
    content: dark ? "Light theme" : "Dark theme",
    side: "left"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Theme",
    size: "sm",
    onClick: () => setDark(!dark)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? "sun" : "moon",
    size: 16
  }))))));
}
function Filters({
  f,
  setF
}) {
  const skills = ["Figma", "React", "TypeScript", "Design systems", "Research", "Motion"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["Remote", "Hybrid", "On-site"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: f.mode === t,
    onClick: () => setF({
      ...f,
      mode: f.mode === t ? null : t
    })
  }, t))), /*#__PURE__*/React.createElement(Select, {
    label: "Seniority",
    size: "sm",
    options: ["Any", "Mid", "Senior", "Staff", "Lead"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      fontWeight: 500,
      color: "var(--text-heading)"
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, skills.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    size: "sm",
    selected: f.skills.includes(s),
    onClick: () => setF({
      ...f,
      skills: f.skills.includes(s) ? f.skills.filter(x => x !== s) : [...f.skills, s]
    })
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Salary listed",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Visa sponsorship"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Only new since last visit",
    size: "sm"
  })));
}
function JobRow({
  j,
  active,
  saved,
  onClick,
  onSave
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    selected: active,
    padding: 16,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      display: "grid",
      placeItems: "center",
      color: "var(--text-muted)",
      flex: "none",
      font: "var(--type-label)"
    }
  }, j.co.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, j.title), j.fresh && /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "New"), j.closing && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Closes soon")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, j.co, " \xB7 ", j.loc, " \xB7 ", j.pay), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 2
    }
  }, j.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 8,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, j.match, "% match"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Save",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onSave();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 16,
    color: saved ? "var(--accent)" : "currentColor",
    style: saved ? {
      fill: "var(--accent)"
    } : {}
  })))));
}
function Detail({
  j,
  onApply,
  saved,
  onSave
}) {
  if (!j) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      height: "100%",
      color: "var(--text-faint)"
    }
  }, "Pick a role to read it");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jj-wash jj-grain",
    style: {
      borderRadius: "var(--radius-xl)",
      padding: 28,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      fontWeight: 500,
      color: "var(--text-muted)"
    }
  }, j.co), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, j.title)), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, j.match, "% match")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      font: "var(--type-small)",
      color: "var(--text-muted)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), j.loc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "banknote",
    size: 14
  }), j.pay), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), "Posted ", j.posted, " ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    }),
    onClick: onApply
  }, "Apply with profile"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 16
    }),
    onClick: onSave
  }, saved ? "Saved" : "Save"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2"
  }))))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "a",
      label: "About"
    }, {
      value: "b",
      label: "Why you match"
    }, {
      value: "c",
      label: "Company"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 240px",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      font: "var(--type-body)",
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("p", null, j.desc), /*#__PURE__*/React.createElement("p", null, "Nothing is sent until you approve it. Your saved profile, CV and a short note go out together; we tell you when it's read."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, j.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t)))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      font: "var(--type-small)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, "Why you match"), [["Design systems", true], ["Figma", true], ["Nordic time zone", true], ["B2B experience", false]].map(([t, ok]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      color: ok ? "var(--text-body)" : "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ok ? "check" : "minus",
    size: 14,
    color: ok ? "var(--accent)" : "currentColor"
  }), t))))));
}
function Applied() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: 32,
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H,
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-display)"
    }
  }, "Applications"), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "a",
      label: "Active",
      count: 3
    }, {
      value: "b",
      label: "Archived",
      count: 5
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, APPLIED.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.id,
    padding: 16,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, a.co.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-heading)"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, a.co)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone,
    dot: true
  }, a.state), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-faint)"
  }))))));
}
function App() {
  const [dark, setDark] = React.useState(true);
  const [view, setView] = React.useState("search");
  const [q, setQ] = React.useState("");
  const [f, setF] = React.useState({
    mode: null,
    skills: []
  });
  const [active, setActive] = React.useState(1);
  const [saved, setSaved] = React.useState([2, 4]);
  const [dlg, setDlg] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const list = JOBS.filter(j => (!q || (j.title + j.co + j.tags.join()).toLowerCase().includes(q.toLowerCase())) && (!f.mode || j.loc.includes(f.mode)) && (f.skills.length === 0 || f.skills.some(s => j.tags.includes(s))) && (view !== "saved" || saved.includes(j.id)));
  const job = JOBS.find(j => j.id === active);
  const toggleSave = id => {
    setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
    setToast({
      tone: "info",
      title: saved.includes(id) ? "Removed from saved" : "Saved"
    });
  };
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? "jj-dark" : "",
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--surface-page)",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: setView,
    dark: dark,
    setDark: setDark
  }), view === "search" || view === "saved" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      flex: "none",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    placeholder: "Say it plainly \u2014 \u201Csenior designer, remote\u201D",
    value: q,
    onChange: e => setQ(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18,
      color: "var(--accent)"
    }),
    iconRight: q ? /*#__PURE__*/React.createElement(IconButton, {
      label: "Clear",
      size: "sm",
      onClick: () => setQ("")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14
    })) : null
  }), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: "pointer",
      font: "var(--type-small)",
      fontWeight: 500,
      color: "var(--text-muted)",
      display: "flex",
      gap: 8,
      alignItems: "center",
      listStyle: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 14
  }), "Filters ", f.skills.length + (f.mode ? 1 : 0) > 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, f.skills.length + (f.mode ? 1 : 0))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Filters, {
    f: f,
    setF: setF
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px 4px",
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, list.length, " roles \xB7 3 boards \xB7 0 duplicates"), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["Best match", "Newest", "Salary"],
    style: {
      width: 130
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "12px 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      color: "var(--text-muted)"
    }
  }, "No roles match yet. Widen the location or drop a skill.") : list.map(j => /*#__PURE__*/React.createElement(JobRow, {
    key: j.id,
    j: j,
    active: j.id === active,
    saved: saved.includes(j.id),
    onClick: () => setActive(j.id),
    onSave: () => toggleSave(j.id)
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Detail, {
    j: job,
    saved: saved.includes(active),
    onSave: () => toggleSave(active),
    onApply: () => setDlg(true)
  }))) : view === "applied" ? /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement(Applied, null)) : /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "grid",
      placeItems: "center",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, "No alerts yet. Save a search to get one."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setView("search")
  }, "Back to search"))), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    onClose: () => setDlg(false),
    title: job ? `Apply to ${job.co}` : "",
    description: "We'll send your saved profile, CV and the note below.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDlg(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 16
      }),
      onClick: () => {
        setDlg(false);
        setToast({
          tone: "success",
          title: "Application sent",
          description: `${job.co} usually replies within 5 days.`
        });
      }
    }, "Send application"))
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Note to hiring team",
    placeholder: "Two sentences is plenty"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Attach portfolio link",
    defaultChecked: true
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
    onDismiss: () => setToast(null)
  }))));
}
window.JJApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
const JOBS = [{
  id: 1,
  title: "Senior Product Designer",
  co: "Fjord Labs",
  loc: "Bergen · Hybrid",
  pay: "850–980k NOK",
  tags: ["Figma", "Design systems", "B2B"],
  match: 94,
  posted: "2d",
  fresh: true,
  desc: "You'll own the design system for our accounting platform and work directly with two squads. We care about calm, legible interfaces and about saying no."
}, {
  id: 2,
  title: "Staff Frontend Engineer",
  co: "Nordlys",
  loc: "Remote · Nordics",
  pay: "1.1–1.3M NOK",
  tags: ["React", "TypeScript", "Design systems"],
  match: 88,
  posted: "4h",
  fresh: true,
  desc: "Lead the web platform team. Ship a component library used by 40 engineers and keep the bundle honest."
}, {
  id: 3,
  title: "Product Designer",
  co: "Birkebeiner",
  loc: "Oslo · On-site",
  pay: "700–800k NOK",
  tags: ["Mobile", "Research"],
  match: 81,
  posted: "1d",
  desc: "Second designer on a small consumer team. Weekly research sessions, quarterly releases."
}, {
  id: 4,
  title: "Design Engineer",
  co: "Skog & Co",
  loc: "Stockholm · Hybrid",
  pay: "55–65k SEK",
  tags: ["React", "Motion", "Prototyping"],
  match: 79,
  posted: "3d",
  desc: "Sit between design and engineering. Build the prototypes that become the product."
}, {
  id: 5,
  title: "UX Writer",
  co: "Tromsø Kommune",
  loc: "Tromsø · Hybrid",
  pay: "620–690k NOK",
  tags: ["Content", "Accessibility"],
  match: 72,
  posted: "5d",
  closing: true,
  desc: "Rewrite public services in plain Norwegian. Deadline is close."
}, {
  id: 6,
  title: "Head of Design",
  co: "Halden Energy",
  loc: "Remote · Europe",
  pay: "1.2–1.4M NOK",
  tags: ["Leadership", "B2B"],
  match: 68,
  posted: "1w",
  desc: "First design leader. Build the team and the practice."
}];
const APPLIED = [{
  id: 7,
  title: "Product Designer",
  co: "Vind",
  state: "Interview",
  tone: "info"
}, {
  id: 8,
  title: "Senior UX Designer",
  co: "Lofoten Digital",
  state: "Sent",
  tone: "neutral"
}, {
  id: 9,
  title: "Design Lead",
  co: "Aurora Health",
  state: "Offer",
  tone: "success"
}];
window.JJ_DATA = {
  JOBS,
  APPLIED
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const NS = window.JumpingJobsDesignSystem_9ca721;
const {
  Button,
  IconButton,
  Icon,
  Card,
  Badge,
  Tag,
  Tabs,
  Input,
  CommandBlock
} = NS;
const H = {
  fontFamily: "var(--font-display)",
  color: "var(--text-heading)",
  textWrap: "balance",
  margin: 0
};
const Eyebrow = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    font: "var(--type-label)",
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    color: "var(--accent-text)"
  }
}, children);
const Wrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-lg)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...style
  }
}, children);
const HARNESSES = ["Claude Code", "Cursor", "Codex CLI", "Gemini CLI", "GitHub Copilot", "OpenCode"];
const SKILLS = [["find", "Search every board", "Plain-language search across LinkedIn, Finn, Indeed and company pages. Deduped, salary normalised.", "search"], ["match", "Score against your profile", "Reads your CV and preferences once; ranks roles and explains each match in two lines.", "sparkles"], ["tailor", "Rewrite for the role", "Adjusts your CV summary and cover note to the posting. Never invents experience.", "pen-line"], ["apply", "Apply with approval", "Fills forms, attaches documents, then waits for your yes before anything is sent.", "send"], ["track", "Keep the board", "Every application, stage and reply in one list. Nudges you when a follow-up is due.", "kanban"], ["prep", "Interview notes", "Company brief, likely questions and your own stories, pulled together the night before.", "notebook-pen"]];
function Nav({
  dark,
  setDark,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      background: "color-mix(in oklab,var(--surface-page) 72%,transparent)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      font: "700 22px/1 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--text-heading)",
      textDecoration: "none"
    }
  }, "jumping", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "jobs")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      font: "var(--type-body)",
      fontWeight: 500
    }
  }, [["Skills", "home"], ["How it works", "home"], ["Docs", "docs"], ["Changelog", "docs"]].map(([l, p]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(p);
    },
    style: {
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "github",
      size: 16
    })
  }, "2.4k"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Toggle theme",
    onClick: () => setDark(!dark)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? "sun" : "moon"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("install")
  }, "Install"))));
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "jj-wash jj-grain",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 28,
      padding: "112px var(--gutter) 88px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Six skills for your coding agent"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H,
      font: "var(--type-display)",
      letterSpacing: "var(--tracking-display)",
      fontSize: 68,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 500,
      color: "var(--text-muted)",
      fontSize: 32,
      letterSpacing: "-0.015em",
      marginBottom: 8
    }
  }, "Not just easier."), "Your job search, found by asking."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      maxWidth: 580
    }
  }, "Jumping Jobs is a skills collection that teaches Claude Code, Cursor and friends to find roles, tailor your CV and apply \u2014 with your approval on every send."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      width: "100%",
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(CommandBlock, {
    command: "npx jumpingjobs install",
    size: "lg",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, "Free and open source \xB7 Node 20+ \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("install");
    }
  }, "Other install methods"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 12
    }
  }, HARNESSES.map(h => /*#__PURE__*/React.createElement(Tag, {
    key: h,
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "terminal",
      size: 14
    })
  }, h)))));
}
function Skills() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The skills"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "Six commands. One shared vocabulary with your agent."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Each names one job. Type ", /*#__PURE__*/React.createElement("code", {
    style: {
      color: "var(--text-heading)"
    }
  }, "/jobs"), " in chat to see them.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: 14
    }
  }, SKILLS.map(([cmd, t, d, ic]) => /*#__PURE__*/React.createElement(Card, {
    key: cmd,
    interactive: true,
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-code)",
      fontWeight: 500,
      color: "var(--accent-text)",
      background: "var(--accent-soft)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)"
    }
  }, "/jobs ", cmd), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--text-faint)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H,
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, d)))))));
}
function Demo() {
  const lines = [["you", "/jobs find senior product designer, remote, nordic hours"], ["agent", "Searching 3 boards… 128 roles → 41 after dedupe → 9 match your profile above 80%."], ["agent", "Top match: Senior Product Designer at Fjord Labs, Bergen · hybrid · 850–980k NOK · 94%."], ["you", "/jobs apply 1 — mention the design-system work"], ["agent", "Drafted a 4-line note and tailored CV summary. Nothing sent yet — approve?"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Card, {
    wash: "fjord",
    variant: "sunken",
    padding: 0,
    style: {
      borderRadius: "var(--radius-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)",
      gap: 40,
      padding: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "Say it in a sentence. Approve before it sends."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)"
    }
  }, "The skills read your profile once, run inside the agent you already use, and stop at every irreversible step. You keep the final say."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Read the setup guide"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 20px",
      font: "var(--type-code)",
      boxShadow: "var(--shadow-3)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 6
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: "rgba(255,255,255,.15)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--birch-5)",
      fontSize: 11
    }
  }, "claude \u2014 ~/work")), lines.map(([who, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: who === "you" ? "var(--ochre-2)" : "var(--moss-2)",
      width: 14,
      flex: "none"
    }
  }, who === "you" ? "›" : "→"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: who === "you" ? "var(--text-inverse)" : "var(--birch-4)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      padding: "6px 14px",
      borderRadius: 999,
      background: "var(--moss-3)",
      color: "var(--night-0)"
    }
  }, "Approve & send"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      padding: "6px 14px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.2)"
    }
  }, "Edit note")))))));
}
function Principles() {
  const items = [["shield-check", "Approval on every send", "Applications, messages and profile edits pause for a yes. Always."], ["file-lock-2", "Your data stays local", "Your CV and preferences live in PROFILE.md in your repo. Nothing is uploaded to us."], ["git-branch", "Same skill, every harness", "One install compiles the build for your tool — Claude Code hooks, Cursor rules, Codex prompts."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: 40
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: "var(--accent-soft)",
      color: "var(--accent-text)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H,
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, d)))));
}
function Install({
  compact
}) {
  const [tab, setTab] = React.useState("npx");
  const cmds = {
    npx: "npx jumpingjobs install",
    claude: "/plugin marketplace add jumpingjobs/skills",
    skills: "npx skills add jumpingjobs"
  };
  const notes = {
    npx: "Recommended. Detects your harness and installs the build tuned for it.",
    claude: "Claude Code only. Then open /plugin and install Jumping Jobs from the list.",
    skills: "Generic installer — one shared build for all harnesses, no tool-specific hooks."
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "install",
    style: {
      padding: compact ? "80px 0" : "var(--section-gap) 0",
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "Installed in under a minute."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Requires Node 20+. Works with ", HARNESSES.slice(0, 4).join(", "), " and every other major agent harness."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      font: "var(--type-small)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Setup guide"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "What's new"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "FAQ"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    variant: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    size: "sm",
    value: tab,
    onChange: setTab,
    items: [{
      value: "npx",
      label: "npx"
    }, {
      value: "claude",
      label: "Claude marketplace"
    }, {
      value: "skills",
      label: "skills.sh"
    }]
  }), /*#__PURE__*/React.createElement(CommandBlock, {
    command: cmds[tab],
    prompt: tab === "claude" ? "›" : "$",
    label: "Install"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)"
    }
  }, notes[tab]), /*#__PURE__*/React.createElement(CommandBlock, {
    command: "/jobs init",
    prompt: "\u203A",
    label: "First run \xB7 in your agent chat",
    tone: "card"
  }), /*#__PURE__*/React.createElement(CommandBlock, {
    command: "npx jumpingjobs update",
    label: "Update",
    tone: "card"
  })))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "64px 0 40px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 20px/1 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--text-heading)"
    }
  }, "jumping", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "jobs")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: 280
    }
  }, "Not just easier. Your job search, found by asking."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-faint)"
    }
  }, "\xA9 2026 Jumping Jobs \xB7 MIT licence")), [["Product", ["Skills", "How it works", "Changelog", "Roadmap"]], ["Docs", ["Getting started", "Commands", "PROFILE.md", "FAQ"]], ["Community", ["GitHub", "Discord", "X"]]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, l))))));
}
function Docs() {
  const [active, setActive] = React.useState("find");
  const s = SKILLS.find(x => x[0] === active);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 0 var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "220px minmax(0,1fr)",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "0 12px 8px"
    }
  }, "Commands"), SKILLS.map(([c]) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setActive(c),
    style: {
      all: "unset",
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-code)",
      background: active === c ? "var(--accent-soft)" : "transparent",
      color: active === c ? "var(--accent-text)" : "var(--text-muted)"
    }
  }, "/jobs ", c))), /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "/jobs ", s[0]), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H,
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-display)"
    }
  }, s[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)"
    }
  }, s[2]), /*#__PURE__*/React.createElement(CommandBlock, {
    prompt: "\u203A",
    command: `/jobs ${s[0]} ${s[0] === "find" ? "senior designer, remote, nordics" : s[0] === "apply" ? "3 — mention the migration project" : ""}`.trim(),
    tone: "card",
    label: "Example"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H,
      font: "var(--type-h3)",
      marginTop: 12
    }
  }, "What it reads"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("code", null, "PROFILE.md"), " for your experience and preferences, ", /*#__PURE__*/React.createElement("code", null, "jobs/board.json"), " for state. It never reads outside the repo without asking."), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...H,
      font: "var(--type-h3)",
      marginTop: 12
    }
  }, "What it will not do"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      lineHeight: 1.65
    }
  }, "Send anything, invent experience, or change your profile without an explicit yes in chat."))));
}
function Site() {
  const [dark, setDark] = React.useState(false);
  const [page, setPage] = React.useState("home");
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? "jj-dark" : "",
    style: {
      background: "var(--surface-page)",
      color: "var(--text-body)",
      minHeight: "100vh",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    dark: dark,
    setDark: setDark,
    go: go
  }), page === "home" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Demo, null), /*#__PURE__*/React.createElement(Principles, null), /*#__PURE__*/React.createElement(Install, null), /*#__PURE__*/React.createElement(Footer, null)), page === "install" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Install, {
    compact: true
  }), /*#__PURE__*/React.createElement(Footer, null)), page === "docs" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Docs, null), /*#__PURE__*/React.createElement(Footer, null)));
}
window.JJSite = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CommandBlock = __ds_scope.CommandBlock;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
