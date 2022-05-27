import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import ProjectsIntro from "./pages/Projects";
import Intro from './pages/Introduction';
import Defination from "./pages/WhatIsBioinformatics";
import ICompanies from "./pages/IranianCompanies";
import Usage from "./pages/Usages";
import Foreign from "./pages/ForeignCompanies";
import WhyUse from "./pages/WhyWeShouldUse";
import WhoD from "./pages/WhoDesigns";
import 'bootstrap/dist/css/bootstrap.min.css';
const { TabPane } = Tabs;
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            show:true,
		    minutes:0,
		    seconds:0,
            percent:0,
            vertical:'left'
        }
	
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.seconds < 60 && this.state.seconds !== 59){
                this.setState({
                    seconds:this.state.seconds+1
                })
            }
            else if(this.state.seconds === 59){
                this.setState({
                    seconds:0,
                    minutes:this.state.minutes+1,
                    percent:(this.state.percent<(100-(100/15))?this.state.percent+(100/15):100)
                })
            }
        },1000);
        this.setsize();
        window.addEventListener('resize',this.setsize.bind(this))
	}
    setsize(){
        const size = window.innerWidth;
        if(size < 1200){
            this.setState({
                vertical:'top'
            });
        }
        else{
            this.setState({
                vertical:'left'
            });
        }
    }
    render(){
        return (
            <div className='mx-auto' style={{'marginTop':'20px'}}>
                <Tabs className='mx-auto p-1' tabPosition={this.state.vertical}>
                    <TabPane className='mx-auto px-2' tab="Introduction" key="1">
                        <Intro/>
                    </TabPane>
                    <TabPane  className='mx-auto px-2' tab="What Is Bioinformatics ?" key="2">
                        <Defination/>
                    </TabPane>
                    <TabPane  className='mx-auto px-2' tab="Usages Of Bioinformatics In Medical Sciences" key="3">
                        <Usage />
                    </TabPane>
                    <TabPane className='mx-auto px-2' tab="Who Designs Bioinformatics Tools ?" key="4">
                        <WhoD />
                    </TabPane>
                    <TabPane className='mx-auto px-2' tab="Why We Should Use Bioinformatics In Pharmacy ?" key="5">
                        <WhyUse />
                    </TabPane>
                    <TabPane className='mx-auto px-2' tab="Foreign Bioinformatics Companies" key="6">
                        <Foreign />
                    </TabPane>
                    <TabPane className='mx-auto px-2' tab="Iranian Bioinformatics Companies" key="7">
                        <ICompanies />
                    </TabPane>
                    <TabPane className="mx-auto p-2" tab="Projects" key="8">
                        <ProjectsIntro/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
