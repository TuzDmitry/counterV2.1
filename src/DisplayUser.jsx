import React from 'react';

class DisplayUser extends React.Component {

    render = () => {
        // let maxV = this.props.state.maxValue;
        // let minV = this.props.state.minValue;
        // let memo = this.props.state.memoryValue;
        //let isDisabledSet=this.props.state.isDisabledSet;

        ///деструктуризация объекта
        const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet} = this.props.state;


        let classRedForDisplay = memo === maxV ? "filter-red" : "";
        /// isDisabledSet: true-когда кнопка SET недоступна для нажатия
        let isSucsess = isDisabledSet && (maxV > minV) && (minV >= 0);
        let isSettigs = !isDisabledSet && (maxV > minV) && (minV >= 0);
        let isError = (maxV <= minV || minV < 0 || maxV < 0);

        ///is Sucsess. is Error is Settigs


        return (
            <div className={`display`}>

                {isSucsess && <span className={`numb ${classRedForDisplay}`}>{memo}</span>}
                {/*{!this.props.state.isDisabledSet &&*/}
                {isSettigs && <span className="message">enter values and press 'set'</span>}

                {isError && <span className="filter-red">incorrect value</span>}

            </div>
        );
    }
}

export default DisplayUser;