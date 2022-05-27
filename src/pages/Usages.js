import React from 'react';
import {Timeline,Card} from 'antd';
const Items = [
    'Personal Medicine',
    'Drug Discovery',
    'Preventive Medicine',
    'Predictive',
    'Medicine',
    'Gene Therapy'
];
class Usage extends React.Component{
    render(){
        return (
            <div>
                <Card title="Usages Of Bioinformatics In Medical Fields" className="bg-light">
                    <Timeline>
                        {Items.map((el)=>{
                            return (
                                <Timeline.Item>
                                    {el}
                                </Timeline.Item>
                            )
                        })}
                    </Timeline>
                </Card>
            </div>
        )
    }
}

export default Usage;