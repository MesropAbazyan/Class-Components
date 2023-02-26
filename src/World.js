import {Component} from 'react';

            // export default function World() {
            //     return (
            //         <>
            //             <h2>Function</h2>
            //             <h2>Component</h2>
            //         </>
            //     );
            // }

export default class World extends Component {
    constructor(props) {
        super(props);
        this.state = {                                      // create the "state"
            name: 'Mesrop',
            age: 29,
        };
    }

    componentDidMount() {
        console.log('Mounted');
    }

    // this function is used for optimization
    // if it returns "true", "render" calls again
    // if it returns "false", "componentDidUpdate" won't be called
    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // return false;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updated');
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }

    render() {
        const {name, age} = this.state;                          // read the "state"
        const {saySomething} = this.props;

        return (
            <>
                            {/* <h2>Class</h2> */}
                            {/* <h2>Component</h2> */}
                            {/* <h2>{this.state.name}</h2> */}
                <h2>{name} - {age}</h2>
                <h4>{saySomething}</h4>

                <input
                    type='text'
                    value={name}
                    onChange={(evt) => this.setState({      // change the "state"
                        name: evt.target.value,
                    })}
                />
            </>
        );
    }
}
// 1st calls "constructor", then the "render" function, 
// then the "componentDidMount" function

// A "functional component" is just a plain JavaScript function 
// which accepts "props" as an argument and returns a "React element".

// A "class component" requires you to extend from "React. Component" 
// and create a "render" function which returns a "React element".