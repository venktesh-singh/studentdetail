import React from 'react';

function Listing(props){

    return(

        <>  
            <div class="col-md-4">
                <div class="product-boxes">
                    <img src={props.imgsrc} className="st_ad" alt="myPic"/>
                    <h1><a href={props.link} target="_blank">{props.title}</a></h1>
                    <p>{props.content} </p>
                    <a href={props.link} target="_blank">
                        <button type="button" class="btn btn-primary">Read More</button>
                    </a>
                </div>
            </div>

        </>

    )

}

export default Listing;