function Graph(){
	var datasets =[
    {name:"Mart",data:[18]},
    {name:"April",data:[24]}
    ]

    var types= "column";

    this.setType=function(x){
        types = x;
    }

    this.setData=function(x){
      datasets = x;
  }


  this.createGraph=function(){

    Highcharts.chart('container', {

    title: {  text: 'Highcharts › Column / Line chart'
    },

    subtitle: {   text: ''
    },

    yAxis: { 
        title: {  text: 'Number of Employees' }
    },

    legend: { 
        layout: 'vertical',  
        align: 'right',  
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: { connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: datasets ,
    chart: { type: types },

    responsive: {
        rules: [{
            condition:{ maxWidth: 500},

            chartOptions: { legend: {
                layout: 'horizontal', 
                align: 'center', 
                verticalAlign: 'bottom'
            } }
         }]
    }

}); }



this.createGraph2=function(){

    Highcharts.chart('container', {
    chart: {  plotBackgroundColor: null,  
        plotBorderWidth: null,  
        plotShadow: false,  
        type: 'pie'
    },

    title: {
        text: 'Highcharts › Pie chart'
    },

    tooltip: {
        pointFormat: '{series.name}: <b> { point.percentage:.1f }% </b>'
    },

    plotOptions: {
        pie: {  allowPointSelect:true,  cursor:'pointer',
        dataLabels: { enabled: true, 
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: { color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'} }
    } },

    series:datasets 
}); }


}