
export const ADD_USER = 'ADD_USER';


export const addUser = (user = {}, users = []) => {
    let exists = false;
    let message = '';

    if(users.length > 0){
        for (const u of users) {
            if(u.email === user.email){
                message = "This email has already been registered."
                exists = true;
            }
        }
    }

    if(!exists){
        users.push(user);
    }
    return {
        type: ADD_USER,
        payload: {
            users: users,
            message: message
        }
    }
}