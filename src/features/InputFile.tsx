import React, {ChangeEvent, useRef} from 'react';

type InputFilePropsType = {
    file: File | undefined
    setFile: (file: File) => void
}

const InputFile = (props: InputFilePropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            props.setFile(file)
        }
    };
    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };
    return (
        <div>
            <button onClick={selectFileHandler}>upload file</button>
            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={uploadHandler}
                accept=".docx"
            />
        </div>
    );
};

export default InputFile;