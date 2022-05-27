import React from 'react';
import {Timeline,Card} from 'antd';
class ProjectsIntro extends React.Component{
    render(){
        return (
            <div>
                <Card title="Projects" className="bg-light">
                    <Card className="mt-3 mb-3 bg-success text-white font-weight-bolder">
                        <p>
                            We Can Design Numerous Tools, But In This Presentation I Designed Two Items
                        </p>
                    </Card>
                    <Timeline className="mt-3">
                        <Timeline.Item>Diagnose Diabetes That Is Useful In Pharmacotherapy</Timeline.Item>
                        <Timeline.Item>Detect Correlation Between Values And Then Prescribe a Drug/Drugs</Timeline.Item>
                    </Timeline>
			        I Hope You Enjoy !
                </Card>
            </div>
        )
    }
}

export default ProjectsIntro;