/* amap.txt was developed by mgonher */
/* visit aquicoco.com */ 
/* follow me on twitter -> gonherMario */
/* follow me on Instagram -> mgonher */


// VARS
var sidebar;
var navbar;
var skipLink;
var contentAlign;

// ERRORS
var error1 = "NAVBAR not found. amaptxt must have it.";
var error2 = "SIDEBAR not found. amaptxt must have it.";
var error3 = "SKIP-LINK not found. amaptxt must have it.";
var error4 = "CONTENT-ALIGN not found. amaptxt must have it.";
var error5 = "NAVBAR must has a value.";
var error6 = "SIDEBAR must has a value.";
var error7 = "SKIP-LINK must has a value.";
var error8 = "CONTENT-ALIGN must has a value.";
var error9 = "File end (<!-- END AMAPTXT -->) not found. amaptxt must have it.";
var error10 = "File header not found. amaptxt must have it.";
var error11 = "There are white spaces.";
var err;
var err1;
var err2;
var err3;
var err4;
var err5;
var err6;
var err7;
var err8;
var err9;
var err10;
var err11;
var terr = 0; // Total Errors
var numErr;

// READ DATA (AMAP.TXT)
var fs = require('fs');
fs.readFile('./amap-for-validator-2.txt', 'utf8', function(err, data) {
    if( err ){
        console.log(err)
    }
    else{
		
    	
    	if (!/[A-Z]/g.test(data)){
    		data = data.toUpperCase();
    		console.log("> Converting to upper case...");
    		terr++;
    	}
    	if (/(^\s*)|(\s*$)/g.test(data)){
    		if (!/amap.txt/.test(data)){
				data = data.replace(/(^\s*)|(\s*$)/g,"");
				console.log("> "+error11);
				terr++;
				err11 = 1;
    			err = 1;
			}
		}
		if (!/amap.txt/.test(data)){
			console.log("> "+error10);
		    err10 = 1;
		    err = 1;
		    terr++;
		    numErr++;
		}
		//if (err == 1){
			//console.log("\n We found this errors.");

	    	var commands = data.split(";");
		    if (!/NAVBAR/.test(data)){
		    	console.log("> "+error1);
		    	err1 = 1;
		    	err = 1;
		    	terr++;
		    	numErr++;
		    }
		    if (!/SIDEBAR/.test(data)){
				console.log("> "+error2);
				err2 = 1;
				err = 1;
				terr++;
				numErr++;
		    }
		    if (!/SKIP-LINK/.test(data)){
				console.log("> "+error3);
				err3 = 1;
				err = 1;
				terr++;
				numErr++;
		    }
		    if (!/CONTENT-ALIGN/.test(data)){
				console.log("> "+error4);
				err4 = 1;
				err = 1;
				terr++;
				numErr++;
		    }
			if (/NAVBAR=;/.test(data)){
				console.log("> "+error5);
			    err5 = 1;
			    err = 1;
			    terr++;
			    numErr++;
			}
			if (/SIDEBAR=;/.test(data)){
				console.log("> "+error6);
				err6 = 1;
				err = 1;
				terr++;
				numErr++;
			}
			if (/SKIP-LINK=;/.test(data)){
				console.log("> "+error8);
				err7 = 1;
				err = 1;
				terr++;
				numErr++;
			}
			if (/CONTENT-ALIGN=;/.test(data)){
				console.log("> "+error8);
				err8 = 1;
				err = 1;
				terr++;
				numErr++;
			}
			if (!/<!-- END AMAPTXT -->/.test(data)){
				console.log("> "+error9);
				err9 = 1;
				err = 1;
				terr++;
				numErr++;
			}
			/*---*/
			if (terr == 0){
				console.log("\nCongratulations. This amap.txt file hasn't got errors.");
				console.log("\nValidation has finished.");
			}
			else{
				console.log("\nWe found a total of "+terr+" errors.");
				console.log("\nValidation has finished.");
			}
    }

});


