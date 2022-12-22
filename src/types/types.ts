import { FormEvent } from 'react';
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
    CreateNoteSubmitHandle: ({ id, title, body }: NoteType) => void;
    notes: NoteType[];
    deleteNote: (id: string) => void;
    searchTerm: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search: (e: FormEvent) => void;
    searchFilterNotes: NoteType[];
    // searchEnter: boolean;
    // setSearchEnter: React.Dispatch<React.SetStateAction<boolean>>;
};

// each note obj type 
export type NoteType = {
    id: string;
    title: string;
    body: string;
}

