export const ADD_HOSTEL = 'ADD_HOSTEL';

export const addHostel = (hostel = {}, hostels = []) => {
    let exists = false;
    if(hostels.length > 0){
        for (const h of hostels) {
            if(h.name === hostels.name){
                exists = true;
            }
        }
    }

    if(!exists){
        hostels.push(hostel);
    }
    
    return {
        type: ADD_HOSTEL,
        payload: {
            hostels: hostels
        }
    }
}