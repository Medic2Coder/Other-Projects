import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


//create a class component named CampsiteInfo
class CampSiteInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: null
        };
    }
}

//export this as default
export default CampSiteInfo;

//inside its render method, check if an objet with the name "campsite" passed in via props can be evaluated as truthy
//if so, render the CampsiteInfo component
//if not, render a div with the text "Loading..."
//inside the div, render a h2 with the text "No Campsite Selected"
//inside the div, render a p with the text "Please select a campsite from the list above"
//inside the div, render a p with the text "If you are not sure which campsite to select, please contact the site administrator"
function render() {
    if (this.state.campsite) {
        return (    //return a div with Boostrap row class as an attribute
            <div className="row">
                <div className="col-md-6">
                    <img src={this.state.campsite.image} alt={this.state.campsite.name}/>
                </div>
                <div className="col-md-6">
                    <h2>{this.state.campsite.name}</h2>
                    <p>{this.state.campsite.description}</p>
                </div>
                <div>
                    <h2>{this.state.campsite.name}</h2>
                    <p>{this.state.campsite.description}</p>
                    <p>{this.state.campsite.cost}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2>No Campsite Selected</h2>
                <p>Please select a campsite from the list above</p>
                <p>If you are not sure which campsite to select, please contact the site administrator</p>
            </div>
        );
    }
}

//add a method named renderCampSite

function RenderCampsite({campsite}) {
    //        variable named CampSite only parameter
//     let campsite = this.props.campsite;
//    if (this.props.campsite) {
//         this.setState({
//             campsite: this.props.campsite
//         });
//     }
    if (this.props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            </div>
        );
    }
    return <div />;
         //return statement for this method with parentheses following the return. Inside the parentheses add a JSX div element with the classes col-md-5 and m-1
    return (
        <div className="col-md-5 m-1">
            <div className="card">
                <div className="card-block">
                    <h3 className="card-title">{campsite.name}</h3>
                    <h4>{campsite.description}</h4>
                    <h4>{campsite.cost}</h4>
                </div>
            </div>
        </div>
    );
}

//method named renderComments with return statement
function RenderComments({comments}) {
    if (this.props.comments) {
        return this.props.comments.map(function(comment) {
            return (
                <div className="col-md-5 m-1">
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">{props.comments}Comments</h4>
                            <p className="card-text">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        return (
            <div>
                <h3>No Comments</h3>
            </div>
        );
    }
    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }

}
    export default CampsiteInfo;




