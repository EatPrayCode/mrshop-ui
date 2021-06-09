
const item: any = {
    "isChecked": true,
    "name": "MockItem1",
    "brandsList": [
        {
            "key": "reebok",
            "value": "REEBOK",
            "variantsList": [
                {
                    "key": "reebok1",
                    "value": "reebok1",
                    "price": 100
                },
                {
                    "key": "reebok2",
                    "value": "reebok2",
                    "price": 120
                },
                {
                    "key": "reebok3",
                    "value": "reebok3",
                    "price": 150
                }
            ]
        },
        {
            "key": "adidas",
            "value": "ADIDAS",
            "variantsList": [
                {
                    "key": "adidas1",
                    "value": "adidas1",
                    "price": 200
                },
                {
                    "key": "adidas2",
                    "value": "adidas2",
                    "price": 220
                },
                {
                    "key": "adidas3",
                    "value": "adidas3",
                    "price": 250
                }
            ]
        },
        {
            "key": "puma",
            "value": "PUMA",
            "variantsList": [
                {
                    "key": "puma1",
                    "value": "puma1",
                    "price": 300
                },
                {
                    "key": "puma2",
                    "value": "puma2",
                    "price": 320
                },
                {
                    "key": "puma3",
                    "value": "puma3",
                    "price": 350
                }
            ]
        }
    ],
    "quantityList": [
        {
            "key": "small",
            "value": 0.5
        },
        {
            "key": "big",
            "value": 1
        },
        {
            "key": "large",
            "value": 2
        },
        {
            "key": "extralarge",
            "value": 3
        }
    ],
};

const json1: any = {
    "items": [item, item, item, item, item, item, item]
};

const json2: any = {
    "items": [item, item, item, item, item, item, item]
};

const json3: any = {
    "items": [item, item, item, item, item, item]
};

const json4: any = {
    "items": [item, item, item, item, item, item, item, item, item, item]
};

export const mockData = {
    packName: 'MAIN_PACK_NAME',
    packSize: {
        name: 'extralarge',
        key: 'extralarge',
    },
    packTemplates: [{
        name: 'UltraMegaTemplate',
        value: json1,
        key: 'UltraMegaTemplate',
    }, {
        name: 'MegaTemplate',
        value: json2,
        key: 'MegaTemplate',
    },
    {
        name: 'BudgetTemplate',
        value: json3,
        key: 'BudgetTemplate',
    },
    {
        name: 'MiniTemplate',
        value: json4,
        key: 'MiniTemplate',
    }],
    packSizes: [
        {
            name: 'small',
            key: 'small',
        },
        {
            name: 'large',
            key: 'large',
        },
        {
            name: 'extralarge',
            key: 'extralarge',
        }
    ]
};
