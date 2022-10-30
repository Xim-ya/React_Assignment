import React from 'react';

const SecondChildView = (props) => {
    const {increaseLeftCount, increaseRightCount, resetData} = props;



    return (<section className="second">
        <p>자식 2 컴포넌트</p>
        <button onClick={increaseLeftCount} > ◀ 카운터++ </button>
        <button onClick={resetData} > 카운터 0 </button>
        <button onClick={increaseRightCount} > 카운터++ ▶ </button>
    </section>)
}

export default SecondChildView;