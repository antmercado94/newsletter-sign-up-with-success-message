import React, { createContext, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export interface ModalContextInterface {
	isSuccess: boolean;
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {
	isSuccess: false,
	setIsSuccess: () => false,
};

export const ModalContext = createContext<ModalContextInterface>(initialState);

const ModalContextProvider: React.FC<Props> = ({ children }) => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	return (
		<ModalContext.Provider
			value={{
				isSuccess,
				setIsSuccess,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
