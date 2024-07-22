import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetchFraudClaims();
  }, []);

  const fetchFraudClaims = async () => {
    // Replace this with an actual fetch call to your API.
    // This is just dummy data assuming that 'risk' field represents some risk level evaluated in the backend.
    const res = [
      { claimId: '1', userName: 'John', risk: 'high', reason: 'Fake Details' },
      { claimId: '2', userName: 'Doe', risk: 'medium', reason: 'Misinterpretation' },
      // more claims...
    ];

    setClaims(res);
  };

  const columns = [
    { title: 'Claim ID', dataIndex: 'claimId' },
    { title: 'User Name', dataIndex: 'userName' },
    { 
      title: 'Risk Level', 
      dataIndex: 'risk',
      render: risk => {
        let color = risk === 'high' ? 'red' : 'gold';
        if (risk === 'low'){
          color = 'green';
        }
        return (
          <Tag color={color} key={risk}>
              {risk.toUpperCase()}
          </Tag>
        );
      } 
    },
    { title: 'Reason', dataIndex: 'reason' },
  ];

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Table dataSource={claims} columns={columns} rowKey="claimId" />
    </div>
  );
};

export default AdminDashboard;