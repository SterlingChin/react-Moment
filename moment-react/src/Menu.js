import React, { Component } from 'react';
import Switch from 'react-bootstrap-switch';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <h1>Menu</h1>
                <div>
                    Clock<Switch type='boolean' bsSize='small'/>
                </div>
                <div>
                    Clock<Switch type='boolean' bsSize='small'/>
                </div>
                <div>
                    Clock<Switch type='boolean' bsSize='small'/>
                </div>
                <div>
                    Clock<Switch type='boolean' bsSize='small'/>
                </div>
            </div>
        );
    }
}

export default Menu;