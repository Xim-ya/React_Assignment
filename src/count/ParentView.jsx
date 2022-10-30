import React, {useState} from 'react';
import "./PassingCountView.css";
import FirstChildView from "./FirstChildView";
import SecondChildView from "./SecondChildView";
import ThirdChildView from "./ThirdChildView";

const ParentView = () => {
    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);
    const resetData = () => {
        setLeftCount(0);
        setRightCount(0);
    }

    const increaseCount = (direction) => {
        if (direction === 'left') {
            setLeftCount((prevData) => prevData + 1);
        } else {
            setRightCount((prevData) => prevData + 1);
        }

    };


    return <section className="parent">
        부모컴포넌트
        <br/>
        (왼쪽카운트 : {leftCount}, 오른쪽카운트: {rightCount})
        <div className='layout'>
            <FirstChildView leftCount={leftCount}/>
            <SecondChildView increaseLeftCount={() => increaseCount('left')}
                             increaseRightCount={() => increaseCount('right')} resetData={resetData}/>
            <ThirdChildView rightCount={rightCount}/>
        </div>

        <button> 다이어로그 버튼 </button>
    </section>
};

export default ParentView;