/черновик для базы данных использующей уязвимость с бесконечной памятью
ee = { 
bases:{ // разделение  подбаз и свойств текущей базы
        asd: 213,
        sdsa: 6335,
        dsd: gsfr,
        lll: {
			bases:{
            ddd: 123,
            hhh: {}
			},
			properties:[]
        },
        bbb: {
			bases:{},
		properties:[123, 5324, 523]
		},
        zzz: [mmm: {}, nnn: [], y5trf]  -------------доработать
},
       properties: [32, 345, 432] // разделение  подбаз и свойств текущей базы
    }

!!!!!!!!!!!!!!либо не {bases:{},properties:[]}  а   {[{базы}],[свойства текущей базы]}
    -- -- -- -- -- -- -- -- -- -- -- -- --
ee = {
    bases: { // тело для дочерних баз
        asd: {
            url: ee.asd,
            key: '_1',
            value: 213
        },
        sdsa: {
            url: ee.sdsa,
            key: '_1',
            value: 6335
        },
        dsd: {
            url: ee.dsd,
            key: '_1',
            value: gsfr
        },
        lll: {
            bases: {
                ddd: {
                    url: ee.lll.ddd,
                    key: '_1',
                    value: 123
                },
                hhh: {} //пустое т к каталог есть но внутренниз баз данныз или значений нет
            },
			properties:[]
        },
        bbb: {
			bases:{},
            properties: [{
                    url: ee.bbb,
                    key: '_1',
                    value: 123
                },
                {
                    url: ee.bbb,
                    key: '_2',
                    value: 5324
                },
                {
                    url: ee.bbb,
                    key: '_3',
                    value: 523
                }
            ]
        },
        zzz: [mmm: {}, nnn: [], y5trf] -------------- доработать
    },
    properties: [{ // тело для свойств текущей базы данных
        url: ee,
        key: '_1',
        value: 123
    }, {
        url: ee,
        key: '_2',
        value: 5324
    }, {
        url: ee,
        key: '_3',
        value: 523
    }]
}
