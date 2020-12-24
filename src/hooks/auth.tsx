import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContex = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira-web:logged');

        return !!isLogged; // faz u if ternario ... { !! }
    });

    /* Loigin */
    const signIn = (email: string, password: string) => {
        if (email === 'dowglas@maia.com' && password === 'maia') {
            localStorage.setItem('@minha-carteira-web:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha e/ou Usuário Inválidos!');
        }
    }

    //logout
    const signOut = () => {
        localStorage.removeItem('@minha-carteira-web:logged');
        setLogged(false);
    };

    return (
        <AuthContex.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContex.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContex);
    return context;
}

export { AuthProvider, useAuth };