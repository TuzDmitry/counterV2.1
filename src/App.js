import React from 'react';
import './App.css';
import ComponentUser from "./ComponentUser";
import ComponentConfig from "./ComponentConfig";
const counter_state = "counter_state";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    state = {
        minValue: 0,
        maxValue: 5,
        memoryValue: 0,
        isDisabledSet: true,
        settingMode: false
        // isDisabledSet: true-когда кнопка SET недоступна для нажатия
    };
    ///// метод, который будет брать текущий стейт и… сохранять его в localStorage
    saveState = () => {
        ////устанавливаем в localStorage под ключом counter_state  наш стейт переделанный в  джейсон строку JSON.stringify(this.state)

        localStorage.setItem(counter_state, JSON.stringify(this.state));
    }

    restoreState = () => {

        //// считываем сохраненную ранее строку из localStorage
        let stateAsString = localStorage.getItem(counter_state)
        ////если таковая есть, то превращаем строку в объект и призваиваем стейту знаение из стораджа.
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            this.setState(state)
        }
////устанавливаем стейт или пустой или востановленный в стейт

    }

    resetToZero = () => {
        this.setState({memoryValue: this.state.minValue})
    }

    incCounter = () => {
        let newNubmer = parseInt(this.state.memoryValue) + 1;
        if (newNubmer <= this.state.maxValue) {
            this.setState({memoryValue: newNubmer})
        }
    }


    switchMode = () => {
        debugger
        switch (this.state.settingMode) {
            case true:
                if(!this.state.isDisabledSet){this.setState({memoryValue: this.state.minValue,settingMode: false}, this.saveState)}
                break;
            case false:
                this.setState({settingMode: true})
                break;
        }
    }



    adjustValueMax = (value) => {
        this.setState({maxValue: value, isDisabledSet: false}, this.saveState)
        if ((value < 0) || (value <= this.state.minValue)) {
            this.setState({isDisabledSet: true}, this.saveState)
        }
    }
    adjustValueMin = (value) => {
        this.setState({minValue: value, isDisabledSet: false}, this.saveState)
        if ((value < 0) || (value >= this.state.maxValue)) {
            this.setState({isDisabledSet: true}, this.saveState)
        }
    }


    render = () => {
        return (
            <div className="container">
                {/*<ComponentConfig state={this.state}*/}
                {/*                 adjustValueMin={this.adjustValueMin}*/}
                {/*                 adjustValueMax={this.adjustValueMax}*/}
                {/*                 setSettings={this.setSettings}/>*/}

                <ComponentUser state={this.state}
                               incCounter={this.incCounter}
                               resetToZero={this.resetToZero}
                               switchMode={this.switchMode}
                               adjustValueMin={this.adjustValueMin}
                               adjustValueMax={this.adjustValueMax}/>
            </div>
        );
    }
}

export default App;