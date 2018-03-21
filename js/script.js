$(document).ready(function(){

	$("#add").click(function(){
		var div=$("<div class='item'></div>");
		div.append("<input type='text' class='key form-control col-md-2' placeholder='name'>");
		div.append("<input type='number' class='data form-control col-md-2' placeholder='data'><br>");
		div.appendTo(".result");
	})

	$(".type").click(function(){
		var tip=$(this).html();
		if(tip == "column"){
			var dat=[];

			$(".item").each(function(){
				var obj={};
				obj.name=$(this).find(".key").val();
				obj.data=[Number($(this).find(".data").val())];
				dat.push(obj);
			})

			var app = new Graph();
			app.setData(dat);
			app.setType(tip);
			app.createGraph();
		}
		else if(tip == "line"){
			var dat=[];

			$(".item").each(function(){
				var num1 = parseInt(Math.random() * 40);
				var num2 = parseInt(Math.random() * 30);
				var num3 = parseInt(Math.random() * 45);
				var obj={};
				obj.name=$(this).find(".key").val();
				obj.data=[Number($(this).find(".data").val()),num1,num2,num3];
				dat.push(obj);
			})

			var app = new Graph();
			app.setData(dat);
			app.setType(tip);
			app.createGraph();
			console.log(dat);
		}
		else if(tip == "pie"){
			var all1 = [];
			var all2 = {};
			var dat=[];
			$(".item").each(function(){
				var obj={};
				obj.name=$(this).find(".key").val();
				obj.y = Number($(this).find(".data").val());
				dat.push(obj);
				all2.colorByPoint =  true;
				all2.data =  dat;
				all1.push(all2);
			})

			var app = new Graph();
			app.setData(all1);
			app.setType(tip);
			app.createGraph2();
			console.log(all1);
		}
	})
})