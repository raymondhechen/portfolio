import React, { Component } from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji'

import Navbar from '../components/Navbar';

import AmazonAppImage from '../blog/post1/amazon-app.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Header = styled.div`
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Content = styled.div`
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    color: #333333;
    @media (max-width: 768px) {
        padding: 0 7.5vw;
    }
`;

const T1 = styled.div`
    font-weight: 700;
    font-size: 45px;

    @media (max-width: 768px) {
        font-size: 35px;
    }
`;

const T2 = styled.div`
    font-weight: 500;
    font-size: 25px;
    color: #333;
    line-height: 40px;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

const Section = styled.div`
    width: 100%;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    width: 50%;
    margin-bottom: 20px;
`;

class BlogPage extends Component {
    render() {
        return (
            <Container>
            <Navbar/>
            <Header>
                <Row style={{ marginTop: '50px' }}>
                    <T1>
                        <Emoji symbol='🛒' label='cart'/>{' '}
                        A shopping dispatcher algorithm
                    </T1>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <T2>
                        Dec 8, 2020
                    </T2>
                </Row>
            </Header>
            <Content>
                <Section>
                    Ever since this pandemic started, my parents have been keen to stay away from the public at all costs, erecting a barrier between the world and our home. 
                    This meant getting takeout delivered (which had to be reheated), letting mail sit for days, and picking up groceries curbside.
                    On one particular day, I caught a glimpse of the huge endeavor that Amazon has embarked on with Whole Foods delivery and pickup. 
                    For those who don't know, Whole Foods (which Amazon owns) has created a service to allow customers to sit in designated parking spots and wait for a employee to deliver groceries to the customers' cars.
                    However, on this day, the dispatchers were horrendously late, and no quality explanation was given except that the dispatchers were exceptionally busy.
                </Section>
                <Image src={AmazonAppImage}/>
                <Section>
                They did hint though that the store itself didn't actually handle any requests individually.
                    Rather, Amazon internally handles all requests (through the Amazon app/website), and notifies the store, which the dispatcher then sends an employee to fulfill the request.
                    I could be very wrong about this, but this makes sense from a management standpoint.
                    Although it would probably be cleaner and more scalable for stores to handle requests on their own, having a centralized internal service promises Amazon and their engineers greater control and flexibility.
                </Section>
                <Section>
                    Ok that aside, this got me curious about what the allocation algorithms looked like. 
                    More specifically, I supposed the simplist routine was that a dispatcher hands a deliverer the list of items that a customer has ordered.
                    The deliverer would then roam the aisles picking everything up, before bagging it and finally handing off the baton to the customer.
                    But is any more optimization performed? Are deliverers sent on a specific route through the store to optimize routing times? 
                    Are deliverers dispatched a specific set of orders too that could double up on similar items? 
                    It's extremely unlikely since most store layouts differ in one way or another.
                    Regardless, here I'll at least attempt to devise such an algorithm for a rather generic store.
                </Section>
                <Section>
                    We'll consider two specific problems. <br/>
                    {'\t'}<b>1. How can we allocate orders to deliverers efficiently?</b><br/>
                    {'\t'}<b>2. How can we route deliverers thorugh stores efficiently</b>
                </Section>
            </Content>
        </Container>
        )
    }
}

export default BlogPage;