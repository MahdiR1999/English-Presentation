import React from 'react';
import {Card} from "antd";
class WhoD extends React.Component{
    render(){
        return (
            <Card title={'Who Designs ?'}>
                <p>
                    Software Engineers & Bioinformatics Engineer Of Top Universities Design Bioinformatics Tools
                </p>
                <Card className="bg-success text-white font-weight-bolder mt-3">
                    <p>
                        Bioinformatics Is One Of The Orientations In Computer Engineering And Also Pharmacy
                    </p>
                </Card>
                <Card className="bg-success text-white font-weight-bolder mt-3">
                    <p>
                        Bioinformatics In Pharmacy Will Be Taught Soon !
                    </p>
                </Card>
            </Card>
        )
    }
}
export default WhoD;