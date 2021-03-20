import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        console.log("null")
        return (
            <div>

            </div >

        );
    }
}


function RenderComments({ comments }) {

    if (comments != null) {
        console.log("coments not null")

        const Comments = (comments).map((comment) => {
            return (
                <div >
                    <ul key={comment.id} class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            );
        });
        return (
            <div>
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments</h4>
                </div>
                {Comments}
            </div>
        );
    }


    else {
        console.log("comments null")
        return (
            <div>

            </div >

        );
    }

}

const DishDetail = (props) => {

    if (props.dish !== null && props.dish !== undefined) {

        console.log("DishDetail  not null")

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }

    else {
        console.log("null")
        return (
            <div>

            </div >

        );
    }


}


export default DishDetail;