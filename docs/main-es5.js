(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/kitush/Documents/Web/real-estate-client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0cUJ":
    /*!**********************************************!*\
      !*** ./src/app/listing/listing.component.ts ***!
      \**********************************************/

    /*! exports provided: ListingComponent */

    /***/
    function cUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListingComponent", function () {
        return ListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/lands", 1];
      };

      var _c1 = function _c1() {
        return ["land"];
      };

      var ListingComponent = /*#__PURE__*/function () {
        function ListingComponent() {
          _classCallCheck(this, ListingComponent);
        }

        _createClass(ListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListingComponent;
      }();

      ListingComponent.??fac = function ListingComponent_Factory(t) {
        return new (t || ListingComponent)();
      };

      ListingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListingComponent,
        selectors: [["app-listing"]],
        decls: 78,
        vars: 4,
        consts: [[1, "position-relative", "overflow-hidden", "p-3", "p-md-5", "text-center", "bg-light", "topImg"], [1, "col-md-5", "p-lg-5", "mx-auto", "my-5"], [1, "display-4", "fw-normal", "text-danger"], [1, "lead", "fw-bold", "text-secondary"], ["href", "#search", 1, "btn", "btn-danger"], [1, "product-device", "shadow-sm", "d-none", "d-md-block"], [1, "product-device", "product-device-2", "shadow-sm", "d-none", "d-md-block"], ["id", "search", 1, "container"], [1, "row", "mt-3"], [1, "col-md-6", "mx-auto"], ["id", "search_form", "onsubmit", "return false", 1, "col-lg-auto", "mb-3", "mb-lg-0", "me-lg-3"], ["type", "search", "id", "search", "placeholder", "Enter location", 1, "form-control", "form-control-dark"], ["id", "search_error", 1, "form-text", "text-muted"], [1, "text-center", "mt-2"], ["type", "submit", 1, "btn", "btn-outline-danger", "me-2"], [1, "fas", "fa-search-location"], [1, "container"], [1, "text-danger", "text-center", "mt-4"], [1, "row"], [1, "col-md-4", "d-grid", "p-1", "mx-auto"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", ".multi-collapse", "aria-expanded", "false", "aria-controls", "multiCollapseExample1 multiCollapseExample2 multiCollapseExample3", 1, "btn", "btn-outline-danger"], [1, "row", "my-3"], [1, "col-md-4"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapse"], [1, "card", "card-body"], [1, "text-danger"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse"], ["id", "multiCollapseExample3", 1, "collapse", "multi-collapse"], ["id", "land", 1, "container"], [1, "card", "text-center", "mt-4", 2, "border", "none"], [1, "card-header", "bg-danger", "text-white"], [1, "h4"], [1, "card-body"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4"], [1, "col"], [1, "card", "shadow", "h-100"], ["src", "../../assets/images/house4.jpg", "height", "300", "alt", "...", 1, "card-img-top"], [1, "card-body", "text-muted"], [1, "card-title"], [1, "fas", "fa-map-marker-alt"], [2, "list-style", "none"], [1, "card-text"], [1, "fas", "fa-sitemap"], [1, "fas", "fa-arrows-alt"], [1, "fas", "fa-dollar-sign"], [1, "btn", "btn-danger", "w-50", 3, "routerLink"], [1, "fas", "fa-angle-double-right"], [1, "btn", "btn-outline-danger", "rounded-circle", "mb-3", 3, "routerLink"]],
        template: function ListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Penta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u201CIt\u2019s tangible, it\u2019s solid, it\u2019s beautiful. It\u2019s artistic, from our standpoint, and we just love real estate.\u201D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "What We Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Click here to find out...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Find Land");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " With over 1 million+ Land for sale available on the website, Trulia can match you with a house you will want to call home. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Find a Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Find a Rental");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Land");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h5", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\xA0Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "ul", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "\xA0Size 0.05Ha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\xA0Dimension 100m by 500m");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\xA0Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".topImg[_ngcontent-%COMP%]{\n    background-image: url('bg1.svg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: scroll;  \n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCIiwiZmlsZSI6Imxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BJbWd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsOyAgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      "ccyI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formbuilder, auth, router) {
          _classCallCheck(this, RegisterComponent);

          this.formbuilder = formbuilder;
          this.auth = auth;
          this.router = router;
          this.registerData = this.formbuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
        }

        _createClass(RegisterComponent, [{
          key: "register",
          value: function register() {
            var _this = this;

            //call the service to save the token
            this.auth.registerUser(this.registerData.value).subscribe(function (res) {
              _this.router.navigate(['/login']);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 40,
        vars: 3,
        consts: [[1, "container", "mt-4"], [1, "card", "bg-light", "shadow", "col-md-10", "mx-auto"], [1, "card-header", "bg-light"], [1, "text-danger", "text-center"], [1, "card-body"], ["id", "signUp_form", 1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["formControlName", "firstName", "type", "text", "id", "firstName", "placeholder", "John", 1, "form-control"], ["id", "firstName_error", 1, "form-text", "text-muted"], ["formControlName", "lastName", "type", "text", "id", "lastName", "placeholder", "Doe", 1, "form-control"], ["id", "lastName_error", 1, "form-text", "text-muted"], ["formControlName", "email", "type", "email", "id", "email", "placeholder", "email@email.com", 1, "form-control"], ["id", "email_error", 1, "form-text", "text-muted"], ["for", "inputAddress", 1, "form-label"], ["formControlName", "phoneNumber", "type", "text", "id", "phoneNumber", "placeholder", "+(254) 7-00-500-777", 1, "form-control"], ["id", "phoneNumber_error", 1, "form-text", "text-muted"], ["formControlName", "password", "type", "password", "id", "password", "placeholder", "************", 1, "form-control"], ["id", "password_error", 1, "form-text", "text-muted"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-outline-danger"], [1, "card-footer", "bg-light"], [1, "text-muted"], [1, "text-danger", 3, "routerLink"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Sign Up for an Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "small", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "small", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.registerData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](2, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "70H3":
    /*!************************************************!*\
      !*** ./src/app/settings/settings.component.ts ***!
      \************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function H3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _app_counties_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app/counties.json */
      "7jBf");

      var _app_counties_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../app/counties.json */
      "7jBf", 1);
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../constants */
      "l207");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SettingsComponent_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var county_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", county_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](county_r3.name);
        }
      }

      function SettingsComponent_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var type_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", type_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](type_r4);
        }
      }

      function SettingsComponent_option_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var size_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", size_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](size_r5);
        }
      }

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent() {
          _classCallCheck(this, SettingsComponent);

          this.counties = _app_counties_json__WEBPACK_IMPORTED_MODULE_0__;
          this.residenceTypes = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].RESIDENCE_TYPES;
          this.landSizes = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].LAND_SIZES;
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.??fac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)();
      };

      SettingsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 90,
        vars: 3,
        consts: [[1, "container", "mt-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col"], ["type", "text", 1, "form-control"], ["type", "tel", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "mt-3"], [1, "card", "mt-3"], [1, "font-weight-bold"], [1, "btn", "btn-danger", "btn-sm"], [1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table"], ["scope", "row"], [3, "value"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "UPDATE PROFILE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, " Authority ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "User Authority Goes Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "BECOME A SELLER");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, " Land Preferences ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "County");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](45, SettingsComponent_option_45_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](50, SettingsComponent_option_50_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, "Land Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](56, SettingsComponent_option_56_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "UPDATE LAND PREFERENCES");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, " Payment Info ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](67, "Amount Payable");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](69, "12000");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "Billing Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "MONTHLY");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](77, "Payment Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](79, "PAID");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "Last Payment Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, "Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "INITIATE PAYMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.counties);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.residenceTypes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.landSizes);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "7jBf":
    /*!*******************************!*\
      !*** ./src/app/counties.json ***!
      \*******************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, default */

    /***/
    function jBf(module) {
      module.exports = JSON.parse("[{\"name\":\"Mombasa\",\"code\":1,\"capital\":\"Monbasa City\"},{\"name\":\"Kwale\",\"code\":2,\"capital\":\"Kwale\"},{\"name\":\"Kilifi\",\"code\":3,\"capital\":\"Kilifi\"},{\"name\":\"Tana River\",\"code\":4,\"capital\":\"Hola\"},{\"name\":\"Lamu\",\"code\":5,\"capital\":\"Lamu\"},{\"name\":\"Taita-Taveta\",\"code\":6,\"capital\":\"Voi\"},{\"name\":\"Garissa\",\"code\":7,\"capital\":\"Garissa\"},{\"name\":\"Wajir\",\"code\":8,\"capital\":\"Wajir\"},{\"name\":\"Mandera\",\"code\":9,\"capital\":\"Mandera\"},{\"name\":\"Marsabit\",\"code\":10,\"capital\":\"Marsabit\"},{\"name\":\"Isiolo\",\"code\":11,\"capital\":\"Isiolo\"},{\"name\":\"Meru\",\"code\":12,\"capital\":\"Meru\"},{\"name\":\"Tharaka-Nithi\",\"code\":13,\"capital\":\"Chuka\"},{\"name\":\"Embu\",\"code\":14,\"capital\":\"Embu\"},{\"name\":\"Kitui\",\"code\":15,\"capital\":\"Kitui\"},{\"name\":\"Machakos\",\"code\":16,\"capital\":\"Machakos\"},{\"name\":\"Makueni\",\"code\":17,\"capital\":\"Wote\"},{\"name\":\"Nyandarua\",\"code\":18,\"capital\":\"Ol Kalou\"},{\"name\":\"Nyeri\",\"code\":19,\"capital\":\"Nyeri\"},{\"name\":\"Kirinyaga\",\"code\":20,\"capital\":\"Kerugoya/Kutus\"},{\"name\":\"Murang'a\",\"code\":21,\"capital\":\"Murang'a\"},{\"name\":\"Kiambu\",\"code\":22,\"capital\":\"Kiambu\"},{\"name\":\"Turkana\",\"code\":23,\"capital\":\"Lodwar\"},{\"name\":\"West Pokot\",\"code\":24,\"capital\":\"Kapenguria\"},{\"name\":\"Samburu\",\"code\":25,\"capital\":\"Maralal\"},{\"name\":\"Trans-Nzoia\",\"code\":26,\"capital\":\"Kitale\"},{\"name\":\"Uasin Gishu\",\"code\":27,\"capital\":\"Eldoret\"},{\"name\":\"Elgeyo-Marakwet\",\"code\":28,\"capital\":\"Iten\"},{\"name\":\"Nandi\",\"code\":29,\"capital\":\"Kapsabet\"},{\"name\":\"Baringo\",\"code\":30,\"capital\":\"Kabarnet\"},{\"name\":\"Laikipia\",\"code\":31,\"capital\":\"Rumuruti\"},{\"name\":\"Nakuru\",\"code\":32,\"capital\":\"Nakuru\"},{\"name\":\"Narok\",\"code\":33,\"capital\":\"Narok\"},{\"name\":\"Kajiado\",\"code\":34},{\"name\":\"Kericho\",\"code\":35,\"capital\":\"Kericho\"},{\"name\":\"Bomet\",\"code\":36,\"capital\":\"Bomet\"},{\"name\":\"Kakamega\",\"code\":37,\"capital\":\"Kakamega\"},{\"name\":\"Vihiga\",\"code\":38,\"capital\":\"Vihiga\"},{\"name\":\"Bungoma\",\"code\":39,\"capital\":\"Bungoma\"},{\"name\":\"Busia\",\"code\":40,\"capital\":\"Busia\"},{\"name\":\"Siaya\",\"code\":41,\"capital\":\"Siaya\"},{\"name\":\"Kisumu\",\"code\":42,\"capital\":\"Kisumu\"},{\"name\":\"Homa Bay\",\"code\":43,\"capital\":\"Homa Bay\"},{\"name\":\"Migori\",\"code\":44,\"capital\":\"Migori\"},{\"name\":\"Kisii\",\"code\":45,\"capital\":\"Kisii\"},{\"name\":\"Nyamira\",\"code\":46,\"capital\":\"Nyamira\"},{\"name\":\"Nairobi\",\"code\":47,\"capital\":\"Nairobi City\"}]");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 176,
        vars: 0,
        consts: [[1, "container"], [1, "card", "shadow", "my-3", "p-5", "bg-light"], [1, "card-body"], [1, "text-center", "text-danger", "py-3", 2, "font-size", "35px"], [1, "row", "g-0"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], ["src", "../../assets/images/bg1.svg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "text-muted"], [1, "pt-5"], [1, "team"], [1, "m-3", "text-danger"], [1, "mx-auto", 2, "border", "2px solid rgb(160, 16, 16)", "border-radius", "5px", "max-width", "500px"], [1, "row", "justify-content-center"], [1, "col-md-3", "shadow", "mx-3", "my-3"], [1, "img-box"], ["src", "../../assets/images/ProfilePic.svg", 1, "img-responsive", 2, "width", "100px"], [1, "text-warning"], [1, "text-muted"], [1, "text-center"], ["href", "", 1, "text-primary"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], ["href", "", 1, "text-success", 2, "text-decoration", "none"], [1, "fab", "fa-whatsapp"], ["href", "", 2, "text-decoration", "none", "color", "#C13584"], [1, "fab", "fa-instagram"], [1, "fab", "fa-facebook-f"], [1, "text-danger"], [1, "newsletter", "p-2", "pt-md-2", "pb-md-4", "m-4"], [1, "row"], [1, "col-lg-7", "col-md-7", "col-sm-12", "col-xs-12", "mx-auto", "text-center"], [1, "input-group", "p-3"], ["type", "email", "placeholder", "Type your email address", 1, "form-control"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-danger"], [1, "col-md-2", "col-6"], ["src", "", "alt", "companies logo here", 1, "img-fluid", "feature-img", "p-2"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " We do what we do best to ensure you are satisfied. If you want a home, land or apartment, dont worry, we got your back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum praesentium sunt laboriosam autem! Autem eaque ut quia voluptates itaque possimus amet hic commodi ipsa. Harum soluta autem accusamus quidem excepturi? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Our Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "hr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Brian Kitunda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Software Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Aweseome programmer with good analytical skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Amos Marwa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Programmer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Aweseome programmer with good analytical skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Emmanuel Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Web Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Aweseome programmer with good analytical skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Bravin Dan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Tester");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Aweseome programmer with good analytical skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Ken");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Quality Assuarance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Aweseome programmer with good analytical skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h3", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Our Goal and Vision");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "hr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "We do what we do best to ensure you are satisfied. If you want a home, land or apartment, dont worry, we got your back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum praesentium sunt laboriosam autem! Autem eaque ut quia voluptates itaque possimus amet hic commodi ipsa. Harum soluta autem accusamus quidem excepturi? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "section", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " Enroll for our newsletter to get notified on new items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Enroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h4", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Our Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".team[_ngcontent-%COMP%]{\n    margin: 75px 0;\n  }\n  h2[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n    color:red;\n    padding-bottom: 10px;\n  }\n  h2[_ngcontent-%COMP%]:after{\n    content: '';\n    display: block;\n    height: 3px;\n    width: 150px;\n    margin: 10px auto;\n  }\n  .container[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n  h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\n    font-weight: lighter;\n  }\n  h5[_ngcontent-%COMP%]{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    letter-spacing: 2px;\n  }\n  img[_ngcontent-%COMP%]{\n    border-radius: 100px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0VBQXdFO0lBQ3hFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbXtcbiAgICBtYXJnaW46IDc1cHggMDtcbiAgfVxuICBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBjb2xvcjpyZWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgaDI6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIC5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGgxLGgze1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gIGg1e1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG4gIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "9yQq":
    /*!****************************************************************!*\
      !*** ./src/app/recover-password/recover-password.component.ts ***!
      \****************************************************************/

    /*! exports provided: RecoverPasswordComponent */

    /***/
    function yQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function () {
        return RecoverPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      "ccyI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0() {
        return ["/register"];
      };

      function RecoverPasswordComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RecoverPasswordComponent_div_0_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.requestReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RecoverPasswordComponent_div_0_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Recover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Don't have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
        }
      }

      function RecoverPasswordComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RecoverPasswordComponent_div_1_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RecoverPasswordComponent_div_1_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "small", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Don't have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
        }
      }

      var RecoverPasswordComponent = /*#__PURE__*/function () {
        function RecoverPasswordComponent(auth, // to extract params
        activatedRoute) {
          _classCallCheck(this, RecoverPasswordComponent);

          this.auth = auth;
          this.activatedRoute = activatedRoute;
          this.state = 'init';
        }

        _createClass(RecoverPasswordComponent, [{
          key: "requestReset",
          value: function requestReset() {
            this.auth.requestReset(this.email).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            // prepare the data
            var data = {
              newPassword: this.newPassword,
              resetKey: this.resetKey
            };
            this.auth.changePassword(data).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // extracting the key
            this.activatedRoute.queryParams.subscribe(function (params) {
              _this2.resetKey = params['key'];
            }); // if there is a key, change state

            if (this.resetKey) {
              this.state = 'finish';
            }
          }
        }]);

        return RecoverPasswordComponent;
      }();

      RecoverPasswordComponent.??fac = function RecoverPasswordComponent_Factory(t) {
        return new (t || RecoverPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      RecoverPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RecoverPasswordComponent,
        selectors: [["app-recover-password"]],
        decls: 2,
        vars: 2,
        consts: [["class", "container mt-5 py-5", 4, "ngIf"], [1, "container", "mt-5", "py-5"], [1, "card", "bg-light", "shadow", "col-md-6", "mx-auto"], [1, "card-header", "bg-light"], [1, "text-danger", "text-center"], [1, "card-body"], ["id", "login_form", 1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-12"], [1, "form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "email@email.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "email_error", 1, "form-text", "text-muted"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-outline-danger"], [1, "card-footer", "bg-light"], [1, "text-muted"], [1, "text-danger", 3, "routerLink"], ["name", "password", "type", "password", "id", "password", "placeholder", "*************", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "password_error", 1, "form-text", "text-muted"], ["type", "password", "id", "confirm-password", "placeholder", "*************", 1, "form-control"], ["id", "confirm_password_error", 1, "form-text", "text-muted"]],
        template: function RecoverPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, RecoverPasswordComponent_div_0_Template, 20, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RecoverPasswordComponent_div_1_Template, 25, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.state == "init");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.state == "finish");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "L3Cm":
    /*!**********************************!*\
      !*** ./src/app/token.service.ts ***!
      \**********************************/

    /*! exports provided: TokenService */

    /***/
    function L3Cm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TokenService = /*#__PURE__*/function () {
        function TokenService() {
          _classCallCheck(this, TokenService);

          this.JWT_KEY = 'id_token';
        } // tslint:disable-next-line: max-line-length


        _createClass(TokenService, [{
          key: "saveToken",
          value: function saveToken(token) {
            localStorage.setItem(this.JWT_KEY, token);
            sessionStorage.setItem(this.JWT_KEY, token);
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            localStorage.removeItem(this.JWT_KEY);
            sessionStorage.removeItem(this.JWT_KEY);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem(this.JWT_KEY) || sessionStorage.getItem(this.JWT_KEY);
          }
        }]);

        return TokenService;
      }();

      TokenService.??fac = function TokenService_Factory(t) {
        return new (t || TokenService)();
      };

      TokenService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: TokenService,
        factory: TokenService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'realestate-client';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "W9rS":
    /*!****************************************!*\
      !*** ./src/app/land/land.component.ts ***!
      \****************************************/

    /*! exports provided: LandComponent */

    /***/
    function W9rS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandComponent", function () {
        return LandComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/lands", 4];
      };

      var LandComponent = /*#__PURE__*/function () {
        function LandComponent() {
          _classCallCheck(this, LandComponent);
        }

        _createClass(LandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return LandComponent;
      }();

      LandComponent.??fac = function LandComponent_Factory(t) {
        return new (t || LandComponent)();
      };

      LandComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LandComponent,
        selectors: [["app-land"]],
        decls: 60,
        vars: 2,
        consts: [[1, "position-relative", "overflow-hidden", "p-3", "p-md-5", "m-md-3", "text-center", "bg-light", "topImg"], [1, "col-md-5", "p-lg-5", "mx-auto", "my-5"], [1, "display-4", "fw-normal", "text-danger"], [1, "lead", "fw-bold", "text-secondary"], ["href", "#search", 1, "btn", "btn-danger"], [1, "product-device", "shadow-sm", "d-none", "d-md-block"], [1, "product-device", "product-device-2", "shadow-sm", "d-none", "d-md-block"], ["id", "search", 1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], ["id", "search_form", "onsubmit", "return false", 1, "col-lg-auto", "mb-3", "mb-lg-0", "me-lg-3"], ["type", "search", "id", "search", "placeholder", "Enter location", 1, "form-control", "form-control-dark"], ["id", "search_error", 1, "form-text", "text-muted"], [1, "text-center", "mt-2"], ["type", "submit", 1, "btn", "btn-outline-danger", "me-2"], [1, "fas", "fa-search-location"], ["id", "land", 1, "container"], [1, "card", "text-center", "mt-4", 2, "border-style", "none"], [1, "card-body"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4"], [1, "col"], [1, "card", "shadow", "h-100"], ["src", "../../assets/images/house4.jpg", "height", "300", "alt", "...", 1, "card-img-top"], [1, "card-body", "text-muted"], [1, "card-title"], [1, "fas", "fa-map-marker-alt"], [2, "list-style", "none"], [1, "card-text"], [1, "fas", "fa-sitemap"], [1, "fas", "fa-arrows-alt"], [1, "fas", "fa-dollar-sign"], [1, "btn", "btn-danger", "w-50", 3, "routerLink"], [1, "fas", "fa-angle-double-right"], ["aria-label", "Page navigation example", 1, "mt-3"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", "text-danger"]],
        template: function LandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Land");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u201CIt\u2019s tangible, it\u2019s solid, it\u2019s beautiful. It\u2019s artistic, from our standpoint, and we just love real estate.\u201D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Find land");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\xA0Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\xA0Size 0.05Ha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\xA0Dimension 100m by 500m");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\xA0Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "nav", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "ul", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".topImg[_ngcontent-%COMP%]{\n    background-image: url('bg1.svg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: scroll;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJsYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wSW1ne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMS5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDsgIFxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./recover-password/recover-password.component */
      "9yQq");
      /* harmony import */


      var _listing_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./listing/listing.component */
      "0cUJ");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./detail/detail.component */
      "rU/F");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _land_land_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./land/land.component */
      "W9rS");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./settings/settings.component */
      "70H3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_10__["RecoverPasswordComponent"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_11__["ListingComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"], _land_land_component__WEBPACK_IMPORTED_MODULE_14__["LandComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.??fac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 66,
        vars: 0,
        consts: [[1, "head", "pb-5"], [1, "container", "py-5"], [1, "card", "shadow"], [1, "card-body"], [1, "font-weight-light", "text-center", "py-3", 2, "color", "rgb(180, 16, 16)", "font-size", "29px"], [1, "row"], [1, "col-lg-6", "col-md-12", "col-sm-12", "col-12", "text-center"], [1, "row", "pt-3"], [1, "col-12"], [2, "color", "rgb(180, 16, 16)", "font-size", "20px"], [1, "fas", "fa-map-marked-alt", "text-danger"], [1, "fas", "fa-phone-volume", "text-danger"], [1, "fas", "fa-users", "text-danger"], [2, "color", "rgb(180, 16, 16)"], ["href", "", 1, "text-primary", 2, "text-decoration", "none"], [1, "fab", "fa-twitter"], ["href", "", 1, "text-success", 2, "text-decoration", "none"], [1, "fab", "fa-whatsapp"], ["href", "", 2, "text-decoration", "none", "color", "#C13584"], [1, "fab", "fa-instagram"], [1, "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "form-row"], [1, "form-floating", "mb-3"], ["type", "text", "placeholder", "Name", 1, "form-control", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], ["for", "name"], ["type", "email", "placeholder", "Name@example.com", 1, "form-control", "col-lg-6", "col-md-12", "col-sm-12", "col-12"], [1, "form-floating"], ["rows", "5", "cols", "10", 1, "form-control", 2, "height", "180px"], [1, "btn", "btn-danger", "mt-3", "col-lg-12", "col-md-12", "col-sm-12", "col-12"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\xA0Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Maseno University,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " New TB building,3rd floor,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Siriba,Maseno ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Mon-fri 8am-6pm. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\xA0Telephone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "+254115464825,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " +254100983258,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " +25479780708 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\xA0Social");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Whatsapp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ccyI":
    /*!*********************************!*\
      !*** ./src/app/auth.service.ts ***!
      \*********************************/

    /*! exports provided: AuthService */

    /***/
    function ccyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants */
      "l207");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthService = /*#__PURE__*/function () {
        // we need to use HttpClient -> HttpClientModule
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.USER_KEY = "user";
        }

        _createClass(AuthService, [{
          key: "identity",
          value: function identity(force) {
            var user = this.getUserFromStorage();

            if (force) {
              user = null;
            }

            if (user) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
            } else {
              return this.getUser();
            }
          }
        }, {
          key: "getToken",
          value: function getToken(data) {
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_ENDPOINT + "auth", data);
          }
        }, {
          key: "registerUser",
          value: function registerUser(data) {
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_ENDPOINT + "user", data, {
              responseType: "text"
            });
          }
        }, {
          key: "requestReset",
          value: function requestReset(email) {
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_ENDPOINT + "reset/request", email, {
              responseType: "text"
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_ENDPOINT + "reset/finish", data, {
              responseType: "text"
            });
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            localStorage.setItem(this.USER_KEY, user);
          }
        }, {
          key: "getUserFromStorage",
          value: function getUserFromStorage() {
            return JSON.parse(localStorage.getItem(this.USER_KEY));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_ENDPOINT + "account");
          }
        }]);

        return AuthService;
      }();

      AuthService.??fac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: AuthService,
        factory: AuthService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 60,
        vars: 0,
        consts: [[1, "container", "pt-4", "my-md-5", "pt-md-5"], [1, "row"], [1, "col-12", "col-md"], ["src", "", "alt", "logo image", "width", "24", "height", "19", 1, "mb-2"], [1, "d-block", "mb-3", "text-muted"], [1, "col-6", "col-md"], [1, "text-danger"], [1, "list-unstyled", "text-small"], [1, "mb-1"], ["href", "#", 1, "link-secondary", "text-decoration-none"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "small", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xA9 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Land");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Rentals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Homes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Stuff for developers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Another one");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Last time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Resource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Resource name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Another resource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Final resource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Locations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Privacy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/about"];
      };

      var _c2 = function _c2() {
        return ["/contact"];
      };

      var _c3 = function _c3() {
        return ["/login"];
      };

      var _c4 = function _c4() {
        return ["/register"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 22,
        vars: 12,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-danger"], [1, "container-fluid"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "ms-auto"], [1, "btn", "btn-outline-light", "mx-1", 3, "routerLink"], [1, "btn", "btn-outline-warning", "mx-1", 3, "routerLink"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Penta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c4));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "l207":
    /*!******************************!*\
      !*** ./src/app/constants.ts ***!
      \******************************/

    /*! exports provided: Constants */

    /***/
    function l207(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.API_ENDPOINT = "http://localhost:8080/api/";
      Constants.LAND_SIZES = ["1/4 acre", "1/8 acre", "1/2 acre", "1 acre", "100 by 100"];
      Constants.RESIDENCE_TYPES = ["URBAN", "RURAL"];
      /***/
    },

    /***/
    "rU/F":
    /*!********************************************!*\
      !*** ./src/app/detail/detail.component.ts ***!
      \********************************************/

    /*! exports provided: DetailComponent */

    /***/
    function rUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
        return DetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/lands", 2];
      };

      var DetailComponent = /*#__PURE__*/function () {
        function DetailComponent() {
          _classCallCheck(this, DetailComponent);
        }

        _createClass(DetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            window.scrollTo(0, 0);
          }
        }]);

        return DetailComponent;
      }();

      DetailComponent.??fac = function DetailComponent_Factory(t) {
        return new (t || DetailComponent)();
      };

      DetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DetailComponent,
        selectors: [["app-detail"]],
        decls: 59,
        vars: 2,
        consts: [[1, "container"], [1, "card", "my-3", "shadow", "h-100", 2, "border-style", "none"], [1, "row", "g-0"], [1, "col-md-6"], ["src", "../../assets/images/house4.jpg", "height", "700", "width", "700", "alt", "...", 1, "img-fluid"], [1, "card-body"], [1, "card-title", "text-muted"], [1, "card-text", "text-muted"], [1, "card-text"], [1, "text-muted"], [1, "col-9", "mx-auto"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-home", "type", "button", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-link", "active", "text-danger"], ["id", "nav-profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-profile", "type", "button", "role", "tab", "aria-controls", "nav-profile", "aria-selected", "false", 1, "nav-link", "text-danger"], ["id", "nav-contact-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-contact", "type", "button", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-link", "text-danger"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "nav-profile", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 1, "tab-pane", "fade"], ["id", "nav-contact", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], [1, "text-danger", "text-center"], [1, "row", "row-cols-1", "row-cols-md-4", "g-4"], [1, "col"], [1, "card", "text-center", "h-100"], ["src", "../../assets/images/house4.jpg", "height", "300", "alt", "...", 1, "card-img-top"], [1, "card-body", "text-muted"], [1, "card-title"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-bed"], [1, "fas", "fa-shower"], [1, "fas", "fa-ruler-combined"], [1, "fas", "fa-dollar-sign"], [1, "btn", "btn-danger", "w-50", 3, "routerLink"], [1, "fas", "fa-angle-double-right"]],
        template: function DetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "small", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Additional Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati alias esse placeat accusamus quaerat libero qui pariatur sapiente consequatur, corporis error id nulla facere sunt nobis! Fuga, cumque provident. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati alias esse placeat accusamus quaerat libero qui pariatur sapiente consequatur, corporis error id nulla facere sunt nobis! Fuga, cumque provident. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati alias esse placeat accusamus quaerat libero qui pariatur sapiente consequatur, corporis error id nulla facere sunt nobis! Fuga, cumque provident. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h5", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "YOU MIGHT ALSO LIKE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\xA0Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\xA0bd ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\xA0ba ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\xA01175 sqft ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "\xA0Price ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail/detail.component */
      "rU/F");
      /* harmony import */


      var _land_land_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./land/land.component */
      "W9rS");
      /* harmony import */


      var _listing_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listing/listing.component */
      "0cUJ");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./recover-password/recover-password.component */
      "9yQq");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./settings/settings.component */
      "70H3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_5__["ListingComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
      }, {
        path: 'recover-password',
        component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_7__["RecoverPasswordComponent"]
      }, {
        path: 'lands/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
      }, {
        path: 'land',
        component: _land_land_component__WEBPACK_IMPORTED_MODULE_4__["LandComponent"]
      }, {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      "ccyI");
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../token.service */
      "L3Cm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/recover-password"];
      };

      var _c1 = function _c1() {
        return ["/register"];
      };

      var LoginComponent = /*#__PURE__*/function () {
        // we will be using FormBuilder -> ReactiveFormsModule
        // wire -> in a constructor
        function LoginComponent(formBuilder, auth, tokenService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.auth = auth;
          this.tokenService = tokenService;
          this.loginData = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
        }

        _createClass(LoginComponent, [{
          key: "login",
          value: function login() {
            var _this3 = this;

            // call the service -> have the callbacks
            this.auth.getToken(this.loginData.value).subscribe(function (res) {
              _this3.tokenService.saveToken(res.idToken); // now get the account


              _this3.auth.getUser().subscribe(function (res) {
                _this3.auth.saveUser(res); // get the user authority


                var authority = res.authority; // redirect a user based on authority
              }, function (err) {
                console.error(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 27,
        vars: 5,
        consts: [[1, "container", "mt-4"], [1, "card", "bg-light", "shadow", "col-md-6", "mx-auto"], [1, "card-header", "bg-light"], [1, "text-danger", "text-center"], [1, "card-body"], ["id", "login_form", 1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "form-label"], ["formControlName", "email", "type", "text", "id", "email", "placeholder", "email@email.com", 1, "form-control"], ["id", "email_error", 1, "form-text", "text-muted"], ["formControlName", "password", "type", "password", "id", "password", "placeholder", "************", 1, "form-control"], ["id", "password_error", 1, "form-text", "text-muted"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-outline-danger"], [1, "text-danger", 3, "routerLink"], [1, "card-footer", "bg-light"], [1, "text-muted"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Login Here!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "small", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](4, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map