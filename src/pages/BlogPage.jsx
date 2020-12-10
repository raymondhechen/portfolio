import React, { Component } from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

import Navbar from '../components/Navbar';

import AmazonAppImage from '../blog/post1/amazon-app.jpg';
import GroupingImage from '../blog/post1/grouping.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1100px;
`;

const Header = styled.div`
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-left: 7.5vw;
        margin-right: 7.5vw;
    }
`;

const Content = styled.div`
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        margin: 0 7.5vw;
    }
`;

const Row = styled.div`
    display: flex;
    color: #333333;
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

const T3 = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #333;
    align-self: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Section = styled.div`
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #333;
    width: 100%;
`;

const List = styled.div`
    margin: 5px 0 5px 20px;
`;

const Bold = styled.div`
    font-weight: 500;
    display: inline;
`;

const Image = styled.img`
    width: 50%;
    margin-bottom: 20px;
`;

class BlogPage extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Header>
                    <Row style={{ marginTop: '50px' }}>
                        <T1>
                            <Emoji symbol='🛒' label='cart' /> A grocery
                            dispatcher algorithm
                        </T1>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <T2>Dec 8, 2020</T2>
                    </Row>
                </Header>
                <Content>
                    <T3>The Whole Foods problem</T3>
                    <Section>
                        Ever since this pandemic started, my parents have been
                        keen to stay away from the public at all costs, erecting
                        a barrier between the world and our home. This meant
                        getting takeout delivered (which had to be reheated),
                        letting mail sit for days, and picking up groceries
                        curbside. On one particular day, I caught a glimpse of
                        the huge endeavor that Amazon has embarked on with Whole
                        Foods delivery and pickup. For those who don't know,
                        Whole Foods (which Amazon owns) has created a service to
                        allow customers to sit in designated parking spots and
                        wait for a employee to deliver groceries to the
                        customers' cars. However, on this day, the dispatchers
                        were horrendously late, and no quality explanation was
                        given except that the dispatchers were exceptionally
                        busy.
                    </Section>
                    <Image src={AmazonAppImage} />
                    <Section>
                        They did hint though that the store itself didn't
                        actually handle any requests individually. Rather,
                        Amazon internally handles all requests (through the
                        Amazon app/website), and notifies the store, which the
                        dispatcher then sends an employee to fulfill the
                        request. I could be very wrong about this, but this
                        makes sense from a management standpoint. Although it
                        would probably be cleaner and more scalable for stores
                        to handle requests on their own, having a centralized
                        internal service promises Amazon and their engineers
                        greater control and flexibility.
                    </Section>
                    <Section>
                        Ok that aside, this got me curious about what the
                        allocation algorithms looked like. More specifically, I
                        supposed the simplist routine was that a dispatcher
                        hands a deliverer the list of items that a customer has
                        ordered. The employee (which we'll call a{' '}
                        <Bold>deliverer</Bold> from now on) would then roam the
                        aisles picking everything up, before bagging it and
                        finally handing off the baton to the customer. But is
                        any more optimization performed? Are deliverers sent on
                        a specific route through the store to optimize routing
                        times? Are deliverers dispatched a specific set of
                        orders too that could double up on similar items? It's
                        extremely unlikely since most store layouts differ in
                        one way or another. Regardless, here I'll at least
                        attempt to devise such an algorithm for a rather generic
                        store.
                    </Section>
                    <Section>
                        We'll consider two specific problems.
                        <List>
                            <Bold>
                                1. How can we group orders to deliverers
                                efficiently?
                            </Bold>
                            <br />
                            <Bold>
                                2. How can we route deliverers thorugh stores
                                efficiently
                            </Bold>
                        </List>
                    </Section>
                    <T3>Order grouping</T3>
                    <Section>
                        Let's tackle the first problem. We'll assume the
                        following setup and considerations.
                        <List>
                            1. All orders (<code>O</code>) must be fulfilled.
                            <br />
                            2. There are finite deliverers (<code>D</code>).
                            <br />
                            3. Customer orders cannot be split between
                            deliverers.
                            <br />
                            4. Time cost between switching to another item is a
                            constant unit (distances are ignored), and we'll
                            ignore quantities.
                        </List>
                        From the fourth condition, we can see that we want to
                        collect orders with similar items to cut time. We'll
                        assume that optimization is determined by the time it
                        takes for the last deliverer to complete his or her
                        orders, such that all deliverers are acting
                        concurrently. This is just the max of the deliverers'
                        order sizes.
                    </Section>
                    <Section>
                        Let's consider an example and assume optimization is
                        determined by the summation of time cost for all
                        deliverers. We have 2 deliverers, but 3 orders as
                        follows.
                        <List>
                            <span style={{ color: 'green' }}>1.</span>{' '}
                            <code>
                                {'{'} A, B, C {'}'}{' '}
                            </code>
                            <br />
                            <span style={{ color: 'blue' }}>2.</span>{' '}
                            <code>
                                {'{'} A, B, D {'}'}{' '}
                            </code>
                            <br />
                            <span style={{ color: 'red' }}>3.</span>{' '}
                            <code>
                                {'{'} D, E, F {'}'}{' '}
                            </code>
                        </List>
                        We'll analyze two cases. Assume D<sub>1</sub> picks up
                        orders <span style={{ color: 'green' }}>1</span> and{' '}
                        <span style={{ color: 'blue' }}>2</span>. Then D
                        <sub>1</sub> has time cost of 4 (<code>A, B, C, D</code>
                        ). D<sub>2</sub> has a time cost of 3 for order{' '}
                        <span style={{ color: 'red' }}>3</span> (
                        <code>D, E, f</code>), and taking the max leads to a
                        time cost of 4. What if D<sub>1</sub> had taken orders{' '}
                        <span style={{ color: 'blue' }}>2</span> and{' '}
                        <span style={{ color: 'red' }}>3</span> instead, leaving
                        order <span style={{ color: 'green' }}>1</span> to D
                        <sub>2</sub>? Then D<sub>1</sub> would have a time cost
                        of 5 (<code>A, B, D, E, F</code>), while D<sub>2</sub>{' '}
                        would have a cost of 3 (<code>A, B, C</code>). This
                        gives time cost of 5 units, so we can clearly see that
                        proper allocations do indeed optimize time spent.
                    </Section>
                    <Section>
                        Let's generalize this now. Assume there are{' '}
                        <code>n</code> orders and <code>m</code> deliverers such
                        that <code>m {'≤'} n</code>. Each order could have any
                        number of items, so we'll designate each order's number
                        of items as{' '}
                        <code>
                            n<sub>i</sub>
                        </code>{' '}
                        where <code>i</code> is the order number. The time cost
                        per deliverer is{' '}
                        <code>
                            d<sub>j</sub>
                        </code>{' '}
                        where <code>j</code> is the deliverer number. We can
                        start to think of this problem as a grouping problem,
                        such that we want to group orders into <code>n</code> or
                        less collections where the largest collection size is
                        minimized. We have given ourselves a little leeway too
                        since only the largest collection needs to be minimized.
                    </Section>
                    <Image style={{ width: '35%' }} src={GroupingImage} />
                    <Section>
                        Note that we need to reduce the number of collections to
                        at least <code>m</code>, the number of deliverers.
                        Furthermore, note that once we have reached{' '}
                        <code>m</code> collections or less, no further
                        collecting is going to reduce the max collection size.
                        That's because grouping can only increase (or maintain)
                        the current max collection size. So given that, we
                        actually only need to worry about if the current number
                        of collections are <code>{'>'} m</code>. And if they
                        are, we can approach this greedily. We want to reduce
                        the largest orders as much as possible, but as said
                        previously, grouping with them will only increase their
                        sizes (assuming the orders differ). So we'll have to
                        focus on grouping the smaller orders, and it doesn't
                        quite matter too much how we group them together as long
                        as the resulting size does not exceed the max
                        collection's. We can't predict if the minimum grouping
                        will do that, so we'll just have to efficiently group
                        anywhere we can.
                    </Section>
                    {/* <Section>
                        We'll start with the smallest collections and work up to
                        grouping larger ones. This approach is OK because if we
                        were to group large collections first, we're more likely
                        to exceed the current max size. And grouping smaller
                        collections first doesn't won't cause issues later down
                        the line with larger collections since by then, we'll
                        have encountered the same overlaps that would have
                        originally occurred.
                    </Section> */}
                    <Section>
                        The algorithm is then as follows.
                        <List>
                            1. Every order starts as its own collection.
                            <br />
                            2. If the number of collections is less than or
                            equal to the number of deliverers, exit.
                            <br />
                            3.
                        </List>
                    </Section>
                </Content>
            </Container>
        );
    }
}

export default BlogPage;
