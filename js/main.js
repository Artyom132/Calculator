var arrButtons = [
    {
       id: 1, text: "C" , action: "method", class: "btn-gray"
    },
    {
        id: 2, text: "%" , action: "method", class: "btn-gray"
    },
    {
        id: 3, text: "√" , action: "method", class: "btn-gray"
    },
    {
        id: 4, text: "÷" , action: "method", class: "btn-green"
    },
    {
       id: 5,  text: "7" , action: "number", class: "btn"
    },
    {
        id: 6, text: "8" , action: "number", class: "btn"
    },
    {
        id: 7, text: "9" , action: "number", class: "btn"
    },
    {
        id: 8, text: "×" , action: "method", class: "btn-green"
    },
    {
        id: 9, text: "4" , action: "number", class: "btn"
    },
    {
        id: 10, text: "5" , action: "number", class: "btn"
    },
    {
        id: 11, text: "6" , action: "number", class: "btn"
    },
    {
        id: 12, text: "-" , action: "method", class: "btn-green"
    },
    {
        id: 13, text: "1" , action: "number", class: "btn"
    },
    {
        id: 14, text: "2" , action: "number", class: "btn"
    },
    {
        id: 15, text: "3" , action: "number", class: "btn"
    },
    {
        id: 16, text: "+" , action: "method", class: "btn-green"
    },
    {
        id: 17, text: "0" , action: "number", class: "btn"
    },
    {
        id: 18, text: "." , action: "method", class: "btn"
    },
    {
        id: 19, text: "" , action: "method", class: "btn-delete"
    },
    {
        id: 20, text: "=" , action: "method", class: "btn-green"
    }


];

class Result extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        return <div className="result-wrapper">
            <div className="result-wrapper-padding">
                <span className="history">{this.props.history}</span>
                <span className="result">{this.props.result}</span>
            </div>
        </div>;
    }
}

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.HandleBtnClick = this.HandleBtnClick.bind(this);
    }
    HandleBtnClick(event){
        console.log(event.currentTarget.dataset.action );
        console.log(event.currentTarget.textContent );
    }
    render(){
        return <button onClick={this.HandleBtnClick} data-action={this.props.action} className={"btn " + this.props.color}>{this.props.text}</button>;
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: "-",
            setCurrentNumber: "",
            result: "0"
        };
    }
    render(){
        return <div className="calc">
            <Result history={this.state.history} result={this.state.result} />
            <div className="buttons-wrapper clearfix">
                {
                    arrButtons.map(function (el) {
                        return <Btn
                            key={el.id}
                            color={el.class}
                            text={el.text}
                            action={el.action}
                        />;
                    })
                }
            </div>;
        </div>
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("application")
);