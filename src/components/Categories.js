import React, { Component } from 'react';
import { stat } from 'fs';
import { loadPartialConfig } from '@babel/core';
import {
    Link
} from "react-router-dom";
import { Button, Popover } from 'react-bootstrap';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


import Form from 'react-bootstrap/Form'

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: null
        }
    }
    componentDidMount() {
        const catergoryURL = "http://localhost:3000/categories";
        fetch(catergoryURL).then((list) => {
            list.json().then((listResult) => {
                this.setState({ categories: listResult })
            })
        })

    }
   


    render() {
        console.log(this.state.categories)
        return (
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">+Add New Category</Popover.Title>
                    <Popover.Content>
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="input" placeholder="Add..." />
                            </Form.Group>
                            <Button variant="primary">Submit</Button>
                        </Form>
                    </Popover.Content>
                </Popover>}>
                    <Button variant="success">+Add New Category</Button>
                </OverlayTrigger>
                <ul>


                    {this.state.categories ? this.state.categories.map((item, i) => <li><Link to={"/category/" + item.name}>{item.name}</Link></li>) :
                        <div>loading...</div>}
                </ul>
            </div>
        );
    }
}

export default Categories;