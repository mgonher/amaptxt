/* amap.txt was developed by mgonher */
/* visit aquicoco.com */ 
/* follow me on twitter -> GonherMario */
/* follow me on Instagram -> mgonher */


// VARS
var sidebar;
var navbar;
var skipLink;
var contentAlign;
var first;


// READ DATA (AMAP.TXT)
var fs = require('fs');
fs.readFile('./generated-files/amap.txt', 'utf8', function(err, data) {
    if( err ){
        console.log(err)
    }
    else{
    	console.log("Starting reading amaptxt ...");
    	var commands = data.split(";");
    	//console.log(commands[0]);
		var max = 6;//max Found on line:s [x]
		for (var i = 0; i < max; i++) {
			var ip = i+1;
			
	    	if (/NAVBAR/.test(commands[i])){

	    		first = commands[i];
		    	first = first.replace("/** amap.txt **/", "");
		    	first = first.replace("NAVBAR=", "");

	    		if (/YES/.test(first)){
	    			first = first.replace("YES", "");

	    			if (/,/.test(first)){
	    				first = first.replace(",", "");
	    				sidebar = first.toLowerCase();
			    		console.log("\n > Sidebar is on the "+sidebar+" of the page.");
	    			}
	    			else{
	    				sidebar = first.toLowerCase();
			    		console.log("\n > Sidebar is on the "+sidebar+" of the page.");
	    			}

		    	}
		    	
	    	}
	    	if (/SIDEBAR/.test(commands[i])){

	    		first = commands[i];
		    	first = first.replace("/** amap.txt **/", "");
		    	first = first.replace("SIDEBAR=", "");

	    		if (/YES/.test(first)){
	    			first = first.replace("YES", "");

	    			if (/,/.test(first)){
	    				first = first.replace(",", "");
	    				sidebar = first.toLowerCase();
			    		console.log("\n > Sidebar is on the "+sidebar+" of the page.");
	    			}
	    			else{
	    				sidebar = first.toLowerCase();
			    		console.log("\n > Sidebar is on the "+sidebar+" of the page.");
	    			}

		    	}
		    	
	    	}
	    	if (/SKIP-LINK/.test(commands[i])){

	    		first = commands[i];
		    	first = first.replace("/** amap.txt **/", "");
		    	first = first.replace("SKIP-LINK=", "");

	    		if (/YES/.test(first)){
	    			first = first.replace("YES", "");
	    			skipLink = first.toLowerCase();
			    	console.log("\n > There's skip link on this page.");

		    	}
		    	
	    	}
	    	if (/CONTENT-ALIGN/.test(commands[i])){

	    		first = commands[i];
		    	first = first.replace("/** amap.txt **/", "");
		    	first = first.replace("CONTENT-ALIGN=", "");

	    		contentAlign = first.toLowerCase();
			    console.log("\n > Content is align at the "+contentAlign+" of the page.");
	    	}
	    	if (/<!-- END AMAPTXT -->/.test(commands[i])){
	    		first = commands[i];
	    		break;
	    	}

	    };
    	console.log("\nReading has finished successfully.");

    }
    
});



	
