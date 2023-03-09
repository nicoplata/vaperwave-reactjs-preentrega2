import React, { useState } from "react";

const Like = () => {
    const [ liked, setLike ] = useState(false);

    const clickHandler = () => {
        setLike(!liked)
    }

    return <div onClick={clickHandler}>{liked ? '❤' : '💔'}</div>;
}

export default Like;