import React from 'react';
import {Table, Card} from "antd";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Country',
        dataIndex: 'country',
    },
];
const data = [
    {
        name: 'Amazon Web Services',
        country: 'USA'
    },
    {
        name: 'Atos',
        country: 'France'
    },
    {
        name: 'Clear Labs',
        country: 'USA'
    },
    {
        name: 'Roche',
        country: 'Switzerland'
    },
    {
        name: 'Tempus',
        country: 'USA'
    }
];
class Foreign extends React.Component{
    render(){
        return(
           <Card title={'List Of Companies'}>
               <Table pagination={false} columns={columns} dataSource={data} />
               <h4 className="mt-5">
                   And Also Many More !
               </h4>
           </Card>
        )
    }
}
export default Foreign;