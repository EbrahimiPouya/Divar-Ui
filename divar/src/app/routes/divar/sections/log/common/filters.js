export default [
    {
        label: 'نام',
        key: 'name',
        type: 'string'
    },
    {
        label: 'تاریخ',
        key: 'date',
        type: 'date'
    },
    {
        label: 'عنوان آگهی',
        key: 'title',
        type: 'string'
    },
    {
        label: 'فیلد',
        key: 'field',
        type: 'select',
        options: [
            {
                value: 'عنوان',
                label: 'عنوان',
            },
            {
                value: 'قیمت',
                label: 'قیمت',
            },
        ]
    },
]
