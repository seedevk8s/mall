import React from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

function ReadPage(props) {

    // const obj = useParams();
    // console.log(obj); // { id: "1" }

    const navigate = useNavigate();

    const {tno} = useParams();
    console.log(tno); // 1

    const moveToModify = (tno) => {
        navigate({
            pathname:`/todo/modify/${tno}`,
            search: queryStr
        })
    }

    const [queryParams] = useSearchParams();
    const page = queryParams.get('page') ? parseInt(queryParams.get('page') ) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size') ) : 10    

    const queryStr = createSearchParams({page: page, size: size}).toString();


    const moveToList = () => {
        navigate({
            pathname:`/todo/List`,
            search: queryStr
        })      
    }

    return (
        <div className="text-3xl">
            Todo Read Page Component {tno}

            <div>
                <button onClick={() => moveToModify(tno)}>Test Modify</button>
                <button onClick={moveToList}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;
