import React from 'react';
import Listing from './Listing';

function StudentList(){

    return(

        <>  
            <div class="add_main_div">
             
                <div class="container add_home_page">
                    <div class="row">
                        
                        <h1>
                            Student Detail Listing
                        </h1>
                        <Listing
                        imgsrc="https://picsum.photos/200/100"
                        title="One of three columns"
                        link="https://reactjs.org/docs/components-and-props.html"
                        content="It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is"
                        />

                        <Listing
                        imgsrc="https://picsum.photos/100/100"
                        title="Two of three columns"
                        link="https://reactjs.org/docs/components-and-props.html"
                        content="It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is"
                        />

                        <Listing
                        imgsrc="https://picsum.photos/300/100"
                        title="Three of three columns"
                        link="https://reactjs.org/docs/components-and-props.html"
                        content="It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is"
                        />

                        <Listing
                        imgsrc="https://picsum.photos/400/100"
                        title="Four of three columns"
                        link="https://reactjs.org/docs/components-and-props.html"
                        content="It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is"
                        />

                    </div>
                </div>
            </div>
        </>

    )

}

export default StudentList;