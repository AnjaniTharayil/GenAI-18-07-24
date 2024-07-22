import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <Title>Welcome to Epam Health+</Title>
      <p>Your health is our priority. Submit a claim or view your dashboard below.</p>
      <Button type="primary" style={{ margin: '10px' }} onClick={() => navigate('/submitClaim')}>Submit Claim</Button>
      <Button type="primary" style={{ margin: '10px' }} onClick={() => navigate('/dashboard')}>Dashboard</Button>
    </div>
  )
}

export default HomePage;