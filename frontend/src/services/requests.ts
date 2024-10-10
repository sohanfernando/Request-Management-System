import axios from 'axios';

const API_URL = 'http://localhost:5000/api/requests';

interface RequestData {
  requestId: string;
  createdOn?: string;
  location: string;
  service: string;
  status: 'NEW' | 'IN_PROGRESS' | 'ON_HOLD' | 'REJECTED' | 'CANCELLED';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  department: string;
  requestedBy: string;
  assignedTo: string;
}

export const getRequests = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching requests:', error);
    throw error;
  }
};

export const createRequest = async (requestData: RequestData) => {
  try {
    const response = await axios.post(API_URL, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating request:', error);
    throw error;
  }
};

export const updateRequest = async (id: string, requestData: Partial<RequestData>) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error updating request:', error);
    throw error;
  }
};

export const deleteRequest = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting request:', error);
    throw error;
  }
};
