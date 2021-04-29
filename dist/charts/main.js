(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+K9B":
/*!********************************************************!*\
  !*** ./src/app/chart/bar-chart/bar-chart.component.ts ***!
  \********************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class BarChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].BAR;
        super.parseData(data);
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function BarChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function BarChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hagaylevy/WebstormProjects/charts/src/main.ts */"zUnb");


/***/ }),

/***/ "42Ql":
/*!****************************************************************!*\
  !*** ./src/app/chart/scatter-chart/scatter-chart.component.ts ***!
  \****************************************************************/
/*! exports provided: ScatterChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChartComponent", function() { return ScatterChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class ScatterChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].SCATTER;
        super.parseData(data);
    }
}
ScatterChartComponent.ɵfac = function ScatterChartComponent_Factory(t) { return new (t || ScatterChartComponent)(); };
ScatterChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ScatterChartComponent, selectors: [["app-scatter-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function ScatterChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function ScatterChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function ScatterChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "7zsX":
/*!**********************************************************!*\
  !*** ./src/app/chart/base-chart/base-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: BaseChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChartComponent", function() { return BaseChartComponent; });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BaseChartComponent {
    constructor() {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_2__["CHART_TYPE"].LINE;
        this.chartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{}],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        gridLines: {
                            color: 'rgba(255,0,0,0.3)',
                        },
                        ticks: {
                            fontColor: 'red',
                        }
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.chartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.chartLegend = true;
        this.chartPlugins = [chart_js__WEBPACK_IMPORTED_MODULE_1__];
    }
    ngOnInit() {
        // console.log('ngOnInit');
    }
    ngOnChanges(changes) {
        if (changes.data) {
            this.parseData(this.data);
        }
    }
    parseData(data) {
        this.chartLabels = data.xXis;
        this.chartDataSet = data.dataSet;
        console.log('data', data);
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(); };
BaseChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseChartComponent, selectors: [["app-base-chart"]], viewQuery: function BaseChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function BaseChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartHover", function BaseChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function BaseChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_0__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "AJJQ":
/*!**********************************************************!*\
  !*** ./src/app/chart/line-chart/line-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class LineChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].LINE;
        super.parseData(data);
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function LineChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function LineChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CQCo":
/*!**************************************************************!*\
  !*** ./src/app/chart/bubble-chart/bubble-chart.component.ts ***!
  \**************************************************************/
/*! exports provided: BubbleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChartComponent", function() { return BubbleChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class BubbleChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
        this.chartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            min: 0,
                            max: 30,
                        }
                    }],
                yAxes: [{
                        ticks: {
                            min: 0,
                            max: 30,
                        }
                    }]
            },
            annotation: {}
        };
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].BUBBLE;
        // this.chartDataSet = data.dataSet[0].label;
        // this.chartLabels = data.dataSet[0].data;
        super.parseData(data);
    }
}
BubbleChartComponent.ɵfac = function BubbleChartComponent_Factory(t) { return new (t || BubbleChartComponent)(); };
BubbleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BubbleChartComponent, selectors: [["app-bubble-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function BubbleChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function BubbleChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function BubbleChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "D4qL":
/*!********************************************************!*\
  !*** ./src/app/chart/pie-chart/pie-chart.component.ts ***!
  \********************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class PieChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].PIE;
        super.parseData(data);
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function PieChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function PieChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "H1ao":
/*!******************************************************************!*\
  !*** ./src/app/chart/doughnut-chart/doughnut-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: DoughnutChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function() { return DoughnutChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class DoughnutChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].DOUGHNUT;
        super.parseData(data);
    }
}
DoughnutChartComponent.ɵfac = function DoughnutChartComponent_Factory(t) { return new (t || DoughnutChartComponent)(); };
DoughnutChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DoughnutChartComponent, selectors: [["app-doughnut-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function DoughnutChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function DoughnutChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function DoughnutChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _chart_charts_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/charts/charts.component */ "kc3K");



class AppComponent {
    constructor(httpClient) {
        this.title = 'charts';
        httpClient.get('../assets/data.json').subscribe((d) => this.data = d.charts);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "data"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is POC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-charts", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [_chart_charts_charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _chart_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/charts/charts.component */ "kc3K");
/* harmony import */ var _chart_base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/pie-chart/pie-chart.component */ "D4qL");
/* harmony import */ var _chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/bar-chart/bar-chart.component */ "+K9B");
/* harmony import */ var _chart_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/doughnut-chart/doughnut-chart.component */ "H1ao");
/* harmony import */ var _chart_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/radar-chart/radar-chart.component */ "vTIR");
/* harmony import */ var _chart_polar_area_chart_polar_area_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/polar-area-chart/polar-area-chart.component */ "iIJ5");
/* harmony import */ var _chart_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart/bubble-chart/bubble-chart.component */ "CQCo");
/* harmony import */ var _chart_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/scatter-chart/scatter-chart.component */ "42Ql");
/* harmony import */ var _chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/line-chart/line-chart.component */ "AJJQ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _chart_base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_4__["BaseChartComponent"],
        _chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"],
        _chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"],
        _chart_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_7__["DoughnutChartComponent"],
        _chart_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_8__["RadarChartComponent"],
        _chart_polar_area_chart_polar_area_chart_component__WEBPACK_IMPORTED_MODULE_9__["PolarAreaChartComponent"],
        _chart_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_10__["BubbleChartComponent"],
        _chart_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_11__["ScatterChartComponent"],
        _chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
        _chart_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"]] }); })();


/***/ }),

/***/ "iIJ5":
/*!**********************************************************************!*\
  !*** ./src/app/chart/polar-area-chart/polar-area-chart.component.ts ***!
  \**********************************************************************/
