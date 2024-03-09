try{
	
		pageSubtype = _satellite.getVar("pageSubtype");
		articleAccess = _satellite.getVar("articleAccess");
		metisBase = "https://wiley.met.vgwort.de/na/";
		metisDOI = _satellite.getVar('articleDoi').replace("/","-");
		var metisPixel = document.createElement("img");
		metisMinLength = _satellite.getVar('articleLength')>1800;
		metisMinLengthPage = pageSubtype=="Abstract" || pageSubtype=="Full Text" ? true : false;
		metisFreePage = pageSubtype=="Abstract" || articleAccess=="free" || articleAccess=="open" ? true : false;
		metisPWPage = articleAccess=="full" ? true : false;
		pdfPage = pageSubtype=="FramedPDF" || articleAccess=="RC PDF" ?  true: false;
  	publisherID = "vgzm.60650-"
		
		if(metisFreePage){
			if(pdfPage || (metisMinLengthPage && metisMinLength)){
				metisPixel.src = metisBase + publisherID + metisDOI;
				document.body.appendChild(metisPixel);
			}
		}
		if(metisPWPage){
			if(pdfPage || (pageSubtype=="Full Text" && metisMinLength)){
				metisPixel.src = metisBase + "pw-" + publisherID + metisDOI;
				document.body.appendChild(metisPixel);
			}
		}
			


}
catch(e){

}

