
// this script iterates through a list of sites, and determines if they are found in the DTM variable "website" (derived from the data layer site ID)
// if found, GA is loaded with the GA account in the corresponding array (this script assumes all hubs accounts are in the same GA account.)

gaLoader = window.gaLoader ? window.gaLoader : {};
gaLoader.base = "UA-68565440-";
gaLoader.sites = ['anthrosource','aapm','agupubs','aasldpubs','aslopubs','bpspubs','esajournals','physoc','iubmb','ascpt','stemcellsjournals','theoncologist'];
gaLoader.accounts = ['3','12','2','4','6','11','7','5','8','9','10','14'];
gaLoader.load = function(){
	siteID = window._satellite && _satellite.getVar('website');
	siteIndex = -1;
  accountID = "";
	for(i=0;i<gaLoader.sites.length; i++){
			if(siteID.indexOf(gaLoader.sites[i])>=0){
				siteIndex = gaLoader.accounts[i];
        accountID = gaLoader.base + siteIndex;
			}
	}
  if(siteID.indexOf('awwa')>=0){
    window.customGASite = 'awwa';
    accountID = 'UA-36233426-1'
  }
  if(window._satellite && _satellite.getVar('pubDoi')=='10.1002/(ISSN)1549-490X'){
    window.customGASite = 'onco';
    accountID = 'UA-68565440-10';
  }
	
	if(siteIndex>=0 || window.customGASite){
		
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		if(window.ga){
		  ga('create', accountID, 'auto');
      
      if(window.customGASite && customGASite === 'awwa'){
        gaLoader.trackHubPV(false);
      }
      else{
      	 gaLoader.trackHubPV(true);
      }
      
		  
		} 
		
	}

}


gaLoader.trackHubPV = function(trackvars){
	try{ 
	  if(window.ga){



	  (function(){
		var params = document.location.search.replace("?","").split("&");
		for(i=0; i<params.length; i++){
			var kvs = params[i].split("=");
			if(kvs[0]=="campaign"){
				ga('set','campaignName',kvs[1]);
		  ga('set','campaignId',kvs[1]);
		  ga('set','campaignSource','wiley');
		  ga('set','campaignMedium','wiley');
			}
		}
	  })();

		var galocation = document.location.href;

      
	 if(_satellite.getVar('pageSubtype')  && _satellite.getVar('pageSubtype')==="Access Denial"){
		 galocation=document.location.protocol + "//" + document.location.host + document.location.pathname + "-accessdenied" + document.location.search + document.location.hash;
		 if(trackvars){
       ga('set', 'metric1', 1);
     }
		}
  if(trackvars){
		if(_satellite.getVar('pubDoi')){
			ga('set','dimension1',_satellite.getVar('pubDoi')); 
		}
		if(_satellite.getVar('pubTitle')){
			ga('set','dimension2',_satellite.getVar('pubTitle')); 
		}
		if(_satellite.getVar('articleDoi')){
			ga('set','dimension3',_satellite.getVar('articleDoi')); 
		}
		if(_satellite.getVar('articleTitle')){
			ga('set','dimension4',_satellite.getVar('articleTitle')); 
		}
  }
		if (document.location.href.indexOf("/epdf") < 1 ){
		  ga('send', 'pageview', galocation);
		 if(trackvars){
       ga('set','metric1',0);
		  ga('set','metric2',0);
		  ga('set','metric3',0);
		  ga('set','metric5',0);
     }
		  
		}

		
	  }
	}
	catch(e){}
}

gaLoader.load();