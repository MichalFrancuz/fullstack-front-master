 import axios from "axios";

const axiosConfig = axios.create({
  baseURL: 'http://localhost:8005',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('No token found in localStorage');
    }
    if (['post', 'put', 'patch'].includes(config.method)) {
      config.headers['Content-Type'] = 'application/json';
    }
    console.log('Request Headers:', config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      console.error('Token has expired or is invalid. Redirecting to login.');
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;

const loginUser = async (credentials) => {
  try {
    const response = await axiosConfig.post('/auth/login', credentials);
    const userId = response.data.userId;
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      console.error('No userId found in response');
    }
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const saveUser = (user) => {
  return axiosConfig.post('/auth/signup', user);
};

const registerUser = async (user) => {
  try {
    const response = await saveUser(user);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

const getUserId = () => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    throw new Error("User ID is not available.");
  }
  return userId;
};

const getEmployersByUser = () => {
  const userId = getUserId();
  return axiosConfig.get(`/users/${userId}/employers`);
};

const addEmployer = (employer) => {
  const userId = getUserId();
  return axiosConfig.post(`/users/${userId}/employers`, employer);
};

const editEmployer = (employerId, employer) => {
  const userId = getUserId();
  return axiosConfig.put(`/users/${userId}/employers/${employerId}`, employer);
};

const deleteEmployer = async (employerId, employer) => {
  const userId = getUserId();
  return axiosConfig.delete(`/users/${userId}/employers/${employerId}`, employer);
}
  
export { loginUser,registerUser, saveUser, getEmployersByUser, addEmployer, editEmployer, deleteEmployer };
