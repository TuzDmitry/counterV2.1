import React from 'react';
import Button from "./Button";

class ControlPanel extends React.Component {

    render = () => {
        ///деструктуризация объекта
        const {maxValue: maxV, minValue: minV, memoryValue: memo, settingMode} = this.props.state;

        let setDisabledForInc = (memo === maxV) ? true : false;
        let setDisabledForReset = (minV === memo) ? true : false;
        let setDisabledForSet = (maxV <= minV || maxV <= 0 || minV < 0) ? true : false;

        return (
            <div className="controlPanel">

                {!settingMode &&
                <Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>}
                {!settingMode &&
                <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>}

                <Button name={'set'} setDisabled={setDisabledForSet} onClickFunc={this.props.switchMode}/>
            </div>
        );
    }
}

export default ControlPanel;