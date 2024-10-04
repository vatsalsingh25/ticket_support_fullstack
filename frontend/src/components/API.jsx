import { apiRequest } from '../api';

// In a component or service file
const fetchTickets = async () => {
  try {
    const tickets = await apiRequest('/api/tickets');
    // Handle the response
  } catch (error) {
    // Handle any errors
  }
};
