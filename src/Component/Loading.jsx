import React from 'react';
import MyContainer from './MyContainer';
import { DotLoader } from 'react-spinners';

const Loading = () => {
    return (
        <MyContainer>
            <div className='flex justify-center items-center mt-[400px] max-h-screen'>
                <DotLoader />
            </div>
        </MyContainer>
    );
};

export default Loading;