import React, {memo} from 'react';

type AdditiviesProps = {
    item: string
}

const Additivies:React.FC<AdditiviesProps> = memo(({item}) => {
    return (
        <span key={item}>{item}</span>
    );
});

export default Additivies;