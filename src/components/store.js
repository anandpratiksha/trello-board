const cards = [
    {
        id: 1,
        content: 'HelpDesk call AA9999'
    },
    {
        id: 2,
        content: 'HelpDesk call BB9999'
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'To Do',
            cards
        },
        'list-2': {
            id: 'list-2',
            title: 'Development',
            cards
        },
    },
    listsIds: ['list-1', 'list-2'],
}
export default data;