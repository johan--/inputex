YUI.add("inputex-calendar-today-highlight-plugin",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}n.NS="todayHighlight",e.extend(n,e.Plugin.Base,{initializer:function(){var e=this.get("host");this._handle=this.afterHostMethod("_renderCustomRules",this._addClassOnToday),e.get("rendered")?this._addClassOnToday():this.afterHostMethod("renderUI",function(){this._addClassOnToday()})},destructor:function(){this._handle.detach();if(this.get("host").get("rendered")){var e=this.get("host"),t=e.get("contentBox").all(".yui3-calendar-grid");t.each(function(e){e.all(".yui3-calendar-today").removeClass("yui3-calendar-today")})}},_addClassOnToday:function(){var t=this.get("host"),n=0,r=new Date,i=r.getMonth(),s=r.getFullYear(),o,u;t.get("contentBox").all(".yui3-calendar-today").removeClass("yui3-calendar-today");for(n=0;n<t._paneNumber;n++){o=e.Date.addMonths(t.get("date"),n);if(o.getMonth()===i&&o.getFullYear()===s){u=t._dateToNode(r),u.addClass("yui3-calendar-today");break}}}}),e.namespace("Plugin").CalendarTodayHighlight=n},"@VERSION@",{requires:["plugin","calendar","datatype-date-math"],skinnable:!0});