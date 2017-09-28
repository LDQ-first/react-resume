
//饼图数据

export const pieOption = {
   /* backgroundColor: '#424956',*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {

        orient: 'vertical',
        x: 'right',
        itemWidth: 14,
        itemHeight: 14,
        align: 'left',

        data: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Vue', 'Nodejs', 'Webpack'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        name: '技术栈',
        type: 'pie',
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['40%', '42%'],
        color: ['#915872', '#3077b7', '#9a8169', '#3f8797', '#5b8144', '#307889', '#9c6a79'],
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
        radius: ['42%', '55%'],
        color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677', '#556add'],
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