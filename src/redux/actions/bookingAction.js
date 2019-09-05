
export const BOOKING = 'BOOKING';

export const addBooking = (hostel = {}, hostels = []) => {
    let message = '';
    let exists = false;
    if(hostels.length > 0){
        for(const h of hostels){
        if (h.available < hostel.amount) {
            message = "ห้องมีจำนวนคงเหลือน้อยกว่าที่เลือกเข้ามา"
        }
        exists= true;
    }
    }
    if(!exists){
        hostels.push(hostel); 
    }

    const available = 2;

    return {
        type: BOOKING,
        payload: {
            hostels: hostels,
            message: message,  
            available: available 
        }
    }
}