import { Form, Input, Button, Upload, message ,Modal} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import React, { useState } from 'react';

const ClaimForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    if(values){
     showModal()
    }
  };

 const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  };

  

  return (
    <div>
    <h1 style={{padding:'10px' }}>Submit Claim</h1>
    <Form style={{padding:'10px'}}name="claim_form" onFinish={onFinish}>
      <h2>Contact Details</h2>
       <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
        <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input placeholder="Email" />
        </Form.Item>
       </div>

      <h2>Bank Details</h2>
       <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
        <Form.Item name="bankName" rules={[{ required: true, message: 'Please input your bank name!' }]}>
            <Input placeholder="Bank Name" />
        </Form.Item>
        <Form.Item name="accountNumber" rules={[{ required: true, message: 'Please input your account number!' }]}>
            <Input placeholder="Account Number" />
        </Form.Item>
      </div>

      <h2>Claim Details</h2>
        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
        <Form.Item name="dateOfAdmission" rules={[{ required: true, message: 'Please input the date of admission!' }]}>
        <DatePicker placeholder="Date Of Admission" />
        </Form.Item>

        <Form.Item name="dateOfDischarge" rules={[{ required: true, message: 'Please input the date of discharge!' }]}>
        <DatePicker placeholder="Date Of Discharge" />
        </Form.Item>
        </div>
        
        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
        <Form.Item name="hospital" rules={[{ required: true, message: 'Please input the hospital!' }]}>
        <Input placeholder="Hospital" />
        </Form.Item>

        <Form.Item name="clinicHospitalPinCode" rules={[{ required: true, message: 'Please input the clinic/hospital pin code!' }]}>
        <Input placeholder="Clinic/Hospital PinCode" />
        </Form.Item>
        </div>

        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>

        <Form.Item name="fullNameOfClinicHospital" rules={[{ required: true, message: 'Please input the full name of clinic/hospital!' }]}>
        <Input placeholder="Full Name of Clinic/Hospital" />
        </Form.Item>

        <Form.Item name="locality" rules={[{ required: true, message: 'Please input the locality!' }]}>
        <Input placeholder="Locality" />
        </Form.Item>
       </div>
        
        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>

        <Form.Item name="treatmentName" rules={[{ required: true, message: 'Please input the treatment name!' }]}>
        <Input placeholder="Treatment Name" />
        </Form.Item>

        <Form.Item name="totalAmountClaimed" rules={[{ required: true, message: 'Please input the total amount claimed!' }]}>
        <Input placeholder="Total Amount Claimed" />
        </Form.Item>
       </div>

      <h2>Upload Documents</h2>
      <Form.Item name="documents">
        <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
       </Upload>
      </Form.Item>
       <Modal title="Success" visible={isModalVisible} onOk={handleOk}>
        <p>Claim details are submitted successfully!</p>
      </Modal>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

  );
};

export default ClaimForm;
