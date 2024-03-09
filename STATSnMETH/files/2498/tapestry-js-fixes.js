// Copyright 2011 Howard M. Lewis Ship
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
document.observe('dom:loaded', function() {
	Tapestry.ZoneManager.addMethods({
		processReply : function(reply) {
			Tapestry.loadScriptsInReply(reply, function() {
				/*
				 * In a multi-zone update, the reply.content may be missing, in
				 * which case, leave the curent content in place. TAP5-1177
				 */
				reply.content != undefined && this.show(reply.content);
	
				/*
				 * zones is an object of zone ids and zone content that will be
				 * present in a multi-zone update response.
				 */
				reply.zones && Object.keys(reply.zones).each(function(zoneId) {
					var manager = Tapestry.findZoneManagerForZone(zoneId);
	
					if (manager) {
						var zoneContent = reply.zones[zoneId];
						manager.show(zoneContent);
					}
				});
			}.bind(this));
		}
	});
	Tapestry.FieldEventManager = Class.create(Tapestry.FieldEventManager, {
			showValidationMessage: function(message) {
				$T(this.field).validationError = true;
				$T(this.field.form).validationError = true;

				this.field.addClassName("t-error");

				this.getLabel() && this.getLabel().addClassName("t-error");

				var icon = this.getIcon();
				
				var predefinedError = document.getElementById(this.field.id + "Error");

				if (icon && !icon.visible()) {
					new Effect.Appear(this.icon);
				}

				if (this.errorPopup == undefined)
				{
					if (predefinedError !== null)
					{
						this.errorPopup = predefinedError;
					}
					else
					{
						this.errorPopup = new Tapestry.ErrorPopup(this.field);
					}
				}
				if (predefinedError !== null)
				{
					this.errorPopup.removeClassName("display-none");
				}
				else
				{
					this.errorPopup.showMessage(message);
				}
			},
			removeDecorations : function() {
				console.log("hide");
				this.field.removeClassName("t-error");

				this.getLabel() && this.getLabel().removeClassName("t-error");

				this.getIcon() && this.getIcon().hide();

				if (this.errorPopup)
					this.errorPopup.addClassName("display-none");
			}
		});

	if (Tapestry.Palette !== undefined) {
		Tapestry.Palette.prototype.updateHidden = function() {
			// Every value in the selected list (whether enabled or not) is combined to
			// form the value.
			var values = $A(this.selected).map(function(o) {
				return o.value;
			});
		
			this.hidden.value = Object.toJSON(values);
		};
	}
});