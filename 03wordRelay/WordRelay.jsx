const React = require('react')
const { Component } = React;

class WordRelay extends Component {
    state = {
        word : '박창희',
        value : '',
        result : '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if( this.state.word[this.state.word.length-1] === this.state.value[0]) {
            this.setState({
                result : '정답',
                word : this.state.value,
                value : '',
            })
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value : '',
            })
            this.input.focus();
        }
    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value}) // currentTarget 과 Target의 차이에 대해 알아보자
    }

    input;

    onRefInput = (c) => {
        this.input = c
    }

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit= {this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    {/* value와 onChange 와는 세트 아니면 defaultvalue를 해야된다. */}
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = WordRelay;