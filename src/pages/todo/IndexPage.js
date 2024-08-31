import React, { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

function IndexPage(props) {

    const navigate = useNavigate();

    const handleClickList = useCallback(() => {
        navigate({pathname: 'list'})
    }, []);

    const handleClickAdd = useCallback(() => {
        navigate({pathname: 'add'})
    }, []);


    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2  w-20 font-extrabold text-center underline"
                    onClick={handleClickList}>LIST</div>
                <div className="text-xl m-1 p-2  w-20 font-extrabold text-center underline"
                    onClick={handleClickAdd}>ADD</div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet />
            </div>
        </BasicLayout>   
    )
}

export default IndexPage;

/*
두 개의 handleClick 함수가 정의되어 있습니다. 각각은 React의 useCallback 훅을 사용하여 메모이제이션된 콜백 함수를 생성합니다. 이 함수들은 navigate 함수를 사용하여 사용자를 다른 경로로 이동시킵니다.

handleClickList 함수:

navigate({pathname: 'list'}): 이 함수는 사용자를 'list'라는 경로로 이동시킵니다.
useCallback의 두 번째 인자인 배열([])이 비어 있기 때문에, 이 콜백 함수는 컴포넌트가 렌더링될 때 단 한 번만 생성되고, 그 후 재생성되지 않습니다.
handleClickAdd 함수:

navigate({pathname: 'add'}): 이 함수는 사용자를 'add'라는 경로로 이동시킵니다.
이 함수도 마찬가지로 빈 배열을 두 번째 인자로 사용하여 컴포넌트 렌더링 시 한 번만 생성됩니다.
요약하면, 이 코드는 사용자가 'List' 버튼과 'Add' 버튼을 클릭했을 때 각각 'list' 페이지와 'add' 페이지로 라우팅을 처리하는 데 사용됩니다.
*/

/*
    const handleClickAdd = useCallback(() => {
        navigate({pathname: 'add'})
    }, []);    <----- 두번째 인수 []가 빈 배열인 이유는, 이 콜백 함수가 컴포넌트가 렌더링될 때 단 한 번만 생성되고, 그 후 재생성되지 않도록 하기 위함입니다.
간단히 말해, useCallback을 사용하여 콜백 함수의 재생성을 제어함으로써, 애플리케이션의 성능을 향상시키고, 불필요한 연산을 줄일 수 있습니다.
*/

/*

"메모이제이션"은 계산 결과를 메모리에 저장해두었다가 필요할 때 다시 계산하는 대신 저장된 결과를 재사용하는 프로그래밍 기법을 말합니다. 
이 방식은 동일한 계산을 반복해야 할 때 성능을 획기적으로 개선할 수 있습니다. 특히, 복잡하고 시간이 많이 소요되는 계산 작업에서 유용하게 사용됩니다.

React에서는 useMemo와 useCallback과 같은 훅을 통해 컴포넌트 렌더링 과정에서의 불필요한 계산을 줄여 성능을 최적화할 수 있도록 지원합니다. 
useMemo는 계산된 값을, useCallback은 함수 자체를 메모이제이션하여, 컴포넌트가 불필요하게 자주 업데이트되는 것을 방지합니다.
*/
