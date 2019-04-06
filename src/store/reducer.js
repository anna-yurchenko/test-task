// import Users from '../components/users';
// import Posts from '../components/posts';


// const initialState = {
//     'currentPage': 'users',
//     'pageContent': Users
// }

// const reducer = (state = initialState, action) => {
//         const newState = {...state};

//         if(action.type == 'GETPAGE'){
//             //var pageContent;
//             if(this.props.currentPage == 'users'){
//             newState.pageContent = Users;
//             } else if(this.props.currentPage == 'posts'){
//             newState.pageContent = Posts;
//             }
//             else {
//             newState.pageContent = '';
//             }
//         }
//         // if(action.type === 'getUsers'){
//         //     fetch('https://jsonplaceholder.typicode.com/users')
//         //         .then(response => response.json())
//         //         .then(data => {
//         //         console.log(data) // Prints result from `response.json()` in getRequest
//         //         })
//         //         .catch(error => console.error(error))
//         // }

//         return(newState);
// }

// export default reducer();