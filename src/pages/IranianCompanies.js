import React from 'react';
import {Card,Carousel, Image } from 'antd';
import One from './images/1.jpg';
import Two from './images/2.jpg';
import Three from './images/3.jpg';
import Four from './images/4.jpg';
import Five from './images/5.jpg';
import Six from './images/6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin: '0px'
};
class ICompanies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dotPosition:0
        }
    }

    render(){
        return(
            <div>
                <Card about={'OK'} title={'Iranian Bioinformatics Companies (Aryogen)'}>
                    <Carousel dotPosition='right'>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mb-0">
                                    <div className="col-xl-3">
                                        <Image src={One} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Haemophilia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mt-0">
                                    <div className="col-xl-3">
                                        <Image src={Two} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Chinese Hamster Ovary Cell
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Rheumatoid Arthritis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mt-0">
                                    <div className="col-xl-3">
                                        <Image src={Three} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Chinese Hamster Ovary Cell
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Hodgkin's Lymphoma , ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mt-0">
                                    <div className="col-xl-3">
                                        <Image src={Four} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Manufacturer Not Provided Sufficient Information
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Breast Cancer , Gastric Cancer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mt-0">
                                    <div className="col-xl-3">
                                        <Image src={Five} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Chinese Hamster Ovary Cell
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Symptoms Of Autoimmune Diseases
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div className="row mt-0">
                                    <div className="col-xl-3">
                                        <Image className='bg-white' src={Six} height={500} width={450}></Image>
                                    </div>
                                    <div className="col-xl-2">
                                    </div>
                                    <div className="col-xl-6 mx-auto justify-content-center text-center">
                                        <p className="ml-5 text-white text-center">
                                            Technology : Recombinant DNA
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Cell Used : Chinese Hamster Ovary Cell
                                        </p>
                                        <p className="ml-5 text-white text-center">
                                            Treatment : Hodgkin's Lymphoma , ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
export default ICompanies;