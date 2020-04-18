import React from 'react';
import Button from "./Button";

class ControlPanelUser extends React.Component {

    render = () => {

        ///деструктуризация объекта
        const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet} = this.props.state;

        let setDisabledForInc = (memo === maxV) || !isDisabledSet || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;
        let setDisabledForReset = (minV === memo) || !isDisabledSet || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;

        return (
            <div className="controlPanel">
                <Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>
                <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>
            </div>
        );
    }
}

export default ControlPanelUser;