import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const loginUser = async ({ email, password }) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.signin, {
      email,
      password,
    });

    console.log('로그인 응답데이터 : ', response.data);
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

export default loginUser;
