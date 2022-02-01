const cards = [
    {
        id: '1',
        content: 'HelpDesk call AA9999'
    },
    {
        id: '2',
        content: 'HelpDesk call BB9999'
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'To Do',
            cards,
            comment: "\e91e"
        },
        'list-2': {
            id: 'list-2',
            title: 'Development',
            cards: [{
                id: '777',
                content: 'HelpDesk CC9999'
            },
            {
                id: '77',
                content: 'HelpDesk AA9999'
            }]
        },
        'list-3': {
            id: 'list-3',
            title: 'Testing',
            cards: [{
                id: '77997',
                content: 'HelpDesk call DD9999'
            }]
        },
        'list-4': {
            id: 'list-4',
            title: 'Done',
            cards: [{
                id: '777',
                content: 'HelpDesk call FF9999'
            },
            {
                id: '777',
                content: 'HelpDesk GG9999'
            }]
        },
    },
    listsIds: ['list-1', 'list-2', 'list-3', 'list-4'],
}
export default data;