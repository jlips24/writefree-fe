import request from "request";
import {Select} from "antd";
import React from "react";
import '../../../css/note.css';
const Option = Select.Option;

const WordSpacingOption = (props) => {

    function changeWordSpacing(value) {
        const obj = {'noteID': props.noteID, 'wordSpacing': value}
        const changeWordSpacing = {
            method: 'POST',
            url: 'https://writefree-backend.herokuapp.com/change-word-spacing',
            body: JSON.stringify(obj),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        };
        request(changeWordSpacing, (error, response, body) => {
            props.setDocumentWordSpacing(value);
        });
    }

    return (
        <div className={"word-spacing"}>
            <h4>Word Spacing</h4>
            <Select defaultValue={props.wordSpacing} style={{width: 150}} max={51} onChange={(value) => changeWordSpacing(value)}>
                <Option value="0.9px">Default</Option>
                <Option value="10px">10px</Option>
                <Option value="20px">20px</Option>
                <Option value="50px">50px</Option>
            </Select>
        </div>
    );
}

export default WordSpacingOption;