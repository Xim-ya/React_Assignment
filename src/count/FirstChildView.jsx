import React from 'react';

const FirstChildView = (props) => {
    const {leftCount} = props;

    return (<section className="first">
            <p>자식1 컴포넌트</p>
            <p>(카운터:{leftCount})</p>
        </section>
    )
}

export default FirstChildView;