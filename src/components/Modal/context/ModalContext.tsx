import React, { createContext, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export interface ModalContextInterface {
	isSuccess: boolean;
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	successEmail: string;
	setSuccessEmail: React.Dispatch<React.SetStateAction<string>>;
}

const initialState = {
	isSuccess: false,
	setIsSuccess: () => false,
	successEmail: '',
	setSuccessEmail: () => '',
};

export const ModalContext = createContext<ModalContextInterface>(initialState);

const ModalContextProvider: React.FC<Props> = ({ children }) => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [successEmail, setSuccessEmail] = useState<string>('');

	return (
		<ModalContext.Provider
			value={{
				isSuccess,
				setIsSuccess,
				successEmail,
				setSuccessEmail,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
