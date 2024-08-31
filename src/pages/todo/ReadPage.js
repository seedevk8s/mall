import React from "react";
import { useParams } from "react-router-dom";

function ReadPage(props) {

    // const obj = useParams();
    // console.log(obj); // { id: "1" }

    const {tno} = useParams();
    console.log(tno); // 1

    return (
        <div className="text-3xl">
            Todo Read Page Component
        </div>
    );
}

export default ReadPage;
