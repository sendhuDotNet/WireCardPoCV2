
(function ($) {
    // USE STRICT
    "use strict";
  
    try {
      //WidgetChart 1
      var ctx = document.getElementById("widgetChart1");
      if (ctx) {
        ctx.height = 130;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [{
              data: [78, 81, 80, 45, 34, 12, 40],
              label: 'Dataset',
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
            },]
          },
          options: {
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
            },
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                }
              }]
            },
            title: {
              display: false,
            },
            elements: {
              line: {
                borderWidth: 0
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        });
      }
  
  
      //WidgetChart 2
      var ctx = document.getElementById("widgetChart2");
      if (ctx) {
        ctx.height = 130;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            type: 'line',
            datasets: [{
              data: [1, 18, 9, 17, 34, 22],
              label: 'Dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
            },]
          },
          options: {
  
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Montserrat',
              bodyFontFamily: 'Montserrat',
              cornerRadius: 3,
              intersect: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                }
              }]
            },
            title: {
              display: false,
            },
            elements: {
              line: {
                tension: 0.00001,
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        });
      }
  
  
      //WidgetChart 3
      var ctx = document.getElementById("widgetChart3");
      if (ctx) {
        ctx.height = 130;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            type: 'line',
            datasets: [{
              data: [65, 59, 84, 84, 51, 55],
              label: 'Dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
            },]
          },
          options: {
  
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Montserrat',
              bodyFontFamily: 'Montserrat',
              cornerRadius: 3,
              intersect: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                }
              }]
            },
            title: {
              display: false,
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        });
      }
  
  
      //WidgetChart 4
      var ctx = document.getElementById("widgetChart4");
      if (ctx) {
        ctx.height = 115;
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: "My First dataset",
                data: [78, 81, 80, 65, 58, 75, 60, 75, 65, 60, 60, 75],
                borderColor: "transparent",
                borderWidth: "0",
                backgroundColor: "rgba(255,255,255,.3)"
              }
            ]
          },
          options: {
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: false,
                categoryPercentage: 1,
                barPercentage: 0.65
              }],
              yAxes: [{
                display: false
              }]
            }
          }
        });
      }
  
      // Recent Report
      const brandProduct = 'rgba(0,181,233,0.8)'
      const brandService = 'rgba(0,173,95,0.8)'
  
      var elements = 10
      var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
      var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]
  
      var ctx = document.getElementById("recent-rep-chart");
      if (ctx) {
        ctx.height = 250;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: brandService,
                borderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data1
  
              },
              {
                label: 'My Second dataset',
                backgroundColor: brandProduct,
                borderColor: 'transparent',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data2
  
              }
            ]
          },
          options: {
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: true,
                  color: '#f2f2f2'
                },
                ticks: {
                  fontFamily: "Poppins",
                  fontSize: 12
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: 50,
                  max: 150,
                  fontFamily: "Poppins",
                  fontSize: 12
                },
                gridLines: {
                  display: true,
                  color: '#f2f2f2'
  
                }
              }]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            }
  
  
          }
        });
      }
  
      // Percent Chart
      var ctx = document.getElementById("percent-chart");
      if (ctx) {
        ctx.height = 280;
        var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [
              {
                label: "My First dataset",
                data: [60, 40],
                backgroundColor: [
                  '#00b5e9',
                  '#fa4251'
                ],
                hoverBackgroundColor: [
                  '#00b5e9',
                  '#fa4251'
                ],
                borderWidth: [
                  0, 0
                ],
                hoverBorderColor: [
                  'transparent',
                  'transparent'
                ]
              }
            ],
            labels: [
              'Products',
              'Services'
            ]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            cutoutPercentage: 55,
            animation: {
              animateScale: true,
              animateRotate: true
            },
            legend: {
              display: false
            },
            tooltips: {
              titleFontFamily: "Poppins",
              xPadding: 15,
              yPadding: 10,
              caretPadding: 0,
              bodyFontSize: 16
            }
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
  
  
    try {
  
      // Recent Report 2
      const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
      const bd_brandService2 = 'rgba(0,173,95,0.9)'
      const brandProduct2 = 'rgba(0,181,233,0.2)'
      const brandService2 = 'rgba(0,173,95,0.2)'
  
      var data3 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
      var data4 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]
  
      var ctx = document.getElementById("recent-rep2-chart");
      if (ctx) {
        ctx.height = 230;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['', 'قد', 'أبريل', 'مارس', 'فبراير', 'يناير'],
            datasets: [
              {
                label: 'مجموعة بياناتي الأولى',
                backgroundColor: brandService2,
                borderColor: bd_brandService2,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data3
  
              },
              {
                label: 'مجموعة البيانات الثانية الخاصة بي',
                backgroundColor: brandProduct2,
                borderColor: bd_brandProduct2,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data4
  
              }
            ]
          },
          options: {
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: true,
                  color: '#f2f2f2'
                },
                ticks: {
                  fontFamily: "Poppins",
                  fontSize: 12
                }
              }],
              yAxes: [
              //   {
              //   id: 'A',
              //   type: 'linear',
              //   position: 'left',
              //   ticks: {
              //      beginAtZero: true,
              //      maxTicksLimit: 5,
              //      stepSize: 50,
              //      max: 150,
              //      fontFamily: "Poppins",
              //      fontSize: 12
              //   },
              //   gridLines: {
              //        display: true,
              //         color: '#f2f2f2'
      
              //      }
              // }, 
              {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: 50,
                  max: 150,
                  fontFamily: "Poppins",
                  fontSize: 12
               },
               gridLines: {
                    display: true,
                     color: '#f2f2f2'
     
                  }
              }]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              },
              line: {
                tension: 0
              }
            }
  
  
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
  
    try {
  
      // Recent Report 3
      const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
      const bd_brandService3 = 'rgba(0,173,95,0.9)';
      const brandProduct3 = 'transparent';
      const brandService3 = 'transparent';
  
      var data5 = [52, 60, 55, 50, 65, 80, 57, 115];
      var data6 = [102, 70, 80, 100, 56, 53, 80, 90];
  
      var ctx = document.getElementById("recent-rep3-chart");
      if (ctx) {
        ctx.height = 230;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: brandService3,
                borderColor: bd_brandService3,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data5,
                pointBackgroundColor: bd_brandService3
              },
              {
                label: 'My Second dataset',
                backgroundColor: brandProduct3,
                borderColor: bd_brandProduct3,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 0,
                data: data6,
                pointBackgroundColor: bd_brandProduct3
  
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: true,
                  color: '#f2f2f2'
                },
                ticks: {
                  fontFamily: "Poppins",
                  fontSize: 12
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: 50,
                  max: 150,
                  fontFamily: "Poppins",
                  fontSize: 12
                },
                gridLines: {
                  display: false,
                  color: '#f2f2f2'
                }
              }]
            },
            elements: {
              point: {
                radius: 3,
                hoverRadius: 4,
                hoverBorderWidth: 3,
                backgroundColor: '#333'
              }
            }
  
  
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    try {
      //WidgetChart 5
      var ctx = document.getElementById("widgetChart5");
      if (ctx) {
        ctx.height = 220;
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: "My First dataset",
                data: [78, 81, 80, 64, 65, 80, 70, 75, 67, 85, 66, 68],
                borderColor: "transparent",
                borderWidth: "0",
                backgroundColor: "#ccc",
              }
            ]
          },
          options: {
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: false,
                categoryPercentage: 1,
                barPercentage: 0.65
              }],
              yAxes: [{
                display: false
              }]
            }
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    try {
  
      // Percent Chart 2
      var ctx = document.getElementById("percent-chart2");
      if (ctx) {
        ctx.height = 209;
        var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [
              {
                label: "My First dataset",
                data: [60, 40],
                backgroundColor: [
                  '#00b5e9',
                  '#fa4251'
                ],
                hoverBackgroundColor: [
                  '#00b5e9',
                  '#fa4251'
                ],
                borderWidth: [
                  0, 0
                ],
                hoverBorderColor: [
                  'transparent',
                  'transparent'
                ]
              }
            ],
            labels: [
              'Products',
              'Services'
            ]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            cutoutPercentage: 87,
            animation: {
              animateScale: true,
              animateRotate: true
            },
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                fontSize: 14,
                fontFamily: "Poppins,sans-serif"
              }
  
            },
            tooltips: {
              titleFontFamily: "Poppins",
              xPadding: 15,
              yPadding: 10,
              caretPadding: 0,
              bodyFontSize: 16,
            }
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    try {
      //Sales chart
      var ctx = document.getElementById("sales-chart");
      if (ctx) {
        ctx.height = 150;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
              label: "Foods",
              data: [0, 30, 10, 120, 50, 63, 10],
              backgroundColor: 'transparent',
              borderColor: 'rgba(220,53,69,0.75)',
              borderWidth: 3,
              pointStyle: 'circle',
              pointRadius: 5,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'rgba(220,53,69,0.75)',
            }, {
              label: "Electronics",
              data: [0, 50, 40, 80, 40, 79, 120],
              backgroundColor: 'transparent',
              borderColor: 'rgba(40,167,69,0.75)',
              borderWidth: 3,
              pointStyle: 'circle',
              pointRadius: 5,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'rgba(40,167,69,0.75)',
            }]
          },
          options: {
            responsive: true,
            tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Poppins',
              bodyFontFamily: 'Poppins',
              cornerRadius: 3,
              intersect: false,
            },
            legend: {
              display: false,
              labels: {
                usePointStyle: true,
                fontFamily: 'Poppins',
              },
            },
            scales: {
              xAxes: [{
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                },
                ticks: {
                  fontFamily: "Poppins"
                }
              }],
              yAxes: [{
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value',
                  fontFamily: "Poppins"
  
                },
                ticks: {
                  fontFamily: "Poppins"
                }
              }]
            },
            title: {
              display: false,
              text: 'Normal Legend'
            }
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
    try {
  
      //Team chart
      var ctx = document.getElementById("team-chart");
      if (ctx) {
        ctx.height = 150;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
              data: [0, 7, 3, 5, 2, 10, 7],
              label: "Expense",
              backgroundColor: 'rgba(0,103,255,.15)',
              borderColor: 'rgba(0,103,255,0.5)',
              borderWidth: 3.5,
              pointStyle: 'circle',
              pointRadius: 5,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'rgba(0,103,255,0.5)',
            },]
          },
          options: {
            responsive: true,
            tooltips: {
              mode: 'index',
              titleFontSize: 12,
              titleFontColor: '#000',
              bodyFontColor: '#000',
              backgroundColor: '#fff',
              titleFontFamily: 'Poppins',
              bodyFontFamily: 'Poppins',
              cornerRadius: 3,
              intersect: false,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true,
                fontFamily: 'Poppins',
              },
  
  
            },
            scales: {
              xAxes: [{
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                },
                ticks: {
                  fontFamily: "Poppins"
                }
              }],
              yAxes: [{
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value',
                  fontFamily: "Poppins"
                },
                ticks: {
                  fontFamily: "Poppins"
                }
              }]
            },
            title: {
              display: false,
            }
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
    try {
      //bar chart
      var ctx = document.getElementById("barChart");
      if (ctx) {
        ctx.height = 200;
        var myChart = new Chart(ctx, {
          type: 'bar',
          defaultFontFamily: 'Poppins',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: "rgba(0, 123, 255, 0.9)",
                borderWidth: "0",
                backgroundColor: "rgba(0, 123, 255, 0.5)",
                fontFamily: "Poppins"
              },
              {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: "rgba(0,0,0,0.09)",
                borderWidth: "0",
                backgroundColor: "rgba(0,0,0,0.07)",
                fontFamily: "Poppins"
              }
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontFamily: "Poppins"
  
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontFamily: "Poppins"
                }
              }]
            }
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
    try {
  
      //radar chart
      var ctx = document.getElementById("radarChart");
      if (ctx) {
        ctx.height = 200;
        var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            defaultFontFamily: 'Poppins',
            datasets: [
              {
                label: "My First dataset",
                data: [65, 59, 66, 45, 56, 55, 40],
                borderColor: "rgba(0, 123, 255, 0.6)",
                borderWidth: "1",
                backgroundColor: "rgba(0, 123, 255, 0.4)"
              },
              {
                label: "My Second dataset",
                data: [28, 12, 40, 19, 63, 27, 87],
                borderColor: "rgba(0, 123, 255, 0.7",
                borderWidth: "1",
                backgroundColor: "rgba(0, 123, 255, 0.5)"
              }
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            scale: {
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }
          }
        });
      }
  
    } catch (error) {
      console.log(error)
    }
  
    try {
  
      //line chart
      var ctx = document.getElementById("lineChart");
      if (ctx) {
        ctx.height = 150;
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            defaultFontFamily: "Poppins",
            datasets: [
              {
                label: "My First dataset",
                borderColor: "rgba(0,0,0,.09)",
                borderWidth: "1",
                backgroundColor: "rgba(0,0,0,.07)",
                data: [22, 44, 67, 43, 76, 45, 12]
              },
              {
                label: "My Second dataset",
                borderColor: "rgba(0, 123, 255, 0.9)",
                borderWidth: "1",
                backgroundColor: "rgba(0, 123, 255, 0.5)",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [16, 32, 18, 26, 42, 33, 44]
              }
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              intersect: false
            },
            hover: {
              mode: 'nearest',
              intersect: true
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontFamily: "Poppins"
  
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontFamily: "Poppins"
                }
              }]
            }
  
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
  
    try {
  
      //doughut chart
      var ctx = document.getElementById("doughutChart");
      if (ctx) {
        ctx.height = 150;
        var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [45, 25, 20, 10],
              backgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
              ],
              hoverBackgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
              ]
  
            }],
            labels: [
              "Green",
              "Green",
              "Green",
              "Green"
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            responsive: true
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
  
    try {
  
      //pie chart
      var ctx = document.getElementById("pieChart");
      if (ctx) {
        ctx.height = 200;
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [{
              data: [45, 25, 20, 10],
              backgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
              ],
              hoverBackgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0, 123, 255,0.5)",
                "rgba(0,0,0,0.07)"
              ]
  
            }],
            labels: [
              "Green",
              "Green",
              "Green"
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            responsive: true
          }
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
    try {
  
      // polar chart
      var ctx = document.getElementById("polarChart");
      if (ctx) {
        ctx.height = 200;
        var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            datasets: [{
              data: [15, 18, 9, 6, 19],
              backgroundColor: [
                "rgba(0, 123, 255,0.9)",
                "rgba(0, 123, 255,0.8)",
                "rgba(0, 123, 255,0.7)",
                "rgba(0,0,0,0.2)",
                "rgba(0, 123, 255,0.5)"
              ]
  
            }],
            labels: [
              "Green",
              "Green",
              "Green",
              "Green"
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            responsive: true
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    try {
  
      // single bar chart
      var ctx = document.getElementById("singelBarChart");
      if (ctx) {
        ctx.height = 150;
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
            datasets: [
              {
                label: "My First dataset",
                data: [40, 55, 75, 81, 56, 55, 40],
                borderColor: "rgba(0, 123, 255, 0.9)",
                borderWidth: "0",
                backgroundColor: "rgba(0, 123, 255, 0.5)"
              }
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontFamily: 'Poppins'
              }
  
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontFamily: "Poppins"
  
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontFamily: "Poppins"
                }
              }]
            }
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
  
  
  
  (function ($) {
      // USE STRICT
      "use strict";
      $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 900,
        outDuration: 900,
        //linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'page-loader',
        loadingInner: '<div class="page-loader__spin"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function (url) {
          window.location.href = url;
        }
      });
    
    
    })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Map
    try {
  
      var vmap = $('#vmap');
      if(vmap[0]) {
        vmap.vectorMap( {
          map: 'world_en',
          backgroundColor: null,
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#1de9b6',
          enableZoom: true,
          showTooltip: true,
          values: sample_data,
          scaleColors: [ '#1de9b6', '#03a9f5'],
          normalizeFunction: 'polynomial'
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    // Europe Map
    try {
      
      var vmap1 = $('#vmap1');
      if(vmap1[0]) {
        vmap1.vectorMap( {
          map: 'europe_en',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          enableZoom: true,
          showTooltip: true
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    // USA Map
    try {
      
      var vmap2 = $('#vmap2');
  
      if(vmap2[0]) {
        vmap2.vectorMap( {
          map: 'usa_en',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          enableZoom: true,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: {
              mo: '#001BFF',
              fl: '#001BFF',
              or: '#001BFF'
          },
          onRegionClick: function ( event, code, region ) {
              event.preventDefault();
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    // Germany Map
    try {
      
      var vmap3 = $('#vmap3');
      if(vmap3[0]) {
        vmap3.vectorMap( {
          map: 'germany_en',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          onRegionClick: function ( element, code, region ) {
              var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
  
              alert( message );
          }
        });
      }
      
    } catch (error) {
      console.log(error);
    }
    
    // France Map
    try {
      
      var vmap4 = $('#vmap4');
      if(vmap4[0]) {
        vmap4.vectorMap( {
          map: 'france_fr',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          enableZoom: true,
          showTooltip: true
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  
    // Russia Map
    try {
      var vmap5 = $('#vmap5');
      if(vmap5[0]) {
        vmap5.vectorMap( {
          map: 'russia_en',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          hoverOpacity: 0.7,
          selectedColor: '#999999',
          enableZoom: true,
          showTooltip: true,
          scaleColors: [ '#C8EEFF', '#006491' ],
          normalizeFunction: 'polynomial'
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
    
    // Brazil Map
    try {
      
      var vmap6 = $('#vmap6');
      if(vmap6[0]) {
        vmap6.vectorMap( {
          map: 'brazil_br',
          color: '#007BFF',
          borderColor: '#fff',
          backgroundColor: '#fff',
          onRegionClick: function ( element, code, region ) {
              var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
              alert( message );
          }
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  })(jQuery);
  (function ($) {
    // Use Strict
    "use strict";
    try {
      var progressbarSimple = $('.js-progressbar-simple');
      progressbarSimple.each(function () {
        var that = $(this);
        var executed = false;
        $(window).on('load', function () {
  
          that.waypoint(function () {
            if (!executed) {
              executed = true;
              /*progress bar*/
              that.progressbar({
                update: function (current_percentage, $this) {
                  $this.find('.js-value').html(current_percentage + '%');
                }
              });
            }
          }, {
              offset: 'bottom-in-view'
            });
  
        });
      });
    } catch (err) {
      console.log(err);
    }
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Scroll Bar
    try {
      var jscr1 = $('.js-scrollbar1');
      if(jscr1[0]) {
        const ps1 = new PerfectScrollbar('.js-scrollbar1');      
      }
  
      var jscr2 = $('.js-scrollbar2');
      if (jscr2[0]) {
        const ps2 = new PerfectScrollbar('.js-scrollbar2');
  
      }
  
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Select 2
    try {
  
      $(".js-select2").each(function () {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next('.dropDownSelect2')
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  
  
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Dropdown 
    try {
      var menu = $('.js-item-menu');
      var sub_menu_is_showed = -1;
  
      for (var i = 0; i < menu.length; i++) {
        $(menu[i]).on('click', function (e) {
          e.preventDefault();
          $('.js-left-sidebar').removeClass("show-sidebar");        
          if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = -1;
          }
          else {
            for (var i = 0; i < menu.length; i++) {
              $(menu[i]).removeClass("show-dropdown");
            }
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = jQuery.inArray(this, menu);
          }
        });
      }
      $(".js-item-menu, .js-dropdown").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
      });
  
    } catch (error) {
      console.log(error);
    }
  
    var wW = $(window).width();
      // Right Sidebar
      var right_sidebar = $('.js-left-sidebar');
      var sidebar_btn = $('.js-sidebar-btn');
  
      sidebar_btn.on('click', function (e) {
        e.preventDefault();
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
        right_sidebar.toggleClass("show-sidebar");
      });
  
      $(".js-left-sidebar, .js-sidebar-btn").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        right_sidebar.removeClass("show-sidebar");
  
      });
   
  
    // Sublist Sidebar
    try {
      var arrow = $('.js-arrow');
      arrow.each(function () {
        var that = $(this);
        that.on('click', function (e) {
          e.preventDefault();
          that.find(".arrow").toggleClass("up");
          that.toggleClass("open");
          that.parent().find('.js-sub-list').slideToggle("250");
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  
  
    try {
      // Hamburger Menu
      $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').slideToggle('500');
      });
      $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
        var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
        $(this).toggleClass('active');
        $(dropdown).slideToggle('500');
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Load more
    try {
      var list_load = $('.js-list-load');
      if (list_load[0]) {
        list_load.each(function () {
          var that = $(this);
          that.find('.js-load-item').hide();
          var load_btn = that.find('.js-load-btn');
          load_btn.on('click', function (e) {
            $(this).text("Loading...").delay(1500).queue(function (next) {
              $(this).hide();
              that.find(".js-load-item").fadeToggle("slow", 'swing');
            });
            e.preventDefault();
          });
        })
  
      }
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    try {
      
      $('[data-toggle="tooltip"]').tooltip();
  
    } catch (error) {
      console.log(error);
    }
  
    // Chatbox
    try {
      var inbox_wrap = $('.js-inbox');
      var message = $('.au-message__item');
      message.each(function(){
        var that = $(this);
  
        that.on('click', function(){
          $(this).parent().parent().parent().toggleClass('show-chat-box');
        });
      });
      
  
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
  $("#fundTransfer").hover(function(){
    $("#fundTransfericon1").hide();
    $("#fundTransfericon2").show();
},function(){
  $("#fundTransfericon1").show();
  $("#fundTransfericon2").hide();
});
$("#loadWallet").hover(function(){
  $("#loadWalleticon1").hide();
  $("#loadWalleticon2").show();
},function(){
$("#loadWalleticon1").show();
$("#loadWalleticon2").hide();
});
$("#WalletTransferbob").hover(function(){
  $("#WalletTransferbobicon1").hide();
  $("#WalletTransferbobicon2").show();
},function(){
$("#WalletTransferbobicon1").show();
$("#WalletTransferbobicon2").hide();
});
  //to avoid reload on button click
  $(".commonButton").on("click",function(){
    return false;
  });
  $('.splitter-panel').each(function(index, element) {
    $('.splitter-tile').bind('mouseover', function(e) {
        if ($(this).find('.splitter-tile-overlay').hasClass('open')) {
            return false;
        }
        $('.splitter-tile-overlay.open').removeClass('open').animate({
            opacity: '1'
        }, 300).show();
        $(this).find('.splitter-tile-overlay').addClass('open').animate({
            opacity: '0'
        }, 300).hide();
        return false;
    });
    $('body').load('mouseover', function() {
        $('.splitter-tile-overlay.open').delay(30).clearQueue();
        $('.splitter-tile-overlay.open').delay(30).stop();
        $('.splitter-tile-overlay.open').removeClass('open').animate({
            opacity: '1'
        }, 300).show();
    });
    $('body').bind('mouseover', function() {
      $('.splitter-tile-overlay.open').delay(30).clearQueue();
      $('.splitter-tile-overlay.open').delay(30).stop();
      $('.splitter-tile-overlay.open').removeClass('open').animate({
          opacity: '1'
      }, 300).show();
  });
  });
  $("#SignIn").on("click",function(){
      if($("#userName").val()=="Bob"){
        window.location.href='bob-landing.html';
      }
      if($("#userName").val()=="Alice"){
        window.location.href='alice-landingPage.html';
      }
  });
  $("#selectCardReward").on("change",function(){
    if($("#selectCardReward").val()==1){
      $("#card1Reward").show();
      $("#card2Reward").hide();
    }
    else{
      $("#card2Reward").show();
      $("#card1Reward").hide();
    }
  });
  $("#cardlimitSlider").on("input",function(){
    $("#requestedCardLimit").text($("#cardlimitSlider").val());
    // var maxVal= $("#myRange").attr("max");
    // $("#leftPoints").text(maxVal-$("#myRange").val());
  });
  $("#upgradeRequest").on("click",function(){
      alert("Request for upgrade submitted successfully");
  });
  $("#submitAutoPay").on("click",function(){
      alert("Auto pay has been initiated successfully");
  });
  $("#confrimBalanceTransfer").on("click",function(){
      alert("Balance transfer is initiated successfully");
      return false;
  });
  $("#myRange").on("input",function(){
    $("#selectedPoints").text($("#myRange").val());
    var maxVal= $("#myRange").attr("max");
    $("#leftPoints").text(maxVal-$("#myRange").val());
  });
  $("#selectCardRedeem").on("change",function(){
    $("#myRange").attr("disabled",false); 
      if($("#selectCardRedeem").val()==1){
        $("#redeemPoints").text(966);
        $("#myRange").attr("max",966);
      }
      else{
        $("#redeemPoints").text(3933);
        $("#myRange").attr("max",3933);
      }
  });
  $("#askStatement").on("click",function(){
    alert("Statement is mailed to the registered email Id");
  });
  $("#bobAskStatement").on("click",function(){
    alert("Statement is mailed to the registered email Id");
  });
  $("#cardBlockSubmit").on("click",function(){
    alert("Card is blocked sucessfully");
  });
  $("#submitPin1,#submitPin2").on("click",function(){
      alert("Your pin saved Sucessfully");
  });
  $("#fromDate_btn").datepicker({ dateFormat: 'yy-mm-dd' }).on('changeDate',function(e) {
    $(this).datepicker('hide');
    var dorDate=$(this).val();
    $("#fromDate").val(moment(dorDate).format("DD-MMM-YYYY"));
  });
  $("#toDate_btn").datepicker({ dateFormat: 'yy-mm-dd' }).on('changeDate',function(e) {
    $(this).datepicker('hide');
    var dorDate=$(this).val();
    $("#toDate").val(moment(dorDate).format("DD-MMM-YYYY"));
  });
  $("#statementTable").dataTable();
  $("#transactionTable").dataTable();
  // $("#dailyTable").dataTable();
  // $("#weeklyTable").dataTable();
  // $("#monthlyTable").dataTable();
  // $("#yearlyTable").dataTable();
  $("#submitTransaction").on("click",function(){
    $(".transactionTableClass").show();
    return false;
  });
  $("#getCardStatement").on("click",function(){
      if($("#selectCard").val()==1){
        $(".transactionTableClass").show();
        $("#card1Table").show();
        $("#card2Table").hide();
        return false;
      }
      else{
        $(".transactionTableClass").show();
        $("#card2Table").show();
        $("#card1Table").hide();
        return false;
      }
  });
  
  $('input[type="radio"][name=group103]').on('change',function(){
    if($(this).val()=="yes"){
      $(".card-body-generatePinYes").show();
      $(".card-body-generatePinNo").hide();
      return false;
    }
    else{
      $(".card-body-generatePinYes").hide();
      $(".card-body-generatePinNo").show();
      return false;
    }
  });
  $('input[type="radio"][name=group103loadWallet]').on('change',function(){
    if($(this).val()=="bankAccount"){
      $(".card-body-loadBank").show();
      $(".card-body-loadCreditCard").hide();
      return false;
    }
    else{
      $(".card-body-loadBank").hide();
      $(".card-body-loadCreditCard").show();
      return false;
    }
  });
  $('input[type="radio"][name=group103Redeem]').on('change',function(){
    if($(this).val()=="pp"){
      $(".card-body-redeemOnly").show();
      $(".card-body-pointsPlusPay").show();
      $(".card-body-cashRedemptions").hide();
      return false;
    }
    else if($(this).val()=="cr"){
      $(".card-body-redeemOnly").show();
      $(".card-body-pointsPlusPay").hide();
      $(".card-body-cashRedemptions").show();
      return false;
    }
    else{
      $(".card-body-redeemOnly").show();
      $(".card-body-pointsPlusPay").hide();
      $(".card-body-cashRedemptions").hide();
      return false;
    }
  });
  $("#setExpenseSlide").on("click",function(){
    $(".card-body-setExpenses").slideToggle();
  });
  $("#blockReason").on("change",function(){
    if($("#blockReason").val()!=0){
      $('#cardBlockSubmit').prop("disabled", false);
    }
  });
  $("#RedeemMsgView").on("click",function(){
    alert("Shopping functionality not yet implemented");
  });
  $("#loadWalletcard").on("click",function(){
    alert("Your wallet is loaded successfully");
  });
  $("#confirmCashRedeem").on("click",function(){
    alert("Cash transfered sucessfully");
    $(".card-body-cashRedemptions").hide();
    $('input[type="radio"][value=pp]').attr("checked",checked);
  });
  $("#confirmPointsRedeem").on("click",function(){
    alert("Order placed sucessfully");
    $(".card-body-pointsPlusPay").hide();
    $('input[type="radio"][value=pp]').attr("checked",checked);
  });
  $("#setExpenseLimit").on("click",function(){
    alert("Expenses limit successfully");
  });
  $("#loadWalletConfirm").on("click",function(){
    $(".card-body-calculateWallet").hide();
  });
  $("#loadWalletCancel").on("click",function(){
    window.location.href='bob-landing.html';
  });
  
  
  $("#calculateWallet").on("click",function(){
      $(".card-body-calculateWallet").show();
      return false;
  });
  var chart = AmCharts.makeChart( "bob-spendsCategoryChart", {
    "type": "pie",
    "theme": "light",
    "dataProvider": [ {
      "country": "Miscellanous",
      "value": 260
    }, {
      "country": "E-Commerce",
      "value": 201
    }, {
      "country": "Fuel",
      "value": 65
    }, {
      "country": "Resturants",
      "value": 39
    }, {
      "country": "Shopping",
      "value": 19
    }, {
      "country": "Transfer",
      "value": 10
    } ],
    "valueField": "value",
    "titleField": "country",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "export": {
      "enabled": false
    }
  } );
  var chart1 = AmCharts.makeChart("bob-walletSpendsChart", {
      "type": "serial",
       "theme": "none",
      "categoryField": "Month",
      "rotate": true,
      "startDuration": 1,
      "categoryAxis": {
          "gridPosition": "start",
          "position": "left"
      },
      "trendLines":[],
      "graphs": [
          {
              "balloonText": "Expenses:USD[[value]]",
              "fillAlphas": 0.8,
              "id": "AmGraph-1",
              "lineAlpha": 0.2,
        "title": "USD",
        "legendPeriodValueText": "total: [[value]] mi",
        "legendValueText": "[[value]] mi",
              "type": "column",
              "valueField": "USD"
          },
          {
              "balloonText": "Expenses:INR[[value]]",
              "fillAlphas": 0.8,
              "id": "AmGraph-2",
              "lineAlpha": 0.2,
              "title": "INR",
              "type": "column",
              "valueField": "INR"
      },
      {
              "balloonText": "Expenses:SGD[[value]]",
              "fillAlphas": 0.8,
              "id": "AmGraph-3",
              "lineAlpha": 0.2,
              "title": "SGD",
              "type": "column",
              "valueField": "SGD"
          }
      ],
      "guides": [],
      "valueAxes": [
          {
              "id": "ValueAxis-1",
              "position": "top",
              "axisAlpha": 0
          }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": [
          {
              "Month": "Feb",
              "USD": 23.5,
        "INR": 35.1,
        "SGD": 19.1
          },
          {
              "Month": "Mar",
              "USD": 26.2,
        "INR": 45.8,
        "SGD": 12.1
          },
          {
              "Month": "Apr",
              "USD": 30.1,
        "INR": 29.9,
        "SGD": 13.1
          }
      
      ],
      "export": {
          "enabled": false
       }
  
  });
  var chart = AmCharts.makeChart("alice-monthyExpenses", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "Jan",
        "visits": 2025,
        "color": "#FF0F00"
    }, {
        "country": "Feb",
        "visits": 182,
        "color": "#FF6600"
    }, {
        "country": "Mar",
        "visits": 1809,
        "color": "#FF9E01"
    }, {
        "country": "Apr",
        "visits": 1022,
        "color": "#FCD202"
    }, {
        "country": "May",
        "visits": 1782,
        "color": "#F8FF01"
    },
  ],
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
    }],
    "depth3D": 40,
  "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0
  
    },
    "export": {
      "enabled": false
     }
  
  }, 0);