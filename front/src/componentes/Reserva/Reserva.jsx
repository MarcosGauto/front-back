import { DatePicker, Space } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const ReservaHome = () => {
const [date, setDate ] = useState ([])
console.log(date);

  return (
    <Space direction="vertical" size={12}  >
      <RangePicker onChange={(value) => {
        setDate(value.map (item =>{
          return (item).format("DD-MM-YYYY")
        }))} } />
    </Space>
  )
};
export default ReservaHome;