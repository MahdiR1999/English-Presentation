import React from 'react';
import {Collapse,Timeline} from "antd";
const {Panel} = Collapse;
class Intro extends React.Component{
    render(){
        return(
            <Collapse className='mx-auto' defaultActiveKey={['1']}>
                <Panel header="Programmer & Presenter" key="1">
                    <p>Mahdi Raef</p>
                </Panel>
                <Panel header="Subject Of Presentation" key="2">
                    <p>Bioinformatics(Mainly AI & Software Engineering) In Medical Sciences(Mainly Pharmacy)</p>
                </Panel>
                <Panel header="What I Will Talk About ?" key="3">
                    <Timeline className="mt-3">
                        <Timeline.Item>What Is Bioinformatics ? And Defination Of It</Timeline.Item>
                        <Timeline.Item>Usages Of Bioinformatics In Medical Sciences Specially In Pharmacy</Timeline.Item>
                        <Timeline.Item>Why We Should Use Bioinformatics In Pharmacy ?</Timeline.Item>
                        <Timeline.Item>Foreign Bioinformatics Companies</Timeline.Item>
                        <Timeline.Item>Ex. Iranian Bioinformatics Companies</Timeline.Item>
                        <Timeline.Item>Let's Do It !</Timeline.Item>
                    </Timeline>
                </Panel>
            </Collapse>
        )
    }
}
export default Intro;