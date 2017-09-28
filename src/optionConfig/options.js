
//饼图数据

export const pieOption = {
   /* backgroundColor: '#424956',*/
   title: {
        text: '技术栈',
        textStyle: {
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 18
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
       /* orient: '',*/
        x: 'center',
        top: 50,
        itemWidth: 14,
        itemHeight: 14,
        align: 'left',
        
        data: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Vue', 'Nodejs', 'Webpack'],
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        top: 5,
        right: 30,
        feature: {
            saveAsImage: {
                show: true,
                iconStyle: {
                    normal: {
                        borderColor: '#FFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '技术栈',
        type: 'pie',
        center: ['50%', '60%'],
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['40%', '42%'],
        color: [`rgba(244, 67, 54, 1)`, 'rgba(25, 118, 210, 1)', 'rgba(230, 70, 127, 1)', 
                'rgba(255, 214, 0, 1)', 'rgba(97, 218, 251, 1)', 'rgba(65, 184, 131, 1)', 
                'rgba(2, 135, 0, 1)', 'rgba(86, 106, 221, 1)'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            },

        },
        tooltip: {
            show: false,


        },

        data: [{
            value: 10,
            name: ''
        }, {
            value: 10,
            name: ''
        }, {
            value: 10,
            name: ''
        }, {
            value: 20,
            name: ''
        }, {
            value: 15,
            name: ''
        }, {
            value: 15,
            name: ''
        }, {
            value: 5,
            name: ''
        }, {
            value: 15,
            name: ''
        }]
    }, {
        name: '技术栈',
        type: 'pie',
        center: ['50%', '60%'],
        radius: ['42%', '55%'],
        color: [`rgba(244, 67, 54, 0.8)`, 'rgba(25, 118, 210, 0.8)', 'rgba(230, 70, 127, 0.8)', 
                'rgba(255, 214, 0, 0.8)', 'rgba(97, 218, 251, 0.8)', 'rgba(65, 184, 131, 0.8)', 
                'rgba(2, 135, 0, 0.8)', 'rgba(86, 106, 221, 0.8)'],
        label: {
            normal: {
                formatter: '{b}\n{d}%'
            },

        },
        data: [{
                value: 10,
                name: 'HTML'
            }, {
                value: 10,
                name: 'CSS'
            }, {
                value: 10,
                name: 'SASS'
            }, {
                value: 20,
                name: 'JavaScript'
            }, {
                value: 15,
                name: 'React'
            }, {
                value: 15,
                name: 'Vue'
            }, {
                value: 5,
                name: 'Nodejs'
            }, {
                value: 15,
                name: 'Webpack'
            }
        ]
    }]
};