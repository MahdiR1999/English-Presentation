import React from "react";
import {Card,Timeline} from "antd";

const WhyList = [
    'Accuracy',
    'Development Speed',
    'Cost Efficiency',
    'Safety'
];
class WhyUse extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Card title={'Why We Should Use ?'}>
                <Timeline>
                    {
                        WhyList.map((el)=>{
                            return(
                                <Timeline.Item>
                                    {el}
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
            </Card>
        )
    }
};
export default WhyUse;