YUI.add("inputex-inplaceedit",function(e,t){YUI.add("inputex-inplaceedit",function(e){var t=e.Lang,n=e.inputEx,r="inputEx-";n.InPlaceEdit=function(e){n.InPlaceEdit.superclass.constructor.call(this,e),this.publish("openEditor"),this.publish("closeEditor")},e.extend(n.InPlaceEdit,n.Field,{setOptions:function(e){n.InPlaceEdit.superclass.setOptions.call(this,e),this.options.visu=e.visu,this.options.editorField=e.editorField,this.options.buttonConfigs=e.buttonConfigs||[{type:"submit",value:n.messages.okEditor,className:"inputEx-Button "+r+"OkButton",onClick:{fn:this.onOkEditor,scope:this}},{type:"link",value:n.messages.cancelEditor,className:"inputEx-Button "+r+"CancelLink",onClick:{fn:this.onCancelEditor,scope:this}}],this.options.animColors=e.animColors||null},renderComponent:function(){this.renderVisuDiv(),this.renderEditor()},renderEditor:function(){var t;this.editorContainer=n.cn("div",{className:r+"editor"},{display:"none"}),this.editorField=n(this.options.editorField,this);var i=this.editorField.getEl();this.editorContainer.appendChild(i),e.one(i).addClass(r+"editorDiv"),this.buttons=[];for(t=0;t<this.options.buttonConfigs.length;t++){var s=this.options.buttonConfigs[t];s.parentEl=this.editorContainer,this.buttons.push(new n.widget.Button(s))}this.editorContainer.appendChild(n.cn("div",null,{clear:"both"})),this.fieldContainer.appendChild(this.editorContainer)},onVisuMouseOver:function(e){if(this.disabled)return;this.colorAnim&&this.colorAnim.stop(!0),n.sn(this.formattedContainer,null,{backgroundColor:this.options.animColors.from})},onVisuMouseOut:function(t){var n;if(this.disabled)return;this.colorAnim&&this.colorAnim.stop(!0);if(!this.options.animColors)return;n={node:this.formattedContainer},this.options.animColors.from&&(n.from={backgroundColor:this.options.animColors.from}),this.options.animColors.from&&(n.to={backgroundColor:this.options.animColors.to}),this.colorAnim=new e.Anim(n);var r=this;this.colorAnim.on("end",function(){e.one(r.formattedContainer).setStyle("backgroundColor","")}),this.colorAnim.run()},renderVisuDiv:function(){this.formattedContainer=n.cn("div",{className:"inputEx-InPlaceEdit-visu"}),t.isFunction(this.options.formatDom)?this.formattedContainer.appendChild(this.options.formatDom(this.options.value)):t.isFunction(this.options.formatValue)?this.formattedContainer.innerHTML=this.options.formatValue(this.options.value):this.formattedContainer.innerHTML=t.isUndefined(this.options.value)?n.messages.emptyInPlaceEdit:this.options.value,this.fieldContainer.appendChild(this.formattedContainer)},initEvents:function(){e.one(this.formattedContainer).on("click",this.openEditor,this,!0),this.options.animColors&&(e.one(this.formattedContainer).on("mouseover",this.onVisuMouseOver,this),e.one(this.formattedContainer).on("mouseout",this.onVisuMouseOut,this));if(this.editorField.el){var t=this;e.on("keyup",function(e){t.onKeyUp(e)},"#"+e.one(this.editorField.el).get("id")),e.on("keydown",function(e){t.onKeyDown(e)},"#"+e.one(this.editorField.el).get("id"))}},onKeyUp:function(e){e.keyCode===13&&this.onOkEditor(e),e.keyCode===27&&this.onCancelEditor(e)},onKeyDown:function(e){e.keyCode===9&&this.onOkEditor(e)},onOkEditor:function(e){e&&e.halt();var t=this.editorField.getValue();this.setValue(t),this.closeEditor();var n=this;setTimeout(function(){n.fire("updated",t)},50)},onCancelEditor:function(e){e&&e.halt(),this.closeEditor()},closeEditor:function(){this.editorContainer.style.display="none",this.formattedContainer.style.display="",this.fire("closeEditor")},enable:function(){this.disabled=!1,n.sn(this.formattedContainer,{className:"inputEx-InPlaceEdit-visu"})},disable:function(){this.disabled=!0,n.sn(this.formattedContainer,{className:"inputEx-InPlaceEdit-visu-disable"})},openEditor:function(){if(this.disabled)return;var e=this.getValue();this.editorContainer.style.display="",this.formattedContainer.style.display="none",t.isUndefined(e)||this.editorField.setValue(e),this.editorField.focus(),this.editorField.el&&t.isFunction(this.editorField.el.setSelectionRange)&&!!e&&!!e.length&&this.editorField.el.setSelectionRange(0,e.length),this.fire("openEditor")},getValue:function(){var e=this.editorContainer.style.display==="";return e?this.editorField.getValue():this.value},setValue:function(e,r){this.value=e,t.isUndefined(e)||e===""?n.renderVisu(this.options.visu,n.messages.emptyInPlaceEdit,this.formattedContainer):n.renderVisu(this.options.visu,this.value,this.formattedContainer),this.editorContainer.style.display===""&&this.editorField.setValue(e),n.InPlaceEdit.superclass.setValue.call(this,e,r)},close:function(){this.editorContainer.style.display="none",this.formattedContainer.style.display="",this.fire("openEditor")}}),n.registerType("inplaceedit",n.InPlaceEdit,[{type:"type",label:"Editor",name:"editorField"}])},"3.1.0",{requires:["inputex-field","inputex-button","anim","inputex-visus"]})},"@VERSION@");