/*! exports provided: PolarAreaChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarAreaChartComponent", function() { return PolarAreaChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class PolarAreaChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].POLAR_AREA;
        super.parseData(data);
    }
}
PolarAreaChartComponent.ɵfac = function PolarAreaChartComponent_Factory(t) { return new (t || PolarAreaChartComponent)(); };
PolarAreaChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PolarAreaChartComponent, selectors: [["app-polar-area-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function PolarAreaChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function PolarAreaChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function PolarAreaChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "kc3K":
/*!**************************************************!*\
  !*** ./src/app/chart/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../line-chart/line-chart.component */ "AJJQ");
/* harmony import */ var _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bubble-chart/bubble-chart.component */ "CQCo");
/* harmony import */ var _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../doughnut-chart/doughnut-chart.component */ "H1ao");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "+K9B");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pie-chart/pie-chart.component */ "D4qL");
/* harmony import */ var _polar_area_chart_polar_area_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../polar-area-chart/polar-area-chart.component */ "iIJ5");
/* harmony import */ var _radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../radar-chart/radar-chart.component */ "vTIR");
/* harmony import */ var _scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scatter-chart/scatter-chart.component */ "42Ql");











function ChartsComponent_div_1_app_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-line-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_bubble_chart_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-bubble-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_doughnut_chart_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-doughnut-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_bar_chart_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-bar-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_pie_chart_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pie-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_polar_area_chart_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-polar-area-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_radar_chart_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-radar-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_app_scatter_chart_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-scatter-chart", 4);
} if (rf & 2) {
    const chart_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", chart_r1);
} }
function ChartsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartsComponent_div_1_app_line_chart_1_Template, 1, 1, "app-line-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChartsComponent_div_1_app_bubble_chart_2_Template, 1, 1, "app-bubble-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChartsComponent_div_1_app_doughnut_chart_3_Template, 1, 1, "app-doughnut-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChartsComponent_div_1_app_bar_chart_4_Template, 1, 1, "app-bar-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChartsComponent_div_1_app_pie_chart_5_Template, 1, 1, "app-pie-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChartsComponent_div_1_app_polar_area_chart_6_Template, 1, 1, "app-polar-area-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChartsComponent_div_1_app_radar_chart_7_Template, 1, 1, "app-radar-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChartsComponent_div_1_app_scatter_chart_8_Template, 1, 1, "app-scatter-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chart_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.LINE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.BUBBLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.DOUGHNUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.BAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.PIE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.POLAR_AREA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.RADAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chart_r1.type === ctx_r0.CHART_TYPE.SCATTER);
} }
class ChartsComponent {
    constructor() {
        this.data = [];
        this.CHART_TYPE = _common_declarations__WEBPACK_IMPORTED_MODULE_0__["CHART_TYPE"];
    }
    ngOnInit() {
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "charts-container"], ["style", "display: flex", 4, "ngFor", "ngForOf"], [2, "display", "flex"], [3, "data", 4, "ngIf"], [3, "data"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartsComponent_div_1_Template, 9, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_4__["BubbleChartComponent"], _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_5__["DoughnutChartComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"], _polar_area_chart_polar_area_chart_component__WEBPACK_IMPORTED_MODULE_8__["PolarAreaChartComponent"], _radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__["RadarChartComponent"], _scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_10__["ScatterChartComponent"]], styles: [".charts-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNoYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "n5sh":
/*!**********************************************!*\
  !*** ./src/app/chart/common/declarations.ts ***!
  \**********************************************/
/*! exports provided: CHART_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_TYPE", function() { return CHART_TYPE; });
var CHART_TYPE;
(function (CHART_TYPE) {
    CHART_TYPE["BAR"] = "bar";
    CHART_TYPE["BUBBLE"] = "bubble";
    CHART_TYPE["DOUGHNUT"] = "doughnut";
    CHART_TYPE["LINE"] = "line";
    CHART_TYPE["PIE"] = "pie";
    CHART_TYPE["POLAR_AREA"] = "polarArea";
    CHART_TYPE["RADAR"] = "radar";
    CHART_TYPE["SCATTER"] = "scatter";
})(CHART_TYPE || (CHART_TYPE = {}));


/***/ }),

/***/ "vTIR":
/*!************************************************************!*\
  !*** ./src/app/chart/radar-chart/radar-chart.component.ts ***!
  \************************************************************/
/*! exports provided: RadarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarChartComponent", function() { return RadarChartComponent; });
/* harmony import */ var _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chart/base-chart.component */ "7zsX");
/* harmony import */ var _common_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/declarations */ "n5sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");




class RadarChartComponent extends _base_chart_base_chart_component__WEBPACK_IMPORTED_MODULE_0__["BaseChartComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    parseData(data) {
        this.chartType = _common_declarations__WEBPACK_IMPORTED_MODULE_1__["CHART_TYPE"].RADAR;
        super.parseData(data);
    }
}
RadarChartComponent.ɵfac = function RadarChartComponent_Factory(t) { return new (t || RadarChartComponent)(); };
RadarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RadarChartComponent, selectors: [["app-radar-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 8, consts: [[1, "canvas-container"], ["baseChart", "", 2, "width", "450px", "height", "500px", 3, "plugins", "data", "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function RadarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function RadarChartComponent_Template_canvas_chartHover_1_listener($event) { return ctx.chartHovered($event); })("chartClick", function RadarChartComponent_Template_canvas_chartClick_1_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("plugins", ctx.chartPlugins)("data", ctx.chartSingleData)("datasets", ctx.chartDataSet)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: [".canvas-container[_ngcontent-%COMP%] {\n  border: 1px solid #314211;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE0MjExO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map