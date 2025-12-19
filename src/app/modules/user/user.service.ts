import { User } from "./user.model";

// under in asyc funftions
export const createUserToDB = async () => { // connet the data and send it in the data base

    // Query
    const user = new User({
        id: '45454',
        role: 'admin',
        password: 'dfsdfsd',
        name: {
            firstName: 'Fateen',
            middleName: 'islam',
            lastName: 'jahin',
        },
        gender: 'male',
        email: 'muksitul44@gmail.com'
    }
    );
    await user.save();
}

