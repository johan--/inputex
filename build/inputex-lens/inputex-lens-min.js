YUI.add("inputex-lens",function(e,t){var n=e.Lang,r=e.inputEx;r.Lens=function(e){r.Lens.superclass.constructor.call(this,e)},e.extend(r.Lens,r.Group,{setOptions:function(e){var t,i,s="";r.Lens.superclass.setOptions.call(this,e);if(!this.options.fields)throw new Error("Missing 'fields' property in options");if(!n.isString(e.lens))for(t=0,i=this.options.fields.length;t<i;t++)s+="<div class='field-"+this.options.fields[t].name+"'></div>";this.options.lens=n.isString(e.lens)?e.lens:s,this.options.visus=e.visus},renderFields:function(t){var n,i,s,o,u,a;t.innerHTML=this.options.lens;for(n=0,i=this.options.fields.length;n<i;n++)s=e.one(t).all(".field-"+this.options.fields[n].name+" , div .field-"+this.options.fields[n].name),o=s.item(0),u={parentEl:o._node,editorField:this.options.fields[n],name:this.options.fields[n].name},this.options.visus&&(u.visu=this.options.visus[n]),a=new r.InPlaceEdit(u),this.inputs.push(a),a.options.name&&(this.inputsNames[a.options.name]=a),a.on("updated",this.onChange,this,!0)}}),r.registerType("lens",r.Lens,[])},"@VERSION@",{requires:["inputex-group","inputex-inplaceedit"],ix_provides:"lens"});
