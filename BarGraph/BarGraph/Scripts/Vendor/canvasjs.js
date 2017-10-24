/*
 CanvasJS HTML5 & JavaScript Charts - v1.9.9 GA - https://canvasjs.com/ 
 Copyright 2017 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license-canvasjs/

*/
(function() {
    function S(a, c) {
        a.prototype = Pa(c.prototype);
        a.prototype.constructor = a;
        a.base = c.prototype
    }

    function Pa(a) {
        function c() {}
        c.prototype = a;
        return new c
    }

    function Ha(a, c, b) {
        "millisecond" === b ? a.setMilliseconds(a.getMilliseconds() + 1 * c) : "second" === b ? a.setSeconds(a.getSeconds() + 1 * c) : "minute" === b ? a.setMinutes(a.getMinutes() + 1 * c) : "hour" === b ? a.setHours(a.getHours() + 1 * c) : "day" === b ? a.setDate(a.getDate() + 1 * c) : "week" === b ? a.setDate(a.getDate() + 7 * c) : "month" === b ? a.setMonth(a.getMonth() + 1 * c) : "year" === b && a.setFullYear(a.getFullYear() +
            1 * c);
        return a
    }

    function O(a, c) {
        var b = !1;
        0 > a && (b = !0, a *= -1);
        a = "" + a;
        for (c = c ? c : 1; a.length < c;) a = "0" + a;
        return b ? "-" + a : a
    }

    function ka(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var c = /\s/, b = a.length; c.test(a.charAt(--b)););
        return a.slice(0, b + 1)
    }

    function Ia(a) {
        a.roundRect = function(a, b, d, f, g, k, h, l) {
            h && (this.fillStyle = h);
            l && (this.strokeStyle = l);
            "undefined" === typeof g && (g = 5);
            this.lineWidth = k;
            this.beginPath();
            this.moveTo(a + g, b);
            this.lineTo(a + d - g, b);
            this.quadraticCurveTo(a + d, b, a + d, b + g);
            this.lineTo(a + d, b + f - g);
            this.quadraticCurveTo(a + d, b + f, a + d - g, b + f);
            this.lineTo(a + g, b + f);
            this.quadraticCurveTo(a, b + f, a, b + f - g);
            this.lineTo(a, b + g);
            this.quadraticCurveTo(a, b, a + g, b);
            this.closePath();
            h && this.fill();
            l && 0 < k && this.stroke()
        }
    }

    function ya(a, c) {
        return a - c
    }

    function Ja(a, c) {
        return a.x - c.x
    }

    function F(a) {
        var c = ((a & 16711680) >> 16).toString(16),
            b = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        c = 2 > c.length ? "0" + c : c;
        b = 2 > b.length ? "0" + b : b;
        a = 2 > a.length ? "0" + a : a;
        return "#" + c + b + a
    }

    function Qa(a, c) {
        var b = this.length >>> 0,
            d = Number(c) ||
            0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += b); d < b; d++)
            if (d in this && this[d] === a) return d;
        return -1
    }

    function y(a) {
        return null === a || "undefined" === typeof a
    }

    function qa(a) {
        a.indexOf || (a.indexOf = Qa);
        return a
    }

    function Ka(a, c, b) {
        b = b || "normal";
        var d = a + "_" + c + "_" + b,
            f = La[d];
        if (isNaN(f)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + c + "px; font-weight:" + b + ";";
                if (!aa) {
                    var g = document.body;
                    aa = document.createElement("span");
                    aa.innerHTML = "";
                    var k = document.createTextNode("Mpgyi");
                    aa.appendChild(k);
                    g.appendChild(aa)
                }
                aa.style.display = "";
                aa.setAttribute("style", a);
                f = Math.round(aa.offsetHeight);
                aa.style.display = "none"
            } catch (h) {
                f = Math.ceil(1.1 * c)
            }
            f = Math.max(f, c);
            La[d] = f
        }
        return f
    }

    function G(a, c) {
        var b = [];
        if (b = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[a || "solid"])
            for (var d =
                    0; d < b.length; d++) b[d] *= c;
        else b = [];
        return b
    }

    function J(a, c, b, d) {
        return a.addEventListener ? (a.addEventListener(c, b, d || !1), b) : a.attachEvent ? (d = function(d) {
            d = d || window.event;
            d.preventDefault = d.preventDefault || function() {
                d.returnValue = !1
            };
            d.stopPropagation = d.stopPropagation || function() {
                d.cancelBubble = !0
            };
            b.call(a, d)
        }, a.attachEvent("on" + c, d), d) : !1
    }

    function Ma(a, c, b) {
        a *= P;
        c *= P;
        a = b.getImageData(a, c, 2, 2).data;
        c = !0;
        for (b = 0; 4 > b; b++)
            if (a[b] !== a[b + 4] | a[b] !== a[b + 8] | a[b] !== a[b + 12]) {
                c = !1;
                break
            }
        return c ? a[0] << 16 |
            a[1] << 8 | a[2] : 0
    }

    function K(a, c, b) {
        return a in c ? c[a] : b[a]
    }

    function ra(a, c, b) {
        if (t && Na) {
            var d = a.getContext("2d");
            sa = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            P = za / sa;
            a.width = c * P;
            a.height = b * P;
            za !== sa && (a.style.width = c + "px", a.style.height = b + "px", d.scale(P, P))
        } else a.width = c, a.height = b
    }

    function Ra(a) {
        if (!Aa) {
            var c = !1,
                b = !1;
            "undefined" === typeof ba.Chart.creditHref ? (a.creditHref = "https://canvasjs.com/", a.creditText =
                "CanvasJS.com") : (c = a.updateOption("creditText"), b = a.updateOption("creditHref"));
            if (a.creditHref && a.creditText) {
                a._creditLink || (a._creditLink = document.createElement("a"), a._creditLink.setAttribute("class", "canvasjs-chart-credit"), a._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (a.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), a._creditLink.setAttribute("tabIndex", -1), a._creditLink.setAttribute("target", "_blank"));
                if (0 === a.renderCount || c || b) a._creditLink.setAttribute("href", a.creditHref), a._creditLink.innerHTML = a.creditText;
                a._creditLink && a.creditHref && a.creditText ? (a._creditLink.parentElement || a._canvasJSContainer.appendChild(a._creditLink), a._creditLink.style.top = a.height - 14 + "px") : a._creditLink.parentElement && a._canvasJSContainer.removeChild(a._creditLink)
            }
        }
    }

    function fa(a, c) {
        var b = document.createElement("canvas");
        b.setAttribute("class", "canvasjs-chart-canvas");
        ra(b, a, c);
        t || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(b);
        return b
    }

    function Ba(a, c, b) {
        if (a && c && b) {
            b = b + "." + c;
            var d = "image/" + c;
            a = a.toDataURL(d);
            var f = !1,
                g = document.createElement("a");
            g.download = b;
            g.href = a;
            g.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var k = a.replace(/^data:[a-z\/]*;base64,/, ""), k = atob(k), h = new ArrayBuffer(k.length), h = new Uint8Array(h), l = 0; l < k.length; l++) h[l] = k.charCodeAt(l);
                c = new Blob([h.buffer], {
                    type: "image/" + c
                });
                try {
                    window.navigator.msSaveBlob(c,
                        b), f = !0
                } catch (m) {
                    g.dataset.downloadurl = [d, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(c)
                }
            }
            if (!f) try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick")
            } catch (p) {
                c = window.open(), c.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), c.document.close()
            }
        }
    }

    function R(a, c, b) {
        c.getAttribute("state") !==
            b && (c.setAttribute("state", b), c.setAttribute("type", "button"), c.style.position = "relative", c.style.margin = "0px 0px 0px 0px", c.style.padding = "3px 4px 0px 4px", c.style.cssFloat = "left", c.setAttribute("title", a._cultureInfo[b + "Text"]), c.innerHTML = "<img style='height:16px;' src='" + Sa[b].image + "' alt='" + a._cultureInfo[b + "Text"] + "' />")
    }

    function ta() {
        for (var a = null, c = 0; c < arguments.length; c++) a = arguments[c], a.style && (a.style.display = "inline")
    }

    function Z() {
        for (var a = null, c = 0; c < arguments.length; c++)(a = arguments[c]) &&
            a.style && (a.style.display = "none")
    }

    function L(a, c, b, d) {
        this._defaultsKey = a;
        this.parent = d;
        this._eventListeners = [];
        d = {};
        b && (ha[b] && ha[b][a]) && (d = ha[b][a]);
        this.options = c ? c : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options, d)
    }

    function B(a, c) {
        c = c || {};
        B.base.constructor.call(this, "Chart", c, c.theme ? c.theme : "theme1");
        var b = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.panEnabled = this.disableToolTip = this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        };
        this._dataInRenderedOrder = [];
        if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) {
            this.container.innerHTML = "";
            var d = 0,
                f = 0,
                d = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width,
                f = this.options.height ? this.height :
                0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            this.width = d;
            this.height = f;
            this.x1 = this.y1 = 0;
            this.x2 = this.width;
            this.y2 = this.height;
            this._selectedColorSet = "undefined" !== typeof ga[this.colorSet] ? ga[this.colorSet] : ga.colorSet1;
            this._canvasJSContainer = document.createElement("div");
            this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");
            this._canvasJSContainer.style.position = "relative";
            this._canvasJSContainer.style.textAlign = "left";
            this._canvasJSContainer.style.cursor =
                "auto";
            t || (this._canvasJSContainer.style.height = "0px");
            this.container.appendChild(this._canvasJSContainer);
            this.canvas = fa(d, f);
            this.canvas.style.position = "absolute";
            this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ia(this.ctx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = fa(d, f), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas),
                    this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = fa(d, f), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new la(this), this.windowResizeHandler = J(window, "resize", function() {
                    b._updateSize() && b.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
                this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                }, J(this.overlaidCanvas, "click", function(a) {
                    b._mouseEventHandler(a)
                }), J(this.overlaidCanvas, "mousemove", function(a) {
                    b._mouseEventHandler(a)
                }), J(this.overlaidCanvas, "mouseup", function(a) {
                    b._mouseEventHandler(a)
                }), J(this.overlaidCanvas, "mousedown", function(a) {
                    b._mouseEventHandler(a);
                    Z(b._dropdownMenu)
                }), J(this.overlaidCanvas, "mouseout",
                    function(a) {
                        b._mouseEventHandler(a)
                    }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                    b._touchEventHandler(a)
                }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                    b._touchEventHandler(a)
                }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    b._touchEventHandler(a)
                }), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    b._touchEventHandler(a)
                }),
                this.toolTip = new Q(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                    axisX: [],
                    axisX2: [],
                    axisY: [],
                    axisY2: []
                })
        } else window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }

    function ua(a, c) {
        for (var b = [], d, f = 0; f < a.length; f++)
            if (0 == f) b.push(a[0]);
            else {
                var g, k, h;
                h = f - 1;
                g = 0 === h ? 0 : h - 1;
                k = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[k].x - a[g].x) / (0 === a[k].x - a[h].x ? 0.01 : a[k].x - a[h].x)) * (c -
                    1) / 2 + 1;
                var l = (a[k].x - a[g].x) / d;
                d = (a[k].y - a[g].y) / d;
                b[b.length] = a[h].x > a[g].x && 0 < l || a[h].x < a[g].x && 0 > l ? {
                    x: a[h].x + l / 3,
                    y: a[h].y + d / 3
                } : {
                    x: a[h].x,
                    y: a[h].y + d / 9
                };
                h = f;
                g = 0 === h ? 0 : h - 1;
                k = h === a.length - 1 ? h : h + 1;
                d = Math.abs((a[k].x - a[g].x) / (0 === a[h].x - a[g].x ? 0.01 : a[h].x - a[g].x)) * (c - 1) / 2 + 1;
                l = (a[k].x - a[g].x) / d;
                d = (a[k].y - a[g].y) / d;
                b[b.length] = a[h].x > a[g].x && 0 < l || a[h].x < a[g].x && 0 > l ? {
                    x: a[h].x - l / 3,
                    y: a[h].y - d / 3
                } : {
                    x: a[h].x,
                    y: a[h].y - d / 9
                };
                b[b.length] = a[f]
            }
        return b
    }

    function Oa(a, c) {
        if (null === a || "undefined" === typeof a) return c;
        var b = parseFloat(a.toString()) * (0 <= a.toString().indexOf("%") ? c / 100 : 1);
        return !isNaN(b) && b <= c && 0 <= b ? b : c
    }

    function ia(a, c, b, d, f) {
        "undefined" === typeof f && (f = 0);
        this._padding = f;
        this._x1 = a;
        this._y1 = c;
        this._x2 = b;
        this._y2 = d;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function U(a, c) {
        U.base.constructor.call(this, "TextBlock", c);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null
    }

    function ma(a, c) {
        ma.base.constructor.call(this, "Title", c, a.theme, a);
        this.chart = a;
        this.canvas =
            a.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (y(this.options.margin) && a.options.subtitles)
            for (var b = a.options.subtitles, d = 0; d < b.length; d++)
                if ((y(b[d].horizontalAlign) && "center" === this.horizontalAlign || b[d].horizontalAlign === this.horizontalAlign) && (y(b[d].verticalAlign) && "top" === this.verticalAlign || b[d].verticalAlign === this.verticalAlign) && !b[d].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function va(a, c) {
        va.base.constructor.call(this, "Subtitle", c, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function wa(a, c) {
        wa.base.constructor.call(this, "Legend", c, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.optionsName = "legend";
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = Ka(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }

    function Ca(a, c) {
        Ca.base.constructor.call(this,
            c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }

    function $(a, c, b, d) {
        $.base.constructor.call(this, "DataSeries", c, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = b;
        this.noDataPointsInPlotArea = 0;
        this.id = d;
        this.chart._eventManager.objectMap[d] = {
            id: d,
            objectType: "dataSeries",
            dataSeriesIndex: b
        };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        this.optionsName = "data";
        this.isOptionsInArray = !0;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity =
            0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }

    function C(a, c, b, d, f) {
        C.base.constructor.call(this, "Axis", c, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this.dataSeries = [];
        this._stripLineLabels = this._ticks = this._labels = null;
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        };
        this.isOptionsInArray = !0;
        "axisX" === b ? ("left" === d || "bottom" === d ? (this.optionsName = "axisX", y(this.chart.sessionVariables.axisX[f]) && (this.chart.sessionVariables.axisX[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[f]) : (this.optionsName = "axisX2", y(this.chart.sessionVariables.axisX2[f]) && (this.chart.sessionVariables.axisX2[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[f]), this.options.interval || (this.intervalType =
            null), "theme2" === this.chart.theme && y(this.options.lineThickness) && (this.lineThickness = 2)) : "left" === d || "top" === d ? (this.optionsName = "axisY", y(this.chart.sessionVariables.axisY[f]) && (this.chart.sessionVariables.axisY[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[f]) : (this.optionsName = "axisY2", y(this.chart.sessionVariables.axisY2[f]) && (this.chart.sessionVariables.axisY2[f] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[f]);
        "undefined" === typeof this.options.titleFontSize &&
            (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = b;
        "axisX" !== b || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle &&
            (this.labelAngle -= 360);
        if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (this.stripLines = [], c = 0; c < this.options.stripLines.length; c++) this.stripLines.push(new na(this.chart, this.options.stripLines[c], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) ||
            null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum =
            this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
    }

    function na(a, c, b, d, f) {
        na.base.constructor.call(this, "StripLine", c, b, f);
        this.id = d;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this.axis = f;
        this.optionsName = "stripLines";
        this.isOptionsInArray = !0;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = f.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = f.logarithmic ? Math.log(this.endValue / this.startValue) / Math.log(f.logarithmBase) :
            Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }

    function Q(a, c) {
        Q.base.constructor.call(this, "ToolTip", c, a.theme, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this.optionsName = "toolTip";
        this._initialize()
    }

    function la(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas =
            fa(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }

    function oa(a) {
        var c;
        a && pa[a] && (c = pa[a]);
        oa.base.constructor.call(this, "CultureInfo", c)
    }

    function Da(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var A = {},
        t = !!document.createElement("canvas").getContext,
        ba = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: t ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: t ? "transparent" : null,
                borderColor: t ?
                    "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: t ? "transparent" : null,
                titleBorderColor: t ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: t ? "transparent" : null,
                labelBorderColor: t ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: t ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                stripLines: [],
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: t ? "transparent" : null,
                labelBorderColor: t ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: t ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: t ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        pa = {
            en: {}
        },
        ga = {
            colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        ha = {
            theme1: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 33,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#666666",
                    titleFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#BBBBBB",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "#BBBBBB",
                    lineThickness: 2,
                    lineColor: "#BBBBBB"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 14,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "monospace, sans-serif,arial black" : "arial",
                    titleFontWeight: "bold",
                    labelFontFamily: t ? "monospace, Courier New, Courier" : "arial",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "arial"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        H = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        La = {},
        aa = null,
        Ea = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                b = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                d = "January February March April May June July August September October November December".split(" "),
                f = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                g = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                k = /[^-+\dA-Z]/g;
            return function(h, l, m) {
                var p = m ? m.days : c,
                    n = m ? m.months : d,
                    e = m ? m.shortDays : b,
                    q = m ? m.shortMonths : f;
                m = "";
                var r = !1;
                h = h && h.getTime ? h : h ? new Date(h) : new Date;
                if (isNaN(h)) throw SyntaxError("invalid date");
                "UTC:" === l.slice(0, 4) && (l = l.slice(4), r = !0);
                m = r ? "getUTC" : "get";
                var s = h[m + "Date"](),
                    w = h[m + "Day"](),
                    u = h[m + "Month"](),
                    v = h[m + "FullYear"](),
                    z = h[m + "Hours"](),
                    x = h[m + "Minutes"](),
                    t = h[m + "Seconds"](),
                    y = h[m + "Milliseconds"](),
                    A = r ? 0 : h.getTimezoneOffset();
                return m = l.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return O(s, 2);
                        case "DDD":
                            return e[w];
                        case "DDDD":
                            return p[w];
                        case "M":
                            return u + 1;
                        case "MM":
                            return O(u + 1, 2);
                        case "MMM":
                            return q[u];
                        case "MMMM":
                            return n[u];
                        case "Y":
                            return parseInt(String(v).slice(-2));
                        case "YY":
                            return O(String(v).slice(-2), 2);
                        case "YYY":
                            return O(String(v).slice(-3), 3);
                        case "YYYY":
                            return O(v,
                                4);
                        case "h":
                            return z % 12 || 12;
                        case "hh":
                            return O(z % 12 || 12, 2);
                        case "H":
                            return z;
                        case "HH":
                            return O(z, 2);
                        case "m":
                            return x;
                        case "mm":
                            return O(x, 2);
                        case "s":
                            return t;
                        case "ss":
                            return O(t, 2);
                        case "f":
                            return String(y).slice(0, 1);
                        case "ff":
                            return O(String(y).slice(0, 2), 2);
                        case "fff":
                            return O(String(y).slice(0, 3), 3);
                        case "t":
                            return 12 > z ? "a" : "p";
                        case "tt":
                            return 12 > z ? "am" : "pm";
                        case "T":
                            return 12 > z ? "A" : "P";
                        case "TT":
                            return 12 > z ? "AM" : "PM";
                        case "K":
                            return r ? "UTC" : (String(h).match(g) || [""]).pop().replace(k, "");
                        case "z":
                            return (0 < A ? "-" : "+") + Math.floor(Math.abs(A) / 60);
                        case "zz":
                            return (0 < A ? "-" : "+") + O(Math.floor(Math.abs(A) / 60), 2);
                        case "zzz":
                            return (0 < A ? "-" : "+") + O(Math.floor(Math.abs(A) / 60), 2) + O(Math.abs(A) % 60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        ca = function(a, c, b) {
            if (null === a) return "";
            a = Number(a);
            var d = 0 > a ? !0 : !1;
            d && (a *= -1);
            var f = b ? b.decimalSeparator : ".",
                g = b ? b.digitGroupSeparator : ",",
                k = "";
            c = String(c);
            var k = 1,
                h = b = "",
                l = -1,
                m = [],
                p = [],
                n = 0,
                e = 0,
                q = 0,
                r = !1,
                s = 0,
                h = c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            c = null;
            for (var w = 0; h && w < h.length; w++)
                if (c = h[w], "." === c && 0 > l) l = w;
                else {
                    if ("%" === c) k *= 100;
                    else if ("\u2030" === c) {
                        k *= 1E3;
                        continue
                    } else if ("," === c[0] && "." === c[c.length - 1]) {
                        k /= Math.pow(1E3, c.length - 1);
                        l = w + c.length - 1;
                        continue
                    } else "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || (r = !0);
                    0 > l ? (m.push(c), "#" === c || "0" === c ? n++ : "," === c && q++) : (p.push(c), "#" !== c && "0" !== c || e++)
                }
            r && (c = Math.floor(a), h = -Math.floor(Math.log(a) / Math.LN10 + 1), s = 0 === a ? 0 : 0 === c ? -(n + h) : String(c).length - n, k /= Math.pow(10, s));
            0 > l && (l = w);
            k = (a * k).toFixed(e);
            c = k.split(".");
            k = (c[0] + "").split("");
            a = (c[1] + "").split("");
            k && "0" === k[0] && k.shift();
            for (r = h = w = e = l = 0; 0 < m.length;)
                if (c = m.pop(), "#" === c || "0" === c)
                    if (l++, l === n) {
                        var u = k,
                            k = [];
                        if ("0" === c)
                            for (c = n - e - (u ? u.length : 0); 0 < c;) u.unshift("0"), c--;
                        for (; 0 < u.length;) b = u.pop() + b, r++, 0 === r % h && (w === q && 0 < u.length) && (b = g + b)
                    } else 0 < k.length ? (b = k.pop() + b, e++, r++) : "0" === c && (b = "0" + b, e++, r++), 0 === r % h && (w === q && 0 < k.length) && (b = g + b);
            else "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length - 1] || !/[eE][+-]*[0]+/.test(c) ? "," === c ? (w++, h = r, r = 0, 0 < k.length &&
                (b = g + b)) : b = 1 < c.length && ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? c.slice(1, c.length - 1) + b : c + b : (c = 0 > s ? c.replace("+", "").replace("-", "") : c.replace("-", ""), b += c.replace(/[0]+/, function(a) {
                return O(s, a.length)
            }));
            g = "";
            for (m = !1; 0 < p.length;) c = p.shift(), "#" === c || "0" === c ? 0 < a.length && 0 !== Number(a.join("")) ? (g += a.shift(), m = !0) : "0" === c && (g += "0", m = !0) : 1 < c.length && ('"' === c[0] && '"' === c[c.length - 1] || "'" === c[0] && "'" === c[c.length - 1]) ? g += c.slice(1, c.length - 1) : "E" !== c[0] && "e" !== c[0] || "0" !== c[c.length -
                1] || !/[eE][+-]*[0]+/.test(c) ? g += c : (c = 0 > s ? c.replace("+", "").replace("-", "") : c.replace("-", ""), g += c.replace(/[0]+/, function(a) {
                return O(s, a.length)
            }));
            b += (m ? f : "") + g;
            return d ? "-" + b : b
        },
        xa = function(a) {
            var c = 0,
                b = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (c = a.offsetX, b = a.offsetY) : a.layerX || 0 == a.layerX ? (c = a.layerX, b = a.layerY) : (c = a.pageX - a.target.offsetLeft, b = a.pageY - a.target.offsetTop);
            return {
                x: c,
                y: b
            }
        },
        Na = !0,
        za = window.devicePixelRatio || 1,
        sa = 1,
        P = Na ? za / sa : 1,
        Aa = window && window.location && window.location.href &&
        window.location.href.indexOf && (-1 !== window.location.href.indexOf("canvasjs.com") || -1 !== window.location.href.indexOf("fenopix.com") || -1 !== window.location.href.indexOf("fiddle")),
        Sa = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
            }
        };
    (function() {
        A.fSDec = function(a) {
            for (var c = "", b = 0; b < a.length; b++) c += String.fromCharCode(a[b] - 111);
            return c
        };
        A.str = {
            tv: [195, 225, 216, 208, 219, 143, 197, 212, 225,
                226, 216, 222, 221
            ],
            fntStr: [223, 231, 143, 178, 208, 219, 216, 209, 225, 216, 155, 143, 187, 228, 210, 216, 211, 208, 143, 182, 225, 208, 221, 211, 212, 155, 143, 187, 228, 210, 216, 211, 208, 143, 194, 208, 221, 226, 143, 196, 221, 216, 210, 222, 211, 212, 155, 143, 176, 225, 216, 208, 219, 155, 143, 226, 208, 221, 226, 156, 226, 212, 225, 216, 213],
            tBl: [227, 212, 231, 227, 177, 208, 226, 212, 219, 216, 221, 212],
            fnt: [213, 222, 221, 227],
            fSy: [213, 216, 219, 219, 194, 227, 232, 219, 212],
            fTx: [213, 216, 219, 219, 195, 212, 231, 227],
            gr: [214, 225, 212, 232],
            ct: [210, 227, 231],
            tp: [227, 222, 223]
        };
        delete ba[A.fSDec([178,
            215, 208, 225, 227
        ])][A.fSDec([210, 225, 212, 211, 216, 227, 183, 225, 212, 213])];
        A.pro = {
            sCH: ba[A.fSDec([178, 215, 208, 225, 227])][A.fSDec([210, 225, 212, 211, 216, 227, 183, 225, 212, 213])]
        };
        A.fAWm = function(a) {
            if ("undefined" === typeof A.pro.sCH && !Aa) {
                var c = a[A.fSDec(A.str.ct)];
                c[A.fSDec(A.str.tBl)] = A.fSDec(A.str.tp);
                c[A.fSDec(A.str.fnt)] = 11 + A.fSDec(A.str.fntStr);
                c[A.fSDec(A.str.fSy)] = A.fSDec(A.str.gr);
                c[A.fSDec(A.str.fTx)](A.fSDec(A.str.tv), 2, a.height - 11 - 2)
            }
        }
    })();
    (function() {
        A.ckDec = function(a) {
            for (var c = "", b = 0; b < a.length; b++) c +=
                String.fromCharCode(a[b] - 111);
            return c
        };
        A.str.ckn = [206, 206, 210, 230, 217, 198, 226, 195, 225];
        A.str.tem = [195, 225, 216, 208, 219, 143, 191, 212, 225, 216, 222, 211, 143, 215, 208, 226, 143, 180, 231, 223, 216, 225, 212, 211, 144];
        A.str.ctm = [191, 219, 212, 208, 226, 212, 143, 210, 222, 221, 227, 208, 210, 227, 143, 226, 208, 219, 212, 226, 175, 210, 208, 221, 229, 208, 226, 217, 226, 157, 210, 222, 220];
        A.str.ltm = [213, 222, 225, 143, 219, 216, 210, 212, 221, 226, 212, 143, 222, 225, 143, 227, 225, 216, 208, 219, 143, 212, 231, 227, 212, 221, 227, 216, 222, 221];
        A.str.ckve = [212, 231, 223, 216,
            225, 212, 226, 172
        ];
        A.str.mco = [225, 214, 209, 208, 151, 161, 164, 164, 155, 161, 164, 164, 155, 161, 164, 164, 155, 159, 157, 164, 152];
        A.str.mcw = [198, 215, 216, 227, 212];
        A.str.mct = [225, 214, 209, 208, 151, 161, 162, 160, 155, 161, 168, 155, 164, 163, 155, 159, 157, 166, 152];
        A.str.mcr = [193, 212, 211];
        A.str.sk = [226, 212, 225, 216, 208, 219, 186, 212, 232];
        A.fNg = function(a) {
            if (!Aa) try {
                var c;
                a: {
                    var b = RegExp(A.ckDec(A.str.ckn) + "=.*", "gi"),
                        d = new Date,
                        f = document.cookie.match(b),
                        g = localStorage && localStorage.getItem("lclStg") && JSON.parse(localStorage.getItem("lclStg")).name.match(A.ckDec(A.str.ckn)) ?
                        JSON.parse(localStorage.getItem("lclStg")) : null;
                    if (f && 0 < f.length || g) {
                        var k, b = [],
                            h = [],
                            l = null;
                        if (f)
                            for (var m = f[0].split("; "), f = 0; f < m.length; f++) b.push(m[f].split("=")[0]), h.push(m[f].split("=")[1]);
                        g && (l = g);
                        k = {
                            ckVal: Number(h[0]),
                            lSVal: l ? Number(l.val) : null
                        };
                        g = null;
                        k && k.ckVal && k.lSVal ? g = Math.min(k.ckVal, k.lSVal) : k && k.ckVal ? g = k.ckVal : k && k.lSVal && (g = k.lSVal);
                        var p = Math.round(Math.abs(g - d.getTime())),
                            n;
                        if (!y(ja[A.ckDec(A.str.sk)]) && "string" === typeof ja[A.ckDec(A.str.sk)] && ja[A.ckDec(A.str.sk)]) {
                            var e = ja[A.ckDec(A.str.sk)],
                                d = [];
                            k = [];
                            for (var m = 0, b = f = "", q = e.substr(e.length - 3, e.length), h = 0; h < e.length - 3; h++) d.push(parseInt(e.charCodeAt(h)) - 59), f += String.fromCharCode(d[h]), m += parseInt(parseInt(f.charCodeAt(h)) + 59, 10);
                            m %= 256;
                            m = 99 < m ? "" + m : 9 < m ? "0" + m : "00" + m;
                            for (h = 0; h < q.length; h++) k.push(parseInt(q.charCodeAt(h)) - 59), b += String.fromCharCode(k[h]);
                            n = m === b ? f : 0
                        } else n = 0;
                        var r = n ? (new Date(Number(n))).getTime() - g : 5184E6;
                        if (isNaN(r) || p > r) {
                            c = !0;
                            break a
                        }
                    } else {
                        h = new Date;
                        l = h.getTime();
                        h.setTime(l + 31536E6);
                        var s = {
                            name: A.ckDec(A.str.ckn),
                            val: (new Date).getTime()
                        };
                        document.cookie = A.ckDec(A.str.ckn) + "=" + (new Date).getTime() + "; " + A.ckDec(A.str.ckve) + h.toUTCString() + "; path=/;";
                        localStorage.setItem("lclStg", JSON.stringify(s))
                    }
                    c = !1
                }
                if (c) {
                    c = 20;
                    var w = a.plotArea.ctx;
                    w.font = "bold " + c + (t ? "px Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" : "px Lucida Sans Unicode");
                    var u = A.ckDec(A.str.tem),
                        v = w.measureText(u).width;
                    w.fillStyle = t ? A.ckDec(A.str.mco) : A.ckDec(A.str.mcw);
                    w.fillRect(a.plotArea.x2 - v - 8, a.plotArea.y2 - 2.5 * c - 8, v + 4, 2.5 * c +
                        8);
                    w.fillStyle = t ? A.ckDec(A.str.mct) : A.ckDec(A.str.mcr);
                    w.textBaseline = "top";
                    w.fillText(u, a.plotArea.x2 - v - 4, a.plotArea.y2 - 2.5 * c - 2);
                    c = 14;
                    w.font = c + (t ? "px Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" : "px Lucida Sans Unicode");
                    u = A.ckDec(A.str.ctm);
                    v = w.measureText(u).width;
                    w.fillStyle = t ? A.ckDec(A.str.mct) : A.ckDec(A.str.mcr);
                    w.fillText(u, a.plotArea.x2 - v - 4, a.plotArea.y2 - 2 * c - 4);
                    u = A.ckDec(A.str.ltm);
                    v = w.measureText(u).width;
                    w.fillText(u, a.plotArea.x2 - v - 4, a.plotArea.y2 - c - 4)
                }
            } catch (z) {}
        }
    })();
    L.prototype.setOptions = function(a, c) {
        if (ba[this._defaultsKey]) {
            var b = ba[this._defaultsKey],
                d;
            for (d in b) "publicProperties" !== d && b.hasOwnProperty(d) && (this[d] = a && d in a ? a[d] : c && d in c ? c[d] : b[d])
        }
    };
    L.prototype.get = function(a) {
        var c = ba[this._defaultsKey];
        if ("options" === a) return this.options && this.options._isPlaceholder ? null : this.options;
        if (c.hasOwnProperty(a) || c.publicProperties && c.publicProperties.hasOwnProperty(a)) return this[a];
        window.console && window.console.log('Property "' + a + "\" doesn't exist. Please check for typo.")
    };
    L.prototype.set = function(a, c, b) {
        b = "undefined" === typeof b ? !0 : b;
        var d = ba[this._defaultsKey];
        if ("options" === a) this.createUserOptions(c);
        else if (d.hasOwnProperty(a) || d.publicProperties && d.publicProperties.hasOwnProperty(a) && "readWrite" === d.publicProperties[a]) this.options._isPlaceholder && this.createUserOptions(), this.options[a] = c;
        else {
            window.console && (d.publicProperties && d.publicProperties.hasOwnProperty(a) && "readOnly" === d.publicProperties[a] ? window.console.log('Property "' + a + '" is read-only.') : window.console.log('Property "' +
                a + "\" doesn't exist. Please check for typo."));
            return
        }
        b && (chart = this.chart || this, chart.render())
    };
    L.prototype.addTo = function(a, c, b, d) {
        d = "undefined" === typeof d ? !0 : d;
        var f = ba[this._defaultsKey];
        f.hasOwnProperty(a) || f.publicProperties && f.publicProperties.hasOwnProperty(a) && "readWrite" === f.publicProperties[a] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[a] && (this.options[a] = []), a = this.options[a], b = "undefined" === typeof b || null === b ? a.length : b, a.splice(b, 0, c),
            d && (chart = this.chart || this, chart.render())) : window.console && (f.publicProperties && f.publicProperties.hasOwnProperty(a) && "readOnly" === f.publicProperties[a] ? window.console.log('Property "' + a + '" is read-only.') : window.console.log('Property "' + a + "\" doesn't exist. Please check for typo."))
    };
    L.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] ||
                    (this.parent.options[this.optionsName] = []);
                var c = this.parent.options[this.optionsName],
                    b = c.length;
                this.options._isPlaceholder || (qa(c), b = c.indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                c[b] = this.options
            } else this.options = "undefined" === typeof a ? {} : a, a = this.parent.options, this.optionsName ? c = this.optionsName : (c = this._defaultsKey) && 0 !== c.length ? (b = c.charAt(0).toLowerCase(), 1 < c.length && (b = b.concat(c.slice(1))), c = b) : c = void 0, a[c] = this.options
    };
    L.prototype.remove = function(a) {
        a = "undefined" ===
            typeof a ? !0 : a;
        if (this.isOptionsInArray) {
            var c = this.parent.options[this.optionsName];
            qa(c);
            var b = c.indexOf(this.options);
            0 <= b && c.splice(b, 1)
        } else delete this.parent.options[this.optionsName];
        a && (chart = this.chart || this, chart.render())
    };
    L.prototype.updateOption = function(a) {
        var c = ba[this._defaultsKey],
            b = this.options.theme ? this.options.theme : this.chart && this.chart.options.theme ? this.chart.options.theme : "theme1",
            d = {},
            f = this[a];
        b && (ha[b] && ha[b][this._defaultsKey]) && (d = ha[b][this._defaultsKey]);
        a in c && (f =
            a in this.options ? this.options[a] : d && a in d ? d[a] : c[a]);
        if (f === this[a]) return !1;
        this[a] = f;
        return !0
    };
    L.prototype.trackChanges = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[a] = this.options[a]
    };
    L.prototype.isBeingTracked = function(a) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[a] ? !0 : !1
    };
    L.prototype.hasOptionChanged = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[a] !==
            this.options[a]
    };
    L.prototype.addEventListener = function(a, c, b) {
        a && c && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({
            context: b || this,
            eventHandler: c
        }))
    };
    L.prototype.removeEventListener = function(a, c) {
        if (a && c && this._eventListeners[a])
            for (var b = this._eventListeners[a], d = 0; d < b.length; d++)
                if (b[d].eventHandler === c) {
                    b[d].splice(d, 1);
                    break
                }
    };
    L.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    };
    L.prototype.dispatchEvent = function(a, c, b) {
        if (a && this._eventListeners[a]) {
            c =
                c || {};
            for (var d = this._eventListeners[a], f = 0; f < d.length; f++) d[f].eventHandler.call(d[f].context, c)
        }
        "function" === typeof this[a] && this[a].call(b || this.chart, c)
    };
    S(B, L);
    B.prototype.destroy = function() {
        var a = window,
            c = this.windowResizeHandler;
        a.removeEventListener ? a.removeEventListener("resize", c) : a.detachEvent && a.detachEvent("onresize", c)
    };
    B.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("dataPointWidth");
        this.updateOption("dataPointMinWidth");
        this.updateOption("dataPointMaxWidth");
        this.updateOption("interactivityEnabled");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof ga[this.colorSet] ? ga[this.colorSet] : ga.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new oa(this.options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && t;
        this.updateOption("animationDuration");
        this.updateOption("rangeChanging");
        this.updateOption("rangeChanged");
        this.updateOption("exportEnabled");
        this.updateOption("exportFileName");
        this.updateOption("zoomType");
        this.options.zoomEnabled ? (this._zoomButton || (Z(this._zoomButton = document.createElement("button")), R(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton), J(this._zoomButton, "click", function() {
            a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, R(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, R(a, a._zoomButton,
                "pan"));
            a.render()
        })), this._resetButton || (Z(this._resetButton = document.createElement("button")), R(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), J(this._resetButton, "click", function() {
            a.toolTip.hide();
            a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, R(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
            if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum =
                    null, a.sessionVariables.axisX[b].newViewportMaximum = null;
            if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
            if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
            if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum =
                    null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
            a.resetOverlayedCanvas();
            Z(a._zoomButton, a._resetButton);
            a._dispatchRangeEvent("rangeChanging", "reset");
            a.render();
            a._dispatchRangeEvent("rangeChanged", "reset")
        }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), ta(a._zoomButton, a._resetButton)) :
            (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
        this._menuButton ? this.exportEnabled ? ta(this._menuButton) : Z(this._menuButton) : this.exportEnabled && t && (this._menuButton = document.createElement("button"), R(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), J(this._menuButton, "click", function() {
            "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block",
                a._menuButton.blur(), a._dropdownMenu.focus())
        }, !0));
        if (!this._dropdownMenu && this.exportEnabled && t) {
            this._dropdownMenu = document.createElement("div");
            this._dropdownMenu.setAttribute("tabindex", -1);
            this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
            a._dropdownMenu.style.display = "none";
            this._toolBar.appendChild(this._dropdownMenu);
            J(this._dropdownMenu, "blur", function() {
                Z(a._dropdownMenu);
                a._dropDownCloseTime = new Date
            }, !0);
            var c = document.createElement("div");
            c.style.cssText = "padding: 2px 15px 2px 10px";
            c.innerHTML = this._cultureInfo.printText;
            this._dropdownMenu.appendChild(c);
            J(c, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            J(c, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            J(c, "click", function() {
                a.print();
                Z(a._dropdownMenu)
            }, !0);
            c = document.createElement("div");
            c.style.cssText = "padding: 2px 15px 2px 10px";
            c.innerHTML = this._cultureInfo.saveJPGText;
            this._dropdownMenu.appendChild(c);
            J(c, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            J(c, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            J(c, "click", function() {
                Ba(a.canvas, "jpeg", a.exportFileName);
                Z(a._dropdownMenu)
            }, !0);
            c = document.createElement("div");
            c.style.cssText = "padding: 2px 15px 2px 10px";
            c.innerHTML = this._cultureInfo.savePNGText;
            this._dropdownMenu.appendChild(c);
            J(c, "mouseover", function() {
                this.style.backgroundColor = "#EEEEEE"
            }, !0);
            J(c, "mouseout", function() {
                this.style.backgroundColor = "transparent"
            }, !0);
            J(c, "click", function() {
                Ba(a.canvas, "png", a.exportFileName);
                Z(a._dropdownMenu)
            }, !0)
        }
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? R(a, a._zoomButton, "zoom") : R(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && R(a, a._resetButton, "reset"));
        this.options.toolTip && this.toolTip.options !==
            this.options.toolTip && (this.toolTip.options = this.options.toolTip);
        for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b)
    };
    B.prototype._updateSize = function() {
        var a = 0,
            c = 0;
        this.options.width ? a = this.width : this.width = a = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
        this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
        return this.canvas.width !== a * P || this.canvas.height !== c *
            P ? (ra(this.canvas, a, c), ra(this.overlaidCanvas, a, c), ra(this._eventManager.ghostCanvas, a, c), !0) : !1
    };
    B.prototype._initialize = function() {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new Da(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = t && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisX = [];
        this.axisX2 = [];
        this.axisY = [];
        this.axisY2 = [];
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        };
        this.layoutManager = new ia(0, 0, this.width, this.height, 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        var a = 0;
        if (this.options.data)
            for (var c = 0; c < this.options.data.length; c++)
                if (a++, !this.options.data[c].type ||
                    0 <= B._supportedChartTypes.indexOf(this.options.data[c].type)) {
                    var b = new $(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                    null === b.name && (b.name = "DataSeries " + a);
                    null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this._selectedColorSet[b.index % this._selectedColorSet.length]], b.color = this._selectedColorSet[b.index % this._selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" ===
                        b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type ? [this._selectedColorSet[0]] : this._selectedColorSet : b._colorSet = [b.color];
                    null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                    "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                            return a.x
                        }) &&
                        b.dataPoints.sort(Ja) : b.dataPoints.sort(Ja));
                    this.data.push(b);
                    var d = b.axisPlacement,
                        f;
                    "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ?
                        f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                    if (f && window.console) {
                        window.console.log(f);
                        return
                    }
                }
        var g = this;
        /*this.addEventListener("dataAnimationIterationEnd",
            function() {
                A.fAWm && A.fAWm(g);
                0 !== g.axisX.length && A.fNg && A.fNg(g)
            });
        Ra(this);*/
        this._objectsInitialized = !0
    };
    B._supportedChartTypes = qa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    B.prototype.render = function(a) {
        a && (this.options = a);
        this._initialize();
        var c = [];
        for (a = 0; a < this.data.length; a++)
            if ("normal" ===
                this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                if (!this.data[a].axisYType || "primary" === this.data[a].axisYType)
                    if (this.options.axisY && 0 < this.options.axisY.length) {
                        if (!this.axisY.length)
                            for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new C(this, this.options.axisY[b], "axisY", "left", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new C(this, this.options.axisY[b], "axisY", "bottom", b));
                        this.data[a].axisY = this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0];
                        this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new C(this, this.options.axisY, "axisY", "left", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new C(this, this.options.axisY,
                        "axisY", "bottom", 0))), this.data[a].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[a]);
                if ("secondary" === this.data[a].axisYType)
                    if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                        if (!this.axisY2.length)
                            for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new C(this, this.options.axisY2[b], "axisY", "right", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new C(this, this.options.axisY2[b], "axisY", "top",
                                b));
                        this.data[a].axisY = this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0];
                        this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new C(this, this.options.axisY2, "axisY", "right", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new C(this,
                        this.options.axisY2, "axisY", "top", 0))), this.data[a].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[a]);
                if (!this.data[a].axisXType || "primary" === this.data[a].axisXType)
                    if (this.options.axisX && 0 < this.options.axisX.length) {
                        if (!this.axisX.length)
                            for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new C(this, this.options.axisX[b], "axisX", "bottom", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new C(this,
                                this.options.axisX[b], "axisX", "left", b));
                        this.data[a].axisX = this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0];
                        this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new C(this, this.options.axisX, "axisX", "bottom", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] =
                        new C(this, this.options.axisX, "axisX", "left", 0))), this.data[a].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[a]);
                if ("secondary" === this.data[a].axisXType)
                    if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                        if (!this.axisX2.length)
                            for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new C(this, this.options.axisX2[b], "axisX", "top", b)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new C(this, this.options.axisX2[b],
                                "axisX", "right", b));
                        this.data[a].axisX = this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0];
                        this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                    } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new C(this, this.options.axisX2, "axisX", "top", 0)) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] =
                        new C(this, this.options.axisX2, "axisX", "right", 0))), this.data[a].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[a])
            }
        if (this.axisY) {
            for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
            for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10)
        }
        if (this.axisY2) {
            for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness =
                0);
            for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
        }
        this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
        if (this.axisX)
            for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness &&
                (this.axisX[b].gridThickness = 0);
        if (this.axisX2)
            for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
        this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
        b = !1;
        if (0 < this._axes.length &&
            (this.zoomEnabled || this.panEnabled))
            for (a = 0; a < this._axes.length; a++)
                if (null !== this._axes[a].viewportMinimum || null !== this._axes[a].viewportMaximum) {
                    b = !0;
                    break
                }
        b ? ta(this._zoomButton, this._resetButton) : (Z(this._zoomButton, this._resetButton), this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
        this._processData();
        this.options.title && (this.title = new ma(this, this.options.title), this.title.dockInsidePlotArea ? c.push(this.title) : this.title.render());
        if (this.options.subtitles)
            for (this.subtitles = [], a = 0; a < this.options.subtitles.length; a++) b = new va(this, this.options.subtitles[a]), this.subtitles.push(b), b.dockInsidePlotArea ? c.push(b) : b.render();
        this.legend = new wa(this, this.options.legend);
        for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
        this.legend.dockInsidePlotArea ? c.push(this.legend) : this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) C.setLayoutAndRender(this.axisX,
            this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (a = 0; a < c.length; a++) c[a].render();
        var d = [];
        if (this.animatedRender) {
            var f = fa(this.width, this.height);
            f.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        for (a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var c = this.plotInfo.plotTypes[a], g = 0; g < c.plotUnits.length; g++) {
                var k = c.plotUnits[g],
                    h = null;
                k.targetCanvas =
                    null;
                this.animatedRender && (k.targetCanvas = fa(this.width, this.height), k.targetCanvasCtx = k.targetCanvas.getContext("2d"));
                "line" === k.type ? h = this.renderLine(k) : "stepLine" === k.type ? h = this.renderStepLine(k) : "spline" === k.type ? h = this.renderSpline(k) : "column" === k.type ? h = this.renderColumn(k) : "bar" === k.type ? h = this.renderBar(k) : "area" === k.type ? h = this.renderArea(k) : "stepArea" === k.type ? h = this.renderStepArea(k) : "splineArea" === k.type ? h = this.renderSplineArea(k) : "stackedColumn" === k.type ? h = this.renderStackedColumn(k) :
                    "stackedColumn100" === k.type ? h = this.renderStackedColumn100(k) : "stackedBar" === k.type ? h = this.renderStackedBar(k) : "stackedBar100" === k.type ? h = this.renderStackedBar100(k) : "stackedArea" === k.type ? h = this.renderStackedArea(k) : "stackedArea100" === k.type ? h = this.renderStackedArea100(k) : "bubble" === k.type ? h = h = this.renderBubble(k) : "scatter" === k.type ? h = this.renderScatter(k) : "pie" === k.type ? this.renderPie(k) : "doughnut" === k.type ? this.renderPie(k) : "candlestick" === k.type ? h = this.renderCandlestick(k) : "ohlc" === k.type ? h = this.renderCandlestick(k) :
                    "rangeColumn" === k.type ? h = this.renderRangeColumn(k) : "rangeBar" === k.type ? h = this.renderRangeBar(k) : "rangeArea" === k.type ? h = this.renderRangeArea(k) : "rangeSplineArea" === k.type && (h = this.renderRangeSplineArea(k));
                for (b = 0; b < k.dataSeriesIndexes.length; b++) this._dataInRenderedOrder.push(this.data[k.dataSeriesIndexes[b]]);
                this.animatedRender && h && d.push(h)
            }
        this.animatedRender && 0 < this._indexLabels.length && (a = fa(this.width, this.height).getContext("2d"), d.push(this.renderIndexLabels(a)));
        var l = this;
        0 < d.length ? (l.disableToolTip = !0, l._animator.animate(200, l.animationDuration, function(a) {
            l.ctx.clearRect(0, 0, l.width, l.height);
            l.ctx.drawImage(f, 0, 0, Math.floor(l.width * P), Math.floor(l.height * P), 0, 0, l.width, l.height);
            for (var b = 0; b < d.length; b++) h = d[b], 1 > a && "undefined" !== typeof h.startTimePercent ? a >= h.startTimePercent && h.animationCallback(h.easingFunction(a - h.startTimePercent, 0, 1, 1 - h.startTimePercent), h) : h.animationCallback(h.easingFunction(a, 0, 1, 1), h);
            l.dispatchEvent("dataAnimationIterationEnd", {
                chart: l
            })
        }, function() {
            d = [];
            for (var a =
                    0; a < l.plotInfo.plotTypes.length; a++)
                for (var b = l.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) b.plotUnits[c].targetCanvas = null;
            f = null;
            l.disableToolTip = !1
        })) : (0 < l._indexLabels.length && l.renderIndexLabels(), l.dispatchEvent("dataAnimationIterationEnd", {
            chart: l
        }));
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || Z(this._zoomButton, this._resetButton);
        this.toolTip._updateToolTip();
        this.renderCount++
    };
    B.prototype.attachPlotAreaEventHandlers =
        function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.zoomEnabled ? "col-resize" : "move",
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
    B.prototype.categoriseDataSeries = function() {
        for (var a = "", c = 0; c < this.data.length; c++)
            if (a = this.data[c], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= B._supportedChartTypes.indexOf(a.type)) {
                for (var b = null, d = !1, f = null, g = !1, k =
                        0; k < this.plotInfo.plotTypes.length; k++)
                    if (this.plotInfo.plotTypes[k].type === a.type) {
                        d = !0;
                        b = this.plotInfo.plotTypes[k];
                        break
                    }
                d || (b = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(b));
                for (k = 0; k < b.plotUnits.length; k++)
                    if (b.plotUnits[k].axisYType === a.axisYType && b.plotUnits[k].axisXType === a.axisXType && b.plotUnits[k].axisYIndex === a.axisYIndex && b.plotUnits[k].axisXIndex === a.axisXIndex) {
                        g = !0;
                        f = b.plotUnits[k];
                        break
                    }
                g || (f = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: b.plotUnits.length,
                    plotType: b,
                    axisXType: a.axisXType,
                    axisYType: a.axisYType,
                    axisYIndex: a.axisYIndex,
                    axisXIndex: a.axisXIndex,
                    axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                    axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                    dataSeriesIndexes: [],
                    yTotals: []
                }, b.plotUnits.push(f));
                b.totalDataSeries++;
                f.dataSeriesIndexes.push(c);
                a.plotUnit = f
            }
        for (c = 0; c < this.plotInfo.plotTypes.length; c++)
            for (b = this.plotInfo.plotTypes[c], k = a = 0; k < b.plotUnits.length; k++) b.plotUnits[k].previousDataSeriesCount = a, a += b.plotUnits[k].dataSeriesIndexes.length
    };
    B.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
            var c = this.data[a];
            if (c.dataPoints)
                for (var b = c.dataPoints.length, d = 0; d < b; d++) c.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    B.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var c = this.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) {
                var d = c.plotUnits[b];
                "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ? this._processStackedPlotUnit(d) : "stackedColumn100" ===
                    d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) : "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
            }
    };
    B.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, f, g = !1, k = 0; k < a.dataSeriesIndexes.length; k++) {
                var h = this.data[a.dataSeriesIndexes[k]],
                    l = 0,
                    m = !1,
                    p = !1,
                    n;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) var e = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                    q = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                    this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (h.dataPoints[l].x && h.dataPoints[l].x.getTime || "dateTime" === h.xValueType) g = !0;
                for (l = 0; l < h.dataPoints.length; l++) {
                    "undefined" === typeof h.dataPoints[l].x && (h.dataPoints[l].x = l + (a.axisX.logarithmic ? 1 : 0));
                    h.dataPoints[l].x.getTime ? (g = !0, d = h.dataPoints[l].x.getTime()) : d = h.dataPoints[l].x;
                    f = h.dataPoints[l].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    f < c.min && "number" === typeof f && (c.min = f);
                    f > c.max && "number" === typeof f && (c.max = f);
                    if (0 < l) {
                        if (a.axisX.logarithmic) {
                            var r = d / h.dataPoints[l - 1].x;
                            1 > r && (r = 1 / r);
                            b.minDiff > r && 1 !== r && (b.minDiff = r)
                        } else r = d - h.dataPoints[l - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r);
                        null !== f && null !== h.dataPoints[l - 1].y && (a.axisY.logarithmic ? (r = f / h.dataPoints[l - 1].y, 1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r)) : (r = f - h.dataPoints[l - 1].y, 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r)))
                    }
                    if (d < e && !m) null !== f && (n = d);
                    else {
                        if (!m && (m = !0, 0 < l)) {
                            l -= 2;
                            continue
                        }
                        if (d > q &&
                            !p) p = !0;
                        else if (d > q && p) continue;
                        h.dataPoints[l].label && (a.axisX.labels[d] = h.dataPoints[l].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === f ? b.viewPortMin === d && n < d && (b.viewPortMin = n) : (f < c.viewPortMin && "number" === typeof f && (c.viewPortMin = f), f > c.viewPortMax && "number" === typeof f && (c.viewPortMax = f))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = g ? "dateTime" : "number"
            }
    };
    B.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var c =
                    a.axisY.dataInfo, b = a.axisX.dataInfo, d, f, g = !1, k = [], h = [], l = Infinity, m = -Infinity, p = 0; p < a.dataSeriesIndexes.length; p++) {
                var n = this.data[a.dataSeriesIndexes[p]],
                    e = 0,
                    q = !1,
                    r = !1,
                    s;
                if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var w = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                    u = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (n.dataPoints[e].x && n.dataPoints[e].x.getTime || "dateTime" === n.xValueType) g = !0;
                for (e = 0; e < n.dataPoints.length; e++) {
                    "undefined" === typeof n.dataPoints[e].x && (n.dataPoints[e].x = e + (a.axisX.logarithmic ? 1 : 0));
                    n.dataPoints[e].x.getTime ? (g = !0, d = n.dataPoints[e].x.getTime()) : d = n.dataPoints[e].x;
                    f = y(n.dataPoints[e].y) ? 0 : n.dataPoints[e].y;
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    if (0 < e) {
                        if (a.axisX.logarithmic) {
                            var v = d / n.dataPoints[e - 1].x;
                            1 > v && (v = 1 / v);
                            b.minDiff > v && 1 !== v && (b.minDiff = v)
                        } else v = d - n.dataPoints[e - 1].x, 0 > v && (v *= -1), b.minDiff > v && 0 !== v && (b.minDiff = v);
                        null !== f && null !== n.dataPoints[e - 1].y && (a.axisY.logarithmic ? 0 < f && (v = f / n.dataPoints[e - 1].y, 1 > v && (v = 1 / v), c.minDiff > v && 1 !== v && (c.minDiff = v)) : (v = f - n.dataPoints[e - 1].y, 0 > v && (v *= -1), c.minDiff >
                            v && 0 !== v && (c.minDiff = v)))
                    }
                    if (d < w && !q) null !== n.dataPoints[e].y && (s = d);
                    else {
                        if (!q && (q = !0, 0 < e)) {
                            e -= 2;
                            continue
                        }
                        if (d > u && !r) r = !0;
                        else if (d > u && r) continue;
                        n.dataPoints[e].label && (a.axisX.labels[d] = n.dataPoints[e].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        null === n.dataPoints[e].y ? b.viewPortMin === d && s < d && (b.viewPortMin = s) : (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(f), 0 <= f ? k[d] ? k[d] += f : (k[d] = f, l = Math.min(f, l)) : h[d] ? h[d] += f : (h[d] = f, m = Math.max(f, m)))
                    }
                }
                this.plotInfo.axisXValueType =
                    n.xValueType = g ? "dateTime" : "number"
            }
            for (e in k) k.hasOwnProperty(e) && !isNaN(e) && (a = k[e], a < c.min && (c.min = Math.min(a, l)), a > c.max && (c.max = a), e < b.viewPortMin || e > b.viewPortMax || (a < c.viewPortMin && (c.viewPortMin = Math.min(a, l)), a > c.viewPortMax && (c.viewPortMax = a)));
            for (e in h) h.hasOwnProperty(e) && !isNaN(e) && (a = h[e], a < c.min && (c.min = a), a > c.max && (c.max = Math.max(a, m)), e < b.viewPortMin || e > b.viewPortMax || (a < c.viewPortMin && (c.viewPortMin = a), a > c.viewPortMax && (c.viewPortMax = Math.max(a, m))))
        }
    };
    B.prototype._processStacked100PlotUnit =
        function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, f, g = !1, k = !1, h = !1, l = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var p = this.data[a.dataSeriesIndexes[m]],
                        n = 0,
                        e = !1,
                        q = !1,
                        r;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var s = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX &&
                        this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        w = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[n].x && p.dataPoints[n].x.getTime || "dateTime" === p.xValueType) g = !0;
                    for (n = 0; n < p.dataPoints.length; n++) {
                        "undefined" === typeof p.dataPoints[n].x && (p.dataPoints[n].x =
                            n + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[n].x.getTime ? (g = !0, d = p.dataPoints[n].x.getTime()) : d = p.dataPoints[n].x;
                        f = y(p.dataPoints[n].y) ? null : p.dataPoints[n].y;
                        d < b.min && (b.min = d);
                        d > b.max && (b.max = d);
                        if (0 < n) {
                            if (a.axisX.logarithmic) {
                                var u = d / p.dataPoints[n - 1].x;
                                1 > u && (u = 1 / u);
                                b.minDiff > u && 1 !== u && (b.minDiff = u)
                            } else u = d - p.dataPoints[n - 1].x, 0 > u && (u *= -1), b.minDiff > u && 0 !== u && (b.minDiff = u);
                            y(f) || null === p.dataPoints[n - 1].y || (a.axisY.logarithmic ? 0 < f && (u = f / p.dataPoints[n - 1].y, 1 > u && (u = 1 / u), c.minDiff > u && 1 !== u && (c.minDiff =
                                u)) : (u = f - p.dataPoints[n - 1].y, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u)))
                        }
                        if (d < s && !e) null !== f && (r = d);
                        else {
                            if (!e && (e = !0, 0 < n)) {
                                n -= 2;
                                continue
                            }
                            if (d > w && !q) q = !0;
                            else if (d > w && q) continue;
                            p.dataPoints[n].label && (a.axisX.labels[d] = p.dataPoints[n].label);
                            d < b.viewPortMin && (b.viewPortMin = d);
                            d > b.viewPortMax && (b.viewPortMax = d);
                            null === f ? b.viewPortMin === d && r < d && (b.viewPortMin = r) : (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(f), 0 <= f ? k = !0 : 0 > f && (h = !0), l[d] = l[d] ? l[d] + Math.abs(f) : Math.abs(f))
                        }
                    }
                    this.plotInfo.axisXValueType =
                        p.xValueType = g ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (c.max = y(c.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(c.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), c.min = y(c.viewPortMin) ? 1 : Math.min(c.viewPortMin, 1)) : k && !h ? (c.max = y(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = y(c.viewPortMin) ? 1 : Math.min(c.viewPortMin, 1)) : k && h ? (c.max = y(c.viewPortMax) ? 99 : Math.max(c.viewPortMax, 99), c.min = y(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99)) : !k && h && (c.max = y(c.viewPortMax) ? -1 : Math.max(c.viewPortMax, -1), c.min = y(c.viewPortMin) ? -99 : Math.min(c.viewPortMin, -99));
                c.viewPortMin = c.min;
                c.viewPortMax = c.max;
                a.dataPointYSums = l
            }
        };
    B.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var c = a.axisY.dataInfo, b = a.axisX.dataInfo, d, f, g, k, h = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                var m = this.data[a.dataSeriesIndexes[l]],
                    p = 0,
                    n = !1,
                    e = !1,
                    q, r, s;
                if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var w = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum :
                    this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                    u = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                if (m.dataPoints[p].x && m.dataPoints[p].x.getTime || "dateTime" ===
                    m.xValueType) h = !0;
                for (p = 0; p < m.dataPoints.length; p++) {
                    "undefined" === typeof m.dataPoints[p].x && (m.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                    m.dataPoints[p].x.getTime ? (h = !0, d = m.dataPoints[p].x.getTime()) : d = m.dataPoints[p].x;
                    if ((f = m.dataPoints[p].y) && f.length) {
                        g = Math.min.apply(null, f);
                        k = Math.max.apply(null, f);
                        r = !0;
                        for (var v = 0; v < f.length; v++) null === f.k && (r = !1);
                        r && (n || (s = q), q = d)
                    }
                    d < b.min && (b.min = d);
                    d > b.max && (b.max = d);
                    g < c.min && (c.min = g);
                    k > c.max && (c.max = k);
                    0 < p && (a.axisX.logarithmic ? (r = d / m.dataPoints[p -
                        1].x, 1 > r && (r = 1 / r), b.minDiff > r && 1 !== r && (b.minDiff = r)) : (r = d - m.dataPoints[p - 1].x, 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r)), f && (null !== f[0] && m.dataPoints[p - 1].y && null !== m.dataPoints[p - 1].y[0]) && (a.axisY.logarithmic ? (r = f[0] / m.dataPoints[p - 1].y[0], 1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r)) : (r = f[0] - m.dataPoints[p - 1].y[0], 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r))));
                    if (!(d < w) || n) {
                        if (!n && (n = !0, 0 < p)) {
                            p -= 2;
                            q = s;
                            continue
                        }
                        if (d > u && !e) e = !0;
                        else if (d > u && e) continue;
                        m.dataPoints[p].label && (a.axisX.labels[d] =
                            m.dataPoints[p].label);
                        d < b.viewPortMin && (b.viewPortMin = d);
                        d > b.viewPortMax && (b.viewPortMax = d);
                        if (b.viewPortMin === d && f)
                            for (v = 0; v < f.length; v++)
                                if (null === f[v] && q < d) {
                                    b.viewPortMin = q;
                                    break
                                }
                        null === f ? b.viewPortMin === d && q < d && (b.viewPortMin = q) : (g < c.viewPortMin && (c.viewPortMin = g), k > c.viewPortMax && (c.viewPortMax = k))
                    }
                }
                this.plotInfo.axisXValueType = m.xValueType = h ? "dateTime" : "number"
            }
    };
    B.prototype.getDataPointAtXY = function(a, c, b) {
        b = b || !1;
        for (var d = [], f = this._dataInRenderedOrder.length - 1; 0 <= f; f--) {
            var g = null;
            (g = this._dataInRenderedOrder[f].getDataPointAtXY(a,
                c, b)) && d.push(g)
        }
        a = null;
        c = !1;
        for (b = 0; b < d.length; b++)
            if ("line" === d[b].dataSeries.type || "stepLine" === d[b].dataSeries.type || "area" === d[b].dataSeries.type || "stepArea" === d[b].dataSeries.type)
                if (f = K("markerSize", d[b].dataPoint, d[b].dataSeries) || 8, d[b].distance <= f / 2) {
                    c = !0;
                    break
                }
        for (b = 0; b < d.length; b++) c && "line" !== d[b].dataSeries.type && "stepLine" !== d[b].dataSeries.type && "area" !== d[b].dataSeries.type && "stepArea" !== d[b].dataSeries.type || (a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b]);
        return a
    };
    B.prototype.getObjectAtXY =
        function(a, c, b) {
            var d = null;
            if (b = this.getDataPointAtXY(a, c, b || !1)) d = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (t) d = Ma(a, c, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var f = this.legend.items[b];
                    a >= f.x1 && (a <= f.x2 && c >= f.y1 && c <= f.y2) && (d = f.id)
                }
            return d
        };
    B.prototype.getAutoFontSize = function(a, c, b) {
        a /= 400;
        return Math.max(10, Math.round(Math.min(this.width, this.height) * a))
    };
    B.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    B.prototype.clearCanvas = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
    };
    B.prototype.attachEvent = function(a) {
        this._events.push(a)
    };
    B.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var c = [],
                b = a.changedTouches,
                d = b ? b[0] : a,
                f = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    c = ["mousemove", "mousedown"];
                    this._lastTouchData = xa(d);
                    this._lastTouchData.time =
                        new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    c = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    c = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(b && 1 < b.length)) {
                f = xa(d);
                f.time = new Date;
                try {
                    var g = f.y - this._lastTouchData.y;
                    if (15 < Math.abs(g) && this._lastTouchData.scroll) {
                        this._lastTouchData.scroll = !0;
                        var k = window.parent || window;
                        k && k.scrollBy && k.scrollBy(0, -g)
                    }
                } catch (h) {}
                this._lastTouchEventType =
                    a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (b = 0; b < c.length; b++) f = c[b], g = document.createEvent("MouseEvent"), g.initMouseEvent(f, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(g), a.preventManipulation && a.preventManipulation()
            }
        }
    };
    B.prototype._dispatchRangeEvent = function(a, c) {
        var b = {
            chart: this
        };
        b.type = a;
        b.trigger = c;
        var d = [];
        this.axisX && 0 < this.axisX.length && d.push("axisX");
        this.axisX2 &&
            0 < this.axisX2.length && d.push("axisX2");
        this.axisY && 0 < this.axisY.length && d.push("axisY");
        this.axisY2 && 0 < this.axisY2.length && d.push("axisY2");
        for (var f = 0; f < d.length; f++)
            if (y(b[d[f]]) && (b[d[f]] = []), "axisY" === d[f])
                for (var g = 0; g < this.axisY.length; g++) b[d[f]].push({
                    viewportMinimum: this[d[f]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[d[f]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisY2" === d[f])
            for (g = 0; g < this.axisY2.length; g++) b[d[f]].push({
                viewportMinimum: this[d[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[d[f]][g].sessionVariables.newViewportMaximum
            });
        else if ("axisX" === d[f])
            for (g = 0; g < this.axisX.length; g++) b[d[f]].push({
                viewportMinimum: this[d[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[d[f]][g].sessionVariables.newViewportMaximum
            });
        else if ("axisX2" === d[f])
            for (g = 0; g < this.axisX2.length; g++) b[d[f]].push({
                viewportMinimum: this[d[f]][g].sessionVariables.newViewportMinimum,
                viewportMaximum: this[d[f]][g].sessionVariables.newViewportMaximum
            });
        this.dispatchEvent(a, b, this)
    };
    B.prototype._mouseEventHandler = function(a) {
        "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
        var c = xa(a),
            b = a.type,
            d, f;
        a.which ? f = 3 == a.which : a.button && (f = 2 == a.button);
        B.capturedEventParam && (d = B.capturedEventParam, "mouseup" === b && (B.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)), d.hasOwnProperty(b) && ("mouseup" !== b || d.chart.overlaidCanvas.releaseCapture ?
            a.target === d.chart.overlaidCanvas && d[b].call(d.context, c.x, c.y) : a.target !== d.chart.overlaidCanvas && (d.chart.isDrag = !1)));
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !f) {
            if (!B.capturedEventParam && this._events) {
                for (var g = 0; g < this._events.length; g++)
                    if (this._events[g].hasOwnProperty(b))
                        if (d = this._events[g], f = d.bounds, c.x >= f.x1 && c.x <= f.x2 && c.y >= f.y1 && c.y <= f.y2) {
                            d[b].call(d.context,
                                c.x, c.y);
                            "mousedown" === b && !0 === d.capture ? (B.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break
                        } else d = null;
                a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor
            }
            b = this.plotArea;
            if (c.x < b.x1 || c.x >
                b.x2 || c.y < b.y1 || c.y > b.y2) this.toolTip && this.toolTip.enabled ? this.toolTip.hide() : this.resetOverlayedCanvas();
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
        }
    };
    B.prototype._plotAreaMouseDown = function(a, c) {
        this.isDrag = !0;
        this.dragStartPoint = {
            x: a,
            y: c
        }
    };
    B.prototype._plotAreaMouseUp = function(a, c) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var b = c - this.dragStartPoint.y,
                d = a - this.dragStartPoint.x,
                f = 0 <= this.zoomType.indexOf("x"),
                g = 0 <= this.zoomType.indexOf("y"),
                k = !1;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var h = g,
                g = f,
                f = h;
            if (this.panEnabled || this.zoomEnabled) {
                if (this.panEnabled)
                    for (f = g = 0; f < this._axes.length; f++) b = this._axes[f], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum * g, k = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum =
                        b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, k = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, k = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum = b.viewportMaximum - g, k = !0);
                else if ((!f || 2 < Math.abs(d)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                    if (!this.dragStartPoint) return;
                    b = f ? this.dragStartPoint.x : this.plotArea.x1;
                    d = g ? this.dragStartPoint.y : this.plotArea.y1;
                    f = f ? a : this.plotArea.x2;
                    g = g ? c : this.plotArea.y2;
                    2 < Math.abs(b - f) && 2 < Math.abs(d - g) && this._zoomPanToSelectedRegion(b, d, f, g) && (k = !0)
                }
                k && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), k && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (ta(this._zoomButton, this._resetButton), R(this, this._zoomButton, "pan"), R(this, this._resetButton,
                    "reset")))
            }
        }
        this.isDrag = !1
    };
    B.prototype._plotAreaMouseMove = function(a, c) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var b = 0,
                d = 0,
                f = b = null,
                f = 0 <= this.zoomType.indexOf("x"),
                g = 0 <= this.zoomType.indexOf("y"),
                k = this;
            "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = f, f = b);
            b = this.dragStartPoint.x - a;
            d = this.dragStartPoint.y - c;
            2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this.toolTip.hide() : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, c);
            if ((!f || 2 < Math.abs(b) ||
                    !g || 2 < Math.abs(d)) && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) f = {
                    x1: f ? this.plotArea.x1 + b : this.plotArea.x1,
                    y1: g ? this.plotArea.y1 + d : this.plotArea.y1,
                    x2: f ? this.plotArea.x2 + b : this.plotArea.x2,
                    y2: g ? this.plotArea.y2 + d : this.plotArea.y2
                }, clearTimeout(k._panTimerId), k._panTimerId = setTimeout(function(b, d, e, f) {
                    return function() {
                        k._zoomPanToSelectedRegion(b, d, e, f, !0) && (k._dispatchRangeEvent("rangeChanging", "pan"), k.render(), k._dispatchRangeEvent("rangeChanged", "pan"), k.dragStartPoint.x = a, k.dragStartPoint.y =
                            c)
                    }
                }(f.x1, f.y1, f.x2, f.y2), 0);
                else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                b = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var d = f ? this.dragStartPoint.x : this.plotArea.x1,
                    h = g ? this.dragStartPoint.y : this.plotArea.y1,
                    l = f ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                    m = g ? c - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(d, h, f ? a : this.plotArea.x2 - this.plotArea.x1, g ? c : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid &&
                    (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(d, h, l, m);
                this.overlaidCanvasCtx.globalAlpha = b
            }
        } else this.toolTip.mouseMoveHandler(a, c)
    };
    B.prototype._zoomPanToSelectedRegion = function(a, c, b, d, f) {
        a = this.validateRegion(a, c, b, d, f);
        c = a.axesWithValidRange;
        b = a.axesRanges;
        if (a.isValid)
            for (d = 0; d < c.length; d++) f = b[d], c[d].setViewPortRange(f.val1, f.val2);
        return a.isValid
    };
    B.prototype.validateRegion = function(a, c, b, d,
        f) {
        f = f || !1;
        for (var g = 0 <= this.zoomType.indexOf("x"), k = 0 <= this.zoomType.indexOf("y"), h = !1, l = [], m = [], p = [], n = 0; n < this.axisX.length; n++) this.axisX[n] && g && m.push(this.axisX[n]);
        for (n = 0; n < this.axisX2.length; n++) this.axisX2[n] && g && m.push(this.axisX2[n]);
        for (n = 0; n < this.axisY.length; n++) this.axisY[n] && k && m.push(this.axisY[n]);
        for (n = 0; n < this.axisY2.length; n++) this.axisY2[n] && k && m.push(this.axisY2[n]);
        for (g = 0; g < m.length; g++) {
            var k = m[g],
                n = k.convertPixelToValue({
                    x: a,
                    y: c
                }),
                e = k.convertPixelToValue({
                    x: b,
                    y: d
                });
            if (n >
                e) var q = e,
                e = n,
                n = q;
            if (isFinite(k.dataInfo.minDiff))
                if (!(k.logarithmic && e / n < Math.pow(k.dataInfo.minDiff, 3) || !k.logarithmic && Math.abs(e - n) < 3 * Math.abs(k.dataInfo.minDiff) || n < k.minimum || e > k.maximum)) l.push(k), p.push({
                    val1: n,
                    val2: e
                }), h = !0;
                else if (!f) {
                h = !1;
                break
            }
        }
        return {
            isValid: h,
            axesWithValidRange: l,
            axesRanges: p
        }
    };
    B.prototype.preparePlotArea = function() {
        var a = this.plotArea;
        !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var c = this.axisX[0] ?
                this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                var b = this.axisY[0];
                a.x1 = c.x1 < c.x2 ? c.x1 : b.lineCoordinates.x1;
                a.y1 = c.y1 < b.lineCoordinates.y1 ? c.y1 : b.lineCoordinates.y1;
                a.x2 = c.x2 > b.lineCoordinates.x2 ? c.x2 : b.lineCoordinates.x2;
                a.y2 = c.y2 > c.y1 ? c.y2 : b.lineCoordinates.y2;
                a.width = a.x2 - a.x1;
                a.height = a.y2 - a.y1
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = c.x1 < c.x2 ? c.x1 : b.lineCoordinates.x1, a.y1 = c.y1 < b.lineCoordinates.y1 ?
                c.y1 : b.lineCoordinates.y1, a.x2 = c.x2 > b.lineCoordinates.x2 ? c.x2 : b.lineCoordinates.x2, a.y2 = c.y2 > c.y1 ? c.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
        } else c = this.layoutManager.getFreeSpace(), a.x1 = c.x1, a.x2 = c.x2, a.y1 = c.y1, a.y2 = c.y2, a.width = c.width, a.height = c.height;
        t || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new ia(a.x1, a.y1, a.x2, a.y2, 2)
    };
    B.prototype.renderIndexLabels =
        function(a) {
            var c = a || this.plotArea.ctx,
                b = this.plotArea,
                d = 0,
                f = 0,
                g = 0,
                k = 0,
                h = d = k = f = g = 0,
                l = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var m = this._indexLabels[a],
                    p = m.chartType.toLowerCase(),
                    n, e, h = K("indexLabelFontColor", m.dataPoint, m.dataSeries),
                    l = K("indexLabelFontSize", m.dataPoint, m.dataSeries);
                n = K("indexLabelFontFamily", m.dataPoint, m.dataSeries);
                e = K("indexLabelFontStyle", m.dataPoint, m.dataSeries);
                var k = K("indexLabelFontWeight", m.dataPoint, m.dataSeries),
                    q = K("indexLabelBackgroundColor", m.dataPoint, m.dataSeries),
                    f = K("indexLabelMaxWidth", m.dataPoint, m.dataSeries),
                    g = K("indexLabelWrap", m.dataPoint, m.dataSeries),
                    r = K("indexLabelLineDashType", m.dataPoint, m.dataSeries),
                    s = K("indexLabelLineColor", m.dataPoint, m.dataSeries),
                    w = y(m.dataPoint.indexLabelLineThickness) ? y(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness,
                    d = 0 < w ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    u = {
                        percent: null,
                        total: null
                    },
                    v = null;
                if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type) u = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
                if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter) v = {
                    chart: this,
                    dataSeries: m.dataSeries,
                    dataPoint: m.dataPoint,
                    index: m.indexKeyword,
                    total: u.total,
                    percent: u.percent
                };
                var z = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(v) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint,
                    m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(v) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : null;
                if (null !== z && "" !== z) {
                    var u = K("indexLabelPlacement", m.dataPoint, m.dataSeries),
                        v = K("indexLabelOrientation", m.dataPoint, m.dataSeries),
                        x = m.direction,
                        Y = m.dataSeries.axisX,
                        A = m.dataSeries.axisY,
                        B = !1,
                        q = new U(c, {
                            x: 0,
                            y: 0,
                            maxWidth: f ? f : 0.5 * this.width,
                            maxHeight: g ? 5 * l : 1.5 * l,
                            angle: "horizontal" ===
                                v ? 0 : -90,
                            text: z,
                            padding: 0,
                            backgroundColor: q,
                            horizontalAlign: "left",
                            fontSize: l,
                            fontFamily: n,
                            fontWeight: k,
                            fontColor: h,
                            fontStyle: e,
                            textBaseline: "top"
                        });
                    q.measureText();
                    m.dataSeries.indexLabelMaxWidth = q.maxWidth;
                    if ("stackedarea100" === p) {
                        if (m.point.x < b.x1 || m.point.x > b.x2 || m.point.y < b.y1 - 1 || m.point.y > b.y2 + 1) continue
                    } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x > Y.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < A.viewportMinimum || Math.min.apply(null,
                                m.dataPoint.y) > A.viewportMaximum) continue
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                        if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x > Y.viewportMaximum || m.dataPoint.y < A.viewportMinimum || m.dataPoint.y > A.viewportMaximum) continue
                    } else if (0 <= p.indexOf("column")) {
                        if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x > Y.viewportMaximum || m.bounds.y1 > b.y2 || m.bounds.y2 < b.y1) continue
                    } else if (0 <= p.indexOf("bar")) {
                        if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x >
                            Y.viewportMaximum || m.bounds.x1 > b.x2 || m.bounds.x2 < b.x1) continue
                    } else if ("candlestick" === p || "ohlc" === p) {
                        if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x > Y.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < A.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > A.viewportMaximum) continue
                    } else if (m.dataPoint.x < Y.viewportMinimum || m.dataPoint.x > Y.viewportMaximum) continue;
                    f = k = 2;
                    "horizontal" === v ? (h = q.width, l = q.height) : (l = q.width, h = q.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= p.indexOf("line") ||
                            0 <= p.indexOf("area")) u = "auto", k = 4;
                        else if (0 <= p.indexOf("stacked")) "auto" === u && (u = "inside");
                        else if ("bubble" === p || "scatter" === p) u = "inside";
                        n = m.point.x - h / 2;
                        "inside" !== u ? (f = b.y1, g = b.y2, 0 < x ? (e = m.point.y - l - k - d, e < f && (e = "auto" === u ? Math.max(m.point.y, f) + k + d : f + k + d, B = e + l > m.point.y)) : (e = m.point.y + k + d, e > g - l - k - d && (e = "auto" === u ? Math.min(m.point.y, g) - l - k - d : g - l - k - d, B = e < m.point.y))) : (f = Math.max(m.bounds.y1, b.y1), g = Math.min(m.bounds.y2, b.y2), d = 0 <= p.indexOf("range") ? 0 < x ? Math.max(m.bounds.y1, b.y1) + l / 2 + k : Math.min(m.bounds.y2,
                            b.y2) - l / 2 - k : (Math.max(m.bounds.y1, b.y1) + Math.min(m.bounds.y2, b.y2)) / 2, 0 < x ? (e = Math.max(m.point.y, d) - l / 2, e < f && ("bubble" === p || "scatter" === p) && (e = Math.max(m.point.y - l - k, b.y1 + k))) : (e = Math.min(m.point.y, d) - l / 2, e > g - l - k && ("bubble" === p || "scatter" === p) && (e = Math.min(m.point.y + k, b.y2 - l - k))), e = Math.min(e, g - l))
                    } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (u = "auto", f = 4) : 0 <= p.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === p && (u = "inside"), e = m.point.y - l / 2, "inside" !== u ? (k = b.x1, g =
                        b.x2, 0 > x ? (n = m.point.x - h - f - d, n < k && (n = "auto" === u ? Math.max(m.point.x, k) + f + d : k + f + d, B = n + h > m.point.x)) : (n = m.point.x + f + d, n > g - h - f - d && (n = "auto" === u ? Math.min(m.point.x, g) - h - f - d : g - h - f - d, B = n < m.point.x))) : (k = Math.max(m.bounds.x1, b.x1), Math.min(m.bounds.x2, b.x2), d = 0 <= p.indexOf("range") ? 0 > x ? Math.max(m.bounds.x1, b.x1) + h / 2 + f : Math.min(m.bounds.x2, b.x2) - h / 2 - f : (Math.max(m.bounds.x1, b.x1) + Math.min(m.bounds.x2, b.x2)) / 2, n = 0 > x ? Math.max(m.point.x, d) - h / 2 : Math.min(m.point.x, d) - h / 2, n = Math.max(n, k));
                    "vertical" === v && (e += l);
                    q.x =
                        n;
                    q.y = e;
                    q.render(!0);
                    w && ("inside" !== u && (0 > p.indexOf("bar") && m.point.x > b.x1 && m.point.x < b.x2 || !B) && (0 > p.indexOf("column") && m.point.y > b.y1 && m.point.y < b.y2 || !B)) && (c.lineWidth = w, c.strokeStyle = s ? s : "gray", c.setLineDash && c.setLineDash(G(r, w)), c.beginPath(), c.moveTo(m.point.x, m.point.y), 0 <= p.indexOf("bar") ? c.lineTo(n + (0 < m.direction ? 0 : h), e + ("horizontal" === v ? l : -l) / 2) : 0 <= p.indexOf("column") ? c.lineTo(n + h / 2, e + ((0 < m.direction ? l : -l) + ("horizontal" === v ? l : -l)) / 2) : c.lineTo(n + h / 2, e + ((e < m.point.y ? l : -l) + ("horizontal" ===
                        v ? l : -l)) / 2), c.stroke())
                }
            }
            c = {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++) m = this._indexLabels[a], q = K("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = y(q) ? t ? "transparent" : null : q;
            return c
        };
    B.prototype.renderLine = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], f, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = a.dataSeriesIndexes[g],
                    h = this.data[k];
                c.lineWidth = h.lineThickness;
                var l = h.dataPoints,
                    m = "solid";
                if (c.setLineDash) {
                    var p = G(h.nullDataLineDashType, h.lineThickness),
                        m = h.lineDashType,
                        n = G(m, h.lineThickness);
                    c.setLineDash(n)
                }
                var e = h.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                e = F(e);
                b.strokeStyle = e;
                b.lineWidth = 0 < h.lineThickness ?
                    Math.max(h.lineThickness, 4) : 0;
                var e = h._colorSet,
                    q = e = h.lineColor = h.options.lineColor ? h.options.lineColor : e[0];
                c.strokeStyle = e;
                var r = !0,
                    s = 0,
                    w, u;
                c.beginPath();
                if (0 < l.length) {
                    for (var v = !1, s = 0; s < l.length; s++)
                        if (w = l[s].x.getTime ? l[s].x.getTime() : l[s].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !v)))
                            if ("number" !== typeof l[s].y) 0 < s && !(h.connectNullData || v || r) && (c.stroke(), t && b.stroke()), v = !0;
                            else {
                                w = a.axisX.convertValueToPixel(w);
                                u = a.axisY.convertValueToPixel(l[s].y);
                                var z = h.dataPointIds[s];
                                this._eventManager.objectMap[z] = {
                                    id: z,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: s,
                                    x1: w,
                                    y1: u
                                };
                                r || v ? (!r && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || m === h.lineDashType && h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(f.x, f.y), m = h.nullDataLineDashType, c.setLineDash(p)), c.lineTo(w, u), t && b.lineTo(w, u)) : (c.beginPath(), c.moveTo(w, u), t && (b.beginPath(), b.moveTo(w, u))), v = r = !1) : (c.lineTo(w, u), t && b.lineTo(w, u), 0 == s % 500 &&
                                    (c.stroke(), c.beginPath(), c.moveTo(w, u), t && (b.stroke(), b.beginPath(), b.moveTo(w, u))));
                                f = {
                                    x: w,
                                    y: u
                                };
                                s < l.length - 1 && (q !== (l[s].lineColor || e) || m !== (l[s].lineDashType || h.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(w, u), q = l[s].lineColor || e, c.strokeStyle = q, c.setLineDash && (l[s].lineDashType ? (m = l[s].lineDashType, c.setLineDash(G(m, h.lineThickness))) : (m = h.lineDashType, c.setLineDash(n))));
                                if (0 < l[s].markerSize || 0 < h.markerSize) {
                                    var x = h.getMarkerProperties(s, w, u, c);
                                    d.push(x);
                                    z = F(z);
                                    t && d.push({
                                        x: w,
                                        y: u,
                                        ctx: b,
                                        type: x.type,
                                        size: x.size,
                                        color: z,
                                        borderColor: z,
                                        borderThickness: x.borderThickness
                                    })
                                }(l[s].indexLabel || h.indexLabel || l[s].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: l[s],
                                    dataSeries: h,
                                    point: {
                                        x: w,
                                        y: u
                                    },
                                    direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                })
                            }
                    c.stroke();
                    t && b.stroke()
                }
            }
            N.drawMarkers(d);
            c.restore();
            c.beginPath();
            t && b.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderStepLine = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var d = [], f, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = a.dataSeriesIndexes[g],
                    h = this.data[k];
                c.lineWidth = h.lineThickness;
                var l = h.dataPoints,
                    m = "solid";
                if (c.setLineDash) {
                    var p = G(h.nullDataLineDashType, h.lineThickness),
                        m = h.lineDashType,
                        n = G(m, h.lineThickness);
                    c.setLineDash(n)
                }
                var e =
                    h.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                e = F(e);
                b.strokeStyle = e;
                b.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                var e = h._colorSet,
                    q = e = h.lineColor = h.options.lineColor ? h.options.lineColor : e[0];
                c.strokeStyle = e;
                var r = !0,
                    s = 0,
                    w, u;
                c.beginPath();
                if (0 < l.length) {
                    for (var v = !1, s = 0; s < l.length; s++)
                        if (w = l[s].getTime ? l[s].x.getTime() : l[s].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !v)))
                            if ("number" !== typeof l[s].y) 0 <
                                s && !(h.connectNullData || v || r) && (c.stroke(), t && b.stroke()), v = !0;
                            else {
                                var z = u;
                                w = a.axisX.convertValueToPixel(w);
                                u = a.axisY.convertValueToPixel(l[s].y);
                                var x = h.dataPointIds[s];
                                this._eventManager.objectMap[x] = {
                                    id: x,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: s,
                                    x1: w,
                                    y1: u
                                };
                                r || v ? (!r && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || m === h.lineDashType && h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(f.x, f.y), m = h.nullDataLineDashType, c.setLineDash(p)),
                                    c.lineTo(w, z), c.lineTo(w, u), t && (b.lineTo(w, z), b.lineTo(w, u))) : (c.beginPath(), c.moveTo(w, u), t && (b.beginPath(), b.moveTo(w, u))), v = r = !1) : (c.lineTo(w, z), t && b.lineTo(w, z), c.lineTo(w, u), t && b.lineTo(w, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(w, u), t && (b.stroke(), b.beginPath(), b.moveTo(w, u))));
                                f = {
                                    x: w,
                                    y: u
                                };
                                s < l.length - 1 && (q !== (l[s].lineColor || e) || m !== (l[s].lineDashType || h.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(w, u), q = l[s].lineColor || e, c.strokeStyle = q, c.setLineDash && (l[s].lineDashType ? (m = l[s].lineDashType,
                                    c.setLineDash(G(m, h.lineThickness))) : (m = h.lineDashType, c.setLineDash(n))));
                                if (0 < l[s].markerSize || 0 < h.markerSize) z = h.getMarkerProperties(s, w, u, c), d.push(z), x = F(x), t && d.push({
                                    x: w,
                                    y: u,
                                    ctx: b,
                                    type: z.type,
                                    size: z.size,
                                    color: x,
                                    borderColor: x,
                                    borderThickness: z.borderThickness
                                });
                                (l[s].indexLabel || h.indexLabel || l[s].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: l[s],
                                    dataSeries: h,
                                    point: {
                                        x: w,
                                        y: u
                                    },
                                    direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                })
                            }
                    c.stroke();
                    t && b.stroke()
                }
            }
            N.drawMarkers(d);
            c.restore();
            c.beginPath();
            t && b.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderSpline = function(a) {
        function c(a) {
            a = ua(a, 2);
            if (0 < a.length) {
                b.beginPath();
                t && d.beginPath();
                b.moveTo(a[0].x, a[0].y);
                a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                t && d.moveTo(a[0].x, a[0].y);
                for (var c = 0; c < a.length - 3; c +=
                    3)
                    if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), t && d.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), t && (d.stroke(), d.beginPath(), d.moveTo(a[c + 3].x, a[c + 3].y));
                b.stroke();
                t && d.stroke()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            b.save();
            var f = this.plotArea;
            b.beginPath();
            b.rect(f.x1, f.y1, f.width, f.height);
            b.clip();
            for (var f = [], g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = a.dataSeriesIndexes[g],
                    h = this.data[k];
                b.lineWidth = h.lineThickness;
                var l = h.dataPoints,
                    m = "solid";
                if (b.setLineDash) {
                    var p = G(h.nullDataLineDashType, h.lineThickness),
                        m = h.lineDashType,
                        n = G(m, h.lineThickness);
                    b.setLineDash(n)
                }
                var e = h.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                e = F(e);
                d.strokeStyle = e;
                d.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                var e = h._colorSet,
                    q = e = h.lineColor = h.options.lineColor ? h.options.lineColor : e[0];
                b.strokeStyle = e;
                var r = 0,
                    s, w, u = [];
                b.beginPath();
                if (0 < l.length)
                    for (w = !1, r = 0; r < l.length; r++)
                        if (s = l[r].getTime ? l[r].x.getTime() : l[r].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !w)))
                            if ("number" !== typeof l[r].y) 0 < r && !w && (h.connectNullData ? b.setLineDash && (0 < u.length && (h.options.nullDataLineDashType ||
                                !l[r - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = p, m = h.nullDataLineDashType) : (c(u), u = [])), w = !0;
                            else {
                                s = a.axisX.convertValueToPixel(s);
                                w = a.axisY.convertValueToPixel(l[r].y);
                                var v = h.dataPointIds[r];
                                this._eventManager.objectMap[v] = {
                                    id: v,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: w
                                };
                                u[u.length] = {
                                    x: s,
                                    y: w
                                };
                                r < l.length - 1 && (q !== (l[r].lineColor || e) || m !== (l[r].lineDashType || h.lineDashType)) && (q = l[r].lineColor || e, u[u.length - 1].newStrokeStyle = q, b.setLineDash && (l[r].lineDashType ? (m =
                                    l[r].lineDashType, u[u.length - 1].newLineDashArray = G(m, h.lineThickness)) : (m = h.lineDashType, u[u.length - 1].newLineDashArray = n)));
                                if (0 < l[r].markerSize || 0 < h.markerSize) {
                                    var z = h.getMarkerProperties(r, s, w, b);
                                    f.push(z);
                                    v = F(v);
                                    t && f.push({
                                        x: s,
                                        y: w,
                                        ctx: d,
                                        type: z.type,
                                        size: z.size,
                                        color: v,
                                        borderColor: v,
                                        borderThickness: z.borderThickness
                                    })
                                }(l[r].indexLabel || h.indexLabel || l[r].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: l[r],
                                    dataSeries: h,
                                    point: {
                                        x: s,
                                        y: w
                                    },
                                    direction: 0 >
                                        l[r].y === a.axisY.reversed ? 1 : -1,
                                    color: e
                                });
                                w = !1
                            }
                c(u)
            }
            N.drawMarkers(f);
            b.restore();
            b.beginPath();
            t && d.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    var M = function(a, c, b, d, f, g, k, h, l, m, p, n, e) {
        "undefined" === typeof e && (e = 1);
        k = k || 0;
        h = h || "black";
        var q = 15 < d - c && 15 < f - b ? 8 : 0.35 * Math.min(d - c, f - b);
        a.beginPath();
        a.moveTo(c, b);
        a.save();
        a.fillStyle = g;
        a.globalAlpha = e;
        a.fillRect(c, b, d - c, f - b);
        a.globalAlpha = 1;
        0 < k && (e = 0 === k % 2 ? 0 : 0.5,
            a.beginPath(), a.lineWidth = k, a.strokeStyle = h, a.moveTo(c, b), a.rect(c - e, b - e, d - c + 2 * e, f - b + 2 * e), a.stroke());
        a.restore();
        !0 === l && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c + q, b + q), a.lineTo(d - q, b + q), a.lineTo(d, b), a.closePath(), k = a.createLinearGradient((d + c) / 2, b + q, (d + c) / 2, b), k.addColorStop(0, g), k.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = k, a.fill(), a.restore());
        !0 === m && (a.save(), a.beginPath(), a.moveTo(c, f), a.lineTo(c + q, f - q), a.lineTo(d - q, f - q), a.lineTo(d, f), a.closePath(), k = a.createLinearGradient((d +
            c) / 2, f - q, (d + c) / 2, f), k.addColorStop(0, g), k.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = k, a.fill(), a.restore());
        !0 === p && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c + q, b + q), a.lineTo(c + q, f - q), a.lineTo(c, f), a.closePath(), k = a.createLinearGradient(c + q, (f + b) / 2, c, (f + b) / 2), k.addColorStop(0, g), k.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = k, a.fill(), a.restore());
        !0 === n && (a.save(), a.beginPath(), a.moveTo(d, b), a.lineTo(d - q, b + q), a.lineTo(d - q, f - q), a.lineTo(d, f), k = a.createLinearGradient(d -
            q, (f + b) / 2, d, (f + b) / 2), k.addColorStop(0, g), k.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = k, k.addColorStop(0, g), k.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = k, a.fill(), a.closePath(), a.restore())
    };
    B.prototype.renderColumn = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = 0,
                g, k, h, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                f = this.dataPointMinWidth = this.dataPointMinWidth ? this.dataPointMinWidth :
                this.dataPointWidth ? this.dataPointWidth : 1,
                m = this.dataPointMaxWidth = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) <<
                0;
            this.dataPointMaxWidth && f > m && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < f) && (m = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            p < f && (p = f);
            p > m && (p = m);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var m =
                    a.dataSeriesIndexes[d],
                    n = this.data[m],
                    e = n.dataPoints;
                if (0 < e.length)
                    for (var q = 5 < p && n.bevelEnabled ? !0 : !1, f = 0; f < e.length; f++)
                        if (e[f].getTime ? h = e[f].x.getTime() : h = e[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof e[f].y) {
                            g = a.axisX.convertValueToPixel(h);
                            k = a.axisY.convertValueToPixel(e[f].y);
                            g = a.axisX.reversed ? g + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + d) * p << 0 : g - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + d) * p << 0;
                            var r = a.axisX.reversed ?
                                g - p << 0 : g + p << 0,
                                s;
                            0 <= e[f].y ? s = l : (s = k, k = l);
                            k > s && (b = k, k = s, s = b);
                            b = e[f].color ? e[f].color : n._colorSet[f % n._colorSet.length];
                            M(c, g, k, r, s, b, 0, null, q && 0 <= e[f].y, 0 > e[f].y && q, !1, !1, n.fillOpacity);
                            b = n.dataPointIds[f];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: f,
                                x1: g,
                                y1: k,
                                x2: r,
                                y2: s
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, g, k, r, s, b, 0, null, !1, !1, !1, !1);
                            (e[f].indexLabel || n.indexLabel || e[f].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: e[f],
                                dataSeries: n,
                                point: {
                                    x: g + (r - g) / 2,
                                    y: 0 > e[f].y === a.axisY.reversed ? k : s
                                },
                                direction: 0 > e[f].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: g,
                                    y1: Math.min(k, s),
                                    x2: r,
                                    y2: Math.max(k, s)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.yScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: l < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : l > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : l
            }
        }
    };
    B.prototype.renderStackedColumn = function(a) {
        var c = a.targetCanvasCtx ||
            this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = [],
                g = [],
                k = [],
                h = 0,
                l, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width *
                (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > p && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && p < h) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > p && (n = p);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(),
                this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                var e = a.dataSeriesIndexes[p],
                    q = this.data[e],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < n && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                w = d - a.plotType.plotUnits.length * n /
                                2 + a.index * n << 0,
                                u = w + n << 0,
                                v;
                            if (a.axisY.logarithmic) k[b] = r[h].y + (k[b] ? k[b] : 0), 0 < k[b] && (l = a.axisY.convertValueToPixel(k[b]), v = f[b] ? f[b] : m, f[b] = l);
                            else if (l = a.axisY.convertValueToPixel(r[h].y), 0 <= r[h].y) {
                                var z = f[b] ? f[b] : 0;
                                l -= z;
                                v = m - z;
                                f[b] = z + (v - l)
                            } else z = g[b] ? g[b] : 0, v = l + z, l = m + z, g[b] = z + (v - l);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, w, l, u, v, b, 0, null, s && 0 <= r[h].y, 0 > r[h].y && s, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: h,
                                x1: w,
                                y1: l,
                                x2: u,
                                y2: v
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, w, l, u, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: d,
                                    y: 0 <= r[h].y ? l : v
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: w,
                                    y1: Math.min(l, v),
                                    x2: u,
                                    y2: Math.max(l, v)
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.yScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: m < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : m > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : m
            }
        }
    };
    B.prototype.renderStackedColumn100 = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = [],
                g = [],
                k = [],
                h = 0,
                l, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > p && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && p < h) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth :
                -Infinity, h));
            n < h && (n = h);
            n > p && (n = p);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                var e = a.dataSeriesIndexes[p],
                    q = this.data[e],
                    r = q.dataPoints;
                if (0 < r.length)
                    for (var s = 5 < n && q.bevelEnabled ? !0 : !1, h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin ||
                                b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            d = a.axisX.convertValueToPixel(b);
                            l = 0 !== a.dataPointYSums[b] ? 100 * (r[h].y / a.dataPointYSums[b]) : 0;
                            var w = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0,
                                u = w + n << 0,
                                v;
                            if (a.axisY.logarithmic) {
                                k[b] = l + (k[b] ? k[b] : 0);
                                if (0 >= k[b]) continue;
                                l = a.axisY.convertValueToPixel(k[b]);
                                v = f[b] ? f[b] : m;
                                f[b] = l
                            } else if (l = a.axisY.convertValueToPixel(l), 0 <= r[h].y) {
                                var z = f[b] ? f[b] : 0;
                                l -= z;
                                v = m - z;
                                f[b] = z + (v - l)
                            } else z = g[b] ? g[b] : 0, v = l + z, l = m + z, g[b] = z + (v - l);
                            b = r[h].color ? r[h].color :
                                q._colorSet[h % q._colorSet.length];
                            M(c, w, l, u, v, b, 0, null, s && 0 <= r[h].y, 0 > r[h].y && s, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: h,
                                x1: w,
                                y1: l,
                                x2: u,
                                y2: v
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, w, l, u, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: d,
                                    y: 0 <= r[h].y ? l : v
                                },
                                direction: 0 >
                                    r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: w,
                                    y1: Math.min(l, v),
                                    x2: u,
                                    y2: Math.max(l, v)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.yScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: m < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : m > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : m
            }
        }
    };
    B.prototype.renderBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = 0,
                g,
                k, h, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                m = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(p) /
                Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > m && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < f) && (m = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            p < f && (p = f);
            p > m && (p = m);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1,
                d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var m = a.dataSeriesIndexes[d],
                    n = this.data[m],
                    e = n.dataPoints;
                if (0 < e.length) {
                    var q = 5 < p && n.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (f = 0; f < e.length; f++)
                        if (e[f].getTime ? h = e[f].x.getTime() : h = e[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof e[f].y) {
                            k = a.axisX.convertValueToPixel(h);
                            g = a.axisY.convertValueToPixel(e[f].y);
                            k = a.axisX.reversed ? k + a.plotType.totalDataSeries *
                                p / 2 - (a.previousDataSeriesCount + d) * p << 0 : k - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + d) * p << 0;
                            var r = a.axisX.reversed ? k - p << 0 : k + p << 0,
                                s;
                            0 <= e[f].y ? s = l : (s = g, g = l);
                            b = e[f].color ? e[f].color : n._colorSet[f % n._colorSet.length];
                            M(c, s, k, g, r, b, 0, null, q, !1, !1, !1, n.fillOpacity);
                            b = n.dataPointIds[f];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: f,
                                x1: s,
                                y1: k,
                                x2: g,
                                y2: r
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, s, k, g, r, b, 0, null, !1, !1, !1, !1);
                            (e[f].indexLabel || n.indexLabel ||
                                e[f].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bar",
                                dataPoint: e[f],
                                dataSeries: n,
                                point: {
                                    x: 0 <= e[f].y ? g : s,
                                    y: k + (r - k) / 2
                                },
                                direction: 0 > e[f].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(s, g),
                                    y1: k,
                                    x2: Math.max(s, g),
                                    y2: r
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.xScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: l < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : l > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : l
            }
        }
    };
    B.prototype.renderStackedBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = [],
                g = [],
                k = [],
                h = 0,
                l, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > p && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && p < h) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > p && (n = p);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width,
                d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                var e = a.dataSeriesIndexes[p],
                    q = this.data[e],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < n && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                w = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0,
                                u = w + n << 0,
                                v;
                            if (a.axisY.logarithmic) k[b] = r[h].y + (k[b] ? k[b] : 0), 0 < k[b] && (v = f[b] ? f[b] : m, f[b] = l = a.axisY.convertValueToPixel(k[b]));
                            else if (l = a.axisY.convertValueToPixel(r[h].y), 0 <= r[h].y) {
                                var z = f[b] ? f[b] : 0;
                                v = m + z;
                                l += z;
                                f[b] = z + (l - v)
                            } else z = g[b] ? g[b] : 0, v = l - z, l = m - z, g[b] = z + (l - v);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, v, w, l, u, b, 0, null, s, !1, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: h,
                                x1: v,
                                y1: w,
                                x2: l,
                                y2: u
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, v, w, l, u, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: 0 <= r[h].y ? l : v,
                                    y: d
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(v, l),
                                    y1: w,
                                    x2: Math.max(v, l),
                                    y2: u
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.xScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: m < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : m > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : m
            }
        }
    };
    B.prototype.renderStackedBar100 = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = [],
                g = [],
                k = [],
                h = 0,
                l, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                1,
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && h > p && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
            !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                p < h) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > p && (n = p);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                var e = a.dataSeriesIndexes[p],
                    q = this.data[e],
                    r = q.dataPoints;
                if (0 < r.length) {
                    var s = 5 < n && q.bevelEnabled ? !0 : !1;
                    c.strokeStyle =
                        "#4572A7 ";
                    for (h = 0; h < r.length; h++)
                        if (b = r[h].x.getTime ? r[h].x.getTime() : r[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[h].y) {
                            var d = a.axisX.convertValueToPixel(b),
                                w;
                            w = 0 !== a.dataPointYSums[b] ? 100 * (r[h].y / a.dataPointYSums[b]) : 0;
                            var u = d - a.plotType.plotUnits.length * n / 2 + a.index * n << 0,
                                v = u + n << 0;
                            if (a.axisY.logarithmic) {
                                k[b] = w + (k[b] ? k[b] : 0);
                                if (0 >= k[b]) continue;
                                w = f[b] ? f[b] : m;
                                f[b] = l = a.axisY.convertValueToPixel(k[b])
                            } else if (l = a.axisY.convertValueToPixel(w), 0 <= r[h].y) {
                                var z =
                                    f[b] ? f[b] : 0;
                                w = m + z;
                                l += z;
                                f[b] = z + (l - w)
                            } else z = g[b] ? g[b] : 0, w = l - z, l = m - z, g[b] = z + (l - w);
                            b = r[h].color ? r[h].color : q._colorSet[h % q._colorSet.length];
                            M(c, w, u, l, v, b, 0, null, s, !1, !1, !1, q.fillOpacity);
                            b = q.dataPointIds[h];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: e,
                                dataPointIndex: h,
                                x1: w,
                                y1: u,
                                x2: l,
                                y2: v
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, w, u, l, v, b, 0, null, !1, !1, !1, !1);
                            (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: r[h],
                                dataSeries: q,
                                point: {
                                    x: 0 <= r[h].y ? l : w,
                                    y: d
                                },
                                direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                bounds: {
                                    x1: Math.min(w, l),
                                    y1: u,
                                    x2: Math.max(w, l),
                                    y2: v
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.xScaleAnimation,
                easingFunction: E.easing.easeOutQuart,
                animationBase: m < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : m > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : m
            }
        }
    };
    B.prototype.renderArea = function(a) {
        var c, b;

        function d() {
            x && (0 < e.lineThickness &&
                f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? z = v : 0 > a.axisY.viewportMaximum ? z = h.y1 : 0 < a.axisY.viewportMinimum && (z = k.y2), f.lineTo(s, z), f.lineTo(x.x, z), f.closePath(), f.globalAlpha = e.fillOpacity, f.fill(), f.globalAlpha = 1, t && (g.lineTo(s, z), g.lineTo(x.x, z), g.closePath(), g.fill()), f.beginPath(), f.moveTo(s, w), g.beginPath(), g.moveTo(s, w), x = {
                    x: s,
                    y: w
                })
        }
        var f = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var g = this._eventManager.ghostCtx,
                k = a.axisX.lineCoordinates,
                h = a.axisY.lineCoordinates,
                l = [],
                m = this.plotArea,
                p;
            f.save();
            t && g.save();
            f.beginPath();
            f.rect(m.x1, m.y1, m.width, m.height);
            f.clip();
            t && (g.beginPath(), g.rect(m.x1, m.y1, m.width, m.height), g.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
                var n = a.dataSeriesIndexes[m],
                    e = this.data[n],
                    q = e.dataPoints,
                    l = e.id;
                this._eventManager.objectMap[l] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: n
                };
                l = F(l);
                g.fillStyle = l;
                l = [];
                c = !0;
                var r = 0,
                    s, w, u, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    z, x =
                    null;
                if (0 < q.length) {
                    var y = e._colorSet[r % e._colorSet.length],
                        A = e.lineColor = e.options.lineColor || y,
                        B = A;
                    f.fillStyle = y;
                    f.strokeStyle = A;
                    f.lineWidth = e.lineThickness;
                    b = "solid";
                    if (f.setLineDash) {
                        var C = G(e.nullDataLineDashType, e.lineThickness);
                        b = e.lineDashType;
                        var V = G(b, e.lineThickness);
                        f.setLineDash(V)
                    }
                    for (var W = !0; r < q.length; r++)
                        if (u = q[r].x.getTime ? q[r].x.getTime() : q[r].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!e.connectNullData || !W)))
                            if ("number" !== typeof q[r].y) e.connectNullData ||
                                (W || c) || d(), W = !0;
                            else {
                                s = a.axisX.convertValueToPixel(u);
                                w = a.axisY.convertValueToPixel(q[r].y);
                                c || W ? (!c && e.connectNullData ? (f.setLineDash && (e.options.nullDataLineDashType || b === e.lineDashType && e.lineDashType !== e.nullDataLineDashType) && (c = s, b = w, s = p.x, w = p.y, d(), f.moveTo(p.x, p.y), s = c, w = b, x = p, b = e.nullDataLineDashType, f.setLineDash(C)), f.lineTo(s, w), t && g.lineTo(s, w)) : (f.beginPath(), f.moveTo(s, w), t && (g.beginPath(), g.moveTo(s, w)), x = {
                                    x: s,
                                    y: w
                                }), W = c = !1) : (f.lineTo(s, w), t && g.lineTo(s, w), 0 == r % 250 && d());
                                p = {
                                    x: s,
                                    y: w
                                };
                                r < q.length - 1 && (B !== (q[r].lineColor || A) || b !== (q[r].lineDashType || e.lineDashType)) && (d(), B = q[r].lineColor || A, f.strokeStyle = B, f.setLineDash && (q[r].lineDashType ? (b = q[r].lineDashType, f.setLineDash(G(b, e.lineThickness))) : (b = e.lineDashType, f.setLineDash(V))));
                                var I = e.dataPointIds[r];
                                this._eventManager.objectMap[I] = {
                                    id: I,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: w
                                };
                                0 !== q[r].markerSize && (0 < q[r].markerSize || 0 < e.markerSize) && (u = e.getMarkerProperties(r, s, w, f), l.push(u), I = F(I), t && l.push({
                                    x: s,
                                    y: w,
                                    ctx: g,
                                    type: u.type,
                                    size: u.size,
                                    color: I,
                                    borderColor: I,
                                    borderThickness: u.borderThickness
                                }));
                                (q[r].indexLabel || e.indexLabel || q[r].indexLabelFormatter || e.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: q[r],
                                    dataSeries: e,
                                    point: {
                                        x: s,
                                        y: w
                                    },
                                    direction: 0 > q[r].y === a.axisY.reversed ? 1 : -1,
                                    color: y
                                })
                            }
                    d();
                    N.drawMarkers(l)
                }
            }
            f.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: f,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderSplineArea = function(a) {
        function c() {
            var c = ua(u, 2);
            if (0 < c.length) {
                if (0 < m.lineThickness) {
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                    c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                    for (var e = 0; e < c.length - 3; e += 3)
                        if (b.bezierCurveTo(c[e + 1].x, c[e + 1].y, c[e + 2].x, c[e + 2].y, c[e + 3].x, c[e + 3].y), t && d.bezierCurveTo(c[e + 1].x, c[e + 1].y, c[e + 2].x, c[e + 2].y, c[e + 3].x, c[e + 3].y), c[e + 3].newStrokeStyle || c[e + 3].newLineDashArray) b.stroke(), b.beginPath(),
                            b.moveTo(c[e + 3].x, c[e + 3].y), c[e + 3].newStrokeStyle && (b.strokeStyle = c[e + 3].newStrokeStyle), c[e + 3].newLineDashArray && b.setLineDash(c[e + 3].newLineDashArray);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(c[0].x, c[0].y);
                t && (d.beginPath(), d.moveTo(c[0].x, c[0].y));
                for (e = 0; e < c.length - 3; e += 3) b.bezierCurveTo(c[e + 1].x, c[e + 1].y, c[e + 2].x, c[e + 2].y, c[e + 3].x, c[e + 3].y), t && d.bezierCurveTo(c[e + 1].x, c[e + 1].y, c[e + 2].x, c[e + 2].y, c[e + 3].x, c[e + 3].y);
                a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s = r : 0 > a.axisY.viewportMaximum ?
                    s = g.y1 : 0 < a.axisY.viewportMinimum && (s = f.y2);
                w = {
                    x: c[0].x,
                    y: c[0].y
                };
                b.lineTo(c[c.length - 1].x, s);
                b.lineTo(w.x, s);
                b.closePath();
                b.globalAlpha = m.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                t && (d.lineTo(c[c.length - 1].x, s), d.lineTo(w.x, s), d.closePath(), d.fill())
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                f = a.axisX.lineCoordinates,
                g = a.axisY.lineCoordinates,
                k = [],
                h = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            t && (d.beginPath(), d.rect(h.x1, h.y1, h.width, h.height), d.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    m = this.data[l],
                    p = m.dataPoints,
                    k = m.id;
                this._eventManager.objectMap[k] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: l
                };
                k = F(k);
                d.fillStyle = k;
                var k = [],
                    n = 0,
                    e, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    s, w = null,
                    u = [];
                if (0 < p.length) {
                    var v = m._colorSet[n % m._colorSet.length],
                        z = m.lineColor = m.options.lineColor || v,
                        x = z;
                    b.fillStyle = v;
                    b.strokeStyle =
                        z;
                    b.lineWidth = m.lineThickness;
                    var y = "solid";
                    if (b.setLineDash) {
                        var A = G(m.nullDataLineDashType, m.lineThickness),
                            y = m.lineDashType,
                            B = G(y, m.lineThickness);
                        b.setLineDash(B)
                    }
                    for (q = !1; n < p.length; n++)
                        if (e = p[n].x.getTime ? p[n].x.getTime() : p[n].x, !(e < a.axisX.dataInfo.viewPortMin || e > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !q)))
                            if ("number" !== typeof p[n].y) 0 < n && !q && (m.connectNullData ? b.setLineDash && (0 < u.length && (m.options.nullDataLineDashType || !p[n - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = A,
                                y = m.nullDataLineDashType) : (c(), u = [])), q = !0;
                            else {
                                e = a.axisX.convertValueToPixel(e);
                                q = a.axisY.convertValueToPixel(p[n].y);
                                var C = m.dataPointIds[n];
                                this._eventManager.objectMap[C] = {
                                    id: C,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: l,
                                    dataPointIndex: n,
                                    x1: e,
                                    y1: q
                                };
                                u[u.length] = {
                                    x: e,
                                    y: q
                                };
                                n < p.length - 1 && (x !== (p[n].lineColor || z) || y !== (p[n].lineDashType || m.lineDashType)) && (x = p[n].lineColor || z, u[u.length - 1].newStrokeStyle = x, b.setLineDash && (p[n].lineDashType ? (y = p[n].lineDashType, u[u.length - 1].newLineDashArray = G(y, m.lineThickness)) :
                                    (y = m.lineDashType, u[u.length - 1].newLineDashArray = B)));
                                if (0 !== p[n].markerSize && (0 < p[n].markerSize || 0 < m.markerSize)) {
                                    var V = m.getMarkerProperties(n, e, q, b);
                                    k.push(V);
                                    C = F(C);
                                    t && k.push({
                                        x: e,
                                        y: q,
                                        ctx: d,
                                        type: V.type,
                                        size: V.size,
                                        color: C,
                                        borderColor: C,
                                        borderThickness: V.borderThickness
                                    })
                                }(p[n].indexLabel || m.indexLabel || p[n].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: p[n],
                                    dataSeries: m,
                                    point: {
                                        x: e,
                                        y: q
                                    },
                                    direction: 0 > p[n].y === a.axisY.reversed ? 1 : -1,
                                    color: v
                                });
                                q = !1
                            }
                    c();
                    N.drawMarkers(k)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderStepArea = function(a) {
        var c, b;

        function d() {
            x && (0 < e.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? z = v : 0 > a.axisY.viewportMaximum ? z = h.y1 : 0 < a.axisY.viewportMinimum && (z = k.y2), f.lineTo(s, z), f.lineTo(x.x, z), f.closePath(), f.globalAlpha =
                e.fillOpacity, f.fill(), f.globalAlpha = 1, t && (g.lineTo(s, z), g.lineTo(x.x, z), g.closePath(), g.fill()), f.beginPath(), f.moveTo(s, w), g.beginPath(), g.moveTo(s, w), x = {
                    x: s,
                    y: w
                })
        }
        var f = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var g = this._eventManager.ghostCtx,
                k = a.axisX.lineCoordinates,
                h = a.axisY.lineCoordinates,
                l = [],
                m = this.plotArea,
                p;
            f.save();
            t && g.save();
            f.beginPath();
            f.rect(m.x1, m.y1, m.width, m.height);
            f.clip();
            t && (g.beginPath(), g.rect(m.x1, m.y1, m.width, m.height), g.clip());
            for (m =
                0; m < a.dataSeriesIndexes.length; m++) {
                var n = a.dataSeriesIndexes[m],
                    e = this.data[n],
                    q = e.dataPoints,
                    l = e.id;
                this._eventManager.objectMap[l] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: n
                };
                l = F(l);
                g.fillStyle = l;
                l = [];
                c = !0;
                var r = 0,
                    s, w, u, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    z, x = null;
                b = !1;
                if (0 < q.length) {
                    var y = e._colorSet[r % e._colorSet.length],
                        A = e.lineColor = e.options.lineColor || y,
                        B = A;
                    f.fillStyle = y;
                    f.strokeStyle = A;
                    f.lineWidth = e.lineThickness;
                    var C = "solid";
                    if (f.setLineDash) {
                        var V =
                            G(e.nullDataLineDashType, e.lineThickness),
                            C = e.lineDashType,
                            W = G(C, e.lineThickness);
                        f.setLineDash(W)
                    }
                    for (; r < q.length; r++)
                        if (u = q[r].x.getTime ? q[r].x.getTime() : q[r].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!e.connectNullData || !b))) {
                            var I = w;
                            "number" !== typeof q[r].y ? (e.connectNullData || (b || c) || d(), b = !0) : (s = a.axisX.convertValueToPixel(u), w = a.axisY.convertValueToPixel(q[r].y), c || b ? (!c && e.connectNullData ? (f.setLineDash && (e.options.nullDataLineDashType || C === e.lineDashType && e.lineDashType !==
                                    e.nullDataLineDashType) && (c = s, b = w, s = p.x, w = p.y, d(), f.moveTo(p.x, p.y), s = c, w = b, x = p, C = e.nullDataLineDashType, f.setLineDash(V)), f.lineTo(s, I), f.lineTo(s, w), t && (g.lineTo(s, I), g.lineTo(s, w))) : (f.beginPath(), f.moveTo(s, w), t && (g.beginPath(), g.moveTo(s, w)), x = {
                                    x: s,
                                    y: w
                                }), b = c = !1) : (f.lineTo(s, I), t && g.lineTo(s, I), f.lineTo(s, w), t && g.lineTo(s, w), 0 == r % 250 && d()), p = {
                                    x: s,
                                    y: w
                                }, r < q.length - 1 && (B !== (q[r].lineColor || A) || C !== (q[r].lineDashType || e.lineDashType)) && (d(), B = q[r].lineColor || A, f.strokeStyle = B, f.setLineDash && (q[r].lineDashType ?
                                    (C = q[r].lineDashType, f.setLineDash(G(C, e.lineThickness))) : (C = e.lineDashType, f.setLineDash(W)))), u = e.dataPointIds[r], this._eventManager.objectMap[u] = {
                                    id: u,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: r,
                                    x1: s,
                                    y1: w
                                }, 0 !== q[r].markerSize && (0 < q[r].markerSize || 0 < e.markerSize) && (I = e.getMarkerProperties(r, s, w, f), l.push(I), u = F(u), t && l.push({
                                    x: s,
                                    y: w,
                                    ctx: g,
                                    type: I.type,
                                    size: I.size,
                                    color: u,
                                    borderColor: u,
                                    borderThickness: I.borderThickness
                                })), (q[r].indexLabel || e.indexLabel || q[r].indexLabelFormatter || e.indexLabelFormatter) &&
                                this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: q[r],
                                    dataSeries: e,
                                    point: {
                                        x: s,
                                        y: w
                                    },
                                    direction: 0 > q[r].y === a.axisY.reversed ? 1 : -1,
                                    color: y
                                }))
                        }
                    d();
                    N.drawMarkers(l)
                }
            }
            f.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: f,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderStackedArea = function(a) {
        function c() {
            if (!(1 > h.length)) {
                for (0 < x.lineThickness && b.stroke(); 0 < h.length;) {
                    var a = h.pop();
                    b.lineTo(a.x, a.y);
                    t && s.lineTo(a.x,
                        a.y)
                }
                b.closePath();
                b.globalAlpha = x.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                t && (s.closePath(), s.fill(), s.beginPath());
                h = []
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                f = [],
                g = this.plotArea,
                k = [],
                h = [],
                l = [],
                m = [],
                p = 0,
                n, e, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                s = this._eventManager.ghostCtx,
                w, u, v;
            t && s.beginPath();
            b.save();
            t && s.save();
            b.beginPath();
            b.rect(g.x1, g.y1, g.width, g.height);
            b.clip();
            t && (s.beginPath(),
                s.rect(g.x1, g.y1, g.width, g.height), s.clip());
            d = [];
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                var z = a.dataSeriesIndexes[g],
                    x = this.data[z],
                    y = x.dataPoints;
                x.dataPointIndexes = [];
                for (p = 0; p < y.length; p++) z = y[p].x.getTime ? y[p].x.getTime() : y[p].x, x.dataPointIndexes[z] = p, d[z] || (l.push(z), d[z] = !0);
                l.sort(ya)
            }
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                z = a.dataSeriesIndexes[g];
                x = this.data[z];
                y = x.dataPoints;
                u = !0;
                h = [];
                p = x.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: z
                };
                p = F(p);
                s.fillStyle =
                    p;
                if (0 < l.length) {
                    var d = x._colorSet[0],
                        A = x.lineColor = x.options.lineColor || d,
                        B = A;
                    b.fillStyle = d;
                    b.strokeStyle = A;
                    b.lineWidth = x.lineThickness;
                    v = "solid";
                    if (b.setLineDash) {
                        var C = G(x.nullDataLineDashType, x.lineThickness);
                        v = x.lineDashType;
                        var V = G(v, x.lineThickness);
                        b.setLineDash(V)
                    }
                    for (var W = !0, p = 0; p < l.length; p++) {
                        q = l[p];
                        var I = null,
                            I = 0 <= x.dataPointIndexes[q] ? y[x.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!x.connectNullData || !W)))
                            if ("number" !== typeof I.y) x.connectNullData ||
                                (W || u) || c(), W = !0;
                            else {
                                n = a.axisX.convertValueToPixel(q);
                                var da = k[q] ? k[q] : 0;
                                if (a.axisY.logarithmic) {
                                    m[q] = I.y + (m[q] ? m[q] : 0);
                                    if (0 >= m[q]) continue;
                                    e = a.axisY.convertValueToPixel(m[q])
                                } else e = a.axisY.convertValueToPixel(I.y), e -= da;
                                h.push({
                                    x: n,
                                    y: r - da
                                });
                                k[q] = r - e;
                                u || W ? (!u && x.connectNullData ? (b.setLineDash && (x.options.nullDataLineDashType || v === x.lineDashType && x.lineDashType !== x.nullDataLineDashType) && (u = h.pop(), v = h[h.length - 1], c(), b.moveTo(w.x, w.y), h.push(v), h.push(u), v = x.nullDataLineDashType, b.setLineDash(C)),
                                    b.lineTo(n, e), t && s.lineTo(n, e)) : (b.beginPath(), b.moveTo(n, e), t && (s.beginPath(), s.moveTo(n, e))), W = u = !1) : (b.lineTo(n, e), t && s.lineTo(n, e), 0 == p % 250 && (c(), b.moveTo(n, e), t && s.moveTo(n, e), h.push({
                                    x: n,
                                    y: r - da
                                })));
                                w = {
                                    x: n,
                                    y: e
                                };
                                p < y.length - 1 && (B !== (y[p].lineColor || A) || v !== (y[p].lineDashType || x.lineDashType)) && (c(), b.beginPath(), b.moveTo(n, e), h.push({
                                    x: n,
                                    y: r - da
                                }), B = y[p].lineColor || A, b.strokeStyle = B, b.setLineDash && (y[p].lineDashType ? (v = y[p].lineDashType, b.setLineDash(G(v, x.lineThickness))) : (v = x.lineDashType, b.setLineDash(V))));
                                if (0 <= x.dataPointIndexes[q]) {
                                    var ea = x.dataPointIds[x.dataPointIndexes[q]];
                                    this._eventManager.objectMap[ea] = {
                                        id: ea,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: z,
                                        dataPointIndex: x.dataPointIndexes[q],
                                        x1: n,
                                        y1: e
                                    }
                                }
                                0 <= x.dataPointIndexes[q] && 0 !== I.markerSize && (0 < I.markerSize || 0 < x.markerSize) && (q = x.getMarkerProperties(x.dataPointIndexes[q], n, e, b), f.push(q), markerColor = F(ea), t && f.push({
                                    x: n,
                                    y: e,
                                    ctx: s,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (I.indexLabel ||
                                    x.indexLabel || I.indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea",
                                    dataPoint: I,
                                    dataSeries: x,
                                    point: {
                                        x: n,
                                        y: e
                                    },
                                    direction: 0 > y[p].y === a.axisY.reversed ? 1 : -1,
                                    color: d
                                })
                            }
                    }
                    c();
                    b.moveTo(n, e);
                    t && s.moveTo(n, e)
                }
                delete x.dataPointIndexes
            }
            N.drawMarkers(f);
            b.restore();
            t && s.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderStackedArea100 = function(a) {
        function c() {
            for (0 < x.lineThickness &&
                b.stroke(); 0 < h.length;) {
                var a = h.pop();
                b.lineTo(a.x, a.y);
                t && v.lineTo(a.x, a.y)
            }
            b.closePath();
            b.globalAlpha = x.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            t && (v.closePath(), v.fill(), v.beginPath());
            h = []
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                f = this.plotArea,
                g = [],
                k = [],
                h = [],
                l = [],
                m = [],
                p = 0,
                n, e, q, r, s, w, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                v = this._eventManager.ghostCtx;
            b.save();
            t && v.save();
            b.beginPath();
            b.rect(f.x1,
                f.y1, f.width, f.height);
            b.clip();
            t && (v.beginPath(), v.rect(f.x1, f.y1, f.width, f.height), v.clip());
            d = [];
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var z = a.dataSeriesIndexes[f],
                    x = this.data[z],
                    y = x.dataPoints;
                x.dataPointIndexes = [];
                for (p = 0; p < y.length; p++) z = y[p].x.getTime ? y[p].x.getTime() : y[p].x, x.dataPointIndexes[z] = p, d[z] || (l.push(z), d[z] = !0);
                l.sort(ya)
            }
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                z = a.dataSeriesIndexes[f];
                x = this.data[z];
                y = x.dataPoints;
                s = !0;
                d = x.id;
                this._eventManager.objectMap[d] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: z
                };
                d = F(d);
                v.fillStyle = d;
                h = [];
                if (0 < l.length) {
                    var d = x._colorSet[p % x._colorSet.length],
                        A = x.lineColor = x.options.lineColor || d,
                        B = A;
                    b.fillStyle = d;
                    b.strokeStyle = A;
                    b.lineWidth = x.lineThickness;
                    w = "solid";
                    if (b.setLineDash) {
                        var C = G(x.nullDataLineDashType, x.lineThickness);
                        w = x.lineDashType;
                        var V = G(w, x.lineThickness);
                        b.setLineDash(V)
                    }
                    for (var W = !0, p = 0; p < l.length; p++) {
                        q = l[p];
                        var I = null,
                            I = 0 <= x.dataPointIndexes[q] ? y[x.dataPointIndexes[q]] : {
                                x: q,
                                y: null
                            };
                        if (!(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax &&
                                (!x.connectNullData || !W)))
                            if ("number" !== typeof I.y) x.connectNullData || (W || s) || c(), W = !0;
                            else {
                                var da;
                                da = 0 !== a.dataPointYSums[q] ? 100 * (I.y / a.dataPointYSums[q]) : 0;
                                n = a.axisX.convertValueToPixel(q);
                                var ea = k[q] ? k[q] : 0;
                                if (a.axisY.logarithmic) {
                                    m[q] = da + (m[q] ? m[q] : 0);
                                    if (0 >= m[q]) continue;
                                    e = a.axisY.convertValueToPixel(m[q])
                                } else e = a.axisY.convertValueToPixel(da), e -= ea;
                                h.push({
                                    x: n,
                                    y: u - ea
                                });
                                k[q] = u - e;
                                s || W ? (!s && x.connectNullData ? (b.setLineDash && (x.options.nullDataLineDashType || w === x.lineDashType && x.lineDashType !==
                                    x.nullDataLineDashType) && (s = h.pop(), w = h[h.length - 1], c(), b.moveTo(r.x, r.y), h.push(w), h.push(s), w = x.nullDataLineDashType, b.setLineDash(C)), b.lineTo(n, e), t && v.lineTo(n, e)) : (b.beginPath(), b.moveTo(n, e), t && (v.beginPath(), v.moveTo(n, e))), W = s = !1) : (b.lineTo(n, e), t && v.lineTo(n, e), 0 == p % 250 && (c(), b.moveTo(n, e), t && v.moveTo(n, e), h.push({
                                    x: n,
                                    y: u - ea
                                })));
                                r = {
                                    x: n,
                                    y: e
                                };
                                p < y.length - 1 && (B !== (y[p].lineColor || A) || w !== (y[p].lineDashType || x.lineDashType)) && (c(), b.beginPath(), b.moveTo(n, e), h.push({
                                        x: n,
                                        y: u - ea
                                    }), B = y[p].lineColor ||
                                    A, b.strokeStyle = B, b.setLineDash && (y[p].lineDashType ? (w = y[p].lineDashType, b.setLineDash(G(w, x.lineThickness))) : (w = x.lineDashType, b.setLineDash(V))));
                                if (0 <= x.dataPointIndexes[q]) {
                                    var Fa = x.dataPointIds[x.dataPointIndexes[q]];
                                    this._eventManager.objectMap[Fa] = {
                                        id: Fa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: z,
                                        dataPointIndex: x.dataPointIndexes[q],
                                        x1: n,
                                        y1: e
                                    }
                                }
                                0 <= x.dataPointIndexes[q] && 0 !== I.markerSize && (0 < I.markerSize || 0 < x.markerSize) && (q = x.getMarkerProperties(p, n, e, b), g.push(q), markerColor = F(Fa), t && g.push({
                                    x: n,
                                    y: e,
                                    ctx: v,
                                    type: q.type,
                                    size: q.size,
                                    color: markerColor,
                                    borderColor: markerColor,
                                    borderThickness: q.borderThickness
                                }));
                                (I.indexLabel || x.indexLabel || I.indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedArea100",
                                    dataPoint: I,
                                    dataSeries: x,
                                    point: {
                                        x: n,
                                        y: e
                                    },
                                    direction: 0 > y[p].y === a.axisY.reversed ? 1 : -1,
                                    color: d
                                })
                            }
                    }
                    c();
                    b.moveTo(n, e);
                    t && v.moveTo(n, e)
                }
                delete x.dataPointIndexes
            }
            N.drawMarkers(g);
            b.restore();
            t && v.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderBubble = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                d = 0,
                f, g;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var k = -Infinity, h = Infinity, l = 0; l < a.dataSeriesIndexes.length; l++)
                for (var m =
                        a.dataSeriesIndexes[l], p = this.data[m], n = p.dataPoints, e = 0, d = 0; d < n.length; d++) f = n[d].getTime ? f = n[d].x.getTime() : f = n[d].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof n[d].z || (e = n[d].z, e > k && (k = e), e < h && (h = e));
            for (var q = 25 * Math.PI, b = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, q), l = 0; l < a.dataSeriesIndexes.length; l++)
                if (m = a.dataSeriesIndexes[l], p = this.data[m], n = p.dataPoints, 0 < n.length)
                    for (c.strokeStyle = "#4572A7 ", d = 0; d < n.length; d++)
                        if (f = n[d].getTime ?
                            f = n[d].x.getTime() : f = n[d].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[d].y) {
                            f = a.axisX.convertValueToPixel(f);
                            g = a.axisY.convertValueToPixel(n[d].y);
                            var e = n[d].z,
                                r = 2 * Math.max(Math.sqrt((k === h ? b / 2 : q + (b - q) / (k - h) * (e - h)) / Math.PI) << 0, 1),
                                e = p.getMarkerProperties(d, c);
                            e.size = r;
                            c.globalAlpha = p.fillOpacity;
                            N.drawMarker(f, g, c, e.type, e.size, e.color, e.borderColor, e.borderThickness);
                            c.globalAlpha = 1;
                            var s = p.dataPointIds[d];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: d,
                                x1: f,
                                y1: g,
                                size: r
                            };
                            r = F(s);
                            t && N.drawMarker(f, g, this._eventManager.ghostCtx, e.type, e.size, r, r, e.borderThickness);
                            (n[d].indexLabel || p.indexLabel || n[d].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: n[d],
                                dataSeries: p,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - e.size / 2,
                                    y1: g - e.size / 2,
                                    x2: f + e.size / 2,
                                    y2: g + e.size / 2
                                },
                                color: null
                            })
                        }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    B.prototype.renderScatter = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea,
                d = 0,
                f, g;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                var h = a.dataSeriesIndexes[k],
                    l = this.data[h],
                    m = l.dataPoints;
                if (0 < m.length) {
                    c.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                    for (var p = 0, n = 0, d = 0; d < m.length; d++)
                        if (f = m[d].getTime ? f = m[d].x.getTime() : f = m[d].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[d].y) {
                            f = a.axisX.convertValueToPixel(f);
                            g = a.axisY.convertValueToPixel(m[d].y);
                            var e = l.getMarkerProperties(d, f, g, c);
                            c.globalAlpha = l.fillOpacity;
                            N.drawMarker(e.x, e.y, e.ctx, e.type, e.size, e.color, e.borderColor, e.borderThickness);
                            c.globalAlpha = 1;
                            Math.sqrt((p - f) * (p - f) + (n - g) * (n - g)) < Math.min(e.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = l.dataPointIds[d], this._eventManager.objectMap[p] = {
                                id: p,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: d,
                                x1: f,
                                y1: g
                            }, p = F(p), t && N.drawMarker(e.x, e.y, this._eventManager.ghostCtx, e.type, e.size, p, p, e.borderThickness), (m[d].indexLabel || l.indexLabel || m[d].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: m[d],
                                dataSeries: l,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - e.size / 2,
                                    y1: g - e.size / 2,
                                    x2: f + e.size / 2,
                                    y2: g + e.size / 2
                                },
                                color: null
                            }), p = f, n = g)
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    B.prototype.renderCandlestick = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx,
            b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                d = this.plotArea,
                f = 0,
                g, k, h, l, m, p, f = this.dataPointMinWidth ?
                this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width;
            var n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth ? this.dataPointWidth : 0.7 * d.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth &&
                (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            n < f && (n = f);
            n > g && (n = g);
            c.save();
            t && b.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (b.beginPath(), b.rect(d.x1, d.y1, d.width, d.height), b.clip());
            for (var e = 0; e < a.dataSeriesIndexes.length; e++) {
                var q = a.dataSeriesIndexes[e],
                    r = this.data[q],
                    s = r.dataPoints;
                if (0 < s.length)
                    for (var w = 5 < n && r.bevelEnabled ? !0 : !1, f = 0; f < s.length; f++)
                        if (s[f].getTime ? p = s[f].x.getTime() : p = s[f].x, !(p < a.axisX.dataInfo.viewPortMin ||
                                p > a.axisX.dataInfo.viewPortMax) && null !== s[f].y && s[f].y.length && "number" === typeof s[f].y[0] && "number" === typeof s[f].y[1] && "number" === typeof s[f].y[2] && "number" === typeof s[f].y[3]) {
                            g = a.axisX.convertValueToPixel(p);
                            k = a.axisY.convertValueToPixel(s[f].y[0]);
                            h = a.axisY.convertValueToPixel(s[f].y[1]);
                            l = a.axisY.convertValueToPixel(s[f].y[2]);
                            m = a.axisY.convertValueToPixel(s[f].y[3]);
                            var u = g - n / 2 << 0,
                                v = u + n << 0,
                                d = s[f].color ? s[f].color : r._colorSet[0],
                                z = Math.round(Math.max(1, 0.15 * n)),
                                x = 0 === z % 2 ? 0 : 0.5,
                                y = r.dataPointIds[f];
                            this._eventManager.objectMap[y] = {
                                id: y,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: f,
                                x1: u,
                                y1: k,
                                x2: v,
                                y2: h,
                                x3: g,
                                y3: l,
                                x4: g,
                                y4: m,
                                borderThickness: z,
                                color: d
                            };
                            c.strokeStyle = d;
                            c.beginPath();
                            c.lineWidth = z;
                            b.lineWidth = Math.max(z, 4);
                            "candlestick" === r.type ? (c.moveTo(g - x, h), c.lineTo(g - x, Math.min(k, m)), c.stroke(), c.moveTo(g - x, Math.max(k, m)), c.lineTo(g - x, l), c.stroke(), M(c, u, Math.min(k, m), v, Math.max(k, m), s[f].y[0] <= s[f].y[3] ? r.risingColor : d, z, d, w, w, !1, !1, r.fillOpacity), t && (d = F(y), b.strokeStyle = d, b.moveTo(g -
                                x, h), b.lineTo(g - x, Math.min(k, m)), b.stroke(), b.moveTo(g - x, Math.max(k, m)), b.lineTo(g - x, l), b.stroke(), M(b, u, Math.min(k, m), v, Math.max(k, m), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (c.moveTo(g - x, h), c.lineTo(g - x, l), c.stroke(), c.beginPath(), c.moveTo(g, k), c.lineTo(u, k), c.stroke(), c.beginPath(), c.moveTo(g, m), c.lineTo(v, m), c.stroke(), t && (d = F(y), b.strokeStyle = d, b.moveTo(g - x, h), b.lineTo(g - x, l), b.stroke(), b.beginPath(), b.moveTo(g, k), b.lineTo(u, k), b.stroke(), b.beginPath(), b.moveTo(g, m), b.lineTo(v, m), b.stroke()));
                            (s[f].indexLabel || r.indexLabel || s[f].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: r.type,
                                dataPoint: s[f],
                                dataSeries: r,
                                point: {
                                    x: u + (v - u) / 2,
                                    y: a.axisY.reversed ? l : h
                                },
                                direction: 1,
                                bounds: {
                                    x1: u,
                                    y1: Math.min(h, l),
                                    x2: v,
                                    y2: Math.max(h, l)
                                },
                                color: d
                            })
                        }
            }
            c.restore();
            t && b.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    B.prototype.renderRangeColumn = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = 0,
                g, k, f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var h = a.axisX.dataInfo.minDiff;
            isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
            h = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) <<
                0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, f));
            h < f && (h = f);
            h > g && (h = g);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                var m =
                    a.dataSeriesIndexes[l],
                    p = this.data[m],
                    n = p.dataPoints;
                if (0 < n.length)
                    for (var e = 5 < h && p.bevelEnabled ? !0 : !1, f = 0; f < n.length; f++)
                        if (n[f].getTime ? k = n[f].x.getTime() : k = n[f].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && null !== n[f].y && n[f].y.length && "number" === typeof n[f].y[0] && "number" === typeof n[f].y[1]) {
                            b = a.axisX.convertValueToPixel(k);
                            d = a.axisY.convertValueToPixel(n[f].y[0]);
                            g = a.axisY.convertValueToPixel(n[f].y[1]);
                            var q = a.axisX.reversed ? b + a.plotType.totalDataSeries * h / 2 - (a.previousDataSeriesCount +
                                    l) * h << 0 : b - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + l) * h << 0,
                                r = a.axisX.reversed ? q - h << 0 : q + h << 0,
                                b = n[f].color ? n[f].color : p._colorSet[f % p._colorSet.length];
                            if (d > g) {
                                var s = d,
                                    d = g;
                                g = s
                            }
                            s = p.dataPointIds[f];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: f,
                                x1: q,
                                y1: d,
                                x2: r,
                                y2: g
                            };
                            M(c, q, d, r, g, b, 0, b, e, e, !1, !1, p.fillOpacity);
                            b = F(s);
                            t && M(this._eventManager.ghostCtx, q, d, r, g, b, 0, null, !1, !1, !1, !1);
                            if (n[f].indexLabel || p.indexLabel || n[f].indexLabelFormatter ||
                                p.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: n[f],
                                dataSeries: p,
                                indexKeyword: 0,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: n[f].y[1] >= n[f].y[0] ? g : d
                                },
                                direction: n[f].y[1] >= n[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, g),
                                    x2: r,
                                    y2: Math.max(d, g)
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: n[f],
                                dataSeries: p,
                                indexKeyword: 1,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: n[f].y[1] >= n[f].y[0] ? d : g
                                },
                                direction: n[f].y[1] >= n[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, g),
                                    x2: r,
                                    y2: Math.max(d, g)
                                },
                                color: b
                            })
                        }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    B.prototype.renderRangeBar = function(a) {
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null,
                d = this.plotArea,
                f = 0,
                g, k, h, f = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            g = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth :
                Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && f > g && (f = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < f) && (g = Math.max(this.dataPointWidth ?
                this.dataPointWidth : -Infinity, f));
            l < f && (l = f);
            l > g && (l = g);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                var p = a.dataSeriesIndexes[m],
                    n = this.data[p],
                    e = n.dataPoints;
                if (0 < e.length) {
                    var q = 5 < l && n.bevelEnabled ? !0 : !1;
                    c.strokeStyle = "#4572A7 ";
                    for (f = 0; f < e.length; f++)
                        if (e[f].getTime ?
                            h = e[f].x.getTime() : h = e[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && null !== e[f].y && e[f].y.length && "number" === typeof e[f].y[0] && "number" === typeof e[f].y[1]) {
                            d = a.axisY.convertValueToPixel(e[f].y[0]);
                            g = a.axisY.convertValueToPixel(e[f].y[1]);
                            k = a.axisX.convertValueToPixel(h);
                            k = a.axisX.reversed ? k + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount + m) * l << 0 : k - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + m) * l << 0;
                            var r = a.axisX.reversed ? k - l << 0 : k + l << 0;
                            d > g && (b = d, d =
                                g, g = b);
                            b = e[f].color ? e[f].color : n._colorSet[f % n._colorSet.length];
                            M(c, d, k, g, r, b, 0, null, q, !1, !1, !1, n.fillOpacity);
                            b = n.dataPointIds[f];
                            this._eventManager.objectMap[b] = {
                                id: b,
                                objectType: "dataPoint",
                                dataSeriesIndex: p,
                                dataPointIndex: f,
                                x1: d,
                                y1: k,
                                x2: g,
                                y2: r
                            };
                            b = F(b);
                            t && M(this._eventManager.ghostCtx, d, k, g, r, b, 0, null, !1, !1, !1, !1);
                            if (e[f].indexLabel || n.indexLabel || e[f].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: e[f],
                                dataSeries: n,
                                indexKeyword: 0,
                                point: {
                                    x: e[f].y[1] >=
                                        e[f].y[0] ? d : g,
                                    y: k + (r - k) / 2
                                },
                                direction: e[f].y[1] >= e[f].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(d, g),
                                    y1: k,
                                    x2: Math.max(d, g),
                                    y2: r
                                },
                                color: b
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: e[f],
                                dataSeries: n,
                                indexKeyword: 1,
                                point: {
                                    x: e[f].y[1] >= e[f].y[0] ? g : d,
                                    y: k + (r - k) / 2
                                },
                                direction: e[f].y[1] >= e[f].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(d, g),
                                    y1: k,
                                    x2: Math.max(d, g),
                                    y2: r
                                },
                                color: b
                            })
                        }
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: E.fadeInAnimation,
                easingFunction: E.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    B.prototype.renderRangeArea = function(a) {
        function c() {
            if (w) {
                var a = null;
                0 < l.lineThickness && b.stroke();
                for (var c = k.length - 1; 0 <= c; c--) a = k[c], b.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                b.closePath();
                b.globalAlpha = l.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                d.fill();
                if (0 < l.lineThickness) {
                    b.beginPath();
                    b.moveTo(a.x, a.y);
                    for (c = 0; c < k.length; c++) a = k[c], b.lineTo(a.x, a.y);
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(e, q);
                d.beginPath();
                d.moveTo(e, q);
                w = {
                    x: e,
                    y: q
                };
                k = [];
                k.push({
                    x: e,
                    y: r
                })
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                f = [],
                g = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(g.x1, g.y1, g.width, g.height);
            b.clip();
            t && (d.beginPath(), d.rect(g.x1, g.y1, g.width, g.height), d.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = [],
                    h = a.dataSeriesIndexes[g],
                    l = this.data[h],
                    m = l.dataPoints,
                    f = l.id;
                this._eventManager.objectMap[f] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: h
                };
                f = F(f);
                d.fillStyle = f;
                var f = [],
                    p = !0,
                    n = 0,
                    e, q, r, s, w = null;
                if (0 < m.length) {
                    var u = l._colorSet[n %
                            l._colorSet.length],
                        v = l.lineColor = l.options.lineColor || u,
                        z = v;
                    b.fillStyle = u;
                    b.strokeStyle = v;
                    b.lineWidth = l.lineThickness;
                    var x = "solid";
                    if (b.setLineDash) {
                        var y = G(l.nullDataLineDashType, l.lineThickness),
                            x = l.lineDashType,
                            A = G(x, l.lineThickness);
                        b.setLineDash(A)
                    }
                    for (var B = !0; n < m.length; n++)
                        if (s = m[n].x.getTime ? m[n].x.getTime() : m[n].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !B)))
                            if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                                e =
                                    a.axisX.convertValueToPixel(s);
                                q = a.axisY.convertValueToPixel(m[n].y[0]);
                                r = a.axisY.convertValueToPixel(m[n].y[1]);
                                p || B ? (l.connectNullData && !p ? (b.setLineDash && (l.options.nullDataLineDashType || x === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (k[k.length - 1].newLineDashArray = A, x = l.nullDataLineDashType, b.setLineDash(y)), b.lineTo(e, q), t && d.lineTo(e, q), k.push({
                                    x: e,
                                    y: r
                                })) : (b.beginPath(), b.moveTo(e, q), w = {
                                    x: e,
                                    y: q
                                }, k = [], k.push({
                                    x: e,
                                    y: r
                                }), t && (d.beginPath(), d.moveTo(e, q))), B = p = !1) : (b.lineTo(e, q), k.push({
                                    x: e,
                                    y: r
                                }), t && d.lineTo(e, q), 0 == n % 250 && c());
                                s = l.dataPointIds[n];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: h,
                                    dataPointIndex: n,
                                    x1: e,
                                    y1: q,
                                    y2: r
                                };
                                n < m.length - 1 && (z !== (m[n].lineColor || v) || x !== (m[n].lineDashType || l.lineDashType)) && (c(), z = m[n].lineColor || v, k[k.length - 1].newStrokeStyle = z, b.strokeStyle = z, b.setLineDash && (m[n].lineDashType ? (x = m[n].lineDashType, k[k.length - 1].newLineDashArray = G(x, l.lineThickness), b.setLineDash(k[k.length - 1].newLineDashArray)) : (x = l.lineDashType, k[k.length -
                                    1].newLineDashArray = A, b.setLineDash(A))));
                                if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < l.markerSize)) {
                                    var C = l.getMarkerProperties(n, e, r, b);
                                    f.push(C);
                                    var V = F(s);
                                    t && f.push({
                                        x: e,
                                        y: r,
                                        ctx: d,
                                        type: C.type,
                                        size: C.size,
                                        color: V,
                                        borderColor: V,
                                        borderThickness: C.borderThickness
                                    });
                                    C = l.getMarkerProperties(n, e, q, b);
                                    f.push(C);
                                    V = F(s);
                                    t && f.push({
                                        x: e,
                                        y: q,
                                        ctx: d,
                                        type: C.type,
                                        size: C.size,
                                        color: V,
                                        borderColor: V,
                                        borderThickness: C.borderThickness
                                    })
                                }
                                if (m[n].indexLabel || l.indexLabel || m[n].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: m[n],
                                    dataSeries: l,
                                    indexKeyword: 0,
                                    point: {
                                        x: e,
                                        y: q
                                    },
                                    direction: m[n].y[0] > m[n].y[1] === a.axisY.reversed ? -1 : 1,
                                    color: u
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: m[n],
                                    dataSeries: l,
                                    indexKeyword: 1,
                                    point: {
                                        x: e,
                                        y: r
                                    },
                                    direction: m[n].y[0] > m[n].y[1] === a.axisY.reversed ? 1 : -1,
                                    color: u
                                })
                            } else B || p || c(), B = !0;
                    c();
                    N.drawMarkers(f)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    B.prototype.renderRangeSplineArea = function(a) {
        function c(a, c) {
            var e = ua(q, 2);
            if (0 < e.length) {
                if (0 < h.lineThickness) {
                    b.strokeStyle = c;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var f = 0; f < e.length - 3; f += 3) {
                        if (e[f].newStrokeStyle || e[f].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), e[f].newStrokeStyle && (b.strokeStyle = e[f].newStrokeStyle), e[f].newLineDashArray && b.setLineDash(e[f].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x,
                            e[f + 3].y)
                    }
                    b.stroke()
                }
                b.beginPath();
                b.moveTo(e[0].x, e[0].y);
                t && (d.beginPath(), d.moveTo(e[0].x, e[0].y));
                for (f = 0; f < e.length - 3; f += 3) b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y), t && d.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f + 3].y);
                e = ua(r, 2);
                b.lineTo(r[r.length - 1].x, r[r.length - 1].y);
                for (f = e.length - 1; 2 < f; f -= 3) b.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y), t && d.bezierCurveTo(e[f - 1].x, e[f - 1].y, e[f - 2].x, e[f - 2].y, e[f - 3].x, e[f - 3].y);
                b.closePath();
                b.globalAlpha = h.fillOpacity;
                b.fill();
                t && (d.closePath(), d.fill());
                b.globalAlpha = 1;
                if (0 < h.lineThickness) {
                    b.strokeStyle = c;
                    b.setLineDash && b.setLineDash(a);
                    b.beginPath();
                    b.moveTo(e[0].x, e[0].y);
                    for (var g = f = 0; f < e.length - 3; f += 3, g++) {
                        if (q[g].newStrokeStyle || q[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(e[f].x, e[f].y), q[g].newStrokeStyle && (b.strokeStyle = q[g].newStrokeStyle), q[g].newLineDashArray && b.setLineDash(q[g].newLineDashArray);
                        b.bezierCurveTo(e[f + 1].x, e[f + 1].y, e[f + 2].x, e[f + 2].y, e[f + 3].x, e[f +
                            3].y)
                    }
                    b.stroke()
                }
                b.beginPath()
            }
        }
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                f = [],
                g = this.plotArea;
            b.save();
            t && d.save();
            b.beginPath();
            b.rect(g.x1, g.y1, g.width, g.height);
            b.clip();
            t && (d.beginPath(), d.rect(g.x1, g.y1, g.width, g.height), d.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = a.dataSeriesIndexes[g],
                    h = this.data[k],
                    l = h.dataPoints,
                    f = h.id;
                this._eventManager.objectMap[f] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                f = F(f);
                d.fillStyle =
                    f;
                var f = [],
                    m = 0,
                    p, n, e, q = [],
                    r = [];
                if (0 < l.length) {
                    var s = h._colorSet[m % h._colorSet.length],
                        w = h.lineColor = h.options.lineColor || s,
                        u = w;
                    b.fillStyle = s;
                    b.lineWidth = h.lineThickness;
                    var v = "solid",
                        z;
                    if (b.setLineDash) {
                        var x = G(h.nullDataLineDashType, h.lineThickness),
                            v = h.lineDashType;
                        z = G(v, h.lineThickness)
                    }
                    for (n = !1; m < l.length; m++)
                        if (p = l[m].x.getTime ? l[m].x.getTime() : l[m].x, !(p < a.axisX.dataInfo.viewPortMin || p > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !n)))
                            if (null !== l[m].y && l[m].y.length && "number" === typeof l[m].y[0] &&
                                "number" === typeof l[m].y[1]) {
                                p = a.axisX.convertValueToPixel(p);
                                n = a.axisY.convertValueToPixel(l[m].y[0]);
                                e = a.axisY.convertValueToPixel(l[m].y[1]);
                                var y = h.dataPointIds[m];
                                this._eventManager.objectMap[y] = {
                                    id: y,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: m,
                                    x1: p,
                                    y1: n,
                                    y2: e
                                };
                                q[q.length] = {
                                    x: p,
                                    y: n
                                };
                                r[r.length] = {
                                    x: p,
                                    y: e
                                };
                                m < l.length - 1 && (u !== (l[m].lineColor || w) || v !== (l[m].lineDashType || h.lineDashType)) && (u = l[m].lineColor || w, q[q.length - 1].newStrokeStyle = u, b.setLineDash && (l[m].lineDashType ? (v = l[m].lineDashType,
                                    q[q.length - 1].newLineDashArray = G(v, h.lineThickness)) : (v = h.lineDashType, q[q.length - 1].newLineDashArray = z)));
                                if (0 !== l[m].markerSize && (0 < l[m].markerSize || 0 < h.markerSize)) {
                                    var A = h.getMarkerProperties(m, p, n, b);
                                    f.push(A);
                                    var B = F(y);
                                    t && f.push({
                                        x: p,
                                        y: n,
                                        ctx: d,
                                        type: A.type,
                                        size: A.size,
                                        color: B,
                                        borderColor: B,
                                        borderThickness: A.borderThickness
                                    });
                                    A = h.getMarkerProperties(m, p, e, b);
                                    f.push(A);
                                    B = F(y);
                                    t && f.push({
                                        x: p,
                                        y: e,
                                        ctx: d,
                                        type: A.type,
                                        size: A.size,
                                        color: B,
                                        borderColor: B,
                                        borderThickness: A.borderThickness
                                    })
                                }
                                if (l[m].indexLabel ||
                                    h.indexLabel || l[m].indexLabelFormatter || h.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeSplineArea",
                                    dataPoint: l[m],
                                    dataSeries: h,
                                    indexKeyword: 0,
                                    point: {
                                        x: p,
                                        y: n
                                    },
                                    direction: l[m].y[0] <= l[m].y[1] ? -1 : 1,
                                    color: s
                                }), this._indexLabels.push({
                                    chartType: "rangeSplineArea",
                                    dataPoint: l[m],
                                    dataSeries: h,
                                    indexKeyword: 1,
                                    point: {
                                        x: p,
                                        y: e
                                    },
                                    direction: l[m].y[0] <= l[m].y[1] ? 1 : -1,
                                    color: s
                                });
                                n = !1
                            } else 0 < m && !n && (h.connectNullData ? b.setLineDash && (0 < q.length && (h.options.nullDataLineDashType || !l[m - 1].lineDashType)) && (q[q.length -
                                1].newLineDashArray = x, v = h.nullDataLineDashType) : (c(z, w), q = [], r = [])), n = !0;
                    c(z, w);
                    N.drawMarkers(f)
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: E.xClipAnimation,
                easingFunction: E.easing.linear,
                animationBase: 0
            }
        }
    };
    var Ga = function(a, c, b, d, f, g, k, h, l) {
        if (!(0 > b)) {
            "undefined" === typeof h && (h = 1);
            if (!t) {
                var m = Number((k % (2 * Math.PI)).toFixed(8));
                Number((g % (2 * Math.PI)).toFixed(8)) === m && (k -= 1E-4)
            }
            a.save();
            a.globalAlpha = h;
            "pie" === f ? (a.beginPath(), a.moveTo(c.x,
                c.y), a.arc(c.x, c.y, b, g, k, !1), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === f && (a.beginPath(), a.arc(c.x, c.y, b, g, k, !1), 0 <= l && a.arc(c.x, c.y, l * b, k, g, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore()
        }
    };
    B.prototype.renderPie = function(a) {
        function c() {
            if (m && p) {
                for (var a = 0, b = 0, c = 0, d = 0, f = 0; f < p.length; f++) {
                    var g = p[f],
                        h = m.dataPointIds[f],
                        k = {
                            id: h,
                            objectType: "dataPoint",
                            dataPointIndex: f,
                            dataSeriesIndex: 0
                        };
                    q.push(k);
                    var n = {
                            percent: null,
                            total: null
                        },
                        r = null,
                        n = l.getPercentAndTotal(m, g);
                    if (m.indexLabelFormatter || g.indexLabelFormatter) r = {
                        chart: l.options,
                        dataSeries: m,
                        dataPoint: g,
                        total: n.total,
                        percent: n.percent
                    };
                    n = g.indexLabelFormatter ? g.indexLabelFormatter(r) : g.indexLabel ? l.replaceKeywordsWithValue(g.indexLabel, g, m, f) : m.indexLabelFormatter ? m.indexLabelFormatter(r) : m.indexLabel ? l.replaceKeywordsWithValue(m.indexLabel, g, m, f) : g.label ? g.label : "";
                    l._eventManager.objectMap[h] = k;
                    k.center = {
                        x: z.x,
                        y: z.y
                    };
                    k.y = g.y;
                    k.radius = C;
                    k.percentInnerRadius =
                        F;
                    k.indexLabelText = n;
                    k.indexLabelPlacement = m.indexLabelPlacement;
                    k.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : m.options.indexLabelLineColor ? m.options.indexLabelLineColor : g.color ? g.color : m._colorSet[f % m._colorSet.length];
                    k.indexLabelLineThickness = y(g.indexLabelLineThickness) ? m.indexLabelLineThickness : g.indexLabelLineThickness;
                    k.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : m.indexLabelLineDashType;
                    k.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor :
                        m.indexLabelFontColor;
                    k.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : m.indexLabelFontStyle;
                    k.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : m.indexLabelFontWeight;
                    k.indexLabelFontSize = y(g.indexLabelFontSize) ? m.indexLabelFontSize : g.indexLabelFontSize;
                    k.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : m.indexLabelFontFamily;
                    k.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : m.options.indexLabelBackgroundColor ?
                        m.options.indexLabelBackgroundColor : m.indexLabelBackgroundColor;
                    k.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : m.indexLabelMaxWidth ? m.indexLabelMaxWidth : 0.33 * e.width;
                    k.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : m.indexLabelWrap;
                    k.startAngle = 0 === f ? m.startAngle ? m.startAngle / 180 * Math.PI : 0 : q[f - 1].endAngle;
                    k.startAngle = (k.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    k.endAngle = k.startAngle + 2 * Math.PI / t * Math.abs(g.y);
                    g = (k.endAngle + k.startAngle) / 2;
                    g = (g + 2 * Math.PI) % (2 * Math.PI);
                    k.midAngle = g;
                    if (k.midAngle > Math.PI / 2 - u && k.midAngle < Math.PI / 2 + u) {
                        if (0 === a || q[c].midAngle > k.midAngle) c = f;
                        a++
                    } else if (k.midAngle > 3 * Math.PI / 2 - u && k.midAngle < 3 * Math.PI / 2 + u) {
                        if (0 === b || q[d].midAngle > k.midAngle) d = f;
                        b++
                    }
                    k.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                    k.indexLabelTextBlock = new U(l.plotArea.ctx, {
                        fontSize: k.indexLabelFontSize,
                        fontFamily: k.indexLabelFontFamily,
                        fontColor: k.indexLabelFontColor,
                        fontStyle: k.indexLabelFontStyle,
                        fontWeight: k.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: k.indexLabelBackgroundColor,
                        maxWidth: k.indexLabelMaxWidth,
                        maxHeight: k.indexLabelWrap ? 5 * k.indexLabelFontSize : 1.5 * k.indexLabelFontSize,
                        text: k.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    k.indexLabelTextBlock.measureText()
                }
                h = g = 0;
                n = !1;
                for (f = 0; f < p.length; f++) k = q[(c + f) % p.length], 1 < a && (k.midAngle > Math.PI / 2 - u && k.midAngle < Math.PI / 2 + u) && (g <= a / 2 && !n ? (k.hemisphere = "right", g++) : (k.hemisphere = "left", n = !0));
                n = !1;
                for (f = 0; f < p.length; f++) k = q[(d + f) % p.length], 1 < b && (k.midAngle > 3 * Math.PI / 2 - u && k.midAngle < 3 * Math.PI / 2 + u) && (h <= b / 2 && !n ? (k.hemisphere =
                    "left", h++) : (k.hemisphere = "right", n = !0))
            }
        }

        function b(a) {
            var b = l.plotArea.ctx;
            b.clearRect(e.x1, e.y1, e.width, e.height);
            b.fillStyle = l.backgroundColor;
            b.fillRect(e.x1, e.y1, e.width, e.height);
            for (b = 0; b < p.length; b++) {
                var c = q[b].startAngle,
                    d = q[b].endAngle;
                if (d > c) {
                    var f = 0.07 * C * Math.cos(q[b].midAngle),
                        g = 0.07 * C * Math.sin(q[b].midAngle),
                        k = !1;
                    if (p[b].exploded) {
                        if (1E-9 < Math.abs(q[b].center.x - (z.x + f)) || 1E-9 < Math.abs(q[b].center.y - (z.y + g))) q[b].center.x = z.x + f * a, q[b].center.y = z.y + g * a, k = !0
                    } else if (0 < Math.abs(q[b].center.x -
                            z.x) || 0 < Math.abs(q[b].center.y - z.y)) q[b].center.x = z.x + f * (1 - a), q[b].center.y = z.y + g * (1 - a), k = !0;
                    k && (f = {}, f.dataSeries = m, f.dataPoint = m.dataPoints[b], f.index = b, l.toolTip.highlightObjects([f]));
                    Ga(l.plotArea.ctx, q[b].center, q[b].radius, p[b].color ? p[b].color : m._colorSet[b % m._colorSet.length], m.type, c, d, m.fillOpacity, q[b].percentInnerRadius)
                }
            }
            a = l.plotArea.ctx;
            a.save();
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline = "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < p.length; b++) c = q[b], c.indexLabelText && (c.indexLabelTextBlock.y -=
                c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== m.indexLabelPlacement ? -(c.indexLabelTextBlock.width + n) : -c.indexLabelTextBlock.width / 2 : "inside" !== m.indexLabelPlacement ? n : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + C * Math.cos(c.midAngle), f = c.center.y + C * Math.sin(c.midAngle),
                    a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(G(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, f), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -n : n), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
            a.save()
        }

        function d(a, b) {
            var c = 0,
                c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height /
                2,
                e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
        }

        function f(a) {
            for (var b = null, c = 1; c < p.length; c++)
                if (b = (a + c + q.length) % q.length, q[b].hemisphere !== q[a].hemisphere) {
                    b = null;
                    break
                } else if (q[b].indexLabelText && b !== a && (0 > d(q[b], q[a]) || ("right" === q[a].hemisphere ? q[b].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y : q[b].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y))) break;
            else b = null;
            return b
        }

        function g(a, b, c) {
            c = (c || 0) + 1;
            if (1E3 < c) return 0;
            b = b || 0;
            var e = 0,
                k = z.y - 1 * s,
                h = z.y + 1 * s;
            if (0 <= a && a < p.length) {
                var l = q[a];
                if (0 > b && l.indexLabelTextBlock.y < k || 0 < b && l.indexLabelTextBlock.y > h) return 0;
                var m = 0,
                    n = 0,
                    n = m = m = 0;
                0 > b ? l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 > k && l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b < k && (b = -(k - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + b))) : l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 < k && l.indexLabelTextBlock.y +
                    l.indexLabelTextBlock.height / 2 + b > h && (b = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + b - h);
                b = l.indexLabelTextBlock.y + b;
                k = 0;
                k = "right" === l.hemisphere ? z.x + Math.sqrt(Math.pow(s, 2) - Math.pow(b - z.y, 2)) : z.x - Math.sqrt(Math.pow(s, 2) - Math.pow(b - z.y, 2));
                n = z.x + C * Math.cos(l.midAngle);
                m = z.y + C * Math.sin(l.midAngle);
                m = Math.sqrt(Math.pow(k - n, 2) + Math.pow(b - m, 2));
                n = Math.acos(C / s);
                m = Math.acos((s * s + C * C - m * m) / (2 * C * s));
                b = m < n ? b - l.indexLabelTextBlock.y : 0;
                k = null;
                for (h = 1; h < p.length; h++)
                    if (k = (a - h + q.length) % q.length, q[k].hemisphere !==
                        q[a].hemisphere) {
                        k = null;
                        break
                    } else if (q[k].indexLabelText && q[k].hemisphere === q[a].hemisphere && k !== a && (0 > d(q[k], q[a]) || ("right" === q[a].hemisphere ? q[k].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y : q[k].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y))) break;
                else k = null;
                n = k;
                m = f(a);
                h = k = 0;
                0 > b ? (h = "right" === l.hemisphere ? n : m, e = b, null !== h && (n = -b, b = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - (q[h].indexLabelTextBlock.y + q[h].indexLabelTextBlock.height / 2), b - n < r && (k = -n, h = g(h, k, c + 1), +h.toFixed(v) >
                    +k.toFixed(v) && (e = b > r ? -(b - r) : -(n - (h - k)))))) : 0 < b && (h = "right" === l.hemisphere ? m : n, e = b, null !== h && (n = b, b = q[h].indexLabelTextBlock.y - q[h].indexLabelTextBlock.height / 2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2), b - n < r && (k = n, h = g(h, k, c + 1), +h.toFixed(v) < +k.toFixed(v) && (e = b > r ? b - r : n - (k - h)))));
                e && (c = l.indexLabelTextBlock.y + e, b = 0, b = "right" === l.hemisphere ? z.x + Math.sqrt(Math.pow(s, 2) - Math.pow(c - z.y, 2)) : z.x - Math.sqrt(Math.pow(s, 2) - Math.pow(c - z.y, 2)), l.midAngle > Math.PI / 2 - u && l.midAngle < Math.PI / 2 + u ? (k = (a -
                    1 + q.length) % q.length, k = q[k], a = q[(a + 1 + q.length) % q.length], "left" === l.hemisphere && "right" === k.hemisphere && b > k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x - 15 : "right" === l.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : l.midAngle > 3 * Math.PI / 2 - u && l.midAngle < 3 * Math.PI / 2 + u && (k = (a - 1 + q.length) % q.length, k = q[k], a = q[(a + 1 + q.length) % q.length], "right" === l.hemisphere && "left" === k.hemisphere && b < k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x + 15 : "left" === l.hemisphere &&
                    ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), l.indexLabelTextBlock.y = c, l.indexLabelTextBlock.x = b, l.indexLabelAngle = Math.atan2(l.indexLabelTextBlock.y - z.y, l.indexLabelTextBlock.x - z.x))
            }
            return e
        }

        function k() {
            var a = l.plotArea.ctx;
            a.fillStyle = "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = a = 0, c = 0, k = !0, b = 0; 10 > b && (1 > b || 0 < c); b++) {
                if (m.radius || !m.radius && "undefined" !== typeof m.innerRadius && null !== m.innerRadius && C - c <= E) k = !1;
                k && (C -=
                    c);
                c = 0;
                if ("inside" !== m.indexLabelPlacement) {
                    s = C * w;
                    for (a = 0; a < p.length; a++) {
                        var h = q[a];
                        h.indexLabelTextBlock.x = z.x + s * Math.cos(h.midAngle);
                        h.indexLabelTextBlock.y = z.y + s * Math.sin(h.midAngle);
                        h.indexLabelAngle = h.midAngle;
                        h.radius = C;
                        h.percentInnerRadius = F
                    }
                    for (var u, t, a = 0; a < p.length; a++) {
                        var h = q[a],
                            x = f(a);
                        if (null !== x) {
                            u = q[a];
                            t = q[x];
                            var y = 0,
                                y = d(u, t) - r;
                            if (0 > y) {
                                for (var A = t = 0, B = 0; B < p.length; B++) B !== a && q[B].hemisphere === h.hemisphere && (q[B].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? t++ : A++);
                                t = y / (t + A || 1) * A;
                                var A = -1 * (y - t),
                                    D = B = 0;
                                "right" === h.hemisphere ? (B = g(a, t), A = -1 * (y - B), D = g(x, A), +D.toFixed(v) < +A.toFixed(v) && +B.toFixed(v) <= +t.toFixed(v) && g(a, -(A - D))) : (B = g(x, t), A = -1 * (y - B), D = g(a, A), +D.toFixed(v) < +A.toFixed(v) && +B.toFixed(v) <= +t.toFixed(v) && g(x, -(A - D)))
                            }
                        }
                    }
                } else
                    for (a = 0; a < p.length; a++) h = q[a], s = "pie" === m.type ? 0.7 * C : 0.8 * C, x = z.x + s * Math.cos(h.midAngle), t = z.y + s * Math.sin(h.midAngle), h.indexLabelTextBlock.x = x, h.indexLabelTextBlock.y = t;
                for (a = 0; a < p.length; a++)
                    if (h = q[a], x = h.indexLabelTextBlock.measureText(), 0 !== x.height &&
                        0 !== x.width) x = x = 0, "right" === h.hemisphere ? (x = e.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width + n), x *= -1) : x = e.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - n), 0 < x && (!k && h.indexLabelText && (t = "right" === h.hemisphere ? e.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - e.x1, 0.3 * h.indexLabelTextBlock.maxWidth > t ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * h.indexLabelTextBlock.maxWidth < t && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), Math.abs(h.indexLabelTextBlock.y -
                        h.indexLabelTextBlock.height / 2 - z.y) < C || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 - z.y) < C) && (x /= Math.abs(Math.cos(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > c && (c = x)), x = x = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (x = e.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = e.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 0 < x && (!k && h.indexLabelText && (t = 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, x * t) && g(a, 2 * t)), Math.abs(h.indexLabelTextBlock.x -
                        z.x) < C && (x /= Math.abs(Math.sin(h.indexLabelAngle)), 9 < x && (x *= 0.3), x > c && (c = x)));
                var G = function(a, b, c) {
                    for (var d = [], e = 0; d.push(q[b]), b !== c; b = (b + 1 + p.length) % p.length);
                    d.sort(function(a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                        else break
                };
                (function() {
                    for (var a = -1, b = -1, c = 0, e = !1, g = 0; g < p.length; g++)
                        if (e = !1, u = q[g], u.indexLabelText) {
                            var h = f(g);
                            if (null !== h) {
                                var k = q[h];
                                y = 0;
                                y = d(u, k);
                                var l;
                                if (l = 0 > y) {
                                    l = u.indexLabelTextBlock.x;
                                    var m = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2,
                                        r = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2,
                                        s = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2,
                                        w = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                        v = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                    l = u.indexLabelTextBlock.x + u.indexLabelTextBlock.width < k.indexLabelTextBlock.x - n || l > w + n || m > v + n || r < s - n ? !1 : !0
                                }
                                l ? (0 > a && (a = g), h !== a && (b = h, c += -y), 0 === g % Math.max(p.length /
                                    10, 3) && (e = !0)) : e = !0;
                                e && (0 < c && 0 <= a && 0 <= b) && (G(c, a, b), b = a = -1, c = 0)
                            }
                        }
                    0 < c && G(c, a, b)
                })()
            }
        }

        function h() {
            l.plotArea.layoutManager.reset();
            l.title && (l.title.dockInsidePlotArea || "center" === l.title.horizontalAlign && "center" === l.title.verticalAlign) && l.title.render();
            if (l.subtitles)
                for (var a = 0; a < l.subtitles.length; a++) {
                    var b = l.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                }
            l.legend && (l.legend.dockInsidePlotArea || "center" === l.legend.horizontalAlign && "center" ===
                l.legend.verticalAlign) && l.legend.render();
            A.fNg && A.fNg(l)
        }
        var l = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var m = this.data[a.dataSeriesIndexes[0]],
                p = m.dataPoints,
                n = 10,
                e = this.plotArea,
                q = [],
                r = 2,
                s, w = 1.3,
                u = 20 / 180 * Math.PI,
                v = 6,
                z = {
                    x: (e.x2 + e.x1) / 2,
                    y: (e.y2 + e.y1) / 2
                },
                t = 0;
            a = !1;
            for (var B = 0; B < p.length; B++) t += Math.abs(p[B].y), !a && ("undefined" !== typeof p[B].indexLabel && null !== p[B].indexLabel && 0 < p[B].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof p[B].label && null !== p[B].label && 0 < p[B].label.toString().length) &&
                (a = !0);
            if (0 !== t) {
                a = a || "undefined" !== typeof m.indexLabel && null !== m.indexLabel && 0 < m.indexLabel.toString().length;
                var C = "inside" !== m.indexLabelPlacement && a ? 0.75 * Math.min(e.width, e.height) / 2 : 0.92 * Math.min(e.width, e.height) / 2;
                m.radius && (C = Oa(m.radius, C));
                var E = "undefined" !== typeof m.innerRadius && null !== m.innerRadius ? Oa(m.innerRadius, C) : 0.7 * C;
                m.radius = C;
                "doughnut" === m.type && (m.innerRadius = E);
                var F = Math.min(E / C, (C - 1) / C);
                this.pieDoughnutClickHandler = function(a) {
                    l.isAnimating || !y(a.dataSeries.explodeOnClick) &&
                        !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && l._animator.animate(0, 500, function(a) {
                            b(a);
                            h()
                        }))
                };
                c();
                k();
                k();
                k();
                k();
                this.disableToolTip = !0;
                this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                    var b = l.plotArea.ctx;
                    b.clearRect(e.x1, e.y1, e.width, e.height);
                    b.fillStyle = l.backgroundColor;
                    b.fillRect(e.x1, e.y1, e.width, e.height);
                    a = q[0].startAngle + 2 * Math.PI * a;
                    for (b = 0; b < p.length; b++) {
                        var c = 0 === b ? q[b].startAngle : d,
                            d = c + (q[b].endAngle -
                                q[b].startAngle),
                            f = !1;
                        d > a && (d = a, f = !0);
                        var g = p[b].color ? p[b].color : m._colorSet[b % m._colorSet.length];
                        d > c && Ga(l.plotArea.ctx, q[b].center, q[b].radius, g, m.type, c, d, m.fillOpacity, q[b].percentInnerRadius);
                        if (f) break
                    }
                    h()
                }, function() {
                    l.disableToolTip = !1;
                    l._animator.animate(0, l.animatedRender ? 500 : 0, function(a) {
                        b(a);
                        h()
                    })
                })
            }
        }
    };
    B.prototype.animationRequestId = null;
    B.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
    }();
    B.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    B.prototype.set = function(a, c, b) {
        b = "undefined" === typeof b ? !0 : b;
        "options" === a ? (this.options = c, b && this.render()) : B.base.set.call(this, a, c, b)
    };
    B.prototype.exportChart =
        function(a) {
            a = "undefined" === typeof a ? {} : a;
            var c = a.format ? a.format : "png",
                b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + c);
            Ba(this.canvas, c, b)
        };
    B.prototype.print = function() {
        var a = this.exportChart({
                toDataURL: !0
            }),
            c = document.createElement("iframe");
        c.setAttribute("class", "canvasjs-chart-print-frame");
        c.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
        c.style.height = this.height + "px";
        this._canvasJSContainer.appendChild(c);
        var b = this,
            d = c.contentWindow || c.contentDocument.document || c.contentDocument;
        d.document.open();
        d.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
        d.document.close();
        setTimeout(function() {
            d.focus();
            d.print();
            setTimeout(function() {
                b._canvasJSContainer.removeChild(c)
            }, 1E3)
        }, 500)
    };
    ia.prototype.registerSpace = function(a, c) {
        "top" === a ? this._topOccupied += c.height : "bottom" === a ? this._bottomOccupied +=
            c.height : "left" === a ? this._leftOccupied += c.width : "right" === a && (this._rightOccupied += c.width)
    };
    ia.prototype.unRegisterSpace = function(a, c) {
        "top" === a ? this._topOccupied -= c.height : "bottom" === a ? this._bottomOccupied -= c.height : "left" === a ? this._leftOccupied -= c.width : "right" === a && (this._rightOccupied -= c.width)
    };
    ia.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied -
                this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    ia.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    S(U, L);
    U.prototype.render = function(a) {
        if (0 !== this.fontSize) {
            a && this.ctx.save();
            var c = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var b = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + b);
            "middle" === this.textBaseline && (b = -this._lineHeight / 2);
            this.ctx.font =
                this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var d = 0,
                f = this.padding,
                g = null;
            this.ctx.roundRect || Ia(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, b, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (b = 0; b < this._wrappedText.lines.length; b++) g = this._wrappedText.lines[b], "right" === this.horizontalAlign ? d = this.width - g.width - this.padding : "left" === this.horizontalAlign ?
                d = this.padding : "center" === this.horizontalAlign && (d = (this.width - 2 * this.padding) / 2 - g.width / 2 + this.padding), this.ctx.fillText(g.text, d, f), f += g.height;
            this.ctx.font = c;
            a && this.ctx.restore()
        }
    };
    U.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText = null
    };
    U.prototype.measureText = function() {
        this._lineHeight = Ka(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    U.prototype._getLineWithWidth = function(a, c, b) {
        a = String(a);
        if (!a) return {
            text: "",
            width: 0
        };
        var d = b = 0,
            f = a.length - 1,
            g = Infinity;
        for (this.ctx.font = this._getFontString(); d <= f;) {
            var g = Math.floor((d + f) / 2),
                k = a.substr(0, g + 1);
            b = this.ctx.measureText(k).width;
            if (b < c) d = g + 1;
            else if (b > c) f = g - 1;
            else break
        }
        b > c && 1 < k.length && (k = k.substr(0, k.length - 1), b = this.ctx.measureText(k).width);
        c = !0;
        if (k.length === a.length || " " === a[k.length]) c = !1;
        c && (a = k.split(" "), 1 < a.length && a.pop(), k = a.join(" "), b = this.ctx.measureText(k).width);
        return {
            text: k,
            width: b
        }
    };
    U.prototype._wrapText = function() {
        var a = new String(ka(String(this.text))),
            c = [],
            b = this.ctx.font,
            d = 0,
            f = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) f = d = 0;
        else
            for (; 0 < a.length;) {
                var g = this.maxHeight - 2 * this.padding,
                    k = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
                k.height = this._lineHeight;
                c.push(k);
                var h = f,
                    f = Math.max(f, k.width),
                    d = d + k.height,
                    a = ka(a.slice(k.text.length, a.length));
                g && d > g && (k = c.pop(), d -= k.height, f = h)
            }
        this._wrappedText = {
            lines: c,
            width: f,
            height: d
        };
        this.width = f + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = b
    };
    U.prototype._getFontString = function() {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var c = this.fontFamily ? this.fontFamily + "" : "";
        !t && c && (c = c.split(",")[0], "'" !== c[0] && '"' !== c[0] && (c = "'" + c + "'"));
        return a += c
    };
    S(ma, L);
    ma.prototype.render = function() {
        if (this.text) {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                c = a.layoutManager.getFreeSpace(),
                b = c.x1,
                d = c.y1,
                f = 0,
                g = 0,
                k = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                h, l;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = c.width - 4 - k * ("center" === this.horizontalAlign ? 2 : 1)), g = 0.5 * c.height - this.margin - 2, f = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = c.height - 4), g = 0.5 * c.width - this.margin - 2) : "center" === this.horizontalAlign && (null ===
                this.maxWidth && (this.maxWidth = c.width - 4), g = 0.5 * c.height - 4));
            this.wrap || (g = Math.min(g, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var g = new U(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: g,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                m = g.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (d = c.y1 + 2, l = "top") : "bottom" === this.verticalAlign && (d = c.y2 - 2 - m.height, l = "bottom"), "left" === this.horizontalAlign ? b = c.x1 + 2 : "center" === this.horizontalAlign ? b = c.x1 + c.width / 2 - m.width / 2 : "right" === this.horizontalAlign && (b = c.x2 - 2 - m.width - k), h = this.horizontalAlign, this.width = m.width, this.height = m.height) : "center" === this.verticalAlign &&
                ("left" === this.horizontalAlign ? (b = c.x1 + 2, d = c.y2 - 2 - (this.maxWidth / 2 - m.width / 2), f = -90, l = "left", this.width = m.height, this.height = m.width) : "right" === this.horizontalAlign ? (b = c.x2 - 2, d = c.y1 + 2 + (this.maxWidth / 2 - m.width / 2), f = 90, l = "right", this.width = m.height, this.height = m.width) : "center" === this.horizontalAlign && (d = a.y1 + (a.height / 2 - m.height / 2), b = a.x1 + (a.width / 2 - m.width / 2), l = "center", this.width = m.width, this.height = m.height), h = "center");
            g.x = b;
            g.y = d;
            g.angle = f;
            g.horizontalAlign = h;
            g.render(!0);
            a.layoutManager.registerSpace(l, {
                width: this.width + ("left" === l || "right" === l ? this.margin + 2 : 0),
                height: this.height + ("top" === l || "bottom" === l ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: b,
                y1: d,
                x2: b + this.width,
                y2: d + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    S(va, L);
    va.prototype.render = ma.prototype.render;
    S(wa, L);
    wa.prototype.render = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
            c = a.layoutManager.getFreeSpace(),
            b = null,
            d = 0,
            f = 0,
            g = 0,
            k = 0,
            h = this.markerMargin = this.chart.options.legend && !y(this.chart.options.legend.markerMargin) ?
            this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
        this.height = 0;
        var l = [],
            m = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : c.width, k = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * c.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * c.width, k = this.maxHeight = null !== this.maxHeight ?
            this.maxHeight : c.height);
        for (var p = 0; p < this.dataSeries.length; p++) {
            var n = this.dataSeries[p];
            if (n.dataPoints && n.dataPoints.length)
                if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type) {
                    var e = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? $.getDefaultLegendMarker(n.type) : n.markerType,
                        q = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart,
                            legend: this.options,
                            dataSeries: n,
                            dataPoint: null
                        }) : n.name,
                        r = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : n._colorSet[0],
                        s = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0,
                        w = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor,
                        u = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                        q = this.chart.replaceKeywordsWithValue(q, n.dataPoints[0], n, p),
                        e = {
                            markerType: e,
                            markerColor: r,
                            text: q,
                            textBlock: null,
                            chartType: n.type,
                            markerSize: s,
                            lineColor: n._colorSet[0],
                            dataSeriesIndex: n.index,
                            dataPointIndex: null,
                            markerBorderColor: w,
                            markerBorderThickness: u
                        };
                    l.push(e)
                } else
                    for (var v = 0; v < n.dataPoints.length; v++) {
                        var t = n.dataPoints[v],
                            e = t.legendMarkerType ? t.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : $.getDefaultLegendMarker(n.type),
                            q = t.legendText ? t.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: n,
                                dataPoint: t
                            }) : t.name ? t.name : "DataPoint: " + (v + 1),
                            r = t.legendMarkerColor ? t.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : t.color ? t.color : n.color ? n.color : n._colorSet[v % n._colorSet.length],
                            s = 0.75 * this.lineHeight,
                            w = t.legendMarkerBorderColor ? t.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : t.markerBorderColor ? t.markerBorderColor : n.markerBorderColor,
                            u = t.legendMarkerBorderThickness ? t.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness :
                            t.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                            q = this.chart.replaceKeywordsWithValue(q, t, n, v),
                            e = {
                                markerType: e,
                                markerColor: r,
                                text: q,
                                textBlock: null,
                                chartType: n.type,
                                markerSize: s,
                                dataSeriesIndex: p,
                                dataPointIndex: v,
                                markerBorderColor: w,
                                markerBorderThickness: u
                            };
                        (t.showInLegend || n.showInLegend && !1 !== t.showInLegend) && l.push(e)
                    }
        }!0 === this.reversed && l.reverse();
        if (0 < l.length) {
            n = null;
            r = v = q = t = 0;
            q = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth,
                g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
            s = 0 === s ? 0.75 * this.lineHeight : s;
            q -= s + h;
            for (p = 0; p < l.length; p++) {
                e = l[p];
                if ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType) q -= 2 * 0.1 * this.lineHeight;
                if (!(0 >= k || "undefined" === typeof k || 0 >= q || "undefined" === typeof q)) {
                    if ("horizontal" === this.orientation) {
                        e.textBlock = new U(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: q,
                            maxHeight: this.itemWrap ? k : this.lineHeight,
                            angle: 0,
                            text: e.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        });
                        e.textBlock.measureText();
                        null !== this.itemWidth && (e.textBlock.width = this.itemWidth - (s + h + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!n || n.width + Math.round(e.textBlock.width + s + h + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === e.chartType || "spline" === e.chartType || "stepLine" ===
                                e.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) n = {
                            items: [],
                            width: 0
                        }, m.push(n), this.height += v, v = 0;
                        v = Math.max(v, e.textBlock.height)
                    } else e.textBlock = new U(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: q,
                        maxHeight: !0 === this.itemWrap ? k : 1.5 * this.fontSize,
                        angle: 0,
                        text: e.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "middle"
                    }), e.textBlock.measureText(), null !== this.itemWidth && (e.textBlock.width = this.itemWidth -
                        (s + h + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < k - this.lineHeight ? (n = {
                        items: [],
                        width: 0
                    }, m.push(n)) : (n = m[t], t = (t + 1) % m.length), this.height += e.textBlock.height;
                    e.textBlock.x = n.width;
                    e.textBlock.y = 0;
                    n.width += Math.round(e.textBlock.width + s + h + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    n.items.push(e);
                    this.width = Math.max(n.width, this.width);
                    r = e.textBlock.width +
                        (s + h + ("line" === e.chartType || "spline" === e.chartType || "stepLine" === e.chartType ? 2 * 0.1 * this.lineHeight : 0))
                }
            }
            this.itemWidth = r;
            this.height = !1 === this.itemWrap ? m.length * this.lineHeight : this.height + v;
            this.height = Math.min(k, this.height);
            this.width = Math.min(g, this.width)
        }
        "top" === this.verticalAlign ? (f = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1) : "center" === this.verticalAlign ? (f = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ?
            c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y1 + c.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (f = "left" === this.horizontalAlign ? c.x1 : "right" === this.horizontalAlign ? c.x2 - this.width : c.x1 + c.width / 2 - this.width / 2, d = c.y2 - this.height);
        this.items = l;
        for (p = 0; p < this.items.length; p++) e = l[p], e.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[e.id] = {
            id: e.id,
            objectType: "legendItem",
            legendItemIndex: p,
            dataSeriesIndex: e.dataSeriesIndex,
            dataPointIndex: e.dataPointIndex
        };
        (0 < this.borderThickness &&
            this.borderColor || this.backgroundColor) && this.ctx.roundRect(f, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        for (p = c = 0; p < m.length; p++) {
            n = m[p];
            for (t = v = 0; t < n.items.length; t++) {
                e = n.items[t];
                r = e.textBlock.x + f + (0 === t ? 0.2 * s : this.horizontalSpacing);
                w = d + c;
                q = r;
                this.chart.data[e.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(f, d, g, Math.max(k - k % this.lineHeight, 0));
                this.ctx.clip();
                if ("line" === e.chartType ||
                    "stepLine" === e.chartType || "spline" === e.chartType) this.ctx.strokeStyle = e.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(r - 0.1 * this.lineHeight, w + this.lineHeight / 2), this.ctx.lineTo(r + 0.85 * this.lineHeight, w + this.lineHeight / 2), this.ctx.stroke(), q -= 0.1 * this.lineHeight;
                N.drawMarker(r + s / 2, w + this.lineHeight / 2, this.ctx, e.markerType, e.markerSize, e.markerColor, e.markerBorderColor, e.markerBorderThickness);
                e.textBlock.x = r + h + s;
                if ("line" === e.chartType || "stepLine" ===
                    e.chartType || "spline" === e.chartType) e.textBlock.x += 0.1 * this.lineHeight;
                e.textBlock.y = Math.round(w + this.lineHeight / 2);
                e.textBlock.render(!0);
                this.ctx.restore();
                v = 0 < t ? Math.max(v, e.textBlock.height) : e.textBlock.height;
                this.chart.data[e.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                r = F(e.id);
                this.ghostCtx.fillStyle = r;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(q, e.textBlock.y - this.lineHeight / 2, e.textBlock.x + e.textBlock.width - q, e.textBlock.height);
                e.x1 = this.chart._eventManager.objectMap[e.id].x1 =
                    q;
                e.y1 = this.chart._eventManager.objectMap[e.id].y1 = e.textBlock.y - this.lineHeight / 2;
                e.x2 = this.chart._eventManager.objectMap[e.id].x2 = e.textBlock.x + e.textBlock.width;
                e.y2 = this.chart._eventManager.objectMap[e.id].y2 = e.textBlock.y + e.textBlock.height - this.lineHeight / 2
            }
            c += v
        }
        0 < l.length && a.layoutManager.registerSpace(b, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: f,
            y1: d,
            x2: f + this.width,
            y2: d + this.height
        }
    };
    S(Ca, L);
    Ca.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    S($, L);
    $.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" ===
            a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    $.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" ===
            a || "rangeSplineArea" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    $.prototype.getDataPointAtX = function(a, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var b = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            },
            d = null,
            f = 0,
            g = 0,
            k = 1,
            h = Infinity,
            l = 0,
            m = 0,
            p = 0;
        "none" !== this.chart.plotInfo.axisPlacement &&
            (this.axisX.logarithmic ? (p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (;;) {
            g = 0 < k ? p + f : p - f;
            if (0 <= g && g < this.dataPoints.length) {
                var d = this.dataPoints[g],
                    n = this.axisX.logarithmic ?
                    d.x > a ? d.x / a : a / d.x : Math.abs(d.x - a);
                n < b.distance && (b.dataPoint = d, b.distance = n, b.index = g);
                d = n;
                d <= h ? h = d : 0 < k ? l++ : m++;
                if (1E3 < l && 1E3 < m) break
            } else if (0 > p - f && p + f >= this.dataPoints.length) break; - 1 === k ? (f++, k = 1) : k = -1
        }
        return c || b.dataPoint.x !== a ? c && null !== b.dataPoint ? b : null : b
    };
    $.prototype.getDataPointAtXY = function(a, c, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || c < this.chart.plotArea.y1 || c > this.chart.plotArea.y2) return null;
        b = b || !1;
        var d = [],
            f = 0,
            g = 0,
            k =
            1,
            h = !1,
            l = Infinity,
            m = 0,
            p = 0,
            n = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
            x: a,
            y: c
        }), this.axisX.logarithmic ? (g = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < g ? Math.min(Math.max((this.dataPoints.length - 1) / g * Math.log(n / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (g = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < g ? Math.min(Math.max((this.dataPoints.length - 1) /
            g * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (;;) {
            g = 0 < k ? n + f : n - f;
            if (0 <= g && g < this.dataPoints.length) {
                var e = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                    q = this.dataPoints[g],
                    r = null;
                if (e) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >= e.x1 && (a <= e.x2 && c >= e.y1 && c <= e.y2) && (d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: Math.min(Math.abs(e.x1 -
                                    a), Math.abs(e.x2 - a), Math.abs(e.y1 - c), Math.abs(e.y2 - c))
                            }), h = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = K("markerSize", q, this) || 4,
                                t = b ? 20 : s,
                                r = Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 - c, 2));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: r
                            });
                            g = Math.abs(e.x1 - a);
                            g <= l ? l = g : 0 < k ? m++ : p++;
                            r <= s / 2 && (h = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = K("markerSize", q, this) ||
                                4;
                            t = b ? 20 : s;
                            r = Math.min(Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 - c, 2)), Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y2 - c, 2)));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: r
                            });
                            g = Math.abs(e.x1 - a);
                            g <= l ? l = g : 0 < k ? m++ : p++;
                            r <= s / 2 && (h = !0);
                            break;
                        case "bubble":
                            s = e.size;
                            r = Math.sqrt(Math.pow(e.x1 - a, 2) + Math.pow(e.y1 - c, 2));
                            r <= s / 2 && (d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: r
                            }), h = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s = e.center;
                            t = "doughnut" === this.type ? e.percentInnerRadius * e.radius :
                                0;
                            r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - c, 2));
                            r < e.radius && r > t && (r = Math.atan2(c - s.y, a - s.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (e.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (e.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === t && 1 < e.endAngle && (t = 360), s >= t && 0 !== q.y && (t += 360, r < s && (r += 360)), r > s && r < t && (d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: 0
                            }), h = !0));
                            break;
                        case "candlestick":
                            if (a >= e.x1 - e.borderThickness /
                                2 && a <= e.x2 + e.borderThickness / 2 && c >= e.y2 - e.borderThickness / 2 && c <= e.y3 + e.borderThickness / 2 || Math.abs(e.x2 - a + e.x1 - a) < e.borderThickness && c >= e.y1 && c <= e.y4) d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: Math.min(Math.abs(e.x1 - a), Math.abs(e.x2 - a), Math.abs(e.y2 - c), Math.abs(e.y3 - c))
                            }), h = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(e.x2 - a + e.x1 - a) < e.borderThickness && c >= e.y2 && c <= e.y3 || a >= e.x1 && a <= (e.x2 + e.x1) / 2 && c >= e.y1 - e.borderThickness / 2 && c <= e.y1 + e.borderThickness / 2 || a >= (e.x1 + e.x2) / 2 && a <= e.x2 && c >= e.y4 - e.borderThickness /
                                2 && c <= e.y4 + e.borderThickness / 2) d.push({
                                dataPoint: q,
                                dataPointIndex: g,
                                dataSeries: this,
                                distance: Math.min(Math.abs(e.x1 - a), Math.abs(e.x2 - a), Math.abs(e.y2 - c), Math.abs(e.y3 - c))
                            }), h = !0
                    }
                    if (h || 1E3 < m && 1E3 < p) break
                }
            } else if (0 > n - f && n + f >= this.dataPoints.length) break; - 1 === k ? (f++, k = 1) : k = -1
        }
        a = null;
        for (c = 0; c < d.length; c++) a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c];
        return a
    };
    $.prototype.getMarkerProperties = function(a, c, b, d) {
        var f = this.dataPoints;
        return {
            x: c,
            y: b,
            ctx: d,
            type: f[a].markerType ? f[a].markerType : this.markerType,
            size: f[a].markerSize ? f[a].markerSize : this.markerSize,
            color: f[a].markerColor ? f[a].markerColor : this.markerColor ? this.markerColor : f[a].color ? f[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: f[a].markerBorderColor ? f[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: f[a].markerBorderThickness ? f[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
    };
    S(C, L);
    C.prototype.createExtraLabelsForLog = function(a) {
        a =
            (a || 0) + 1;
        if (!(5 < a)) {
            var c = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(c / this.viewportMinimum) < this.noTicks - 1) {
                for (var b = C.getNiceNumber((c - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), d = Math.ceil(this.viewportMinimum / b) * b; d < c; d += b) d < this.viewportMinimum || this.logLabelValues.push(d);
                this.logLabelValues.sort(ya);
                this.createExtraLabelsForLog(a)
            }
        }
    };
    C.prototype.createLabels = function() {
        var a, c, b = 0,
            d = 0,
            f, g = 0,
            k = 0,
            d = 0,
            h = this.interval,
            l = 0,
            m, p = 0.6 * this.chart.height,
            b = !1;
        if (this.dataSeries && 0 < this.dataSeries.length)
            for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (b = !0);
        if ("axisX" === this.type && b && !this.logarithmic)
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), f = Ha(new Date(this.viewportMaximum), this.interval, this.intervalType), b = this.intervalStartPosition; b < f; Ha(b, h, this.intervalType)) a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: b,
                label: this.labels[b] ? this.labels[b] : null
            }) : "axisX" === this.type && this.labels[a] ? this.labels[a] : Ea(b, this.valueFormatString, this.chart._cultureInfo), a = new U(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: g,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: k,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b.getTime(),
                textBlock: a,
                effectiveHeight: null
            });
        else {
            f = this.viewportMaximum;
            if (this.labels) {
                a = Math.ceil(h);
                for (var h = Math.ceil(this.intervalStartPosition), n = !1, b = h; b < this.viewportMaximum; b += a)
                    if (this.labels[b]) n = !0;
                    else {
                        n = !1;
                        break
                    }
                n && (this.interval = a, this.intervalStartPosition = h)
            }
            if (this.logarithmic && !this.equidistantInterval) {
                this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog());
                for (var e = 0; e < this.logLabelValues.length; e++) b = this.logLabelValues[e], b < this.viewportMinimum || (a = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.options,
                    value: b,
                    label: this.labels[b] ? this.labels[b] : null
                }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : ca(b, this.valueFormatString, this.chart._cultureInfo), a = new U(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: g,
                    maxHeight: k,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    borderThickness: this.labelBorderThickness,
                    cornerRadius: this.labelCornerRadius,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }), this._labels.push({
                    position: b,
                    textBlock: a,
                    effectiveHeight: null
                }))
            }
            for (b = this.intervalStartPosition; b <= f; b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase,
                    this.interval) : b + this.interval).toFixed(14))) a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: b,
                label: this.labels[b] ? this.labels[b] : null
            }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : ca(b, this.valueFormatString, this.chart._cultureInfo), a = new U(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: g,
                maxHeight: k,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b,
                textBlock: a,
                effectiveHeight: null
            })
        }
        if ("bottom" === this._position || "top" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length -
            2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * H[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (k = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
        else if ("left" === this._position || "right" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * H[this.intervalType +
            "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), k = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        for (d = 0; d < this._labels.length; d++) {
            a = this._labels[d].textBlock;
            a.maxWidth = g;
            a.maxHeight = k;
            var q = a.measureText();
            m = q.height
        }
        f = [];
        n = h = 0;
        if (this.labelAutoFit || this.options.labelAutoFit)
            if (y(this.labelAngle) || (this.labelAngle = (this.labelAngle %
                    360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                if (g = 0.9 * l >> 0, n = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = g;
                    this.sessionVariables.labelMaxHeight = k;
                    this.sessionVariables.labelAngle = this.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (b = 0; b < this._labels.length; b++) {
                        a =
                            this._labels[b].textBlock;
                        for (var r, s = a.text.split(" "), d = 0; d < s.length; d++) e = s[d], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, e = this.ctx.measureText(e), e.width > n && (r = b, n = e.width)
                    }
                    b = 0;
                    for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                        if (a = this._labels[b].textBlock, q = a.measureText(), b < this._labels.length - 1 && (e = b + 1, c = this._labels[e].textBlock, c = c.measureText()), f.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math,
                                f), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (k - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                            if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? k : Math.min((d - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d), s = (p - (m + a.fontSize / 2) *
                                    Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !y(this.options.labelWrap)) this.labelWrap ? y(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), s), this.sessionVariables.labelWrap = this.labelWrap, q.width + c.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ?
                                -25 : this.sessionVariables.labelAngle) : y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelMaxWidth = g, q.width + c.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight =
                                k, this.sessionVariables.labelWrap = this.labelWrap);
                            else {
                                if (y(this.options.labelWrap))
                                    if (!y(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = k);
                                    else if (!y(c))
                                    if (d = q.width + c.width >> 0, e = this.labelFontSize, n < g) d - 2 * g > h && (h = d - 2 * g, d >= 2 * g && d < 2.2 * g ? (this.sessionVariables.labelMaxWidth =
                                        g, y(this.options.labelFontSize) && 12 < e && (e = Math.floor(12 / 13 * e), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : d >= 2.2 * g && d < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = e) : d >= 2.8 * g && d < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, n), this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 < this.labelFontSize &&
                                        (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : d >= 3.2 * g && d < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelFontSize = this.labelFontSize) : d > 3.6 * g && d < 5 * g ? (y(this.options.labelFontSize) && 12 < e && (e = Math.floor(12 / 13 * e), a.measureText()), this.sessionVariables.labelFontSize =
                                        y(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = s) : d > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = e, this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelAngle = this.labelAngle));
                                    else if (r === b && (0 === r && n + this._labels[r + 1].textBlock.measureText().width - 2 * g > h || r === this._labels.length - 1 && n + this._labels[r -
                                        1].textBlock.measureText().width - 2 * g > h || 0 < r && r < this._labels.length - 1 && n + this._labels[r + 1].textBlock.measureText().width - 2 * g > h && n + this._labels[r - 1].textBlock.measureText().width - 2 * g > h)) h = 0 === r ? n + this._labels[r + 1].textBlock.measureText().width - 2 * g : n + this._labels[r - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth =
                                    s;
                                else if (0 === h)
                                    for (this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? e : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, d = 0; d < this._labels.length; d++) a = this._labels[d].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), s), q = a.measureText(), d < this._labels.length - 1 && (e = d + 1, c = this._labels[e].textBlock, c.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, n), s), c = c.measureText(), q.width + c.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                            }
                    else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? k : Math.min((d - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), d), s = 0 != this.labelAngle ? (p - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = k = this.labelWrap ? (p - s * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 *
                        Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, y(this.options.labelWrap)) ? y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s, this.sessionVariables.labelMaxHeight = k) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = s, this.sessionVariables.labelMaxHeight = d < 0.9 * l ? 0.9 * l : d, this.sessionVariables.labelWrap =
                        this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s) : (y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : s, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = k);
                    for (d = 0; d < this._labels.length; d++) a = this._labels[d].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth,
                        a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize :
                        this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        else if ("left" === this._position || "right" === this._position)
            if (g = y(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, k = "undefined" === typeof this.options.labelWrap || this.labelWrap ?
                0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = g;
                this.sessionVariables.labelMaxHeight = k;
                this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (b = 0; b < this._labels.length; b++)(a = this._labels[b].textBlock, q = a.measureText(), b < this._labels.length - 1 && (e = b + 1, c = this._labels[e].textBlock,
                    c = c.measureText()), f.push(a.height), this.sessionVariables.labelMaxHeight = Math.max.apply(Math, f), d = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (k - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) ? y(this.options.labelWrap) ? y(this.options.labelWrap) && (y(this.options.labelMaxWidth) ? y(c) || (l = q.height + c.height >>
                    0, l - 2 * k > n && (n = l - 2 * k, l >= 2 * k && l < 2.4 * k ? (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : l >= 2.4 * k && l < 2.8 * k ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : l >= 2.8 * k && l < 3.2 * k ? (this.sessionVariables.labelMaxHeight =
                        k, this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l >= 3.2 * k && l < 3.6 * k ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize =
                        this.labelFontSize) : l > 3.6 * k && l < 10 * k ? (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l > 10 * k && l < 50 * k && (y(this.options.labelFontSize) &&
                        12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = k, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                    this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = k) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((d - k * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) /
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), k), y(this.options.labelWrap)) ? y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth > this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight =
                    0 === this.labelAngle ? k : d, y(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? k : d, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = k, y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap =
                    this.labelWrap);
                for (d = 0; d < this._labels.length; d++) a = this._labels[d].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
            } else
                for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ?
                    this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        for (b = 0; b < this.stripLines.length; b++) {
            var g = this.stripLines[b],
                w;
            if ("outside" === g.labelPlacement) {
                k = this.sessionVariables.labelMaxWidth;
                if ("bottom" === this._position || "top" === this._position) w = "undefined" === typeof g.options.labelWrap ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                if ("left" === this._position || "right" === this._position) w = "undefined" === typeof g.options.labelWrap ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                c = y(g.options.labelBackgroundColor) ? "#EEEEEE" :
                    g.options.labelBackgroundColor
            } else k = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, w = "undefined" === typeof g.options.labelWrap || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, c = y(g.options.labelBackgroundColor) ? y(g.startValue) && 0 !== g.startValue ? t ? "transparent" : null : "#EEEEEE" : g.options.labelBackgroundColor;
            a = new U(this.ctx, {
                x: 0,
                y: 0,
                backgroundColor: c,
                borderColor: g.labelBorderColor,
                borderThickness: g.labelBorderThickness,
                cornerRadius: g.labelCornerRadius,
                maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : k,
                maxHeight: w,
                angle: this.labelAngle,
                text: g.labelFormatter ? g.labelFormatter({
                    chart: this.chart,
                    axis: this,
                    stripLine: g
                }) : g.label,
                horizontalAlign: "left",
                fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.options.labelFontSize : this.labelFontSize : g.labelFontSize,
                fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.options.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                fontWeight: "outside" === g.labelPlacement ? g.options.fontWeight ? g.options.fontWeight : this.fontWeight : g.fontWeight,
                fontColor: g.options.labelFontColor || g.color,
                fontStyle: "outside" === g.labelPlacement ? g.options.fontStyle ? g.options.fontStyle : this.fontWeight : g.fontStyle,
                textBaseline: "middle"
            });
            this._stripLineLabels.push({
                position: g.value,
                textBlock: a,
                effectiveHeight: null,
                stripLine: g
            })
        }
    };
    C.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0,
            c = 0;
        this._labels = [];
        this._stripLineLabels = [];
        if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            for (c = 0; c < this._labels.length; c++) {
                var b = this._labels[c].textBlock,
                    d = b.measureText(),
                    f = 0,
                    f = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < f && (a = f);
                this._labels[c].effectiveWidth = f
            }
            for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >
                this.viewportMinimum && this._stripLineLabels[c].stripLine.value < this.viewportMaximum) && (b = this._stripLineLabels[c].textBlock, d = b.measureText(), f = 0 === this.labelAngle ? d.width : d.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[c].effectiveWidth = f)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    C.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var c, b = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position) {
            for (b = 0; b < this._labels.length; b++) {
                c = this._labels[b].textBlock;
                var d = c.measureText(),
                    f = 0,
                    f = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < f && (a = f);
                this._labels[b].effectiveHeight = f
            }
            for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement &&
                (c = this._stripLineLabels[b].textBlock, d = c.measureText(), f = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d.height - c.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[b].effectiveHeight = f)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + this.tickLength + 5
    };
    C.setLayoutAndRender = function(a, c, b, d, f, g) {
        var k, h, l, m, p = a[0] ? a[0].chart : c[0].chart,
            n = p.ctx;
        if (a && 0 < a.length)
            for (var e = 0; e < a.length; e++) a[e] && a[e].calculateAxisParameters();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].calculateAxisParameters();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].calculateAxisParameters();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].calculateAxisParameters();
        var q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            z = 0,
            x, A, B = h = 0,
            C, E, F, G;
        C = E = F = G = !1;
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock = new U(a[e].ctx, {
                text: a[e].title,
                horizontalAlign: "center",
                fontSize: a[e].titleFontSize,
                fontFamily: a[e].titleFontFamily,
                fontWeight: a[e].titleFontWeight,
                fontColor: a[e].titleFontColor,
                fontStyle: a[e].titleFontStyle,
                borderColor: a[e].titleBorderColor,
                borderThickness: a[e].titleBorderThickness,
                backgroundColor: a[e].titleBackgroundColor,
                cornerRadius: a[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e] && c[e].title && (c[e]._titleTextBlock = new U(c[e].ctx, {
                text: c[e].title,
                horizontalAlign: "center",
                fontSize: c[e].titleFontSize,
                fontFamily: c[e].titleFontFamily,
                fontWeight: c[e].titleFontWeight,
                fontColor: c[e].titleFontColor,
                fontStyle: c[e].titleFontStyle,
                borderColor: c[e].titleBorderColor,
                borderThickness: c[e].titleBorderThickness,
                backgroundColor: c[e].titleBackgroundColor,
                cornerRadius: c[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock = new U(b[e].ctx, {
                text: b[e].title,
                horizontalAlign: "center",
                fontSize: b[e].titleFontSize,
                fontFamily: b[e].titleFontFamily,
                fontWeight: b[e].titleFontWeight,
                fontColor: b[e].titleFontColor,
                fontStyle: b[e].titleFontStyle,
                borderColor: b[e].titleBorderColor,
                borderThickness: b[e].titleBorderThickness,
                backgroundColor: b[e].titleBackgroundColor,
                cornerRadius: b[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e] && d[e].title && (d[e]._titleTextBlock = new U(d[e].ctx, {
                text: d[e].title,
                horizontalAlign: "center",
                fontSize: d[e].titleFontSize,
                fontFamily: d[e].titleFontFamily,
                fontWeight: d[e].titleFontWeight,
                fontColor: d[e].titleFontColor,
                fontStyle: d[e].titleFontStyle,
                borderColor: d[e].titleBorderColor,
                borderThickness: d[e].titleBorderThickness,
                backgroundColor: d[e].titleBackgroundColor,
                cornerRadius: d[e].titleCornerRadius,
                textBaseline: "top"
            }));
        if ("normal" === f) {
            var t = [],
                u = [],
                v = [],
                z = [],
                I = [],
                H = [],
                L = [],
                J = [];
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock.maxWidth = a[e].titleMaxWidth || g.width, a[e]._titleTextBlock.maxHeight = a[e].titleWrap ? 0.8 * g.height : 1.5 * a[e].titleFontSize, a[e]._titleTextBlock.angle = 0);
            if (c && 0 < c.length)
                for (e = 0; e < c[e].length; e++) c[e] && c[e].title && (c[e]._titleTextBlock.maxWidth = c[e].titleMaxWidth || g.width, c[e]._titleTextBlock.maxHeight = c[e].titleWrap ?
                    0.8 * g.height : 1.5 * c[e].titleFontSize, c[e]._titleTextBlock.angle = 0);
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock.maxWidth = b[e].titleMaxWidth || g.height, b[e]._titleTextBlock.maxHeight = b[e].titleWrap ? 0.8 * g.width : 1.5 * b[e].titleFontSize, b[e]._titleTextBlock.angle = -90);
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e] && d[e].title && (d[e]._titleTextBlock.maxWidth = d[e].titleMaxWidth || g.height, d[e]._titleTextBlock.maxHeight = d[e].titleWrap ? 0.8 * g.width : 1.5 * d[e].titleFontSize, d[e]._titleTextBlock.angle =
                    90);
            for (; 4 > q;) {
                var M = 0,
                    P = 0,
                    N = 0,
                    O = 0,
                    K = f = 0,
                    D = 0,
                    Q = 0,
                    X = 0,
                    T = 0,
                    S = 0,
                    R = 0;
                if (b && 0 < b.length)
                    for (v = [], e = S = 0; e < b.length; e++) v.push(Math.ceil(b[e] ? b[e].createLabelsAndCalculateWidth() : 0)), S += v[e], D += b[e] ? b[e].margin : 0;
                else v.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                L.push(v);
                if (d && 0 < d.length)
                    for (z = [], e = R = 0; e < d.length; e++) z.push(Math.ceil(d[e] ? d[e].createLabelsAndCalculateWidth() : 0)), R += z[e], Q += d[e] ? d[e].margin : 0;
                else z.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                J.push(z);
                k = Math.round(g.x1 + S + D);
                l = Math.round(g.x2 - R - Q > p.width - 10 ? p.width - 10 : g.x2 - R - Q);
                if (a && 0 < a.length)
                    for (t = [], e = X = 0; e < a.length; e++) a[e] && (a[e].lineCoordinates = {}), a[e].lineCoordinates.width = Math.abs(l - k), a[e].title && (a[e]._titleTextBlock.maxWidth = 0 < a[e].titleMaxWidth && a[e].titleMaxWidth < a[e].lineCoordinates.width ? a[e].titleMaxWidth : a[e].lineCoordinates.width), t.push(Math.ceil(a[e] ? a[e].createLabelsAndCalculateHeight() : 0)), X += t[e], f += a[e] ? a[e].margin : 0;
                else t.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() :
                    0));
                I.push(t);
                if (c && 0 < c.length)
                    for (u = [], e = T = 0; e < c.length; e++) c[e] && (c[e].lineCoordinates = {}), c[e].lineCoordinates.width = Math.abs(l - k), c[e].title && (c[e]._titleTextBlock.maxWidth = 0 < c[e].titleMaxWidth && c[e].titleMaxWidth < c[e].lineCoordinates.width ? c[e].titleMaxWidth : c[e].lineCoordinates.width), u.push(Math.ceil(c[e] ? c[e].createLabelsAndCalculateHeight() : 0)), T += u[e], K += c[e] ? c[e].margin : 0;
                else u.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                H.push(u);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) a[e] &&
                        (a[e].lineCoordinates.x1 = k, l = Math.round(g.x2 - R - Q > p.width - 10 ? p.width - 10 : g.x2 - R - Q), a[e]._labels && 1 < a[e]._labels.length && (h = m = 0, m = a[e]._labels[1], h = "dateTime" === a[e].chart.plotInfo.axisXValueType ? a[e]._labels[a[e]._labels.length - 2] : a[e]._labels[a[e]._labels.length - 1], r = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), s = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height -
                            h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), a[e] && (a[e].labelAutoFit && !y(x) && !y(A)) && (h = 0, 0 < a[e].labelAngle ? A + s > l && (h += 0 < a[e].labelAngle ? A + s - l - R : 0) : 0 > a[e].labelAngle ? x - r < k && x - r < a[e].viewportMinimum && (B = k - (D + a[e].tickLength + v + x - r + a[e].labelFontSize / 2)) : 0 === a[e].labelAngle && (A + s > l && (h = A + s / 2 - l - R), x - r < k && x - r < a[e].viewportMinimum && (B = k - D - a[e].tickLength - v - x + r / 2)), a[e].viewportMaximum === a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 < a[e].labelAngle && 0 < h ? l -= h : a[e].viewportMaximum ===
                            a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 > a[e].labelAngle && 0 < B ? k += B : a[e].viewportMaximum === a[e].maximum && a[e].viewportMinimum === a[e].minimum && 0 === a[e].labelAngle && (0 < B && (k += B), 0 < h && (l -= h))), p.panEnabled ? X = p.sessionVariables.axisX.height : p.sessionVariables.axisX.height = X, h = Math.round(g.y2 - X - f + M), m = Math.round(g.y2), a[e].lineCoordinates.x2 = l, a[e].lineCoordinates.width = l - k, a[e].lineCoordinates.y1 = h, a[e].lineCoordinates.y2 = h, a[e].bounds = {
                            x1: k,
                            y1: h,
                            x2: l,
                            y2: m - (X + f - t[e] - M),
                            width: l - k,
                            height: m - h
                        }),
                        M += t[e] + a[e].margin;
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e].lineCoordinates.x1 = Math.round(g.x1 + S + D), c[e].lineCoordinates.x2 = Math.round(g.x2 - R - Q > p.width - 10 ? p.width - 10 : g.x2 - R - Q), c[e].lineCoordinates.width = Math.abs(l - k), c[e]._labels && 1 < c[e]._labels.length && (m = c[e]._labels[1], h = "dateTime" === c[e].chart.plotInfo.axisXValueType ? c[e]._labels[c[e]._labels.length - 2] : c[e]._labels[c[e]._labels.length - 1], r = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - h.textBlock.fontSize /
                        2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), s = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), p.panEnabled ? T = p.sessionVariables.axisX2.height : p.sessionVariables.axisX2.height = T, h = Math.round(g.y1), m = Math.round(g.y2 + c[e].margin), c[e].lineCoordinates.y1 = h + T + K - P, c[e].lineCoordinates.y2 = h, c[e].bounds = {
                        x1: k,
                        y1: h + (T + K - u[e] - P),
                        x2: l,
                        y2: m,
                        width: l - k,
                        height: m - h
                    }, P += u[e] + c[e].margin;
                if (b &&
                    0 < b.length)
                    for (e = 0; e < b.length; e++) D = 10, b[e] && (k = Math.round(a[0] ? a[0].lineCoordinates.x1 : c[0].lineCoordinates.x1), D = b[e]._labels && 0 < b[e]._labels.length ? b[e]._labels[b[e]._labels.length - 1].textBlock.height / 2 : 10, h = Math.round(g.y1 + T + K < Math.max(D, 10) ? Math.max(D, 10) : g.y1 + T + K), l = Math.round(a[0] ? a[0].lineCoordinates.x1 : c[0].lineCoordinates.x1), D = 0 < a.length ? 0 : b[e]._labels && 0 < b[e]._labels.length ? b[e]._labels[0].textBlock.height / 2 : 10, m = Math.round(g.y2 - X - f - D), b[e].lineCoordinates = {
                        x1: l - N,
                        y1: h,
                        x2: l - N,
                        y2: m,
                        height: Math.abs(m -
                            h)
                    }, b[e].bounds = {
                        x1: k - (v[e] + N),
                        y1: h,
                        x2: l,
                        y2: m,
                        width: l - k,
                        height: m - h
                    }, b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.height ? b[e].titleMaxWidth : b[e].lineCoordinates.height), N += v[e] + b[e].margin);
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e] && (k = Math.round(a[0] ? a[0].lineCoordinates.x2 : c[0].lineCoordinates.x2), l = Math.round(k), D = d[e]._labels && 0 < d[e]._labels.length ? d[e]._labels[d[e]._labels.length - 1].textBlock.height / 2 : 0, h = Math.round(g.y1 + T + K < Math.max(D,
                        10) ? Math.max(D, 10) : g.y1 + T + K), D = 0 < a.length ? 0 : d[e]._labels && 0 < d[e]._labels.length ? d[e]._labels[0].textBlock.height / 2 : 0, m = Math.round(g.y2 - (X + f + D)), d[e].lineCoordinates = {
                        x1: k + O,
                        y1: h,
                        x2: k + O,
                        y2: m,
                        height: Math.abs(m - h)
                    }, d[e].bounds = {
                        x1: k,
                        y1: h,
                        x2: l + (z[e] + O),
                        y2: m,
                        width: l - k,
                        height: m - h
                    }, d[e].title && (d[e]._titleTextBlock.maxWidth = 0 < d[e].titleMaxWidth && d[e].titleMaxWidth < d[e].lineCoordinates.height ? d[e].titleMaxWidth : d[e].lineCoordinates.height), O += z[e] + d[e].margin);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) a[e] &&
                        (a[e].calculateValueToPixelConversionParameters(), a[e]._labels && 1 < a[e]._labels.length && (x = (a[e].logarithmic ? Math.log(a[e]._labels[1].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase : a[e]._labels[1].position - a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1, A = "dateTime" === a[e].chart.plotInfo.axisXValueType ? (a[e].logarithmic ? Math.log(a[e]._labels[a[e]._labels.length - 2].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase :
                            a[e]._labels[a[e]._labels.length - 2].position - a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1 : (a[e].logarithmic ? Math.log(a[e]._labels[a[e]._labels.length - 1].position / a[e].viewportMinimum) / a[e].conversionParameters.lnLogarithmBase : a[e]._labels[a[e]._labels.length - 1].position - a[e].viewportMinimum) * Math.abs(a[e].conversionParameters.pixelPerUnit) + a[e].lineCoordinates.x1));
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) c[e].calculateValueToPixelConversionParameters(),
                        c[e]._labels && 1 < c[e]._labels.length && (x = (c[e].logarithmic ? Math.log(c[e]._labels[1].position / c[e].viewportMinimum) / c[e].conversionParameters.lnLogarithmBase : c[e]._labels[1].position - c[e].viewportMinimum) * Math.abs(c[e].conversionParameters.pixelPerUnit) + c[e].lineCoordinates.x1, A = "dateTime" === c[e].chart.plotInfo.axisXValueType ? (c[e].logarithmic ? Math.log(c[e]._labels[c[e]._labels.length - 2].position / c[e].viewportMinimum) / c[e].conversionParameters.lnLogarithmBase : c[e]._labels[c[e]._labels.length - 2].position -
                            c[e].viewportMinimum) * Math.abs(c[e].conversionParameters.pixelPerUnit) + c[e].lineCoordinates.x1 : (c[e].logarithmic ? Math.log(c[e]._labels[c[e]._labels.length - 1].position / c[e].viewportMinimum) / c[e].conversionParameters.lnLogarithmBase : c[e]._labels[c[e]._labels.length - 1].position - c[e].viewportMinimum) * Math.abs(c[e].conversionParameters.pixelPerUnit) + c[e].lineCoordinates.x1);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].calculateValueToPixelConversionParameters();
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e].calculateValueToPixelConversionParameters();
                if (0 < q) {
                    if (a && 0 < a.length)
                        for (e = 0; e < a.length; e++) C = I[q - 1][e] === I[q][e] ? !0 : !1;
                    else C = !0;
                    if (c && 0 < c.length)
                        for (e = 0; e < c.length; e++) E = H[q - 1][e] === H[q][e] ? !0 : !1;
                    else E = !0;
                    if (b && 0 < b.length)
                        for (e = 0; e < b.length; e++) F = L[q - 1][e] === L[q][e] ? !0 : !1;
                    else F = !0;
                    if (d && 0 < d.length)
                        for (e = 0; e < d.length; e++) G = J[q - 1][e] === J[q][e] ? !0 : !1;
                    else G = !0
                }
                if (C && E && F && G) break;
                q++
            }
            n.save();
            n.beginPath();
            a[0] && n.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            c[0] && n.rect(5, c[c.length - 1].bounds.y1, c[0].chart.width - 10, c[0].bounds.height);
            n.clip();
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e].renderLabelsTicksAndTitle();
            n.restore();
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e].renderLabelsTicksAndTitle()
        } else {
            x = [];
            A = [];
            B = [];
            r = [];
            s = [];
            I = [];
            H = [];
            L = [];
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e] && a[e].title && (a[e]._titleTextBlock.maxWidth = a[e].titleMaxWidth || g.width, a[e]._titleTextBlock.maxHeight =
                    a[e].titleWrap ? 0.8 * g.height : 1.5 * a[e].titleFontSize, a[e]._titleTextBlock.angle = -90);
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e] && c[e].title && (c[e]._titleTextBlock.maxWidth = c[e].titleMaxWidth || g.width, c[e]._titleTextBlock.maxHeight = c[e].titleWrap ? 0.8 * g.height : 1.5 * c[e].titleFontSize, c[e]._titleTextBlock.angle = 90);
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e] && b[e].title && (b[e]._titleTextBlock.maxWidth = b[e].titleMaxWidth || g.width, b[e]._titleTextBlock.maxHeight = b[e].titleWrap ? 0.8 * g.height : 1.5 * b[e].titleFontSize,
                    b[e]._titleTextBlock.angle = 0);
            if (d && 0 < d.length)
                for (e = 0; e < d.length; e++) d[e] && d[e].title && (d[e]._titleTextBlock.maxWidth = d[e].titleMaxWidth || g.width, d[e]._titleTextBlock.maxHeight = d[e].titleWrap ? 0.8 * g.height : 1.5 * d[e].titleFontSize, d[e]._titleTextBlock.angle = 0);
            for (; 4 > q;) {
                T = X = S = O = Q = D = K = f = N = J = P = M = 0;
                if (a && 0 < a.length)
                    for (B = [], e = X = 0; e < a.length; e++) B.push(Math.ceil(a[e] ? a[e].createLabelsAndCalculateWidth() : 0)), X += B[e], f += a[e] ? a[e].margin : 0;
                else B.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                H.push(B);
                if (c && 0 < c.length)
                    for (r = [], e = T = 0; e < c.length; e++) r.push(Math.ceil(c[e] ? c[e].createLabelsAndCalculateWidth() : 0)), T += r[e], K += c[e] ? c[e].margin : 0;
                else r.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                L.push(r);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].lineCoordinates = {}, k = Math.round(g.x1 + X + f), l = Math.round(g.x2 - T - K > p.width - 10 ? p.width - 10 : g.x2 - T - K), b[e].labelAutoFit && !y(t) && (0 < !a.length && (k = 0 > b[e].labelAngle ? Math.max(k, t) : 0 === b[e].labelAngle ? Math.max(k, t / 2) : k), 0 < !c.length && (l = 0 <
                        b[e].labelAngle ? l - u / 2 : 0 === b[e].labelAngle ? l - u / 2 : l)), b[e].lineCoordinates.x1 = k, b[e].lineCoordinates.x2 = l, b[e].lineCoordinates.width = Math.abs(l - k), b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.width ? b[e].titleMaxWidth : b[e].lineCoordinates.width);
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e].lineCoordinates = {}, k = Math.round(g.x1 + X + f), l = Math.round(g.x2 - T - K > d[e].chart.width - 10 ? d[e].chart.width - 10 : g.x2 - T - K), d[e] && d[e].labelAutoFit && !y(v) && (0 < !a.length &&
                        (k = 0 < d[e].labelAngle ? Math.max(k, v) : 0 === d[e].labelAngle ? Math.max(k, v / 2) : k), 0 < !c.length && (l -= z / 2)), d[e].lineCoordinates.x1 = k, d[e].lineCoordinates.x2 = l, d[e].lineCoordinates.width = Math.abs(l - k), d[e].title && (d[e]._titleTextBlock.maxWidth = 0 < d[e].titleMaxWidth && d[e].titleMaxWidth < d[e].lineCoordinates.width ? d[e].titleMaxWidth : d[e].lineCoordinates.width);
                if (b && 0 < b.length)
                    for (x = [], e = O = 0; e < b.length; e++) x.push(Math.ceil(b[e] ? b[e].createLabelsAndCalculateHeight() : 0)), O += x[e] + b[e].margin, D += b[e].margin;
                else x.push(Math.ceil(b[0] ?
                    b[0].createLabelsAndCalculateHeight() : 0));
                s.push(x);
                if (d && 0 < d.length)
                    for (A = [], e = S = 0; e < d.length; e++) A.push(Math.ceil(d[e] ? d[e].createLabelsAndCalculateHeight() : 0)), S += A[e], Q += d[e].margin;
                else A.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                I.push(A);
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) 0 < b[e]._labels.length && (m = b[e]._labels[0], h = b[e]._labels[b[e]._labels.length - 1], t = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI /
                        180 * Math.abs(m.textBlock.angle)), u = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                if (d && 0 < d.length)
                    for (e = 0; e < d.length; e++) d[e] && 0 < d[e]._labels.length && (m = d[e]._labels[0], h = d[e]._labels[d[e]._labels.length - 1], v = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), z = h.textBlock.width *
                        Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                if (p.panEnabled)
                    for (e = 0; e < b.length; e++) x[e] = p.sessionVariables.axisY.height;
                else
                    for (e = 0; e < b.length; e++) p.sessionVariables.axisY.height = x[e];
                if (b && 0 < b.length)
                    for (e = b.length - 1; 0 <= e; e--) h = Math.round(g.y2), m = Math.round(g.y2 > b[e].chart.height - 10 ? b[e].chart.height - 10 : g.y2), b[e].lineCoordinates.y1 = h - (x[e] + b[e].margin + M), b[e].lineCoordinates.y2 = h - (x[e] + b[e].margin +
                        M), b[e].bounds = {
                        x1: k,
                        y1: h - (x[e] + M + b[e].margin),
                        x2: l,
                        y2: m - (M + b[e].margin),
                        width: l - k,
                        height: x[e]
                    }, b[e].title && (b[e]._titleTextBlock.maxWidth = 0 < b[e].titleMaxWidth && b[e].titleMaxWidth < b[e].lineCoordinates.width ? b[e].titleMaxWidth : b[e].lineCoordinates.width), M += x[e] + b[e].margin;
                if (d && 0 < d.length)
                    for (e = d.length - 1; 0 <= e; e--) d[e] && (h = Math.round(g.y1), m = Math.round(g.y1 + (A[e] + d[e].margin + P)), d[e].lineCoordinates.y1 = m, d[e].lineCoordinates.y2 = m, d[e].bounds = {
                            x1: k,
                            y1: h + (d[e].margin + P),
                            x2: l,
                            y2: m,
                            width: l - k,
                            height: S
                        },
                        d[e].title && (d[e]._titleTextBlock.maxWidth = 0 < d[e].titleMaxWidth && d[e].titleMaxWidth < d[e].lineCoordinates.width ? d[e].titleMaxWidth : d[e].lineCoordinates.width), P += A[e] + d[e].margin);
                if (a && 0 < a.length)
                    for (e = 0; e < a.length; e++) {
                        D = a[e]._labels && 0 < a[e]._labels.length ? a[e]._labels[0].textBlock.fontSize / 2 : 0;
                        k = Math.round(g.x1 + f);
                        h = d && 0 < d.length ? Math.round(d[0] ? d[0].lineCoordinates.y2 : g.y1 < Math.max(D, 10) ? Math.max(D, 10) : g.y1) : g.y1 < Math.max(D, 10) ? Math.max(D, 10) : g.y1;
                        l = Math.round(g.x1 + X + f);
                        m = b && 0 < b.length ? Math.round(b[0] ?
                            b[0].lineCoordinates.y1 : g.y2 - O > p.height - Math.max(D, 10) ? p.height - Math.max(D, 10) : g.y2 - O) : g.y2 > p.height - Math.max(D, 10) ? p.height - Math.max(D, 10) : g.y2;
                        if (b && 0 < b.length)
                            for (D = 0; D < b.length; D++) b[D] && b[D].labelAutoFit && (l = 0 > b[D].labelAngle ? Math.max(l, t) : 0 === b[D].labelAngle ? Math.max(l, t / 2) : l, k = 0 > b[D].labelAngle || 0 === b[D].labelAngle ? l - X : k);
                        if (d && 0 < d.length)
                            for (D = 0; D < d.length; D++) d[D] && d[D].labelAutoFit && (l = d[D].lineCoordinates.x1, k = l - X);
                        a[e].lineCoordinates = {
                            x1: l - J,
                            y1: h,
                            x2: l - J,
                            y2: m,
                            height: Math.abs(m - h)
                        };
                        a[e].bounds = {
                            x1: l - (B[e] + J),
                            y1: h,
                            x2: l,
                            y2: m,
                            width: l - k,
                            height: m - h
                        };
                        a[e].title && (a[e]._titleTextBlock.maxWidth = 0 < a[e].titleMaxWidth && a[e].titleMaxWidth < a[e].lineCoordinates.height ? a[e].titleMaxWidth : a[e].lineCoordinates.height);
                        a[e].calculateValueToPixelConversionParameters();
                        J += B[e] + a[e].margin
                    }
                if (c && 0 < c.length)
                    for (e = 0; e < c.length; e++) {
                        D = c[e]._labels && 0 < c[e]._labels.length ? c[e]._labels[0].textBlock.fontSize / 2 : 0;
                        k = Math.round(g.x1 - f);
                        h = d && 0 < d.length ? Math.round(d[0] ? d[0].lineCoordinates.y2 : g.y1 < Math.max(D, 10) ? Math.max(D,
                            10) : g.y1) : g.y1 < Math.max(D, 10) ? Math.max(D, 10) : g.y1;
                        l = Math.round(g.x2 - T - K);
                        m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - O > p.height - Math.max(D, 10) ? p.height - Math.max(D, 10) : g.y2 - O) : g.y2 > p.height - Math.max(D, 10) ? p.height - Math.max(D, 10) : g.y2;
                        if (b && 0 < b.length)
                            for (D = 0; D < b.length; D++) b[D] && b[D].labelAutoFit && (l = 0 > b[D].labelAngle ? Math.max(l, t) : 0 === b[D].labelAngle ? Math.max(l, t / 2) : l, k = 0 > b[D].labelAngle || 0 === b[D].labelAngle ? l - T : k);
                        if (d && 0 < d.length)
                            for (D = 0; D < d.length; D++) d[D] && d[D].labelAutoFit &&
                                (l = d[D].lineCoordinates.x2, k = l - T);
                        c[e].lineCoordinates = {
                            x1: l + N,
                            y1: h,
                            x2: l + N,
                            y2: m,
                            height: Math.abs(m - h)
                        };
                        c[e].bounds = {
                            x1: k,
                            y1: h,
                            x2: l + r[e] + N,
                            y2: m,
                            width: l - k,
                            height: m - h
                        };
                        c[e].title && (c[e]._titleTextBlock.maxWidth = 0 < c[e].titleMaxWidth && c[e].titleMaxWidth < c[e].lineCoordinates.height ? c[e].titleMaxWidth : c[e].lineCoordinates.height);
                        c[e].calculateValueToPixelConversionParameters();
                        N += r[e] + c[e].margin
                    }
                if (b && 0 < b.length)
                    for (e = 0; e < b.length; e++) b[e].calculateValueToPixelConversionParameters();
                if (d && 0 < d.length)
                    for (e =
                        0; e < d.length; e++) d[e].calculateValueToPixelConversionParameters();
                if (0 < q) {
                    if (a && 0 < a.length)
                        for (e = 0; e < a.length; e++) C = H[q - 1][e] === H[q][e] ? !0 : !1;
                    else C = !0;
                    if (c && 0 < c.length)
                        for (e = 0; e < c.length; e++) E = L[q - 1][e] === L[q][e] ? !0 : !1;
                    else E = !0;
                    if (b && 0 < b.length)
                        for (e = 0; e < b.length; e++) F = s[q - 1][e] === s[q][e] ? !0 : !1;
                    else F = !0;
                    if (d && 0 < d.length)
                        for (e = 0; e < d.length; e++) G = I[q - 1][e] === I[q][e] ? !0 : !1;
                    else G = !0
                }
                if (C && E && F && G) break;
                q++
            }
            if (b && 0 < b.length)
                for (e = 0; e < b.length; e++) b[e].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (e =
                    0; e < d.length; e++) d[e].renderLabelsTicksAndTitle();
            if (a && 0 < a.length)
                for (e = 0; e < a.length; e++) a[e].renderLabelsTicksAndTitle();
            if (c && 0 < c.length)
                for (e = 0; e < c.length; e++) c[e].renderLabelsTicksAndTitle()
        }
        p.preparePlotArea();
        g = p.plotArea;
        n.save();
        n.beginPath();
        n.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
        n.clip();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderStripLinesOfThicknessType("value");
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderStripLinesOfThicknessType("value");
        if (b && 0 < b.length)
            for (e =
                0; e < b.length; e++) b[e].renderStripLinesOfThicknessType("value");
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderStripLinesOfThicknessType("value");
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderInterlacedColors();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderInterlacedColors();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderInterlacedColors();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderInterlacedColors();
        n.restore();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderGrid();
        if (c &&
            0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderGrid();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderGrid();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderGrid();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderAxisLine();
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderAxisLine();
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderAxisLine();
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderAxisLine();
        if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) a[e].renderStripLinesOfThicknessType("pixel");
        if (c && 0 < c.length)
            for (e = 0; e < c.length; e++) c[e].renderStripLinesOfThicknessType("pixel");
        if (b && 0 < b.length)
            for (e = 0; e < b.length; e++) b[e].renderStripLinesOfThicknessType("pixel");
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++) d[e].renderStripLinesOfThicknessType("pixel")
    };
    C.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            c = 0,
            b = 0,
            d = 1,
            f = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (d = 1.2);
        if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
                if (this.logarithmic &&
                    !this.equidistantInterval && this.labelAutoFit) {
                    for (var c = [], d = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, g, k = this.viewportMaximum, h = this.lineCoordinates.width / Math.log(this.range), l = this._labels.length - 1; 0 <= l; l--) {
                        p = this._labels[l];
                        if (p.position < this.viewportMinimum) break;
                        p.position > this.viewportMaximum || !(l === this._labels.length - 1 || g < Math.log(k / p.position) * h / d) || (c.push(p), k = p.position, g = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI /
                            180 * this.labelAngle)))
                    }
                    this._labels = c
                } else {
                    for (l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || (p = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += p);
                    c > this.lineCoordinates.width * d && this.labelAutoFit && (a = !0)
                }
            if ("left" === this._position || "right" === this._position)
                if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                    for (var c = [], m, k = this.viewportMaximum, h = this.lineCoordinates.height /
                            Math.log(this.range), l = this._labels.length - 1; 0 <= l; l--) {
                        p = this._labels[l];
                        if (p.position < this.viewportMinimum) break;
                        p.position > this.viewportMaximum || !(l === this._labels.length - 1 || m < Math.log(k / p.position) * h) || (c.push(p), k = p.position, m = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                    }
                    this._labels = c
                } else {
                    for (l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || (p = p.textBlock.height * Math.abs(Math.cos(Math.PI /
                        180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += p);
                    b > this.lineCoordinates.height * d && this.labelAutoFit && (a = !0)
                }
        }
        if ("bottom" === this._position) {
            for (var p, l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(p.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth %
                2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(d, b.y << 0), this.ctx.lineTo(d, b.y + this.tickLength << 0), this.ctx.stroke()), 0 === p.textBlock.angle ? (b.x -= p.textBlock.width / 2, b.y += this.tickLength + p.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = b.x, p.textBlock.y = b.y, p.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(p.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness &&
                (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(d, b.y << 0), this.ctx.lineTo(d, b.y - this.tickLength << 0), this.ctx.stroke()), 0 === p.textBlock.angle ? (b.x -= p.textBlock.width / 2, b.y -= this.tickLength + p.textBlock.height / 2) : (b.x += (p.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0),
                    b.y -= this.tickLength + (p.textBlock.height / 2 * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0))), p.textBlock.x = b.x, p.textBlock.y = b.y, p.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("left" ===
            this._position) {
            for (l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(p.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, d), this.ctx.lineTo(b.x - this.tickLength << 0, d), this.ctx.stroke()), 0 === this.labelAngle ? (p.textBlock.y = b.y,
                p.textBlock.x = b.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5) : (p.textBlock.y = b.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = 0 < this.labelAngle ? b.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength), p.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(),
                this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (l = 0; l < this._labels.length; l++) p = this._labels[l], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (b = this.getPixelCoordinatesOnAxis(p.position), a && 0 !== f++ % 2 && this.labelAutoFit || (this.tickThickness && (this.ctx.lineWidth = this.tickThickness,
                this.ctx.strokeStyle = this.tickColor, d = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, d), this.ctx.lineTo(b.x + this.tickLength << 0, d), this.ctx.stroke()), 0 === this.labelAngle ? (p.textBlock.y = b.y, p.textBlock.x = b.x + this.tickLength + 5) : (p.textBlock.y = 0 > this.labelAngle ? b.y : b.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = 0 < this.labelAngle ? b.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) +
                this.tickLength : b.x + this.tickLength + 5), p.textBlock.render(!0)));
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        }
    };
    C.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx,
            c, b, d = this.chart.plotArea,
            f = 0;
        c = !0;
        if (("bottom" === this._position || "top" === this._position) &&
            this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, f = 0; f < this._labels.length; f++) c ? (c = this.getPixelCoordinatesOnAxis(this._labels[f].position), b = f + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[f + 1].position), a.fillRect(Math.min(b.x, c.x), d.y1, Math.abs(b.x - c.x), Math.abs(d.y1 - d.y2)), c = !1) : c = !0;
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, f = 0; f < this._labels.length; f++) c ?
                (b = this.getPixelCoordinatesOnAxis(this._labels[f].position), c = f + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[f + 1].position), a.fillRect(d.x1, Math.min(b.y, c.y), Math.abs(d.x1 - d.x2), Math.abs(c.y - b.y)), c = !1) : c = !0;
        a.beginPath()
    };
    C.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 < this.stripLines.length && a) {
            for (var c = this, b, d = 0, f = 0, g = !1, k = !1, h = [], l = [], k = !1, d = 0; d < this.stripLines.length; d++) {
                var m = this.stripLines[d];
                m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || y(m.value) || isNaN(this.range)) || h.push(m))
            }
            for (d = 0; d < this._stripLineLabels.length; d++)
                if (m = this.stripLines[d], b = this._stripLineLabels[d], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                    a = this.getPixelCoordinatesOnAxis(b.position);
                    if ("outside" === b.stripLine.labelPlacement)
                        if (m && (this.ctx.strokeStyle = m.color, "pixel" === m._thicknessType && (this.ctx.lineWidth = m.thickness)),
                            "bottom" === this._position) {
                            var p = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                            this.ctx.beginPath();
                            this.ctx.moveTo(p, a.y << 0);
                            this.ctx.lineTo(p, a.y + this.tickLength << 0);
                            this.ctx.stroke();
                            0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                        } else "top" === this._position ? (p = 1 ===
                            this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p, a.y << 0), this.ctx.lineTo(p, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ?
                                b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength -
                            5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle),
                            a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                    else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize /
                            2 + 3 : (b.textBlock.angle = 90, y(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                                this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, y(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x +=
                            b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ?
                        (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? y(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : y(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 -
                            b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? y(m.startValue) ? a.y -=
                            b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : y(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                    b.textBlock.x =
                        a.x;
                    b.textBlock.y = a.y;
                    l.push(b)
                }
            if (!k) {
                k = !1;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (d = 0; d < h.length; d++) m = h[d], m.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (f =
                        0; f < h.length; f++) m = h[f], m.showOnTop && m.render();
                    this.ctx.restore()
                }, m)) : m.render();
                for (d = 0; d < l.length; d++) b = l[d], b.stripLine.showOnTop ? k || (k = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (f = 0; f < l.length; f++) b = l[f], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (c.ctx.save(), c.ctx.beginPath(), c.ctx.rect(c.chart.plotArea.x1, c.chart.plotArea.y1, c.chart.plotArea.width, c.chart.plotArea.height), c.ctx.clip(), b.textBlock.render(!0), c.ctx.restore())
                    }, b.textBlock)) :
                    "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                this.ctx.restore();
                k = !0
            }
            if (k)
                for (k = !1, d = 0; d < l.length; d++) b = l[d], b.stripLine.showOnTop ? k || (k = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (f = 0; f < l.length; f++) b = l[f], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
        }
    };
    C.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a =
                this.chart.ctx;
            a.save();
            var c, b = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(G(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (d = 0; d < this._labels.length; d++) this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = 1 === a.lineWidth % 2 ? (c.x << 0) + 0.5 : c.x << 0, a.moveTo(c, b.y1 << 0), a.lineTo(c,
                    b.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (var d = 0; d < this._labels.length; d++) this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), c = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = 1 === a.lineWidth % 2 ? (c.y << 0) + 0.5 : c.y << 0, a.moveTo(b.x1 << 0, c), a.lineTo(b.x2 << 0, c), a.stroke());
            a.restore()
        }
    };
    C.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        a.save();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth =
                    this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(G(this.lineDashType, this.lineThickness));
                var c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, c);
                a.lineTo(this.lineCoordinates.x2, c);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth = this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(G(this.lineDashType,
            this.lineThickness)), c = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0, a.beginPath(), a.moveTo(c, this.lineCoordinates.y1), a.lineTo(c, this.lineCoordinates.y2), a.stroke());
        a.restore()
    };
    C.prototype.getPixelCoordinatesOnAxis = function(a) {
        var c = {};
        if ("bottom" === this._position || "top" === this._position) c.x = this.convertValueToPixel(a), c.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" === this._position) c.y = this.convertValueToPixel(a), c.x = this.lineCoordinates.x2;
        return c
    };
    C.prototype.convertPixelToValue = function(a) {
        if ("undefined" === typeof a) return null;
        var c = 0,
            c = 0,
            c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
        return c = this.logarithmic ? Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit) * this.viewportMinimum : this.conversionParameters.minimum + (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
    };
    C.prototype.convertValueToPixel = function(a) {
        return this.logarithmic ?
            this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0
    };
    C.prototype.setViewPortRange = function(a, c) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, c);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, c)
    };
    C.prototype.getXValueAt =
        function(a) {
            if (!a) return null;
            var c = null;
            "left" === this._position ? c = this.convertPixelToValue(a.y) : "bottom" === this._position && (c = this.convertPixelToValue(a.x));
            return c
        };
    C.prototype.calculateValueToPixelConversionParameters = function(a) {
        a = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
        };
        var c = this.lineCoordinates.width,
            b = this.lineCoordinates.height;
        a.minimum = this.viewportMinimum;
        if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit =
            (this.reversed ? -1 : 1) * c * a.lnLogarithmBase / Math.log(Math.abs(this.range))) : a.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(this.range), a.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position) this.logarithmic ? (a.lnLogarithmBase = Math.log(this.logarithmBase), a.pixelPerUnit = (this.reversed ? 1 : -1) * b * a.lnLogarithmBase / Math.log(Math.abs(this.range))) : a.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(this.range), a.reference = this.reversed ? this.lineCoordinates.y1 :
            this.lineCoordinates.y2;
        this.conversionParameters = a
    };
    C.prototype.calculateAxisParameters = function() {
        if (this.logarithmic) this.calculateLogarithamicAxisParameters();
        else {
            var a = this.chart.layoutManager.getFreeSpace(),
                c = !1,
                b = !1;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 :
                40,
                d = 4;
            "axisX" === this.type && (d = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(d, Math.floor(this.maxWidth / a)),
                f, g, k, d = 0;
            !y(this.options.viewportMinimum) && (!y(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (y(this.options.viewportMinimum) && !y(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum ||
                isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (y(this.options.viewportMaximum) && !y(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if ("axisX" === this.type) {
                if (this.dataSeries && 0 < this.dataSeries.length)
                    for (f = 0; f < this.dataSeries.length; f++) "dateTime" === this.dataSeries[f].xValueType &&
                        (b = !0);
                f = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                0 === g - f && (d = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += d, f -= d);
                Infinity !== this.dataInfo.minDiff ? k = this.dataInfo.minDiff : 1 < g - f ? k = 0.5 * Math.abs(g - f) : (k = 1, b && (c = !0))
            } else "axisY" === this.type && (f = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum :
                this.dataInfo.viewPortMax, isFinite(f) || isFinite(g) ? isFinite(f) ? isFinite(g) || (g = f) : f = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, f = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === f && 0 === g ? (g += 9, f = 0) : 0 === g - f ? (d = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += d, f -= d) : f > g ? (d = Math.min(Math.abs(0.01 * Math.abs(g - f)), 5), 0 <= g ? f = g - d : g = isFinite(f) ? f + d : 0) : (d = Math.min(Math.abs(0.01 * Math.abs(g - f)), 0.05), 0 !== g && (g += d), 0 !== f && (f -= d)), k = Infinity !==
                this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < f && (f = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
            d = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? f : this.viewportMinimum);
            if ("axisX" === this.type && b) {
                this.intervalType || (d / 1 <= a ? (this.interval = 1, this.intervalType =
                        "millisecond") : d / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : d / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : d / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : d / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : d / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : d / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : d / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : d / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : d / 300 <= a ? (this.interval =
                        300, this.intervalType = "millisecond") : d / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : d / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : d / (1 * H.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : d / (2 * H.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : d / (5 * H.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : d / (10 * H.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : d / (15 * H.secondDuration) <= a ? (this.interval = 15, this.intervalType =
                        "second") : d / (20 * H.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : d / (30 * H.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : d / (1 * H.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : d / (2 * H.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : d / (5 * H.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : d / (10 * H.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : d / (15 * H.minuteDuration) <= a ? (this.interval = 15, this.intervalType =
                        "minute") : d / (20 * H.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : d / (30 * H.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : d / (1 * H.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : d / (2 * H.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : d / (3 * H.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : d / (6 * H.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : d / (1 * H.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : d / (2 * H.dayDuration) <=
                    a ? (this.interval = 2, this.intervalType = "day") : d / (4 * H.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : d / (1 * H.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : d / (2 * H.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : d / (3 * H.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : d / (1 * H.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : d / (2 * H.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : d / (3 * H.monthDuration) <= a ? (this.interval = 3, this.intervalType =
                        "month") : d / (6 * H.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = d / (1 * H.yearDuration) <= a ? 1 : d / (2 * H.yearDuration) <= a ? 2 : d / (4 * H.yearDuration) <= a ? 4 : Math.floor(C.getNiceNumber(d / (a - 1), !0) / H.yearDuration), this.intervalType = "year"));
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = f - k / 2;
                if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + k / 2;
                c ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ?
                    this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
            } else {
                this.intervalType = "number";
                d = C.getNiceNumber(d, !1);
                this.interval = this.options && 0 < this.options.interval ? this.options.interval : C.getNiceNumber(d / (a - 1), !0);
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? f - k / 2 : Math.floor(f / this.interval) * this.interval;
                if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + k / 2 : Math.ceil(g /
                    this.interval) * this.interval;
                0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
            }
            if (null === this.minimum || null === this.maximum)
                if ("axisX" === this.type ? (f = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum :
                        this.dataInfo.max, 0 === g - f && (d = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += d, f -= d), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1) : "axisY" === this.type && (f = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(f) || isFinite(g) ? 0 === f && 0 === g ? (g += 9, f = 0) : 0 === g - f ? (d = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += d, f -= d) : f > g ? (d = Math.min(Math.abs(0.01 * Math.abs(g - f)), 5), 0 <= g ? f = g - d : g = isFinite(f) ?
                        f + d : 0) : (d = Math.min(Math.abs(0.01 * Math.abs(g - f)), 0.05), 0 !== g && (g += d), 0 !== f && (f -= d)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, f = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - f ? 0.5 * Math.abs(g - f) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < f && (f = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), "axisX" === this.type &&
                    b) {
                    if (null === this.minimum || isNaN(this.minimum)) this.minimum = f - k / 2;
                    if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + k / 2
                } else this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? f - k / 2 : Math.floor(f / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? g + k / 2 : Math.ceil(g /
                    this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            y(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            y(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum =
                Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.range)) {
                c = Math.floor(Math.abs(Math.log(this.range) / Math.LN10)) + 2;
                if (isNaN(c) || !isFinite(c)) c = 2;
                if (2 < c)
                    for (b = 0; b < c -
                        2; b++) this.valueFormatString += "#"
            }
        }
    };
    C.prototype.calculateLogarithamicAxisParameters = function() {
        var a = this.chart.layoutManager.getFreeSpace(),
            c = Math.log(this.logarithmBase),
            b;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
            d, f, g, k;
        k = 1;
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
            this.minimum;
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
        "axisX" === this.type ? (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === f / d && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), f *= k, d /= k), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / d > this.logarithmBase ? f / d * Math.pow(this.logarithmBase,
            0.5) : this.logarithmBase) : "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= d && !isFinite(f) ? (f = "undefined" === typeof this.options.interval ? 0 : this.options.interval, d = 1) : 0 >= d ? d = f : isFinite(f) || (f = d), 1 === d && 1 === f ? (f *= this.logarithmBase - 1 / this.logarithmBase, d = 1) : 1 === f / d ? (k = Math.min(f * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), f *= k, d /= k) : d > f ? (k = Math.min(d /
                f * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= f ? d = f / k : f = d * k) : (k = Math.min(f / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== f && (f *= k), 1 !== d && (d /= k)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / d > this.logarithmBase ? f / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < d && (d = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
            1 > f && (f = 1));
        k = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum);
        linearRange = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum);
        this.intervalType = "number";
        k = Math.pow(this.logarithmBase, C.getNiceNumber(Math.abs(Math.log(k) / c), !1));
        this.options && 0 < this.options.interval ? this.interval =
            this.options.interval : (this.interval = C.getNiceExponent(Math.log(k) / c / (a - 1), !0), b = C.getNiceNumber(linearRange / (a - 1), !0));
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(d) / c / this.interval));
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(f) / c /
            this.interval));
        1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceExponent(Math.ceil(Math.log(k) / c) / (a - 1)), b = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
        if (null === this.minimum || null === this.maximum) "axisX" ===
            this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === f / d && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), f *= k, d /= k), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / d > this.logarithmBase ? f / d * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max,
                isFinite(d) || isFinite(f) ? 1 === d && 1 === f ? (f *= this.logarithmBase, d /= this.logarithmBase) : 1 === f / d ? (k = Math.pow(this.logarithmBase, this.interval), f *= k, d /= k) : d > f ? (k = Math.min(0.01 * (d / f), 5), 1 <= f ? d = f / k : f = d * k) : (k = Math.min(f / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== f && (f *= k), 1 !== d && (d /= k)) : (f = "undefined" === typeof this.options.interval ? 0 : this.options.interval, d = 1), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : f / d > this.logarithmBase ? f / d * Math.pow(this.logarithmBase, 0.5) :
                this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < d && (d = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > f && (f = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(d) / c / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ?
                Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? f * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(f) / c / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)),
            1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
        this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
        this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
        this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum ||
            this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
        d = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (c * this.interval) + 0.2) * this.interval);
        this.range = this.viewportMaximum / this.viewportMinimum;
        this.noTicks = a;
        if (!this.options.interval &&
            this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (c = Math.floor(this.viewportMinimum / b + 0.5) * b; c < this.viewportMinimum;) c += b;
            this.equidistantInterval = !1;
            this.intervalStartPosition = c;
            this.interval = b
        } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, d = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (c * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = d;
        if (!this.valueFormatString &&
            (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            c = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(c) || !isFinite(c)) c = 2;
            if (2 < c)
                for (b = 0; b < c - 2; b++) this.valueFormatString += "#"
        }
    };
    C.getNiceExponent = function(a, c) {
        var b = Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, b),
            d = 0 > b ? 1 >= d ? 1 : 5 >= d ? 5 : 10 : Math.max(Math.floor(d), 1);
        return Number((d * Math.pow(10, b)).toFixed(20))
    };
    C.getNiceNumber = function(a, c) {
        var b = Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, b);
        return Number(((c ?
            1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, b)).toFixed(20))
    };
    C.prototype.getLabelStartPoint = function() {
        var a = H[this.intervalType + "Duration"] * this.interval,
            a = new Date(Math.floor(this.viewportMinimum / a) * a);
        if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" ===
            this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() +
                (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0),
            a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a
    };
    S(na, L);
    na.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var c = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (qa(this.parent.stripLines), c = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[c] = this.options
        }
    };
    na.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
            c = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < c) {
            var b = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var d = this.ctx.globalAlpha;
            this.ctx.globalAlpha = b;
            F(this.id);
            var f, g, k, h;
            this.ctx.lineWidth = c;
            this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, c));
            if ("bottom" === this.parent._position || "top" === this.parent._position) f =
                g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, k = this.chart.plotArea.y1, h = this.chart.plotArea.y2, this.bounds = {
                    x1: f - c / 2,
                    y1: k,
                    x2: g + c / 2,
                    y2: h
                };
            else if ("left" === this.parent._position || "right" === this.parent._position) k = h = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, f = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                x1: f,
                y1: k - c / 2,
                x2: g,
                y2: h + c / 2
            };
            this.ctx.moveTo(f, k);
            this.ctx.lineTo(g, h);
            this.ctx.stroke();
            this.ctx.globalAlpha = d
        }
        this.ctx.restore()
    };
    S(Q, L);
    Q.prototype._initialize = function() {
        if (this.enabled) {
            this.container =
                document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " + (t ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += t ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            t || (a += "filter: alpha(opacity = 90);",
                a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    Q.prototype.mouseMoveHandler = function(a, c) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, c))
    };
    Q.prototype._updateToolTip = function(a, c, b) {
        b = "undefined" === typeof b ? !0 : b;
        this.container || this._initialize();
        this.enabled || this.hide();
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof c) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                a = this._prevX;
                c = this._prevY
            } else this._prevX = a, this._prevY = c;
            var d = null,
                f = null,
                g = [],
                k = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    f = [];
                    if (this.chart.axisX)
                        for (var h =
                                0; h < this.chart.axisX.length; h++) {
                            for (var k = this.chart.axisX[h].convertPixelToValue({
                                    y: c
                                }), l = null, d = 0; d < this.chart.axisX[h].dataSeries.length; d++)(l = this.chart.axisX[h].dataSeries[d].getDataPointAtX(k, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[h].dataSeries[d], null !== l.dataPoint.y && f.push(l));
                            l = null
                        }
                    if (this.chart.axisX2)
                        for (h = 0; h < this.chart.axisX2.length; h++) {
                            k = this.chart.axisX2[h].convertPixelToValue({
                                y: c
                            });
                            l = null;
                            for (d = 0; d < this.chart.axisX2[h].dataSeries.length; d++)(l = this.chart.axisX2[h].dataSeries[d].getDataPointAtX(k,
                                b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX2[h].dataSeries[d], null !== l.dataPoint.y && f.push(l));
                            l = null
                        }
                } else {
                    f = [];
                    if (this.chart.axisX)
                        for (h = 0; h < this.chart.axisX.length; h++)
                            for (k = this.chart.axisX[h].convertPixelToValue({
                                    x: a
                                }), l = null, d = 0; d < this.chart.axisX[h].dataSeries.length; d++)(l = this.chart.axisX[h].dataSeries[d].getDataPointAtX(k, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[h].dataSeries[d], null !== l.dataPoint.y && f.push(l));
                    if (this.chart.axisX2)
                        for (h = 0; h < this.chart.axisX2.length; h++)
                            for (k =
                                this.chart.axisX2[h].convertPixelToValue({
                                    x: a
                                }), l = null, d = 0; d < this.chart.axisX2[h].dataSeries.length; d++)(l = this.chart.axisX2[h].dataSeries[d].getDataPointAtX(k, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX2[h].dataSeries[d], null !== l.dataPoint.y && f.push(l))
                }
                if (0 === f.length) return;
                f.sort(function(a, b) {
                    return a.distance - b.distance
                });
                b = f[0];
                for (d = 0; d < f.length; d++) f[d].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(f[d]);
                f = null
            } else {
                if (l = this.chart.getDataPointAtXY(a, c, b)) this.currentDataPointIndex =
                    l.dataPointIndex, this.currentSeriesIndex = l.dataSeries.index;
                else if (t)
                    if (l = Ma(a, c, this.chart._eventManager.ghostCtx), 0 < l && "undefined" !== typeof this.chart._eventManager.objectMap[l]) {
                        l = this.chart._eventManager.objectMap[l];
                        if ("legendItem" === l.objectType) return;
                        this.currentSeriesIndex = l.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= l.dataPointIndex ? l.dataPointIndex : -1
                    } else this.currentDataPointIndex = -1;
                else this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    f = this.chart.data[this.currentSeriesIndex];
                    l = {};
                    if (0 <= this.currentDataPointIndex) d = f.dataPoints[this.currentDataPointIndex], l.dataSeries = f, l.dataPoint = d, l.index = this.currentDataPointIndex, l.distance = Math.abs(d.x - k);
                    else {
                        if (!this.enabled || "line" !== f.type && "stepLine" !== f.type && "spline" !== f.type && "area" !== f.type && "stepArea" !== f.type && "splineArea" !== f.type && "stackedArea" !== f.type && "stackedArea100" !== f.type && "rangeArea" !== f.type && "rangeSplineArea" !== f.type && "candlestick" !== f.type && "ohlc" !== f.type) return;
                        k = f.axisX.convertPixelToValue({
                            x: a
                        });
                        l = f.getDataPointAtX(k,
                            b);
                        l.dataSeries = f;
                        this.currentDataPointIndex = l.index;
                        d = l.dataPoint
                    }
                    if (!y(l.dataPoint.y))
                        if (l.dataSeries.axisY)
                            if (0 < l.dataPoint.y.length) {
                                for (d = b = 0; d < l.dataPoint.y.length; d++) l.dataPoint.y[d] < l.dataSeries.axisY.viewportMinimum ? b-- : l.dataPoint.y[d] > l.dataSeries.axisY.viewportMaximum && b++;
                                b < l.dataPoint.y.length && b > -l.dataPoint.y.length && g.push(l)
                            } else "column" === f.type || "bar" === f.type ? 0 > l.dataPoint.y ? 0 > l.dataSeries.axisY.viewportMinimum && l.dataSeries.axisY.viewportMaximum >= l.dataPoint.y && g.push(l) : l.dataSeries.axisY.viewportMinimum <=
                                l.dataPoint.y && 0 <= l.dataSeries.axisY.viewportMaximum && g.push(l) : "bubble" === f.type ? (b = this.chart._eventManager.objectMap[f.dataPointIds[l.index]].size / 2, l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum - b && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum + b && g.push(l)) : (0 <= l.dataSeries.type.indexOf("100") || "stackedColumn" === f.type || "stackedBar" === f.type || l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum) && g.push(l);
                    else g.push(l)
                }
            }
            if (0 < g.length && (this.highlightObjects(g),
                    this.enabled))
                if (b = "", b = this.getToolTipInnerHTML({
                        entries: g
                    }), null !== b) {
                    this.contentDiv.innerHTML = b;
                    this.contentDiv.innerHTML = b;
                    b = !1;
                    "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor :
                            g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ?
                            this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : t ? "italic" : "normal"
                    } catch (m) {}
                    "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type ||
                        "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                    0 > a && (a += this.container.clientWidth + 20);
                    a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    a += "px";
                    c = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type &&
                        "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : c : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                    c = -c + 10;
                    0 < c + this.container.clientHeight + 5 && (c -= c + this.container.clientHeight +
                        5 - 0);
                    this.container.style.left = a;
                    this.container.style.bottom = c + "px";
                    !this.animationEnabled || b ? this.disableAnimation() : this.enableAnimation()
                } else this.hide(!1)
        }
    };
    Q.prototype.highlightObjects = function(a) {
        var c = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        c.clearRect(0, 0, this.chart.width, this.chart.height);
        c.save();
        var b = this.chart.plotArea,
            d = 0;
        c.beginPath();
        c.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
        c.clip();
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            if ((f = this.chart._eventManager.objectMap[f.dataSeries.dataPointIds[f.index]]) &&
                f.objectType && "dataPoint" === f.objectType) {
                var d = this.chart.data[f.dataSeriesIndex],
                    g = d.dataPoints[f.dataPointIndex],
                    k = f.dataPointIndex;
                !1 === g.highlightEnabled || !0 !== d.highlightEnabled && !0 !== g.highlightEnabled || ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "scatter" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type ? (g = d.getMarkerProperties(k, f.x1, f.y1, this.chart.overlaidCanvasCtx),
                    g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), N.drawMarkers([g]), "undefined" !== typeof f.y2 && (g = d.getMarkerProperties(k, f.x1, f.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), N.drawMarkers([g]))) : "bubble" === d.type ? (g = d.getMarkerProperties(k, f.x1, f.y1, this.chart.overlaidCanvasCtx), g.size = f.size, g.color =
                    "white", g.borderColor = "white", c.globalAlpha = 0.3, N.drawMarkers([g]), c.globalAlpha = 1) : "column" === d.type || "stackedColumn" === d.type || "stackedColumn100" === d.type || "bar" === d.type || "rangeBar" === d.type || "stackedBar" === d.type || "stackedBar100" === d.type || "rangeColumn" === d.type ? M(c, f.x1, f.y1, f.x2, f.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === d.type || "doughnut" === d.type ? Ga(c, f.center, f.radius, "white", d.type, f.startAngle, f.endAngle, 0.3, f.percentInnerRadius) : "candlestick" === d.type ? (c.globalAlpha = 1, c.strokeStyle =
                    f.color, c.lineWidth = 2 * f.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5, c.beginPath(), c.moveTo(f.x3 - d, Math.min(f.y2, f.y3)), c.lineTo(f.x3 - d, Math.min(f.y1, f.y4)), c.stroke(), c.beginPath(), c.moveTo(f.x3 - d, Math.max(f.y1, f.y4)), c.lineTo(f.x3 - d, Math.max(f.y2, f.y3)), c.stroke(), M(c, f.x1, Math.min(f.y1, f.y4), f.x2, Math.max(f.y1, f.y4), "transparent", 2 * f.borderThickness, f.color, !1, !1, !1, !1), c.globalAlpha = 1) : "ohlc" === d.type && (c.globalAlpha = 1, c.strokeStyle = f.color, c.lineWidth = 2 * f.borderThickness, d = 0 === c.lineWidth % 2 ? 0 : 0.5,
                    c.beginPath(), c.moveTo(f.x3 - d, f.y2), c.lineTo(f.x3 - d, f.y3), c.stroke(), c.beginPath(), c.moveTo(f.x3, f.y1), c.lineTo(f.x1, f.y1), c.stroke(), c.beginPath(), c.moveTo(f.x3, f.y4), c.lineTo(f.x2, f.y4), c.stroke(), c.globalAlpha = 1))
            }
        }
        c.restore();
        c.globalAlpha = 1;
        c.beginPath()
    };
    Q.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        for (var c = null, b = null, d = null, f = 0, g = "", k = !0, h = 0; h < a.length; h++)
            if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) {
                k = !1;
                break
            }
        if (k && (this.content && "function" === typeof this.content ||
                this.contentFormatter)) a = {
            chart: this.chart,
            toolTip: this.options,
            entries: a
        }, c = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var l = null, m = "", h = 0; h < a.length; h++)
                if (b = a[h].dataSeries, d = a[h].dataPoint, f = a[h].index, g = "", 0 === h && (k && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? m += "undefined" !== typeof this.chart.axisX[0].labels[d.x] ? this.chart.axisX[0].labels[d.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length &&
                        (m += "undefined" !== typeof this.chart.axisX2[0].labels[d.x] ? this.chart.axisX2[0].labels[d.x] : "{x}"), m += "</br>", m = this.chart.replaceKeywordsWithValue(m, d, b, f)), null !== d.toolTipContent && ("undefined" !== typeof d.toolTipContent || null !== b.options.toolTipContent)) {
                    if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" ===
                        b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type) this.chart.axisX && 1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", l = b.axisXIndex;
                    else if ("bubble" === b.type) this.chart.axisX &&
                        1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type) this.chart.axisX && 1 < this.chart.axisX.length &&
                        (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === b.type || "ohlc" === b.type) this.chart.axisX && 1 < this.chart.axisX.length && (g += l != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                        ""), g += d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === c && (c = "");
                    !0 === this.reversed ? (c = this.chart.replaceKeywordsWithValue(g, d, b, f) + c, h < a.length - 1 && (c = "</br>" + c)) : (c += this.chart.replaceKeywordsWithValue(g,
                        d, b, f), h < a.length - 1 && (c += "</br>"))
                }
            null !== c && (c = m + c)
        } else {
            b = a[0].dataSeries;
            d = a[0].dataPoint;
            f = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === b.options.toolTipContent) return null;
            if ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" ===
                b.type || "stackedArea100" === b.type) g = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === b.type) g = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") +
                "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === b.type || "doughnut" === b.type || "funnel" === b.type) g = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.name ? "{name}:</span>&nbsp;&nbsp;" : d.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}";
            else if ("rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type ||
                "rangeSplineArea" === b.type) g = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === b.type || "ohlc" === b.type) g = d.toolTipContent ? d.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ?
                "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === c && (c = "");
            c += this.chart.replaceKeywordsWithValue(g, d, b, f)
        }
        return c
    };
    Q.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out",
            this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    Q.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    Q.prototype.hide = function(a) {
        this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY =
            this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
    };
    Q.prototype.show = function(a, c, b) {
        this._updateToolTip(a, c, "undefined" === typeof b ? !1 : b)
    };
    B.prototype.getPercentAndTotal = function(a, c) {
        var b = null,
            d = null,
            f = null;
        if (0 <= a.type.indexOf("stacked")) d = 0, b = c.x.getTime ? c.x.getTime() : c.x, b in a.plotUnit.yTotals && (d = a.plotUnit.yTotals[b], f = isNaN(c.y) ? 0 : 0 === d ? 0 : 100 * (c.y / d));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = d = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) || (d +=
                a.dataPoints[i].y);
            f = isNaN(c.y) ? 0 : 100 * (c.y / d)
        }
        return {
            percent: f,
            total: d
        }
    };
    B.prototype.replaceKeywordsWithValue = function(a, c, b, d, f) {
        var g = this;
        f = "undefined" === typeof f ? 0 : f;
        if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var k = "#percent",
                h = "#total",
                l = this.getPercentAndTotal(b, c),
                h = isNaN(l.total) ? h : l.total,
                k = isNaN(l.percent) ? k : l.percent;
            do {
                l = "";
                if (b.percentFormatString) l = b.percentFormatString;
                else {
                    var l = "#,##0.",
                        m = Math.max(Math.ceil(Math.log(1 /
                            Math.abs(k)) / Math.LN10), 2);
                    if (isNaN(m) || !isFinite(m)) m = 2;
                    for (var p = 0; p < m; p++) l += "#";
                    b.percentFormatString = l
                }
                a = a.replace("#percent", ca(k, l, g._cultureInfo));
                a = a.replace("#total", ca(h, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", g._cultureInfo))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = ka(a.slice(1, a.length - 1));
            a = a.replace("#index",
                f);
            var e = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (e = ka(h[2]), a = ka(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return c.color ? c.color : b.color ? b.color : b._colorSet[d % b._colorSet.length];
            if (c.hasOwnProperty(a)) h = c;
            else if (b.hasOwnProperty(a)) h = b;
            else return "";
            h = h[a];
            null !== e && (h = h[e]);
            if ("x" === a)
                if ("dateTime" === g.plotInfo.axisXValueType || "dateTime" === b.xValueType || c.x && c.x.getTime) {
                    if (g.plotInfo.plotTypes[0].plotUnits[0].axisX && !g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return Ea(h,
                        c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                } else return ca(h, c.xValueFormatString ? c.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", g._cultureInfo);
            else return "y" === a ? ca(h, c.yValueFormatString ? c.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########",
                g._cultureInfo) : "z" === a ? ca(h, c.zValueFormatString ? c.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : h
        })
    };
    la.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    la.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    };
    la.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var c = [],
                b = xa(a),
                d = null;
            if ((d = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" === d.objectType) {
                    var f = this.chart.data[d.dataSeriesIndex],
                        g = f.dataPoints[d.dataPointIndex],
                        k = d.dataPointIndex;
                    d.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: g,
                        dataSeries: f.options,
                        dataPointIndex: k,
                        dataSeriesIndex: f.index,
                        chart: this.chart
                    };
                    d.eventContext = {
                        context: g,
                        userContext: g,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    c.push(d);
                    d = this.objectMap[f.id];
                    d.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataPoint: g,
                        dataSeries: f.options,
                        dataPointIndex: k,
                        dataSeriesIndex: f.index,
                        chart: this.chart
                    };
                    d.eventContext = {
                        context: f,
                        userContext: f.options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    c.push(this.objectMap[f.id])
                } else "legendItem" === d.objectType && (f = this.chart.data[d.dataSeriesIndex], g = null !== d.dataPointIndex ? f.dataPoints[d.dataPointIndex] : null,
                    d.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataSeries: f.options,
                        dataPoint: g,
                        dataPointIndex: d.dataPointIndex,
                        dataSeriesIndex: d.dataSeriesIndex,
                        chart: this.chart
                    }, d.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend.options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    }, c.push(d));
            f = [];
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                g = !0;
                for (d = 0; d < c.length; d++)
                    if (c[d].id === this.mouseoveredObjectMaps[b].id) {
                        g = !1;
                        break
                    }
                g ? this.fireEvent(this.mouseoveredObjectMaps[b],
                    "mouseout", a) : f.push(this.mouseoveredObjectMaps[b])
            }
            this.mouseoveredObjectMaps = f;
            for (b = 0; b < c.length; b++) {
                f = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (c[b].id === this.mouseoveredObjectMaps[d].id) {
                        f = !0;
                        break
                    }
                f || (this.fireEvent(c[b], "mouseover", a), this.mouseoveredObjectMaps.push(c[b]));
                "click" === a.type ? this.fireEvent(c[b], "click", a) : "mousemove" === a.type && this.fireEvent(c[b], "mousemove", a)
            }
        }
    };
    la.prototype.fireEvent = function(a, c, b) {
        if (a && c) {
            var d = a.eventParameter,
                f = a.eventContext,
                g = a.eventContext.userContext;
            g && (f && g[f[c]]) && g[f[c]].call(g, d);
            "mouseout" !== c ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === c && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
        }
    };
    S(oa, L);
    Da.prototype.animate = function(a, c, b, d, f) {
        var g = this;
        this.chart.isAnimating = !0;
        f = f || E.easing.linear;
        b && this.animations.push({
            startTime: (new Date).getTime() +
                (a ? a : 0),
            duration: c,
            animationCallback: b,
            onComplete: d
        });
        for (a = []; 0 < this.animations.length;)
            if (c = this.animations.shift(), b = (new Date).getTime(), d = 0, c.startTime <= b && (d = f(Math.min(b - c.startTime, c.duration), 0, 1, c.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(c), c.animationCallback(d), 1 <= d && c.onComplete) c.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            g.animate.call(g)
        }) : this.chart.isAnimating = !1
    };
    Da.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var E = {
            yScaleAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas,
                        f = c.animationBase;
                    b.drawImage(d, 0, 0, d.width, d.height, 0, f - f * a, b.canvas.width / P, a * b.canvas.height / P)
                }
            },
            xScaleAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas,
                        f = c.animationBase;
                    b.drawImage(d, 0, 0,
                        d.width, d.height, f - f * a, 0, a * b.canvas.width / P, b.canvas.height / P)
                }
            },
            xClipAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas;
                    b.save();
                    0 < a && b.drawImage(d, 0, 0, d.width * a, d.height, 0, 0, d.width * a / P, d.height / P);
                    b.restore()
                }
            },
            fadeInAnimation: function(a, c) {
                if (0 !== a) {
                    var b = c.dest,
                        d = c.source.canvas;
                    b.save();
                    b.globalAlpha = a;
                    b.drawImage(d, 0, 0, d.width, d.height, 0, 0, b.canvas.width / P, b.canvas.height / P);
                    b.restore()
                }
            },
            easing: {
                linear: function(a, c, b, d) {
                    return b * a / d + c
                },
                easeOutQuad: function(a, c, b, d) {
                    return -b *
                        (a /= d) * (a - 2) + c
                },
                easeOutQuart: function(a, c, b, d) {
                    return -b * ((a = a / d - 1) * a * a * a - 1) + c
                },
                easeInQuad: function(a, c, b, d) {
                    return b * (a /= d) * a + c
                },
                easeInQuart: function(a, c, b, d) {
                    return b * (a /= d) * a * a * a + c
                }
            }
        },
        N = {
            drawMarker: function(a, c, b, d, f, g, k, h) {
                if (b) {
                    var l = 1;
                    b.fillStyle = g ? g : "#000000";
                    b.strokeStyle = k ? k : "#000000";
                    b.lineWidth = h ? h : 0;
                    "circle" === d ? (b.moveTo(a, c), b.beginPath(), b.arc(a, c, f / 2, 0, 2 * Math.PI, !1), g && b.fill(), h && (k ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l))) :
                        "square" === d ? (b.beginPath(), b.rect(a - f / 2, c - f / 2, f, f), g && b.fill(), h && (k ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l))) : "triangle" === d ? (b.beginPath(), b.moveTo(a - f / 2, c + f / 2), b.lineTo(a + f / 2, c + f / 2), b.lineTo(a, c - f / 2), b.closePath(), g && b.fill(), h && (k ? b.stroke() : (l = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = l)), b.beginPath()) : "cross" === d && (b.strokeStyle = g, b.lineWidth = f / 4, b.beginPath(), b.moveTo(a - f / 2, c - f / 2), b.lineTo(a + f /
                            2, c + f / 2), b.stroke(), b.moveTo(a + f / 2, c - f / 2), b.lineTo(a - f / 2, c + f / 2), b.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var c = 0; c < a.length; c++) {
                    var b = a[c];
                    N.drawMarker(b.x, b.y, b.ctx, b.type, b.size, b.color, b.borderColor, b.borderThickness)
                }
            }
        },
        ja = {
            Chart: B,
            addColorSet: function(a, c) {
                ga[a] = c
            },
            addCultureInfo: function(a, c) {
                pa[a] = c
            },
            formatNumber: function(a, c, b) {
                b = b || "en";
                if (pa[b]) return ca(a, c || "#,##0.##", new oa(b));
                throw "Unknown Culture Name";
            },
            formatDate: function(a, c, b) {
                b = b || "en";
                if (pa[b]) return Ea(a, c || "DD MMM YYYY",
                    new oa(b));
                throw "Unknown Culture Name";
            }
        };
    ja.Chart.version = "v1.9.9 GA";
    window.CanvasJS = ja
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();