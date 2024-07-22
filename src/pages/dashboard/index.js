import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    // Replace this with an actual fetch call to your API.
    // This is just dummy data.
    const res = [
      { claimId: '1', status: 'pending', amount: '500', admissionDate: '2021-07-01', dischargeDate: '2021-07-07', hospital: 'Hospital1' },
      { claimId: '2', status: 'approved', amount: '200', admissionDate: '2021-07-10', dischargeDate: '2021-07-14', hospital: 'Hospital2' },
      // add more claim data...
    ];

    setClaims(res);
    setLoading(false);
  };

  const columns = [
    { title: 'Claim ID', dataIndex: 'claimId' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Amount', dataIndex: 'amount' },
    { title: 'Admission Date', dataIndex: 'admissionDate' },
    { title: 'Discharge Date', dataIndex: 'dischargeDate' },
    { title: 'Hospital', dataIndex: 'hospital' },
    // add more columns as needed...
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      
      {loading ? <Spin /> : 
        <div>
        <Table dataSource={claims} columns={columns} rowKey="claimId" />

        <BarChart
          width={500}
          height={300}
          data={claims}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="claimId" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
        </div>
      }
    </div>
  );
};

export default Dashboard;