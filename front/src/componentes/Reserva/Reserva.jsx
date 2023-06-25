import { DatePicker, Space } from 'antd';


const { RangePicker } = DatePicker;
// cambiar nombre a Calendar
const CalendarDate = ({ setDate }) => {


  return (
    <Space direction="vertical" size={12}  >
      <RangePicker onChange={(value) => {
        setDate(value.map(item =>{
          return (item).format("DD-MM-YYYY")
        }))} } />
    </Space>
  )
};
export default CalendarDate;