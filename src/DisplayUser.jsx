import React from 'react';
import ComponentInstaller from "./ComponentInstaller";

class DisplayUser extends React.Component {
    onChangeValueMax = (e) => {
        let value = parseInt(e.currentTarget.value)
        this.props.adjustValueMax(value)
    }
    onChangeValueMin = (e) => {
        let value = parseInt(e.currentTarget.value)
        this.props.adjustValueMin(value)
    }

    render = () => {
        // let maxV = this.props.state.maxValue;
        // let minV = this.props.state.minValue;
        // let memo = this.props.state.memoryValue;
        //let isDisabledSet=this.props.state.isDisabledSet;

        ///деструктуризация объекта
        const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet, settingMode} = this.props.state;


        let classRedForDisplay = memo === maxV ? "filter-red" : "";
        // /// isDisabledSet: true-когда кнопка SET недоступна для нажатия
        // let isSucsess = isDisabledSet && (maxV > minV) && (minV >= 0);
        // let isSettigs = !isDisabledSet && (maxV > minV) && (minV >= 0);
        // let isError = (maxV <= minV || minV < 0 || maxV < 0);

        ///is Sucsess. is Error is Settigs
        let classRedForMaxValue = (maxV <= minV || maxV < 0) ? "input-red" : "";
        let classRedForMinValue = (maxV <= minV || minV < 0) ? "input-red" : "";


        return (
            <div className={`display`}>
                {settingMode &&
                    <>
                        <ComponentInstaller nameInstaller={"max value:"}
                                            value={maxV}
                                            onChangeFunc={this.onChangeValueMax}
                                            classRed={classRedForMaxValue}/>
                        <ComponentInstaller nameInstaller={"start value:"}
                                            value={minV}
                                            onChangeFunc={this.onChangeValueMin}
                                            classRed={classRedForMinValue}/>
                    </>
                }

                {!settingMode && <span className={`numb ${classRedForDisplay}`}>{memo}</span>}
            </div>
        );
    }
}

export default DisplayUser;