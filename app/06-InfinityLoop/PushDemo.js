System.register(["@angular/core", "./BaseDemo", "ngEx/Global", "./do-check.cmp", "./timer.cmp"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, BaseDemo_1, Global_1, do_check_cmp_1, timer_cmp_1;
    var PushDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BaseDemo_1_1) {
                BaseDemo_1 = BaseDemo_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            },
            function (do_check_cmp_1_1) {
                do_check_cmp_1 = do_check_cmp_1_1;
            },
            function (timer_cmp_1_1) {
                timer_cmp_1 = timer_cmp_1_1;
            }],
        execute: function() {
            PushDemo = (function (_super) {
                __extends(PushDemo, _super);
                function PushDemo(cd, elmRef, render, zone) {
                    _super.call(this, cd, elmRef, render, zone, 'PushDemo');
                }
                PushDemo = __decorate([
                    Global_1.Global(),
                    core_1.Component({
                        selector: 'push-demo',
                        directives: [do_check_cmp_1.DoCheckComp, timer_cmp_1.TimerComp],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        styles: ["\n:host{display: block;text-align: left;margin: 8px;} \n.border{border: 1px solid black; padding: 8px;}"],
                        template: "\n    <div class=\"border\">\n        <do-check [name]=\"name\"></do-check>\n        <h3>Push Demo</h3>\n        Test: <input type=\"text\" [(ngModel)]=\"test\"> {{test}} <br>\n        Name: {{name}} <br>\n        User Name : {{user.name}} <br>\n        <button (click)=\"changeName()\">Change</button>\n        <button (click)=\"detach()\">Detach</button>\n        <button (click)=\"reattach()\">Reattach</button>\n        <button (click)=\"detectChanges()\">detectChanges</button>\n        <button (click)=\"markForCheck()\">markForCheck</button>        \n       <!-- <timer></timer>-->        \n    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
                ], PushDemo);
                return PushDemo;
            }(BaseDemo_1.BaseDemo));
            exports_1("PushDemo", PushDemo);
        }
    }
});
//# sourceMappingURL=PushDemo.js.map