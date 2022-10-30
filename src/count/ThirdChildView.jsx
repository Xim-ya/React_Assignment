import React from 'react';

const ThirdChildView = (props) => {
    const {rightCount} = props;

    return (<section className="third">
            <p>자식3 컴포넌트</p>
            <p>(카운터:{rightCount})</p>
        </section>
    )
}
export default ThirdChildView