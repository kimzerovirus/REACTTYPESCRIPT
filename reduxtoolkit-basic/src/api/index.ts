import axios from 'axios'

interface User {
    login: string;
}

export interface UserList {
    data: User[]
}

export const fetchList = (): Promise<UserList> => {
	return axios.get("https://api.github.com/users");
};