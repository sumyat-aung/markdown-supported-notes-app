// userData type
export type userDataObj = {
    userName: string;
    imgFile: File | null;
}

// context value type 
export type Value = {
    accountData: userDataObj;
    setAccountData: React.Dispatch<React.SetStateAction<userDataObj>>;
    OnSubmitHandle: () => void;
};