YUI.add("inputex-ipv4",function(e,t){YUI.add("inputex-ipv4",function(e){var t=e.Lang,n=e.inputEx;n.IPv4Field=function(e){n.IPv4Field.superclass.constructor.call(this,e)},e.extend(n.IPv4Field,n.StringField,{setOptions:function(e){n.IPv4Field.superclass.setOptions.call(this,e),this.options.messages.invalid=n.messages.invalidIPv4,this.options.regexp=/^(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)(?:\.(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)){3}$/}}),n.registerType("IPv4",n.IPv4Field,[])},"3.1.0",{requires:["inputex-string"]})},"@VERSION@");