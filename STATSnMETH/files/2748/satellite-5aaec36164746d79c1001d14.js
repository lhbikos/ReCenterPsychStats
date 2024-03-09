if(window.digitalData && digitalData.search && WileyDTM && WileyDTM.searchData){
	if(digitalData.page.title.indexOf("[Earliest")>=0){
		dfrag= digitalData.page.title.substring(digitalData.page.title.indexOf("[Earliest")+11);
		WileyDTM.searchData.dateRange= dfrag.substring(0, dfrag.indexOf("]"))
	}
	if(digitalData.page.title.indexOf("[Publication Date")>=0){
		WileyDTM.searchData.dateRange= "Custom";
	}
}

