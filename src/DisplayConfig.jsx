import React from 'react';
import ComponentInstaller from "./ComponentInstaller";

class DisplayConfig extends React.Component {

    onChangeValueMax = (e) => {
        let value = parseInt(e.currentTarget.value)
        this.props.adjustValueMax(value)
        // alert(e.currentTarget)
        // debugger;
    }
    onChangeValueMin = (e) => {
        let value = parseInt(e.currentTarget.value)

        this.props.adjustValueMin(value)
        // alert(e.currentTarget)
        // debugger;
    }

    render = () => {
        // let maxV = this.props.state.maxValue;
        // let minV = this.props.state.minValue;
        const {maxValue: maxV, minValue: minV} = this.props.state;

        let classRedForMaxValue = (maxV <= minV || maxV < 0) ? "input-red" : "";
        let classRedForMinValue = (maxV <= minV || minV < 0) ? "input-red" : "";

        return (
            <div className="display">

                <ComponentInstaller nameInstaller={"max value:"}
                                    value={maxV}
                                    onChangeFunc={this.onChangeValueMax}
                                    classRed={classRedForMaxValue}/>
                <ComponentInstaller nameInstaller={"start value:"}
                                    value={minV}
                                    onChangeFunc={this.onChangeValueMin}
                                    classRed={classRedForMinValue}/>
            </div>
        );
    }
}

export default DisplayConfig;