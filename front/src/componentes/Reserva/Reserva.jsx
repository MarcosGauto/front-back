import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const ReservaHome = () => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
    </Space>
  )
};
export default ReservaHome;