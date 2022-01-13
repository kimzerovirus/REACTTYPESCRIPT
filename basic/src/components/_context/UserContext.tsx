import React, { createContext, useState } from 'react';
export type AuthUser = {
	name: string;
	email: string;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
	children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null); //초기에는 null이지만 user와 setUser가 vaule로 들어가면 타입이 변경된다.
// export const UserContext = createContext({} as UserContextType);
//타입 속이기 >>> 이렇게 하면 UserComponent에서 UserContext에 대한 null체크를 해주지 않아도 된다.

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null); //유저가 로그인

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
