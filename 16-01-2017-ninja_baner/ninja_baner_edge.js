/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'pt-sans-narrow, sans-serif': '<script src=\"http://use.edgefonts.net/pt-sans-narrow:n4,n7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1_urok_igrai_besplatno',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '240px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1_urok_igrai_besplatno.jpg",'0px','0px']
                        },
                        {
                            id: 'ninja',
                            symbolName: 'ninja',
                            type: 'rect',
                            rect: ['-18', '87', '1223', '672', 'auto', 'auto']
                        },
                        {
                            id: 'text1',
                            symbolName: 'text1',
                            type: 'rect',
                            rect: ['35', '18', '179', '89', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['-60px', '-22px', '351px', '440px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '240px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(1,149,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1984,
                    autoPlay: true,
                    data: [
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${_1_urok_igrai_besplatno}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "ninja": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1223px', '672px', 'auto', 'auto'],
                            id: 'persona',
                            type: 'image',
                            clip: 'rect(21.126708984375px 251.591796875px 302.91552734375px 35.21142578125px)',
                            fill: ['rgba(0,0,0,0)', 'images/persona.png', '-942px', '-325px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1223px', '672px']
                        }
                    }
                },
                timeline: {
                    duration: 1124,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid1",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${persona}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid2",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${persona}",
                            [0,0],
                            [-220,-25],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid3",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${persona}",
                            [-220,-25],
                            [-462,-42],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${persona}",
                            [-462,-42],
                            [-712,-27],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${persona}",
                            [-712,-27],
                            [-941,-40],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            623,
                            0,
                            "linear",
                            "${persona}",
                            [-941,-40],
                            [20,-323],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${persona}",
                            [20,-323],
                            [-224,-326],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            874,
                            0,
                            "linear",
                            "${persona}",
                            [-224,-326],
                            [-465,-338],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${persona}",
                            [-465,-338],
                            [-700,-330],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            1124,
                            0,
                            "linear",
                            "${persona}",
                            [-700,-330],
                            [-942,-325],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            transform: [[], ['199'], [], ['0.10919', '0.10919']],
                            id: 'text2',
                            symbolName: 'text2',
                            opacity: '0.10569105691057',
                            rect: ['0px', '0px', '179', '90', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '179px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 1984,
                    autoPlay: true,
                    labels: {
                        "resize": 1000
                    },
                    data: [
                        [
                            "eid35",
                            "top",
                            0,
                            1000,
                            "easeInOutBounce",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid85",
                            "top",
                            1000,
                            497,
                            "easeInOutQuad",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid90",
                            "top",
                            1497,
                            487,
                            "easeInOutQuad",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            1000,
                            "easeInOutBounce",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "left",
                            1000,
                            497,
                            "easeInOutQuad",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid93",
                            "left",
                            1497,
                            487,
                            "easeInOutQuad",
                            "${text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            0,
                            1000,
                            "easeOutBounce",
                            "${text2}",
                            '199deg',
                            '0deg'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            0,
                            1000,
                            "easeInOutBounce",
                            "${text2}",
                            '0.10919',
                            '1'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            1000,
                            497,
                            "easeInOutQuad",
                            "${text2}",
                            '1',
                            '0.93739'
                        ],
                        [
                            "eid92",
                            "scaleY",
                            1497,
                            487,
                            "easeInOutQuad",
                            "${text2}",
                            '0.93739',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            0,
                            1000,
                            "easeInOutBounce",
                            "${text2}",
                            '0.10919',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            1000,
                            497,
                            "easeInOutQuad",
                            "${text2}",
                            '1',
                            '0.93739'
                        ],
                        [
                            "eid91",
                            "scaleX",
                            1497,
                            487,
                            "easeInOutQuad",
                            "${text2}",
                            '0.93739',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            1000,
                            "easeOutBounce",
                            "${text2}",
                            '0.10569105691057',
                            '1'
                        ]
                    ]
                }
            },
            "text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['37px', '3px', '100px', '45px', 'auto', 'auto'],
                            transform: [[], [], ['0', '-3']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['2px', '43px', '170px', '46px', 'auto', 'auto'],
                            transform: [[], [], ['4', '1']],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['44px', '3px', '100px', '45px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: pt-sans-narrow, sans-serif;\">​</span><span style=\"font-family: pt-sans-narrow, sans-serif; font-weight: 700;\">​Играй</span><span style=\"font-family: pt-sans-narrow, sans-serif; font-weight: 700; font-size: 27px;\">​</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [38, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['9px', '36px', '170px', '45px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [38, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: pt-sans-narrow, sans-serif; font-weight: 700;\">бесплатно!</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '179px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ninja_baner_edgeActions.js");
})("EDGE-789765187");
