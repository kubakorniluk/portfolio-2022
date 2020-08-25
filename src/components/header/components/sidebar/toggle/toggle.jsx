import React from 'react';
import './toggle.scss';

class Toggle extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            clicked: false
        }
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <i
                onClick={this.handleClick} 
                className={this.state.clicked ? 'sidebar__toggle sidebar__toggle--active' : 'sidebar__toggle'}
            >
                <span className="sidebar__toggle--bar"></span>
                <span className="sidebar__toggle--bar"></span>
                <span className="sidebar__toggle--bar"></span>
            </i>
        );
    }
}
 
export default Toggle;