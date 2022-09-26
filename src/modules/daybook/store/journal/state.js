export default () => ({
        isLoading : true,
        entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Esse voluptate excepteur pariatur fugiat laboris cupidatat aliquip ex velit dolor anim minim magna.',
            picture: null,

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'In quis pariatur duis sunt non ea adipisicing velit ea nisi enim.',
            picture: null,

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Non magna magna ea consectetur occaecat Lorem nostrud labore irure laboris aute sit deserunt.',
            picture: null,

        },
        ]

})