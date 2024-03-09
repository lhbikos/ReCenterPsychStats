digitalData = window.digitalData ? digitalData : {};
digitalData.event = digitalData.event || [];
var lastEventData;

digitalData.event.push = function (){
	var newLength =  Array.prototype.push.apply(this,arguments),
  		ev;
  
	if (arguments.length) {
		ev = arguments[0];

	    if (typeof ev === 'object') {
			if (typeof ev.eventData === 'object') {
				// send along entire eventData map
				_satellite.setVar('eventData',ev.eventData); 
			        window.console && console.log('Analytics eventData:');
			        window.console && console.log(ev.eventData);
        			lastEventData = ev.eventData;
        
			}
			if (typeof ev.eventName === 'string') {
				_satellite.track(ev.eventName);
			        window.console && console.log('Analytics eventName:');
			        window.console && console.log(ev.eventName);
			}
			digitalData.event.length=0; // TK refactor this later to handle multiple events
		} else {
	       	  _satellite.notify('No Analytics Event object - DataLayer Event requires a root object with eventName and optional eventData')
	  	}
	}
  return newLength;
 }

