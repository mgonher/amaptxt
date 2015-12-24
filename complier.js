/* amap.txt was developed by mgonher */
/* visit aquicoco.com */ 
/* follow me on twitter -> GonherMario */
/* follow me on Instagram -> mgonher */


// VARS
var sidebar;
var navbar;
var skipLink;
var contentAlign;
var ip;
var i;
var first;

// READ DATA (AMAP.TXT)
var fs = require('fs');
fs.readFile('./amap.txt', 'utf8', function(err, data) {
    if( err ){
        console.log(err)
    }
    else{
    	var commands = data.split(";");
    	//console.log(commands[0]);
		var max = 6;//max Found on line:s [x]
		for (i = 0; i < max; i++) {
			ip = i+1;
			
	    	if (/NAVBAR/.test(commands[i])){
	    		first = commands[i];
	    		first = first.replace("/** amap.txt **/", "");
	    		first = first.replace("NAVBAR=", "");
	    		navbar = first;
	    		console.log("Navbar value: "+navbar);
	    		console.log("Found on line: "+ip+"\n");
	    	}
	    	if (/SIDEBAR/.test(commands[i])){
	    		first = commands[i];
	    		first = first.replace("/** amap.txt **/", "");
	    		first = first.replace("SIDEBAR=", "");
	    		sidebar = first;
	    		console.log("Sidebar value: "+sidebar);
	    		console.log("Found on line: "+ip+"\n");
	    	}
	    	if (/SKIP-LINK/.test(commands[i])){
	    		first = commands[i];
	    		first = first.replace("/** amap.txt **/", "");
	    		first = first.replace("SKIP-LINK=", "");
	    		skipLink = first;
	    		console.log("SkipLink value: "+skipLink);
	    		console.log("Found on line: "+ip+"\n");
	    	}
	    	if (/CONTENT-ALIGN/.test(commands[i])){
	    		first = commands[i];
	    		first = first.replace("/** amap.txt **/", "");
	    		first = first.replace("CONTENT-ALIGN=", "");
	    		contentAlign = first;
	    		console.log("CONTENT-ALIGN value: "+contentAlign);
	    		console.log("Found on line: "+ip+"\n");
	    	}
	    	if (/<!-- END AMAPTXT -->/.test(commands[i])){
	    		first = commands[i];
	    		break;
	    	}
	    };
    }
    
});



	
