import React, { useState} from 'react';
import InputFile from "./InputFile";


const MainForm = () => {
    const [file, setFile] = useState<File>()
    console.log(file)
    return (
        <div>
                <InputFile file={file} setFile={setFile}/>

        </div>
    );
};

export default MainForm;