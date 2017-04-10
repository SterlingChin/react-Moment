import React, { Component } from 'react';

class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: 'We are each gifted in a unique and important way. It is our privilege and our adventure to discover our own special light',
            author: 'Mary Dunbar',
        }
    }
    // componentWillMount(){
    //         const BASE_URL = 'http://quotes.rest/quote/random.json'
    //         fetch(BASE_URL, {
    //             method: 'GET'
    //         }).then(response => response.json())
    //         .then(json => {
    //             console.log(json)
    //             this.setState({
    //                 quote : json.contents.quotes[0].quote,
    //                 author: json.contents.quotes[0].author
    //             })
    //         })
            
    // }

    render() {
        return (
            <div>
                <div>
                    "{this.state.quote}"
                </div> 
                <div>
                ~ {this.state.author}
                </div>
            </div>
        );
    }
}

export default Quote;