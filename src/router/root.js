import { createBrowserRouter } from "react-router-dom";
//import MainPage from "../pages/MainPage";
import { Suspense, lazy } from "react";     //React의 내장 함수로, 컴포넌트를 비동기적으로 불러오고 로딩 상태를 관리하는 데 사용
import todoRouter from "./todoRouter";

const Loading = <div className={'bg-red-700'}>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));   //lazy 함수를 사용해 MainPage와 AboutPage 컴포넌트를 비동기적으로 불러옴. 
const About = lazy(() => import("../pages/AboutPage")); //이 컴포넌트들은 필요할 때만 로드되어 초기 로딩 시간을 단축시킴.
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));



const root = createBrowserRouter([                  //createBrowserRouter 함수를 통해 라우터 구성을 설정
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>    //Suspense 컴포넌트는 자식 컴포넌트가 로드될 때까지 fallback으로 지정된 Loading 컴포넌트를 보여주게 함
    },
    {
        path: "about",                              //각각의 라우트는 특정 경로(path)에 접근했을 때 보여질 요소(element)를 지정
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    }
            //이 코드는 비동기적 페이지 로딩과 동적 라우팅을 구현하여 초기 로드 시 성능을 향상시키고, 사용자 경험을 개선합니다. 
]);         //Suspense와 lazy의 조합은 리소스를 효율적으로 사용하면서도, 사용자에게 느린 로드 타임이 발생할 경우 적절한 피드백을 제공할 수 있게 함

export default root;