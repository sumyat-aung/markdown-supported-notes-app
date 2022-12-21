// userData type
export type userDataObj = {
    userName: string;
    imgFile: File | null;
}

// userData type (after geting it from localstorage)
export type userObj = {
    userName: string;
    imgFile: string | ArrayBuffer | null;
};

// context value type 
export type Value = {
    accountData: userDataObj;
    setAccountData: React.Dispatch<React.SetStateAction<userDataObj>>;
    OnSubmitHandle: () => void;
};