import React from 'react';
import Button from "./Button";

class ControlPanelUser extends React.Component {

    render = () => {

        ///деструктуризация объекта
        const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet,settingMode} = this.props.state;

        let setDisabledForInc = (memo === maxV) ? true : false;
        let setDisabledForReset = (minV === memo) ? true : false;

        return (
            <div className="controlPanel">

                {!settingMode&&<Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>}
                {!settingMode&&<Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>}
                {/*<Button name={'set'} onClickFunc={this.props.setSettings}/>*/}
                <Button name={'set'} setDisabled={isDisabledSet} onClickFunc={this.props.switchMode}/>
            </div>
        );
    }
}

export default ControlPanelUser;