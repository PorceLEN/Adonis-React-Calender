export type UserContextType = {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}