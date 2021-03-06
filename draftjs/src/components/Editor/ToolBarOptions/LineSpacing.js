import request from "request";
import {Select} from "antd";
import React from "react";
const Option = Select.Option;

const LineSpacingOption = (props) => {

    function changeLineSpacing(value) {
        const obj = {'noteID': props.noteID, 'lineSpacing': value}
        const changeLineSpacing = {
            method: 'POST',
            url: 'https://writefree-backend.herokuapp.com/change-line-spacing',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        };
        request(changeLineSpacing, (error, response, body) => {
            props.setDocumentLineSpacing(value);
        });
    }

    return (
        <div>
            <h4>Line Spacing</h4>
            <Select defaultValue={props.lineSpacing} style={{ width: 150 }} onChange={(value) => changeLineSpacing(value)}>
                <Option value="0.06">Default</Option>
                <Option value="0.6">1.6</Option>
                <Option value="1">2</Option>
                <Option value="4">5</Option>
            </Select>

        </div>
    );

}

export default LineSpacingOption;