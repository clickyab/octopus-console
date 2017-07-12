import {notification} from 'antd';

export const http500Error = () => {
    notification['error']({
        message: 'HTTP 500',
        description: 'Internal Server Error - please try again later',
    });
};