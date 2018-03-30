http = require("http");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var dataId = new Set();
var r1 = "";
var r2 = "";
var r3 = "";

function queueAllData(result, forDataId) {
	dataId.add(forDataId);
	if (dataId.has(1) && r1 == "") {
		r1 = result
		//console.log("1 added")
	}
	if (dataId.has(2) && r2 == "") {
		r2 = result
		//console.log("2 added")
	}
	if (dataId.has(3) && r3 == "") {
		r3 = result
		//console.log("3 added")
	}	
}

function printAllData(){
	if (dataId.has(1) && dataId.has(2) && dataId.has(3)) {
		//console.log("Let's print everything :)")
		console.log(r1)
		console.log(r2)
		console.log(r3)
	} //else { console.log("Some data is missing...")}
}




http.get(url1, function(response){
	var result1 = "";
	response.setEncoding("utf-8");
	response.on("data", function(data){
		result1 += data;
	});
	response.on("end", function(){
		//console.log(result1);
		queueAllData(result1, 1)
		printAllData()
	});
});

http.get(url2, function(response){
	var result2 = "";
	response.setEncoding("utf-8");
	response.on("data", function(data){
		result2 += data; 
	});
	response.on("end", function(){
		//console.log(result2);
		queueAllData(result2, 2)
		printAllData()
	});
});

http.get(url3, function(response){
	var result3 = "";
	response.setEncoding("utf-8");
	response.on("data", function(data){
		result3 += data;
	});
	response.on("end", function(){
		//console.log(result3);
		queueAllData(result3, 3)
		printAllData()
	});
});








