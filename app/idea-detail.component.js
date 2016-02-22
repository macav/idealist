System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var IdeaDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IdeaDetailComponent = (function () {
                function IdeaDetailComponent() {
                }
                IdeaDetailComponent = __decorate([
                    core_1.Component({
                        inputs: ['idea'],
                        selector: 'my-idea-detail',
                        template: "\n  <form *ngIf=\"idea\" class=\"form-horizontal\">\n    <h2>{{idea.title}} details!</h2>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">ID: </label>\n      <div class=\"col-xs-10\">\n        <p class=\"form-control-static\">{{idea.id}}</p>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Name: </label>\n      <div class=\"col-xs-10\">\n        <p class=\"form-control-static\">{{idea.title}}</p>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Description: </label>\n      <div class=\"col-xs-10\">\n        <p class=\"form-control-static\">{{idea.description}}</p>\n      </div>\n    </div>\n  </form>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], IdeaDetailComponent);
                return IdeaDetailComponent;
            }());
            exports_1("IdeaDetailComponent", IdeaDetailComponent);
        }
    }
});
//# sourceMappingURL=idea-detail.component.js.map